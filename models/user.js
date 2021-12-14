import mongoose from 'mongoose'
const Schema = mongoose.Schema

const UserSchema = new Schema({
  name: String,
  username: String,
  password: String,
  email: String
}, {
  timestamps: true,
  versionKey: false
})

const UserModel = mongoose.model('UserModel', UserSchema)

export default UserModel
