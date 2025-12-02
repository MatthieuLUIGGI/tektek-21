# ✅ Bonnes pratiques — Structure propre et scalable

Voici les **bonnes pratiques professionnelles** pour mettre en place une structure React claire, maintenable et évolutive.

---

## 🧭 1. Structure idéale des dossiers

Pour une application React simple mais bien organisée, utilisez cette arborescence :

src/
├── components/
│ ├── layout/
│ │ ├── Header.jsx
│ │ ├── Nav.jsx
│ │ └── Footer.jsx
│
│ └── ui/ ← futurs petits composants réutilisables (Button, Card, Tag…)
│
├── pages/
│ ├── Home.jsx
│ ├── Participants.jsx
│ └── About.jsx
│
├── App.jsx
├── main.jsx
└── styles.css


### 🎓 Pourquoi cette structure ?
- `layout/` contient toute la structure (Header / Nav / Footer)
- `ui/` contient les composants atomiques (petits, réutilisables)
- `pages/` représente les écrans principaux
- `App.jsx` agit comme chef d’orchestre
- structure **scalable**, facile à maintenir et à faire évoluer vers React Router

---

## 🧭 2. Mettre en place un Layout avec `children`

### 📁 `components/layout/Layout.jsx`

```jsx
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Nav />

      <main>
        {children}
      </main>

      <Footer />
    </>
  );
}
```
### 🎓 Pourquoi cette structure ?
- `layout/` contient toute la structure (Header / Nav / Footer)
- `ui/` contient les composants atomiques (petits, réutilisables)
- `pages/` représente les écrans principaux
- `App.jsx` agit comme chef d’orchestre
- structure **scalable**, facile à maintenir et à faire évoluer vers React Router

---

## 🧭 2. Mettre en place un Layout avec `children`

### 📁 `components/layout/Layout.jsx`

```jsx
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Nav />

      <main>
        {children}
      </main>

      <Footer />
    </>
  );
}
```
🎓 Pourquoi utiliser {children} ?

pour pouvoir injecter n'importe quelle page dans la structure commune
pour éviter de répéter Header / Nav / Footer dans chaque fichier
pour préparer l'arrivée de React Router (où Outlet remplace children)

🧭 Exemple de mise en place dans App.jsx

```jsx
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";

export default function App() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}

```
➡️ Home devient le contenu dynamique rendu dans {children}.
🧭 3. Composants structurels simples et atomiques

Ces composants doivent être petits, simples, et sans logique complexe.
🔹 Nav.jsx

❗ Version avant installation de React Router (utilise <a href>)

```jsx
export default function Nav() {
  return (
    <nav>
      <ul>
        <li><a href="/">Accueil</a></li>
        <li><a href="/participants">Participants</a></li>
        <li><a href="/about">À propos</a></li>
      </ul>
    </nav>
  );
}

```
## 🎓 Bonnes pratiques pour un composant structurel

pas de state
pas de logique métier
juste de l’affichage
responsive facile à ajouter plus tard

## 🎤 Message clé à transmettre

« Une structure propre dès le début évite 80% des problèmes plus tard.
Les bons composants sont simples, atomiques, et organisés dans des dossiers cohérents.
Ce que vous mettez en place aujourd’hui servira toute l’année. »
