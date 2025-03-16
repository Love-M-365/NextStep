import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import heroImage from './Photos/a.jpg'; 
import img1 from './Photos/n.png'
import { Link } from 'react-router-dom';
import img3 from './Photos/c.jpg'
import img4 from './Photos/d.jpg'


function WelcomePage() {
    return (
        <div className="container-fluid vh-100 d-flex flex-column">
            
            <header className="row bg-dark text-white py-5 align-items-center">
                <div className="col-md-6 text-center text-md-start px-5">
                    <h1 className="display-4">
                        Welcome to <span className="text-success" style={{fontFamily:"Orbitron"}}>NextStep</span>
                    </h1>
                    <p className="lead">
                        Your AI-powered guide to discovering and building your ideal career path.
                    </p>
                    <div className="mt-4">
                        <button className="btn btn-success me-3 px-4"><Link to="/questions" style={{textDecoration:"none",color:"white"}}>Get Started</Link></button>
                        <button className="btn btn-outline-light px-4">Learn More</button>
                    </div>
                </div>

                <div className="col-md-6 text-center">
                    <img 
                        style={{maxHeight:"20rem",maxWidth:"20rem"}}
                        src={img1} 
                        alt="Career Guidance" 
                        className="hero-image img-fluid"
                    />
                </div>
            </header>
            <div id="carouselExampleCaptions" className="carousel slide m-3">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" style={{backgroundColor:"black"}}>
      <img src={heroImage} className="d-block w-100" style={{maxHeight:"50rem",maxWidth:"80rem",opacity:"0.5"}}alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h3>🚀 Growth Tracking</h3>
        <p>Track your progress and unlock new opportunities.</p>
      </div>
    </div>
    <div className="carousel-item" style={{backgroundColor:"black"}}>
      <img src={img3} className="d-block w-100" style={{maxHeight:"50rem",maxWidth:"80rem" ,opacity:"0.5",backgroundColor:"black"}} alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h3>🧠 Personalized Guidance</h3>
        <p>AI-driven insights tailored to your skills and goals.</p>
      </div>
    </div>
    <div className="carousel-item" style={{backgroundColor:"black"}}>
      <img src={img4} className="d-block w-100"  style={{maxHeight:"50rem",maxWidth:"80rem",opacity:"0.5",backgroundColor:"black"}} alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h3>📈 Career Roadmaps</h3>
        <p>Step-by-step career paths for achieving your dream job.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
          

            {/* Footer */}
            <footer className="bg-dark text-white text-center py-3 mt-auto">
                Empowering careers with data-driven insights — <b>NextStep</b> © {new Date().getFullYear()}
            </footer>
        </div>
    );
}

export default WelcomePage;
