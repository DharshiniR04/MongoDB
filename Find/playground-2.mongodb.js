// Shows all the available DB
show ('dbs')

// Select the bookstore DB
use ('bookstore')

// shows all the collections available in bookstore db
show ('collections')

//retrives documents from book
db.book.find().pretty();

//retrives all book's title and rating
db.book.find({},{title:1,Rating:1});

//retrives the book's data from DB  which has rating lesser than 9
db.book.find({Rating:{$lt:9}},{title:1,Rating:1}).pretty();

//retrives the book data based on genre(Mystry) or rating(>=8)
db.book.find({$or: [{genre:"Mystry"},{Rating:{$lt:8}}]}).pretty();

//retrives the book data based on genre(Mystry) and rating(>=8)
db.book.find({$and: [{genre:"fantasy"},{Rating:{$lt:8}}]}).pretty();
  

