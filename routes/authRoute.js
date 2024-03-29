import express from 'express';
import {registerController,loginController,testController} from '../controllers/authController.js';
import {requireSignIn} from '../middleware/authMiddleware.js';
const router = express.Router();

//routing
//Register || method POST
router.post('/register', registerController);

//Login || method POST
router.post('/login', loginController);

//test route
router.get('/test', requireSignIn,testController);

export default router;