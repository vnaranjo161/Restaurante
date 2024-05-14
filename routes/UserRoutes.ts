import express from 'express'
import registerController from '../controllers/User/registerController'
import authController from '../controllers/User/authController';
import getMenues from '../controllers/User/getMenuesController';
import validateToken from '../middleware/validateToken';
import makeOrder from '../controllers/User/makeOrderController';
import getOrdersUser from '../controllers/User/getOrdersUsetController';
const router = express.Router();

router.post('/register', registerController)
router.post('/auth', authController)
router.get('/getMenues',validateToken, getMenues)
router.post('/makeOrder',validateToken, makeOrder)
router.get('/getOrdersUser',validateToken, getOrdersUser)




export default router;