import React from 'react'
import "./Home.css";
const Home = () => {
  return (
    <div className="Home-Page bg-dark text-white container-fluid d-flex justify-content-center align-items-center">
      <div className="row container">
        <div
          className="col-lg-6 d-flex justify-content-center align-items-start flex-column"
          style={{ height: "91.5vh" }}
        >
          <h2 style={{ fontSize: "80px" }}>BOOK STORE</h2>
                  <h3 style={{ fontSize: "50px" }}>FOR YOU</h3>
                  <p className="mb-0" style={{color:"silver"}}>Checkout The Books From Here.</p>
          <button className="viewBook my-3">View books</button>
        </div>
        <div
          className="col-lg-6 d-flex justify-content-center align-items-end flex-column"
          style={{ height: "91.5vh" }}
        >
          <img
            className="img-fluid homeimg"
            src="https://i.pinimg.com/736x/86/57/54/865754320af294269751c7112af8573a.jpg"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
}

export default Home
