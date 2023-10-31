const user = require('../Models/user');

exports.postUser= async (req, res, next) => {
    try {
      const { username, email, number } = req.body;
      const data = await user.create({ name: username, email:email, number:number });
      res.status(201).json({ newUserDetails: data });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  exports.getUser= async(req,res,next)=>{
    try{
      const users= await user.findAll();
      res.status(200).json({allUsers: users});
    }
    catch(err){
      console.log('Get user is failing',JSON.stringify(err));
      res.status(500).json({error:err});
    }
  };
  

exports.deleteUser= async (req, res, next) => {
    const userId = req.params.userId;
    try {
      if(!req.params.userId){
        return res.status(400).json({error: 'Id is missing'})
      }
      await user.destroy({where: { id: userId}});
      res.sendStatus(200);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
 };



