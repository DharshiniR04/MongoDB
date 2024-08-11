// Shows all the available DB
show ('dbs')

// Select the bookstore DB
use ('bookstore')

// shows all the collections available in bookstore db
show ('collections')

//-----------------------------------------------------------------------------------------

// =>$set
// =>$inc:+ve
// =>$inc:-ve
// =>$pull
// =>$push

//display book collection
db.book.find();

//update the rating to 10 for the book which has the title - "Realm of Shadows"
db.book.updateMany({title:"Realm of Shadows"},{$set:{Rating:10}});

//Increment the id:15's Rating  with 5
db.book.updateOne({id:15},{$inc:{Rating:5}});

//Increment the id:15's Rating  with 5
db.book.updateOne({id:15},{$inc:{Rating:-5}});

// remove "fantasy" genre for the book named "Realm of Shadows"
db.book.updateOne({title:"Realm of Shadows"},{$pull:{genre:"fantasy"}});

// Add "Thriller" genre for the book named "Realm of Shadows"
db.book.updateMany({title:"Realm of Shadows"},{$push:{genre:"Thriller"}});

// To add multiple values in an array 
db.book.updateMany({title:"Wizards' Duel"},{$push:{genre:{$each:["Magic","Thriller"]}}});

//display book collection
db.book.find();
