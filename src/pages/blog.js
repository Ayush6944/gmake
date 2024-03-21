import React from 'react';

const Bloge = () => {
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
  <header className="header-area">
    <div id="header-sticky" className="menu-area">
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
                <nav id="mobile-menu">
                  <ul>
                    <li className="has-sub">
                      <a href="index.html">Home</a>
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
              <a href="index.html#contact" className="btn ss-btn smoth-scroll">
                Get A Quote <i className="fal fa-long-arrow-right" />
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
  {/* header-end */}
  {/* main-area */}
  <main>
    {/* search-popup */}
    <div
      className="modal fade bs-example-modal-lg search-bg popup1"
      tabIndex={-1}
      role="dialog"
    >
      <div className="modal-dialog modal-lg" >
        <div className="modal-content search-popup">
          <div className="text-center">
            <a
              href="#"
              className="close2"
              data-dismiss="modal"
              aria-label="Close"
            >
              #
            </a>
          </div>
          <div className="row search-outer">
            <div className="col-md-11">
              <input type="text" placeholder="Search for products..." />
            </div>
            <div className="col-md-1 text-right">
              <a href="#">
                <i className="fa fa-search" aria-hidden="true" />hh
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
                <h2>Blog Details</h2>
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
                        Blog Details
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
    {/* inner-blog */}
    <section className="inner-blog b-details-p pt-120 pb-105 ">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="blog-details-wrap">
              <div className="details__content pb-30">
                <h2>
                  With our vastly improved notifications system, users have more
                  control.
                </h2>
                <div className="meta-info">
                  <ul>
                    <li>
                      <i className="fal fa-eye" /> 100 Views
                    </li>
                    <li>
                      <i className="fal fa-comments" /> 35 Comments
                    </li>
                    <li>
                      <i className="fal fa-calendar-alt" /> 24th March 2021
                    </li>
                  </ul>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo amet set for your cool
                  happiness for lyour loyal city.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deser unt
                  mollit anim id est laborum. Sed ut perspiciatis unde omnis
                  iste natus error sit voluptatem accusant ium doloremque
                  laudantium, totam rem aperiam, eaque ipsa quae ab illo
                  inventore veritatis et quasi architecto beatae vitae dicta
                  sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                  asperna tur aut odit aut fugit, sed quia consequuntur magni
                  dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
                  quisq.
                </p>
                <blockquote>
                  <footer>By Rosalina Pong</footer>
                  <h3>
                    Viral dreamcatcher keytar typewriter, aest hetic offal
                    umami. Aesthetic polaroid pug pitchfork post-ironic.
                  </h3>
                </blockquote>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deser unt
                  mollit anim id est laborum. Sed ut perspiciatis unde omnis
                  iste natus error sit voluptatem accusant.
                </p>
                <div className="details__content-img">
                  <img src="img/blog/b_details01.jpg" alt="" />
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deser unt
                  mollit anim id est laborum. Sed ut perspiciatis unde omnis
                  iste natus error sit voluptatem accusan tium doloremque
                  laudantium, totam rem aperiam, eaque ipsa quae ab illo
                  inventore veritatis et quasi archi tecto beatae vitae dicta
                  sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                  asperna tur aut odit aut fugit, sed quia consequuntur magni
                  dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
                  quisquam est, qui dolorem ipsum quia dolor sit amet,
                  consectetur, adipisci velit, sed quia non num quam eius modi
                  tempora incidunt ut labore et dolore magnam aliquam quaerat
                  voluptatem. Lorem ipsum dolor sit amet,consectetur adipisicing
                  elit, sed do eiusmod incididunt.
                </p>
                <figure>
                  <img src="img/blog/b_details02.jpg" alt="" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    ali qua. Ut enim ad minim veniam, quis nostrud exercitation
                    ulla mco laboris nisi ut aliquip ex ea commodo
                    consequat.Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupida tat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum. Sed
                    ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam, eaque
                    ipsa quae abillo inventore veritatis et quasi architecto
                    beatae vitae dicta sunt explicabo.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    ali qua. Ut enim ad minim veniam, quis nostrud.
                  </p>
                </figure>
                <div className="row">
                  <div className="col-xl-12 col-md-12">
                    <div className="post__tag">
                      <h5>Releted Tags</h5>
                      <ul>
                        <li>
                          <a href="#">organic</a>
                        </li>
                        <li>
                          <a href="#">Foods</a>
                        </li>
                        <li>
                          <a href="#">tasty</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="posts_navigation pt-35 pb-35">
                <div className="row align-items-center">
                  <div className="col-xl-4 col-md-5">
                    <div className="prev-link">
                      <span>Prev Post</span>
                      <h4>
                        <a href="#">Tips Minimalist</a>
                      </h4>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-2 text-left text-md-center">
                    <a href="blog.html" className="blog-filter">
                      <img src="img/icon/c_d01.png" alt="" />
                    </a>
                  </div>
                  <div className="col-xl-4 col-md-5">
                    <div className="next-link text-right">
                      <span>next Post</span>
                      <h4>
                        <a href="#">Less Is More</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="related__post mt-45 mb-85">
                <div className="post-title">
                  <h4>Related Post</h4>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="related-post-wrap mb-30">
                      <div className="post-thumb">
                        <img src="img/blog/b_details03.jpg" alt="" />
                      </div>
                      <div className="rp__content">
                        <h3>
                          <a href="#">
                            Auis nostrud exercita ullamco laboris nisi ut
                          </a>
                        </h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectet ur adipisicing
                          elit, sed do eiusmod temp or incididunt ut labore et
                          dolore.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="related-post-wrap mb-30">
                      <div className="post-thumb">
                        <img src="img/blog/b_details04.jpg" alt="" />
                      </div>
                      <div className="rp__content">
                        <h3>
                          <a href="#">
                            {" "}
                            Excepteur sint occaecat cupida tat non proident
                          </a>
                        </h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectet ur adipisicing
                          elit, sed do eiusmod temp or incididunt ut labore et
                          dolore.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="avatar__wrap text-center mb-45">
                <div className="avatar-img">
                  <img src="img/blog/comment/avatar.png" alt="" />
                </div>
                <div className="avatar__info">
                  <h5>Rosalina William</h5>
                  <div className="avatar__info-social">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fab fa-behance" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin" />
                    </a>
                  </div>
                </div>
                <div className="avatar__wrap-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequa aute
                    irure dolor.
                  </p>
                </div>
              </div>
              <div className="comment__wrap pb-45">
                <div className="comment__wrap-title">
                  <h5>Comments</h5>
                </div>
                <div className="single__comment mb-35">
                  <div className="comments-avatar">
                    <img src="img/blog/comment/c_01.png" alt="" />
                  </div>
                  <div className="comment-text">
                    <div className="avatar-name mb-15">
                      <h6>ALina Kelian</h6>
                      <span>19th May 2021</span>
                      <a href="#" className="comment-reply">
                        <i className="fas fa-reply" />
                        Reply
                      </a>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
                <div className="single__comment children mb-35">
                  <div className="comments-avatar">
                    <img src="img/blog/comment/c_02.png" alt="" />
                  </div>
                  <div className="comment-text">
                    <div className="avatar-name mb-15">
                      <h6>
                        Rlex Kelian <i className="fas fa-bookmark" />
                      </h6>
                      <span>19th May 2021</span>
                      <a href="#" className="comment-reply">
                        <i className="fas fa-reply" />
                        Reply
                      </a>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip commodo.
                    </p>
                  </div>
                </div>
                <div className="single__comment">
                  <div className="comments-avatar">
                    <img src="img/blog/comment/c_03.png" alt="" />
                  </div>
                  <div className="comment-text">
                    <div className="avatar-name mb-15">
                      <h6>Roboto Alex</h6>
                      <span>21th May 2021</span>
                      <a href="#" className="comment-reply">
                        <i className="fas fa-reply" />
                        Reply
                      </a>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
              <div id="comments" className="comments-area  mt-45">
                <div id="respond" className="comment-respond">
                  <h3 id="reply-title" className="comment-reply-title">
                    Leave a Reply{" "}
                    <small>
                      <a
                        rel="nofollow"
                        id="cancel-comment-reply-link"
                        href="/finco/?p=2112#respond"
                        style={{ display: "none" }}
                      >
                        Cancel reply
                      </a>
                    </small>
                  </h3>
                  <form
                    action="http://wordpress.zcube.in/finco/wp-comments-post.php"
                    method="post"
                    id="commentform"
                    className="comment-form"
                    noValidate=""
                  >
                    <p className="comment-notes">
                      <span id="email-notes">
                        Your email address will not be published.
                      </span>{" "}
                      Required fields are marked{" "}
                      <span className="required">*</span>
                    </p>
                    <p className="comment-field">
                      <i className="fas fa-user" />
                      <input
                        id="author"
                        placeholder="Your Name"
                        name="author"
                        type="text"
                      />
                    </p>
                    <p className="comment-field">
                      <i className="fas fa-envelope" />
                      <input
                        id="email"
                        placeholder="your-real-email@example.com"
                        name="email"
                        type="text"
                      />
                    </p>
                    <p className="comment-field">
                      <i className="fas fa-globe" />
                      <input
                        id="url"
                        name="url"
                        placeholder="http://your-site-name.com"
                        type="text"
                      />{" "}
                    </p>
                    <p className="comment-form-comment">
                      <label htmlFor="comment">Comment</label>{" "}
                      <textarea
                        id="comment"
                        name="comment"
                        cols={45}
                        rows={8}
                        maxLength={65525}
                        required="required"
                        defaultValue={""}
                      />
                    </p>
                    <p className="form-submit">
                      <input
                        name="submit"
                        type="submit"
                        id="submit"
                        className="submit"
                        defaultValue="Post Comment"
                      />{" "}
                      <input
                        type="hidden"
                        name="comment_post_ID"
                        defaultValue={2112}
                        id="comment_post_ID"
                      />
                      <input
                        type="hidden"
                        name="comment_parent"
                        id="comment_parent"
                        defaultValue={0}
                      />
                    </p>
                  </form>
                </div>
                {/* #respond */}
              </div>
            </div>
          </div>
          {/* #right side */}
          <div className="col-sm-12 col-md-12 col-lg-4">
            <aside className="sidebar-widget">
              <section id="search-3" className="widget widget_search">
                <h2 className="widget-title">Search</h2>
                <form
                  role="search"
                  method="get"
                  className="search-form"
                  action="http://wordpress.zcube.in/finco/"
                >
                  <label>
                    <span className="screen-reader-text">Search for:</span>
                    <input
                      type="search"
                      className="search-field"
                      placeholder="Search …"
                      defaultValue=""
                      name="s"
                    />
                  </label>
                  <input
                    type="submit"
                    className="search-submit"
                    defaultValue="Search"
                  />
                </form>
              </section>
              <section
                id="custom_html-5"
                className="widget_text widget widget_custom_html"
              >
                <h2 className="widget-title">Follow Us</h2>
                <div className="textwidget custom-html-widget">
                  <div className="widget-social">
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-pinterest-p" />
                    </a>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fab fa-wordpress" />
                    </a>
                  </div>
                </div>
              </section>
              <section id="categories-1" className="widget widget_categories">
                <h2 className="widget-title">Categories</h2>
                <ul>
                  <li className="cat-item cat-item-16">
                    <a href="#">Branding</a> (4)
                  </li>
                  <li className="cat-item cat-item-23">
                    <a href="#">Corporat</a> (3)
                  </li>
                  <li className="cat-item cat-item-18">
                    <a href="#">Design</a> (3)
                  </li>
                  <li className="cat-item cat-item-22">
                    <a href="#">Gallery</a> (3)
                  </li>
                </ul>
              </section>
              <section
                id="recent-posts-4"
                className="widget widget_recent_entries"
              >
                <h2 className="widget-title">Recent Posts</h2>
                <ul>
                  <li>
                    <a href="#">
                      User Experience Psychology And Performance Smshing
                    </a>
                    <span className="post-date">August 19, 2021</span>
                  </li>
                  <li>
                    <a href="#">
                      Monthly Web Development Up Cost Of JavaScript
                    </a>
                    <span className="post-date">August 19, 2021</span>
                  </li>
                  <li>
                    <a href="#">
                      There are many variation passages of like available.
                    </a>
                    <span className="post-date">August 19, 2021</span>
                  </li>
                </ul>
              </section>
              <section id="tag_cloud-1" className="widget widget_tag_cloud">
                <h2 className="widget-title">Tag</h2>
                <div className="tagcloud">
                  <a
                    href="#"
                    className="tag-cloud-link tag-link-28 tag-link-position-1"
                    style={{ fontSize: "8pt" }}
                    aria-label="app (1 item)"
                  >
                    app
                  </a>
                  <a
                    href="#"
                    className="tag-cloud-link tag-link-17 tag-link-position-2"
                    style={{ fontSize: "8pt" }}
                    aria-label="Branding (1 item)"
                  >
                    Branding
                  </a>
                  <a
                    href="#"
                    className="tag-cloud-link tag-link-20 tag-link-position-3"
                    style={{ fontSize: "8pt" }}
                    aria-label="corporat (1 item)"
                  >
                    corporat
                  </a>
                  <a
                    href="#"
                    className="tag-cloud-link tag-link-24 tag-link-position-4"
                    style={{ fontSize: "16.4pt" }}
                    aria-label="Design (2 items)"
                  >
                    Design
                  </a>
                  <a
                    href="#"
                    className="tag-cloud-link tag-link-25 tag-link-position-5"
                    style={{ fontSize: "22pt" }}
                    aria-label="gallery (3 items)"
                  >
                    gallery
                  </a>
                  <a
                    href="#"
                    className="tag-cloud-link tag-link-26 tag-link-position-6"
                    style={{ fontSize: "8pt" }}
                    aria-label="video (1 item)"
                  >
                    video
                  </a>
                  <a
                    href="#"
                    className="tag-cloud-link tag-link-29 tag-link-position-7"
                    style={{ fontSize: "16.4pt" }}
                    aria-label="web design (2 items)"
                  >
                    web design
                  </a>
                </div>
              </section>
            </aside>
          </div>
          {/* #right side end */}
        </div>
      </div>
    </section>
    {/* inner-blog-end */}
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

export default Bloge;
