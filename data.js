const products = [
    {
      id: 1,
      name: 'HP',
      description: 'RAM 8 Go, SSD 256 Go, AZERTY',
      price: 379.99,

      images: [
        'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=600'
      ],
      vendorPhone: '+33758146261' 
    },
    {
      id: 2,
      name: 'Acer Aspire',
      description: 'RAM 16 Go, SSD 512 Go',
      price: 534.99,
      images: [
        'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=600'
      ],
      vendorPhone: '+33758146261' 
    },
    {
      id: 3,
      name: 'Lenovo ',
      description: '8 Go DDR4,512 Go SSD,',
      price: 724.99,
      images: [
        'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=600' 
      ],
      vendorPhone: '+33758146261' 
    },
    {
      id: 4,
      name: 'Produit 2',
      description: 'Description du produit 2',
      price: 524.99,

      images: [
        'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600'
      ],
      vendorPhone: '+33758146261' 
    },
    {
      id: 5,
      name: 'Produit 2',
      description: 'Description du produit 2',
      price: 24.99,
      category: 'electronique',
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