const express = require('express');
const router = express.Router();
const person = require('./../models/person');


// // Root Route
// router.get('/', (req, res) => {
//   res.send('Welcome to my hotel. How can I help you? We have a list of menus.');
// });

// Route to add a person
router.post('/', async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new person(data);
    const response = await newPerson.save();
    console.log('Data saved');
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to get all persons
router.get('/', async (req, res) => {
  try {
    const data = await person.find();
    console.log('Data fetched');
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});




router.get('/:workType',async (req,res)=>{
try{
  const workType = req.params.workType;// extract the work type from parameter 
  if(workType == 'chef'|| workType == 'manager' || workType == 'waiter')
  {
    const response = await person.find({work:workType});
    console.log('response fetch');
    res.status(200).json(response);
  }
  else{
    res.status(404).json({error: 'workType Invalid'});
  }
}
catch(err){

console.log(err);
res.status(500).json({ error: 'Internal Server Error'});
}});




router.put('/:id',async (req,res)=>{
  
try{
  const personId =req.params.id;// Extract the id from url
  const updatedPersonData = req.body;
  const response = await person.findByIdAndUpdate(personId,updatedPersonData,{
    new: true,//Return to updated Document
    runValidators: true,// run Mongoose validation
  });

  if(!response)
  {
    return res.status(404).json({error: 'Person not found'});
  }
  console.log('data updated');
  res.status(200).json(response);

}catch(err)
{
console.log(err);
res.status(500).json({error: 'Internal Server Error'});
}
});



router.delete('/:id',async(req,res)=>{
  try{
    const personId = req.params.id;//extract the person's ID from url parameters
    //asuming you have a Person model
    const response = await person.findByIdAndDelete(personId);
    if(!response)
  {
    return res.status(404).json({error: 'Person not found'});
  }

  console.log('data deleted');
  res.status(200).json({message:'Person deleted successfully'});
  }

  catch(error)
  {
  console.log(error);
  res.status(500).json({error: 'Internal Server Error'});
  }
});
module.exports =router;



 