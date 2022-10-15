import './index.css';

// import PageMarket from './pages/page-market';
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
import Store from './utils/Store';

window.store = Store;

window.addEventListener('DOMContentLoaded', () => {
  Router
    .use('/', Authorization)
    .use('/sign-up', Registration)
    .use('/settings', Profile)
    .use('/settings/editor', Editor)
    .use('/settings/password', PasswordChanger)
    .use('/settings/avatar', AvatarChanger)
    .use('/messenger', Main)
    .start();
});
