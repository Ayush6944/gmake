import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Portfolio = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae');
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };


    fetchData();
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  const { user } = userData;




    return (
        <div>
            <>
  <meta charSet="utf-8" />
  <meta httpEquiv="x-ua-compatible" content="ie=edge" />
  <title>Gmaakeup - Makeup Artist HTML Template</title>
  <meta name="description" content="" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="shortcut icon" type="image/x-icon" href="img/favicon.ico" />
  {/* Place favicon.ico in the root directory */}
  {/* CSS here */}
  <link rel="stylesheet" href="css/bootstrap.min.css" />
  <link rel="stylesheet" href="css/animate.min.css" />
  <link rel="stylesheet" href="css/magnific-popup.css" />
  <link rel="stylesheet" href="fontawesome/css/all.min.css" />
  <link rel="stylesheet" href="font-flaticon/flaticon.css" />
  <link rel="stylesheet" href="css/dripicons.css" />
  <link rel="stylesheet" href="css/slick.css" />
  <link rel="stylesheet" href="css/meanmenu.css" />
  <link rel="stylesheet" href="css/default.css" />
  <link rel="stylesheet" href="css/style.css" />
  <link rel="stylesheet" href="css/responsive.css" />
  {/* header */}
  
  {/* header-end */}
  {/* main-area */}
  <main>
    {/* search-popup */}
    {/* main area started here ......................... */}
    <div className="container">
      {userData && (
        <>
          <section id="hero" className='margin'>
            <div className="r">
              <div className="m-5">
                {/* <img src={userData.about.avatar.url} alt="Avatar" className="img-fluid rounded-circle" /> */}
                <h1>{user.about.name}</h1>
                <h2>{user.about.title}</h2>
                <p>{user.about.description}</p>
              </div>
              <div className="col">
              <section className="services">
        <h2><u>SERVICES</u></h2>
        <br/>
        <div className="service-list">
          {user.services.map((service) => (
            <div key={service._id} className="service">
              <h3>{service.name}</h3>
              <p>{service.desc}</p>
              <p>Charge: {service.charge}</p>
            </div>
          ))}
        </div>
      </section>

              </div>
            </div>
          </section>

          <section id="projects" className="mt-5">
            <h2>Projects</h2>
            <div className="row">
              {user.projects.map((project, index) => (
                <div key={index} className="col-md-4 mb-4">
                  <img src={project.image.url} alt={project.title} className="img-fluid" />
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="skill" className="mt-5">
            <h2>Skills</h2>
            <div className="row skill">
              {user.skills.map((skill, index) => (
                <div key={index} className="col-md-3 mb-3">
                  <img src={skill.image.url} alt={skill.name} className="img-fluid" />
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="testimonials" className="mt-5">
          {/* <section className="testimonials"> */}
        <h2>Testimonials</h2>
        <div className="testimonial-list">
          {user.testimonials.map((testimonial) => (
            <div key={testimonial._id} className="testimonial">
              <h3>{testimonial.name}</h3>
              <p>{testimonial.review}</p>
              {/* Render other testimonial details as needed */}
            </div>
          ))}
        </div>
      </section>

          <section id="social-media" className="mt-8">
          {/* <section className="social-media"> */}
        <h2>Social Media Handles</h2>
        <div className="social-media-list ">
          {user.social_handles.map((handle) => (
            <a key={handle._id} href={handle.url} target="_blank" rel="noopener noreferrer">
              <img src={handle.image.url} alt={handle.platform} />
            </a>
          ))}
        </div>
      </section>
        </>
      )}
    </div>
      
    {/* gallery-area-end */}
    {/* newslater-area */}
    <section
      className="newslater-area pt-95 pb-100"
      style={{ background: "#cc866c" }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-8 col-lg-8">
            <div className="section-title">
              <h2>Get Update By Signup Our Newsletter</h2>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4">
            <form
              name="ajax-form"
              action="#"
              method="post"
              className="contact-form newslater p-relative"
            >
              <div className="form-group">
                <input
                  className="form-control"
                  id="email2"
                  name="email"
                  type="email"
                  placeholder="Email Address..."
                  defaultValue=""
                  required=""
                />
                <button type="submit" className="btn btn-custom" id="send2">
                  Join Now
                </button>
              </div>
              {/* /Form-email */}
            </form>
          </div>
        </div>
      </div>
    </section>
    {/* newslater-aread-end */}
  </main>
  {/* main-area-end */}
  {/* footer */}
  <footer className="footer-bg footer-p" style={{ background: "#131819" }}>
    <div className="footer-top  pt-70  pb-40">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xl-3 col-lg-3 col-sm-6">
            <div className="footer-widget mb-30">
              <div className="f-widget-title">
                <img src="img/logo/logo.png" alt="img" />
              </div>
              <p>
                Nam purus nibh, luctus at cursus vel, efficitur eu dui. Aenean
                tellus massa, euismod eu dictum in, tincidunt ac lacus. Quisque
                vitae tellus a nibh sollicitudin viverra id sed libero.
              </p>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-sm-6">
            <div className="footer-widget mb-30">
              <div className="f-widget-title">
                <h2>Our Links</h2>
              </div>
              <div className="footer-link">
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="about.html"> About Us</a>
                  </li>
                  <li>
                    <a href="services.html"> Services </a>
                  </li>
                  <li>
                    <a href="contact.html"> Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-sm-6">
            <div className="footer-widget mb-30">
              <div className="f-widget-title">
                <h2>Our Services</h2>
              </div>
              <div className="footer-link">
                <ul>
                  <li>
                    <a href="index.html">FAQ</a>
                  </li>
                  <li>
                    <a href="#">Support</a>
                  </li>
                  <li>
                    <a href="#">Privercy</a>
                  </li>
                  <li>
                    <a href="index.html">Term &amp; Conditions</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-sm-6">
            <div className="footer-widget mb-30">
              <div className="f-widget-title">
                <h2>Our Services</h2>
              </div>
              <div className="f-contact">
                <ul>
                  <li>
                    <i className="icon fal fa-phone" />
                    <span>
                      1800-121-3637
                      <br />
                      +91-7052-101-786
                    </span>
                  </li>
                  <li>
                    <i className="icon fal fa-envelope" />
                    <span>
                      <a href="mailto:info@example.com">info@example.com</a>
                      <br />
                      <a href="mailto:help@example.com">help@example.com</a>
                    </span>
                  </li>
                  <li>
                    <i className="icon fal fa-map-marker-check" />
                    <span>
                      1247/Plot No. 39,
                      <br /> LHB Colony, Kanpur
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-sm-6">
            <div className="footer-widget mb-30">
              <div className="f-widget-title mb-30">
                <h2>Subscribe To Our Newsletter</h2>
              </div>
              <div className="footer-link">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212867.83634504632!2d-112.24455686962897!3d33.52582710700138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b743829374b03%3A0xabaac255b1e43fbe!2sPlexus%20Worldwide!5e0!3m2!1sen!2sin!4v1618567685329!5m2!1sen!2sin"
                  width={100}
                  height={160}
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright-wrap">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            Copyright © 2021 Zcubedesign. All rights reserved.
          </div>
          <div className="col-lg-6 text-right text-xl-right">
            <ul>
              <li>
                <a href="#">Privercy</a>
              </li>
              <li>
                <a href="#">Term &amp; Conditions</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* footer-end */}
  {/* JS here */}
</>

        </div>
    );
}

export default Portfolio;
