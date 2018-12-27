const mongoose =require('mongoose');

mongoose.promise=global.promise;
mongoose.connect(process.env.MONGODB_URL||'mongodb://localhost: 27017/ToDoApp');
module.exports
  {mongoose};
