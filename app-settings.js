// Configuration des langues supportées
const SUPPORTED_LANGUAGES = {
    fr: {
        name: 'Français',
        currency: 'FCFA',
        currencySymbol: 'F',
        dateFormat: 'DD/MM/YYYY',
        translations: {
            // Traductions communes
            addToCart: 'Ajouter au panier',
            removeFromCart: 'Retirer du panier',
            addToFavorites: 'Ajouter aux favoris',
            removeFromFavorites: 'Retirer des favoris',
            viewDetails: 'Voir détails',
            contactSeller: 'Contacter le vendeur',
            // ... autres traductions
        }
    },
    en: {
        name: 'English',
        currency: 'USD',
        currencySymbol: '$',
        dateFormat: 'MM/DD/YYYY',
        translations: {
            addToCart: 'Add to cart',
            removeFromCart: 'Remove from cart',
            addToFavorites: 'Add to favorites',
            removeFromFavorites: 'Remove from favorites',
            viewDetails: 'View details',
            contactSeller: 'Contact seller',
            // ... autres traductions
        }
    }
};

// Configuration des thèmes
const THEMES = {
    light: {
        name: 'light',
        colors: {
            primary: '#ffffff',
            secondary: '#f5f5f5',
            text: '#333333',
            accent: '#007bff',
            // ... autres couleurs
        }
    },
    dark: {
        name: 'dark',
        colors: {
            primary: '#1a1a1a',
            secondary: '#2d2d2d',
            text: '#ffffff',
            accent: '#0d6efd',
            // ... autres couleurs
        }
    }
};

// Classe principale pour gérer les paramètres de l'application
class AppSettings {
    constructor() {
        this.settings = this.loadSettings();
        this.initializeTheme();
        this.initializeLanguage();
        this.setupEventListeners();
    }

    // Charger les paramètres depuis le localStorage
    loadSettings() {
        const defaultSettings = {
            language: 'fr',
            theme: 'light',
            currency: 'FCFA',
            notifications: true,
            recentlyViewed: [],
            savedForLater: [],
            preferences: {
                showPrices: true,
                showStock: true,
                showRatings: true,
                showPromotions: true
            }
        };

        const savedSettings = localStorage.getItem('appSettings');
        return savedSettings ? { ...defaultSettings, ...JSON.parse(savedSettings) } : defaultSettings;
    }

    // Sauvegarder les paramètres dans le localStorage
    saveSettings() {
        localStorage.setItem('appSettings', JSON.stringify(this.settings));
        this.applySettings();
    }

    // Initialiser le thème
    initializeTheme() {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (!this.settings.theme) {
            this.settings.theme = prefersDark ? 'dark' : 'light';
        }
        this.applyTheme();
    }

    // Appliquer le thème
    applyTheme() {
        const theme = THEMES[this.settings.theme];
        document.documentElement.setAttribute('data-theme', theme.name);
        
        // Appliquer les variables CSS
        Object.entries(theme.colors).forEach(([key, value]) => {
            document.documentElement.style.setProperty(`--${key}-color`, value);
        });

        // Mettre à jour les icônes et autres éléments spécifiques au thème
        this.updateThemeDependentElements();
    }

    // Mettre à jour les éléments dépendants du thème
    updateThemeDependentElements() {
        const themeIcon = document.querySelector('.theme-toggle i');
        if (themeIcon) {
            themeIcon.className = this.settings.theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
    }

    // Initialiser la langue
    initializeLanguage() {
        const browserLang = navigator.language.split('-')[0];
        if (!this.settings.language && SUPPORTED_LANGUAGES[browserLang]) {
            this.settings.language = browserLang;
        }
        this.applyLanguage();
    }

    // Appliquer la langue
    applyLanguage() {
        const lang = SUPPORTED_LANGUAGES[this.settings.language];
        document.documentElement.setAttribute('lang', this.settings.language);
        
        // Mettre à jour les textes traduits
        this.updateTranslatedElements();
    }

    // Mettre à jour les éléments traduits
    updateTranslatedElements() {
        const translations = SUPPORTED_LANGUAGES[this.settings.language].translations;
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[key]) {
                element.textContent = translations[key];
            }
        });
    }

    // Configurer les écouteurs d'événements
    setupEventListeners() {
        // Écouteur pour le changement de thème
        const themeToggle = document.querySelector('.theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }

        // Écouteur pour le changement de langue
        const languageSelect = document.querySelector('.language-select');
        if (languageSelect) {
            languageSelect.addEventListener('change', (e) => this.setLanguage(e.target.value));
        }

        // Écouteur pour les préférences système
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!this.settings.theme) {
                this.setTheme(e.matches ? 'dark' : 'light');
            }
        });
    }

    // Changer de thème
    toggleTheme() {
        this.settings.theme = this.settings.theme === 'dark' ? 'light' : 'dark';
        this.saveSettings();
    }

    // Définir la langue
    setLanguage(lang) {
        if (SUPPORTED_LANGUAGES[lang]) {
            this.settings.language = lang;
            this.saveSettings();
        }
    }

    // Ajouter un produit aux "sauvegardés pour plus tard"
    addToSavedForLater(product) {
        if (!this.settings.savedForLater.some(p => p.id === product.id)) {
            this.settings.savedForLater.push(product);
            this.saveSettings();
        }
    }

    // Retirer un produit des "sauvegardés pour plus tard"
    removeFromSavedForLater(productId) {
        this.settings.savedForLater = this.settings.savedForLater.filter(p => p.id !== productId);
        this.saveSettings();
    }

    // Ajouter un produit à l'historique de navigation
    addToRecentlyViewed(product) {
        const maxHistory = 20;
        this.settings.recentlyViewed = [
            product,
            ...this.settings.recentlyViewed.filter(p => p.id !== product.id)
        ].slice(0, maxHistory);
        this.saveSettings();
    }

    // Obtenir les traductions
    getTranslation(key) {
        return SUPPORTED_LANGUAGES[this.settings.language].translations[key] || key;
    }

    // Formater le prix selon la devise
    formatPrice(price) {
        const lang = SUPPORTED_LANGUAGES[this.settings.language];
        return new Intl.NumberFormat(this.settings.language, {
            style: 'currency',
            currency: lang.currency
        }).format(price);
    }

    // Appliquer tous les paramètres
    applySettings() {
        this.applyTheme();
        this.applyLanguage();
        // Déclencher un événement personnalisé pour notifier les autres composants
        window.dispatchEvent(new CustomEvent('appSettingsChanged', { detail: this.settings }));
    }
}

// Exporter une instance unique
export const appSettings = new AppSettings(); 