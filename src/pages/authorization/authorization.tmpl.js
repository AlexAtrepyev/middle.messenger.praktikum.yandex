export default `
<div className="authorization">
  <h1 className="authorization__title">Sign in to Messenger</h1>
  <form className="authorization__form">
    {{ login }}
    {{ password }}
    <button>Sign in</button>
  </form>
  <a href="#">Create account</a>
</div>
`;
