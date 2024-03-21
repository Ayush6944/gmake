import React from 'react';

const Contact = () => {
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
    {/* breadcrumb-area */}
    <section
      className="breadcrumb-area d-flex align-items-center"
      style={{ backgroundImage: "url(img/testimonial/test-bg.png)" }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-12 col-lg-12">
            <div className="breadcrumb-wrap text-left">
              <div className="breadcrumb-title">
                <h2>Contact Us</h2>
                <div className="breadcrumb-wrap">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Contact Us
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* breadcrumb-area-end */}
    {/* contact-area */}
    <section
      id="contact"
      className="contact-area after-none contact-bg p-relative fix pt-90 pb-30"
      style={{ background: "#222" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="contact-info">
              <div
                className="single-cta pb-30 mb-30 wow fadeInUp animated"
                data-animation="fadeInDown animated"
                data-delay=".2s"
              >
                <div className="f-cta-icon">
                  <i className="far fa-map" />
                </div>
                <h5>Office Address</h5>
                <p>
                  380 St Kilda Road, Melbourne <br />
                  VIC 3004, Australia
                </p>
              </div>
              <div
                className="single-cta pb-30 mb-30 wow fadeInUp animated"
                data-animation="fadeInDown animated"
                data-delay=".2s"
              >
                <div className="f-cta-icon">
                  <i className="far fa-clock" />
                </div>
                <h5>Working Hours</h5>
                <p>
                  Monday to Friday 09:00 to 18:30 <br />
                  Saturday 15:30
                </p>
              </div>
              <div
                className="single-cta pb-30 mb-30 wow fadeInUp animated"
                data-animation="fadeInDown animated"
                data-delay=".2s"
              >
                <div className="f-cta-icon">
                  <i className="far fa-envelope-open" />
                </div>
                <h5>Message Us</h5>
                <p>
                  {" "}
                  <a href="#">support@example.com</a>
                  <br />
                  <a href="#">info@example.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* contact-area-end */}
    {/* contact-area */}
    <section className="contact-area contact-bg p-relative fix pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="contact-img2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212867.83634504632!2d-112.24455686962897!3d33.52582710700138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b743829374b03%3A0xabaac255b1e43fbe!2sPlexus%20Worldwide!5e0!3m2!1sen!2sin!4v1618567685329!5m2!1sen!2sin"
                width={100}
                height={620}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contact-bg02 pr-70 pl-30">
              <div className="section-title center-align">
                <h5>Get A Quote</h5>
                <h2>Make An Appointment</h2>
              </div>
              <form
                action="mail.php"
                method="post"
                className="contact-form mt-30"
              >
                <div className="row">
                  <div className="col-lg-12">
                    <div className="contact-field p-relative c-name mb-20">
                      <input
                        type="text"
                        id="firstn"
                        name="firstn"
                        placeholder="First Name"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="contact-field p-relative c-subject mb-20">
                      <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Eamil"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="contact-field p-relative c-subject mb-20">
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        placeholder="Phone No."
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="contact-field p-relative c-message mb-30">
                      <textarea
                        name="message"
                        id="message"
                        cols={30}
                        rows={10}
                        placeholder="Write comments"
                        defaultValue={""}
                      />
                    </div>
                    <div className="slider-btn">
                      <button
                        className="btn ss-btn"
                        data-animation="fadeInRight"
                        data-delay=".8s"
                      >
                        <span>Submit Now</span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* contact-area-end */}
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

        </div>
    );
}

export default Contact;
