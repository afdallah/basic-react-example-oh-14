import React from 'react'

class Absen extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      siswa: []
    }
  }

  // Method handlechange
  handleChange (e) {
    console.log(e.target.value)
  }

  render () {
    // Jsx di sini
    return (
      <div>
        <form action=''>
          <input
            type='text'
            name=''
            id=''
            placeholder='Isi nama'
            onChange={this.handleChange}
          />
          <input type='submit' value='Absen' />
        </form>
      </div>
    )
  }
}

export default Absen
