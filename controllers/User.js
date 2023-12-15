import Utilisateur from "../models/user.js";

export const getUtilisateurs = async (req, res) => {
    try {
      const user = await Utilisateur.findAll();
      res.send(user);
    } catch (err) {
      console.log(err);
    }
  };