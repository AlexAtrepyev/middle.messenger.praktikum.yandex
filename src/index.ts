import AuthController from './controllers/AuthController';
import './index.css';

import Authorization from './pages/authorization';
import AvatarChanger from './pages/avatar-changer';
import Editor from './pages/editor';
import Main from './pages/main';
import NotFound from './pages/not-found';
import PasswordChanger from './pages/password-changer';
import Profile from './pages/profile';
import Registration from './pages/registration';
import ServerError from './pages/server-error';

import Router from './utils/Router';

window.addEventListener('DOMContentLoaded', async () => {
  Router
    .use('/', Authorization)
    .use('/sign-up', Registration)
    .use('/settings', Profile)
    .use('/settings/editor', Editor)
    .use('/settings/password', PasswordChanger)
    .use('/settings/avatar', AvatarChanger)
    .use('/messenger', Main);

  let isProtectedRoute = true;

  switch (window.location.pathname) {
    case '/':
    case '/sign-up':
      isProtectedRoute = false;
      break;
    default:
      break;
  }

  try {
    await AuthController.getUser();

    Router.start();

    if (!isProtectedRoute) {
      Router.go('/messenger');
    }
  } catch (e) {
    Router.start();

    if (isProtectedRoute) {
      Router.go('/');
    }
  }
});
