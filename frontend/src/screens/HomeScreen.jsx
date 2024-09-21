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
  return (
    <>
    <section classNameName="banner">
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

                  <p className='mb-3'>Save more today with Packify</p> 

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
            {data.products.map((product) => (
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
                              <h2>ABOUT US</h2>
                          </div>
                      </div>
                  </div>
                
              </div>
              <div className="row mb50">
                  <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
                      <div className="speakers xs-mb30">
                          <div className="spk-img">
                          <img class="img-fluid" src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="trainer-img" />
                              <ul>
                                  <li>
                                      <a href="#"><i className="fa fa-twitter"></i></a>
                                  </li>
                                  <li>
                                      <a href="#"><i className="fa fa-camera"></i></a>
                                  </li>
                                  <li>
                                      <a href="#"><i className="fa fa-facebook"></i></a>
                                  </li>
                                  <li>
                                      <a href="#"><i className="fa fa-life-ring"></i></a>
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
                  <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
                      <div className="speakers xs-mb30">
                          <div className="spk-img">
                              <img className="img-fluid" src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="trainer-img" />
                              <ul>
                                  <li>
                                      <a href="#"><i className="fa fa-twitter"></i></a>
                                  </li>
                                  <li>
                                      <a href="#"><i className="fa fa-camera"></i></a>
                                  </li>
                                  <li>
                                      <a href="#"><i className="fa fa-facebook"></i></a>
                                  </li>
                                  <li>
                                      <a href="#"><i className="fa fa-life-ring"></i></a>
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
      
    </>  
  );
  
};

export default HomeScreen;
