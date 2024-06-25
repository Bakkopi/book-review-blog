DROP TABLE IF EXISTS books;

CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    title VARCHAR(500),
	author VARCHAR(200),
    rating NUMERIC(3,1),
    cover_img VARCHAR(500),
    review TEXT,
    date_updated TIMESTAMP,
    CONSTRAINT min_rating CHECK (rating >= 0.0),
    CONSTRAINT max_rating CHECK (rating <= 10.0),
    UNIQUE (title, author)
);

INSERT INTO books (title, author, rating, cover_img, review, date_updated)
VALUES ('A Tale For The Time Being', 'Ruth Ozeki', 9.0, 
'http://books.google.com/books/content?id=lsItpf9T9qAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', 
'A Tale for the Time Being is a metafictional novel by Ruth Ozeki narrated by two characters, a sixteen-year-old Japanese American girl living in Tokyo who keeps a diary, and a Japanese American writer living on an island off the coast of British Columbia who finds the diary of the young woman washed ashore some time after the 2011 tsunami that devastated Japan',
NOW());
INSERT INTO books (title, author, rating, cover_img, review, date_updated)
VALUES ('Out', 'Natsuo Kirino', 8.0, 
'http://books.google.com/books/content?id=PzTWwAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api', 
'The body parts are discovered, the police start asking questions, but the women have far more dangerous enemies -a yakuza connected loan shark who discovers their secret and has a business proposition, and a ruthless nightclub owner the police are convinced is guilty of the murder.',
NOW());
INSERT INTO books (title, author, rating, cover_img, review, date_updated)
VALUES ('Kafka On The Shore', 'Haruki Murakami', 7.5, 
'http://books.google.com/books/content?id=L6AtuutQHpwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', 
'The young Kafka Tamura, a bookish 15-year-old boy who runs away from his Oedipal curse, and Satoru Nakata, an old, disabled man with the uncanny ability to talk to cats. The book incorporates themes of music as a communicative conduit, metaphysics, dreams, fate, and the subconscious.',
NOW());
INSERT INTO books (title, author, rating, cover_img, review, date_updated)
VALUES ('1984', 'George Orwell', 8.0, 
'http://books.google.com/books/content?id=kotPYEqx7kMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', 
'Winston Smith wrestles with oppression in Oceania, a place where the Party scrutinizes human actions with ever-watchful Big Brother. Defying a ban on individuality, Winston dares to express his thoughts in a diary and pursues a relationship with Julia. These criminal deeds bring Winston into the eye of the opposition, who then must reform the nonconformist.',
NOW());