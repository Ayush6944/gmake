import React from "react";

const Head = () => {
  return (
    <header className="header-area">
      <div className="menu-area">
        <div className="container">
          <div className="second-menu">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-2">
                <div className="logo">
                  <a href="index.html">
                    <img src="img/logo/logo.png" alt="logo" />
                  </a>
                </div>
              </div>
              <div className="col-xl-8 col-lg-8 text-center">
                <div className="main-menu">
                  <nav id="mobile-menu" className="nav-menu">
                    <ul>
                      <li className="has-sub  text-dark">
                        <a href="index.html" >Home</a>
                      </li>
                      <li>
                        <a href="about.html">about me</a>
                      </li>
                      <li className="has-sub">
                        <a href="services.html">services</a>
                      </li>
                      <li>
                        <a href="portfolio.html">portfolio</a>
                      </li>
                      <li className="has-sub">
                        <a href="blog.html">news</a>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 d-none d-lg-block">
                <a href="index.html#contact" className="btn">
                  Get A Quote
                  <i className="fal fa-long-arrow-right" />
                </a>
              </div>
              <div className="col-12">
                <div className="mobile-menu" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Head;