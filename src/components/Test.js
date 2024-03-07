import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import React, {useEffect} from 'react'
import GalaxyWorld from '../Images/GalaxyWorld.jpg'
import GalaxyVideo from '../Images/GalaxySpaceVideo.mp4'
import Forest from '../Images/Forest2.jpg'
import {
    Link
  } from "react-router-dom";
const Test = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 
  return (
    <div style={{backgroundColor:'#a2a8d3',width:'100%',height:'auto'}}>


      <Parallax pages={4} id='HomeParallax' >

        {/* Page-1 */}
        <ParallaxLayer offset={0} style={{height:'100vh'}}>
        <video
          autoPlay
          src= {GalaxyVideo}
          loop
          muted
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        
        </ParallaxLayer>
        
        <ParallaxLayer sticky={{start: 0,end:0.38}} style={{display:'flex',justifyContent:'center',alignItems:'center',height:'10vh',top:'50%'}}>
        <h1 className='text-white fw-bold mx-4 my-5' style={{display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center'}}>Where Stars Sing, Planets Dance, and Dreams Take Flight</h1>
        </ParallaxLayer>




        {/* Page-2 */}
            <ParallaxLayer sticky={{ start: 2.09, end: 2.4 }} speed={0.90} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',height:'20vh',width:'10vw',left:'66%' }}>
        <img className="CustomParachute" src="https://th.bing.com/th/id/R.908d1e9f81716f8693a69fe2d3f779e6?rik=UGUvdvgfNw576Q&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fparachute-png-hd-sonoma-star-800-png-614.png&ehk=MbmP5sENcMIyiS%2fYaugvF%2fEIaCeDVcITtpdarAoGglw%3d&risl=&pid=ImgRaw&r=0" style={{ width: '60px', height: '80px', justifyContent: 'center', alignItems: 'center',position:'absolute',right:'25%' }} alt="Parachute" />
        </ParallaxLayer>




        {/* Page-3 */}
        <ParallaxLayer sticky={{ start: 2.2, end: 2.5 }} speed={1} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',height:'20vh',top:'20%',width:'10vw',left:'63%' }}>
        <img className="CustomParachute" src="https://th.bing.com/th/id/R.41f1dd237aeba2567008824ce23f9f32?rik=cLFJ4BPtLiZWGw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fparachute-png-hd-parachute-live-wallpaper-parachute-hd-png-300.png&ehk=VUqs11iBY1uKOprfxvDfZKQqhm4EEMHcH2IJPcghXtU%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" style={{ width: '80px', height: '80px', justifyContent: 'center', alignItems: 'center',position:'absolute',right:'42%',top:'20%' }} alt="Parachute" />
        </ParallaxLayer>




        {/* Page-4 */}
        <ParallaxLayer  offset={1}  style={{display:'flex',justifyContent:'center',alignItems:'center'}} >
          
    <div class="container col-xxl-8 px-4 py-3 mt-5" style={{backgroundColor:'#252A36',boxShadow:'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',borderRadius:'15px'}} >
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5" >
        <div class="col-10 col-sm-8 col-lg-6">
            <img src='https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdhbGF4eXxlbnwwfHwwfHx8MA%3D%3D' class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes"  loading="lazy" style={{borderRadius:'15px',boxShadow:'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',width:'300px',height:'300px'}}/>
        </div>
      
        <div class="col-lg-6" id='Box'>
            <h2 class="fw-bold "  id='MainTitle'><span >ExploreWorld: Unveil Endless Wonders!</span></h2>
            <p class=""  style={{textAlign:'justify'}} id='Para'><span> Embark on a journey to uncover hidden gems, where every step reveals new wonders. Embrace the thrill of exploration with us</span></p>
          
        </div>
        </div>
    </div>
   
  
        </ParallaxLayer>
        

        {/* Page-5 */}
        <ParallaxLayer sticky={{start:0.1 , end: 0.5}} >
        <img className="Person" src="https://media.giphy.com/media/wET3URacPVM9G/giphy.gif" style={{ width: '130px', height: '130px', justifyContent: 'center', alignItems: 'center',position:'absolute',right:'42%',top:'20%' }} alt="Parachute" />
        </ParallaxLayer>


        {/* page-6 */}

        <ParallaxLayer sticky={{start:3.29, end:3.4}} speed={0.09} style={{height:'10vh',width:'10vw',left:'66%'}}>
        <img className="Moon" src="https://th.bing.com/th/id/R.31501bc85e6ac70c7438151fe80764b4?rik=Xcnyy5GwIByC6A&riu=http%3a%2f%2fpluspng.com%2fimg-png%2ffull-moon-png-black-and-white-5-full-moon-png-1000.png&ehk=iBMwpl3UFFUwfuRJTR9DJm9K%2b6W8T2atxtuDiiUuaH8%3d&risl=&pid=ImgRaw&r=0" style={{ width: '50px', height: '50px', justifyContent: 'center', alignItems: 'center',position:'absolute',right:'30%',top:'20%' }} alt="Parachute" />
        </ParallaxLayer>
      

        {/* Page-7 */}
        

        <ParallaxLayer sticky={{start:1, end:1.2}}  style={{height:'20vh',width:'10vw',left:'66%',top:'35%'}} >
        <img className="Earth" src="https://th.bing.com/th/id/R.0dc968448592a7d533096b74c263cc40?rik=nqA6rIVg%2b28Zvg&riu=http%3a%2f%2fbestanimations.com%2fEarth%26Space%2fEarth%2fearth-spinning-rotating-animation-24.gif&ehk=hTdbQi%2fr1LUu1%2f%2bd9G02bsL2npa2hccPkfz6kT1Tt2g%3d&risl=&pid=ImgRaw&r=0" style={{ width: '50px', height: '50px', justifyContent: 'center', alignItems: 'center',position:'absolute',right:'30%',top:'20%' }} alt="Parachute" />
        </ParallaxLayer>

        {/** Page-8 */}

        <ParallaxLayer offset={2}  style={{display:'flex',justifyContent:'center',alignItems:'center'}} >
        <div class="container col-xxl-8 px-4 py-3" id='ParachuteContainer' style={{backgroundColor:'#252A36',boxShadow:'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',borderRadius:'15px'}} >
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5" >
        <div class="col-10 col-sm-8 col-lg-6">
            <img src="https://images.unsplash.com/photo-1559686043-aef1bbc98d19?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" loading="lazy" style={{borderRadius:'15px',boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px',width:'300px',height:'300px'}}/>
        </div>
        <div class="col-lg-6" id='Box2'>
            <h2 class=" fw-bold  lh-1 mb-3" id='MainTitle'><span>Explore Earth's Wonders by Balloon!</span></h2>
            <p class="" id='Para'><span>Embark on a soaring adventure as you rise above in a hot air balloon, unveiling Earth's breathtaking wonders from a unique vantage point, where the sky meets the extraordinary landscapes below.</span></p>
         
        </div>
        </div>
    </div>
  </ParallaxLayer>
           

        {/* Page - 9 */}

       <ParallaxLayer offset={3} style={{display:'flex',justifyContent:'center',alignItems:'center'}} >
            <div class="container col-xxl-8 px-4 py-3" id='ParachuteContainer' style={{backgroundColor:'#252A36',boxShadow:'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',borderRadius:'15px'}} >
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5" >
        <div class="col-10 col-sm-8 col-lg-6">
            <img src={Forest} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="400" loading="lazy" style={{borderRadius:'15px',boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px',width:'300px',height:'300px'}}/>
        </div>
        <div class="col-lg-6" id='Box3'>
            <h2 class=" fw-bold  lh-1 mb-3" id='MainTitle'><span>Stargaze in Moonlit Forests: Nature's Nighttime Symphony.</span></h2>
            <p class="" id='Para'><span>Step into a moonlit forest, where stars weave a cosmic tapestry above. A serene sanctuary, where nature's nocturnal charm comes alive under the gentle glow of the moon</span></p>
          
        </div>
        </div>
    </div>
            </ParallaxLayer>

      </Parallax>
      <div className='BGChangeTesting'>
       
   
       <div style={{height:'100vh',backgroundColor:'#252A36'}}>
         
      
      </div>
  
          
      </div>
     
    </div>
  )
}

export default Test
