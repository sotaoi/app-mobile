const fs = require('fs');
const path = require('path');

const init = () => {
  fs.existsSync(path.resolve('./mobile.entry.js')) && fs.unlinkSync(path.resolve('./mobile.entry.js'));
  !fs.existsSync(path.resolve('./mobile.entry.js')) && fs.symlinkSync('./index.js', path.resolve('./mobile.entry.js'));
};

module.exports = { init };
