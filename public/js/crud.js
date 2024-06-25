// Google Books API - https://developers.google.com/books/docs/v1/using#PerformingSearch
let maxResults = 5;
let imgList = [];
let currentImg = null;

function setImg(url) {
    $("#img-url-input").val(url);
    $("#crud-cover-img").attr("src", url);
}

function nextImg(event) {
    if (event.data.dir == "next") {
        currentImg++;
        if (currentImg > imgList.length - 1) 
            currentImg = 0;
        setImg(imgList[currentImg]);
    } else {
        currentImg--;
        if (currentImg < 0) 
            currentImg = imgList.length - 1;
        setImg(imgList[currentImg]);
    }
}

function toggleNextButton (enable) {
    if (enable) {
        $("#crud-img-next").prop("disabled", false);
        $("#crud-img-prev").prop("disabled", false);
    } else {
        $("#crud-img-next").prop("disabled", true);
        $("#crud-img-prev").prop("disabled", true);
    }
}

$("#search-img-btn").on("click", () => {
    let bookName = encodeURIComponent($("#title-input").val());
    let authorName = encodeURIComponent($("#author-input").val());
    let searchFilter = `intitle:${bookName}+inauthor:${authorName}`
    let apiQuery = `https://www.googleapis.com/books/v1/volumes?q=${searchFilter}&maxResults=${maxResults}`

    console.log(apiQuery)
    $.get(
        apiQuery, (data, status) => {
            let searchResults = data.items;
            if (searchResults) {
                imgList = [];
                searchResults.forEach(res => {
                    try {
                        imgList.push(res.volumeInfo.imageLinks.thumbnail)
                    } catch (err) {
                        console.log(err);
                    }
                });
                // console.log(imgList)
                currentImg = 0;
                setImg(imgList[0]);
                toggleNextButton(true);
            } else {
                alert("Book not found")
            }
        })
})

$("#delete-btn-input").on("click", () => {
    if (confirm("Are you sure you want to delete this book review?")) {
        $("#delete-btn-input").attr("type", "submit");
        $("#delete-post-form").submit();
    }
})

$("#crud-img-next").on("click", { dir: "next" }, nextImg);
$("#crud-img-prev").on("click", { dir: "prev" }, nextImg);