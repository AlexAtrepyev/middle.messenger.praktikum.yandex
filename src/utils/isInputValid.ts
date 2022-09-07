export default function isInputValid(name: string, value: string): boolean {
  const NAME_REGEXP = /^[A-ZА-Я][a-zA-Zа-яА-Я-]*$/;
  const LOGIN_REGEXP = /^(?=.*[a-zA-Z].*)[\w-]{3,20}$/;
  const EMAIL_REGEXP = /^[\w-]+@[a-zA-z]+\.[a-zA-z]+$/;
  const PASSWORD_REGEXP = /^(?=.*[A-Z].*)(?=.*[0-9].*).{8,40}$/;
  const PHONE_REGEXP = /^[(?:+?)\d]{10,15}$/;
  const MESSAGE_REGEXP = /.+/;

  switch (name) {
    case 'first_name':
      return NAME_REGEXP.test(value);
    case 'second_name':
      return NAME_REGEXP.test(value);
    case 'display_name':
      return LOGIN_REGEXP.test(value);
    case 'login':
      return LOGIN_REGEXP.test(value);
    case 'email':
      return EMAIL_REGEXP.test(value);
    case 'oldPassword':
      return PASSWORD_REGEXP.test(value);
    case 'newPassword':
      return PASSWORD_REGEXP.test(value);
    case 'repeatPassword':
      return PASSWORD_REGEXP.test(value);
    case 'password':
      return PASSWORD_REGEXP.test(value);
    case 'phone':
      return PHONE_REGEXP.test(value);
    case 'message':
      return MESSAGE_REGEXP.test(value);
    default:
      return false;
  }
}
