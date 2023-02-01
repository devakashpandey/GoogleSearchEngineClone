import React from 'react'
import "./Search2.css"

const Search2 = () => {
  return (
     <>
       <div className='search'>
          <div className='search-items2'>
              
           <input className='myinput' type="text" />

            <span className="material-symbols-sharp right-icon">
                mic
            </span>

            <span className="material-symbols-rounded right-icon">
               photo_camera
            </span>

            <span className="material-symbols-outlined right-icon">
            search
          </span>
      
          </div>
      </div>
     </>
  )
}

export default Search2;
