import React from 'react'

function WeatherInput({ value, onChange, onClick }) {
  return (
    <div style={{ marginTop: '3rem', display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'space-between', height: '6rem', width: 'auto' }}>
       
      <input  type="text" value={value} onChange={onChange}  style={{ height:'2.5rem', borderRadius: '1rem', width: '20rem', fontWeight: '700', textTransform:'capitalize', border: '2px solid gray', padding: '0 1rem'}}/>
      <button style={{ textTransform:'capitalize', height: '2rem', color: 'white', backgroundColor: 'black', borderRadius: '.6rem' }} onClick={onClick}>get weather</button>
    </div>
  )
}

export default WeatherInput