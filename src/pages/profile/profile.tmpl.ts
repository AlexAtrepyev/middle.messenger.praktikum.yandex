export default `
<div class="profile">
  <div class="profile__container">
    <img class="profile__image" src="#" alt="image">
    <h1 class="profile__name">Profile name</h1>
  </div>
  <ul class="profile__container">
    <ProfileField name="First name" value="First name" />
    <ProfileField name="Last name" value="Last name" />
    <ProfileField name="Display name" value="nickname" />
    <ProfileField name="Login" value="user" />
    <ProfileField name="Email" value="pochta@mail.ru" />
    <ProfileField name="Phone" value="+1234567890" />
    {{ first_name }}
    {{ second_name }}
    {{ display_name }}
    {{ login }}
    {{ email }}
    {{ phone }}
  </ul>
  <div class="profile__container">
    <Link to="/settings/editor" text="Edit data" />
    <Link to="/settings/password" text="Change password" />
    <button class="link">Log out</button>
  </div>
</div>
`;
