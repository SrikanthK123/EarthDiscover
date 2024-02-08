import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import React,{useState} from 'react'
import GalaxyWorld from '../Images/GalaxyWorldUni.mp4'

import {
    Link
  } from "react-router-dom";
  import Venus from '../Images/Venus2.gif'
  import Saturn from '../Images/Saturn2.gif'
  import Uranus from '../Images/Uranus2.gif'
  import SolarSystemGalaxy from '../Images/SolarSystamGalaxy.mp4'



const Galaxy = () => {
  const [containerColor, setContainerColor] = useState('rgba(22, 20, 21, 0.86)');

  const BlueBG =()=>{
      setContainerColor('rgba(65, 70, 160, 0.86)')
      
  }
  const PinkBG =()=>{
    setContainerColor('rgba(131, 129, 133, 0.86)')
}
const OrangeBG =()=>{
  setContainerColor('rgba(69, 158, 129, 0.86)')
}
const NormalBG =()=>{
  setContainerColor('rgba(22, 20, 21, 0.86)')
}
  const Planet = [
    {
      imageUrl: 'https://th.bing.com/th/id/R.f32e5174038f065edd9138249c54053c?rik=%2fMZoPX%2b%2fBQr38w&pid=ImgRaw&r=0',
      title: 'Mercury',
      backgroundColor : 'rgba(55, 122, 208, 0.2)',
      description: 'Mercury is the smallest and innermost planet in our solar system. It is a rocky, terrestrial planet with a thin atmosphere, primarily composed of oxygen, sodium, and hydrogen. Mercury has extreme temperature variations, with scorching daytime temperatures reaching up to 430 degrees Celsius (800 degrees Fahrenheit) and frigid nighttime temperatures dropping to around -180 degrees Celsius (-290 degrees Fahrenheit).',
    },
    {
      imageUrl: `${Venus}`,
      title: 'Venus',
      backgroundColor : 'rgba(255, 160, 122, 0.2)',
      description: "Venus is often referred to as Earth's 'sister planet' due to its similar size and composition, but it has a thick and toxic atmosphere, trapping heat and making it the hottest planet in our solar system.",
    },
    {
      imageUrl: "https://media.giphy.com/media/FrOlhISiIhAFa/giphy-downsized-large.gif",
      title: 'Earth',
      backgroundColor : 'rgba(0, 128, 0, 0.2)',
      description: "Our home planet, Earth, is the only known celestial body to support life. It has a diverse environment with oceans, continents, and a life-sustaining atmosphere.",
    },
    {
      imageUrl: "https://www.icegif.com/wp-content/uploads/2022/11/icegif-903.gif",
      title: 'Mars',
      backgroundColor : 'rgba(255, 69, 0, 0.2)',
      description: " Known as the 'Red Planet' Mars has a rusty appearance due to iron oxide on its surface. It has been a target for exploration, with missions searching for signs of past or present life.",
    },
    {
      imageUrl: "https://bestanimations.com/media/planets/100866230jupiter-planet-animation-10.gif",
      title: 'Jupiter',
      backgroundColor : 'rgba(255, 215, 0, 0.2)',
      description: " Jupiter is the largest planet, known for its immense size and powerful magnetic field. It has a dynamic atmosphere with prominent cloud bands and the iconic Great Red Spot.",
    },
    {
      imageUrl: `${Saturn}`,
      title: 'Saturn',
      backgroundColor : 'rgba(210, 180, 140, 0.2)',
      description: "Saturn is famous for its stunning ring system, composed of ice and rock particles. It is a gas giant with a complex and beautiful structure.",
    },
    {
      imageUrl: `${Uranus}`,
      title: 'Uranus',
      backgroundColor : 'rgba(173, 216, 230, 0.2)',
      description: "Uranus is an ice giant with a unique feature—its axis of rotation is tilted almost parallel to its orbit, resulting in extreme seasons.",
    },
    {
      imageUrl: "https://images.squarespace-cdn.com/content/v1/56a1a14b05caa7ee9f26f47d/1462450014420-7CF9LSAC2OBE37GVXQW1/image-asset.gif",
      title: 'Neptune',
      backgroundColor : 'rgba(127, 174, 230, 0.2)',
      description: "Neptune is the farthest planet from the Sun and is known for its vibrant blue color. It has powerful winds and a dynamic atmosphere.",
    },
  ]
    
  return (
    <div style={{backgroundColor:'#252A36',width:'100%',height:'100vh'}}>
        
      <Parallax pages={5} id='ParallaxMain'>

        {/* page-1 */}
      <ParallaxLayer offset={0} style={{height:'100vh'}}>
        <video
          autoPlay
          src= {GalaxyWorld}
          loop
          muted
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        
        </ParallaxLayer>
        
        {/** Page-2 */}


        <ParallaxLayer sticky={{start:0.5,end:0.8}} style={{height:'20vh'}}>
            <h3 className='text-white fw-bold mx-4 my-5' style={{display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center'}}>Discover the Cosmic Beauty of Galaxy Space.</h3>
        </ParallaxLayer>

        {/** Page - 3 */}

       
        <ParallaxLayer sticky={{start:0.1 , end: 0.5}} style={{height:'15vh'}}>
        <img className="Rock" src="https://media.giphy.com/media/oEyl6yCC5D9kI/giphy.gif"  alt="Rock" />
        </ParallaxLayer>

    {/** Page-4 */}

    <ParallaxLayer offset={1} style={{height:'55vh'}}>
            <div className='container SolarSystem d-flex flex-wrap' id='SolarSystem' >
      <div class="nav-scroller py-1 mb-3 ">
    <nav class="nav  justify-content-between" style={{gap:'40px'}}>
        
        <div class="nav-item nav-link link-body-emphasis text-white " id='Planet'  ><img  src='https://th.bing.com/th/id/R.f32e5174038f065edd9138249c54053c?rik=%2fMZoPX%2b%2fBQr38w&pid=ImgRaw&r=0' alt='earth' style={{ width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }} />Mercury</div>
   <div class="nav-item nav-link link-body-emphasis text-white " ><img src={Venus} alt='earth' style={{ width: '55px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }} />Venus</div>
      <div class="nav-item nav-link link-body-emphasis text-white " ><img src='https://media.giphy.com/media/FrOlhISiIhAFa/giphy-downsized-large.gif' alt='earth' style={{ width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }} />Earth</div>
      <div class="nav-item nav-link link-body-emphasis text-white " ><img src='https://www.icegif.com/wp-content/uploads/2022/11/icegif-903.gif' alt='earth' style={{ width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }} />Mars</div>
      <div class="nav-item nav-link link-body-emphasis text-white " ><img src='https://bestanimations.com/media/planets/100866230jupiter-planet-animation-10.gif' alt='earth' style={{ width: '60px', height: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }} />Jupiter</div>
      <div class="nav-item nav-link link-body-emphasis text-white " ><img src={Saturn} alt='earth' style={{ width: '90px', height: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }} />Saturn</div>
      <div class="nav-item nav-link link-body-emphasis text-white " ><img src={Uranus} alt='earth' style={{ width: '80px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }} />Uranus</div>
      <div class="nav-item nav-link link-body-emphasis text-white " ><img src='https://images.squarespace-cdn.com/content/v1/56a1a14b05caa7ee9f26f47d/1462450014420-7CF9LSAC2OBE37GVXQW1/image-asset.gif' alt='earth' style={{ width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }} />Neptune</div>   
    </nav>
  </div>
            </div>
    </ParallaxLayer>

    {/** Page - 5 */}

    <ParallaxLayer offset={2} factor={4}  >
  <div id='ParallaxLayer2'>
    <div style={{ paddingRight: '15px' }}>
      {Planet.map((planet, index) => (
        <div key={index} className="container col-xxl-8 px-4 py-1" style={{ marginBottom: '80px' }}>
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5" id='PlanetSingle'>
            <div className="col-10 col-sm-8 col-lg-6" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img
                src={planet.imageUrl}
                className="d-block mx-lg-auto img-fluid"
                alt="Bootstrap Themes"
                loading="lazy"
                style={{ borderRadius: '15px', width: '150px', height: '150px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
              />
            </div>
            <div className="col-lg-6">
              <h2 className="fw-bold text-white" id='MainTitle'><span>{planet.title}</span></h2>
              <p className="lead text-white" style={{ textAlign: 'justify' }} id='Para'><span>{planet.description.slice(0, 150)}.....</span></p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <Link to={`/${planet.title}`}><button type="button" id='ExplorePlanetBtn' className="btn-lg px-4 me-md-2">Explore {planet.title}</button></Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</ParallaxLayer>


      <ParallaxLayer offset={3} id='ParallaxLayer3' >
        
        <div className='container' style={{background:containerColor,padding:'20px'}}>
          
          <h2 className='fw-bolder' style={{display:'flex',justifyContent:'center',alignItems:'center',margin:'20px',color:'cyan'}}>Histroy </h2><ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
       
        <li><a href="#" class="nav-link px-2 link-secondary"> <button onClick={BlueBG} style={{width:'25px',height:'25px',borderRadius:'50%',marginLeft:'20px',backgroundColor:'blue',border:'white'}}></button></a></li>
        <li><a href="#" class="nav-link px-2"> <button onClick={PinkBG} style={{width:'25px',height:'25px',borderRadius:'50%',marginLeft:'20px',backgroundColor:'grey',border:'white'}}></button></a></li>
        <li><a href="#" class="nav-link px-2"> <button onClick={OrangeBG} style={{width:'25px',height:'25px',borderRadius:'50%',marginLeft:'20px',backgroundColor:'rgba(69, 158, 129, 0.86)',border:'white'}}></button></a></li>
        <li><a href="#" class="nav-link px-2"> <button onClick={NormalBG} style={{width:'25px',height:'25px',borderRadius:'50%',marginLeft:'20px',backgroundColor:'rgba(22, 20, 21, 0.86)',border:'white',color:'white'}}>N</button></a></li>

      </ul>
      <div className='container'style={{display:'flex',justifyContent:'center',alignItems:'center'}} >
        <div class="col-md-5 my-3 text-center">
            <iframe src='https://momento360.com/e/u/72370455091748d9990f1e4319030069?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true' style={{ backgroundPosition: 'center', backgroundSize: '100%', borderRadius: '50%', width: '100%', height: '400px', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset', border: '2px solid white' }}></iframe>
          </div></div>
          <p className='lead text-white ' style={{textAlign:'justify'}}>The formation and evolution of galaxies is a captivating narrative that unfolds over cosmic timescales. Here's a narrative description of how galaxies are believed to come into existence:</p>
          <p className='lead text-white ' style={{textAlign:'justify'}}>In the primordial aftermath of the Big Bang, a dynamic process known as cosmic inflation set the stage for the formation of the universe's large-scale structures. Dark matter, a mysterious and invisible substance, began to clump together under the force of gravity, creating vast halos that would serve as the gravitational scaffolding for future galaxies.</p>
          <p className='lead text-white ' style={{textAlign:'justify'}}>As cosmic gas, primarily composed of hydrogen and helium, gravitated toward these dark matter halos, it underwent a transformative journey. The gas accumulated within these halos, gradually heating up and collapsing under the relentless pull of gravity. This collapse led to the creation of protogalactic disks—flattened, rotating structures that would eventually become the birthplaces of galaxies.</p>
          <p className='lead text-white ' style={{textAlign:'justify'}}>Within these protogalactic disks, regions of higher density experienced further collapse, giving rise to the first generation of stars. These early stars, often massive and short-lived, ignited and released energy, enriching the surrounding gas with heavier elements through processes like nucleosynthesis.</p>
          <p className='lead text-white ' style={{textAlign:'justify'}}>Over the eons, galaxies engaged in a cosmic dance of mergers and interactions. Gravitational forces brought galaxies together, leading to mergers that could drastically alter their structures and characteristics. These interactions played a crucial role in shaping the diverse array of galaxies observed in the universe.</p>
          <p className='lead text-white ' style={{textAlign:'justify'}}>Galaxies continued to evolve through ongoing processes such as star formation, supernova explosions, and the activity of supermassive black holes at their centers. Galactic winds and outflows, driven by various astrophysical mechanisms, could expel gas from galaxies, influencing their ability to form new stars.</p>
          <p className='lead text-white ' style={{textAlign:'justify'}}>Edwin Hubble's pioneering work classified galaxies into distinct types, forming the basis for the Hubble sequence. This classification includes spiral galaxies with majestic arms, elliptical galaxies with smooth and featureless profiles, and irregular galaxies with chaotic shapes.</p>
          <p className='lead text-white ' style={{textAlign:'justify'}}>Observational evidence from powerful telescopes like the Hubble Space Telescope and extensive surveys has provided crucial insights into the distribution of galaxies, their ages, and their compositions. The study of galaxy formation remains an active and evolving field, with ongoing research shedding light on the intricacies of this cosmic narrative. The immense variety of galaxies in the universe stands as a testament to the complex interplay of cosmic forces that govern their existence.</p>
      
        </div>
      </ParallaxLayer>
      

      </Parallax>
      <div className='BGChangeTesting'>
       
   
     <div>
      
        <img src='https://images.unsplash.com/photo-1519068737630-e5db30e12e42?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' style={{width:'100%',height:'100vh', background: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))'}} />
    
    </div>

        
    </div>
    </div>
  )
}

export default Galaxy
