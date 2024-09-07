import React from 'react'

function Footer() {
  return (
    <footer>
      <div className="banner">
        <div className="title">
          <h1>KING's</h1>
          <p>Events and Weddings</p>
        </div>
        <div className="tag">
          <label>News Letter</label>
          <div>
            <input type="text" placeholder="E-mail"/>
            <button>Subscribe</button>
          </div>
          <p> sign up with your email adress to recive news and updtes!</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer