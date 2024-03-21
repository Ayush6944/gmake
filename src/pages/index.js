import React from 'react';

const Index = () => {
    return (
        
    <>
  <meta charSet="utf-8" />
  <meta httpEquiv="x-ua-compatible" content="ie=edge" />
  {/* <title>Gmaakeup - Makeup Artist HTML Template</title> */}
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
    <div
      className="modal fade bs-example-modal-lg search-bg popup1"
      tabIndex={-1}
      role="dialog"
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content search-popup">
          <div className="text-center">
            <a
              href="#"
              className="close2"
              data-dismiss="modal"
              aria-label="Close"
            >
              × close
            </a>
          </div>
          <div className="row search-outer">
            <div className="col-md-11">
              <input type="text" placeholder="Search for products..." />
            </div>
            <div className="col-md-1 text-right">
              <a href="#">
                <i className="fa fa-search" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* /search-popup */}
    {/* slider-area */}
    <section id="home" className="slider-area slider-four fix p-relative">
      <div className="slider-active">
        <div
          className="single-slider slider-bg d-flex align-items-center"
          style={{ backgroundImage: "url(img/slider/slider_img01.png)" }}
        >
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-7 col-md-7">
                <div className="slider-content s-slider-content mt-60">
                  <h5 data-animation="fadeInUp" data-delay=".4s">
                    Makeup Artist
                  </h5>
                  <h2 data-animation="fadeInUp" data-delay=".4s">
                    WELCOM TO GMAAEUP
                    <br />
                    Beauty sAlony
                  </h2>
                  <div
                    className="slider-btn mt-30"
                    data-animation="fadeInUp"
                    data-delay=".4s"
                  >
                    <a
                      href="#about"
                      className="btn ss-btn active mr-15 smoth-scroll"
                    >
                      Learn More <i className="fal fa-long-arrow-right" />
                    </a>
                    <a
                      href="https://www.youtube.com/watch?v=gyGsPlt06bo"
                      className="video-i popup-video"
                    >
                      <i className="fas fa-play" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-5"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* slider-area-end */}
    {/* about-area */}
    <section
      id="about"
      className="about-area about-p pt-120 pb-120 p-relative"
      style={{ background: "#000" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="s-about-img p-relative">
              <img src="img/bg/about-us.png" alt="about-img" />
              <div className="about-text second-about">
                <span>
                  30 <sub>+</sub>
                </span>
                <p>Years Experience</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 pl-60">
            <div className="about-content s-about-content">
              <div className="about-title second-atitle pb-25">
                <h5>About Me</h5>
                <h2>Your Beauty and Success Starts Here</h2>
              </div>
              <p>
                Hello, I'm Olivia a Professional Makeup Artist. Quisque luctus
                tincidunt enim dapibus pharetra neue ultricies at. Morbi dapibus
                mauris id scelerisque placerat nula massa lacinia orci in
                facilisis nulla quam volutpat lectus. Nunc elementum ante
                commodo felis hendrerit.{" "}
              </p>
              <div className="about-content3">
                <div className="row">
                  <div className="col-md-12">
                    <ul className="green">
                      <li>
                        Fringilla risus nec, luctus mauris orci auctor purus
                        euismod at pretium purus pretium ligula rutrum tempor
                        sapien .
                      </li>
                      <li>
                        Nemo ipsam egestas volute turpis dolores ut aliquam
                        quaerat sodales sapien undo pretium purus .
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="slider-btn mt-20">
                <a href="about.html" className="btn ss-btn smoth-scroll">
                  Learn More <i className="fal fa-long-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* about-area-end */}
    {/* brand-area */}
    <section
      className="brand-area pt-120 pb-120"
      style={{ background: "#222" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="section-title mb-50 wow fadeInLeft  animated"
              data-animation="fadeInLeft"
              data-delay=".4s"
            >
              <h5>users</h5>
              <h2>worldwide users</h2>
            </div>
          </div>
        </div>
        <div className="row brand-active">
          <div className="col-xl-2">
            <div className="single-brand">
              <img src="img/brand/b-logo1.png" alt="img" />
            </div>
          </div>
          <div className="col-xl-2">
            <div className="single-brand">
              <img src="img/brand/b-logo2.png" alt="img" />
            </div>
          </div>
          <div className="col-xl-2">
            <div className="single-brand">
              <img src="img/brand/b-logo3.png" alt="img" />
            </div>
          </div>
          <div className="col-xl-2">
            <div className="single-brand">
              <img src="img/brand/b-logo4.png" alt="img" />
            </div>
          </div>
          <div className="col-xl-2">
            <div className="single-brand">
              <img src="img/brand/b-logo3.png" alt="img" />
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* brand-area-end */}
    {/* services-three-area */}
    <section
      id="services"
      className="services-area services-bg  p-relative fix pt-120 pb-90"
      style={{ background: "#000" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div
              className="section-title mb-50 wow fadeInLeft  animated text-center"
              data-animation="fadeInLeft"
              data-delay=".4s"
            >
              <h5>What We Do</h5>
              <h2>Makeup Services</h2>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div
              className="s-single-services text-center mb-30 wow fadeInUp  animated"
              data-animation="fadeInUp"
              data-delay=".2s"
            >
              <div className="services-icon">
                <img src="img/icon/se-icon4.png" alt="img" />
              </div>
              <div className="second-services-content">
                <h3>
                  <a href="services-detail.html">Face Makeup</a>
                </h3>
                <p>
                  Author of Die Vertretung beim Rechtsgeschälft. Agency, in law,
                  the relationship that exists.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div
              className="s-single-services text-center active mb-30 wow fadeInUp  animated"
              data-animation="fadeInUp"
              data-delay=".4s"
            >
              <div className="services-icon">
                <img src="img/icon/se-icon5.png" alt="img" />
              </div>
              <div className="second-services-content">
                <h3>
                  <a href="services-detail.html">Eye Makeup</a>
                </h3>
                <p>
                  Author of Die Vertretung beim Rechtsgeschälft. Agency, in law,
                  the relationship that exists.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div
              className="s-single-services text-center mb-30 wow fadeInUp  animated"
              data-animation="fadeInUp"
              data-delay=".6s"
            >
              <div className="services-icon">
                <img src="img/icon/se-icon6.png" alt="img" />
              </div>
              <div className="second-services-content">
                <h3>
                  <a href="services-detail.html">Hair Makeup</a>
                </h3>
                <p>
                  Author of Die Vertretung beim Rechtsgeschälft. Agency, in law,
                  the relationship that exists.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div
              className="s-single-services text-center mb-30 wow fadeInUp  animated"
              data-animation="fadeInUp"
              data-delay=".8s"
            >
              <div className="services-icon">
                <img src="img/icon/se-icon7.png" alt="img" />
              </div>
              <div className="second-services-content">
                <h3>
                  <a href="services-detail.html">Bridal Makeup</a>
                </h3>
                <p>
                  Author of Die Vertretung beim Rechtsgeschälft. Agency, in law,
                  the relationship that exists.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* services-three-area */}
    {/* testimonial-area */}
    <section
      className="testimonial-area text-center pt-120 pb-95 "
      style={{ backgroundImage: "url(img/bg/testimonial-bg.png)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="section-title text-center mb-50 wow fadeInDown  animated"
              data-animation="fadeInDown"
              data-delay=".4s"
            >
              <h5>testimonials</h5>
              <h2>some users feedback</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div
              className="testimonial-active wow fadeInUp  animated"
              data-animation="fadeInUp"
              data-delay=".4s"
            >
              <div className="single-testimonial-outer">
                <div className="single-testimonial">
                  <div className="qt-img">
                    <img src="img/testimonial/qt-icon.png" alt="img" />
                  </div>
                  <p>
                    “Etiam sodales congue consequat. Aenean vitae ullamcorper
                    leo. Pellentesque condimentum ex ut erat posuere, quis
                    tincidunt augue semper. Cras congue nulla sed quam hendrerit
                    euismod”
                  </p>
                  <div className="testi-author">
                    <img src="img/testimonial/testi_avatar.png" alt="img" />
                    <div className="ta-info">
                      <h6>Alexis browni JR.</h6>
                      <span>founder of alxis co.</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single-testimonial-outer">
                <div className="single-testimonial">
                  <div className="qt-img">
                    <img src="img/testimonial/qt-icon.png" alt="img" />
                  </div>
                  <p>
                    “Etiam sodales congue consequat. Aenean vitae ullamcorper
                    leo. Pellentesque condimentum ex ut erat posuere, quis
                    tincidunt augue semper. Cras congue nulla sed quam hendrerit
                    euismod”.
                  </p>
                  <div className="testi-author">
                    <img src="img/testimonial/testi_avatar.png" alt="img" />
                    <div className="ta-info">
                      <h6>Paul M. Matney</h6>
                      <span>Lawyer</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single-testimonial-outer">
                <div className="single-testimonial">
                  <div className="qt-img">
                    <img src="img/testimonial/qt-icon.png" alt="img" />
                  </div>
                  <p>
                    “Etiam sodales congue consequat. Aenean vitae ullamcorper
                    leo. Pellentesque condimentum ex ut erat posuere, quis
                    tincidunt augue semper. Cras congue nulla sed quam hendrerit
                    euismod”
                  </p>
                  <div className="testi-author">
                    <img src="img/testimonial/testi_avatar.png" alt="img" />
                    <div className="ta-info">
                      <h6>Alexis browni JR.</h6>
                      <span>founder of alxis co.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* testimonial-area-end */}
    {/* gallery-area */}
    <section
      id="portfolio"
      className="pt-120 pb-90"
      style={{ background: "#222" }}
    >
      <div className="container">
        <div className="portfolio ">
          <div className="row align-items-center mb-50">
            <div className="col-lg-5">
              <div
                className="section-title wow fadeInLeft  animated"
                data-animation="fadeInLeft"
                data-delay=".4s"
              >
                <h5>portfolio</h5>
                <h2>creative works</h2>
              </div>
            </div>
            <div className="col-lg-7">
              <div
                className="my-masonry text-right wow fadeInRight  animated"
                data-animation="fadeInRight"
                data-delay=".4s"
              >
                <div className="button-group filter-button-group ">
                  <button className="active" data-filter="*">
                    all works
                  </button>
                  <button data-filter=".financial">Face Makeup</button>
                  <button data-filter=".banking">Eye Makeup</button>
                  <button data-filter=".insurance">Hair Makeup</button>
                  <button data-filter=".family">Bridal Makeup</button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="grid col3 wow fadeInUp  animated"
            data-animation="fadeInUp"
            data-delay=".4s"
          >
            <div className="grid-item financial">
              <a className="popup-image" href="img/gallery/protfolio-img01.jpg">
                <figure className="gallery-image">
                  <img
                    src="img/gallery/protfolio-img01.jpg"
                    alt="img"
                    className="img"
                  />
                </figure>
              </a>
            </div>
            <div className="grid-item financial banking">
              <a className="popup-image" href="img/gallery/protfolio-img02.jpg">
                <figure className="gallery-image">
                  <img
                    src="img/gallery/protfolio-img02.jpg"
                    alt="img"
                    className="img"
                  />
                </figure>
              </a>
            </div>
            <div className="grid-item insurance">
              <a className="popup-image" href="img/gallery/protfolio-img03.jpg">
                <figure className="gallery-image">
                  <img
                    src="img/gallery/protfolio-img03.jpg"
                    alt="img"
                    className="img"
                  />
                </figure>
              </a>
            </div>
            <div className="grid-item family">
              <a className="popup-image" href="img/gallery/protfolio-img04.jpg">
                <figure className="gallery-image">
                  <img
                    src="img/gallery/protfolio-img04.jpg"
                    alt="img"
                    className="img"
                  />
                </figure>
              </a>
            </div>
            <div className="grid-item business">
              <a className="popup-image" href="img/gallery/protfolio-img05.jpg">
                <figure className="gallery-image">
                  <img
                    src="img/gallery/protfolio-img05.jpg"
                    alt="img"
                    className="img"
                  />
                </figure>
              </a>
            </div>
            <div className="grid-item financial">
              <a className="popup-image" href="img/gallery/protfolio-img06.jpg">
                <figure className="gallery-image">
                  <img
                    src="img/gallery/protfolio-img06.jpg"
                    alt="img"
                    className="img"
                  />
                </figure>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* gallery-area-end */}
    {/* blog-area */}
    <section
      id="blog"
      className="blog-area  p-relative pt-120 pb-90 fix"
      style={{ background: "#000" }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="section-title center-align mb-50 text-center">
              <h5>Read</h5>
              <h2>Latest News</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-4">
            <div className="single-post2 mb-30  wow fadeInDown  animated">
              <div className="blog-thumb2">
                <a href="blog-details.html">
                  <img src="img/blog/inner_b1.jpg" alt="img" />
                </a>
              </div>
              <div className="blog-content2">
                <div className="b-meta">
                  <div className="row">
                    <div className="col-lg-12 col-md-12">
                      <div className="meta-info">
                        <ul>
                          <li>
                            <i className="fal fa-user" /> Admin
                          </li>
                          <li>
                            <i className="fal fa-calendar-alt" /> 24th March
                            2021
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <h4>
                      <a href="blog-details.html">
                        Fusce suscipit arcu velit id scelerisque tempus est
                      </a>
                    </h4>
                    <p>
                      Cras ultrices maximus arcu ut aqam. Aliquam daber a diam
                      ante.
                    </p>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-lg-12 col-md-12">
                    <div className="blog-btn">
                      <a href="blog-details.html">
                        <i className="fas fa-angle-right" /> Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className="single-post2 mb-30  wow fadeInUp  animated">
              <div className="blog-thumb2">
                <a href="blog-details.html">
                  <img src="img/blog/inner_b2.jpg" alt="img" />
                </a>
              </div>
              <div className="blog-content2">
                <div className="b-meta">
                  <div className="row">
                    <div className="col-lg-12 col-md-12">
                      <div className="meta-info">
                        <ul>
                          <li>
                            <i className="fal fa-user" /> Admin
                          </li>
                          <li>
                            <i className="fal fa-calendar-alt" /> 24th March
                            2021
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <h4>
                      <a href="blog-details.html">
                        Fusce suscipit arcu velit id scelerisque tempus est
                      </a>
                    </h4>
                    <p>
                      Cras ultrices maximus arcu ut aqam. Aliquam daber a diam
                      ante.
                    </p>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-lg-12 col-md-12">
                    <div className="blog-btn">
                      <a href="blog-details.html">
                        <i className="fas fa-angle-right" /> Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className="single-post2 mb-30 wow fadeInDown  animated">
              <div className="blog-thumb2">
                <a href="blog-details.html">
                  <img src="img/blog/inner_b3.jpg" alt="img" />
                </a>
              </div>
              <div className="blog-content2">
                <div className="b-meta">
                  <div className="row">
                    <div className="col-lg-12 col-md-12">
                      <div className="meta-info">
                        <ul>
                          <li>
                            <i className="fal fa-user" /> Admin
                          </li>
                          <li>
                            <i className="fal fa-calendar-alt" /> 24th March
                            2021
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <h4>
                      <a href="blog-details.html">
                        Fusce suscipit arcu velit id scelerisque tempus est
                      </a>
                    </h4>
                    <p>
                      Cras ultrices maximus arcu ut aqam. Aliquam daber a diam
                      ante.
                    </p>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-lg-12 col-md-12">
                    <div className="blog-btn">
                      <a href="blog-details.html">
                        <i className="fas fa-angle-right" /> Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* blog-area-end */}
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
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">Support</a>
                  </li>
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

        
    );
}

export default Index;
