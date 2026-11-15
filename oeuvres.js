// =============================================================
// LES DONNÉES DES ŒUVRES (partagées par index.html, fiche.html et ra.html)
// -------------------------------------------------------------
// Une œuvre = un objet avec tous ses contenus.
// Plus tard, cette liste viendra de l'API FastAPI de Béa :
//   const OEUVRES = await (await fetch('/api/oeuvres')).json();
//
// Les champs :
//   id        → l'identifiant utilisé dans les liens : fiche.html?oeuvre=madame
//   zone      → la zone du bâtiment, pour ranger la liste du catalogue
//   x, y      → la position de la pastille sur le plan, en % (0 = gauche/haut, 100 = droite/bas)
//   image     → photo de l'œuvre (sert aussi de cible pour la RA) — facultatif
//   audio     → un fichier par langue — facultatif
//   video     → vidéo normale, affichée sur la fiche — facultatif
//   videoRA   → vidéo sur fond vert, utilisée en réalité augmentée — facultatif
// =============================================================

export const OEUVRES = [
  {
    id: "madame",
    titre: "Madame",
    artiste: "Aurélie Ludivine Alias Madame", 
    annee: "2021",
    site: 'https://www.madame.studio/',
    zone: "Salles de travail",
    x: 37,
    y: 30,
    image: "oeuvre2.jpg",
    texte:
      "Comedienne et scenographe de formation, Madame s'est tres vite redirigee vers les arts plastiques, la sculpture, la peinture, puis progressivement le collage. Non sans negliger ses premieres amours, Madame, avec divers materiaux d'epoque (papier, bois, metal, tissus etc.) deconstruit l'iconographie ancienne, pour la faire parler (d')aujourd'hui. Articulant son travail de collage entre texte et image, elle construit en atelier de petits formats, sortes de petites scenes en volume, qu'elle transpose ensuite en grandes affiches pour les apposer dans la rue. Les petits castelets crees dans l'intimite de l'atelier se muent alors en veritables scenes de theatre a ciel ouvert dans l'espace public.Un parcours de l'intime au public qui n'est pas sans rappeler l'essence meme du theatre mais aussi de la representation plus globalement, la sienne comme celle de tous...",
    audio: {
      fr: "green.mp4", // pour le test, on réutilise le son de la vidéo
      // en: 'madame-en.mp3',
    },
    video: "Madame.mp4",
    videoRA: "green.mp4",
    fondVert: true,
  },

  // ---- Œuvres de démonstration (sans fichiers) : à remplacer par les vraies ----
  {
    id: "oeuvre-1",
    titre: "Petite fille",
    artiste: "Dran",
    annee: "2004",
    zone: "Salles de travail",
    x: 62,
    y: 70,
    image: "oeuvre1.jpg",
    texte:
      "Né en 1979 à Toulouse, Dran est un artiste français reconnu pour ses graffitis et illustrations satiriques qui critiquent les problématiques sociales et politiques. Formé à l'École des Beaux-Arts de Toulouse, il y a développé une pratique artistique empreinte d'humour et d'ironie. Sa série emblématique « I Have Chalks » met en lumière le contraste entre l'innocence de l'enfance et les pressions de la société. Souvent comparé à Banksy pour son style subversif et ses messages engagés, Dran demeure une figure majeure du street art contemporain.",
    audio: {
      fr: "green.mp4", // pour le test, on réutilise le son de la vidéo
      // en: 'madame-en.mp3',
    },
    video: "collectionneur.mp4",
    videoRA: "green.mp4",
    fondVert: true,
  },

  {
    id: "dragon",
    titre: "Le dragon",
    artiste: "Bault",
    annee: "2022",
    zone: "Escalier est",
    x: 82,
    y: 55,
    texte:
      "Bault est un artiste incontournable de la scène urbaine actuelle. D’origine aveyronnaise, il vit et travaille actuellement à Paris. C’est en 1997 qu’il se familiarise avec la pratique du graffiti avant de suivre une formation à l’École des Beaux-Arts d’Avignon puis aux Arts Décoratifs de Strasbourg. Il fit ses armes avec plusieurs groupes tels que TK, TSH ou encore FDP.Peu à peu il délaisse la pratique du graffiti pour se consacrer à la vidéo d’art, au graphisme et à l’illustration.Passionné d’art brut et des dessins d’enfants; son œuvre est empreinte d’un réalisme détourné. Son intérêt se porte également sur les pratiques artistiques brésiliennes et plus particulièrement sur la technique de la pixaçao : mélange de tags et de recherches typographiques. Chacun est libre de créer ses propres signes afin de revendiquer ses idéaux.Artiste muraliste parmi les plus originaux de la scène parisienne, ses nombreuses réalisations et collaborations sont toujours colorées représentant des personnages tracés avec virtuosité puis soigneusement ancré dans le creuset de l’art brut.Surprenantes et reconnaissables, les œuvres de Bault naissent de son désir de dessiner, d’expérimenter, de se mettre en danger, de partager …",
    image: "oeuvre3.jpg",
    audio: {
      fr: "green.mp4", // pour le test, on réutilise le son de la vidéo
      // en: 'madame-en.mp3',
    },
    video: "collectionneur.mp4",
    videoRA: "green.mp4",
    fondVert: true,
  },

  {
    id: "oeuvre-4",
    titre: "L'oiseau",
    artiste: "Bault",
    annee: "2009",
    zone: "Escalier ouest",
    x: 16,
    y: 45,
    texte:
      "Léon alias BAULT peint sur des murs des figures qui forment le vocabulaire d’un nouveau type de communication symbolique urbaine. Chimères du coin de la rue, elles évoquent la polyphonie des sociétés en mutation. Dessin frénétique aux entrelacs savants, ombrages en taches et giclées de spray, le style est unique. Artiste muraliste parmi les plus originaux de la scène parisienne, ses nombreuses réalisations et collaborations font de Bault une figure incontournable de la place, un Street Art Insider.Bault peint en atelier, il cherche dans le dépouillement de taches organisées sur des supports bruts des occultismes signifiants. Sur de grandes toiles enduites de noir mat, il grave, comme sur une table d’écolier, des corps-paysages oniriques. Les outils du peintre trouvent vie, peuplant des masques primitifs où se mêlent bois, papiers déchirés, clous, proches d’un art brut/al que Bault a découvert en Haïti. L’économie des médias comme de l’écriture accroît l’efficience de la perception des signes essentiels d’une anthropologie de l’altération. Traçant un chemin entre les arts premiers contemporains, Bault est un artiste Outsider. Paradoxal et prolixe par la diversité de ses pratiques et de ses territoires d’expérimentations, Bault s’exprime dans une grande variété de supports et médias. Il passe de la rue à l’atelier et de l’atelier à la rue, Insider et Outsider.",
    image: "oeuvre6.jpg",
    audio: {
      fr: "green.mp4", // pour le test, on réutilise le son de la vidéo
      // en: 'madame-en.mp3',
    },
    video: "collectionneur.mp4",
    videoRA: "green.mp4",
    fondVert: true,
  },
  {
    id: "oeuvre-5",
    titre: "Feuillages",
    artiste: "Quentin DMR",
    annee: "2020",
    zone: "Couloir",
    x: 50,
    y: 10,
    texte: "Quentin DMR est un artiste qui se définit comme « photographe-plasticien », deux termes qui s’opposent et se rejoignent.Il expérimente, détourne, réoriente le regard et réalise une « déconstruction de l’image ». Il ne s’agit ni de détruire la représentation, ni de s’accommoder de ses stéréotypes. Le but de ses expérimentations est de pousser le spectateur à participer activement à la recomposition de l’image. Car le véritable rôle de ces coupures est d’interroger le langage de l’image. Une rencontre immersive et philosophique entre la trace d’un réel et le sens que l’on veut bien lui apporter.",
    image: "oeuvre9.jpg",
    audio: {
      fr: "green.mp4", // pour le test, on réutilise le son de la vidéo
      // en: 'madame-en.mp3',
    },
    video: "collectionneur.mp4",
    videoRA: "green.mp4",
    fondVert: true,
  },

  // ➕ Pour ajouter une œuvre, on copie un bloc et on change les valeurs.
];

// L'ordre des zones dans la liste du catalogue
export const ZONES = [
  "Escalier ouest",
  "Salles de travail",
  "Couloir",
  "Escalier est",
]; // ✏️ niveau R+4 : à ajuster selon les vraies places des œuvres
