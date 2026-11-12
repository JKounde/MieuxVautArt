# MieuxVautArt 🎨

> On vise une œuvre avec son téléphone… et son guide apparaît à côté pour la raconter.

Projet réalisé en binôme dans le cadre de la **Startup Experience à 42 Paris**.

👉 **Démo en ligne :** https://jkounde.github.io/MieuxVautArt/

---

## 💡 L'idée

Les œuvres de street art sont muettes : on passe devant sans connaître leur histoire, leur technique ni leur message.

**MieuxVautArt** fait parler les œuvres grâce à la **réalité augmentée (RA)** :

1. On ouvre le lien (plus tard via un QR code à l'entrée du lieu).
2. On tape sur **« ▶ Commencer la visite »**.
3. On vise une œuvre avec la caméra.
4. Un guide (l'artiste, un collectionneur…) apparaît **détouré à côté de l'œuvre** et la raconte, avec le son 🎙️

✅ Pas d'appli à installer : tout se passe dans le navigateur du téléphone.

**Premiers lieux visés :** [ART42](https://www.art42.fr/) (musée de street art dans les locaux de 42) et [Fluctuart](https://fluctuart.fr/) (centre d'art urbain flottant).

---

## 🧰 Technologies

| Élément | Outil | Rôle |
|---|---|---|
| Structure / style / logique | HTML, CSS, JavaScript | La page web |
| Reconnaissance de l'œuvre | [MindAR](https://github.com/hiukim/mind-ar-js) 1.2.5 | Apprend la photo de l'œuvre puis la retrouve dans la caméra |
| Affichage 3D | [Three.js](https://threejs.org/) 0.160 | Pose la vidéo du guide à côté de l'œuvre |
| Fond vert | Shader GLSL | Efface le vert de la vidéo et coupe les bords |
| Hébergement | GitHub Pages | Adresse en `https` (obligatoire pour la caméra sur mobile) |
| Montage vidéo | CapCut | Détoure le guide et ajoute un fond vert pur |

Il n'y a **pas de backend** pour l'instant : tout tient dans `index.html`.

---

## 📁 Structure du projet

```
MieuxVautArt/
├── index.html      ← toute l'appli (HTML + CSS + JS)
├── oeuvre2.jpg     ← photo de référence de l'œuvre
├── green.mp4       ← vidéo du guide sur fond vert
├── .gitignore
└── README.md
```

---

## 🚀 Lancer le projet en local

La page doit être servie par un **serveur web** (la caméra et les `import` JavaScript ne marchent pas en double-cliquant sur le fichier).

```bash
cd MieuxVautArt
python3 -m http.server 8000
```

Puis ouvrir 👉 http://localhost:8000

> Python sert seulement à lancer un mini serveur web. On peut aussi utiliser l'extension **Live Server** de VS Code.

Pour tester : afficher la photo de l'œuvre sur un téléphone (ou l'imprimer) et la montrer à la webcam.

---

## 🌍 Mettre en ligne (GitHub Pages)

```bash
git add .
git commit -m "ce qu'on a changé"
git push
```

- Première fois : **Settings → Pages → Deploy from a branch → `main` / `(root)` → Save**.
- La mise à jour prend **1 à 2 minutes** (onglet **Actions** pour suivre).
- Si le téléphone affiche l'ancienne version : ajouter `?v=2` à la fin du lien (changer le chiffre à chaque test) ou ouvrir en navigation privée.

---

## ➕ Ajouter une œuvre

Dans `index.html`, la liste `OEUVRES` contient **une ligne par œuvre** :

```js
const OEUVRES = [
  { image: 'oeuvre2.jpg', video: 'green.mp4',  fondVert: true },
  { image: 'oeuvre3.jpg', video: 'guide3.mp4', fondVert: true },  // ← nouvelle œuvre
];
```

| Champ | Description |
|---|---|
| `image` | Photo de référence de l'œuvre (nette, de face, riche en détails) |
| `video` | Vidéo du guide (MP4 conseillé) |
| `fondVert` | `true` si la vidéo a un fond vert à effacer |

⚠️ Les noms doivent correspondre **exactement** aux fichiers, majuscules comprises.

### Régler la taille et la position du guide

```js
new THREE.PlaneGeometry(1.2, 1.2 * 16 / 9)   // 1 = largeur de l'œuvre → 1.2 = 120 %
plane.position.set(0.85, 0, 0.05)            // x = droite, y = haut, z = devant
```

---

## 🎬 Préparer la vidéo du guide

1. Filmer le guide **face caméra**, en **format portrait (9:16)**, avec beaucoup de lumière. Durée idéale : 30 s à 1 min.
2. Dans **CapCut** : mettre une image **vert pur `#00FF00`** sur la piste du bas, la vidéo au-dessus, puis **Vidéo → Découpage → Suppression automatique**.
3. Exporter en **MP4** (1080p).
4. Dans le code : `fondVert: true`.

> Le MP4 ne garde pas la transparence : c'est pour ça qu'on passe par le fond vert, que le code efface.
> Pas de vert sur les vêtements du guide, sinon ils disparaissent aussi 😄

---

## ⚠️ Points d'attention

- **Mobile :** les photos sont réduites à 1000 px avant analyse, sinon le téléphone manque de mémoire.
- **Vidéo :** préférer le **MP4** (le `.mov` et le WebM ne marchent pas sur tous les téléphones). Rester sous **100 Mo** par fichier (limite de GitHub).
- **Son :** le tap sur « Commencer » est obligatoire, car les navigateurs bloquent le son sans geste de l'utilisateur.
- **Droits d'auteur :** animer ou utiliser une œuvre demande l'**accord de l'artiste** (et du lieu). Pour les démos, on utilise nos propres créations ou des œuvres dont l'artiste a dit oui.

---

## 🗺️ Prochaines étapes

- [ ] Sortir la liste des œuvres du code (`oeuvres.json`)
- [ ] Page « ajouter une œuvre » (photo + vidéo + réglages)
- [ ] API **FastAPI** + base **SQLite** + stockage des vidéos
- [ ] Comptes artistes / musées, un lien par expo (ex. `/expo/art42`)
- [ ] Statistiques (scans, vidéos vues)
- [ ] Contacter l'association d'ART42 pour un premier test avec un artiste

---

## 👩‍💻 Équipe

- **Djo** ([@JKounde](https://github.com/JKounde))
- **Béa**
