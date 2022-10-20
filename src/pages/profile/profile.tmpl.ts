export default `
<div class="profile">
  <div class="profile__container">
    <img class="profile__image" src="{{ avatarLink }}" alt="image">
    <h1 class="profile__name">{{ profileName }}</h1>
  </div>
  <ul class="profile__container">
    <ProfileField name="First name" value="{{ first_name }}" />
    <ProfileField name="Last name" value="{{ second_name }}" />
    <ProfileField name="Display name" value="{{ display_name }}" />
    <ProfileField name="Login" value="{{ login }}" />
    <ProfileField name="Email" value="{{ email }}" />
    <ProfileField name="Phone" value="{{ phone }}" />
  </ul>
  <div class="profile__container">
    <Link to="/settings/editor" text="Edit data" />
    <Link to="/settings/password" text="Change password" />
    <Link to="/settings/avatar" text="Change avatar" />
    <button class="profile_logout" onclick="{{ onLogout }}">Log out</button>
  </div>
</div>
`;
