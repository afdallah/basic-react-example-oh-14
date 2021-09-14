import { useState } from 'react'

function AbsenFunction () {
  // Define state
  const [siswa, setSiswa] = useState([])

  const handleChange = e => {
    console.log(e.target.value)
  }

  return (
    <div>
      <form action=''>
        <input
          type='text'
          name=''
          id=''
          placeholder='Isi nama'
          onChange={handleChange}
        />
        <input type='submit' value='Absen' />
      </form>
    </div>
  )
}

export default AbsenFunction
