import React ,{useEffect} from 'react';
import GalaxyWorld from '../Images/Mercury.mp4'
import {
    Link
  } from "react-router-dom";

const Planets = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 

  return (
    <div>
        <div style={{backgroundColor:'#252A36',width:'100%',height:'auto'}} >
          
     <video
          autoPlay
          src= {GalaxyWorld}
          loop
          muted
          style={{ width: "100%", height: "50vh", objectFit: "cover" }}
        />
        <div className='container'>
            <h2 style={{color:'white',display:'flex',justifyContent:'center',alignItems:'center'}}>Mercury Histroy</h2>
            <p className='text-white ' style={{textAlign:'justify'}}>
Mercury, known to humanity since ancient times, has captivated observers with its visibility to the naked eye. The Romans, drawing inspiration from their god of commerce and travel, named the planet Mercury. Despite its prominence, observing Mercury proves challenging due to its proximity to the Sun, causing it to appear as either an "evening star" or a "morning star" at different times throughout the year.</p>

        <p className='text-white ' style={{textAlign:'justify'}}>
        In the mid-1970s, the Mariner 10 spacecraft revolutionized our understanding of Mercury by providing the first close-up images of the planet's cratered surface. Fast forward to 2011, and the MESSENGER spacecraft became the first to orbit Mercury, embarking on an extensive mission to map its terrain and study its geology.
            </p>
         { /*   <p className='text-white ' style={{textAlign:'justify'}}>
            Mercury, with its lack of a substantial atmosphere, undergoes extreme temperature variations. Its surface experiences scorching daytime temperatures and frigid nights due to its inability to retain heat. This unique characteristic sets Mercury apart in the solar system.
            </p>
            <p className='text-white ' style={{textAlign:'justify'}}>
            Ongoing exploration continues to unravel the mysteries of this enigmatic planet. Launched in 2018, the BepiColombo mission, a collaborative effort between the European Space Agency and the Japan Aerospace Exploration Agency, aims to delve deeper into Mercury's composition and geophysics. As technology advances, our knowledge of Mercury's intriguing features and history expands, offering valuable insights into the dynamics of our solar system.
  </p>*/}

            {/** 1 */}

            <div class="row featurette my-5">
                 <div class="col-md-7 mx-auto" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                <div class="col-lg-6" id='Box'>
            <h2 class="fw-bold "  id='MainTitle'><span >Orbital Period :</span></h2>
            <ol>
                <li id='PlantesBullets' ><p class="lead"  style={{textAlign:'justify'}} id='Para'><span> Mercury has an orbital period of about 88 Earth days, making it the planet with the shortest year.</span></p></li>
               
            </ol>
            
          
        </div>
  </div>
  <div class="col-md-5 mx-auto">
    <img src='https://images.unsplash.com/photo-1640270772837-48fda64883a4?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Planet' style={{ width: '100%', height: '350px',borderRadius:'15px' }} />
  </div>
</div>

{/** 2 */}

<div class="row featurette my-5">
      <div class="col-md-7 order-md-2" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
      <div class="col-lg-6" id='Box'>
            <h2 class="fw-bold "  id='MainTitle'><span >Distance from the Sun:</span></h2>
            <ol>
                <li id='PlantesBullets' ><p class="lead"  style={{textAlign:'justify'}} id='Para'><span> Mercury is the closest planet to the Sun, with an average distance of approximately 57.9 million kilometers (about 36 million miles).</span></p></li>
                
            </ol>
          
        </div>
      </div>
      <div class="col-md-5 order-md-1">
      <img src='https://wallpaperaccess.com/full/2920218.jpg' alt='Planet' style={{ width: '100%', height: '350px',borderRadius:'15px' }} />
      </div>
    </div>

            {/** 3 */}

            <div class="row featurette my-5">
                 <div class="col-md-7 mx-auto" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                <div class="col-lg-6" id='Box'>
            <h2 class="fw-bold "  id='MainTitle'><span >Surface Characteristics:</span></h2>
            <ol>
                <li id='PlantesBullets' ><p class="lead"  style={{textAlign:'justify'}} id='Para'><span> Mercury's surface is heavily cratered, resembling the Moon's surface. Impact craters, created by collisions with asteroids and comets, cover much of the planet.</span></p></li>
               
            </ol>
            
          
        </div>
  </div>
  <div class="col-md-5 mx-auto">
    <img src='https://img.theepochtimes.com/assets/uploads/2016/05/10/Mercury--1200x675.jpg' alt='Planet' style={{ width: '100%', height: '350px',borderRadius:'15px' }} />
  </div>
</div>

{/** 4 */}

<div class="row featurette my-5">
      <div class="col-md-7 order-md-2" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
      <div class="col-lg-6" id='Box'>
            <h2 class="fw-bold "  id='MainTitle'><span >Atmosphere:</span></h2>
            <ol>
                <li id='PlantesBullets' ><p class="lead"  style={{textAlign:'justify'}} id='Para'><span> Mercury has a very thin atmosphere, known as an exosphere, composed mainly of oxygen, sodium, hydrogen, and helium. However, this atmosphere is so thin that it cannot support human life.</span></p></li>
                
            </ol>
          
        </div>
      </div>
      <div class="col-md-5 order-md-1">
      <img src='https://curiosmos.com/wp-content/uploads/2021/12/7eaef8b44ede652a56eafde17393670f.jpg' alt='Planet' style={{ width: '100%', height: '350px',borderRadius:'15px' }} />
      </div>
    </div>

         {/** 5 */}

         <div class="row featurette my-5">
                 <div class="col-md-7 mx-auto" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                <div class="col-lg-6" id='Box'>
            <h2 class="fw-bold "  id='MainTitle'><span >Temperature Extremes:</span></h2>
            <ol>
                <li id='PlantesBullets' ><p class="lead"  style={{textAlign:'justify'}} id='Para'><span> Mercury experiences extreme temperature variations due to its lack of a substantial atmosphere to retain heat. Daytime temperatures on the planet's surface can reach up to 430 degrees Celsius (800 degrees Fahrenheit).</span></p></li>
               
            </ol>
            
          
        </div>
  </div>
  <div class="col-md-5 mx-auto">
    <img src='https://www.universetoday.com/wp-content/uploads/2017/03/mercury-ice-water-deposits.jpg' alt='Planet' style={{ width: '100%', height: '350px',borderRadius:'15px' }} />
  </div>
</div>

{/** 5 */}

<div class="row featurette my-5">
      <div class="col-md-7 order-md-2" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
      <div class="col-lg-6" id='Box'>
            <h2 class="fw-bold "  id='MainTitle'><span >No Moons::</span></h2>
            <ol>
                <li id='PlantesBullets' ><p class="lead"  style={{textAlign:'justify'}} id='Para'><span> Mercury doesn't have a moon because its proximity to the Sun and weak gravity make it challenging for a moon to form and remain in a stable orbit. Additionally, gravitational forces from the Sun could disrupt any potential moons around Mercury.</span></p></li>
                
            </ol>
          
        </div>
      </div>
      <div class="col-md-5 order-md-1">
      <img src='https://i.ytimg.com/vi/oLBrtKrq5kQ/maxresdefault.jpg' alt='Planet' style={{ width: '100%', height: '350px',borderRadius:'15px' }} />
      </div>
    </div>

        </div>
        </div>
    </div>
  );
};

export default Planets;
