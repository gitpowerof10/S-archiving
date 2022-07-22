//github v.1.1

console.log('Service Worker waking up!');

self.addEventListener('install', event => {
  console.log('Service Worker installed!');
});

self.addEventListener('activate', event => {
 console.log('Service Worker  activated!');
});