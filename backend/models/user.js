var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

var schema = new Schema({
    email: {type:String, required:true},
    username: {type:String, required:true},
    password:{type:String, required:true},
    creation_dt:{type:Date}
});
var fileschema = new Schema({
    fieldname: String,
  originalname: String,
  encoding: String,
  mimeptype: String,
  destination: String,
  filename: String,
  path: String,
  size: Number,
  created_at: Date,
  updated_at: Date,
  fullpath: String
});
// schema.statics.hashPassword = function hashPassword(password){
//     return bcrypt.hashSync(password,10);
// }
// schema.method.isValid = function(hashedpassword){
//     return bcrypt.compareSync(hashedpassword, this.password);
// }

module.exports = mongoose.model('User',schema);
module.exports = mongoose.model('fileSchema',fileschema);