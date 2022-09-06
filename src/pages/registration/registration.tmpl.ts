export default `
<div class="registration">
  <h1 class="registration__title">Sign up to Messenger</h1>
  <form class="registration__form" onsubmit="{{ onSubmit }}">
    <Input label="First name" type="text" name="first_name" />
    <Input label="Second name" type="text" name="second_name" />
    <Input label="Login" type="text" name="login" />
    <Input label="Email" type="email" name="email" />
    <Input label="Password" type="password" name="password" />
    <Input label="Phone" type="number" name="phone" />
    <button>Sign up</button>
  </form>
  <a href="#">Sign in</a>
</div>
`;
