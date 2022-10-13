export default `
<main class="main">
  <div class="sidebar">
    <div class="settings">
      <Link to="/settings" text="Profile" />
      <input type="search" name="search">
    </div>
    <ul class="chats">
      <Chat name="Alex" message="Hello" text="link" time="11.03.22" count="1" />
      <Chat name="Jack" message="See you later" text="link" time="11.03.22" count="3" />
      <Chat name="Veronica" message="You are so pretty ;)" text="link" time="11.03.22" count="2" />
    </ul>
  </div>
  <div class="feed">
    <div class="feed__header">
      <div class="feed__container">
        <img class="feed__image" src="#" alt="image">
        <h2 class="feed__name">Chat name</h2>
      </div>
      <div class="feed__container">
        <button>Add user</button>
        <button>Remove user</button>
      </div>
    </div>
    <div class="feed__messages">
      <Message type="others" content="The National Aeronautics and Space Administration is an independent agency of the US federal government responsible for the civil space program, aeronautics research, and space research." />
      <Message type="mine" content="Cool!" />
      <Message type="others" content="NASA was established in 1958, succeeding the National Advisory Committee for Aeronautics (NACA), to give the US space development effort a distinctly civilian orientation, emphasizing peaceful applications in space science. Since its establishment, most American space exploration efforts have been led by NASA, including the Apollo Moon landing missions, the Skylab space station, and later the Space Shuttle. NASA is supporting the International Space Station and is overseeing the development of the Orion spacecraft, the Space Launch System, Commercial Crew vehicles, and the planned Lunar Gateway space station. The agency is also responsible for the Launch Services Program, which provides oversight of launch operations and countdown management for uncrewed NASA launches." />
      <Message type="others" content="NASA's science is focused on better understanding Earth through the Earth Observing System; advancing heliophysics through the efforts of the Science Mission Directorate's Heliophysics Research Program; exploring bodies throughout the Solar System with advanced robotic spacecraft such as New Horizons; and researching astrophysics topics, such as the Big Bang, through the Great Observatories and associated programs." />
      <Message type="mine" content="The agency's administration is located at NASA Headquarters in Washington, DC, and provides overall guidance and direction. Except under exceptional circumstances, NASA civil service employees are required to be US citizens. NASA's administrator is nominated by the President of the United States subject to the approval of the US Senate, and serves at the President's pleasure as a senior space science advisor. The current administrator is Bill Nelson, appointed by President Joe Biden, since May 3, 2021." />
    </div>
    <form class="feed__input" onsubmit="{{ onSubmit }}">
      <input type="text" name="message">
      <button type="submit">Send</button>
    </form>
  </div>
</main>
`;
