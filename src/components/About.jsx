import React from 'react'
import {Link} from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="container py-5 my-4">
        <div className="row">
          <div className="col-md-6">
            <h1 className='text-primary fw-bold mb-3'>About Us</h1>
            <p className="lead mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe incidunt nulla, possimus maxime nostrum facere. Velit error repudiandae sed iusto dolores magnam porro, dolorem adipisci doloribus sequi praesentium, laborum id.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita accusamus et illum quidem unde eos, atque ipsa ea beatae perferendis blanditiis ipsum natus incidunt, nisi sint, modi quae laboriosam porro.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, nostrum quis tempore nam voluptatum quae, laboriosam rem quisquam consequuntur, perspiciatis doloremque molestiae neque harum excepturi nemo optio quasi dolore? Praesentium.
            </p>
            <Link to="/contact" className='btn btn-outline-primary px-3'>Contact Us</Link>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img src="/assets/images/about1.jpg" alt="About Us" height="400px" width="400px"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
