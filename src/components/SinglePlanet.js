import React from 'react';
import GalaxyWorld from '../Images/Mercury.mp4'
import {
    Link
  } from "react-router-dom";

const SinglePlanet = (props) => {
  return (
    <div>
    <div style={{backgroundColor:'#252A36',width:'100%',height:'auto'}} >
      
    <video
  autoPlay
  src={props.video}
  loop
  muted
  style={{ width: "100%", height: '70vh', objectFit: "cover" }}
/>

    <div className='container' >
    
        <h2 style={{color:'white',display:'flex',justifyContent:'center',alignItems:'center'}}> {props.title} Histroy</h2>
        <p className='text-white ' style={{textAlign:'justify'}}>{props.para1}</p>

        <p className='text-white ' style={{textAlign:'justify'}}>{props.para2}</p>
     
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
            <li id='PlantesBullets' ><p class="lead"  style={{textAlign:'justify'}} id='Para'><span>{props.Orbital}</span></p></li>
           
        </ol>
        
      
    </div>
</div>
<div class="col-md-5 mx-auto">
<img src= {`${props.OrbitalImag}`} alt='Planet' style={{ width: '100%', height: '350px',borderRadius:'15px' }} />
</div>
</div>

{/** 2 */}

<div class="row featurette my-5">
  <div class="col-md-7 order-md-2" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
  <div class="col-lg-6" id='Box'>
        <h2 class="fw-bold "  id='MainTitle'><span >Distance from the Sun:</span></h2>
        <ol>
            <li id='PlantesBullets' ><p class="lead"  style={{textAlign:'justify'}} id='Para'><span> {props.Distance}</span></p></li>
            
        </ol>
      
    </div>
  </div>
  <div class="col-md-5 order-md-1">
  <img src={`${props.DistanceImag}`} alt='Planet' style={{ width: '100%', height: '350px',borderRadius:'15px' }} />
  </div>
</div>

        {/** 3 */}

        <div class="row featurette my-5">
             <div class="col-md-7 mx-auto" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
            <div class="col-lg-6" id='Box'>
        <h2 class="fw-bold "  id='MainTitle'><span >Surface Characteristics:</span></h2>
        <ol>
            <li id='PlantesBullets' ><p class="lead"  style={{textAlign:'justify'}} id='Para'><span> {props.Surface} </span></p></li>
           
        </ol>
        
      
    </div>
</div>
<div class="col-md-5 mx-auto">
<img src={`${props.SurfaceImag}`} alt='Planet' style={{ width: '100%', height: '350px',borderRadius:'15px' }} />
</div>
</div>

{/** 4 */}

<div class="row featurette my-5">
  <div class="col-md-7 order-md-2" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
  <div class="col-lg-6" id='Box'>
        <h2 class="fw-bold "  id='MainTitle'><span >Atmosphere:</span></h2>
        <ol>
            <li id='PlantesBullets' ><p class="lead"  style={{textAlign:'justify'}} id='Para'><span> {props.Atmosphere} </span></p></li>
            
        </ol>
      
    </div>
  </div>
  <div class="col-md-5 order-md-1">
  <img src={`${props.AtmosphereImag}`}  alt='Planet' style={{ width: '100%', height: '350px',borderRadius:'15px' }} />
  </div>
</div>

     {/** 5 */}

     <div class="row featurette my-5">
             <div class="col-md-7 mx-auto" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
            <div class="col-lg-6" id='Box'>
        <h2 class="fw-bold "  id='MainTitle'><span >Temperature Extremes:</span></h2>
        <ol>
            <li id='PlantesBullets' ><p class="lead"  style={{textAlign:'justify'}} id='Para'><span> {props.Temperature} </span></p></li>
           
        </ol>
        
      
    </div>
</div>
<div class="col-md-5 mx-auto">
<img src={`${props.TemperatureImag}`} alt='Planet' style={{ width: '100%', height: '350px',borderRadius:'15px' }} />
</div>
</div>

{/** 5 */}

<div class="row featurette ">
  <div class="col-md-7 order-md-2" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
  <div class="col-lg-6" id='Box'>
        <h2 class="fw-bold "  id='MainTitle'><span >No Moons:</span></h2>
        <ol>
            <li id='PlantesBullets' ><p class="lead"  style={{textAlign:'justify'}} id='Para'><span> {props.Moons}</span></p></li>
            
        </ol>
      
    </div>
  </div>
  <div class="col-md-5 order-md-1">
  <img src={`${props.MoonsImag}`} alt='Planet' style={{ width: '100%', height: '350px',borderRadius:'15px' }} />
  </div>
</div>

    </div>
    </div>
</div>
  )
}

export default SinglePlanet
