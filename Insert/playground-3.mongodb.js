// Shows all the available DB
show ('dbs')

// Select the bookstore DB
use ('bookstore')

// shows all the collections available in bookstore db
show ('collections')

//To insert a single document of data
db.price.insert({title:"Relam of Dreams",price:500});

//To insert a multiple documents in a collection
db.price.insertMany([{title:"Danger",price:500,genre:["Fantasy","Magic"]},{title:"Wonderland",price:500,genre:["Fantasy","Magic","sci-fi"]}])

//displays the book's title and price
db.price.find();