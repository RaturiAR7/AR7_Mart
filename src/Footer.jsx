import { useNavigate } from "react-router-dom";

const Footer = () => {
  const date = new Date();
  const navigate = useNavigate();
  return (
    <div className='footer h-96 md:h-60 bg-slate-800 absolute w-full overflow-hidden '>
      <h2 className='text-center text-3xl md:text-5xl font-extrabold text-slate-100 '>
        AR7 MART
      </h2>
      <div className='footercontent flex flex-col md:flex-row items-center md:justify-around'>
        <div className='socials flex flex-col'>
          <h2 className='text-xl font-semibold  text-slate-100'>Socials</h2>
          <div className='icons w-10 flex items-center flex-row justify-center'>
            <a href='https://www.instagram.com/_uchiha_ar7_/'>
              <img
                className='h-full w-full m-5'
                src='https://www.freepnglogos.com/uploads/logo-ig-png/logo-ig-logo-instagram-ini-ada-varias-dan-transparan-33.png'
              />
            </a>
            <a
              href='https://www.linkedin.com/in/anshul-raturi-9224a4244/'
              className='ml-5'
            >
              <img
                className='h-full w-full m-5'
                src='https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png'
                alt=''
              />
            </a>
          </div>
        </div>
        <div className='Address pl-10'>
          <h2 className='text-xl font-semibold  text-slate-100 text-center'>
            Our Address
          </h2>
          <div>
            <p className='text-center text-lg text-gray-400'>
              Vaishnav Vihar,near Ordnance Factory ,Raipur, Dehradun
            </p>
          </div>
        </div>
        <div className='contactus  '>
          <h2 className='text-xl font-semibold  text-slate-100 text-center'>
            Contacts
          </h2>
          <div className='flex flex-col items-center justify-center'>
            <p className='text-center text-lg text-gray-400'>
              Mobile- 8755508759
            </p>
            <button
              onClick={() => navigate("/contact")}
              className='text-center text-lg w-20 rounded-lg hover:bg-slate-500 text-gray-400 bg-slate-950'
            >
              Mail Us
            </button>
          </div>
        </div>
      </div>
      <p className='text-center  text-slate-100 '>
        All CopyRights Reserved, {date.getFullYear()}
      </p>
    </div>
  );
};

export default Footer;
