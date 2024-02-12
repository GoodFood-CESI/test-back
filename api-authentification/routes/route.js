import express from 'express';
import { getJSON, getOui, login } from '../controllers/test.js';
import {  createUtilisateur, getUtilisateurByMail, getUtilisateurs } from '../controllers/UserController.js';

const router = express.Router();

router.get("/", (req, res) => {
    res.json({ message: "Bienvenue sur l'api Authentification." });
  });
router.get('/users',getUtilisateurs)
router.get('/user',getUtilisateurByMail)
router.post('/user',createUtilisateur)
router.get('/login',login)
router.get('/test',getJSON )
router.get('/yes',getOui)

export default router