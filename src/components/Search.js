import React from 'react';
import "./Search.css";

const Search = () => {
  return (
     <>
       <div className='search'>
          <div className='search-items'>
              
          <span class="material-symbols-outlined srch">
            search
          </span>

           <input type="text" />

            <span class="material-symbols-sharp right-icon">
                mic
            </span>
  
            <span class="material-symbols-rounded right-icon">
               photo_camera
             </span>

          </div>

             <div className='search-btn'>
                <button type="submit">Google Search</button>
                <button type="submit">I'm Feeling Lucky</button>
             </div>
          
           <div className='lang'>
             <p>Google offered in: &nbsp;
              <a href="#">हिन्दी &nbsp;&nbsp;</a> 
              <a href="#">বাংলা &nbsp;&nbsp;</a>
              <a href="#">తెలుగు &nbsp;&nbsp;</a>
              <a href="#">தமிழ் &nbsp;&nbsp;</a>
              <a href="#">ગુજરાતી &nbsp;&nbsp;</a>
              <a href="#">ಕನ್ನಡ &nbsp;&nbsp;</a>
              <a href="#">മലയാളം &nbsp;&nbsp;</a>
              <a href="#">ਪੰਜਾਬੀ </a>          
              </p>
           </div>

       </div>
     </>
  )
}

export default Search;
