// Shows all the available DB
show ('dbs')

// Select the bookstore DB
use ('bookstore')

// shows all the collections available in bookstore db
show ('collections')

// delete the document where id is 1
db.authors.deleteOne({id:1});

// retrive author collection's data
db.authors.find();

// delete the documents which has rating as 7 from book's collection
db.book.deleteMany({Rating:9});

// retrive book collection's data
db.book.find();

//checks if id:16 is present in the book's collection if so display the data and delete it , else displays null
db.book.findOneAndDelete({id:16});

// retrive book collection's data in descing order
db.book.find().sort({id:-1});