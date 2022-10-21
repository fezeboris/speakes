import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import Header from './Header'
import Footer from './Footer'
import ErrorPage from './components/ErrorPage'
import Home from './components/Home'
import Message from './components/Message'
import Donate from './components/Donate'
// import SpeakerDetail from './components/SpeakerDetail'
import SpeakerInfo from './components/SpeakerInfo'
import { FilterContext } from './context/FilterContext'

export default function App () {
  return (

    <div>
      <Header />
      <FilterContext.Provider value={{ checkbox: true, tab: [1, 2, 3, 4], fn: function (a, b) {return a + b} }}>
        <Routes>
          <Route path='*' element={<ErrorPage/>} />
          <Route path='/' element={<Home/>} />
          <Route path='/message' element={<Message/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/donate' element={<Donate/>} />
          <Route path='/speakers/:idSpeaker' element={<SpeakerInfo/>} />
        </Routes>
      </FilterContext.Provider>
      <Footer />
    </div>
  )
}

// /** @format */
// import React, { useState } from 'react'
// import SpeakerList from './SpeakerList'
// import Header from './Header'
// import Footer from './Footer'

// function App () {
//   const [term, setTerm] = useState('Informatique')
//   // function OnchangeInput(event){
//   // console.log(event.target.value)
//   // }
//   return (
//     <div>
//       <Header /> value=
//       {term}
//       <div style={{marginTop: '15px', marginBottom: '15px'}} class='ui input'>
//         <input type='text' placeholder='Search...' onChange={event => setTerm(event.target.value)} />
//       </div>
//       <SpeakerList />
//       <Footer />
//     </div>
//   )
// }

// export default App
