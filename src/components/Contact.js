import React,{useEffect} from 'react'

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 
  return (
    <div>
          
    <div className='Sky col-xxl-8 px-4 py-5'>
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between  mb-4">
      <div class="col-md-3 mb-2 mb-md-0">
        <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
         <img src='https://cdn-icons-png.flaticon.com/512/9616/9616892.png' style={{width:'50px',height:'50px'}} />
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
    <Parallax className='SkyImage col-md-3 mb-2 mb-md-0'  bgImage='https://1.bp.blogspot.com/--kflukKM3cA/XvSuQDlb_aI/AAAAAAAAVng/sTA3jBh7KtAtepJ2c5yyDZemzWXXHFzQwCK4BGAsYHg/w976-h549/wallpaper-4k-for-pc--heroscreen.cc.png' bgImageAlt="the sky" strength={800}>
        <div className='content'>
            <span className='img-txt'>
            From Seed to Sky, Earth's Life Flies High.
            </span>
        </div>
    </Parallax>
 
</div>

      <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold  lh-1 mb-3" style={{color:'white'}}>Responsive left-aligned hero with image</h1>
        <p class="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
       
      </div>
      <div class="col-10 col-sm-8 col-lg-6">
        <img className='eagleImg' src="https://th.bing.com/th/id/R.448f309c6546670ad2798c6f5ab978b3?rik=2UQeflpV%2foDSLA&riu=http%3a%2f%2fclipart-library.com%2f2018%2feagle-clipart-13.png&ehk=qNvZq4ENOjhwrGIYZDyoZJA7dYce5ZYtvMvE5szyk30%3d&risl=&pid=ImgRaw&r=0" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
      </div>
    </div>
  </div>
      <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold  lh-1 mb-3" style={{color:'white'}}>Responsive left-aligned hero with image</h1>
        <p class="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
       
      </div>
      <div class="col-10 col-sm-8 col-lg-6">
        <img className='eagleImg' src="https://th.bing.com/th/id/R.448f309c6546670ad2798c6f5ab978b3?rik=2UQeflpV%2foDSLA&riu=http%3a%2f%2fclipart-library.com%2f2018%2feagle-clipart-13.png&ehk=qNvZq4ENOjhwrGIYZDyoZJA7dYce5ZYtvMvE5szyk30%3d&risl=&pid=ImgRaw&r=0" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
      </div>
    </div>
  </div>
  <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img className='eagleImg' src="https://www.jeunesetnature.com/gifs/bernaches.gif" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold  lh-1 mb-3" style={{color:'white'}}>Responsive left-aligned hero with image</h1>
        <p class="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
       
      </div><img src='https://i.pinimg.com/originals/66/94/b3/6694b3076508b8e9229c378efa5d66d7.gif' />
    </div>
  </div>
  <Parallax pages={5} ref={ref}>
        {/* First Layer */}
        <ParallaxLayer offset={0} speed={0.3} factor={2} style={{ backgroundImage: `url(${SkyImg})`, backgroundSize: 'cover',backgroundColor:'#36231c',backgroundPosition:'top',backgroundRepeat:'no-repeat',backgroundAttachment:'fixed'}}>
          <div className="container my-5">
            <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 ">
              <div className="col-lg-6">
                <h3 className="display-5 fw-bold lh-1 mb-3" style={{ color: 'white', textAlign: 'center' }}>In the Heart of the Forest, Animals Write Their Story.</h3>
                <p className="lead" style={{ color: 'white', textAlign: 'center' }}>Forest animals thrive in nature's embrace, contributing to the vibrant symphony of life within the lush canopies and diverse ecosystems of the woodland realm</p>
              </div>
            </div>
          </div>
        </ParallaxLayer>

        {/* Second Layer */}
        <ParallaxLayer offset={1} speed={0.3} factor={2} style={{ backgroundImage: `url(${Sky})`, backgroundSize: 'cover',backgroundColor:'#36231c', }}>
          <div className="container my-5">
            <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 ">
              <div className="col-lg-6">
                <h3 className="display-5 fw-bold lh-1 mb-3" style={{ color: 'white', textAlign: 'center' }}>In the Heart of the Forest, Animals Write Their Story.</h3>
                <p className="lead" style={{ color: 'white', textAlign: 'center' }}>Forest animals thrive in nature's embrace, contributing to the vibrant symphony of life within the lush canopies and diverse ecosystems of the woodland realm</p>
              </div>
            </div>
          </div>
        </ParallaxLayer>

        {/* Third Layer */}
        <ParallaxLayer offset={2} speed={0.3} factor={1.5} style={{ backgroundImage: `url(${Forest2})`, backgroundSize: '100%',backgroundColor:'#071318',backgroundPosition:'top',backgroundRepeat:'no-repeat',backgroundAttachment:'fixed'}}>
          <div className="container my-5">
            <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 ">
              <div className="col-lg-6">
                <h3 className="display-5 fw-bold lh-1 mb-3" style={{ color: 'white', textAlign: 'center' }}>In the Heart of the Forest, Animals Write Their Story.</h3>
                <p className="lead" style={{ color: 'white', textAlign: 'center' }}>Forest animals thrive in nature's embrace, contributing to the vibrant symphony of life within the lush canopies and diverse ecosystems of the woodland realm</p>
              </div>
            </div>
          </div>
        </ParallaxLayer>

        {/* Fourth Layer */}
        <ParallaxLayer offset={3} speed={0.3} factor={1.5} style={{ backgroundImage: `url(${UnderWater1})`, backgroundSize: 'cover',backgroundColor:'#36231c',backgroundPosition:'top',backgroundRepeat:'no-repeat',backgroundAttachment:'fixed'}}>
          <div className="container my-5">
            <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 ">
              <div className="col-lg-6">
                <h3 className="display-5 fw-bold lh-1 mb-3" style={{ color: 'white', textAlign: 'center' }}>In the Heart of the Forest, Animals Write Their Story.</h3>
                <p className="lead" style={{ color: 'white', textAlign: 'center' }}>Forest animals thrive in nature's embrace, contributing to the vibrant symphony of life within the lush canopies and diverse ecosystems of the woodland realm</p>
              </div>
            </div>
          </div>
        </ParallaxLayer>

      
      </Parallax>

{/* About ParallaxLayer  */} 
      <ParallaxLayer sticky={{start:0.1,end:0.4}}>
      <div style={{ display: 'flex', justifyContent:'center', alignItems: 'center' }}>
  <img src="https://th.bing.com/th/id/R.640686277ceefcaf11f064be4c55a8e5?rik=0PASRKZx32CnWw&riu=http%3a%2f%2fpngimg.com%2fuploads%2fcloud%2fcloud_PNG25.png&ehk=VTBmv3KxFaIuUI8gAHo3wk8gu53uGyz%2bIQamVlKauKw%3d&risl=&pid=ImgRaw&r=0" style={{ width: '350px', height: '350px' }} />
</div>

       </ParallaxLayer>
       {/*"https://th.bing.com/th/id/R.640686277ceefcaf11f064be4c55a8e5?rik=0PASRKZx32CnWw&riu=http%3a%2f%2fpngimg.com%2fuploads%2fcloud%2fcloud_PNG25.png&ehk=VTBmv3KxFaIuUI8gAHo3wk8gu53uGyz%2bIQamVlKauKw%3d&risl=&pid=ImgRaw&r=0"*/}
    </div>
  )
}

export default Contact
