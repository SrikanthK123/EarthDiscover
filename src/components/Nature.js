import React, {useState} from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import NatureVideo from '../Images/Nature.mp4'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
const Nature = () => {

    const Birds = [
      {
        Name :'Parrot',
        BirdImg : 'https://cdn-icons-png.flaticon.com/512/8277/8277557.png'
      },
      {
        Name :'Humming',
        BirdImg : 'https://cdn-icons-png.flaticon.com/512/9997/9997705.png'
      }
      ,
      {
        Name :'Sparrow',
        BirdImg : 'https://cdn-icons-png.flaticon.com/512/9804/9804328.png'
      },
      {
        Name :'Turkey',
        BirdImg : 'https://cdn-icons-png.flaticon.com/512/2403/2403459.png'
      },
      {
        Name :'Stork',
        BirdImg : 'https://cdn-icons-png.flaticon.com/512/9920/9920186.png'
      },
      {
        Name :'Pelican',
        BirdImg : 'https://cdn-icons-png.flaticon.com/512/3823/3823133.png'
      },
      {
        Name :'Seagull',
        BirdImg : 'https://cdn-icons-png.flaticon.com/512/3127/3127593.png'
      },
      {
        Name :'Swan',
        BirdImg : 'https://cdn-icons-png.flaticon.com/512/9997/9997746.png'
      },
      {
        Name :'Penguin',
        BirdImg : 'https://cdn-icons-png.flaticon.com/512/9296/9296564.png'
      },
      {
        Name :'Eagle',
        BirdImg : 'https://cdn-icons-png.flaticon.com/128/3065/3065699.png'
      }
      ,
      {
        Name :'Camel',
        BirdImg : 'https://cdn-icons-png.flaticon.com/128/4215/4215091.png'
      },
      {
        Name :'Porcupine',
        BirdImg : 'https://cdn-icons-png.flaticon.com/128/12053/12053564.png'
      },
      {
        Name :'Lion',
        BirdImg : 'https://cdn-icons-png.flaticon.com/128/4081/4081551.png'
      },
      {
        Name :'Monkey',
        BirdImg : 'https://cdn-icons-png.flaticon.com/128/4600/4600312.png'
      },
      {
        Name :'Tiger',
        BirdImg : 'https://cdn-icons-png.flaticon.com/128/12658/12658833.png'
      },
      {
        Name :'Elephant',
        BirdImg : 'https://cdn-icons-png.flaticon.com/128/2847/2847278.png'
      },
      {
        Name :'Horse',
        BirdImg : 'https://cdn-icons-png.flaticon.com/128/10612/10612550.png'
      },
      {
        Name :'Panda',
        BirdImg : 'https://cdn-icons-png.flaticon.com/128/1531/1531395.png'
      },
      {
        Name :'Fox',
        BirdImg : 'https://cdn-icons-png.flaticon.com/128/616/616685.png'
      },
      {
        Name :'Zebra',
        BirdImg : 'https://cdn-icons-png.flaticon.com/128/2622/2622174.png'
      },
      
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
          src= {NatureVideo}
          preload="auto"
          loop
          muted
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        
        </ParallaxLayer>

        {/** Page-2 */}
        <ParallaxLayer sticky={{start:0.5,end:0.8}} style={{height:'20vh'}}>
            <h3 className='text-white fw-bold mx-4 my-5' style={{display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center'}}>Discover the Untouched Beauty of the Earth.</h3>
        </ParallaxLayer>

          {/** Page - 3 */}

       
          <ParallaxLayer sticky={{start:0.1 , end: 0.5}} style={{height:'15vh'}}>
        <img className="Butterfly" src="https://media.tenor.com/images/58421e00179fa9e0f7cd2e1aa01e3a62/tenor.gif"  alt="Rock" />
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
            <iframe src='https://momento360.com/e/u/bddb87b43157437db933990ea20d6e64?utm_campaign=embed&utm_source=other&heading=374.25&pitch=-17.37&field-of-view=75&size=medium&display-plan=true' style={{ backgroundPosition: 'center', backgroundSize: '100%', borderRadius: '50%', width: '100%', height: '400px', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset', border: '2px solid white' }}></iframe>
          </div></div>
          <p className='lead text-white ' style={{textAlign:'justify'}}>The beauty of nature on Earth is a breathtaking spectacle that captivates the senses and evokes a sense of awe and wonder. From the majestic mountains to the vast oceans, our planet is adorned with diverse landscapes that showcase the unparalleled artistry of the natural world.</p>
          <p className='lead text-white ' style={{textAlign:'justify'}}>One cannot help but be enchanted by the lush greenery of dense forests, where towering trees create a canopy overhead, filtering sunlight and casting dappled shadows on the forest floor. The symphony of sounds, from the rustling leaves to the melodious birdsong, adds to the enchantment, creating a harmonious melody that resonates with the soul.</p>
          <p className='lead text-white ' style={{textAlign:'justify'}}>The sprawling meadows, adorned with a myriad of colorful wildflowers, paint a vibrant tapestry across the land. Each season brings its own palette of hues, from the soft pastels of spring to the warm, golden tones of autumn. Nature's ever-changing colors reflect the cyclical rhythm of life, reminding us of the perpetual cycle of growth, decay, and renewal.</p>
          <p className='lead text-white ' style={{textAlign:'justify'}}>The beauty of Earth extends to its aquatic realms, where crystal-clear lakes, meandering rivers, and powerful waterfalls carve their way through the landscape. The rhythmic ebb and flow of tides, the mesmerizing dance of sunlight on water surfaces, and the teeming marine life beneath the waves contribute to the captivating allure of our oceans and water bodies.</p>
          <p className='lead text-white ' style={{textAlign:'justify'}}>The grandeur of mountain ranges, with their snow-capped peaks reaching towards the sky, imparts a sense of majesty and resilience. The challenge of scaling these heights is rewarded with panoramic views that stretch as far as the eye can see, instilling a profound appreciation for the vastness and beauty of the Earth.</p>
          <p className='lead text-white ' style={{textAlign:'justify'}}>Beyond the visual splendor, the beauty of nature on Earth extends to its ability to inspire introspection and a sense of interconnectedness. Whether it be the quiet solitude of a serene forest or the expansive views from a mountaintop, nature invites contemplation and a recognition of our place within the larger web of life.</p>
          <p className='lead text-white ' style={{textAlign:'justify'}}>In the end, the beauty of nature on Earth is a testament to the planet's ability to create and sustain life in all its forms. It serves as a source of inspiration, a sanctuary for biodiversity, and a reminder of the delicate balance that exists within the natural world. Preserving and appreciating this beauty becomes a shared responsibility for all inhabitants of this remarkable planet.</p>
          
        </div>
      </ParallaxLayer>

      {/** Page-5 */}

      <ParallaxLayer offset={2}>
        <div className='container my-5' style={{width:'100%',height:'auto',backgroundColor:'rgba(145, 226, 206, 0.47)',borderRadius:'15px'}}>

        <div class="nav-scroller py-1 mb-3 ">
    <nav class="nav  justify-content-between" style={{gap:'40px'}}>
        
        {Birds.map((bird,index)=>(
              <div class="nav-item nav-link  text-white " id='Birds'  ><img  src={bird.BirdImg} alt='Birds' style={{ width: '65px', height: '65px', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }} /><Link to={`/${bird.Name}`} className='ViewBird'><button className='birdsBtn' >{bird.Name}</button></Link></div>)
)}
         </nav>
  </div>
        </div>
      </ParallaxLayer>

        </Parallax>
        <div className='BGChangeTesting'>
       
   
       <div>
          <img src='https://images.unsplash.com/photo-1455218873509-8097305ee378?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' style={{width:'100%',height:'100vh', background: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))'}} />
      
      </div>
  
          
      </div>
      
    </div>
  )
}

export default Nature
