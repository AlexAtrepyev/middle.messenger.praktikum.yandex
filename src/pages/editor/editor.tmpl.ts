export default `
<div class="editor">
  <form class="editor__form" onsubmit="{{ onSubmit }}">
    <Input label="First name" type="text" name="first_name" />
    <Input label="Second name" type="text" name="second_name" />
    <Input label="Display name" type="text" name="display_name" />
    <Input label="Login" type="text" name="login" />
    <Input label="Email" type="email" name="email" />
    <Input label="Phone" type="number" name="phone" />
    <button class="editor__submit">Save</button>
  </form>
</div>
`;
