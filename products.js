const products = [
{
id: 1,// Vêtements raison
name: "Robe Femme",
description: 'Toutes les tailles',
price: 7000,
category: 'vetements',
images: [
'https://live.staticflickr.com/65535/53918079291_fd5fb40099_n.jpg',
'https://live.staticflickr.com/65535/53918431534_3744337f06_n.jpg',
],
vendorPhone: '+221784743356',
promotion: {
  discount: 10, 
  endDate: '2024-09-25T23:59:59' 
},
stock: 15
},

{
id: 2,// Vêtements raison
name: 'Ensemble femme',
description: 'Toutes les tailles',
price: 6500,
category: 'vetements',
images: [
'https://live.staticflickr.com/65535/53918326358_3338d3cc5a_w.jpg',
'https://live.staticflickr.com/65535/53918525480_4f51da965d_n.jpg',
],
vendorPhone: '+33758146261',
promotion: {
  discount: 20, 
  endDate: '2024-09-25T23:59:59' 
},
stock: 5
},

{
id: 3,
name: 'Ensemble deux pièces',
description: 'Ensemble deux pièces',
price: 2500,
category: 'vetements',
images: [
'https://live.staticflickr.com/65535/53918326223_b42c569af8_w.jpg',
'https://live.staticflickr.com/65535/53917188547_cac5a4720d_w.jpg',
'https://live.staticflickr.com/65535/53918326218_f9bf1a5a3d_w.jpg',
],
promotion: {
  discount: 20, 
  endDate: '2024-09-29T23:59:59' 
},
vendorPhone: '+221784743356',
stock: 15
},

{
id: 4,
name: 'Ensemble deux pièces',
description: 'L XL XXL 3XL',
price: 7500,
category: 'vetements',
images: [
'https://live.staticflickr.com/65535/53999356837_c71364c768_w.jpg',
'https://live.staticflickr.com/65535/54000575439_d80a7113a9_n.jpg',
'https://live.staticflickr.com/65535/54000250216_fd5f629c82_n.jpg',
'https://live.staticflickr.com/65535/54000250176_a63038d3e9_w.jpg',
'https://live.staticflickr.com/65535/54000575489_715f39d960_w.jpg',
],
promotion: {
  discount: 20, 
  endDate: '2024-09-29T23:59:59' 
},
vendorPhone: '+221784743356',
stock: 15
},

{
id: 5,
name: 'Robe',
description: 'S L XL XXL 3XL',
price: 7500,
category: 'vetements',
images: [
'https://live.staticflickr.com/65535/54000490618_fc587ecc95_w.jpg',
'https://live.staticflickr.com/65535/54000575484_55fd83c68c_w.jpg',
'https://live.staticflickr.com/65535/54000250171_f35e13ae50_w.jpg',
],
promotion: {
  discount: 20, 
  endDate: '2024-09-29T23:59:59' 
},
vendorPhone: '+221784743356',
stock: 15
},


{
id: 6,// Vêtements raison
name: 'Robe xxx',
description: 'Toutes les tailles',
price: 8000,
category: 'vetements',
images: [
  'https://live.staticflickr.com/65535/53808261655_a7ccaf6301_n.jpg',
  'https://live.staticflickr.com/65535/53804063223_07ccde5008_b.jpg',
  'https://live.staticflickr.com/65535/53803818431_29f2a5a591_b.jpg'
],
promotion: {
  discount: 20, 
  endDate: '2024-09-15T23:59:59' 
},
vendorPhone: '+221784743356',
stock: 20
},

{
id: 7, // Vêtements raison
name: 'Robe',
description: 'Tissu en coton',
price: 8000,
category: 'vetements',
images: [
  'https://live.staticflickr.com/65535/53808261640_81983ff3b3_w.jpg',
  'https://live.staticflickr.com/65535/53808261655_a7ccaf6301_n.jpg',
  ],
  promotion: {
    discount: 20, 
    endDate: '2024-09-15T23:59:59' 
  },
vendorPhone: '+221784743356',
stock: 20
},

{
id: 8,
name: 'Robe de soirée femme',
description: '100% Polyester',
price: 15000,
category: 'vetements',
images: [
'https://s.alicdn.com/@sc04/kf/Hbfc38afed3fc4b3984e40cbc5ed8a49cP.jpg',
'https://s.alicdn.com/@sc04/kf/H5710996c11594111ad7b127ee5c8cd741.jpg',
'https://s.alicdn.com/@sc04/kf/H43167ad91703404b8f759650953ff9c8B.jpg'
],
promotion: {
  discount: 20, 
  endDate: '2024-09-15T23:59:59' 
},
vendorPhone: '+33758146261',
stock: 15,
promotion: {
  discount: 10, // 10% de réduction
  endDate: '2024-08-15T23:59:59' // Date de fin de la promotion
},
},

{
id: 9,
name: 'Sac à main',
description: 'modèle 2023 en cuir',
price: 6500,
category: 'vetements',
images: [
'https://s.alicdn.com/@sc04/kf/H2aa20b2331584b08914ebfdbecc8f76eo.jpg',
'https://s.alicdn.com/@sc04/kf/H7d09183f2f284305bb1d08834b842c4eY.jpg',
'https://s.alicdn.com/@sc04/kf/H0a2b7c07b5c2400cade43ace2db65141G.jpg'
],
promotion: {
  discount: 20, 
  endDate: '2024-09-15T23:59:59' 
},
vendorPhone: '+33758146261',
stock: 20
},

{
id: 10, 
name: 'H-P EliteBook 640G9', 
description: 'WINDOWS 11 HOME',
price: 250000,
category: 'electronique',
images: [
'https://s.alicdn.com/@sc04/kf/H13b354835d0742a1919dab2e5386d5d90.jpg',
'https://s.alicdn.com/@sc04/kf/H8d3e389715e449cba5f2c41c6f2a752cb.jpg',
'https://s.alicdn.com/@sc04/kf/H161a4757294e4dc7bb291fa1c6ec19aaZ.jpg'
],
vendorPhone: '+33758146261',
stock: 10,
promotion: {
  discount: 10, // 10% de réduction
  endDate: '2024-08-15T23:59:59' // Date de fin de la promotion
},
},

{
id: 11, 
name: 'Pull ', 
description: 'Coton/Fibre de bambou',
price: 6000,
category: 'vetements',
images: [
'https://s.alicdn.com/@sc04/kf/H41b80ca10ccd4bac8264eefd48316704V.jpg',
'https://s.alicdn.com/@sc04/kf/H491e6c1e4845486abc3afc8718c9a964W.jpg',
],
vendorPhone: '+221784743356',
stock: 15,
promotion: {
  discount: 20, 
  endDate: '2024-09-15T23:59:59' 
},
},

{
id: 12, 
name: 'Robe', 
description: 'Polyester',
price: 10000,
category: 'vetements',
images: [
'https://s.alicdn.com/@sc04/kf/H58cb15421aa94bc5a813bf8f4b883a3bY.png',
'https://s.alicdn.com/@sc04/kf/H9d075e179f454d2388796c5bda521df3Q.jpg',
'https://s.alicdn.com/@sc04/kf/Hd6ced2e218df41f7bb1c17bdb9f73de9e.jpg',
'https://s.alicdn.com/@sc04/kf/Hd1f0f03ed9824666ae75f8bb44be83ae0.jpg',
'https://s.alicdn.com/@sc04/kf/H3d6bd0cb4b8f400f9dde650405b8176f2.jpg',
'https://s.alicdn.com/@sc04/kf/Hd4264e42d8254abbaa38bacc299612e3M.jpg'
],
vendorPhone: '+221784743356',
stock: 20,
promotion: {
  discount: 10, // 10% de réduction
  endDate: '2024-09-15T23:59:59' // Date de fin de la promotion
},
},

{
id: 13, 
name: 'Chemises Hommes', 
description: 'Col rabattu',
price: 6500,
category: 'vetements',
images: [
  'https://s.alicdn.com/@sc04/kf/H12cdfb8eaa3a4929be28cba2d2c701cbW.jpg',
  'https://s.alicdn.com/@sc04/kf/H2d6d61a7e124466a8ab87e3d4e9d6a38c.jpg',
  'https://s.alicdn.com/@sc04/kf/H197d813ab6d645268032263c9b2b40a00.jpg',
  'https://s.alicdn.com/@sc04/kf/Hae3219dab53547cf863174cc0d908c96z.jpg',
  'https://s.alicdn.com/@sc04/kf/Hdf4b5a1e550349f5967b283dca1d84c0h.jpg'
  ],
  promotion: {
    discount: 20, 
    endDate: '2024-09-15T23:59:59' 
  },
vendorPhone: '+33758146261',
stock: 10
},

{
id: 14, 
name: 'Chemises Hommes', 
description: '	Polyester / coton',
price: 6000,
category: 'vetements',
images: [
  'https://s.alicdn.com/@sc04/kf/H414fc4a08f8f4b0690dd30d2118a0f8eU.jpg',
  'https://s.alicdn.com/@sc04/kf/H1be3e820295b438588483000eb45c891l.jpg',
  'https://s.alicdn.com/@sc04/kf/Hefe0c5fe5f644ea8a8dd90ba8f0d98e0I.jpg',
  'https://s.alicdn.com/@sc04/kf/Hd50830bdb3014505811fe3b4761a8a6fl.jpg',
  'https://s.alicdn.com/@sc04/kf/Hf8bbab9f172d43309128ba137f426061x.jpg'
],
vendorPhone: '+33758146261',
stock: 15
},

{
id: 15, 
name: 'Shorts', 
description: '100% Polyester',
price: 7000,
category: 'vetements',
images: [
  'https://s.alicdn.com/@sc04/kf/Hc13922b4f77741a1971d5d3ea8164f73P.png',
  'https://s.alicdn.com/@sc04/kf/H70702c2fbcca4385add27f95d2f9f5fcp.png',
  'https://s.alicdn.com/@sc04/kf/H030af050062d4538acb91c1af58b6bb2t.png',
  'https://s.alicdn.com/@sc04/kf/Hd9b97457fc904340a0327bde51254635F.png',
  'https://s.alicdn.com/@sc04/kf/Hd6152d57976e4b0f931b81d5206ca19eV.png'
],
vendorPhone: '+33758146261',
stock: 20
},

{
id: 16, 
name: 'Draps plats', 
description: '100% Polyester',
price: 6500,
category: 'maison',
images: [
  'https://s.alicdn.com/@sc04/kf/Ha9658f0230284f87ac87c68821d68bb2G.jpg',
  'https://s.alicdn.com/@sc04/kf/H5423e303cfbb47529b3600661f20c20cx.jpg',
  'https://s.alicdn.com/@sc04/kf/Hd7ce141a43644a8e9d63bce2af43bab1I.jpg',
  'https://s.alicdn.com/@sc04/kf/Hbf6d45e665ba49d1a0b0f71b489aec9bA.jpg',
  'https://s.alicdn.com/@sc04/kf/H80e39df3cadd4f778bd15007d9394ef7H.png'
],
promotion: {
  discount: 20, 
  endDate: '2024-09-15T23:59:59' 
},
vendorPhone: '+33758146261',
stock: 15
},

{
id: 17, 
name: 'Drap-housse', 
description: 'Polyester/cotonr',
price: 6000,
category: 'maison',
images: [
  'https://s.alicdn.com/@sc04/kf/Hb9327b0ad28d4d7592200ae312ad278be.jpg',
  'https://s.alicdn.com/@sc04/kf/Hd563096c298245a59a298ff69c296e67C.jpg',
  'https://s.alicdn.com/@sc04/kf/Hd7ce141a43644a8e9d63bce2af43bab1I.jpg',
  'https://s.alicdn.com/@sc04/kf/Hd8c1570821934f2ba9c4de9feb241d898.jpg',
  'https://s.alicdn.com/@sc04/kf/H7270ff5536e1419c858dfbb155434c54U.jpg',
  'https://s.alicdn.com/@sc04/kf/H7c67bde15747449e82c29d2c3d49c4332.jpg'
],
promotion: {
  discount: 20, 
  endDate: '2024-09-15T23:59:59' 
},
vendorPhone: '+33758146261',
stock: 10
},

{
id: 18, 
name: 'Mixeur', 
description: 'Fruit et Légumes',
price: 5000,
category: 'maison',
images: [
  'https://s.alicdn.com/@sc04/kf/H2890d50f345f4056ac236fad8fbb5f8cU.png',
  'https://s.alicdn.com/@sc04/kf/Hdde0ea2ed30944f0ada91c76439c16e8V.png',
  'https://s.alicdn.com/@sc04/kf/H5bcfa19a90fc4be5b7a06ba1ea5e85b3Y.png',
  'https://s.alicdn.com/@sc04/kf/Hfb95223a915043ee95329d8d2880b7dc6.png',
  'https://s.alicdn.com/@sc04/kf/H4a0d44471a694a7d945170de8cdd78f0A.png',
  'https://s.alicdn.com/@sc04/kf/Hcbf55f7354bf4bc9891139bb872a478cx.png'
],
vendorPhone: '+221784743356',
stock: 20,
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
images: [
  'https://s.alicdn.com/@sc04/kf/Hc1c0b699684b42b6a00dd234944547184.jpg',
  'https://s.alicdn.com/@sc04/kf/H206a15ef54194c5c831b9c5ae6fe2b6fR.jpg',
  'https://s.alicdn.com/@sc04/kf/H189c6bd52c6249b49e867b0243cc4f20W.jpg',
  'https://s.alicdn.com/@sc04/kf/Hb493a24e6f85418383c380d210e87cfbW.jpg',
  'https://s.alicdn.com/@sc04/kf/H538b2787519d46fab86128f1874d187aw.jpg',
  'https://s.alicdn.com/@sc04/kf/He8f69a08da8f43ba97ce66c76d61e53eF.jpg'
],
promotion: {
  discount: 20, 
  endDate: '2024-09-15T23:59:59' 
},
vendorPhone: '+33758146261',
stock: 15
},

{
  id: 20,
  name: 'Ensemble H&F',
  description: 'Toutes les tailles',
  price: 8000,
  category: 'vetements',
  images: [
    'https://live.staticflickr.com/65535/53808149299_845e11f25b_w.jpg',
    'https://live.staticflickr.com/65535/53806891127_2371ca23f1_w.jpg',
    'https://live.staticflickr.com/65535/53807824346_a454c0bc44_w.jpg',
    'https://live.staticflickr.com/65535/53808261690_3762aca3df_w.jpg'
  ],
  promotion: {
    discount: 20, 
    endDate: '2024-09-15T23:59:59' 
  },
  vendorPhone: '+221784743356',
  stock: 30
  },

  {
  id: 21,// Vêtements raison
  name: 'Ensemble H&F',
  description: 'Toutes les tailles',
  price: 8000,
  category: 'vetements',
  images: [
    'https://live.staticflickr.com/65535/53806891132_5b166f4f7c_w.jpg',
    'https://live.staticflickr.com/65535/53808066533_a7ee9543a0_w.jpg',
    'https://live.staticflickr.com/65535/53808066543_08a5387f87_w.jpg',
  ],
  vendorPhone: '+221784743356',
  stock: 30,
  promotion: {
    discount: 10, // 10% de réduction
    endDate: '2024-09-15T23:59:59' // Date de fin de la promotion
  },
  },
{
  id: 22,// Vêtements raison
  name: 'Ensemble H&F',
  description: 'Toutes les tailles',
  price: 6500,
  category: 'vetements',
  images: [
    'https://live.staticflickr.com/65535/53808261695_161b2c5f85_w.jpg',
    'https://live.staticflickr.com/65535/53807824376_456948f358_w.jpg',
  ],
  promotion: {
    discount: 20, 
    endDate: '2024-09-15T23:59:59' 
  },
  vendorPhone: '+221784743356',
  stock: 30
  },
{
  id: 23,// Vêtements raison
  name: 'Ensemble H&F',
  description: 'Toutes les tailles',
  price: 6000,
  category: 'vetements',
  images: [
    'https://live.staticflickr.com/65535/53808149329_59e6f358e4_w.jpg',
    'https://live.staticflickr.com/65535/53806891147_67fec9235b_w.jpg',
    'https://live.staticflickr.com/65535/53808066548_3b17ec4f65_w.jpg',
    'https://live.staticflickr.com/65535/53808066543_08a5387f87_w.jpg',
    'https://live.staticflickr.com/65535/53806891162_5cc02640cf_w.jpg',
  ],
  promotion: {
    discount: 20, 
    endDate: '2024-09-15T23:59:59' 
  },
  vendorPhone: '+221784743356',
  stock: 30
  },
{
  id: 23,// Vêtements raison
  name: 'Ensemble H&F',
  description: 'Toutes les tailles',
  price: 6000,
  category: 'vetements',
  images: [
    'https://live.staticflickr.com/65535/53806891187_ee975c0252_w.jpg',
    'https://live.staticflickr.com/65535/53807824386_ed8b86f2b0_w.jpg',
    'https://live.staticflickr.com/65535/53808261775_6693ab5503_w.jpg',
    'https://live.staticflickr.com/65535/53806891207_fbe177a5d2_w.jpg',
    'https://live.staticflickr.com/65535/53806891162_5cc02640cf_w.jpg',
  ],
  vendorPhone: '+221784743356',
  stock: 30,
  promotion: {
    discount: 10, // 10% de réduction
    endDate: '2024-09-15T23:59:59' // Date de fin de la promotion
  },
  },
{
  id: 24,// Vêtements raison
  name: 'Ensemble Femme',
  description: 'Toutes les tailles',
  price: 6500,
  category: 'vetements',
  images: [
    'https://live.staticflickr.com/65535/53806891187_ee975c0252_w.jpg',
    'https://live.staticflickr.com/65535/53807824376_456948f358_w.jpg',
  ],
  promotion: {
    discount: 20, 
    endDate: '2024-09-15T23:59:59' 
  },
  vendorPhone: '+221784743356',
  stock: 30
  },
{
  id: 25,// Vêtements raison
  name: 'Ensemble Femme',
  description: 'Toutes les tailles',
  price: 6000,
  category: 'vetements',
  images: [
    'https://live.staticflickr.com/65535/53808261755_e378a6ecb9_w.jpg',
    'https://live.staticflickr.com/65535/53806891177_413d86dc4a_w.jpg',
  ],
  vendorPhone: '+221784743356',
  stock: 30
  },
{
  id: 26,// Vêtements raison
  name: 'Ensemble Femme',
  description: 'Toutes les tailles',
  price: 6500,
  category: 'vetements',
  images: [
    'https://live.staticflickr.com/65535/53807824286_05c79659ab_n.jpg',
    'https://live.staticflickr.com/65535/53808261645_240d0c12aa_w.jpg',
  ],
  promotion: {
    discount: 20, 
    endDate: '2024-09-15T23:59:59' 
  },
  vendorPhone: '+221784743356',
  stock: 30
  },

{
  id: 27,// Vêtements raison
  name: 'Ensemble Femme',
  description: 'Toutes les tailles',
  price: 7000,
  category: 'vetements',
  images: [
    'https://live.staticflickr.com/65535/53806891072_2c565e3b87_w.jpg',
    'https://live.staticflickr.com/65535/53806891097_5e15fa9968_n.jpg',
    'https://live.staticflickr.com/65535/53807824276_1a10e6dcb0_w.jpg',
  ],
  promotion: {
    discount: 20, 
    endDate: '2024-09-15T23:59:59' 
  },
  vendorPhone: '+221784743356',
  stock: 30
  },

  {
    id: 28,
    name: 'Ensemble Femme',
    description: 'Toutes les tailles',
    price: 6000,
    category: 'vetements',
    images: [
      'https://live.staticflickr.com/65535/53808149244_2e6ec6330a_n.jpg',
      'https://live.staticflickr.com/65535/53808149274_c14f032e24_n.jpg',
      'https://live.staticflickr.com/65535/53808149289_8e66a33302_w.jpg',
      'https://live.staticflickr.com/65535/53806891107_a4f580e8ae_w.jpg',
      'https://live.staticflickr.com/65535/53807824316_5c8fcdd4f2_w.jpg',
    ],
    vendorPhone: '+221784743356',
    stock: 30
    },
  {
    id: 29,
    name: 'Robe Femme',
    description: 'Toutes les tailles',
    price: 3000,
    category: 'vetements',
    images: [
      'https://live.staticflickr.com/65535/53918326268_f077d3d109_n.jpg',
      'https://live.staticflickr.com/65535/53917188587_36e66481d6_n.jpg',
    ],
    promotion: {
      discount: 20, 
      endDate: '2024-09-15T23:59:59' 
    },
    vendorPhone: '+221784743356',
    stock: 30
    },

    {
      id: 30,// Vêtements raison
      name: "Robe Femme",
      description: 'Toutes les tailles',
      price: 7000,
      category: 'vetements',
      images: [
      'https://live.staticflickr.com/65535/53917188752_4573f5fef5_n.jpg',
      'https://live.staticflickr.com/65535/53917188777_b67c965e64_w.jpg',
      ],
      vendorPhone: '+221784743356',
      promotion: {
        discount: 10, 
        endDate: '2024-09-25T23:59:59' 
      },
      stock: 15
      },

      {
        id: 31,
        name: 'ZONE Sport ',
        description: 'Sacs de Téléphone portable',
        price: 2500,
        category: 'sport',
        images: [
        'https://s.alicdn.com/@sc04/kf/HTB1FQLZXOnrK1Rjy1Xcq6yeDVXah.jpg',
        'https://s.alicdn.com/@sc04/kf/HTB1XuTUinlYBeNjSszcq6zwhFXaW.jpg',
        'https://s.alicdn.com/@sc04/kf/HTB11gOaiXmWBuNjSspdq6zugXXaQ.jpg',
        ],
        promotion: {
          discount: 20, 
          endDate: '2024-09-19T23:59:59' 
        },
        vendorPhone: '+33758146261',
        stock: 15
        },

        {
          id: 32,
          name: 'Custom Brand',
          description: 'Costumes de pantalon',
          price: 80000,
          category: 'vetements',
          images: [
          'https://s.alicdn.com/@sc04/kf/H3a17680c893a4090abfe94b2ad36b21cR.jpg',
          'https://s.alicdn.com/@sc04/kf/Hd9c68838f4444723a0c5a633cffe073dn.jpg',
          'https://s.alicdn.com/@sc04/kf/H6db20e92226c43bc996db6197dd5be93l.jpg'
          ],
          promotion: {
            discount: 20, 
            endDate: '2024-09-15T23:59:59' 
          },
          vendorPhone: '+33758146261',
          stock: 10
          },

          {
            id: 33,
            name: 'Femmes Sexy Jupe',
            description: '100% coton Denim',
            price: 6500,
            category: 'vetements',
            images: [
            'https://s.alicdn.com/@sc04/kf/H85526e7e55e443c593b9302487ad2ba2R.jpg',
            'https://s.alicdn.com/@sc04/kf/H1f7aaa81232649b4b352c4e228268009O.jpg',
            'https://s.alicdn.com/@sc04/kf/Hfde0ff53a70a41ad82d118ee575586ffY.jpg'
            ],
            vendorPhone: '+33758146261',
            promotion: {
              discount: 20, 
              endDate: '2024-09-15T23:59:59' 
            },
            stock: 15
            },

];

export { products };