import React from 'react'

export default function Filter () {
  return (
    <div className='ui form'>
      <div className='inline fields'>
        <label>
          Samedi et Dimanche?
        </label>
        <div className='field'>
          <div className='ui checkbox'>
            <input
              type='checkbox'
              name='samedi'
              onChange='{handleChangeSaturday}'
              checked='{}' />
            <label>
              Samedi
            </label>
          </div>
        </div>
        <div className='field'>
          <div className='ui checkbox'>
            <input
              onChange='{handleChangeSunday}'
              type='checkbox'
              name='dimanche'
              checked='{}' />
            <label>
              Dimanche
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}
