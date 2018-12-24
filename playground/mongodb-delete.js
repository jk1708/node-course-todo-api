const {MongoClient, ObjectID}= require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if(err)
  {
    return console.log('unable to connect to Mongodb server');
  }
  // db.collection('Users').deleteMany({text: 'eat lunch'}).then((result)=>{
  //   console.log(result);
  // })
db.collection('Users').findOneAndDelete({_id: new ObjectID('5c20ad93e1bee25d636950e6')}).then((results)=>{
  console.log(JSON.stringify(results, undefined, 2));
})

});
