const products = [

{
  id: 71,
  name: "Sac de perles",
  description: "Perso de luxe",
  price: 25000,
  category: 'sport',
  colors: ['#FFD700', '#C0C0C0', '#FFC0CB', '#FFFFFF'], // Or, Argent, Rose pâle, Blanc
  sizes: ['Standard'], // Taille unique pour les sacs
  images: [
    'https://live.staticflickr.com/65535/54228270743_01c73c8f7c_w.jpg',
    'https://live.staticflickr.com/65535/54228441095_8883de9e26_w.jpg',
  ],
  like: 0,
  seller: {
    name: 'TOUTOU',
    phone: '+33656763491',
    country: 'FR',
    rating: 4.8
  },
  vendorPhone: '+33656763491',
  promotion: {
    discount: 8, 
    endDate: '2024-01-21T23:59:59' 
  },
  stock: 10,
  rating: 5.9,
  // isBestSeller: true
},

{
  id: 70,
  name: "Sac de parles",
  description: "Perso de luxe",
  price: 20000,
  category: 'sport',
  colors: ['#FFD700', '#FF69B4', '#4169E1', '#FFFFFF'], // Or, Rose vif, Bleu royal, Blanc
  sizes: ['Standard'],
  images: [
    'https://live.staticflickr.com/65535/54236078840_fa3b86eed7_w.jpg',
    'https://live.staticflickr.com/65535/54228270748_0c38306427_w.jpg',
  ],
  like: 0,
  seller: {
    name: 'TOUTOU',
    phone: '+33656763491',
    country: 'FR',
    rating: 4.8
  },
  vendorPhone: '+33656763491',
  promotion: {
    discount: 8, 
    endDate: '2024-01-21T23:59:59' 
  },
  stock: 10,
  rating: 5.9,
  // isBestSeller: true
},

{
  id: 69,
  name: "Sac de parles",
  description: "Perso de luxe",
  price: 20000,
  category: 'sport',
  colors: ['#FFD700', '#FF1493', '#000000', '#FFFFFF'], // Or, Rose foncé, Noir, Blanc
  sizes: ['Standard'],
  images: [
    'https://live.staticflickr.com/65535/54227128347_5398b0702f_w.jpg',
    'https://live.staticflickr.com/65535/54227128332_205cd36f2c_w.jpg',
  ],
  like: 0,
  seller: {
    name: 'TOUTOU',
    phone: '+33656763491',
    country: 'FR',
    rating: 4.8
  },
  vendorPhone: '+33656763491',
  promotion: {
    discount: 8, 
    endDate: '2024-01-21T23:59:59' 
  },
  stock: 10,
  rating: 5.9,
  // isBestSeller: true
},

{
  id: 68,
  name: "Sac de parles",
  description: "Perso de luxe",
  price: 15000,
  category: 'sport',
  images: [
  'https://live.staticflickr.com/65535/54228441110_f7c51fa0a8_w.jpg',
  'https://live.staticflickr.com/65535/54235665601_8c0ea3a24e_w.jpg',
  'https://live.staticflickr.com/65535/54234765232_61486189f8_w.jpg',
  ],
  like: 0,
  seller: {
    name: 'TOUTOU',
    phone: '+33656763491',
    country: 'FR',
    rating: 4.8
  },
  vendorPhone: '+33656763491',
  promotion: {
    discount: 8, 
    endDate: '2024-01-21T23:59:59' 
  },
  stock: 10,
  rating: 5.9,
  // isBestSeller: true
},

{
  id: 67,
  name: "Eventail",
  description: "Perso de luxe",
  price: 35000,
  category: 'sport',
  images: [
  'https://live.staticflickr.com/65535/54234765247_5472c394c7_w.jpg',
  'https://live.staticflickr.com/65535/54228041381_18c25090b6_w.jpg',
  ],
  like: 0,
  seller: {
    name: 'TOUTOU',
    phone: '+33656763491',
    country: 'FR',
    rating: 4.8
  },
  vendorPhone: '+33656763491',
  promotion: {
    discount: 8, 
    endDate: '2024-01-21T23:59:59' 
  },
  stock: 10,
  rating: 5.9,
  // isBestSeller: true
},

{
  id: 66,
  name: "Sac de perles",
  description: "Sac femme",
  price: 25000,
  category: 'sport',
  images: [
  'https://live.staticflickr.com/65535/54228270838_705fdc5a4a_w.jpg',
  'https://live.staticflickr.com/65535/54227128347_5398b0702f_w.jpg',
  ],
  like: 0,
  seller: {
    name: 'TOUTOU',
    phone: '+33656763491',
    country: 'FR',
    rating: 4.8
  },
  vendorPhone: '+33656763491',
  promotion: {
    discount: 8, 
    endDate: '2024-01-21T23:59:59' 
  },
  stock: 10,
  rating: 5.9,
  // isBestSeller: true
},

{
  id: 65,
  name: "Outil de Réparation",
  description: "32 en 1",
  price: 5200,
  category: 'sport',
  colors: ['#C0C0C0', '#000000', '#FF0000'], // Argent, Noir, Rouge
  sizes: ['Standard'], // Taille unique pour les outils
  images: [
    'https://s.alicdn.com/@sc04/kf/Ad7199eb957a748a89109961d289b539dp.jpg_720x720q50.jpg',
    'https://s.alicdn.com/@sc04/kf/A9e242b649c704adf90933e3cc9d67c58p.jpg_720x720q50.jpg',
    'https://s.alicdn.com/@sc04/kf/A95ac419bfb5f4e46ba9d4c83175ab1462.jpg_720x720q50.jpg',
    'https://s.alicdn.com/@sc04/kf/A654206ed8aed4320b8c1e67b89e65a09a.jpg_720x720q50.jpg',
  ],
  like: 0,
  seller: {
    name: 'RYONV',
    phone: '+33758146261',
    country: 'FR',
    rating: 4.8
  },
  vendorPhone: '+33758146261',
  promotion: {
    discount: 8, 
    endDate: '2024-01-21T23:59:59' 
  },
  stock: 10,
  rating: 5.9,
  isBestSeller: true
},

{
  id: 64,
  name: "Drap de luxe",
  description: "Semblable à la soie",
  price: 12000,
  category: 'maison',
  images: [
  'https://s.alicdn.com/@sc04/kf/He26129dfa08742cea5a0b8360fdd811e6.png?avif=close',
  'https://s.alicdn.com/@sc04/kf/Hac18b4d16b8c460d9d737730625e3990R.jpg?avif=close',
  'https://s.alicdn.com/@sc04/kf/Ha53bc8da82c7489b92c9751ac9ec2e6fT.jpg?avif=close',
  'https://s.alicdn.com/@sc04/kf/Hb852a9d338324686ac9dc27d2d4014d3r.jpg?avif=close',
  'https://s.alicdn.com/@sc04/kf/H7e753c881cf044d99e78868df884352en.jpg?avif=close',
  ],
  like: 0,
  seller: {
    name: 'Sasa',
    phone: '+242066262052',
    country: 'CG',
    rating: 4.8
  },
  vendorPhone: '+242066262052',
  promotion: {
    discount: 10, 
    endDate: '2024-01-21T23:59:59' 
  },
  stock: 10,
  rating: 4.9,
  isTrending: true,
},

{
  id: 63,
  name: "Parfun H&F",
  description: "Soyez inoubliable",
  price: 10000,
  category: 'sport',
  images: [
  'https://live.staticflickr.com/65535/54219468514_7bfb36310b_w.jpg',
  'https://live.staticflickr.com/65535/54218330397_b1ec448738_w.jpg',
  'https://live.staticflickr.com/65535/54219468499_2524da1d65_w.jpg',
  'https://live.staticflickr.com/65535/54219635465_752193c441_w.jpg',
  'https://live.staticflickr.com/65535/54219468494_7649dc85dd_w.jpg',
  ],
  like: 0,
  seller: {
    name: 'Sasa',
    phone: '+242066262052',
    country: 'CG',
    rating: 4.8
  },
  vendorPhone: '+242066262052',
  promotion: {
    discount: 10, 
    endDate: '2024-01-21T23:59:59' 
  },
  stock: 10,
  rating: 4.9,
  isTrending: true,
},

{
  id: 62,
  name: "Parfun H&F",
  description: "Sentez la magie",
  price: 9000,
  category: 'sport',
  images: [
  'https://live.staticflickr.com/65535/54219635530_42defb866c_n.jpg',
  'https://live.staticflickr.com/65535/54218330412_683eac9333.jpg',
  'https://live.staticflickr.com/65535/54218330412_683eac9333.jpg',
  'https://live.staticflickr.com/65535/54219468504_6799c41f72.jpg',
  ],
  like: 0,
  seller: {
    name: 'Sasa',
    phone: '+242066262052',
    country: 'CG',
    rating: 4.8
  },
  vendorPhone: '+242066262052',
  promotion: {
    discount: 10, 
    endDate: '2024-01-21T23:59:59' 
  },
  stock: 10,
  rating: 4.9,
  isTrending: true,
},

{
  id: 61,
  name: "Parfun H&F",
  description: "Éveillez vos sens ",
  price: 9000,
  category: 'sport',
  images: [
  'https://live.staticflickr.com/65535/54219635595_0dd113ca44_n.jpg',
  'https://live.staticflickr.com/65535/54219244286_c9fbe142fd_w.jpg',
  'https://live.staticflickr.com/65535/54218330452_9f34b3b3a1_n.jpg',
  'https://live.staticflickr.com/65535/54219468559_c0aa3930d5.jpg',
  ],
  like: 0,
  seller: {
    name: 'Sasa',
    phone: '+242066262052',
    country: 'CG',
    rating: 4.8
  },
  vendorPhone: '+242066262052',
  promotion: {
    discount: 10, 
    endDate: '2024-01-21T23:59:59' 
  },
  stock: 10,
  rating: 4.9,
  isTrending: true,
},

{
  id: 60,
  name: "Montre homme",
  description: "Montre",
  price: 16000,
  category: 'sport',
  images: [
  'https://live.staticflickr.com/65535/54218330487_84c91e1320_w.jpg',
  'https://live.staticflickr.com/65535/54219635580_ac57aa281d_n.jpg',
  'https://live.staticflickr.com/65535/54218330447_5a2e18f5b8_n.jpg',
  ],
  like: 0,
  seller: {
    name: 'Sasa',
    phone: '+242066262052',
    country: 'CG',
    rating: 4.8
  },
  vendorPhone: '+242066262052',
  promotion: {
    discount: 10, 
    endDate: '2024-01-21T23:59:59' 
  },
  stock: 10,
  rating: 4.9,
  isTrending: true,
},

{
  id: 59,
  name: "Montre homme",
  description: "Montre",
  price: 16000,
  category: 'sport',
  images: [
  'https://live.staticflickr.com/65535/54219635620_639ffbee85_n.jpg',
  'https://live.staticflickr.com/65535/54218330487_84c91e1320_w.jpg',
  ],
  like: 0,
  seller: {
    name: 'Sasa',
    phone: '+242066262052',
    country: 'CG',
    rating: 4.8
  },
  vendorPhone: '+242066262052',
  promotion: {
    discount: 10, 
    endDate: '2024-01-21T23:59:59' 
  },
  stock: 10,
  rating: 4.9,
  isTrending: true,
},

{
  id: 58,
  name: "Montre homme",
  description: "Montre",
  price: 12000,
  category: 'sport',
  images: [
  'https://live.staticflickr.com/65535/54219244251_fc5bbed7fa_n.jpg',
  'https://live.staticflickr.com/65535/54218330422_6951641c8c_n.jpg',
  ],
  like: 0,
  seller: {
    name: 'Sasa',
    phone: '+242066262052',
    country: 'CG',
    rating: 4.8
  },
  vendorPhone: '+242066262052',
  promotion: {
    discount: 10, 
    endDate: '2024-01-21T23:59:59' 
  },
  stock: 10,
  rating: 4.9,
  isTrending: true,
},

{
  id: 57,
  name: "Robe sexy",
  description: "Robe de bal",
  price: 9000,
  category: 'vetements',
  colors: ['#C0C0C0', '#000000', '#FF0000'], // Argent, Noir, Rouge
  sizes: ['Standard'], // Taille unique pour les outils
  images: [
  'https://live.staticflickr.com/65535/54191950658_7f59510397_n.jpg',
  'https://www.flickr.com/photos/deslogroup/54192142195/in/dateposted/',
  'https://www.flickr.com/photos/deslogroup/54192142195/in/dateposted/',
  'https://www.flickr.com/photos/deslogroup/54192142210/in/dateposted/',
  ],
  like: 0,
  seller: {
    name: 'RYONV',
    phone: '+330758146261',
    country: 'FR',
    rating: 4.8
  },
  vendorPhone: '+330758146261',
  promotion: {
    discount: 10, 
    endDate: '2024-10-21T23:59:59' 
  },
  stock: 10,
  rating: 4.9,
  isTrending: true,
},

{
  id: 56,
  name: "Robe bandage sexy",
  description: "Robe de bal",
  price: 9500,
  category: 'vetements',
  colors: ['#C0C0C0', '#000000', '#FF0000'], // Argent, Noir, Rouge
  sizes: ['Standard'], // Taille unique pour les outils
  images: [
  'https://s.alicdn.com/@sc04/kf/H87f5f20a66434abf8bfba4155a504f3d0.jpg?avif=close',
  'https://s.alicdn.com/@sc04/kf/H1828d107c7704fe5a5a4d3558981403cG.jpg?avif=close',
  'https://s.alicdn.com/@sc04/kf/H83fb4f21d04448d9933ca8756bef3050t.jpg?avif=close',
  'https://s.alicdn.com/@sc04/kf/H2c72b7643c0745fb9d20720e613cab66y.jpg?avif=close',
  'https://s.alicdn.com/@sc04/kf/H2c72b7643c0745fb9d20720e613cab66y.jpg?avif=close',
  ],
  like: 0,
  seller: {
    name: 'RYONV',
    phone: '+330758146261',
    country: 'FR',
    rating: 4.8
  },
  vendorPhone: '+330758146261',
  promotion: {
    discount: 10, 
    endDate: '2024-10-21T23:59:59' 
  },
  stock: 5,
  rating: 4.9,
  isTrending: true,
},

{
  id: 55,
  name: "Lisseur à cheveux",
  description: "Brosse chauffante électrique",
  price: 9795,
  category: 'sport',
  images: [
  'https://s.alicdn.com/@sc04/kf/Hb53394b7cafb4bd184b05c406af4a030n.jpg?avif=close',
  'https://s.alicdn.com/@sc04/kf/Hd76e7e5b391a47089589a2e66c15d607i.jpg?avif=close',
  'https://s.alicdn.com/@sc04/kf/H8d31e7b0b4a94062b29f7b848e2208bb8.jpg?avif=close',
  'https://s.alicdn.com/@sc04/kf/Hf34a725ea85d4095b48c4bee4ca855fd0.jpg?avif=close',
  'https://s.alicdn.com/@sc04/kf/Hd05e6357081840359371599ddc5e8504N.jpg?avif=close',
  ],
  like: 0,
  seller: {
    name: 'RYONV',
    phone: '+330758146261',
    country: 'FR',
    rating: 4.8
  },
  vendorPhone: '+330758146261',
  promotion: {
    discount: 10, 
    endDate: '2024-10-21T23:59:59' 
  },
  stock: 9,
  rating: 4.9,
  isBestSeller: true
},

{
  id: 53,
  name: "Tondeuse à sourcils",
  description: "Rasoir pour épilation",
  price: 735,
  category: 'sport',
  images: [
  'https://s.alicdn.com/@sc04/kf/H7c8cc19a94ef4649bad21468d10a1f10E.jpg?avif=close',
  'https://s.alicdn.com/@sc04/kf/Hb6bbc337110c4aca86a07603ee7e30086.jpg?avif=close',
  'https://s.alicdn.com/@sc04/kf/Ae713c25ab5ee4bc1ab48bc675e5f360ai.jpg?avif=close',
  'https://s.alicdn.com/@sc04/kf/H51263bb3e6c4485c9ce70201b60b79beJ.jpg?avif=close',
  'https://s.alicdn.com/@sc04/kf/A14c4a8f9abef463886f0546456fafa71J.jpg?avif=close',
  ],
  like: 0,
  seller: {
    name: 'RYONV',
    phone: '+330758146261',
    country: 'FR',
    rating: 4.8
  },
  vendorPhone: '+330758146261',
  promotion: {
    discount: 10, 
    endDate: '2024-10-21T23:59:59' 
  },
  stock: 9,
  rating: 4.9,
  isTrending: true,
},

{
  id: 52,
  name: "Sac à main",
  description: "Sac à main en cuir ",
  price: 4950,
  category: 'sport',
  colors: ['#C0C0C0', '#000000', '#FF0000'], // Argent, Noir, Rouge
  sizes: ['Standard'], // Taille unique pour les outils
  images: [
  'https://s.alicdn.com/@sc04/kf/H76de0525b96449729fdb3baeeb58827cz.jpg?avif=close',
  'https://s.alicdn.com/@sc04/kf/H914bb45782cf407e8e343e9aeab6823bJ.jpg?avif=close',
  'https://s.alicdn.com/@sc04/kf/H9cdbe988908b446db11ed8791f0c6a86n.jpg?avif=close',
  'https://s.alicdn.com/@sc04/kf/H0e4b50cbc1b74d16b8c4b5d4babdb6a7C.jpg?avif=close',
  'https://s.alicdn.com/@sc04/kf/H8868205d661b4a10a4ece7aeca057530i.jpg?avif=close',
  ],
  like: 0,
  seller: {
    name: 'RYONV',
    phone: '+330758146261',
    country: 'FR',
    rating: 4.8
  },
  vendorPhone: '+330758146261',
  promotion: {
    discount: 10, 
    endDate: '2024-10-21T23:59:59' 
  },
  stock: 9,
  rating: 4.9,
  isTrending: true,
},

{
  id: 51,
  name: "Sèche-cheveux",
  description: "Sèche-cheveux ",
  price: 8250,
  category: 'sport',
  images: [
  'https://s.alicdn.com/@sc04/kf/Hc14cac1e0cd841beab89da77268881a7W.jpg?avif=close',
  'https://s.alicdn.com/@sc04/kf/H293aef12eb504402af146e9636d74254M.jpg?avif=close',
  'https://s.alicdn.com/@sc04/kf/H95b7987f9eef41239023d7587e40f070z.jpg?avif=close',
  'https://s.alicdn.com/@sc04/kf/H95b7987f9eef41239023d7587e40f070z.jpg?avif=close',
  'https://s.alicdn.com/@sc04/kf/H26fd427cb40f4100b9e3481e7735f29eC.png?avif=close',
  ],
  like: 0,
  seller: {
    name: 'RYONV',
    phone: '+330758146261',
    country: 'FR',
    rating: 4.8
  },
  vendorPhone: '+330758146261',
  promotion: {
    discount: 10, 
    endDate: '2024-10-21T23:59:59' 
  },
  stock: 9,
  rating: 4.9,
  isTrending: true,
},

{
  id: 50,
  name: "Brosses du cuir chevelu",
  description: "Peigne à racines",
  price: 1200,
  category: 'sport',
  images: [
  'https://s.alicdn.com/@sc04/kf/Hc1e4f43822ca41f5957d07c5c19487e1K.jpg?avif=close',
  'https://s.alicdn.com/@sc04/kf/H6c1fbe129abd4f418e8647b23c8c5bfbX.jpg?avif=close',
  'https://s.alicdn.com/@sc04/kf/Hdbc7111a81404fa38f563f9889a267a4K.jpg?avif=close',
  'https://s.alicdn.com/@sc04/kf/He485933ddb6d4c06a08682809f910130G.jpg?avif=close',
  'https://s.alicdn.com/@sc04/kf/Hdaa3e401254c473b91d3d17dc7f6eb0bx.jpg?avif=close',
  ],
  like: 0,
  seller: {
    name: 'RYONV',
    phone: '+330758146261',
    country: 'FR',
    rating: 4.8
  },
  vendorPhone: '+330758146261',
  promotion: {
    discount: 10, 
    endDate: '2024-10-21T23:59:59' 
  },
  stock: 9,
  rating: 4.9,
  isBestSeller: true
},

{
  id: 54,
  name: "Sous-vêtements sexy",
  description: 'Nylon/nylon',
  price: 1250,
  category: 'vetements',
  colors: ['#C0C0C0', '#000000', '#FF0000'], // Argent, Noir, Rouge
  sizes: ['Standard'], // Taille unique pour les outils
  images: [
  'https://s.alicdn.com/@sc04/kf/Hb2f9c0a0b3f043e0af24262a621339c93.jpg?avif=close',
  'https://s.alicdn.com/@sc04/kf/H0848a52d5ae74774be2a62389f1f8a70N.jpg?avif=close',
  'https://s.alicdn.com/@sc04/kf/H696342a88d9f47079135b46fba1b6d71E.jpg?avif=close',
  'https://s.alicdn.com/@sc04/kf/Hdefc13447a8e4669b0b404ab6e3b544cZ.jpg?avif=close',
  'https://s.alicdn.com/@sc04/kf/H0b4bced0329e4d7e923a6a57ca22af55m.jpg?avif=close',
  ],
  like: 0,
  seller: {
    name: 'RYONV',
    phone: '+330758146261',
    country: 'FR',
    rating: 4.8
  },
  vendorPhone: '+330758146261',
  promotion: {
    discount: 10, 
    endDate: '2024-10-21T23:59:59' 
  },
  stock: 9,
  rating: 4.9,
  isTrending: true,
},

{
  id: 49,
  name: "Brosse nettoyante",
  description: 'Élimination des points noirs',
  price: 3250,
  category: 'sport',
  images: [
  'https://s.alicdn.com/@sc04/kf/H9a016652dd7d4693a51cbf2d094496ffn.jpg?avif=close',
  'https://s.alicdn.com/@sc04/kf/Hec0a1abf3ecb49d9b5a66dde4c47525cR.jpg?avif=close',
  'https://s.alicdn.com/@sc04/kf/Hec0a1abf3ecb49d9b5a66dde4c47525cR.jpg?avif=close',
  'https://s.alicdn.com/@sc04/kf/H5bcc253750734776b76b194095221976Q.jpg?avif=close',
  'https://s.alicdn.com/@sc04/kf/Hd83cba4ffcb64c36bb6921cf905debff0.jpg?avif=close',
  ],
  like: 0,
  seller: {
    name: 'RYONV',
    phone: '+330758146261',
    country: 'FR',
    rating: 4.8
  },
  vendorPhone: '+330758146261',
  promotion: {
    discount: 10, 
    endDate: '2024-10-21T23:59:59' 
  },
  stock: 9,
  rating: 4.9,
  isBestSeller: true
},

{
  id: 48,
  name: "Pyjama court",
  description: 'Polyester / Coton',
  price: 1350,
  category: 'vetements',
  colors: ['#C0C0C0', '#000000', '#FF0000'], // Argent, Noir, Rouge
  sizes: ['Standard'], // Taille unique pour les outils
  images: [
  'https://s.alicdn.com/@sc04/kf/Hcd3bf86f54c840d8bf06631e96dcd2dbr.png?avif=close',
  'https://s.alicdn.com/@sc04/kf/He6e2c72351b6446daa985b3d72a87037V.jpg?avif=close',
  'https://s.alicdn.com/@sc04/kf/H0d07ca0f31e243e68bd327dad68f6b3bm.png?avif=close',
  'https://s.alicdn.com/@sc04/kf/Hb0e6331ef7fe493ebca286d3fddfed2aZ.png?avif=close',
  'https://s.alicdn.com/@sc04/kf/Hcd2493d1d00c43b88fa21488b797aa448.png?avif=close',
  ],
  like: 0,
  seller: {
    name: 'RYONV',
    phone: '+330758146261',
    country: 'FR',
    rating: 4.8
  },
  vendorPhone: '+330758146261',
  promotion: {
    discount: 10, 
    endDate: '2024-10-21T23:59:59' 
  },
  stock: 9,
  rating: 4.9,
  isBestSeller: true
},

{
  id: 47,
  name: "Pull homme",
  description: 'Polyester / Coton',
  price: 13500,
  category: 'vetements',
  colors: ['#000000', '#808080', '#4169E1', '#8B4513'], // Noir, Gris, Bleu royal, Marron
  sizes: ['M', 'L', 'XL', 'XXL'],
  images: [
    'https://s.alicdn.com/@sc04/kf/He6cd3f5b412d44eaa8984613536fa793n.jpg?avif=close',
    'https://s.alicdn.com/@sc04/kf/H49c5911454904f00a0375b82ff700bbcC.jpg?avif=close',
    'https://s.alicdn.com/@sc04/kf/Heeb416ee0b4a49d6871388bdb41aa1fev.jpg?avif=close',
    'https://s.alicdn.com/@sc04/kf/H22b875407d3f40d7a70bcd1cfe4fed2ad.jpg?avif=close',
    'https://s.alicdn.com/@sc04/kf/Ha15d9c021e4a4bd78c62885b3d72c38dg.jpg?avif=close',
  ],
  like: 0,
  seller: {
    name: 'RYONV',
    phone: '+330758146261',
    country: 'FR',
    rating: 4.8
  },
  vendorPhone: '+330758146261',
  promotion: {
    discount: 10, 
    endDate: '2024-10-21T23:59:59' 
  },
  stock: 9,
  rating: 4.9,
  isBestSeller: true
},

{
  id: 46,
  name: "Chemises YiXin",
  description: 'Polyester / Coton',
  price: 7500,
  category: 'vetements',
  colors: ['#FFFFFF', '#87CEEB', '#FFB6C1', '#98FB98'], // Blanc, Bleu ciel, Rose, Vert clair
  sizes: ['S', 'M', 'L', 'XL'],
  images: [
    'https://s.alicdn.com/@sc04/kf/H30be75e72c63440aa6a0752aadcaafbb6.jpeg?avif=close',
    'https://s.alicdn.com/@sc04/kf/H87253c2c346945ac9369cbe7d12f2a28M.jpeg?avif=close',
    'https://s.alicdn.com/@sc04/kf/H9f4f8f198e60435fb1cd3786c244918c3.jpeg?avif=close',
    'https://s.alicdn.com/@sc04/kf/Hd7b21386397b4075a82f8513ceca96e3N.jpeg?avif=close',
    'https://s.alicdn.com/@sc04/kf/Hca28d6eb9cd04535ba3206de701a8b15C.jpg?avif=close',
  ],
  like: 0,
  seller: {
    name: 'RYONV',
    phone: '+330758146261',
    country: 'FR',
    rating: 4.8
  },
  vendorPhone: '+330758146261',
  promotion: {
    discount: 10, 
    endDate: '2024-10-21T23:59:59' 
  },
  stock: 9,
  rating: 4.9,
  isBestSeller: true
},

{
  id: 45,
  name: "Pantalon",
  description: 'Polyester / Coton',
  price: 8500,
  category: 'vetements',
  colors: ['#C0C0C0', '#000000', '#FF0000'], // Argent, Noir, Rouge
  sizes: ['Standard'], // Taille unique pour les outils
  images: [
  'https://s.alicdn.com/@sc04/kf/H25c22a9ac06f4cd39d531a8878e613e9X.jpg?avif=close',
  'https://s.alicdn.com/@sc04/kf/H5e670eae90854336b2912e80418ae04f0.jpg?avif=close',
  'https://s.alicdn.com/@sc04/kf/He60fff76adda4576bb5bdee2b126735fd.jpg?avif=close',
  'https://s.alicdn.com/@sc04/kf/Hbbe5fa4fa90b4aa89156cab25d3ef816h.jpg?avif=close',

  ],
  like: 0,
  seller: {
    name: 'RYONV',
    phone: '+330758146261',
    country: 'FR',
    rating: 4.8
  },
  vendorPhone: '+330758146261',
  promotion: {
    discount: 10, 
    endDate: '2024-10-21T23:59:59' 
  },
  stock: 9,
  rating: 4.9
},
  
{
  id: 44,
  name: "Eponges de maquillage ",
  description: 'Eponge douce',
  price: 2500,
  category: 'sport',
  images: [
  'https://s.alicdn.com/@sc04/kf/H94325898330942d0a09b995b25fa27fcJ.jpg?avif=close',
  'https://s.alicdn.com/@sc04/kf/Hf32202c5f8d7494a8f8eb7f53163efeek.jpg?avif=close',
  'https://s.alicdn.com/@sc04/kf/H7f453fdda4504b43a74f6d7ad7231ed4P.jpg?avif=close',
  'https://s.alicdn.com/@sc04/kf/H686f020447444d01ab6329a3e35d9854c.jpg?avif=close',
  ],
  like: 0,
  seller: {
    name: 'RYONV',
    phone: '+330758146261',
    country: 'FR',
    rating: 4.8
  },
  vendorPhone: '+330758146261',
  promotion: {
    discount: 10, 
    endDate: '2024-10-21T23:59:59' 
  },
  stock: 9,
  rating: 4.9,
  isBestSeller: true
  },
    

{
id: 43,
name: "Eponges de beauté",
description: '10 pièces ',
price: 2500,
category: 'sport',
images: [
'https://s.alicdn.com/@sc04/kf/He7cfb16b3c4e421698e572930f8c95edy.jpg?avif=close',
'https://s.alicdn.com/@sc04/kf/Hce84de98404346aaab1e24ed14f074f2Z.jpg?avif=close',
'https://s.alicdn.com/@sc04/kf/Hce3a0674dd6f4538892de5dd022c09b6H.jpg?avif=close',
'https://s.alicdn.com/@sc04/kf/H6d7cef328a234c5bb25fa9e4a7a96dcf8.jpg?avif=close',
],
like: 0,
seller: {
  name: 'RYONV',
  phone: '+330758146261',
  country: 'FR',
  rating: 4.8
},
vendorPhone: '+330758146261',
promotion: {
  discount: 10, 
  endDate: '2024-10-21T23:59:59' 
},
stock: 9,
rating: 4.9,
isBestSeller: true
},

{
id: 37,// Vêtements 
name: "Chemise homme",
description: 'Toutes les tailles',
price: 12500,
category: 'vetements',
colors: ['#FFFFFF', '#000000', '#4169E1', '#DC143C'], // Blanc, Noir, Bleu royal, Rouge
sizes: ['S', 'M', 'L', 'XL', 'XXL'],
images: [
'https://s.alicdn.com/@sc04/kf/Hd9cdb4b4811d40dcbf1f2f200e2443acE.jpg?avif=close',
'https://s.alicdn.com/@sc04/kf/Hd95ee3ffa47741efbdeddc8bff2758a0D.jpg?avif=close',
'https://s.alicdn.com/@sc04/kf/Hf85b4cb00a5c4c99bde8c3ced3bf70d9E.jpg?avif=close',
'https://s.alicdn.com/@sc04/kf/Hf32657d9fb0c4226b69ae83740c2a181q.jpg?avif=close',
'https://s.alicdn.com/@sc04/kf/Hc0bc2a2881f0493dba69462cbbffc9b1l.jpg?avif=close',
],
like: 0,
seller: {
  name: 'RYONV',
  phone: '+330758146261',
  country: 'FR',
  rating: 4.8
},
vendorPhone: '+330758146261',
promotion: {
  discount: 10, 
  endDate: '2024-10-21T23:59:59' 
},
stock: 9,
rating: 4.9
},

{
id: 37,// Vêtements 
name: "Complet femme",
description: 'Toutes les tailles',
price: 8500,
category: 'vetements',
colors: ['#FFFFFF', '#000000', '#4169E1', '#DC143C'], // Blanc, Noir, Bleu royal, Rouge
sizes: ['S', 'M', 'L', 'XL', 'XXL'],
images: [
'https://live.staticflickr.com/65535/54087796153_bd4af03e4b_w.jpg',
'https://live.staticflickr.com/65535/54087546136_d39fdaecb1_w.jpg',
'https://live.staticflickr.com/65535/54088000980_6d8864ce94_w.jpg',
'https://live.staticflickr.com/65535/54088000970_0b804b9a88_w.jpg',
],
like: 0,
seller: {
  name: 'RAAM',
  phone: '+242069954916',
  country: 'CG',
  rating: 2.5
},
vendorPhone: '+242069954916',
promotion: {
  discount: 10, 
  endDate: '2024-10-21T23:59:59' 
},
stock: 9,
rating: 4.9
},

{
id: 38,// Vêtements 
name: "Robe femme",
description: 'Toutes les tailles',
price: 6000,
category: 'vetements',
colors: ['#FFFFFF', '#000000', '#4169E1', '#DC143C'], // Blanc, Noir, Bleu royal, Rouge
sizes: ['S', 'M', 'L', 'XL', 'XXL'],
images: [
'https://live.staticflickr.com/65535/54087877064_c388e1a914_w.jpg',
'https://live.staticflickr.com/65535/54087796148_98db3420b3_w.jpg',
'https://live.staticflickr.com/65535/54086666982_271724e7bf_n.jpg',
],
like: 0,
seller: {
  name: 'RAAM',
  phone: '+242069954916',
  country: 'CG'
},
vendorPhone: '+242069954916',
promotion: {
  discount: 10, 
  endDate: '2024-10-21T23:59:59' 
},
stock: 9,
rating: 4.9
},

{
id: 39,// Vêtements 
name: "Complet femme",
description: 'Toutes les tailles',
price: 6000,
category: 'vetements',
colors: ['#FFFFFF', '#000000', '#4169E1', '#DC143C'], // Blanc, Noir, Bleu royal, Rouge
sizes: ['S', 'M', 'L', 'XL', 'XXL'],
images: [
'https://live.staticflickr.com/65535/54087877029_1dcf7f5bec_n.jpg',
'https://live.staticflickr.com/65535/54088000940_f36f3c9fdd_n.jpg',
'https://live.staticflickr.com/65535/54088000945_8ee1da5c3d_n.jpg',
],
like: 0,
seller: {
  name: 'RAAM',
  phone: '+242069954916',
  country: 'CG'
},
vendorPhone: '+242069954916',
promotion: {
  discount: 10, 
  endDate: '2024-10-21T23:59:59' 
},
stock: 9,
rating: 4.9
},

{
id: 40,// Vêtements 
name: "Robe",
description: 'Toutes les tailles',
price: 6000,
category: 'vetements',
colors: ['#FFFFFF', '#000000', '#4169E1', '#DC143C'], // Blanc, Noir, Bleu royal, Rouge
sizes: ['S', 'M', 'L', 'XL', 'XXL'],
images: [
'https://live.staticflickr.com/65535/54087877024_f67d960abf_n.jpg',
'https://live.staticflickr.com/65535/54088000920_d7ccd65445_n.jpg',
'https://live.staticflickr.com/65535/54087796103_804bbc1b4e_n.jpg',
],
like: 0,
seller: {
  name: 'RAAM',
  phone: '+242069954916',
  country: 'CG'
},
vendorPhone: '+242069954916',
promotion: {
  discount: 10, 
  endDate: '2024-10-21T23:59:59' 
},
stock: 9,
rating: 4.9
},

{
id: 42,// Vêtements 
name: "Robe sexy",
description: 'Toutes les tailles',
price: 6000,
category: 'vetements',
colors: ['#FFFFFF', '#000000', '#4169E1', '#DC143C'], // Blanc, Noir, Bleu royal, Rouge
sizes: ['S', 'M', 'L', 'XL', 'XXL'],
images: [
'https://live.staticflickr.com/65535/54086666967_1b79944ab4_n.jpg',
'https://s.alicdn.com/@sc04/kf/Aeeaf6f19c9b54db699f8138117409af7x.jpg?avif=close',
'https://s.alicdn.com/@sc04/kf/A462b12034cec461e978aec1f648e1677q.png_720x720q50.jpg',
],
like: 0,
seller: {
  name: 'RAAM',
  phone: '+242069954916',
  country: 'CG'
},
vendorPhone: '+242069954916',
promotion: {
  discount: 10, 
  endDate: '2024-10-21T23:59:59' 
},
stock: 9,
rating: 4.5
},



// //////////////////////////////////////////////////////////////////


{
id: 1,// Vêtements 
name: "Robe Femme",
description: 'Toutes les tailles',
price: 13000,
category: 'vetements',
colors: ['#FFFFFF', '#000000', '#4169E1', '#DC143C'], // Blanc, Noir, Bleu royal, Rouge
sizes: ['S', 'M', 'L', 'XL', 'XXL'],
images: [
'https://live.staticflickr.com/65535/54004585421_9786d774ef_w.jpg',
'https://live.staticflickr.com/65535/54005006385_ea4b85b8e5_w.jpg',
],
like: 0,
seller: {
  name: 'Vendeur',
  phone: '+221781520600',
  country: 'SN'
},
vendorPhone: '+221781520600',
promotion: {
  discount: 10, 
  endDate: '2024-10-25T23:59:59' 
},
stock: 15,
rating: 4.5
},

{
id: 2,// Vêtements raison
name: "Robe Femme",
description: 'Toutes les tailles',
price: 7000,
category: 'vetements',
colors: ['#FFFFFF', '#000000', '#4169E1', '#DC143C'], // Blanc, Noir, Bleu royal, Rouge
sizes: ['S', 'M', 'L', 'XL', 'XXL'],
images: [
'https://live.staticflickr.com/65535/53918079291_fd5fb40099_n.jpg',
'https://live.staticflickr.com/65535/53918431534_3744337f06_n.jpg',
],
like: 0,
seller: {
  name: 'MCRShop',
  phone: '+221784743356',
  country: 'SN',
},
vendorPhone: '+221784743356',
promotion: {
  discount: 10, 
  endDate: '2024-10-25T23:59:59' 
},
stock: 15,
rating: 4.5
},

{
id: 3,// Vêtements raison
name: 'Ensemble femme',
description: 'Toutes les tailles',
price: 6500,
category: 'vetements',
colors: ['#FFFFFF', '#000000', '#4169E1', '#DC143C'], // Blanc, Noir, Bleu royal, Rouge
sizes: ['S', 'M', 'L', 'XL', 'XXL'],
images: [
'https://live.staticflickr.com/65535/53918326358_3338d3cc5a_w.jpg',
'https://live.staticflickr.com/65535/53918525480_4f51da965d_n.jpg',
],
like: 0,
seller: {
  name: 'RYONV',
  phone: '+33758146261',
  country: 'CG',
},
vendorPhone: '+33758146261',
promotion: {
  discount: 20, 
  endDate: '2024-10-25T23:59:59' 
},
stock: 5,
rating: 4.5
},

{
id: 33,
name: 'Perruque',
description: 'Toutes les tailles',
price: 25000,
category: 'sport',
colors: ['#FFFFFF', '#000000', '#4169E1', '#DC143C'], // Blanc, Noir, Bleu royal, Rouge
sizes: ['S', 'M', 'L', 'XL', 'XXL'],
images: [
'https://live.staticflickr.com/65535/54003722967_4476dfc92d_n.jpg',
'https://live.staticflickr.com/65535/54003722832_4ab8cf4d60_w.jpg',
'https://live.staticflickr.com/65535/54004860668_deebf9bb45_n.jpg',
'https://live.staticflickr.com/65535/54003722967_4476dfc92d_n.jpg',
],
like: 0,
seller: {
  name: 'Vendeur',
  phone: '+221781520600',
  country: 'SN'
},
promotion: {
  discount: 20, 
  endDate: '2024-10-29T23:59:59' 
},
vendorPhone: '+221781520600',
stock: 15,
rating: 4.5
},

{
  id: 34,
  name: 'Ensemble deux pièces',
  description: 'X, L, XL, XXL, 3XL',
  price: 2500,
  category: 'vetements',
  colors: ['#FFFFFF', '#000000', '#4169E1', '#DC143C'], // Blanc, Noir, Bleu royal, Rouge
  sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  images: [
  'https://live.staticflickr.com/65535/53918326223_b42c569af8_w.jpg',
  'https://live.staticflickr.com/65535/53917188547_cac5a4720d_w.jpg',
  'https://live.staticflickr.com/65535/53918326218_f9bf1a5a3d_w.jpg',
  ],
  like: 0,
  seller: {
    name: 'MCRShop',
    phone: '+221784743356',
    country: 'SN',
  },
  promotion: {
    discount: 20, 
    endDate: '2024-10-29T23:59:59' 
  },
  vendorPhone: '+221784743356',
  stock: 15,
  rating: 4.2
  },

{
id: 4,
name: 'Ensemble',
description: 'L XL XXL 3XL',
price: 7500,
category: 'vetements',
colors: ['#FFFFFF', '#000000', '#4169E1', '#DC143C'], // Blanc, Noir, Bleu royal, Rouge
sizes: ['S', 'M', 'L', 'XL', 'XXL'],
images: [
'https://live.staticflickr.com/65535/53999356837_c71364c768_w.jpg',
'https://live.staticflickr.com/65535/54000575439_d80a7113a9_n.jpg',
'https://live.staticflickr.com/65535/54000250216_fd5f629c82_n.jpg',
'https://live.staticflickr.com/65535/54000250176_a63038d3e9_w.jpg',
'https://live.staticflickr.com/65535/54000575489_715f39d960_w.jpg',
],
like: 0,
seller: {
  name: 'MCRShop',
  phone: '+221784743356',
  country: 'SN',
},
promotion: {
  discount: 20, 
  endDate: '2024-10-29T23:59:59' 
},
vendorPhone: '+221784743356',
stock: 15,
rating: 4.5
},

{
id: 5,
name: 'Robe',
description: 'S L XL XXL 3XL',
price: 7500,
category: 'vetements',
colors: ['#FFFFFF', '#000000', '#4169E1', '#DC143C'], // Blanc, Noir, Bleu royal, Rouge
sizes: ['S', 'M', 'L', 'XL', 'XXL'],
images: [
'https://live.staticflickr.com/65535/54000490618_fc587ecc95_w.jpg',
'https://live.staticflickr.com/65535/54000575484_55fd83c68c_w.jpg',
'https://live.staticflickr.com/65535/54000250171_f35e13ae50_w.jpg',
],
like: 0,
seller: {
  name: 'MCRShop',
  phone: '+221784743356',
  country: 'SN',
},
promotion: {
  discount: 20, 
  endDate: '2024-10-29T23:59:59' 
},
vendorPhone: '+221784743356',
stock: 15,
rating: 4.5
},

{
id: 35,
name: 'Robe',
description: 'S L XL XXL 3XL',
price: 7500,
category: 'vetements',
colors: ['#FFFFFF', '#000000', '#4169E1', '#DC143C'], // Blanc, Noir, Bleu royal, Rouge
sizes: ['S', 'M', 'L', 'XL', 'XXL'],
images: [
'https://live.staticflickr.com/65535/54004910659_fa98b38975_n.jpg',
'https://live.staticflickr.com/65535/54003677497_c177414031_n.jpg',
],
like: 0,
seller: {
  name: 'Vendeur',
  phone: '+221781520600',
  country: 'SN'
},
promotion: {
  discount: 20, 
  endDate: '2024-10-29T23:59:59' 
},
vendorPhone: '+221781520600',
stock: 15,
rating: 4.5
},


{
id: 6,// Vêtements raison
name: 'Robe xxx',
description: 'Toutes les tailles',
price: 8000,
category: 'vetements',
colors: ['#FFFFFF', '#000000', '#4169E1', '#DC143C'], // Blanc, Noir, Bleu royal, Rouge
sizes: ['S', 'M', 'L', 'XL', 'XXL'],
images: [
  'https://live.staticflickr.com/65535/53808261655_a7ccaf6301_n.jpg',
  'https://live.staticflickr.com/65535/53804063223_07ccde5008_b.jpg',
  'https://live.staticflickr.com/65535/53803818431_29f2a5a591_b.jpg'
],
like: 0,
seller: {
  name: 'MCRShop',
  phone: '+221784743356',
  country: 'SN',
},
promotion: {
  discount: 20, 
  endDate: '2024-10-15T23:59:59' 
},
vendorPhone: '+221784743356',
stock: 20,
rating: 4.5
},

{
id: 7, // Vêtements raison
name: 'Robe',
description: 'Tissu en coton',
price: 8000,
category: 'vetements',
colors: ['#FFFFFF', '#000000', '#4169E1', '#DC143C'], // Blanc, Noir, Bleu royal, Rouge
sizes: ['S', 'M', 'L', 'XL', 'XXL'],
images: [
  'https://live.staticflickr.com/65535/53808261640_81983ff3b3_w.jpg',
  'https://live.staticflickr.com/65535/53808261655_a7ccaf6301_n.jpg',
  ],
  like: 0,
  seller: {
    name: 'MCRShop',
    phone: '+221784743356',
    country: 'SN',
  },
  promotion: {
    discount: 20, 
    endDate: '2024-10-15T23:59:59' 
  },
vendorPhone: '+221784743356',
stock: 20,
rating: 4.5
},

{
id: 8,
name: 'Robe de soirée femme',
description: '100% Polyester',
price: 15000,
category: 'vetements',
colors: ['#FFFFFF', '#000000', '#4169E1', '#DC143C'], // Blanc, Noir, Bleu royal, Rouge
sizes: ['S', 'M', 'L', 'XL', 'XXL'],
images: [
'https://s.alicdn.com/@sc04/kf/Hbfc38afed3fc4b3984e40cbc5ed8a49cP.jpg',
'https://s.alicdn.com/@sc04/kf/H5710996c11594111ad7b127ee5c8cd741.jpg',
'https://s.alicdn.com/@sc04/kf/H43167ad91703404b8f759650953ff9c8B.jpg'
],
promotion: {
  discount: 20, 
  endDate: '2024-10-15T23:59:59' 
},
vendorPhone: '+33758146261',
stock: 15,
rating: 4.5,
promotion: {
  discount: 10, // 10% de réduction
  endDate: '2024-10-15T23:59:59' // Date de fin de la promotion
},
},

{
id: 9,
name: 'Sac à main',
description: 'modèle 2023 en cuir',
price: 6500,
category: 'vetements',
colors: ['#FFFFFF', '#000000', '#4169E1', '#DC143C'], // Blanc, Noir, Bleu royal, Rouge
sizes: ['S', 'M', 'L', 'XL', 'XXL'],
images: [
'https://s.alicdn.com/@sc04/kf/H2aa20b2331584b08914ebfdbecc8f76eo.jpg',
'https://s.alicdn.com/@sc04/kf/H7d09183f2f284305bb1d08834b842c4eY.jpg',
'https://s.alicdn.com/@sc04/kf/H0a2b7c07b5c2400cade43ace2db65141G.jpg'
],
like: 0,
seller: {
  name: 'RYONV',
  phone: '+33758146261',
  country: 'CG',
},
promotion: {
  discount: 20, 
  endDate: '2024-10-15T23:59:59' 
},
vendorPhone: '+33758146261',
stock: 20,
rating: 4.5
},

{
id: 10, 
name: 'H-P EliteBook 640G9', 
description: 'WINDOWS 11',
price: 250000,
category: 'electronique',
colors: ['#FFFFFF', '#000000', '#4169E1', '#DC143C'], // Blanc, Noir, Bleu royal, Rouge
images: [
'https://s.alicdn.com/@sc04/kf/H13b354835d0742a1919dab2e5386d5d90.jpg',
'https://s.alicdn.com/@sc04/kf/H8d3e389715e449cba5f2c41c6f2a752cb.jpg',
'https://s.alicdn.com/@sc04/kf/H161a4757294e4dc7bb291fa1c6ec19aaZ.jpg'
],
like: 0,
seller: {
  name: 'RYONV',
  phone: '+33758146261',
  country: 'FR',
},
vendorPhone: '+33758146261',
stock: 10,
rating: 4.5,
promotion: {
  discount: 10, // 10% de réduction
  endDate: '2024-10-15T23:59:59' // Date de fin de la promotion
},
},

{
id: 11, 
name: 'Pull ', 
description: 'Coton/Fibre de bambou',
price: 6000,
category: 'vetements',
colors: ['#FFFFFF', '#000000', '#4169E1', '#DC143C'], // Blanc, Noir, Bleu royal, Rouge
sizes: ['S', 'M', 'L', 'XL', 'XXL'],
images: [
'https://s.alicdn.com/@sc04/kf/H41b80ca10ccd4bac8264eefd48316704V.jpg',
'https://s.alicdn.com/@sc04/kf/H491e6c1e4845486abc3afc8718c9a964W.jpg',
],
like: 0,
seller: {
  name: 'MCRShop',
  phone: '+221784743356',
  country: 'SN',
},
vendorPhone: '+221784743356',
stock: 15,
rating: 4.5,
promotion: {
  discount: 20, 
  endDate: '2024-10-15T23:59:59' 
},
},

{
id: 12, 
name: 'Robe', 
description: 'Polyester',
price: 10000,
category: 'vetements',
colors: ['#FFFFFF', '#000000', '#4169E1', '#DC143C'], // Blanc, Noir, Bleu royal, Rouge
sizes: ['S', 'M', 'L', 'XL', 'XXL'],
images: [
'https://s.alicdn.com/@sc04/kf/H58cb15421aa94bc5a813bf8f4b883a3bY.png',
'https://s.alicdn.com/@sc04/kf/H9d075e179f454d2388796c5bda521df3Q.jpg',
'https://s.alicdn.com/@sc04/kf/Hd6ced2e218df41f7bb1c17bdb9f73de9e.jpg',
'https://s.alicdn.com/@sc04/kf/Hd1f0f03ed9824666ae75f8bb44be83ae0.jpg',
'https://s.alicdn.com/@sc04/kf/H3d6bd0cb4b8f400f9dde650405b8176f2.jpg',
'https://s.alicdn.com/@sc04/kf/Hd4264e42d8254abbaa38bacc299612e3M.jpg'
],
like: 0,
seller: {
  name: 'MCRShop',
  phone: '+221784743356',
  country: 'SN',
},
vendorPhone: '+221784743356',
stock: 20,
rating: 4.5,
promotion: {
  discount: 10, // 10% de réduction
  endDate: '2024-10-15T23:59:59' 
},
},

{
id: 13, 
name: 'Chemises Hommes', 
description: 'Col rabattu',
price: 6500,
colors: ['#FFFFFF', '#000000', '#4169E1', '#DC143C'], // Blanc, Noir, Bleu royal, Rouge
sizes: ['S', 'M', 'L', 'XL', 'XXL'],
category: 'vetements',
images: [
  'https://s.alicdn.com/@sc04/kf/H12cdfb8eaa3a4929be28cba2d2c701cbW.jpg',
  'https://s.alicdn.com/@sc04/kf/H2d6d61a7e124466a8ab87e3d4e9d6a38c.jpg',
  'https://s.alicdn.com/@sc04/kf/H197d813ab6d645268032263c9b2b40a00.jpg',
  'https://s.alicdn.com/@sc04/kf/Hae3219dab53547cf863174cc0d908c96z.jpg',
  'https://s.alicdn.com/@sc04/kf/Hdf4b5a1e550349f5967b283dca1d84c0h.jpg'
  ],
  like: 0,
  seller: {
    name: 'RYONV',
    phone: '+33758146261',
    country: 'CG',
  },
  promotion: {
    discount: 20, 
    endDate: '2024-10-15T23:59:59' 
  },
vendorPhone: '+33758146261',
stock: 10,
rating: 4.5
},

{
id: 14, 
name: 'Chemises Hommes', 
description: '	Polyester/coton',
price: 6000,
category: 'vetements',
colors: ['#FFFFFF', '#000000', '#4169E1', '#DC143C'], // Blanc, Noir, Bleu royal, Rouge
sizes: ['S', 'M', 'L', 'XL', 'XXL'],
images: [
  
  'https://s.alicdn.com/@sc04/kf/H414fc4a08f8f4b0690dd30d2118a0f8eU.jpg',
  'https://s.alicdn.com/@sc04/kf/H1be3e820295b438588483000eb45c891l.jpg',
  'https://s.alicdn.com/@sc04/kf/Hefe0c5fe5f644ea8a8dd90ba8f0d98e0I.jpg',
  'https://s.alicdn.com/@sc04/kf/Hd50830bdb3014505811fe3b4761a8a6fl.jpg',
  'https://s.alicdn.com/@sc04/kf/Hf8bbab9f172d43309128ba137f426061x.jpg'
],
like: 0,
seller: {
  name: 'RYONV',
  phone: '+33758146261',
  country: 'CG',
},
vendorPhone: '+33758146261',
stock: 15,
rating: 4.5
},

{
id: 15, 
name: 'Shorts', 
description: '100% Polyester',
price: 7000,
category: 'vetements',
colors: ['#FFFFFF', '#000000', '#4169E1', '#DC143C'], // Blanc, Noir, Bleu royal, Rouge
sizes: ['S', 'M', 'L', 'XL', 'XXL'],
images: [
  'https://s.alicdn.com/@sc04/kf/Hc13922b4f77741a1971d5d3ea8164f73P.png',
  'https://s.alicdn.com/@sc04/kf/H70702c2fbcca4385add27f95d2f9f5fcp.png',
  'https://s.alicdn.com/@sc04/kf/H030af050062d4538acb91c1af58b6bb2t.png',
  'https://s.alicdn.com/@sc04/kf/Hd9b97457fc904340a0327bde51254635F.png',
  'https://s.alicdn.com/@sc04/kf/Hd6152d57976e4b0f931b81d5206ca19eV.png'
],
like: 0,
seller: {
  name: 'RYONV',
  phone: '+33758146261',
  country: 'CG',
},
vendorPhone: '+33758146261',
stock: 20,
rating: 4.5
},

{
id: 16, 
name: 'Draps plats', 
description: '100% Polyester',
price: 6500,
category: 'maison',
colors: ['#FFFFFF', '#000000', '#4169E1', '#DC143C'], // Blanc, Noir, Bleu royal, Rouge
images: [
  'https://s.alicdn.com/@sc04/kf/Ha9658f0230284f87ac87c68821d68bb2G.jpg',
  'https://s.alicdn.com/@sc04/kf/H5423e303cfbb47529b3600661f20c20cx.jpg',
  'https://s.alicdn.com/@sc04/kf/Hd7ce141a43644a8e9d63bce2af43bab1I.jpg',
  'https://s.alicdn.com/@sc04/kf/Hbf6d45e665ba49d1a0b0f71b489aec9bA.jpg',
  'https://s.alicdn.com/@sc04/kf/H80e39df3cadd4f778bd15007d9394ef7H.png'
],
like: 0,
seller: {
  name: 'Vendeur',
  phone: '+242065235530',
  country: 'CG',
},
promotion: {
  discount: 20, 
  endDate: '2024-10-15T23:59:59' 
},
vendorPhone: '+242065235530',
stock: 15,
rating: 4.5
},

{
id: 17, 
name: 'Drap-housse', 
description: 'Polyester/cotonr',
price: 6000,
category: 'maison',
colors: ['#FFFFFF', '#000000', '#4169E1', '#DC143C'], // Blanc, Noir, Bleu royal, Rouge
images: [
  'https://s.alicdn.com/@sc04/kf/Hb9327b0ad28d4d7592200ae312ad278be.jpg',
  'https://s.alicdn.com/@sc04/kf/Hd563096c298245a59a298ff69c296e67C.jpg',
  'https://s.alicdn.com/@sc04/kf/Hd7ce141a43644a8e9d63bce2af43bab1I.jpg',
  'https://s.alicdn.com/@sc04/kf/Hd8c1570821934f2ba9c4de9feb241d898.jpg',
  'https://s.alicdn.com/@sc04/kf/H7270ff5536e1419c858dfbb155434c54U.jpg',
  'https://s.alicdn.com/@sc04/kf/H7c67bde15747449e82c29d2c3d49c4332.jpg'
],
like: 0,
seller: {
  name: 'Vendeur',
  phone: '+242065235530',
  country: 'CG',
},
promotion: {
  discount: 20, 
  endDate: '2024-09-15T23:59:59' 
},
vendorPhone: '+242065235530',
stock: 10,
rating: 4.5
},

{
id: 18, 
name: 'Mixeur', 
description: 'Fruit et Légumes',
price: 5000,
category: 'maison',
colors: ['#FFFFFF', '#000000', '#4169E1', '#DC143C'], // Blanc, Noir, Bleu royal, Rouge
images: [
  'https://s.alicdn.com/@sc04/kf/H2890d50f345f4056ac236fad8fbb5f8cU.png',
  'https://s.alicdn.com/@sc04/kf/Hdde0ea2ed30944f0ada91c76439c16e8V.png',
  'https://s.alicdn.com/@sc04/kf/H5bcfa19a90fc4be5b7a06ba1ea5e85b3Y.png',
  'https://s.alicdn.com/@sc04/kf/Hfb95223a915043ee95329d8d2880b7dc6.png',
  'https://s.alicdn.com/@sc04/kf/H4a0d44471a694a7d945170de8cdd78f0A.png',
  'https://s.alicdn.com/@sc04/kf/Hcbf55f7354bf4bc9891139bb872a478cx.png'
],
like: 0,
seller: {
  name: 'RYONV',
  phone: '+33758146261',
  country: 'CG',
},
vendorPhone: '+221784743356',
stock: 20,
rating: 4.5,
promotion: {
  discount: 10, // 10% de réduction
  endDate: '2024-09-15T23:59:59' // Date de fin de la promotion
},
},

{
id: 19, 
name: 'Manette', 
description: 'Pour téléphone Mobile',
price: 8000,
category: 'electronique',
colors: ['#FFFFFF', '#000000', '#4169E1', '#DC143C'], // Blanc, Noir, Bleu royal, Rouge
images: [
  'https://s.alicdn.com/@sc04/kf/Hc1c0b699684b42b6a00dd234944547184.jpg',
  'https://s.alicdn.com/@sc04/kf/H206a15ef54194c5c831b9c5ae6fe2b6fR.jpg',
  'https://s.alicdn.com/@sc04/kf/H189c6bd52c6249b49e867b0243cc4f20W.jpg',
  'https://s.alicdn.com/@sc04/kf/Hb493a24e6f85418383c380d210e87cfbW.jpg',
  'https://s.alicdn.com/@sc04/kf/H538b2787519d46fab86128f1874d187aw.jpg',
  'https://s.alicdn.com/@sc04/kf/He8f69a08da8f43ba97ce66c76d61e53eF.jpg'
],
like: 0,
seller: {
  name: 'RYONV',
  phone: '+33758146261',
  country: 'CG',
},
promotion: {
  discount: 20, 
  endDate: '2024-09-15T23:59:59' 
},
vendorPhone: '+33758146261',
stock: 15,
rating: 4.5
},

{
  id: 20,
  name: 'Ensemble H&F',
  description: 'Toutes les tailles',
  price: 8000,
  category: 'vetements',
  colors: ['#FFFFFF', '#000000', '#4169E1', '#DC143C'], // Blanc, Noir, Bleu royal, Rouge
  sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  images: [
    'https://live.staticflickr.com/65535/53808149299_845e11f25b_w.jpg',
    'https://live.staticflickr.com/65535/53806891127_2371ca23f1_w.jpg',
    'https://live.staticflickr.com/65535/53807824346_a454c0bc44_w.jpg',
    'https://live.staticflickr.com/65535/53808261690_3762aca3df_w.jpg'
    ],
  like: 0,
  seller: {
    name: 'MCRShop',
    phone: '+221784743356',
    country: 'SN',
  },
  promotion: {
    discount: 20, 
    endDate: '2024-09-15T23:59:59' 
  },
  vendorPhone: '+221784743356',
  stock: 30,
  rating: 4.5
  },

  {
  id: 21,// Vêtements raison
  name: 'Ensemble H&F',
  description: 'Toutes les tailles',
  price: 8000,
  category: 'vetements',
  colors: ['#FFFFFF', '#000000', '#4169E1', '#DC143C'], // Blanc, Noir, Bleu royal, Rouge
  sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  images: [
    'https://live.staticflickr.com/65535/53806891132_5b166f4f7c_w.jpg',
    'https://live.staticflickr.com/65535/53808066533_a7ee9543a0_w.jpg',
    'https://live.staticflickr.com/65535/53808066543_08a5387f87_w.jpg',
  ],
  like: 0,
  seller: {
    name: 'MCRShop',
    phone: '+221784743356',
    country: 'SN',
  },
  vendorPhone: '+221784743356',
  stock: 30,
  rating: 4.5,
  promotion: {
    discount: 10, 
    endDate: '2024-09-15T23:59:59' 
  },
  },
{
  id: 22,// Vêtements raison
  name: 'Ensemble H&F',
  description: 'Toutes les tailles',
  price: 6500,
  category: 'vetements',
  colors: ['#FFFFFF', '#000000', '#4169E1', '#DC143C'], // Blanc, Noir, Bleu royal, Rouge
  sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  images: [
    'https://live.staticflickr.com/65535/53808261695_161b2c5f85_w.jpg',
    'https://live.staticflickr.com/65535/53807824376_456948f358_w.jpg',
  ],
  like: 0,
  seller: {
    name: 'MCRShop',
    phone: '+221784743356',
    country: 'SN',
  },
  promotion: {
    discount: 20, 
    endDate: '2024-09-15T23:59:59' 
  },
  vendorPhone: '+221784743356',
  stock: 30,
  rating: 4.5
  },
{
  id: 23,// Vêtements raison
  name: 'Ensemble H&F',
  description: 'Toutes les tailles',
  price: 6000,
  category: 'vetements',
  colors: ['#FFFFFF', '#000000', '#4169E1', '#DC143C'], // Blanc, Noir, Bleu royal, Rouge
  sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  images: [
    'https://live.staticflickr.com/65535/53808149329_59e6f358e4_w.jpg',
    'https://live.staticflickr.com/65535/53806891147_67fec9235b_w.jpg',
    'https://live.staticflickr.com/65535/53808066548_3b17ec4f65_w.jpg',
    'https://live.staticflickr.com/65535/53808066543_08a5387f87_w.jpg',
    'https://live.staticflickr.com/65535/53806891162_5cc02640cf_w.jpg',
  ],
  like: 0,
  seller: {
    name: 'MCRShop',
    phone: '+221784743356',
    country: 'SN',
  },
  promotion: {
    discount: 20, 
    endDate: '2024-09-15T23:59:59' 
  },
  vendorPhone: '+221784743356',
  stock: 30,
  rating: 4.5
  },
{
  id: 41,// Vêtements raison
  name: 'Ensemble H&F',
  description: 'Toutes les tailles',
  price: 6000,
  category: 'vetements',
  colors: ['#FFFFFF', '#000000', '#4169E1', '#DC143C'], // Blanc, Noir, Bleu royal, Rouge
  sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  images: [
    'https://live.staticflickr.com/65535/53806891187_ee975c0252_w.jpg',
    'https://live.staticflickr.com/65535/53807824386_ed8b86f2b0_w.jpg',
    'https://live.staticflickr.com/65535/53808261775_6693ab5503_w.jpg',
    'https://live.staticflickr.com/65535/53806891207_fbe177a5d2_w.jpg',
    'https://live.staticflickr.com/65535/53806891162_5cc02640cf_w.jpg',
  ],
  like: 0,
  seller: {
    name: 'MCRShop',
    phone: '+221784743356',
    country: 'SN',
  },
  vendorPhone: '+221784743356',
  stock: 30,
  rating: 4.5,
  promotion: {
    discount: 10, 
    endDate: '2024-09-15T23:59:59' 
  },
  },
{
  id: 24,// Vêtements raison
  name: 'Ensemble Femme',
  description: 'Toutes les tailles',
  price: 6500,
  category: 'vetements',
  colors: ['#FFFFFF', '#000000', '#4169E1', '#DC143C'], // Blanc, Noir, Bleu royal, Rouge
  sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  images: [
    'https://live.staticflickr.com/65535/53806891187_ee975c0252_w.jpg',
    'https://live.staticflickr.com/65535/53807824376_456948f358_w.jpg',
  ],
  like: 0,
  seller: {
    name: 'MCRShop',
    phone: '+221784743356',
    country: 'SN',
  },
  promotion: {
    discount: 20, 
    endDate: '2024-09-15T23:59:59' 
  },
  vendorPhone: '+221784743356',
  stock: 30,
  rating: 4.5
  },
{
  id: 25,// Vêtements raison
  name: 'Ensemble Femme',
  description: 'Toutes les tailles',
  price: 6000,
  category: 'vetements',
  colors: ['#FFFFFF', '#000000', '#4169E1', '#DC143C'], // Blanc, Noir, Bleu royal, Rouge
  sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  images: [
    'https://live.staticflickr.com/65535/53808261755_e378a6ecb9_w.jpg',
    'https://live.staticflickr.com/65535/53806891177_413d86dc4a_w.jpg',
  ],
  like: 0,
  seller: {
    name: 'MCRShop',
    phone: '+221784743356',
    country: 'SN',
  },
  vendorPhone: '+221784743356',
  stock: 30,
  rating: 4.5
  },
{
  id: 26,// Vêtements raison
  name: 'Ensemble Femme',
  description: 'Toutes les tailles',
  price: 6500,
  category: 'vetements',
  colors: ['#FFFFFF', '#000000', '#4169E1', '#DC143C'], // Blanc, Noir, Bleu royal, Rouge
  sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  images: [
    'https://live.staticflickr.com/65535/53807824286_05c79659ab_n.jpg',
    'https://live.staticflickr.com/65535/53808261645_240d0c12aa_w.jpg',
  ],
  like: 0,
  seller: {
    name: 'MCRShop',
    phone: '+221784743356',
    country: 'SN',
  },
  promotion: {
    discount: 20, 
    endDate: '2024-09-15T23:59:59' 
  },
  vendorPhone: '+221784743356',
  stock: 30,
  rating: 4.5
  },

{
  id: 27,// Vêtements raison
  name: 'Ensemble Femme',
  description: 'Toutes les tailles',
  price: 7000,
  category: 'vetements',
  colors: ['#000000', '#FF69B4', '#4169E1', '#800080'], // Noir, Rose, Bleu royal, Violet
  sizes: ['S', 'M', 'L', 'XL'],
  images: [
    'https://live.staticflickr.com/65535/53806891072_2c565e3b87_w.jpg',
    'https://live.staticflickr.com/65535/53806891097_5e15fa9968_n.jpg',
    'https://live.staticflickr.com/65535/53807824276_1a10e6dcb0_w.jpg',
  ],
  like: 0,
  seller: {
    name: 'MCRShop',
    phone: '+221784743356',
    country: 'SN',
  },
  promotion: {
    discount: 20, 
    endDate: '2024-09-15T23:59:59' 
  },
  vendorPhone: '+221784743356',
  stock: 30,
  rating: 4.5
  },

  {
    id: 28,
    name: 'Ensemble Femme',
    description: 'Toutes les tailles',
    price: 6000,
    category: 'vetements',
    colors: ['#000000', '#FF69B4', '#4169E1', '#FFFFFF'], // Noir, Rose, Bleu royal, Blanc
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      'https://live.staticflickr.com/65535/53808149244_2e6ec6330a_n.jpg',
      'https://live.staticflickr.com/65535/53808149274_c14f032e24_n.jpg',
      'https://live.staticflickr.com/65535/53808149289_8e66a33302_w.jpg',
      'https://live.staticflickr.com/65535/53806891107_a4f580e8ae_w.jpg',
      'https://live.staticflickr.com/65535/53807824316_5c8fcdd4f2_w.jpg',
    ],
    like: 0,
    seller: {
      name: 'MCRShop',
      phone: '+221784743356',
      country: 'SN',
    },
    vendorPhone: '+221784743356',
    stock: 30,
    rating: 4.5
    },
  {
    id: 29,
    name: 'Robe Femme',
    description: 'Toutes les tailles',
    price: 3000,
    category: 'vetements',
    colors: ['#FF69B4', '#FF0000', '#000000', '#4169E1'], // Rose, Rouge, Noir, Bleu royal
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [
      'https://live.staticflickr.com/65535/53918326268_f077d3d109_n.jpg',
      'https://live.staticflickr.com/65535/53917188587_36e66481d6_n.jpg',
      'https://live.staticflickr.com/65535/53917188592_f36f3c9fdd_n.jpg',
      'https://live.staticflickr.com/65535/53917188602_8ee1da5c3d_n.jpg',
      'https://live.staticflickr.com/65535/53917188612_c9fbe142fd_n.jpg',
    ],
    like: 0,
    seller: {
      name: 'MCRShop',
      phone: '+221784743356',
      country: 'SN',
    },
    promotion: {
      discount: 20, 
      endDate: '2024-09-15T23:59:59' 
    },
    vendorPhone: '+221784743356',
    stock: 30,
    rating: 4.5
    },

    {
      id: 30,// Vêtements raison
      name: "Robe Femme",
      description: 'Toutes les tailles',
      price: 7000,
      category: 'vetements',
      colors: ['#FF0000', '#000000', '#800080', '#FFC0CB'], // Rouge, Noir, Violet, Rose pâle
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      images: [
      'https://live.staticflickr.com/65535/53917188752_4573f5fef5_n.jpg',
      'https://live.staticflickr.com/65535/53917188777_b67c965e64_w.jpg',
      ],
      like: 0,
      seller: {
        name: 'MCRShop',
        phone: '+221784743356',
        country: 'SN',
      },
      vendorPhone: '+221784743356',
      promotion: {
        discount: 10, 
        endDate: '2024-09-25T23:59:59' 
      },
      stock: 15,
      rating: 5
      },

      {
        id: 31,
        name: 'ZONE Sport ',
        description: 'Sacs de Téléphone portable',
        price: 2500,
        category: 'sport',
        colors: ['#000000', '#FF0000', '#0000FF', '#008000'], // Noir, Rouge, Bleu, Vert
        sizes: ['Standard'], // Pour les accessoires qui n'ont qu'une taille
        images: [
        'https://s.alicdn.com/@sc04/kf/HTB1FQLZXOnrK1Rjy1Xcq6yeDVXah.jpg',
        'https://s.alicdn.com/@sc04/kf/HTB1XuTUinlYBeNjSspdq6zugXXaQ.jpg',
        'https://s.alicdn.com/@sc04/kf/HTB11gOaiXmWBuNjSspdq6zugXXaQ.jpg',
        ],
        like: 0,
        seller: {
          name: 'RYONV',
          phone: '+33758146261',
          country: 'CG',
        },
        promotion: {
          discount: 20, 
          endDate: '2024-09-19T23:59:59' 
        },
        vendorPhone: '+33758146261',
        stock: 15,
        rating: 4.5
        },

        {
          id: 32,
          name: 'Custom Brand',
          description: 'Costumes de pantalon',
          price: 80000,
          category: 'vetements',
          colors: ['#000000', '#1F1F1F', '#2F4F4F', '#000080'], // Noir, Noir charbon, Gris foncé, Bleu marine
          sizes: ['46', '48', '50', '52', '54'], // Tailles européennes pour costumes
          images: [
            'https://s.alicdn.com/@sc04/kf/H3a17680c893a4090abfe94b2ad36b21cR.jpg',
            'https://s.alicdn.com/@sc04/kf/Hd9c68838f4444723a0c5a633cffe073dn.jpg',
            'https://s.alicdn.com/@sc04/kf/H6db20e92226c43bc996db6197dd5be93l.jpg'
            ],
            like: 0,
            seller: {
              name: 'RYONV',
              phone: '+33758146261',
              country: 'CG',
            },
            promotion: {
              discount: 20, 
              endDate: '2024-09-15T23:59:59' 
            },
            vendorPhone: '+33758146261',
            stock: 10,
            rating: 4
            },

            {
              id: 36,
              name: 'Femmes Sexy Jupe',
              description: '100% coton Denim',
              price: 6500,
              category: 'vetements',
              colors: ['#1E90FF', '#000080', '#000000'], // Bleu denim clair, Bleu denim foncé, Noir
              sizes: ['XS', 'S', 'M', 'L'],
              images: [
                'https://s.alicdn.com/@sc04/kf/H85526e7e55e443c593b9302487ad2ba2R.jpg',
                'https://s.alicdn.com/@sc04/kf/H1f7aaa81232649b4b352c4e228268009O.jpg',
                'https://s.alicdn.com/@sc04/kf/Hfde0ff53a70a41ad82d118ee575586ffY.jpg'
                ],
                like: 0,
                seller: {
                  name: 'RYONV',
                  phone: '+33758146261',
                  country: 'CG',
                },
                vendorPhone: '+33758146261',
                promotion: {
                  discount: 20, 
                  endDate: '2024-09-15T23:59:59' 
                },
                stock: 15,
                rating: 4.5
                },

];

export  {products};
