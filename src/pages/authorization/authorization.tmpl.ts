export default `
<div class="authorization">
  <h1 class="authorization__title">Sign in to Messenger</h1>
  <form class="authorization__form" onsubmit="{{ onSubmit }}">
    <Input label="Login" type="text" name="login" valid="true" />
    <Input label="Password" type="password" name="password" />
    <button>Sign in</button>
  </form>
  <Link to="/sign-up" text="Create account" />
</div>
`;
