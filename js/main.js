window.onload = () => {
  'use strict';
 console.log('inside main.js');
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.js');
  }

}