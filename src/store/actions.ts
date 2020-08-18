import axios from 'axios';
import {
  requestSignup,
  signupSuccessful,
  signupError,
  signupEnpoint,
} from './store';
import type { SignupForm } from '../interfaces/SignupForm.interface';

export async function signup(signupForm: SignupForm) {
  requestSignup();
  return await axios
    .post(signupEnpoint, signupForm)
    .then(signupSuccessful)
    .catch((error) => {
      signupError(error);
    });
}
