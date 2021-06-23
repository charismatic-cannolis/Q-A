import mongoose from 'mongoose';
const { Schema } = mongoose;

let questionSchema = new Schema ({
  question_id: {
    type: Number,
    required: true
  },
  product_id: {
    type: Number,
    requred: true
  },
  question_body: {
    type: String,
    required: true
  },
  question_date: {
    type: Date,
    default: Date.now
  },
  asker_name: {
    type: String,
    required: true
  },
  question_helpfulness: {
    type: Number
  },
  reported: {
    type: Boolean,
    default: false
  },
  answers: {
    type: Schema.Type.ObjectId,
    ref: 'Answer'
  }
});

const answerSchema = new Schema ({
  answer_id: {
    type: Number,
    required: true
  },
  answer_date: {
    type: Date,
    default: Date.now
  },
  answer_helpfulness: {
    type: Number,
  },
  answerer_name: {
    tyep: String,
    required: true
  },
  page: Number,
  count: Number,
  photos: {
    type: Schema.type.ObjectId,
    ref: 'Photos'
  }
});

const photoSchema = new Schema ({
  photo_id: {
    type: Number,
    required: true
  },
  url: String,
})