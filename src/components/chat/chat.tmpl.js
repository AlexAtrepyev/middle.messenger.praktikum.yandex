export default `
<li className="chat">
  <img className="chat__image" src="#" alt="image">
  <div className="chat__container">
    <h2 className="chat__name">{{ name }}</h2>
    <span className="chat__message">{{ message }}</span>
  </div>
  <div className="chat__container chat__container_align_center">
    <span className="chat__time">{{ time }}</span>
    <span className="chat__count">{{ count }}</span>
  </div>
</li>
`;
