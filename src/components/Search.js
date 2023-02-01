import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { action } from '../reducer';
import { useStateValue } from '../StateProvider';
import "./Search.css";

const Search = () => {

  let [input , setInput] = useState()
  let navigate = useNavigate()
  // const [{}, dispatch] = useStateValue()

  let googleSearch = (event) =>{
      event.preventDefault()

      // dispatch({
      //   type: action.SET_SEARCH_TERM,
      //   TERM: input
      // })

      navigate("/search")
  }

  return (
     <>
       <div className='search'>
          <div className='search-items'>
              
          <span className="material-symbols-outlined srch">
            search
          </span>

           <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />

            <span className="material-symbols-sharp right-icon">
                mic
            </span>
            
              <span className="material-symbols-rounded right-icon">
               photo_camera
             </span>            

          </div>

          <div className='search-btn'>
                <button onClick={googleSearch} type="submit">Google Search</button>
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
