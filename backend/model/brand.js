const mongoose = require('mongoose');

//Brand Schema
const brandSchema = new mongoose.Schema({
   name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true
   },
   subCategoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'SubCategory',
      required: [true, 'Subcategory ID is required'],
   }
},{ timestamps: true});

// Brand Model
const Brand = mongoose.model("Brand", brandSchema)
module.exports = Brand;