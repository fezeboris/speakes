import React, { useContext } from 'react'
import SpeakerList from '../SpeakerList'
import { FilterContext } from '../context/FilterContext'
import Field from './Field'
import Filter from './Filter'
export default function Home () {
  const {checkbox} = useContext(FilterContext)
  return (

    <div>
      <Field/>
      <Filter/>
      <SpeakerList/>
    </div>
  )
}
