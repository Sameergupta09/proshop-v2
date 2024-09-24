import { Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useGetProductsQuery } from '../slices/productsApiSlice';
import { Link } from 'react-router-dom';
import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Paginate from '../components/Paginate';
// import ProductCarousel from '../components/ProductCarousel';
import Meta from '../components/Meta';
import Hero from '../components/Hero';
import Newsletter from '../components/Newsletter';
import "../../src/App.css"
import img360 from '../assets/images/products/n3.png';

const HomeScreen = () => {
  const { pageNumber, keyword } = useParams();
 
  const { data, isLoading, error } = useGetProductsQuery({
    keyword,
    pageNumber,
  });
  console.log(data);
  
//    data = Object.fromEntries(
//     Object.entries(data.products).slice(1, 3)
// )
// console.log(data);

  return (
    <>
    <section className="banner">
    <div className="container-xxl">
      <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="d-flex flex-column justify-content-center ">
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                  <div className='back-details'>
                  <p className='mb-3 text'>Trade in offer</p>
                  <h1>Super Value Deals</h1>
                  <h2>On all products</h2>

                  {/* <p className='mb-3'>Save more today with Packify</p>  */}

                  <Link to='/shop' className='btn btn-primary' id='button-link'>Shop Now</Link>
                  </div>
                  
              </div>
            </div>
          </div>
          </div>
      </div>
    </div>
  </section>
  <Hero />
  <div className='products-home'>
    <div><p>New Arrivals</p></div>
    <div>


      {/* {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to='/' className='btn btn-light mb-4'>
          Go Back
        </Link>
      )} */}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <Meta />
          
          <Row>
            {data.products.slice(0,5).map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={data.pages}
            page={data.page}
            keyword={keyword ? keyword : ''}
          />
        </>
      )}
      </div>
      </div>

      <div className='banner360'>
        <div className='img360'>
          <img src={img360} alt="logo" />
          
        </div>
      </div>
    
      
    <Newsletter />
    
      
      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />

       <div className="whos-speaking-area speakers pad100">
          <div className="container">
              <div className="row">
                  <div className="col-lg-12">
                      <div className="section-title text-center">
                          <div className="title-text mb50">
                              <h2 >ABOUT US</h2>
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
                              <p>DEV , FRONTENED DEVELOPER</p>
                          </div>
                      </div>
                  </div>
              </div>
              </div>
            
          </div>

      </div> 
      
    </>  
  );
  
};

export default HomeScreen;
