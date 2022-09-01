export default `
<li class="chat">
  <img class="chat__image" src="#" alt="image">
  <div class="chat__container">
    <h2 class="chat__name">{{ name }}</h2>
    <span class="chat__message">{{ message }}</span>
  </div>
  <div class="chat__container chat__container_align_center">
    <time class="chat__time">{{ time }}</time>
    <span class="chat__count">{{ count }}</span>
  </div>
</li>
`;
