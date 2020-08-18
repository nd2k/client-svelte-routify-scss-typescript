import { writable } from 'svelte/store';

// States
export const signupEnpoint = 'http://localhost:3000/api/v1/user/signup';
export const isLoading = writable<boolean>(false);
export const listOfErrors = writable<Array<string>>([]);
export const user = writable({});

// Mutations
export const requestSignup = () => isLoading.set(true);
export const signupSuccessful = (data) => {
  user.set(data);
  isLoading.set(false);
};
export const signupError = (error) => {
  console.log(error.response);
  isLoading.set(false);
};
