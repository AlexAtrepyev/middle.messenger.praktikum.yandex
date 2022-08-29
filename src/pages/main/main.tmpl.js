export default `
<main className="main">
  <div className="sidebar">
    <div className="settings">
      <a href="#">Profile</a>
      <input type="search" name="search">
    </div>
    <ul className="chats">
      {{ chat_1 }}
      {{ chat_2 }}
      {{ chat_3 }}
    </ul>
  </div>
  <div className="feed">
    <div className="feed__header">
      <div className="feed__container">
        <img className="feed__image" src="#" alt="image">
        <h2 className="feed__name">Chat name</h2>
      </div>
      <div className="feed__container">
        <button>Add user</button>
        <button>Remove user</button>
      </div>
    </div>
    <div className="feed__input">
      <input type="text" name="message">
      <button>Send</button>
    </div>
  </div>
</main>
`;
