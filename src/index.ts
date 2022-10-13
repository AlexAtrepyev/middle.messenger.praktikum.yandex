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

function rerender(content: HTMLElement) {
  document.body.innerHTML = '';
  document.body.appendChild(content);
}

window.addEventListener('DOMContentLoaded', () => {
  const page = new PageMarket({
    Authorization: () => rerender(new Authorization().getContent()!),
    Registration: () => rerender(new Registration().getContent()!),
    Main: () => rerender(new Main().getContent()!),
    Profile: () => rerender(new Profile().getContent()!),
    Editor: () => rerender(new Editor().getContent()!),
    PasswordChanger: () => rerender(new PasswordChanger().getContent()!),
    AvatarChanger: () => rerender(new AvatarChanger().getContent()!),
    NotFound: () => rerender(new NotFound().getContent()!),
    ServerError: () => rerender(new ServerError().getContent()!),
  });

  document.body.appendChild(page.getContent()!);
});
