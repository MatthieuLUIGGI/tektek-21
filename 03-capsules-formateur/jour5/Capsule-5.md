# 📘 Capsule Formateur – Jour 5
# CAPTURE FORMATEUR — Qualité du code, Nettoyage, Mode Zombie, Performance, Outils de Diagnostic et Introduction au SSR

**Durée recommandée :** 35 à 45 minutes

## 1. Objectifs pédagogiques

À la fin de cette capsule, les apprenants sauront :

- Nettoyer correctement un composant React.
- Identifier et éviter le "mode zombie" (logique inutile, re-renders non désirés, states superflus).
- Améliorer la performance d’un composant ou d’une application React.
- Utiliser des plateformes spécialisées pour analyser colorimétrie, accessibilité, performance et qualité du code.

---

## 2. Nettoyage d’un composant (Clean Component)

Un composant propre est :

- lisible
- court (20–40 lignes idéalement)
- à responsabilité unique
- prévisible
- facile à tester
- facile à maintenir

---

## 2.1 Voir Checklist-composant-propre.md :


```
[ ] Le composant ne fait qu'une seule chose
[ ] Les noms de variables et fonctions sont explicites
[ ] Aucun console.log inutile
[ ] Aucun state superflu
[ ] Aucune duplication de logique
[ ] Les useEffect sont nécessaires et justifiés
[ ] Le JSX est clair et peu imbriqué
[ ] Les styles sont séparés ou minimalistes
```


---

## 3. Le "mode zombie" en React

Un composant entre en "mode zombie" lorsqu'il :

- stocke dans le state ce qui peut être dérivé d'une prop ;
- duplique des informations inutilement ;
- exécute des `useEffect` non nécessaires ;
- rerend trop souvent ;
- utilise des variables jamais lues ;
- exécute des appels réseau non nettoyés ;
- contient du code mort ou obsolète.

## 4. Performance : cinq erreurs récurrentes

### 1. Stocker trop de choses dans le state
- Si la donnée est dérivable, elle ne doit pas être mise en state.

### 2. Utiliser des useEffect inutiles
- Ce qui peut être calculé directement ne nécessite pas d'effet.

### 3. Listes non optimisées
- Utiliser une key unique et stable.
- Éviter les composants lourds dans un `.map()`.

### 4. Re-renders non contrôlés
- Fonctions inline recréées à chaque rendu.
- Objets/arrays non mémorisés.

### 5. Architecture trop complexe
- Trop de composants "intelligents".
- Manque de découpage clair ou inversement, sur-découpage.

---
## 4.1. Performance :
# Règle d’or à vous transmettre

Tout effet qui crée quelque chose doit le nettoyer.
En pratique, cela signifie que chaque useEffect doit être évalué avec ces questions :

Ai-je créé quelque chose ?
Ai-je écouté quelque chose ?
Ai-je démarré quelque chose ?
Ai-je ouvert une connexion ?
Ai-je lancé une boucle ?
Si la réponse est “oui”, alors un cleanup est obligatoire.

### Cas où aucun cleanup n'est nécessaire

Effet purement calculatoire
Effet qui met à jour un state sans abonnement ni timer
Effet qui initialise une valeur et ne la réécoute jamais

Aucune ressource externe → pas besoin de nettoyage.
# Résumé : le cleanup en 5 points

Empêche les fuites mémoires.
Empêche les re-renders et effets fantômes.
Évite le "mode zombie" de React.
Améliore la performance.
Protège contre des comportements dangereux ou non voulus.

## 5. Plateformes de diagnostic

### 5.1 Colorimétrie
- Coolors
- Color Contrast Checker (WebAIM)
- Contrast.app

### 5.2 Accessibilité
- Axe DevTools
- Lighthouse (Accessibilité)
- Wave

### 5.3 Performance
- Lighthouse (Performance)
- React DevTools Profiler
- WebPageTest
- Bundle Analyzer

### 5.4 Qualité du code
- ESLint
- Prettier
- SonarLint

### 5.5 SEO
- Lighthouse (SEO)

### 8. Conclusion formateur

"Un composant propre est un composant qui vit bien, meurt bien et ne laisse aucune trace inutile. La qualité du code est un acte de respect envers son équipe et envers l'utilisateur final."