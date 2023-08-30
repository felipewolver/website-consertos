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
    window.location = "https://api.whatsapp.com/send?phone=5521982065489&text=A%20sua%20Solu%C3%A7%C3%A3o%20est%C3%A1%20aqui!%20Fale%20comigo%20agora%20mesmo.%20";
  }

  setTimeout(redirectPage, 4000);


  return (

      <section className="container">
          <div className="first-section flex">
            <div className="logo">
              <a href="#" className="flex fw-7 fs-30"> 
                  <span> Info Force </span>
                  <span> Tech </span>
              </a>
            </div>
            
            <div className="section-title flex flex-center text-center px">
              <h1 > Obrigado por confiar em nosso trabalho! </h1>
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