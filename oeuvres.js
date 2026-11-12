// =============================================================
// LES DONNÉES DES ŒUVRES (partagées par fiche.html et index.html)
// -------------------------------------------------------------
// Une œuvre = un objet avec tous ses contenus.
// Plus tard, cette liste viendra de l'API FastAPI de Béa :
//   const OEUVRES = await (await fetch('/api/oeuvres')).json();
// =============================================================

export const OEUVRES = [
  {
    id: 'madame',                    // l'identifiant utilisé dans le lien : fiche.html?oeuvre=madame
    titre: 'Madame',
    artiste: 'Madame la Contesse',    // ✏️ à compléter
    annee: '2026',                   // ✏️ à compléter
    image: 'oeuvre2.jpg',            // photo de l'œuvre (sert aussi de cible pour la RA)
    texte: 'Ici, l\'histoire de l\'œuvre : comment elle est arrivée dans la collection, ce qu\'elle raconte, la technique de l\'artiste… ✏️ à compléter.',
    audio: {                         // un fichier par langue (on peut en mettre une seule)
      fr: 'Thinking.mp3',               // pour le test, on réutilise le son de la vidéo
      // en: 'madame-en.mp3',
    },
    video: 'green.mp4',              // vidéo de l'artiste ou du guide (facultatif)
    fondVert: true,                  // la vidéo a un fond vert à effacer en RA
  },

  // ➕ Pour ajouter une œuvre, on copie le bloc ci-dessus et on change les valeurs.
];
