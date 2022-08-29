export default `
<div className="registration">
  <h1 className="registration__title">Sign up to Messenger</h1>
  <form className="registration__form">
    {{ firstName }}
    {{ secondName }}
    {{ login }}
    {{ email }}
    {{ password }}
    {{ phone }}
    <button>Sign up</button>
  </form>
  <a href="#">Sign in</a>
</div>
`;
