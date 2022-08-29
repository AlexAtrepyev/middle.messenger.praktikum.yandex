export default `
<div className="changer">
  <div className="changer__container">
    <img className="changer__image" src="#" alt="image">
  </div>
  <form className="changer__container">
    {{ old_password }}
    {{ new_password }}
    {{ repeat_password }}
    <button>Save</button>
  </form>
</div>
`;
