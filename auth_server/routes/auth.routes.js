import { Router } from 'express';
import {
  verifyAccess,
  verifyAuth,
  verifyPermission
} from '../middlewares/index.js';
import {
  getUser,
  loginUser,
  logoutUser,
  registerUser,
  registerUserFromAdminPanel,
  removeUser
} from '../services/auth.services.js';

const router = Router();

router
  .get('/', verifyAuth, getUser)
  .post('/register', registerUser)
  .post('/registerFromPanel', [verifyAccess, verifyPermission], registerUserFromAdminPanel)
  .post('/login', loginUser)
  .get('/logout', verifyAccess, logoutUser)
  .delete('/remove', [verifyAccess, verifyPermission], removeUser);

export default router;