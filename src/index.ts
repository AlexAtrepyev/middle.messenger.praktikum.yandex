import './index.css';

import PageMarket from './pages/page-market';
import Authorization from './pages/authorization';
import AvatarChanger from './pages/avatar-changer';
import Editor from './pages/editor';
import Main from './pages/main';
import NotFound from './pages/not-found';
import PasswordChanger from './pages/password-changer';
import Profile from './pages/profile';
import Registration from './pages/registration';
import ServerError from './pages/server-error';

function onClick(page: HTMLElement) {
  document.body.innerHTML = "";
  document.body.appendChild(page);
}

window.addEventListener('DOMContentLoaded', () => {
  const startPage = PageMarket.compile({
    Authorization: () => onClick(Authorization),
    Registration: () => onClick(Registration),
    Main: () => onClick(Main),
    Profile: () => onClick(Profile),
    Editor: () => onClick(Editor),
    PasswordChanger: () => onClick(PasswordChanger),
    AvatarChanger: () => onClick(AvatarChanger),
    NotFound: () => onClick(NotFound),
    ServerError: () => onClick(ServerError)
  });
  
  document.body.appendChild(startPage);
});
