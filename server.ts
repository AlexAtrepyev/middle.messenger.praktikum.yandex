const express = require('express');
const fallback = require('express-history-api-fallback');

const app = express();

const root = './dist';
app.use(express.static(root));
app.use(fallback('index.html', { root }));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
