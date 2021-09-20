const fs = require('fs');
const path = require('path');

const init = () => {
  !fs.existsSync(path.resolve('env.json')) &&
    fs.copyFileSync(path.resolve('env.example.json'), path.resolve('./env.json'));
};

module.exports = { init };
