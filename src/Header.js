import React from "react"

function Header(){
    return(
      <div className ="header">
        <div className = "navbar">
            Dynamic Forms
        </div>
        <div className ="poster">
            <img src = {require('./header1.jpg')} alt = "cover" />
        </div>
      </div>
    )
  }
export default Header