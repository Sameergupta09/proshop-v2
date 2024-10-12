/* eslint-disable no-unused-vars */
import React from 'react'
import b1 from '../assets/images/blog/bags1.jpeg'
import b2 from '../assets/images/products/f4.jpg'
import b3 from '../assets/images/products/f6.jpg'
import b4 from '../assets/images/blog/bags1.jpeg'
import b5 from '../assets/images/products/img1.png'


const blog = () => {
  return <>
  <section className="blog-wrapper p-5">
    <div className="container-xxl">
      <div className="row">
      <div className="col-12">
          <div className="shop-details text-center align-items-center">
            <h1 className="text-white">#Read More</h1>
            <p className='text-white fs-3'>Get to know some useful tips ...</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="blogs p-5">
    <div className="container-xxl container">
      <div className="row">
        <div className="d-flex flex-column align-items-center">
          <h1 className='mb-3'>Explore more in our library</h1>
          <p className='mb-4'> We have trending Bags Everywhere</p>
        </div>
        <div className="col-12 p-5">
          <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={b1} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h5 className="card-title">How to Match Your Bag with Your Outfit</h5>
                <p className="card-text">Choosing the right bag to complement your outfit can elevate your style and make a big difference in your overall look.<br /> Whether you're headed to the office, out for a casual day, or attending a formal event, knowing how to match your bag with your outfit is a must.<br /> These are  tips to help you make the perfect pairing every time!</p>
                <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
              </div>
              </div>
           
             </div>
          </div>
        </div>
        <div className="col-12 p-5">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={b2} alt="" className='img-fluid rounded-start' />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <h5 className="card-title">Best Bags for Every Occasion</h5>
                      <p className="card-text">Finding the perfect bag for every occasion is essential to complete your look and stay organized.<br />
                       For casual outings, a crossbody bag offers hands-free convenience and style.<br /> Heading to work? A structured tote or satchel is both professional and spacious enough to carry essentials.<br />
                        For evening events, opt for an elegant clutch or small handbag to complement your formal attire.<br /> When traveling, a backpack or weekender bag ensures you have everything you need in a practical yet stylish way.<br /> Each occasion calls for the right blend of functionality and fashion!</p>
                      <p className="card-text"><small className="text-body-secondary">Last Updated now</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 p-5">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={b3} alt="" className='img-fluid rounded-start' />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <h5 className="card-title">How to Take Care of Leather Bags</h5>
                      <p className="card-text">Taking care of leather bags is essential to preserve their beauty and longevity. <br />First, regularly clean your bag with a soft, damp cloth to remove dust and dirt.<br />
                       Use a leather conditioner every few months to keep the material supple and prevent cracking. <br />Avoid exposing your bag to direct sunlight or extreme temperatures, as this can cause fading and damage. <br />
                       Finally, store your leather bag in a dust bag or box when not in use to protect it from scratches and dust.<br /> With proper care, your leather bag will age beautifully and remain a timeless accessory for years to come!</p>
                      <p className="card-text"><small className="text-body-secondary">Last Updated now</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 p-5">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={b4} alt="" className='img-fluid rounded-start' />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <h5 className="card-title">5 Tips for Cleaning and Storing Your Bags</h5>
                      <p className="card-text">Proper cleaning and storage of your bags can significantly extend their lifespan.<br /> First, always empty your bag and shake out any debris before cleaning. <br />
                      Use a soft cloth and the appropriate cleaner for the material (e.g., leather, fabric) to gently wipe down the exterior. <br />For storage, keep your bags in a dust bag or pillowcase to protect them from dust and light, avoiding plastic, which can trap moisture.<br />
                       Lastly, maintain their shape by storing bags upright or stuffed with tissue paper to prevent creasing. Following these tips will keep your bags looking fresh and stylish!</p>
                      <p className="card-text"><small className="text-body-secondary">Last Updated now</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 p-5">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={b5} alt="" className='img-fluid rounded-start' />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <h5 className="card-title">Top 10 Must-Have Items for Your Travel Bag</h5>
                      <p className="card-text">Travel Documents: Keep your passport, tickets, and any necessary visas organized and easily accessible.<br />
                                                    Portable Charger: A power bank ensures your devices stay charged on the go.<br />
                                                    Reusable Water Bottle: Stay hydrated while being environmentally friendly; just refill after security checks.<br />
                                                    Snacks: Healthy snacks can keep your energy levels up during long journeys.<br />
                                                    Comfort Items: A travel pillow and a light blanket can make long flights or road trips much more comfortable.</p>
                      <p className="card-text"><small className="text-body-secondary">Last Updated now</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      </div>
    </div>
  </section>
  </>;
}

export default blog