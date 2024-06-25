import express, { query } from "express";
import bodyParser from "body-parser";
import pg from "pg";
import 'dotenv/config'

const app = express();
const port = process.env.APP_PORT;

const db = new pg.Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PW,
  port: process.env.DB_PORT
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let books = [];

async function refreshList(orderBy = "date_updated") {
  let sortCondition = `ORDER BY ${orderBy} DESC`;
  try {
    let queryRes = await db.query(
      `SELECT *, TO_CHAR(date_updated, 'DD Mon YYYY') date_updated_str FROM books ${sortCondition}`
    );
    books = queryRes.rows;
    console.log(books);
  } catch (err) {
    console.log(err);
  }
}

app.get("/", async (req, res) => {
  // Validate query parameter for sort filter
  let sortBy = "date_updated";
  if (req.query.sortBy) {
    if (req.query.sortBy == "date_updated" || req.query.sortBy == "rating") {
      sortBy = req.query.sortBy;
    }
  };

  await refreshList(sortBy);
  res.render("home.ejs", {
    books: books,
    mode: "view",
    sortBy: sortBy
  });
});

app.post("/filter", async (req, res) => {
  let filterValue = req.body.sortBy;
  if (filterValue) {
    res.redirect(`/?sortBy=${filterValue}`);
  } else {
    res.redirect("/");
  }
})

app.get("/view/:id", async (req, res) => {
  await refreshList();
  var selectedBook = books.find(book => book.id == req.params.id)
  console.log(selectedBook);
  if (selectedBook) {
    res.render("crud.ejs", {
      books: books, 
      mode: "view",
      selected: selectedBook,
      bookId: req.params.id
    });
  } else {
    res.status(404).send("Book not found");
  }
});

app.get("/new", async (req, res) => {
  // await refreshList();
  res.render("crud.ejs", {
    books: books,
    mode: "new",
    selected: null
  });
});

app.post("/new", async (req, res) => {
  let postData = req.body;
  try {
    let insertRes = await db.query(
      `INSERT INTO books (title, author, rating, cover_img, review, date_updated) VALUES ($1, $2, $3, $4, $5, NOW()) RETURNING *`,
      [postData.title, postData.author, postData.rating, postData.imgUrl, postData.review]
    )
    console.log(insertRes);
  } catch (err) {
    console.log(err);
  }

  res.redirect("/");
})

app.get("/edit/:id", async (req, res) => {
  await refreshList();
  var selectedBook = books.find(book => book.id == req.params.id)
  console.log(selectedBook);
  if (selectedBook) {
    res.render("crud.ejs", {
      books: books, 
      mode: "edit",
      selected: selectedBook,
      bookId: req.params.id
    });
  } else {
    res.status(404).send("Book not found");
  }
});

app.post("/edit/:id", async (req, res) => {
  let postData = req.body;
  try {
    let updateRes = await db.query(
      `UPDATE books SET title = $1, author = $2, rating = $3, cover_img = $4, review = $5, date_updated = NOW() WHERE id = $6 RETURNING *`,
      [postData.title, postData.author, postData.rating, postData.imgUrl, postData.review, req.params.id]
    )
    console.log(updateRes);
  } catch (err) {
    console.log(err);
  }
  res.redirect("/");
});

app.post("/delete/:id", async (req, res) => {
  try {
    let deleteRes = await db.query(
      `DELETE FROM books WHERE id = $1`,
      [req.params.id]
    )
    console.log(deleteRes);
  } catch (err) {
    console.log(err);
  }
  res.redirect("/");
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
