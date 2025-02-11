import { Schema, model } from 'mongoose'

const castSchema = new Schema({
    name: String,
    age: Number,
    born: String,
    imageUrl: String,

})

const cast = model('Cast', castSchema)

export default cast;