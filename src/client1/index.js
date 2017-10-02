'use stict';

const button = document.getElementById('js-button');

let hello = require('./hello');

function onClickButton() {
  alert(hello());
}

button.addEventListener('click', onClickButton, false);

if (module.hot) {
  module.hot.accept(function(err) {
    if (err) {
      console.error(err);
    }

    hello = require('./hello');
  });

  module.hot.dispose(function() {
    button.removeEventListener('click', onClickButton, false);
  });
}
