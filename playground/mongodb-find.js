const {MongoClient, ObjectID}= require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if(err)
  {
    return console.log('unable to connect to Mongodb server');
  }
  // console.log('connected to mongodb server');
  // db.collection('ToDos').insertOne({
  //   text: 'something to do',
  //   completed: false
  // },(err, result)=>{
  //   if(err)
  //   {
  //     console.log('unable to insert todo',err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  //   console.log(result.ops[0]._id.getTimestamp());
  db.collection('ToDos').find({
    _id: new ObjectID('5c2093d656626a2c58a2e231')
  }).toArray().then((docs)=>{
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err)=>{
    console.log('unable t fetch');  });


});
