import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import SingleSpeaker from '../SingleSpeaker'

export default function SpeakerInfo () {
  const location = useLocation()
  const {speakerId} = location.state
  const [data2, setData] = useState([])
  const [isError, setIsError]= useState(false)
  const [isLoading, setIsLoading]= useState(false)

   const fetchData = async ()=>{
   try{
    const response = await fetch(`https://server-speakers.herokuapp.com/speakers/${speakerId}`)
    const data = await response.json()

    console.log(data);
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
    <>
      <SingleSpeaker {...data2}/>
    </>
  )
}
