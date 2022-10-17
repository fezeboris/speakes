/** @format */
import React, { useState } from 'react'
import SpeakerList from './SpeakerList'
import Header from './Header'
import Footer from './Footer'

function App () {
  const [term, setTerm] = useState('Informatique')
  // function OnchangeInput(event){
  // console.log(event.target.value)
  // }
  return (
    <div>
      <Header /> value=
      {term}
      <div style={{marginTop: '15px', marginBottom: '15px'}} class='ui input'>
        <input type='text' placeholder='Search...' onChange={event => setTerm(event.target.value)} />
      </div>
      <SpeakerList />
      <Footer />
    </div>
  )
}

export default App

// import React,{useState}   from "react"
// const App=()=> {
//     let [ counter, setCounter]= useState(0)
//     return ( 
//         <div>
//           < button onClick={()=>setCounter(counter+1) }> Incrementer 1</button>
//           {counter}
//           < button onClick={()=>setCounter(counter-1) }> décrementer 1</button>
//           {counter}
//         </div>

//     )
// }
//  export default App

// import React, {useState} from "react"
// import {FaStar} from "react-icons/fa"
// //creation dun tableau vide de taille n
//  const createArray= length=> [...Array( length)]

//  const Star =({selected = false, onSelect})=>(
//   //letoile a la couleur rouge ou grise si elle es selectionnée
//   <FaStar color={ selected ? "red":"grey"} onClick= {onSelect}/>// oclick permet de rendre les etoiles cliquable
//  )
// // creer le tableau avec les 5 etoille et map affiche la liste des etoiles
//  export default function StarRating({totalStars = 5}) {
//   const [selectedStars, setSelectedStars]= useState(0)
//   return (
//     <>

//     {createArray(totalStars).map((n,i) => (//Lutilitaire prend le nombre d'étoils puis affiche
//     <Star
//      key={i}// on identifie chaque etoile par une clé
//       selected={selectedStars > i} 
//       onSelect={() =>setSelectedStars(i+1)}// au fur et amesure qu'on click sur une etoile la couleur devient rouge
//       />
//     )) }
//  <p>
//   { selectedStars} of {totalStars} stars 
//  </p>
//  </>
//  )
// }
