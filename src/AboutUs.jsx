import { lazy, Suspense } from "react";

const CrocLazy = lazy(() => import("./3DComponents/CrocRender"));
const CartLazy = lazy(() => import("./3DComponents/CartModelRender"));

const AboutUs = () => {
  return (
    <div className='AboutUs flex flex-col items-center flex-grow h-full md:justify-normal justify-center'>
      <div className='main flex flex-col h-1/2 items-center bg-white md:justify-normal justify-center'>
        <h1 className='text-center text-5xl font-bold mb-20'>About Us</h1>
        <p className='text-xl w-1/2 text-center md:mb-5'>
          Welcome to our Ecommerce website! We're delighted to have you here. At
          <span className='font-mono font-semibold'> AR7 Mart</span>, we strive
          to provide an exceptional online shopping experience for our
          customers. Our About Us page is the perfect opportunity to introduce
          ourselves and share our story with you.
        </p>
      </div>
      <div className='who bg-zinc-800 text-cyan-50 h-1/2 w-full flex flex-col justify-center items-center md:items-start'>
        <h2 className='text-3xl font-bold md:ml-20 mt-10'>Who Are We</h2>
        <div className='contentcontiner flex flex-col md:flex-row justify-center items-center md:justify-evenly'>
          <div className='content w-1/2 md:h-screen '>
            <p className='text-xl w-full text-center md:m-20 font-medium'>
              <span className='font-mono font-semibold'> AR7 Mart</span> is an
              innovative and customer-centric online store that offers a wide
              range of high-quality products. We are passionate about connecting
              people with the products they need and love, all in one convenient
              online destination.
            </p>
          </div>
          <div className='model h-screen w-1/2'>
            <Suspense fallback={<h1 className='text-2xl'>Loading...</h1>}>
              <CrocLazy />
            </Suspense>
          </div>
        </div>
      </div>
      <div className='mission h-full w-full flex flex-col justify-center items-center md:items-start'>
        <h2 className='text-right text-3xl font-bold md:ml-20 mt-10'>
          Our Mission
        </h2>
        <div className='contentcontiner flex flex-col md:flex-row justify-center items-center md:justify-evenly'>
          <div className='model items-center mb-20 md:mb-auto md:h-screen h-96 w-full md:w-1/3 '>
            <img src='./shop.png' className='m-30' alt='' />
          </div>
          <div className='content w-1/2 md:h-screen '>
            <p className='text-xl w-full text-center md:m-20 font-medium'>
              Our mission is to make your shopping experience effortless,
              enjoyable, and satisfying. We believe that shopping should be a
              seamless and personalized journey, where you can find exactly what
              you're looking for and discover new favorites along the way.
            </p>
          </div>
        </div>
      </div>
      <div className='mission  bg-zinc-800 text-cyan-50 h-full w-full flex flex-col justify-center items-center md:items-start'>
        <h2 className='text-right text-3xl font-bold md:ml-20 mt-10'>
          What We Offer
        </h2>
        <div className='contentcontiner flex flex-col md:flex-row justify-center items-center md:justify-evenly'>
          <div className='content w-1/2 md:h-screen '>
            <p className='text-xl w-full text-center md:m-20 font-medium'>
              What We Offer: We curate an extensive collection of products
              across various categories, carefully selected to meet your diverse
              needs and preferences. From trendy fashion pieces to the latest
              gadgets, home decor to health and wellness essentials, we have
              something for everyone. We partner with trusted suppliers and
              brands to ensure the quality and authenticity of every item we
              offer.
            </p>
          </div>
          <div className='model h-screen w-72 md:w-1/2 '>
            <Suspense fallback={<h1 className='text-2xl'>Loading...</h1>}>
              <CartLazy />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
