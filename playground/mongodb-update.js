const {MongoClient, ObjectID}= require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if(err)
  {
    return console.log('unable to connect to Mongodb server');
  }

// db.collection('ToDos').findOneAndUpdate({_id: new ObjectID('5c2093068272942aa4a9138b')},
// {$set: {completed: true}},{returnOriginal: false}).then((result)=> console.log(result));
db.collection('Users').findOneAndUpdate({_id: new ObjectID('5c20eb2be1bee25d6369644a')}
,{$set: {name: 'nishu'},$inc: {age : 1}},{
  returnOriginal: false
}).then((result)=>{
  console.log(result);
});

});
