import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart, faShare } from '@fortawesome/free-solid-svg-icons';
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

const TailorDetails = () => {


  return (
     
      <div className="Home-container">
       <div className="search-container">
            <input type="text" className="search-input" placeholder="Search for type of design" />
            <button type="submit" className="search-button"><FontAwesomeIcon icon={faSearch} /></button>
          </div>

          <div className='Home-carousel-container'>
          <div>
          <CCarousel controls>
            <CCarouselItem>
              <CImage className="custom-image" src={'https://coreui.io/react/docs/static/react-83088efde08a5dedde9f67a954cb4b5b.jpg'} alt="slide 1" />
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="custom-image" src={'https://coreui.io/react/docs/static/react-83088efde08a5dedde9f67a954cb4b5b.jpg'} alt="slide 2" />
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="custom-image" src={'https://coreui.io/react/docs/static/react-83088efde08a5dedde9f67a954cb4b5b.jpg'} alt="slide 3" />
            </CCarouselItem>
          </CCarousel>
        </div>
          <div className='card-container'>
            <div><FontAwesomeIcon className="fa-regular fa-heart icon" icon={faHeart} /></div>
            <div><FontAwesomeIcon className="fa-solid fa-share icon" icon={faShare} /></div>
          </div>
       </div>


      
    
     <button className="button1">View More</button>
   
       
          <div className="Home-card-container">
          <div class="card">
                  <img src="https://img.freepik.com/premium-vector/businessman-profile-cartoon_18591-58479.jpg?w=140" alt='img'/>
                  <p>name</p>
                  <p>phone no</p>
                   <p>Address</p>
                        <div >
                          <button class="button1"> Add to WishList</button>
                          <button class="button1"> Book Now</button>
                        </div>
                    </div>
                    <div class="card">
                        <img src="https://img.freepik.com/premium-vector/businessman-profile-cartoon_18591-58479.jpg?w=140" alt='img'/>
                        <p>name</p>
                        <p>phone no</p>
                        <p>Address</p>
                        <div >
                          <button class="button1"> Add to WishList</button>
                          <button class="button1"> Book Now</button>
                        </div>
                    </div>
                    <div class="card">
                        <img src="https://img.freepik.com/premium-vector/businessman-profile-cartoon_18591-58479.jpg?w=140" alt='img'/>
                        <p>name</p>
                        <p>phone no</p>
                        <p>Address</p>
                        <div>
                          <button class="button1"> Add to WishList</button>
                          <button class="button1"> Book Now</button>
                        </div>
                    </div>

          </div>

          <div className="Home-carousel-container-second">
          <CCarousel controls>
        <CCarouselItem>
          <CImage className=" custom-image" src={'https://coreui.io/react/docs/static/react-83088efde08a5dedde9f67a954cb4b5b.jpg'} alt="slide 1" />
        </CCarouselItem>
        <CCarouselItem>
          <CImage className="custom-image" src={'https://coreui.io/react/docs/static/react-83088efde08a5dedde9f67a954cb4b5b.jpg'} alt="slide 2" />
        </CCarouselItem>
        <CCarouselItem>
          <CImage className="custom-image" src={'https://coreui.io/react/docs/static/react-83088efde08a5dedde9f67a954cb4b5b.jpg'} alt="slide 3" />
        </CCarouselItem>
      </CCarousel>
          
          </div>

          
          
          
            <div className="Home-details-container">
              <h1>Ratings, Comments, Details</h1>
              <p>Ratings</p>
              <p>Comments</p>
            </div>







          </div>
        
     
  );
};




export default TailorDetails;
