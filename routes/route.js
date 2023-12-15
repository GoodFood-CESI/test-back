import express from 'express';
import { getJSON, getOui, login } from '../controllers/test.js';
import {  getUtilisateurs } from '../controllers/User.js';

const router = express.Router();

router.get("/", (req, res) => {
    res.json({ message: "Bienvenue sur l'api Authentification." });
  });
router.get('/user',getUtilisateurs)
router.get('/login',login)
router.get('/test',getJSON )
router.get('/yes',getOui)

export default router