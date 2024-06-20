const products = [
    {
      id: 1,
      name: 'Écouteurs intra-auriculaires',
      description: 'Capacité batterie (mAh)	500mAh\n Couleurs	Noir Blanc\n Écouteurs intra-auriculaires TWS à suppression de bruit ANC Microphone ENC à écran tactile Son super basse Batterie longue durée Écouteurs étanches',
      price: 17500,
      images: [
        'https://s.alicdn.com/@sc04/kf/H8d4e33a9c7344e6aae486a7e45b05e24H.jpg',
        'https://s.alicdn.com/@sc04/kf/Hdb7f824324e84044b3eef68f9d9878eaB.jpg',
        'hhttps://s.alicdn.com/@sc04/kf/Hddcc916518fc4fcf97f1253fbb5c82c4C.jpg'
        ],
      vendorPhone: '+33758146261' 
    },
    {
      id: 2,
      name: 'Boîte de rangement polyvalente',
      description: 'Marque compatible	Tous les téléphones mobiles\n Produit	Boîte de rangement polyvalente\n Conception fonctionnelle	Multifonction\n Support de téléphone portable mural avec auto-adhésif pour salle de bain chambre cuisine support de chargeur télécommande boîte de rangement',
      price: 1200,
      images: [
        'https://s.alicdn.com/@sc04/kf/H0911ecc7982549489bd59d3976fc5378W.jpg',
        'https://s.alicdn.com/@sc04/kf/H9a2c6edd9c6e454e9f6cddff49f56dafc.jpg',
        'https://s.alicdn.com/@sc04/kf/H2fef3c9f9fa247439fe76a740fd921fcE.jpg',
      ],
      vendorPhone: '+33758146261' 
    },
    {
      id: 3,
      name: 'Sacs de Téléphone portable ',
      description: 'Brassard De Sport pour Téléphone Portable Pour Tous Les Téléphones mobiles Accessoire',
      price: 25000,
      images: [
        'https://s.alicdn.com/@sc04/kf/HTB1FQLZXOnrK1Rjy1Xcq6yeDVXah.jpg',
        'https://s.alicdn.com/@sc04/kf/HTB1XuTUinlYBeNjSszcq6zwhFXaW.jpg',
        'https://s.alicdn.com/@sc04/kf/HTB11gOaiXmWBuNjSspdq6zugXXaQ.jpg',
      ],
      vendorPhone: '+33758146261' 
    },
    {
      id: 4,
      name: 'Custom Brand',
      description: "Costume 3 pièces élégant avec pantalon pour homme, coupe Slim, bouton unique, tenue de soirée formelle, costume d'affaires",
      price: 150000,

      images: [
        'https://s.alicdn.com/@sc04/kf/H3a17680c893a4090abfe94b2ad36b21cR.jpg',
        'https://s.alicdn.com/@sc04/kf/Hd9c68838f4444723a0c5a633cffe073dn.jpg',
        'https://s.alicdn.com/@sc04/kf/H6db20e92226c43bc996db6197dd5be93l.jpg'
      ],
      vendorPhone: '+33758146261' 
    },
    {
      id: 5,
      name: '	Femmes Sexy Jupe',
      description: 'Jupe en denim pour femmes, longue, taille haute, mode de bureau, style décontracté, nouvelle collection été',
      price: 10000,
      images: [
        'https://s.alicdn.com/@sc04/kf/H85526e7e55e443c593b9302487ad2ba2R.jpg',
        'https://s.alicdn.com/@sc04/kf/H1f7aaa81232649b4b352c4e228268009O.jpg',
        'https://s.alicdn.com/@sc04/kf/Hfde0ff53a70a41ad82d118ee575586ffY.jpg'
        ],
      vendorPhone: '+33758146261' 
    },
    {
      id: 6,
      name: 'Robe',
      description: 'Tailles: XL | M | L',
      price: 8000,
      images: [
        'https://live.staticflickr.com/65535/53804146564_6d12963d8f_m.jpg',
        'https://live.staticflickr.com/65535/53803818431_29f2a5a591_m.jpg',
        'https://live.staticflickr.com/65535/53804063223_07ccde5008_m.jpg'
        ],
      vendorPhone: '+33758146261' 
    },

    // Vêtements
    {
        id: 7,
        name: 'Robe en gros et en détails',
        description: 'Tissu en coton,\n Disponible taille L | XL | XXL | 3XL',
        price: 8000,
        images: [
          'https://live.staticflickr.com/65535/53804063198_7af2ed9561_m.jpg',
          'https://live.staticflickr.com/65535/53802885782_77b847496f_m.jpg',
          'https://live.staticflickr.com/65535/53804146569_481a14341d_m.jpg'
          ],
        vendorPhone: '+33758146261' 
      },
    {
        id: 8,
        name: 'Robe de soirée femme',
        description: '100% Polyester Vente en gros de vêtements personnalisés pour femmes robes de bal en satin pour femme robe de soirée enveloppante chic à une épaule robe élégante',
        price: 20000,
        images: [
          'https://s.alicdn.com/@sc04/kf/Hbfc38afed3fc4b3984e40cbc5ed8a49cP.jpg',
          'https://s.alicdn.com/@sc04/kf/H5710996c11594111ad7b127ee5c8cd741.jpg',
          'https://s.alicdn.com/@sc04/kf/H43167ad91703404b8f759650953ff9c8B.jpg'
          ],
        vendorPhone: '+33758146261' 
      },
    {
        id: 9,
        name: 'sacs à main vintage pour dames',
        description: 'Grands sacs à main vintage pour dames: modèle 2023, fourre-tout en cuir PU et polyester, sacs à bandoulière chics pour femmes',
        price: 7000,
        images: [
          'https://s.alicdn.com/@sc04/kf/H2aa20b2331584b08914ebfdbecc8f76eo.jpg',
          'https://s.alicdn.com/@sc04/kf/H7d09183f2f284305bb1d08834b842c4eY.jpg',
          'https://s.alicdn.com/@sc04/kf/H0a2b7c07b5c2400cade43ace2db65141G.jpg'
        ],
        vendorPhone: '+33758146261' 
      },
    {
        id: 10, 
        name: 'H-P EliteBook 640G9',  
        description: "WINDOWS 11 HOME? Reconnaissance d'empreintes digitales, Fréquence principale du processeur	2.10 GHz, Capacité d'unité de disque dur(1): 512 Go, i5-1235U/16G/512G SSD, H-P EliteBook 640G9 Intel Core Series 12e génération CPU commercial/Offre Spéciale/grand public/maison/étudiant ordinateur portable",
        price: 250000,
        images: [
          'https://s.alicdn.com/@sc04/kf/H13b354835d0742a1919dab2e5386d5d90.jpg',
          'https://s.alicdn.com/@sc04/kf/H8d3e389715e449cba5f2c41c6f2a752cb.jpg',
          'https://s.alicdn.com/@sc04/kf/H161a4757294e4dc7bb291fa1c6ec19aaZ.jpg'
          ],
        vendorPhone: '+33758146261' 
      },
    {
        id: 11, 
        name: 'Pas de stock',  
        description: 'Bientôt disponible',
        price: 0,
        images: [
          'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600'
        ],
        vendorPhone: '+33758146261' 
      },
    {
        id: 12, 
        name: 'Pas de stock',  
        description: 'Bientôt disponible',
        price: 0,
        images: [
          'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600'
        ],
        vendorPhone: '+33758146261' 
      },

  ];