export default `
<div className="profile">
  <div className="profile__container">
    <img className="profile__image" src="#" alt="image">
    <h1 className="profile__name">Profile name</h1>
  </div>
  <ul className="profile__container">
    {{ first_name }}
    {{ second_name }}
    {{ display_name }}
    {{ login }}
    {{ email }}
    {{ phone }}
  </ul>
  <div className="profile__container">
    <a href="#">Edit data</a>
    <a href="#">Change password</a>
    <a href="#">Log out</a>
  </div>
</div>
`;
