import React, { Component } from 'react'
import Apple from '../images/apple.png'

class Footer extends Component {
  render () {
    return <footer>
      {/* <img src={Apple} alt='an apple' /> */}
      <div className='container'>
        <div className='copy'>&copy; 2017 -</div>
        <div className='banana'>
          <div className='ban'>BAN</div>
          <div className='ana'>ANA</div>
        </div>
        <div className='mainA'>A</div>
        <div className='apple'>
          <div className='a'>A</div>
          <div className='pple'>PPLE</div>
        </div>
        <div className='designs'>designs</div>
      </div>
      <span className='shadow' />
    </footer>
  }
}

export default Footer
