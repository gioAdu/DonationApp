import auth from '@react-native-firebase/auth';
import store from '../redux/store';
import {updateToken} from '../redux/reducers/User';

export const createUser = async (fullName, email, password) => {
  try {
    const user = await auth().createUserWithEmailAndPassword(email, password);
    await user.user.updateProfile({displayName: fullName});
    return user;
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      return {error: 'The email you entered is already in use'};
    }
    if (error.code === 'auth/invalid-email') {
      return {error: 'Please enter a valid email address'};
    }
    return {error: 'Something went wrong'};
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await auth().signInWithEmailAndPassword(email, password);
    const token = await response.user.getIdToken();
    return {
      status: true,
      data: {
        displayName: response.user.displayName,
        email: response.user.email,
        token,
      },
    };
  } catch (error) {
    console.log(error);
    if (error.code === 'auth/wrong-password') {
      return {status: false, error: 'Please enter a correct password'};
    }
    if (error.code === 'auth/user-not-found') {
      return {status: false, error: `The email you entered doesn't exist`};
    }
    if (error.code === 'auth/too-many-requests') {
      return {
        status: false,
        error: ` Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.`,
      };
    }
    return {status: false, error: 'Something went wrong'};
  }
};

export const logout = async () => {
  await auth().signOut();
};

export const checkToken = async () => {
  try {
    let response = await auth().currentUser.getIdToken(true);
    store.dispatch(updateToken(response));
    return response;
  } catch (error) {
    return error;
  }
};
