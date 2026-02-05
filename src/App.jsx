import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    console.log("=== TP REACT - EXERCICES ES6 ===");
    
    // Exercice 1
    const findLongestWord = (words) => {
      const wordsWithLength = words.map(mot => ({
        mot: mot,
        longueur: mot.length
      }));
      
      const longest = wordsWithLength.reduce((max, current) => 
        current.longueur > max.longueur ? current : max
      , { mot: '', longueur: 0 });
      
      return {
        mot: longest.mot,
        longueur: longest.longueur
      };
    };

    const mots = ["ordinateur", "programmation", "développement", "web"];
    console.log("Ex1 - Mot le plus long:", findLongestWord(mots));

    // Exercice 2
    const countOccurrences = (arrays) => {
      const flatArray = arrays.flat();
      return flatArray.reduce((count, item) => {
        count[item] = (count[item] || 0) + 1;
        return count;
      }, {});
    };

    const arrays = [['a', 'b', 'c'], ['c', 'd', 'e'], ['e', 'd', 'f']];
    console.log("Ex2 - Occurrences:", countOccurrences(arrays));

    // Exercice 3
    const calculerTotalNotes = (eleves) => {
      const avecBonus = eleves.map(eleve => ({
        ...eleve,
        note: eleve.note < 50 ? eleve.note + 15 : eleve.note
      }));
      
      const elevesSup50 = avecBonus.filter(eleve => eleve.note > 50);
      return elevesSup50.reduce((total, eleve) => total + eleve.note, 0);
    };

    const eleves = [
      { nom: "Alice", note: 45 },
      { nom: "Bob", note: 60 },
      { nom: "Charlie", note: 38 },
      { nom: "David", note: 72 }
    ];
    console.log("Ex3 - Total notes >50:", calculerTotalNotes(eleves));

    // Exercice 4
    let dernierId = 0;
    let Tab = [
      { nom: "Laptop", prix: 1200 },
      { nom: "Souris", prix: 25 },
      { nom: "Clavier", prix: 80 }
    ];

    Tab = Tab.map(objet => {
      dernierId++;
      return { id: dernierId, ...objet };
    });

    Tab.push({ id: ++dernierId, nom: "Écran", prix: 300 });
    Tab.unshift({ id: ++dernierId, nom: "Casque", prix: 150 });

    console.log("Ex4 - Tableau Tab:", Tab);

    // Fonction Search
    const Search = (tableau, idRecherche) => {
      return tableau.find(item => item.id === idRecherche);
    };

    console.log("Recherche ID 2:", Search(Tab, 2));
    console.log("Recherche ID 5:", Search(Tab, 5));
    
    console.log("=== FIN ===");
  }, []);

  return (
    <div>
      <h1>TP React - Atelier 0</h1>
      <p>Installation et configuration d'une application React</p>
      
      <h3>Exercices ES6 réalisés :</h3>
      <ul>
        <li>1. Trouver le mot le plus long</li>
        <li>2. Compter les occurrences</li>
        <li>3. Calculer les notes avec bonus</li>
        <li>4. Gestion de tableau avec IDs</li>
      </ul>
      
      <p><strong>Ouvrez la console (F12 → Console) pour voir les résultats</strong></p>
    </div>
  )
}

export default App