const express = require('express');
const router = express.Router();
const MenuItem = require('./../models/MenuItem');

 


router.post('/', async (req, res) => {
  try {
    const data = req.body;
    const newMenuItem = new MenuItem(data);
    const response = await newMenuItem.save();
    console.log('Data saved');
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


router.get('/', async (req, res) => {
  try {
    const data = await MenuItem.find();
    console.log('Data fetched');
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});





router.get('/:taste',async (req,res)=>{
try{
  const tasteChoice = req.params.taste;// extract the work type from parameter 
  if(tasteChoice == 'sweet'|| tasteChoice == 'spicy' || tasteChoice == 'sour')
  {
    const response = await MenuItem.find({taste:tasteChoice});
    console.log('response fetch');
    res.status(200).json(response);
  }
  else{
    res.status(404).json({error: 'Invalid taste choice'});
  }
}
catch(err){

console.log(err);
res.status(500).json({ error: 'Internal Pointer veriable'});
}});




router.put('/:id',async (req,res)=>{
  
try{
  const menuItemRoutsId =req.params.id;// Extract the id from url
  const updatedMenuData = req.body;
  const response = await MenuItem.findByIdAndUpdate(menuItemRoutsId,updatedMenuData,{
    new: true,//Return to updated Document
    runValidators: true,// run Mongoose validation
  });

  if(!response)
  {
    return res.status(404).json({error: 'MenuItem not found'});
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
    const menuItemRoutsId = req.params.id;//extract the person's ID from url parameters
    //asuming you have a Person model
    const response = await MenuItem.findByIdAndDelete(menuItemRoutsId);
    if(!response)
  {
    return res.status(404).json({error: 'MenuItem  not found'});
  }

  console.log('data deleted');
  res.status(200).json({message:'menuItem deleted successfully'});
  }

  catch(error)
  {
  console.log(error);
  res.status(500).json({error: 'Internal Server Error'});
  }
});


// comment added for testing purpuse

module.exports =router;