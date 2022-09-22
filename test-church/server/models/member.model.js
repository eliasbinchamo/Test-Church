const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Email = new mongoose.Schema({
  address: {
    type: String,
    lowercase: true,
    required: [true, "can't be blank"],
    match: [/\S+@\S+\.\S+/, "is invalid"],
  },
  // Change the default to true if you don't need to validate a new user's email address
  validated: { type: Boolean, default: false },
});


const memberModel = new Schema({
	firstname: { type: String, required: true, maxLength: 40 },
	middlename: { type: String, required: true, maxLength: 40 },
	lastname: { type: String, required: true, maxLength: 40 },
	age:{type:Number},
    sex:{type:String},
    job:{
        category:{type:String, default: "unknown"},
        position:{type:String, default:"unknown"}
    },
    education:{
        highesteducation:{type:String, default:"unknown"},
        degrees:{type:[String], default:["unknown"]}
    },
    location:{
        zone:{type:String},
        subzone:{type:String}
    },
    baptism:{
        status:{type:String, default:"unknown"},
        baptizedlocation:{type:String, default:"unknown"},
        baptizedyear:{type:Number}
    },
    membership:{
        previousmemberships:{
            type:[String],
        },
        membersince:Number,
        isactive:Boolean,
        departure:{
            departuredate:{type:Date, default:null},
            departuredescription:String,
            departureapprovedby:String
        },
        membershipavenue:{
            type:String,default:"personal application"
        }
    },
    relationship:{
        status:{type:String, default:"unknown"},
        description:String
    },
    contact:{
        phone:{type:String, default: "unknown"},
        email:{type:Email}
    }
},{ timestamps: true });

module.exports = mongoose.model("member", memberModel);
