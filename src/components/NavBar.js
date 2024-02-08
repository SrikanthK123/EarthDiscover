  import React from 'react'
  import {
      Link
    } from "react-router-dom";
    import Logo from '../Images/LogoFinal.mp4'
    import LogoFinal from '../Images/LogoImage.png'

  const NavBar = () => {
    return (
      <div>
        <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between" style={{backgroundColor:'black'}}>
        <div class="col-md-3 mb-2 mb-md-0 my-3 mx-3">
          <Link to="/EarthDiscover" class="d-inline-flex link-body-emphasis text-decoration-none" id="Logo">
          {/*<video src={Logo} autoPlay muted playsInline loop style={{ width: '70px', height: '70px', borderRadius: '50%',padding:'5px',boxShadow:'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset' }} />*/}
          <img src={LogoFinal} alt='Logo' style={{width:'80px',height:'80px',borderRadius:'50%',padding:'11px'}} /><h3 style={{color:'white',display:'flex',justifyContent:'center',alignItems:'center',fontFamily:'monospace',padding:'5px'}}><marquee direction="right" style={{color:'white'}}> Explore Universe</marquee></h3>
          </Link>
        </div>

        <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 mx-5">
          <li><Link to="/EarthDiscover" class="nav-link px-4">Home</Link></li>
          <li><Link to="/GalaxyWorld" class="nav-link px-4">Galaxy</Link></li>
          <li><Link to="/Nature" class="nav-link px-4">Forest</Link></li>
          <li><Link to="/OceanWorld" class="nav-link px-4">Oceanarium</Link></li>
          <li><Link to="/About" class="nav-link px-4">About</Link></li>
          
        </ul>
      </header>
      </div>
    )
  }

  export default NavBar
