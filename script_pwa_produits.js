let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  showInstallPromotion();
});

function showInstallPromotion() {
  const installBanner = document.createElement('div');
  installBanner.id = 'installBanner';
  installBanner.innerHTML = `
    <div style="
      position: fixed;
      top: 70%;
      left: 5%;
      transform: translateX(-50%);
      background: rgba(0, 0, 0, 0.9);
      color: #fff;
      padding: 1em 2em;
      text-align: center;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
      animation: pulse 4s infinite;
      z-index: 1001;
      width: 90%;
      box-sizing: border-box;
    ">
      <p style="margin: 0 0 10px 0; font-size: 16px;">Installez notre application pour une meilleure expérience !</p>
      <button id="installButton" style="
        padding: 0.7em 1.5em;
        background: linear-gradient(45deg, #f2ae01, #f2ae01);
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 14px;
        font-weight: bold;
        transition: all 0.3s ease;
      ">Installer</button>
    </div>
  `;
  document.body.appendChild(installBanner);

  const installButton = document.getElementById('installButton');
  installButton.addEventListener('click', () => {
    installBanner.style.display = 'none';
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
      deferredPrompt = null;
    });
  });
}

window.addEventListener('appinstalled', (evt) => {
  console.log('a2hs', 'installed');
});

// iOS-specific code
document.addEventListener('DOMContentLoaded', function() {
  const isIos = () => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod/.test(userAgent);
  };

  const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);

  if (isIos() && !isInStandaloneMode()) {
    showIosInstallBanner();
  }
});

function showSalesPopup() {
  const salesPopup = document.createElement('div');
  salesPopup.id = 'salesPopup';
  salesPopup.innerHTML = `
  <div style="
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(255, 255, 255, 0.95);
    color: #000;
    padding: 2em;
    text-align: center;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    z-index: 1001;
    width: 90%;
    box-sizing: border-box;
  ">
    <h2 style="margin-bottom: 20px;">Besoin de vendre vos articles ?</h2>
    <button id="yesButton" style="
      padding: 0.7em 1.5em;
      background: #4CAF50;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 14px;
      font-weight: bold;
      margin-right: 10px;
    ">Oui</button>
    <button id="noButton" style="
      padding: 0.7em 1.5em;
      background: #f44336;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 14px;
      font-weight: bold;
    ">Non</button>
  </div>
`;
  document.body.appendChild(salesPopup);

  const yesButton = document.getElementById('yesButton');
  const noButton = document.getElementById('noButton');

  yesButton.addEventListener('click', () => {
    window.location.href = 'https://wa.me/+33758146261';
  });

  noButton.addEventListener('click', () => {
    salesPopup.style.display = 'none';
  });
}

// Afficher le pop-up de vente après un certain temps ou une action
setTimeout(showSalesPopup, 10000);