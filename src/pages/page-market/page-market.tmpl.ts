export default `
<div class="page-market">
  <h1>Welcome!</h1>
  <p>This temporary page has been created to demonstrate project pages in the absence of routing</p>
  <ul class="page-market__list">
    <button onclick="{{ Authorization }}">Authorization</button>
    <button onclick="{{ Registration }}">Registration</button>
    <button onclick="{{ Main }}">Main</button>
    <button onclick="{{ Profile }}">Profile</button>
    <button onclick="{{ Editor }}">Editor</button>
    <button onclick="{{ PasswordChanger }}">PasswordChanger</button>
    <button onclick="{{ AvatarChanger }}">AvatarChanger</button>
    <button onclick="{{ NotFound }}">NotFound</button>
    <button onclick="{{ ServerError }}">ServerError</button>
  </ul>
</div>
`;
