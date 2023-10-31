const express= require('express');

const userController= require('../controller/user');
const router= express.Router();

router.post('/user/add-user',userController.postUser);
  
router.get('/user/get-user',userController.getUser);
  
router.delete('/user/delete-user/:userId',userController.deleteUser);


module.exports= router;
