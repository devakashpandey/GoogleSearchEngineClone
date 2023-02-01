import React from 'react'
import "./SearchPage.css"
import googleImg from "../asset/google.png"
import Search from './Search'
import { Link } from 'react-router-dom'
import Search2 from './Search2'

const SearchPage = () => {

  // const[data] = useStateValue()


  return (
     <>
              <div className='search-page'>
                      <div className='search-header'>

                       <Link className='img' to="/"> 
                       <img className="search-img" src={googleImg} width="400px" alt='google'></img> 
                       </Link>
                      
                      <div className='search-header-body'>
                          <Search2 />

                        <div className='search-options'>
                              <div className='left-opt'>

                                  <div className='srch-opt'>
                                  <span className="material-symbols-outlined srch-icon">
                                     search
                                  </span>
                                   <Link to="/all">All</Link>
                               </div>

                               <div className='srch-opt'>
                                 <span className="material-symbols-rounded srch-icon">
                                     feed
                                  </span>
                                 <Link to="/all">News</Link>
                               </div>

                               <div className='srch-opt'>
                                 <span className="material-symbols-rounded srch-icon">
                                     image
                                 </span>
                                 <Link to="/all">Images</Link>
                               </div>

                               <div className='srch-opt'>
                                 <span className="material-symbols-rounded srch-icon">
                                     sell
                                 </span>
                                 <Link to="/all">Shopping</Link>
                               </div>

                               <div className='srch-opt'>
                                 <span className="material-symbols-rounded srch-icon">
                                       location_on
                                 </span>
                                 <Link to="/all">Maps</Link>
                               </div>

                               <div className='srch-opt'>
                                 <span className="material-symbols-rounded srch-icon">
                                     more_vert
                                 </span>
                                 <Link to="/all">More</Link>
                               </div>

                               </div>

                               <div className='right-opt'>

                                 <div className='srch-opt'>
                                    <Link to="/all">Tools</Link>
                                 </div>
                               
                               </div>

                         </div>

                        </div>

                      </div>

                      <hr/>

                      <div className='search-results'>
                          <p className='result-count'>About 3,79,00,00,000 results (0.64 seconds) </p>

                          <div className='search-result'>

                            <a href="#" className='result_link'>
                              <img className='result-img' src={googleImg} alt="pic" />
                              <p>Link.com</p>
                            </a>

                          <a className='result-title' href="">
                                            <h3>Title</h3>
                          </a>

                          <p className='result-description'>Description</p>

                          </div>
                      </div>



             </div>
             
     </>
  )
}

export default SearchPage;
