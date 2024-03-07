import React, {useState,useEffect} from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import OceanVideo from '../Images/OceanWorld.mp4'  
import OceanImage from '../Images/Ocean5.jpg' 
import JellyFish from '../Images/jellyFish.gif'

const OceanWorld = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 
    const Fish = [
        {
            Name :'ClownFish',
            SeaImage : 'https://cdn-icons-png.flaticon.com/128/3066/3066631.png'
          },
          {
            Name :'AnglerFish',
            SeaImage : 'https://cdn-icons-png.flaticon.com/128/4972/4972006.png'
          },
          {
            Name :'GoldFish',
            SeaImage : 'https://cdn-icons-png.flaticon.com/128/7409/7409167.png'
          },
          {
            Name :'BlowFish',
            SeaImage : 'https://cdn-icons-png.flaticon.com/128/2597/2597626.png'
          },
          {
            Name :'Eel',
            SeaImage : 'https://cdn-icons-png.flaticon.com/128/4972/4972335.png'
          },
          {
            Name :'Seaurchin',
            SeaImage : 'https://cdn-icons-png.flaticon.com/128/6789/6789549.png'
          },
          {
            Name :'JellyFish',
            SeaImage : 'https://cdn-icons-png.flaticon.com/128/11716/11716279.png'
          },
          {
            Name :'Dolphin',
            SeaImage : 'https://cdn-icons-png.flaticon.com/128/7705/7705069.png'
          },
          {
            Name :'Whale',
            SeaImage : 'https://cdn-icons-png.flaticon.com/128/4971/4971939.png'
          },
          {
            Name :'Crocodile',
            SeaImage : 'https://cdn-icons-png.flaticon.com/128/13704/13704662.png'
          },
          {
            Name : "BettaFish",
            SeaImage:'https://cdn-icons-png.flaticon.com/128/5042/5042237.png'
          },
          {
            Name : "Turtle",
            SeaImage:'https://cdn-icons-png.flaticon.com/128/616/616651.png'
          },
          {
            Name : "MantaRay",
            SeaImage:'https://cdn-icons-png.flaticon.com/128/1808/1808061.png'
          },
          {
            Name : "Starfish",
            SeaImage:'https://cdn-icons-png.flaticon.com/128/3065/3065740.png'
          },
          {
            Name : "Seahorse",
            SeaImage:'https://cdn-icons-png.flaticon.com/128/7590/7590890.png'
          },
          {
            Name : "Octopus",
            SeaImage:'https://cdn-icons-png.flaticon.com/128/7591/7591652.png'
          },
          {
            Name : "Manatee",
            SeaImage:'https://cdn-icons-png.flaticon.com/128/6789/6789555.png'
          },
          {
            Name : "Shark",
            SeaImage:'https://cdn-icons-png.flaticon.com/128/4972/4972168.png'
          },
          {
            Name : "Narwhal",
            SeaImage:'https://cdn-icons-png.flaticon.com/128/477/477113.png'
          }
    ]
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
  return (
    <div style={{backgroundColor:'#252A36',width:'100%',height:'100vh'}}>
    <Parallax pages={5} id='ParallaxMain'>

        {/** Page-1 */}

        <ParallaxLayer offset={0} style={{height:'100vh'}}>
    <video
      autoPlay
      src= {OceanVideo}
      preload="auto"
      loop
      muted
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
   
    
    </ParallaxLayer>

    {/** Page-2 */}
    <ParallaxLayer sticky={{start:0.5,end:0.8}} style={{height:'20vh'}}>
        <h3 className='text-white fw-bold mx-4 my-5' style={{display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center'}}>Where Waves of Wonder Never End.</h3>
    </ParallaxLayer>

      {/** Page - 3 */}

   
      <ParallaxLayer sticky={{start:0.1 , end: 0.5}} style={{height:'15vh'}}>
    <img className="Butterfly" src="https://i.pinimg.com/originals/0c/ec/a1/0ceca1aa1caba0cd677296d4ca985dce.gif"  alt="Rock" />
    </ParallaxLayer>

    {/** Page-4 */}
    <ParallaxLayer offset={1} id='ParallaxLayer3' >
    
    <div className='container my-5' style={{ background:containerColor ,padding:'20px',borderRadius:'15px'}}>
      <h2 className='fw-bolder' style={{display:'flex',justifyContent:'center',alignItems:'center',margin:'20px',color:'cyan'}}>Histroy </h2><ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
    <li><a href="#" class="nav-link px-2 link-secondary"> <button onClick={BlueBG} style={{width:'25px',height:'25px',borderRadius:'50%',marginLeft:'20px',backgroundColor:'blue',border:'white'}}></button></a></li>
    <li><a href="#" class="nav-link px-2"> <button onClick={PinkBG} style={{width:'25px',height:'25px',borderRadius:'50%',marginLeft:'20px',backgroundColor:'grey',border:'white'}}></button></a></li>
    <li><a href="#" class="nav-link px-2"> <button onClick={OrangeBG} style={{width:'25px',height:'25px',borderRadius:'50%',marginLeft:'20px',backgroundColor:'rgba(69, 158, 129, 0.86)',border:'white'}}></button></a></li>
    <li><a href="#" class="nav-link px-2"> <button onClick={NormalBG} style={{width:'25px',height:'25px',borderRadius:'50%',marginLeft:'20px',backgroundColor:'rgba(22, 20, 21, 0.86)',border:'white',color:'white'}}>N</button></a></li>

  </ul>
  <div className='container'style={{display:'flex',justifyContent:'center',alignItems:'center'}} >
          <div class="col-md-5 my-3 text-center">
            <iframe src='https://momento360.com/e/u/c86ca48e657949b0a9ae7cfecc9d00e4?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true' style={{ backgroundPosition: 'center', backgroundSize: '100%', borderRadius: '50%', width: '100%', height: '400px', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset', border: '2px solid white' }}></iframe>
          </div></div>
      <p className='lead text-white ' style={{textAlign:'justify'}}>The ocean world, spanning more than 70% of our planet, is a captivating and vital part of Earth's biosphere. Teeming with diverse marine life, from the vibrant coral reefs to the deep, mysterious abyss, it holds secrets yet to be fully uncovered. </p>
      <p className='lead text-white ' style={{textAlign:'justify'}}>With its vastness and interconnected ecosystems, the ocean plays a crucial role in maintaining global climate balance and sustaining life on Earth.</p>
      <p className='lead text-white ' style={{textAlign:'justify'}}>However, the ocean world is facing unprecedented challenges. Pollution, overfishing, and climate change threaten the delicate equilibrium of marine ecosystems. These issues highlight the urgent need for conservation efforts and sustainable practices to protect the health and biodiversity of the ocean.</p>
      <p className='lead text-white ' style={{textAlign:'justify'}}>Despite the challenges, advancements in marine exploration technologies continue to reveal the wonders hidden beneath the waves. Scientists and researchers are uncovering new species, underwater landscapes, and the intricate relationships within marine habitats.</p>
      <p className='lead text-white ' style={{textAlign:'justify'}}> The fascination with the ocean's mysteries inspires ongoing efforts to understand, appreciate, and preserve this remarkable world.</p>
      <p className='lead text-white ' style={{textAlign:'justify'}}>Preserving the ocean world requires collective action. Conservation initiatives, marine protected areas, and global cooperation are essential to mitigate the impact of human activities. By raising awareness about the importance of the ocean and adopting sustainable practices, we can contribute to the well-being of this vast and invaluable ecosystem.</p>
      <p className='lead text-white ' style={{textAlign:'justify'}}>In exploring, understanding, and protecting the ocean world, we safeguard not only its wonders but also the future of our planet. It is a call to action for each of us to be stewards of the ocean and work towards a sustainable coexistence with this awe-inspiring part of nature.</p>

      
    </div>
   
    
  </ParallaxLayer>

  {/** Page-5 */}

  <ParallaxLayer offset={2}>
    <div className='container my-5' style={{width:'100%',height:'auto',backgroundColor:'rgba(145, 226, 206, 0.47)',borderRadius:'15px'}}>

    <div class="nav-scroller py-1 mb-3 ">
<nav class="nav  justify-content-between" style={{gap:'40px'}}>
    
    {Fish.map((fish,index)=>(
          <div class="nav-item nav-link  text-white " id='Birds'  ><img  src={fish.SeaImage} alt='Birds' style={{ width: '65px', height: '65px', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }} /><Link to={`/${fish.Name}`} className='ViewBird'><button className='birdsBtn' >{fish.Name}</button></Link></div>)
)}
     </nav>
</div>
    </div>
  </ParallaxLayer>

    </Parallax>
    <div className='BGChangeTesting'>
   

   <div>
      <img src={OceanImage} style={{width:'100%',height:'100vh', background: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))'}} />
  
  </div>
 
 
      
  </div>
  
</div>
  )
}

export default OceanWorld
