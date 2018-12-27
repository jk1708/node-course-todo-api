const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

Todo.findByIdAndRemove('5c25045e3ef40d4801552513').then((todo)=>{
  console.log(todo);
});
