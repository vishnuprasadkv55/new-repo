const PORT = 5000;
const app = require('./app');
const listener = () => console.log(`lintening to ${PORT}`);
app.listen(PORT, listener);
