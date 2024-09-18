const products = [
    {
      id: 1,
      name: 'Robe Femme',
      description: ' Toutes les tailles | S, L, M, XL ',
      price: 13000,
      images: [
        'https://live.staticflickr.com/65535/54004585421_9786d774ef_w.jpg',
        'https://live.staticflickr.com/65535/54005006385_ea4b85b8e5_w.jpg',
        ],
      vendorPhone: '+221781520600' 
    },
    {
      id: 2,
      name: 'Robe Femme',
      description: ' Toutes les tailles | S, L, M, XL ',
      price: 7000,
      images: [
        'https://live.staticflickr.com/65535/53918079291_fd5fb40099_n.jpg',
        'https://live.staticflickr.com/65535/53918431534_3744337f06_n.jpg',
        ],
      vendorPhone: '+33758146261' 
    },

    {
      id: 3,
      name: 'Ensemble femme',
      description: 'Toutes les tailles | S, L, M, XL ',
      price: 6500,
      images: [
        'https://live.staticflickr.com/65535/54003722832_4ab8cf4d60_w.jpg',
        'https://live.staticflickr.com/65535/53918525480_4f51da965d_n.jpg',
        'https://live.staticflickr.com/65535/53918326368_3007678649_w.jpg',
      ],
      vendorPhone: '+33758146261' 
    },
    
    {
      id: 33,
      name: 'Perruques',
      description: 'Toutes les tailles',
      price: 25000,
      images: [
        'https://live.staticflickr.com/65535/54003722967_4476dfc92d_n.jpg',
        'https://live.staticflickr.com/65535/54003722832_4ab8cf4d60_w.jpg',
        'https://live.staticflickr.com/65535/54004860668_deebf9bb45_n.jpg',
        'https://live.staticflickr.com/65535/54003722967_4476dfc92d_n.jpg',
        ],
      vendorPhone: '+221781520600' 
    },

    {
      id: 3,
      name: 'Ensemble deux pièces',
      description: 'Ensemble deux pièces',
      price: 2500,
      images: [
        'https://live.staticflickr.com/65535/53918326223_b42c569af8_w.jpg',
        'https://live.staticflickr.com/65535/53917188547_cac5a4720d_w.jpg',
        'https://live.staticflickr.com/65535/53918326218_f9bf1a5a3d_w.jpg',
        ],
      vendorPhone: '+33758146261' 
    },
   
    {
      id: 4,
      name: 'Ensemble deux pièces',
      description: 'Ensemble deux pièces',
      price: 2500,
      images: [
        'https://live.staticflickr.com/65535/53918326223_b42c569af8_w.jpg',
        'https://live.staticflickr.com/65535/53917188547_cac5a4720d_w.jpg',
        'https://live.staticflickr.com/65535/53918326218_f9bf1a5a3d_w.jpg',
        ],
      vendorPhone: '+33758146261' 
    },


    {
      id: 5,
      name: '	Femmes Sexy Jupe',
      description: 'Jupe en denim pour femmes, longue, taille haute, mode de bureau, style décontracté, nouvelle collection été',
      price: 6500,
      images: [
        'https://s.alicdn.com/@sc04/kf/H85526e7e55e443c593b9302487ad2ba2R.jpg',
        'https://s.alicdn.com/@sc04/kf/H1f7aaa81232649b4b352c4e228268009O.jpg',
        'https://s.alicdn.com/@sc04/kf/Hfde0ff53a70a41ad82d118ee575586ffY.jpg'
        ],
      vendorPhone: '+33758146261' 
    },
    {
      id: 34,// Vêtements 
      name: 'Robe',
      description: 'Tailles: XL | M | L',
      price: 8000,
      images: [
        'https://live.staticflickr.com/65535/54004910659_fa98b38975_n.jpg',
        'https://live.staticflickr.com/65535/54003677497_c177414031_n.jpg',
        ],
      vendorPhone: '+221781520600' 
    },
    {
      id: 6,// Vêtements raison
      name: 'Robe',
      description: 'Tailles: XL | M | L',
      price: 8000,
      images: [
        'https://live.staticflickr.com/65535/53804146564_6d12963d8f_b.jpg',
        'https://live.staticflickr.com/65535/53804063223_07ccde5008_b.jpg',
        'https://live.staticflickr.com/65535/53803818431_29f2a5a591_b.jpg'
      ],
      vendorPhone: '+221784743356' 
    },

    // Vêtements
    {
        id: 7,// Vêtements raison
        name: 'Robe en gros et en détails',
        description: 'Tissu en coton,\n Disponible taille L | XL | XXL | 3XL',
        price: 8000,
        images: [
          'https://live.staticflickr.com/65535/53808261640_81983ff3b3_w.jpg',
          'https://live.staticflickr.com/65535/53808261640_81983ff3b3_w.jpg',
          'https://live.staticflickr.com/65535/53808261640_81983ff3b3_w.jpg'
          ],
        vendorPhone: '+221784743356' 
      },
    {
        id: 8,
        name: 'Robe de soirée femme',
        description: '100% Polyester Vente en gros de vêtements personnalisés pour femmes robes de bal en satin pour femme robe de soirée enveloppante chic à une épaule robe élégante',
        price: 15000,
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
        price: 6500,
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
        name: 'Pull Homme | Femme',  
        description: 'Blanc personnalisé à manches longues hiver coton français éponge pull sweat mince Couple ras du cou sweats à capuche et sweats',
        price: 6000,
        images: [
          'https://s.alicdn.com/@sc04/kf/H41b80ca10ccd4bac8264eefd48316704V.jpg',
          'https://s.alicdn.com/@sc04/kf/H491e6c1e4845486abc3afc8718c9a964W.jpg',
          ],
        vendorPhone: '+33758146261' 
      },
    {
        id: 12, 
        name: 'Combinaison femmes',  
        description: 'combinaison femmes lâche plissé large jambe combinaisons élégant bureau dames à manches longues combinaison avec ceinture',
        price: 10000,
        images: [
          'https://s.alicdn.com/@sc04/kf/H58cb15421aa94bc5a813bf8f4b883a3bY.png',
          'https://s.alicdn.com/@sc04/kf/H9d075e179f454d2388796c5bda521df3Q.jpg',
          'https://s.alicdn.com/@sc04/kf/Hd6ced2e218df41f7bb1c17bdb9f73de9e.jpg',
          'https://s.alicdn.com/@sc04/kf/Hd1f0f03ed9824666ae75f8bb44be83ae0.jpg',
          'https://s.alicdn.com/@sc04/kf/H3d6bd0cb4b8f400f9dde650405b8176f2.jpg',
          'https://s.alicdn.com/@sc04/kf/Hd4264e42d8254abbaa38bacc299612e3M.jpg'
          ],
        vendorPhone: '+33758146261' 
      },
    {
        id: 13, 
        name: 'Chemises Hommes',  
        description: "Chemises pour hommes en pur coton, Anti-rétricissant, Anti-rides, Respirant, Séchage rapide, Autres de vente chaude, couleur unie, chemise bleue vierge, chemise à manches longues à revers, en stock, rapidement envoyé",
        price: 6500,
        images: [
          'https://s.alicdn.com/@sc04/kf/H12cdfb8eaa3a4929be28cba2d2c701cbW.jpg',
          'https://s.alicdn.com/@sc04/kf/H2d6d61a7e124466a8ab87e3d4e9d6a38c.jpg',
          'https://s.alicdn.com/@sc04/kf/H197d813ab6d645268032263c9b2b40a00.jpg',
          'https://s.alicdn.com/@sc04/kf/Hae3219dab53547cf863174cc0d908c96z.jpg',
          'https://s.alicdn.com/@sc04/kf/Hdf4b5a1e550349f5967b283dca1d84c0h.jpg'
          ],
        vendorPhone: '+33758146261' 
      },
    {
        id: 14, 
        name: 'Chemises Hommes',  
        description: "Chemise de couleur unie Oxford tissée mince pour hommes, chemise à manches longues pour hommes, nouvelle collection d'automne transfrontalier",
        price: 6000,
        images: [
          'https://s.alicdn.com/@sc04/kf/H414fc4a08f8f4b0690dd30d2118a0f8eU.jpg',
          'https://s.alicdn.com/@sc04/kf/H1be3e820295b438588483000eb45c891l.jpg',
          'https://s.alicdn.com/@sc04/kf/Hefe0c5fe5f644ea8a8dd90ba8f0d98e0I.jpg',
          'https://s.alicdn.com/@sc04/kf/Hd50830bdb3014505811fe3b4761a8a6fl.jpg',
          'https://s.alicdn.com/@sc04/kf/Hf8bbab9f172d43309128ba137f426061x.jpg'
        ],
        vendorPhone: '+33758146261' 
      },
    {
        id: 15, 
        name: 'Ensembles de shorts',  
        description: "Ensembles de shorts pour hommes Ensemble de chemises d'été personnalisées pour hommes Ensemble de t-shirts et shorts de plage à manches courtes",
        price: 7000,
        images: [
          'https://s.alicdn.com/@sc04/kf/Hc13922b4f77741a1971d5d3ea8164f73P.png',
          'https://s.alicdn.com/@sc04/kf/H70702c2fbcca4385add27f95d2f9f5fcp.png',
          'https://s.alicdn.com/@sc04/kf/H030af050062d4538acb91c1af58b6bb2t.png',
          'https://s.alicdn.com/@sc04/kf/Hd9b97457fc904340a0327bde51254635F.png',
          'https://s.alicdn.com/@sc04/kf/Hd6152d57976e4b0f931b81d5206ca19eV.png'
        ],
        vendorPhone: '+33758146261' 
      },
    {
      id: 16, 
      name: 'draps plats',  
      description: "Vente en gros de draps plats en polyester brossé en microfibre ensembles de draps et taies d'oreiller",
      price: 6500,
      images: [
        'https://s.alicdn.com/@sc04/kf/Ha9658f0230284f87ac87c68821d68bb2G.jpg',
        'https://s.alicdn.com/@sc04/kf/H5423e303cfbb47529b3600661f20c20cx.jpg',
        'https://s.alicdn.com/@sc04/kf/Hd7ce141a43644a8e9d63bce2af43bab1I.jpg',
        'https://s.alicdn.com/@sc04/kf/Hbf6d45e665ba49d1a0b0f71b489aec9bA.jpg',
        'https://s.alicdn.com/@sc04/kf/H80e39df3cadd4f778bd15007d9394ef7H.png'
      ],
      vendorPhone: '+33758146261' 
    },
    {
      id: 17, 
      name: 'Drap-housse',  
      description: "Drap-housse à imprimé café avec taies d'oreiller, housse de protection de matelas, taille King/Queen/Twin, 3 pièces",
      price: 6000,
      images: [
        'https://s.alicdn.com/@sc04/kf/Hb9327b0ad28d4d7592200ae312ad278be.jpg',
        'https://s.alicdn.com/@sc04/kf/Hd563096c298245a59a298ff69c296e67C.jpg',
        'https://s.alicdn.com/@sc04/kf/Hd7ce141a43644a8e9d63bce2af43bab1I.jpg',
        'https://s.alicdn.com/@sc04/kf/Hd8c1570821934f2ba9c4de9feb241d898.jpg',
        'https://s.alicdn.com/@sc04/kf/H7270ff5536e1419c858dfbb155434c54U.jpg',
        'https://s.alicdn.com/@sc04/kf/H7c67bde15747449e82c29d2c3d49c4332.jpg'
      ],
      vendorPhone: '+33758146261' 
    },
    {
      id: 18, 
      name: 'Mini broyeur',  
      description: "Nouveau hachoir à lame en métal manuel Mini broyeur d'ail en acier inoxydable pour légumes et fruits pour usage en cuisine",
      price: 5000,
      images: [
        'https://s.alicdn.com/@sc04/kf/H2890d50f345f4056ac236fad8fbb5f8cU.png',
        'https://s.alicdn.com/@sc04/kf/Hdde0ea2ed30944f0ada91c76439c16e8V.png',
        'https://s.alicdn.com/@sc04/kf/H5bcfa19a90fc4be5b7a06ba1ea5e85b3Y.png',
        'https://s.alicdn.com/@sc04/kf/Hfb95223a915043ee95329d8d2880b7dc6.png',
        'https://s.alicdn.com/@sc04/kf/H4a0d44471a694a7d945170de8cdd78f0A.png',
        'https://s.alicdn.com/@sc04/kf/Hcbf55f7354bf4bc9891139bb872a478cx.png'
      ],
      vendorPhone: '+33758146261' 
    },
    {
      id: 19, 
      name: 'Contrôleur de jeu sans fil 2.4G ',  
      description: "PG-9076 contrôleur de jeu sans fil 2.4G pour Android Smartphone iOS Gamepad pour PC PS3 poignée Joystick",
      price: 8000,
      images: [
        'https://s.alicdn.com/@sc04/kf/Hc1c0b699684b42b6a00dd234944547184.jpg',
        'https://s.alicdn.com/@sc04/kf/H206a15ef54194c5c831b9c5ae6fe2b6fR.jpg',
        'https://s.alicdn.com/@sc04/kf/H189c6bd52c6249b49e867b0243cc4f20W.jpg',
        'https://s.alicdn.com/@sc04/kf/Hb493a24e6f85418383c380d210e87cfbW.jpg',
        'https://s.alicdn.com/@sc04/kf/H538b2787519d46fab86128f1874d187aw.jpg',
        'https://s.alicdn.com/@sc04/kf/He8f69a08da8f43ba97ce66c76d61e53eF.jpg'
      ],
      vendorPhone: '+33758146261' 
    },
    {
      id: 20,// Vêtements raison
      name: 'Ensemble H&F',
      description: 'Tissu en coton,\n Disponible taille L | XL | XXL | 3XL',
      price: 8000,
      images: [
        'https://live.staticflickr.com/65535/53808149299_845e11f25b_w.jpg',
        'https://live.staticflickr.com/65535/53806891127_2371ca23f1_w.jpg',
        'https://live.staticflickr.com/65535/53807824346_a454c0bc44_w.jpg',
        'https://live.staticflickr.com/65535/53808261690_3762aca3df_w.jpg'
      ],
      vendorPhone: '+221784743356' 
    },
    {
      id: 21,// Vêtements raison
      name: 'Ensemble H&F',
      description: 'Tissu en coton,\n Disponible taille L | XL | XXL | 3XL',
      price: 8000,
      images: [
        'https://live.staticflickr.com/65535/53806891132_5b166f4f7c_w.jpg',
        'https://live.staticflickr.com/65535/53808066533_a7ee9543a0_w.jpg',
        'https://live.staticflickr.com/65535/53808066543_08a5387f87_w.jpg',
      ],
      vendorPhone: '+221784743356' 
    },
    {
      id: 22,// Vêtements raison
      name: 'Ensemble H&F',
      description: 'Tissu en coton,\n Disponible taille L | XL | XXL | 3XL',
      price: 6500,
      images: [
        'https://live.staticflickr.com/65535/53808261695_161b2c5f85_w.jpg',
        'https://live.staticflickr.com/65535/53807824376_456948f358_w.jpg',
      ],
      vendorPhone: '+221784743356' 
    },
    {
      id: 23,// Vêtements raison
      name: 'Ensemble H&F',
      description: 'Tissu en coton,\n Disponible taille L | XL | XXL | 3XL',
      price: 6000,
      images: [
        'https://live.staticflickr.com/65535/53808149329_59e6f358e4_w.jpg',
        'https://live.staticflickr.com/65535/53806891147_67fec9235b_w.jpg',
        'https://live.staticflickr.com/65535/53808066548_3b17ec4f65_w.jpg',
        'https://live.staticflickr.com/65535/53808066543_08a5387f87_w.jpg',
        'https://live.staticflickr.com/65535/53806891162_5cc02640cf_w.jpg',
      ],
      vendorPhone: '+221784743356' 
    },
    {
      id: 24,// Vêtements raison
      name: 'Ensemble H&F',
      description: 'Tissu en coton,\n Disponible taille L | XL | XXL | 3XL',
      price: 6500,
      images: [
        'https://live.staticflickr.com/65535/53806891187_ee975c0252_w.jpg',
        'https://live.staticflickr.com/65535/53807824386_ed8b86f2b0_w.jpg',
        'https://live.staticflickr.com/65535/53808261775_6693ab5503_w.jpg',
        'https://live.staticflickr.com/65535/53806891207_fbe177a5d2_w.jpg',
        'https://live.staticflickr.com/65535/53806891162_5cc02640cf_w.jpg',
      ],
      vendorPhone: '+221784743356' 
    },
    {
      id: 25,// Vêtements raison
      name: 'Ensemble Femme',
      description: 'Tissu en coton,\n Disponible taille L | XL | XXL | 3XL',
      price: 6000,
      images: [
        'https://live.staticflickr.com/65535/53806891187_ee975c0252_w.jpg',
        'https://live.staticflickr.com/65535/53807824376_456948f358_w.jpg',
      ],
      vendorPhone: '+221784743356' 
    },
    {
      id: 26,// Vêtements raison
      name: 'Ensemble Femme',
      description: 'Tissu en coton,\n Disponible taille L | XL | XXL | 3XL',
      price: 6500,
      images: [
        'https://live.staticflickr.com/65535/53808261755_e378a6ecb9_w.jpg',
        'https://live.staticflickr.com/65535/53806891177_413d86dc4a_w.jpg',
      ],
      vendorPhone: '+221784743356' 
    },
    {
      id: 27,// Vêtements raison
      name: 'Ensemble Femme',
      description: 'Tissu en coton,\n Disponible taille L | XL | XXL | 3XL',
      price: 7000,
      images: [
        'https://live.staticflickr.com/65535/53807824286_05c79659ab_n.jpg',
        'https://live.staticflickr.com/65535/53808261645_240d0c12aa_w.jpg',
      ],
      vendorPhone: '+221784743356' 
    },
    {
      id: 28,// Vêtements raison
      name: 'Ensemble Femme',
      description: 'Tissu en coton,\n Disponible taille L | XL | XXL | 3XL',
      price: 6000,
      images: [
        'https://live.staticflickr.com/65535/53806891072_2c565e3b87_w.jpg',
        'https://live.staticflickr.com/65535/53806891097_5e15fa9968_n.jpg',
        'https://live.staticflickr.com/65535/53807824276_1a10e6dcb0_w.jpg',
      ],
      vendorPhone: '+221784743356' 
    },
    {
      id: 29,// Vêtements raison
      name: 'Ensemble Femme',
      description: 'Tissu en coton,\n Disponible taille L | XL | XXL | 3XL',
      price: 3000,
      images: [
        'https://live.staticflickr.com/65535/53808149244_2e6ec6330a_n.jpg',
        'https://live.staticflickr.com/65535/53808149274_c14f032e24_n.jpg',
        'https://live.staticflickr.com/65535/53808149289_8e66a33302_w.jpg',
        'https://live.staticflickr.com/65535/53806891107_a4f580e8ae_w.jpg',
        'https://live.staticflickr.com/65535/53807824316_5c8fcdd4f2_w.jpg',
      ],
      vendorPhone: '+221784743356' 
    },

    {
      id: 30,
      name: 'Robe Femme',
      description: ' Toutes les tailles | S, L, M, XL ',
      price: 7000,
      images: [
        'https://live.staticflickr.com/65535/53917188752_4573f5fef5_n.jpg',
        'https://live.staticflickr.com/65535/53917188777_b67c965e64_w.jpg',
        'https://live.staticflickr.com/65535/53918079316_f5d4b32b37_w.jpg',
        'https://live.staticflickr.com/65535/53918431524_d372a79efc_n.jpg',
        'https://live.staticflickr.com/65535/53918079321_47efa595d3_w.jpg',
        ],
      vendorPhone: '+33758146261' 
    },

    {
      id: 31,
      name: 'Sacs de Téléphone portable ',
      description: 'Brassard De Sport pour Téléphone Portable Pour Tous Les Téléphones mobiles Accessoire',
      price: 2500,
      images: [
        'https://s.alicdn.com/@sc04/kf/HTB1FQLZXOnrK1Rjy1Xcq6yeDVXah.jpg',
        'https://s.alicdn.com/@sc04/kf/HTB1XuTUinlYBeNjSszcq6zwhFXaW.jpg',
        'https://s.alicdn.com/@sc04/kf/HTB11gOaiXmWBuNjSspdq6zugXXaQ.jpg',
      ],
      vendorPhone: '+33758146261' 
    },

    {
      id: 32,
      name: 'Custom Brand',
      description: "Costume 3 pièces élégant avec pantalon pour homme, coupe Slim, bouton unique, tenue de soirée formelle, costume d'affaires",
      price: 80000,
      images: [
        'https://s.alicdn.com/@sc04/kf/H3a17680c893a4090abfe94b2ad36b21cR.jpg',
        'https://s.alicdn.com/@sc04/kf/Hd9c68838f4444723a0c5a633cffe073dn.jpg',
        'https://s.alicdn.com/@sc04/kf/H6db20e92226c43bc996db6197dd5be93l.jpg'
      ],
      vendorPhone: '+221784743356' 
    },


  ];