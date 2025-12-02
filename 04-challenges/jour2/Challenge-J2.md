# 📦 Challenge du Jour 2 : Transformer la maquette J1 en application React

## 🎬 Contexte  
Hier, en équipe, vous avez réalisé une **maquette HTML/CSS** représentant l’interface de votre application.

Aujourd’hui, votre mission est de :

> **Transposer cette maquette dans votre projet React en respectant les bonnes pratiques vues en capsule formateur.**

L’objectif n’est pas seulement de “mettre du HTML dans React”, mais de **penser en composants**, de **structurer proprement** l’application, et de poser les bases d’une **architecture scalable**.

---

# 🚀 Étape obligatoire : Installer Tailwind CSS dans votre projet React

Pour styliser votre application, vous devez installer **Tailwind CSS en autonomie**.

### ⚠️ Aucun guidage technique ne sera fourni.

Vous devez :

- chercher l’information,  
- expérimenter,  
- collaborer,  
- documenter,  
- corriger vos erreurs.  

Vous pouvez :

- consulter la documentation officielle,  
- travailler entre équipes,  
- demander de l’aide à une IA,  
- analyser un projet existant.  

### 🎯 Objectif pédagogique  
Développer votre **autonomie**, votre **capacité de recherche**, et votre compétence clé :  
> **savoir apprendre à apprendre.**

---

# 📐 Étapes du Challenge  
*(se référer à la capsule formateur)*

---

## 1️⃣ Créer l’architecture React propre (obligatoire)

Organisation attendue :

---

## 2️⃣ Mettre en place un Layout avec `children`

Un composant `Layout.jsx` doit englober toute l’application :

- Header  
- Nav  
- Footer  
- un `<main>` contenant `{children}`  

---

## 3️⃣ Découper la maquette en composants réutilisables

Exemples possibles :

- `ProfileCard.jsx`  
- `Button.jsx`  
- `Section.jsx`  
- `CardList.jsx`  
- `Sidebar.jsx`  
- `Hero.jsx`

Chaque composant doit :

- recevoir ses données via **props**,  
- être autonome,  
- être réutilisable.  

---

## 4️⃣ Intégrer les données dynamiques (si applicable)

Vous pouvez créer des fichiers dans `src/data/` contenant vos listes, puis utiliser `.map()` pour générer l’affichage dynamique.

---

## 5️⃣ Respecter les bonnes pratiques de la capsule formateur

Vous devez impérativement appliquer :

- ✔ **Architecture claire** : `components/`, `pages/`, `layout/`  
- ✔ **Découpage intelligent** de la maquette  
- ✔ Composants en **PascalCase**  
- ✔ Pas d’état inutile pour le moment (**top-down flow**)  
- ✔ **JSX propre**, indenté, lisible  
- ✔ Layout commun : **Header + Nav + Footer**  
- ✔ Utilisation correcte des **props**  
- ✔ Aucun effet de bord dans les composants structurels  

---

# 🎯 Livrables attendus (obligatoires)

### 1. Une application React fonctionnelle  
Structure propre + layout opérationnel.

### 2. Une transposition fidèle de la maquette J1  
Respect du design, intentions UX, organisation visuelle.

### 3. Un repo propre avec commits réguliers  
❌ Pas de “final”, “test”, “fix”…  
✔ Noms de commits clairs.

### 4. Un README simple expliquant :  
- l’organisation du projet,  
- la liste des composants créés,  
- la répartition du travail dans l’équipe.  

---

# 🧪 Grille d’évaluation

| Critère          | Attendu |
||
| **Architecture** | Respect du layout, dossiers propres |
| **Composants**   | Découpage logique et réutilisable |
| **Props**        | Propreté et cohérence |
| **JSX**          | Lisible, propre, sans erreurs |
| **Maquette**     | Fidélité par rapport au J1 |
| **Travail d’équipe** | Collaboration, répartition claire |
| **Bonus**        | Dynamique / interactions |

---

# 💡 Bonus (optionnel)

- Ajouter une interaction simple (hover, bouton, état local léger)  
- Commencer à isoler des composants UI (Button, Card, Tag…)  

---

# 🎤 Message de fin de challenge

> **"Aujourd’hui, vous avez transformé une maquette statique en application React modulaire.  
C’est le cœur du métier : penser composants, penser structure, penser data flow."**

---
