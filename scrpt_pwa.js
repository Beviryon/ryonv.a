let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI notify the user they can install the PWA
  showInstallPromotion();
});

function showInstallPromotion() {
  const installBanner = document.createElement('div');
  installBanner.id = 'installBanner';
  installBanner.innerHTML = `
    <div style="
      position: fixed;
      bottom: 100px;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(0, 0, 0, 0.9);
      color: #fff;
      padding: 1em 2em;
      text-align: center;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
      animation: pulse 4s infinite;
      z-index: 1000;
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

    <style>
    @keyframes pulse {
      0% {
        opacity: 1;
      }
      50% {
        opacity: 0.1;
      }
      70% {
        opacity: 1;
      }
      85% {
        opacity: 1;
      }
      100% {
        opacity: 2;
      }
    }

    #installButton:hover {
      background: linear-gradient(45deg, #45a049, #4CAF50);
      transform: scale(1.05);
    }
    </style>
  `;
  document.body.appendChild(installBanner);

  const installButton = document.getElementById('installButton');
  installButton.addEventListener('click', () => {
    // Hide the app provided install promotion
    installBanner.style.display = 'none';
    // Show the install prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
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
  // Vérifier si l'utilisateur est sur iOS
  const isIos = () => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod/.test(userAgent);
  };

  // Vérifier si l'application est déjà ajoutée à l'écran d'accueil
  const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);

  // Si l'utilisateur est sur iOS et que l'application n'est pas déjà ajoutée
  if (isIos() && !isInStandaloneMode()) {
    showIosInstallBanner();
  }
});

function showIosInstallBanner() {
  const installBanner = document.createElement('div');
  installBanner.id = 'installBanner';
  installBanner.innerHTML = `
    <div style="
      position: fixed;
      bottom: 100px;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(0, 0, 0, 0.9);
      color: #fff;
      padding: 1em 2em;
      text-align: center;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
      animation: pulse 4s infinite;
      z-index: 1000;
    ">
      <p style="margin: 0 0 10px 0; font-size: 16px;">Installez notre application pour une meilleure expérience !</p>
      <p style="margin: 0 0 10px 0; font-size: 14px;">Appuyez sur <span style="font-weight: bold;">Partager</span> puis <span style="font-weight: bold;">Ajouter à l'écran d'accueil</span></p>
      <button id="closeBannerButton" style="
        padding: 0.7em 1.5em;
        background: linear-gradient(45deg, #f2ae01, #f2ae01);
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 14px;
        font-weight: bold;
        transition: all 0.3s ease;
      ">Fermer</button>
    </div>
  `;
  document.body.appendChild(installBanner);

  const closeBannerButton = document.getElementById('closeBannerButton');
  closeBannerButton.addEventListener('click', () => {
    installBanner.style.display = 'none';
  });
}

const style = document.createElement('style');
style.innerHTML = `
  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.1;
    }
    70% {
      opacity: 1;
    }
    85% {
      opacity: 1;
    }
    100% {
      opacity: 2;
    }
  }
  #installButton:hover {
    background: linear-gradient(45deg, #45a049, #4CAF50);
    transform: scale(1.05);
  }
`;
document.head.appendChild(style);
