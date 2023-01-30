import React from 'react'
import "./Home.css"
import googleImg from "../asset/google.png"
import Search from './Search'

function Home() {
  return (
     <>
       <div className='home'>
           <div className='home-header'>
                      <div className='nav'>

                        <p>Gmail</p>
                        <p>Images</p>

                        <span class="material-symbols-outlined app">
                         apps
                        </span> 

                        <span class="material-symbols-rounded avtar">
                           account_circle
                       </span>  
                      </div>
                                                      
           </div>

           <div className='home-body'>
                      <img src={googleImg} width="400px" alt='google'></img>
                      <div className='input'>
                          <Search />
                      </div>
           </div>
       </div>
     </>
  )
}

export default Home;
