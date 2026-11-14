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
    id: 'madame',
    titre: 'Madame',
    artiste: 'Nom de l\'artiste',    // ✏️ à compléter
    annee: '20XX',                   // ✏️ à compléter
    zone: 'Rez-de-chaussée',
    x: 30, y: 80,
    image: 'oeuvre2.jpg',
    texte: 'Ici, l\'histoire de l\'œuvre : comment elle est arrivée dans la collection, ce qu\'elle raconte, la technique de l\'artiste… ✏️ à compléter',
    audio: {
      fr: 'green.mp4',               // pour le test, on réutilise le son de la vidéo
      // en: 'madame-en.mp3',
    },
    video: 'collectionneur.mp4',
    videoRA: 'green.mp4',
    fondVert: true,
  },

  // ---- Œuvres de démonstration (sans fichiers) : à remplacer par les vraies ----
  {
    id: 'oeuvre-2', titre: '[Œuvre 2]', artiste: '[Artiste]', annee: '',
    zone: 'Rez-de-chaussée', x: 55, y: 68,
    texte: 'Contenu à venir.',
  },
  {
    id: 'dragon', titre: 'Le dragon', artiste: '[Artiste]', annee: '',
    zone: 'Escalier Bault', x: 88, y: 75,
    texte: 'Contenu à venir. Bientôt en réalité augmentée : le dragon crache du feu !',
  },
  {
    id: 'oeuvre-4', titre: '[Œuvre 4]', artiste: '[Artiste]', annee: '',
    zone: '1er étage', x: 25, y: 28,
    texte: 'Contenu à venir.',
  },
  {
    id: 'oeuvre-5', titre: '[Œuvre 5]', artiste: '[Artiste]', annee: '',
    zone: '1er étage', x: 60, y: 30,
    texte: 'Contenu à venir.',
  },

  // ➕ Pour ajouter une œuvre, on copie un bloc et on change les valeurs.
];

// L'ordre des zones dans la liste du catalogue
export const ZONES = ['Rez-de-chaussée', 'Escalier Bault', '1er étage'];

