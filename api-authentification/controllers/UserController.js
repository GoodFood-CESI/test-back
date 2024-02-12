import Utilisateur from "../models/UserModel.js";

export const getUtilisateurs = async (req, res) => {
    try {
      const user = await Utilisateur.findAll();
      res.send(user);
    } catch (err) {
      console.log(err);
    }
};

export const getUtilisateurByMail = async (req, res) => {
   try {
     const user = await Utilisateur.findOne({
      where:
        {mail: req.query.mail}
      });
     res.send(user);
   } catch (err) {
     console.log(err);
   }
};

export const createUtilisateur = async (req, res) => {
  try {
    const user = await Utilisateur.create(req.body);    
    res.json({
      'message': `Utilisateur créé , Id : ${user.dataValues.id}`
    })
  } catch (err) {
    console.log(err);
  }
};


export const deleteUtilisateur = async (req, res) => {
  try {
    const user = await Utilisateur.destroy({where:{id:req.query.id}})    
    res.json({
      'message': `Utilisateur ${user.dataValues.id} supprimé`
    })
  } catch (err) {
    console.log(err);
  }
};

export const updateUtilisateur = async (req, res) => {
  try {
    const user = await Utilisateur.update(req.body, {
      where:{id:req.query.id}
    })    
    res.json({
      'message': `Utilisateur ${user.dataValues.id} supprimé`
    })
  } catch (err) {
    console.log(err);
  }
};