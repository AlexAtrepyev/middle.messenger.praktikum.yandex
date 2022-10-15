import './profile.css';

import template from './profile.tmpl';
import Templator from '../../utils/templator';

import ProfileField from '../../components/profile-field';

import Block from '../../utils/block';
import Link from '../../components/link';

import store, { StateEvents } from '../../utils/Store';
import AuthController from '../../controllers/AuthController';

export default class Profile extends Block {
  constructor() {
    super(store.getState().user || {});
  }

  init() {
    AuthController.getUser();

    store.on(StateEvents.UPDATED, () => {
      this.setProps(store.getState().user || {});
    });
  }

  onLogout() {
    AuthController.logout();
  }

  render() {
    return new Templator(template).compile({
      profileName: `${this.props.first_name} ${this.props.second_name}`,
      ProfileField,
      Link,
      onLogout: this.onLogout.bind(this),
      ...this.props,
      avatarLink: this.props.avatar ? `https://ya-praktikum.tech/api/v2/resources/${this.props.avatar}` : '#',
    });
  }
}
