export default function ServiceWorker() {
  let swUrl = `${process.env.PUBLIC_URL}/sw.js`;
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register(swUrl)
        .then(function (registration) {
          // Successful registration
          console.log(
            "Hooray. Registration successful, scope is:",
            registration.scope
          );
        })
        .catch(function (err) {
          // Failed registration, service worker won’t be installed
          console.log(
            "Whoops. Service worker registration failed, error:",
            err
          );
        });
    });
  }
}
