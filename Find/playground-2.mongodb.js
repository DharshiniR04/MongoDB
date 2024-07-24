// Shows all the available DB
show ('dbs')

// Select the bookstore DB
use ('bookstore')

// shows all the collections available in bookstore db
show ('collections')

//retrives documents from book
db.book.find().pretty();

//retrives the book's data from DB  which has rating lesser than 9
db.book.find({Rating:{$lt:9}},{title:1,Rating:1}).pretty();



