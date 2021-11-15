import router from '@navigator/router';
// import auth
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
// import bottom
import Home from './bottom/Home';
import Profile from './bottom/Profile';
// import common
import GetStart from './common/GetStart';
import OnBoarding from './common/OnBoarding';

export const auth = {
  [router.SIGN_IN_SCREEN]: SignIn,
  [router.SIGN_UP_SCREEN]: SignUp,
};

export const bottom = {
  [router.HOME_SCREEN]: Home,
  [router.PROFILE_SCREEN]: Profile,
};

export const common = {
  [router.GET_START_SCREEN]: GetStart,
  [router.ON_BOARDING_SCREEN]: OnBoarding,
};
