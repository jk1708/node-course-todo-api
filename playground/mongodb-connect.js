const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if(err)
  {
    return console.log('unable to connect to Mongodb server');
  }
  console.log('connected to mongodb server');
  db.collection('Users').insertOne({
    text: 'hello',
    completed: false
  },(err, result)=>{
    if(err)
    {
      console.log('unable to insert todo',err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));

  });
  db.close();
});
