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
      price: 724.99,
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
      price: 524.99,

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
      price: 24.99,
      images: [
        'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600'
      ],
      vendorPhone: '+33758146261' 
    },
    {
      id: 6,
      name: 'Produit 2',
      description: 'Description du produit 2',
      price: 24.99,

      images: [
        'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600'
      ],
      vendorPhone: '+33758146261' 
    },

    // Vêtements
    {
        id: 7,
        name: 'Produit 2',
        description: 'Description du produit 2',
        price: 24.99,

        images: [
          'https://images.pexels.com/photos/3755706/pexels-photo-3755706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/6069553/pexels-photo-6069553.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/1389449/pexels-photo-1389449.jpeg?auto=compress&cs=tinysrgb&w=600'
        ],
        vendorPhone: '+33758146261' 
      },
    {
        id: 8,
        name: 'Produit 2',
        description: 'Description du produit 2',
        price: 24.99,

        images: [
          'https://images.pexels.com/photos/5490979/pexels-photo-5490979.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/9185791/pexels-photo-9185791.jpeg?auto=compress&cs=tinysrgb&w=600'
        ],
        vendorPhone: '+33758146261' 
      },
    {
        id: 9,
        name: 'Produit 2',
        description: 'Description du produit 2',
        price: 24.99,

        images: [
          'https://images.pexels.com/photos/7691089/pexels-photo-7691089.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/7691227/pexels-photo-7691227.jpeg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/8387838/pexels-photo-8387838.jpeg?auto=compress&cs=tinysrgb&w=600'
        ],
        vendorPhone: '+33758146261' 
      },
    {
        id: 10, name: 'Produit 2',  description: 'Description du produit 2',price: 24.99,images: [
          'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600'
        ],
        vendorPhone: '+33758146261' 
      },
    {
        id: 11, name: 'Produit 2',  description: 'Description du produit 2',price: 24.99,images: [
          'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600'
        ],
        vendorPhone: '+33758146261' 
      },
    {
        id: 12, name: 'Produit 2',  description: 'Description du produit 2',price: 24.99,images: [
          'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600'
        ],
        vendorPhone: '+33758146261' 
      },

  ];