export default `
<div class="changer">
<form class="changer__form" onsubmit="{{ onSubmit }}">
    <Input label="Old password" type="password" name="oldPassword" />
    <Input label="New password" type="password" name="newPassword" />
    <Input label="Repeat password" type="password" name="repeatPassword" />
    <button class="changer__submit">Save</button>
  </form>
</div>
`;
