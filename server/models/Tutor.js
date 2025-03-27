import mongoose from 'mongoose';

const availabilitySchema = new mongoose.Schema({
  day: {
    type: String,
    enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    required: true
  },
  startTime: {
    type: String, // e.g., "10:00"
    required: true
  },
  endTime: {
    type: String, // e.g., "18:00"
    required: true
  }
});

const tutorSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  university: {
    type: String,
    required: true
  },
  program: {
    type: String,
    required: true
  },
  bio: {
    type: String,
    required: true,
    maxlength: 500
  },
  availability: {
    type: [availabilitySchema],
    required: true
  },
  teachingMethod: {
    type: String,
    enum: ['online', 'in person', 'both'],
    required: true
  },
  gradeRange: {
    type: [Number],
    validate: {
      validator: function (arr) {
        return arr.every(grade => grade >= 8 && grade <= 12);
      },
      message: 'Grades must be between 8 and 12'
    },
    required: true
  },
  ratePerHour: {
    type: Number,
    required: true,
    min: 0
  },
  subjects: {
    type: [String],
    required: true
  }
}, { timestamps: true });

const Tutor = mongoose.model('Tutor', tutorSchema);

export default Tutor;
