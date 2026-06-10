import React from 'react'
import "./Footer.css"
import YouTube from "../Images-Logos-Menus/logo-youtube-blanc-png.png"
import Twitter from  "../Images-Logos-Menus/Logo-twitter-blanc-png.png"
import Facebook from "../Images-Logos-Menus/Facebook.png"
import Instagram from "../Images-Logos-Menus/White-Instagram.png"



function Footer ()  {


return (

<section className='Footer'>
<section className='Logos'>
<img src={Facebook} alt="Logo Historical" className ="Image-logo-Facebook"/>
<img src= {YouTube}  alt="Logo Historical" className ="Image-logo-YouTube"/>
<img src= {Twitter}  alt="Logo Historical" className ="Image-logo-Twitter"/>
<img src={Instagram}  alt="Logo Historical" className="Image-logo-Instagram"/>
</section>
<section className='Services'>
<h3>HOME</h3>
<h3>SERVICES</h3>
<h3>TERMS</h3>
<h3>ABOUT</h3>
<h3>PRIVACY POLICY</h3>

</section>
<section className='all-rights-reserved'>
<p>@2026 Historical-library all rights reserved</p>

</section>

</section>



)

}


export default Footer;