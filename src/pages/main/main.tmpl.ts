export default `
<main class="main">
  <div class="sidebar">
    <div class="settings">
      <Link to="/settings" text="Profile" />
      <div class="container">
        <input type="text" id="chatTitle" placeholder="chat title">
        <button class="link" onclick="{{ onCreateChat }}">Create chat</button>
      </div>
    </div>
    <Fragment content="{{ chatList }}" />
  </div>
  <div class="feed">
    <div class="feed__header">
      <div class="container">
        <img class="feed__image" src="#" alt="image">
        <h2 class="feed__name">{{ chatTitle }}</h2>
      </div>
      <div class="feed__container">
        <div class="container">
          <input type="text" id="addUser" placeholder="user id">
          <button class="link" onclick="{{ onAddUser }}">Add user</button>
        </div>
        <div class="container">
          <input type="text" id="removeUser" placeholder="user id">
          <button class="link" onclick="{{ onRemoveUser }}">Remove user</button>
        </div>
      </div>
    </div>
    <Fragment content="{{ messageList }}" />
    <form class="feed__input" onsubmit="{{ onSubmit }}">
      <input class="feed__text" type="text" name="message">
      <button class="feed__submit" type="submit">Send</button>
    </form>
  </div>
</main>
`;
