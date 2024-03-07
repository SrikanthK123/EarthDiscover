import React, {useEffect} from 'react'

const SingleAnimal = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 
  return (
    <div style={{backgroundColor:'#155263',width:'100%',height:'auto'}}>
   <div class="p-5 mb-4 rounded-3" id='AnimalsGif' style={{
  backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.2)),url(${props.Gif})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: '100% 100%',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}}>
  <div class="container-fluid py-5">
    <h2 class="  fw-bold text-white" style={{ textAlign: 'center' }}>{props.TagName}</h2>
    <p class=" display-5 col-md-8 fs-5 text-white" style={{ wordSpacing:'normal',backgroundColor:'rgba(255, 255, 255, 0.2)',padding:'10px',textAlign:'center',borderRadius:'15px'}}>{props.Desc}</p>
  </div>
</div>


    <div className='container'>
        
    <div class="row featurette my-5">
                 <div class="col-md-7 mx-auto" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                <div class="col-lg-6" id='BirdContentBox'>
            <h2 class="fw-bold "  id='MainTitle'><span >Origin and Distribution :</span></h2>
            <ol>
                <li id='NatureBullets' ><p class="lead"  style={{textAlign:'justify'}} id='Para'><span>{props.Origin}</span></p></li>
               
            </ol>
            
          
        </div>
  </div>
  <div class="col-md-5 mx-auto">
    <img src={`${props.OriginImg}`}  alt='Planet' style={{ width: '100%', height: '350px',borderRadius:'15px' }} />
  </div>
</div>
<div class="row featurette my-5">
      <div class="col-md-7 order-md-2" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
      <div class="col-lg-6" id='BirdContentBox'>
            <h2 class="fw-bold "  id='MainTitle'><span >Diverse Habitats:</span></h2>
            <ol>
                <li id='NatureBullets' ><p class="lead"  style={{textAlign:'justify'}} id='Para'><span> {props.Habitats}</span></p></li>
                
            </ol>
          
        </div>
      </div>
      <div class="col-md-5 order-md-1">
      <img src={`${props.HabitatsImg}`} alt='Planet' style={{ width: '100%', height: '350px',borderRadius:'15px' }} />
      </div>
    </div>
    <div class="row featurette my-5">
                 <div class="col-md-7 mx-auto" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                <div class="col-lg-6" id='BirdContentBox'>
            <h2 class="fw-bold "  id='MainTitle'><span >Natural Behaviors:</span></h2>
            <ol>
                <li id='NatureBullets' ><p class="lead"  style={{textAlign:'justify'}} id='Para'><span> {props.Behaviors}</span></p></li>
               
            </ol>
            
          
        </div>
  </div>
  <div class="col-md-5 mx-auto">
    <img src={`${props.BehaviorsImg}`}  alt='Planet' style={{ width: '100%', height: '350px',borderRadius:'15px' }} />
  </div>
</div>
<div class="row featurette my-5">
      <div class="col-md-7 order-md-2" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
      <div class="col-lg-6" id='BirdContentBox'>
            <h2 class="fw-bold "  id='MainTitle'><span >Unknown Facts:</span></h2>
            <ol>
                <li id='NatureBullets' ><p class="lead"  style={{textAlign:'justify'}} id='Para'><span> {props.Facts}</span></p></li>
                
            </ol>
          
        </div>
      </div>
      <div class="col-md-5 order-md-1">
      <img src={`${props.FactsImg}`} alt='Planet' style={{ width: '100%', height: '350px',borderRadius:'15px' }} />
      </div>
    </div>
    <div class="row featurette " style={{padding:'10px'}}>
                 <div class="col-md-7 mx-auto" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                <div class="col-lg-6" id='BirdContentBox'>
            <h2 class="fw-bold "  id='MainTitle'><span >Longevity:</span></h2>
            <ol>
                <li id='NatureBullets' ><p class="lead"  style={{textAlign:'justify'}} id='Para'><span> {props.Longevity}</span></p></li>
               
            </ol>
            
          
        </div>
  </div>
  <div class="col-md-5 mx-auto">
    <img src={`${props.LongevityImg}`}  alt='Planet' style={{ width: '100%', height: '350px',borderRadius:'15px' }} />
  </div>
</div>
 
 
    </div>
    </div>
  )
}

export default SingleAnimal


