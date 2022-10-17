import React, { useEffect, useState } from 'react'
import SpeakerUI from './SpeakerUI'
// import { data } from './data'

function SpeakerList () {
  const [data, setData] = useState([])
  const [isError, setIsError]= useState(false)
  const [isLoading, setIsLoading]= useState(false)

  const fetchData = async ()=>{
   try{
    const response = await fetch('https://server-speakers.herokuapp.com/speakers')
    const data = await response.json()
  
    setData(data)
    setIsLoading(false)
   }catch(error){
    setIsError(true)
    setIsLoading(false)
   }
  }

  useEffect(() => {
    setIsLoading(true)
   fetchData()
  }, [])

  if(isLoading) return <div style={{ marginTop: '10rem', textAlign: 'center', fontWeight:'bold', color:'green', fontSize:'5rem' }}>Loading....</div>

  if(isError)
  return(
    <div style={{ color:'red' }} className='ui text'>
      Nous avons rencontre une erreur
    </div>
  )

  return (
    <div className='ui grid container'>
      {data.map((speaker, index) => {
      
         return (
         
           <div className='four wide column ' key={index}>
             <SpeakerUI {...speaker} key={index} />
           </div>
         )
       })}
    </div>
  )
}

export default SpeakerList
