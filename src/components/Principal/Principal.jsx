// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import images from "../../images";

import "./principal.css";


const Principal = () => {

  const [count, setCount] = useState(5); 
  
  useEffect(() => {
    const redirectCount = () => {
      
      setCount(count -1);
    }
    
    setTimeout(redirectCount, 1000);

  }, [count]);

  const redirectPage = () => {
    window.location = "https://www.google.com";
  }

  //setTimeout(redirectPage, 4000);


  return (

      <section className="container">
          <div className="first-section flex">
            <div className="logo">
              <a href="#" className="flex fw-7 fs-30"> 
                  <span> Info Force </span>
                  <span> Tech </span>
              </a>
            </div>
            
            <div className="section-title flex flex-center">
              <h1 className=""> Obrigado por confiar em nosso trabalho! </h1>
              <p className="fs-36 fw-5"> {count} </p>
              <p className="fs-22 fw-5"> Aguarde... </p>
              <p className="fs-22 fw-5"> Você será redirecionado para um Atendente via <span className="fw-7 text-cap"> whatsapp </span> </p>
              <img src={images.whatsapp_img} alt="Whatsapp_images" />
            </div>
          </div>

      </section>
  );
}

export default Principal;