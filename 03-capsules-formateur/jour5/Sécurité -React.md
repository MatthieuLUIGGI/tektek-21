# Capsule — Sécurité et React

React améliore la sécurité de l’affichage, mais **ne sécurise pas une application**.  
Cette capsule présente les points essentiels à maîtriser pour développer une application React plus sûre.

---

## 1. Protection intégrée : anti-XSS automatique

React échappe automatiquement les valeurs insérées dans le JSX.

# Exemple sécurisé :

```jsx
<div>{userInput}</div>
```
Même si userInput = "<script>alert('XSS')</script>",
React l’affiche comme texte et n’exécute pas le script.

## 2. React ne protège pas les données

Points essentiels :
Tout le code React peut être lu via DevTools.
Toute clé API exposée dans .env avec VITE_ ou REACT_APP_ est visible.
Les règles métier ne doivent jamais être côté front.

Règle d’or :
Ne jamais mettre de données sensibles dans React.

## 3. Principaux risques de sécurité dans une application React

### 3.1 XSS (Cross-Site Scripting)

Un XSS peut survenir lorsque :

- du HTML non sécurisé est injecté dans le DOM ;
- des données provenant du backend ne sont pas échappées correctement ;
- des librairies tierces insèrent du contenu HTML dynamique ;
- `dangerouslySetInnerHTML` est utilisé sans filtrage strict.

React protège automatiquement contre la plupart des injections XSS,  
mais cela ne couvre pas les cas où le développeur force l'injection HTML.

---

### 3.2 CSRF (Cross-Site Request Forgery)

React **ne** protège pas contre le CSRF.  
Cette protection doit être entièrement mise en place **côté serveur**.

Les mécanismes recommandés :

- utilisation de cookies `SameSite` ;
- implémentation d’un token anti-CSRF ;
- validation serveur de l'origine et des headers.

---

### 3.3 Exposition de secrets
Mauvaises pratiques fréquentes :

Erreurs fréquentes des débutants :

```js
export const SECRET_KEY = "123456";
```
Ou :

```jsx
REACT_APP_SECRET=AZERTY
```
Ces valeurs seront visibles dans le build final.

### 3.4 Injection via URL / Query Params

Exemple vulnérable :

## 4. Bonnes pratiques de sécurité avec React
### 4.1 Règle absolue

Le front ne doit jamais contenir de logique sensible.

### 4.2 Stockage sécurisé

À éviter :
localStorage
sessionStorage
cookies non sécurisés
À préférer :
cookies HttpOnly et Secure (gérés par le backend)

### 4.3 Gestion des clés API

Clés secrètes → backend uniquement
Clés publiques → limitées en permissions

### 4.4 Éviter dangerouslySetInnerHTML

Sauf si le contenu est sanitizé.

### 4.5 Nettoyer les effets

Toujours nettoyer les effets qui créent des abonnements ou timers.
Exemple :

```jsx
useEffect(() => {
  const id = setInterval(() => {}, 1000);
  return () => clearInterval(id);
}, []);
```
## 4.6 Cleanup dans React : pourquoi c’est indispensable

Le "cleanup" est la fonction de nettoyage retournée par `useEffect`.  
Elle permet à React de **nettoyer correctement** tout ce que l’effet a créé :

- abonnements,
- intervals / timeouts,
- listeners globales,
- connexions,
- WebSockets,
- observers,
- API qui tournent en continu.

Sans cleanup, une application React peut devenir :

- lente,
- instable,
- gourmande en mémoire,
- imprévisible.

C’est également une faille potentielle de sécurité :  
des effets non nettoyés peuvent continuer à exécuter du code alors que l’utilisateur a quitté la page.

---

### Exemple d’effet sans cleanup (dangereux)

```jsx
useEffect(() => {
  window.addEventListener("resize", handleResize);
});
```

Problèmes :
ajoute un nouveau listener à chaque render,
jamais nettoyé,
accumulation infinie → fuite mémoire,
exécutions multiples → comportement zombie.

### Version correcte avec cleanup

```jsx
useEffect(() => {
  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);
```
Explications :
l’effet s’exécute une seule fois,
le cleanup supprime le listener lorsque le composant se démonte,
aucun risque de fuite ou de duplication.

### 5. Résumé essentiel pour les apprenants

React protège contre la plupart des XSS.
React ne protège ni les données ni les clés API.
Le front n’est pas un espace sécurisé.
Toute la sécurité sérieuse doit être mise côté backend.
Ne jamais exposer de logique ou de secrets dans React.
