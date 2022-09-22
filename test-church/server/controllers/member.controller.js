const db = require("../models");
const { $where } = require("../models/member.model");
const Member = db.member;


exports.list = async (req,res)=>{
  // let sessionData = req.userData
  const member = await Member.find({})
  res.json(member).send();
}

exports.create = async (req,res)=>{
  // let sessionData = req.userData
  console.log(req.body)
  const member = await Member.create(req.body)
  res.json(member).send()
}

exports.remove = async (req,res)=>{
  // let sessionData = req.userData
  const person = await Member.findOneAndDelete({'firstname':req.body.firstname,'lastname':req.body.lastname})

  console.log(person);
  if(person !== undefined){
    
    res.json(person).send()}
}
exports.removeById = async (req,res)=>{
  // let sessionData = req.userData
  const person = await Member.findByIdAndDelete(req.query.id)
  console.log(req.query);
  console.log(person);
  if(person !== undefined){
    
    res.json(person).send()}
}
exports.update = async (req,res)=>{
  // let sessionData = req.userData
  let person = await Member.findById(req.query.id)

  console.log(person);
  if(person !== undefined){
    let updated = {
      firstname:req.body.firstname,
      lastname:req.body.lastname,
      middlename:req.body.middlename,
      age: req.body.age
    }
    person = await person.updateOne(updated)
    res.json(person).send()}
}