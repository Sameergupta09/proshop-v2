/* eslint-disable no-unused-vars */
import React from 'react'
// import { Link } from 'react-router-dom';
// import blog1 from '../assets/images/blog/blog-1.jpg'
// import blog2 from '../assets/images/blog/blog-2.jpg'
// import blog3 from '../assets/images/blog/blog-3.jpg'
// import blog4 from '../assets/images/blog/blog-4.jpg'
import a6 from '../assets/images/about/a6.jpg'
// import video from '../assets/images/about/1.mp4'
// import Marquee from "react-fast-marquee";
// import orders from '../assets/images/icons/icon1.png'
// import orders1 from '../assets/images/icons/icon2.png'
// import orders2 from '../assets/images/icons/icon3.png'
// import orders3 from '../assets/images/icons/icon4.png'
// import orders4 from '../assets/images/icons/icon5.png'

const About = () => {
  return <>
    <section className="about-wrapper p-5 d-flex justify-content-center align-items-center">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="shop-details text-center align-items-center">
              <h1 className="text-white">#Know Us</h1>
              <p className='text-white fs-3'>Get to know us more</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="about-us p-5">
      <div className="row">
        <div className="col-md-6">
          <img src={a6} alt="" className='img-fluid p-5' />
        </div>
        <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
          <h1><b>Who are we?</b></h1>
          <p className="card-text mb-3">At PACKIFY, we are passionate about helping you find the perfect bag for every occasion. Whether you need something chic for a night out or functional for everyday use, our carefully curated collection of bags ensures quality, style, and practicality.</p>
          <p className="card-text">We believe that a great bag is more than just an accessory—it's an essential part of your lifestyle. That’s why we offer a range of bags that cater to various needs, from work and travel to casual outings and special events.
                      Driven by a commitment to sustainability and customer satisfaction, we source our products ethically and aim to provide a seamless shopping experience. Whether you're a trendsetter or a minimalist, we have something for everyone.</p>
        </div>
      </div>
    </section>

          <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />

       <div className="whos-speaking-area speakers pad100">
          <div className="container">
              <div className="row">
                  <div className="col-lg-12">
                      <div className="section-title text-center">
                          <div className="title-text mb50">
                              <h2 >OUR DEVELOPERS </h2>
                          </div>
                      </div>
                  </div>
                
              </div>

              <div className='d-flex justify-content-center'>

              <div className="row mb50">
                  <div className="col-xl-8 col-lg-8 col-md-6 col-sm-18">
                      <div className="speakers xs-mb30">
                          <div className="spk-img">
                          <img class="img-fluid1" src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="trainer-img" />
                              <ul>
                                  <li>
                                      <a href="https://www.linkedin.com/in/sameer-gupta-094017299"><i className="fa fa-linkedin"></i></a>
                                  </li>
                                  <li>
                                      <a href="https://www.instagram.com/sameer.gupta09"><i className="fa fa-instagram"></i></a>
                                  </li>
                                  <li>
                                      <a href="https://x.com/sameer_gupta09"><i className="fa fa-twitter"></i></a>
                                  </li>
                                  <li>
                                      <a href="https://github.com/Sameergupta09"><i className="fa fa-github"></i></a>
                                  </li>
                              </ul>
                          </div>
                          <div className="spk-info">
                              <h3>Sameer Gupta</h3>
                              <p>DEV , BACKENED DEVELOPER</p>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="row mb50">
                  <div className="col-xl-8 col-lg-8 col-md-6 col-sm-18">
                      <div className="speakers xs-mb30">
                          <div className="spk-img">
                              <img className="img-fluid1" src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="trainer-img" />
                              <ul>
                                  <li>
                                      <a href="#"><i className="fa fa-twitter"></i></a>
                                  </li>
                                  <li>
                                      <a href="https://www.instagram.com/_aficionadoash_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><i className="fa fa-instagram"></i></a>
                                  </li>
                                  <li>
                                      <a href="https://www.linkedin.com/in/anshuman-mishra-9597212a3/"><i className="fa fa-linkedin"></i></a>
                                  </li>
                                  <li>
                                      <a href="https://github.com/anshumanm0807"><i className="fa fa-github"></i></a>
                                  </li>
                              </ul>
                          </div>
                          <div className="spk-info">
                              <h3>Anshuman Mishra</h3>
                              <p>DEV,FRONTENED DEVELOPER</p>
                          </div>
                      </div>
                  </div>
              </div>
              </div>
            
          </div>

      </div> 




{/* 
    <section className="about-app p-5">
      <h2 className='fs-1 text-center mb-4' >Download our <Link>App</Link></h2>
      <div className="col-12 p-5 col-md-8 mx-auto">
  
          // Render the video for larger screens
          <video loop muted autoPlay src={video} className='w-100'></video>
     
      </div>
    </section> */}

    {/* <section className="abouts p-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12 d-flex flex-column align-items-center">
            <h1 className='mb-3'>What our customers say...</h1>
            <p className='mb-4'>Our customers never miss a bit on providing feedback</p>
          </div>
          <div className="col-12 col-md-6 p-3">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={blog1} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Marvel Clein</h5>
                    <p className="card-text mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit <br />. Doloribus maxime consequatur, ipsam architecto incidunt volup <br />tate! Iste ipsa numquam quos nam quibusdam perferendis excepturi rem, a quo laudantium libero dolore nisi.</p>
                    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 p-3">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={blog2} alt="" className='img-fluid rounded-start' />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Melisa Ivy</h5>
                    <p className="card-text mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit <br />. Doloribus maxime consequatur, ipsam architecto incidunt volup <br />tate! Iste ipsa numquam quos nam quibusdam perferendis excepturi rem, a quo laudantium libero dolore nisi.</p>
                    <p className="card-text"><small className="text-body-secondary">Last Updated now</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 p-3">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={blog3} alt="" className='img-fluid rounded-start' />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Tristian Ann</h5>
                    <p className="card-text mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit <br />. Doloribus maxime consequatur, ipsam architecto incidunt volup <br />tate! Iste ipsa numquam quos nam quibusdam perferendis excepturi rem, a quo laudantium libero dolore nisi.</p>
                    <p className="card-text"><small className="text-body-secondary">Last Updated now</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 p-3">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={blog4} alt="" className='img-fluid rounded-start' />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Phillip Omosh</h5>
                    <p className="card-text mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit <br />. Doloribus maxime consequatur, ipsam architecto incidunt volup <br />tate! Iste ipsa numquam quos nam quibusdam perferendis excepturi rem, a quo laudantium libero dolore nisi.</p>
                    <p className="card-text"><small className="text-body-secondary">Last Updated now</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 p-3">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={blog2} alt="" className='img-fluid rounded-start' />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Melisa Ivy</h5>
                    <p className="card-text mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit <br />. Doloribus maxime consequatur, ipsam architecto incidunt volup <br />tate! Iste ipsa numquam quos nam quibusdam perferendis excepturi rem, a quo laudantium libero dolore nisi.</p>
                    <p className="card-text"><small className="text-body-secondary">Last Updated now</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 p-3">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={blog1} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Marvel Clein</h5>
                    <p className="card-text mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit <br />. Doloribus maxime consequatur, ipsam architecto incidunt volup <br />tate! Iste ipsa numquam quos nam quibusdam perferendis excepturi rem, a quo laudantium libero dolore nisi.</p>
                    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}
  </>;
}

export default About