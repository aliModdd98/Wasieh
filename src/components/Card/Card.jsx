import React, { useEffect } from 'react'
import "./CardStyle.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Card = ({id,img,title,description}) => {
    const isEven = (id) => id % 2 === 0;
    useEffect(() => {
      AOS.init({
        duration: 1000,   });
    }, []);
    return (
    <div className='container'>
<div className={`card w-100 col-lg-12 mb-5 shadowCard d-flex justify-content-center align-items-center overflow-hidden ${isEven(id) ? 'even-id' : 'odd-id'}`} style={{ height: 'auto' }}
 data-aos={isEven(id) ? "fade-right" : "fade-left"}  data-aos-delay={`${id * 2000}`}>
  <div className={`row  g-0 ${isEven(id) ? 'flex-row' : 'flex-row-reverse'}`}>
     <div className="col-md-4 ">
      <img src={img} className="img-fluid rounded-start animationImg" alt="Features"/>
    </div>
    <div className="col-md-8 d-flex justify-content-center align-items-center">
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{description}</p>
            </div>
    </div>
  </div>
</div>

    </div>
  )
}
