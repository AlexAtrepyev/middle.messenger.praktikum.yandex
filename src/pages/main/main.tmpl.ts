export default `
<main class="main">
  <div class="sidebar">
    <div class="settings">
      <Link to="/settings" text="Profile" />
      <input type="search" name="search">
      <button class="link" onclick="{{ onCreateChat }}">Create chat</button>
    </div>
    <Fragment content="{{ chatList }}" />
  </div>
  <div class="feed">
    <div class="feed__header">
      <div class="feed__container">
        <img class="feed__image" src="#" alt="image">
        <h2 class="feed__name">{{ chatTitle }}</h2>
      </div>
      <div class="feed__container">
        <button onclick="{{ onAddUser }}">Add user</button>
        <button onclick="{{ onRemoveUser }}">Remove user</button>
      </div>
    </div>
    <Fragment content="{{ messageList }}" />
    <form class="feed__input" onsubmit="{{ onSubmit }}">
      <input type="text" name="message">
      <button type="submit">Send</button>
    </form>
  </div>
</main>
`;
