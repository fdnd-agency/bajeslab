<div class="page">
  <svg class="bg" width="100%" height="100%" viewBox="0 0 1400 800" preserveAspectRatio="xMidYMid meet">
    <!-- Gele cirkel -->
    <path class="shape"
      d="M360,280 m-260,0 a260,260 0 1,0 520,0 a260,260 0 1,0 -520,0"
      stroke="#FEDE4F" stroke-width="6" data-fill="#FEDE4F" />
    
    <!-- Blauwe driehoek -->
    <path class="shape"
      d="M650,420 L830,120 L1010,420 Z"
      stroke="#87BAE5" stroke-width="6" data-fill="#87BAE5" />
    
    <!-- Rode vierkant -->
    <path class="shape"
      d="M1020,420 H1240 V640 H1020 Z"
      stroke="#EE6B75" stroke-width="6" data-fill="#EE6B75" />
  </svg>

  <div class="img img-left"></div>
  <div class="img img-top"></div>
  <div class="img img-right"></div>

  <h1 class="title">
    {title}
  </h1>
</div>

<div class="page2"></div>

<style>
  .shape { 
    fill: transparent; 
  }
  
  .page { 
    position: relative; 
    width: 100%; 
    height: 100vh; 
    background-color: rgb(255, 255, 255);
  }
  
  .page2 { 
    height: 100vh; 
    background: #f0f0f0; 
  }
  
  .bg { 
    position: absolute; 
    top: 0; 
    left: 0; 
    width: 100%;
    height: 100%;
  }
  
  .img {
    position: absolute;
    cursor: pointer;
    transition: box-shadow 0.3s ease;
  }
  
  .img:hover {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
  
  .img-left { 
    top: 10%;
    left: 6%;
    width: 30vw;
    height: 35vh;
    background: #FBAE52; 
  }
  
  .img-top { 
    top: 20%;
    left: 48%;
    width: 9vw;
    height: 21vh;
    background: #C8A5CD; 
  }
  
  .img-right { 
    top: 43%;
    left: 64%;
    width: 14vw;
    height: 28vh;
    background: #BCD765; 
  }
  
  .title { 
    position: absolute; 
    bottom: 5vh; 
    left: 5vw; 
    font-size: clamp(3rem, 8vw, 120px);
    font-weight: 800;
    color: rgb(37, 37, 37); 
    text-transform: uppercase;
    max-width: 90vw;
    perspective: 400px; /* voor 3D effect */
  }

  @media (max-width: 1000px) {
    .img-left { 
      top: 8%;
      left: 5%;
      width: 45vw;
      height: 25vh;
    }
    
    .img-top { 
      top: 35%;
      left: 52%;
      width: 20vw;
      height: 15vh;
    }
    
    .img-right { 
      top: 52%;
      left: 10%;
      width: 35vw;
      height: 22vh;
    }
  }
</style>