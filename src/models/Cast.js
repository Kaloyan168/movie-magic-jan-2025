import { Schema, model } from 'mongoose'

const castSchema = new Schema({
    name: String,
    age: Number,
    borm: String,
    imageUrl: String,

})

const cast = model('Cast', castSchema)

export default cast;