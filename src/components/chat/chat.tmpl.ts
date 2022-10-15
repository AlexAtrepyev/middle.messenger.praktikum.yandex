export default `
<li class="chat {{ isSelected }}" onclick="{{ onClick }}">
  <img class="chat__image" src="{{ avatar }}" alt="image">
  <div class="chat__container">
    <h2 class="chat__name">{{ title }}</h2>
    <span class="chat__message">{{ last_message }}</span>
  </div>
  <div class="chat__container chat__container_align_center">
    <time class="chat__time">{{ time }}</time>
    <span class="chat__count">{{ unread_count }}</span>
  </div>
</li>
`;
