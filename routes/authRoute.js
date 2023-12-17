import express from 'express';
import {registerController} from '../controllers/authController.js';
const router = express.Router();

//routing
//Register || method POST
router.post('/register', registerController);

export default router;