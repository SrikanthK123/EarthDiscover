import React from 'react';
import { Parallax } from 'react-parallax';

import SkyImg from '../Images/Sky4.jpg'
import Forest from '../Images/Forest.jpg'
import Ocean from '../Images/Ocean5.jpg'
import BirdGif from '../Images/BirdGif.gif'
import LionGif from '../Images/LionGif.gif'
import FishGif from '../Images/Clown-Fish.gif'
const Home = () => {
  return (
    <div className='HomePage'>
       
  <Parallax className=''  bgImage={SkyImg}  bgImageAlt="the sky" strength={800}>
     <div className='Sky col-xxl-8 px-4 py-4'>
        <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between  mb-4">
      <div class="col-md-3 mb-2 mb-md-0">
        <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
         <img src='https://cdn-icons-png.flaticon.com/512/9616/9616892.png'  style={{width:'50px',height:'50px'}} />
        </a>
      </div>

      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a href="#" class="nav-link px-2">Home</a></li>
        <li><a href="#" class="nav-link px-2">Features</a></li>
        <li><a href="#" class="nav-link px-2">Pricing</a></li>
        <li><a href="#" class="nav-link px-2">FAQs</a></li>
        <li><a href="#" class="nav-link px-2">About</a></li>
        
      </ul>
    </header>
   <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3" style={{color:'white',textAlign:'center'}}>From Seed to Sky, Earth's Life Flies High.</h1>
        <p class="lead" style={{color:'white',textAlign:'center'}}>Exploring the rich tapestry of life on Earth, where diverse living beings coexist in a harmonious dance, fostering biodiversity and interconnected ecosystems</p>
   
      </div>
    </div>
  </div></div>
  <div class="container col-xxl-8 px-4 py-5" >
          
          <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3" style={{minHeight:'700px',marginBottom:'20px' }}>
          <div class="col-10 col-sm-8 col-lg-6" >
              <img src='https://www.jeunesetnature.com/gifs/bernaches.gif' id='FlyingBirds1' class="d-block mx-lg-auto img-fluid ImageInParallax" alt="Bootstrap Themes"  width="600" height="00" loading="lazy"/>
            </div>
            <div class="col-lg-6">
              <h3 class="display-6 fw-bold text-body-emphasis lh-1 mb-3" style={{color:'white',textAlign:'center'}}>Fly high, touch the sky: Freedom's dance, birds' delight</h3>
              <p class="lead" style={{color:'black',textAlign:'center'}}>Exploring the rich tapestry of life on Earth, where diverse living beings coexist in a harmonious dance, fostering biodiversity and interconnected ecosystems</p>
              
            </div>
          
        
          </div>
        </div>
       
    </Parallax>
    <div class="container my-5 d-flex justify-content-center">
  <div class="p-5 text-center rounded-3" style={{backgroundColor:'#00719e',boxShadow:'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'}}>
    <h3 class="text-body-emphasis">Wings of Wonder: A Sky Symphony, where Every Flight Tells a Tale</h3>
    <p class="lead d-none d-md-none d-lg-none d-xl-block">
      In the boundless expanse of the sky, flying animals embody the spirit of freedom and transcendence. Birds, with their wings unfurled, navigate the heavens with a grace that mirrors the limitless possibilities of the open sky. Bats, the elusive night aviators, paint the celestial canvas with their intricate flight patterns, symbolizing the beauty found in the unseen. From the delicate flutter of butterflies to the precision of soaring raptors, each airborne creature contributes to a harmonious ballet of life overhead, evoking a sense of wonder and connection to the vastness of the universe.
    </p>
    <div class="d-grid gap-2 d-md-flex justify-content-md-center " id='SkyBtn'>
      <button type="button" class="btn btn-lg px-4 me-md-2 fw-bold"><img src={BirdGif} style={{width:'50px',height:'50px',marginRight:'10px'}} />Explore</button>
    </div>
  </div>
</div>

    <Parallax className='SkyImage'  bgImage={Forest} bgImageAlt="the sky" strength={800} bgImageStyle={{ width: '100%', height: '100vh', backgroundSize: 'cover' }}  >
    <div class="container my-5">
    <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 " >
   
      <div class="col-lg-6">
        <h3 class="display-5 fw-bold  lh-1 mb-3" style={{color:'white',textAlign:'center'}}>In the Heart of the Forest, Animals Write Their Story.</h3>
        <p class="lead" style={{color:'white',textAlign:'center'}}>Forest animals thrive in nature's embrace, contributing to the vibrant symphony of life within the lush canopies and diverse ecosystems of the woodland realm</p>
     
      </div>
      <div class="col-10 col-sm-8 col-lg-6">
        <img src="https://png.pngtree.com/png-clipart/20230508/original/pngtree-lion-walking-wild-cat-transparent-background-png-image_9153490.png" class="d-block mx-lg-auto img-fluid ImageInParallax" alt="Lion" width="700" height="500" loading="lazy"/>
      
      
      </div> 
    </div>
  </div> 
    </Parallax>
    <div class="container my-5">
  <div class="p-5 text-center  rounded-3" style={{backgroundColor:'#64847f',boxShadow:'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'}}>
    <h3 class="text-body-emphasis">Woodland Wonders: Celebrating the Spirit of Forest Life</h3>
    <p class="lead d-none d-md-none d-lg-none d-xl-block">
      
In the heart of lush forests, a vibrant tapestry of life unfolds, teeming with diverse flora and fauna. Majestic trees stand as ancient sentinels, providing shelter to an array of wildlife, from the playful antics of squirrels to the majestic presence of deer. Birds orchestrate a melodious symphony, their songs echoing through the dense canopy. In this thriving ecosystem, predator and prey engage in a delicate dance, highlighting the interconnectedness of all living beings. Forest life embodies a harmonious balance, where each creature contributes to the intricate web of nature, creating a sanctuary of beauty and biodiversity. 
    </p>
    <div class="d-grid gap-2 d-md-flex justify-content-md-center " id='SkyBtn'>
      <button type="button" class="btn btn-lg px-4 me-md-2 fw-bold"><img src={LionGif} style={{width:'50px',height:'50px',marginRight:'10px'}} />Explore</button>
    </div>
  </div>
</div>
    <Parallax className='SkyImage'  bgImage={Ocean} bgImageAlt="the sky" strength={800} bgImageStyle={{ width: '100%', height: '100vh', backgroundSize: 'cover' }} >
      
    <div class="container my-5">
    <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 " >
   
      <div class="col-lg-6">
        <h3 class="display-5 fw-bold  lh-1 mb-3" style={{color:'white',textAlign:'center'}}>Discover the Depths: Where Ocean Secrets Meet Earth's Heartbeat.</h3>
        <p class="lead " style={{color:'white',textAlign:'center'}}>Beneath the waves, where sunlight fades, discover the mysterious world of underground ocean dwellers—silent guardians of the deep, weaving tales in the hidden currents of aquatic secrets</p>
     
      </div>
      <div class="col-10 col-sm-8 col-lg-6">
        <img src="https://i.pinimg.com/originals/66/94/b3/6694b3076508b8e9229c378efa5d66d7.gif" class="d-block mx-lg-auto img-fluid ImageInParallax" alt="Lion" width="700" height="500" loading="lazy"/>
      
      </div>
    </div>
  </div> 
    </Parallax>
    <div class="container my-5">
  <div class="p-5 text-center  rounded-3" style={{backgroundColor:'#3bb5d0',boxShadow:'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'}}>
    <h3 class="text-body-emphasis">Earth's Hidden Pulse, Submerged in Peace: Underground Oceans, Life's Eternal Lease</h3>
    <p class="lead d-none d-md-none d-lg-none d-xl-block">
      
Beneath the surface of Earth's vast oceans lies a mysterious and awe-inspiring underground water world, a realm of profound beauty and hidden wonders. In this subterranean sanctuary, unique marine life thrives in the absence of sunlight, adapted to the challenges of perpetual darkness. From bioluminescent creatures casting a gentle glow to elusive and exotic species navigating unseen currents, this hidden world paints a portrait of resilience and adaptation. Amidst the silent whispers of underwater currents, the underground water world showcases the intricate balance and interconnectedness that sustains life in Earth's hidden aquatic realms. Exploring this subaqueous expanse unveils a captivating narrative of survival and coexistence beneath the waves.
    </p>
    <div class="d-grid gap-2 d-md-flex justify-content-md-center " id='SkyBtn'>
      <button type="button" class="btn btn-lg px-4 me-md-2 fw-bold"><img src={FishGif} style={{width:'50px',height:'50px',marginRight:'10px'}} />Explore</button>
    </div>
  </div>
  
</div>
<div class="container my-5">
  <div class="p-5 text-center  rounded-3" style={{backgroundColor:'#3bb5d0',boxShadow:'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'}}>
    <h3 class="text-body-emphasis">Earth's Hidden Pulse, Submerged in Peace: Underground Oceans, Life's Eternal Lease</h3>
    <p class="lead d-none d-md-none d-lg-none d-xl-block">
      
Beneath the surface of Earth's vast oceans lies a mysterious and awe-inspiring underground water world, a realm of profound beauty and hidden wonders. In this subterranean sanctuary, unique marine life thrives in the absence of sunlight, adapted to the challenges of perpetual darkness. From bioluminescent creatures casting a gentle glow to elusive and exotic species navigating unseen currents, this hidden world paints a portrait of resilience and adaptation. Amidst the silent whispers of underwater currents, the underground water world showcases the intricate balance and interconnectedness that sustains life in Earth's hidden aquatic realms. Exploring this subaqueous expanse unveils a captivating narrative of survival and coexistence beneath the waves.
    </p>
    <div class="d-grid gap-2 d-md-flex justify-content-md-center " id='SkyBtn'>
      <button type="button" class="btn btn-lg px-4 me-md-2 fw-bold"><img src={FishGif} style={{width:'50px',height:'50px',marginRight:'10px'}} />Explore</button>
    </div>
  </div>
  
</div>
<div class="container my-5">
  <div class="p-5 text-center  rounded-3" style={{backgroundColor:'#3bb5d0',boxShadow:'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'}}>
    <h3 class="text-body-emphasis">Earth's Hidden Pulse, Submerged in Peace: Underground Oceans, Life's Eternal Lease</h3>
    <p class="lead d-none d-md-none d-lg-none d-xl-block">
      
Beneath the surface of Earth's vast oceans lies a mysterious and awe-inspiring underground water world, a realm of profound beauty and hidden wonders. In this subterranean sanctuary, unique marine life thrives in the absence of sunlight, adapted to the challenges of perpetual darkness. From bioluminescent creatures casting a gentle glow to elusive and exotic species navigating unseen currents, this hidden world paints a portrait of resilience and adaptation. Amidst the silent whispers of underwater currents, the underground water world showcases the intricate balance and interconnectedness that sustains life in Earth's hidden aquatic realms. Exploring this subaqueous expanse unveils a captivating narrative of survival and coexistence beneath the waves.
    </p>
    <div class="d-grid gap-2 d-md-flex justify-content-md-center " id='SkyBtn'>
      <button type="button" class="btn btn-lg px-4 me-md-2 fw-bold"><img src={FishGif} style={{width:'50px',height:'50px',marginRight:'10px'}} />Explore</button>
    </div>
  </div>
  
</div>
<div class="container my-5">
  <div class="p-5 text-center  rounded-3" style={{backgroundColor:'#3bb5d0',boxShadow:'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'}}>
    <h3 class="text-body-emphasis">Earth's Hidden Pulse, Submerged in Peace: Underground Oceans, Life's Eternal Lease</h3>
    <p class="lead d-none d-md-none d-lg-none d-xl-block">
      
Beneath the surface of Earth's vast oceans lies a mysterious and awe-inspiring underground water world, a realm of profound beauty and hidden wonders. In this subterranean sanctuary, unique marine life thrives in the absence of sunlight, adapted to the challenges of perpetual darkness. From bioluminescent creatures casting a gentle glow to elusive and exotic species navigating unseen currents, this hidden world paints a portrait of resilience and adaptation. Amidst the silent whispers of underwater currents, the underground water world showcases the intricate balance and interconnectedness that sustains life in Earth's hidden aquatic realms. Exploring this subaqueous expanse unveils a captivating narrative of survival and coexistence beneath the waves.
    </p>
    <div class="d-grid gap-2 d-md-flex justify-content-md-center " id='SkyBtn'>
      <button type="button" class="btn btn-lg px-4 me-md-2 fw-bold"><img src={FishGif} style={{width:'50px',height:'50px',marginRight:'10px'}} />Explore</button>
    </div>
  </div>
  
</div>



      
    </div>
  )
}

export default Home
