
import { Link } from 'react-router-dom';
import { FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-bgOffWhite border-t mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">

        {/*  Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-center">

          {/*  Brand (Center on lg) */}
          <div className="md:col-span-12 lg:col-span-6 flex flex-col items-center text-center">
            <Link to="/">
              <img
                src="https://i.ibb.co.com/6RHKD5TM/BG.png"
                alt="Logo"
                className="h-12 object-cover"
              />
            </Link>

            <h3 className="text-navy text-lg font-semibold mt-2">
              Innovate <span className='text-amber'>|</span> Compete <span className='text-amber'>|</span> Conquer
            </h3>

            <p className="text-sm text-navy font-semibold">
              Discover competitions and showcase your talent
            </p>
          </div>


          {/*  Navigation (Left on lg) */}
          <div className="sm:col-span-12 text-center md:col-span-6 md:text-left lg:col-span-3 lg:text-left text-navy">
            <h4 className="text-2xl font-semibold mb-2">Navigation</h4>
            <ul className="space-y-1 text-sm">
              <li><Link to="/" className="btn-custom-nav-menu">Platform</Link></li>
              <li><Link to="/competitions" className="btn-custom-nav-menu">Competitions</Link></li>
              <li><Link to="/about" className="btn-custom-nav-menu">About Us</Link></li>
              <li><Link to="/blog" className="btn-custom-nav-menu">Blog</Link></li>
              <li><Link to="/contact" className="btn-custom-nav-menu">Contact</Link></li>
            </ul>
          </div>

          

          {/*  Social Media (Right on lg) */}
          <div className="sm:col-span-12 text-center md:col-span-6 md:text-right lg:col-span-3 lg:text-center text-navy">
            <h4 className="text-2xl font-semibold mb-2 md:text-center">Follow Us:</h4>

            <div className="flex justify-center lg:justify-end gap-3">
              <a href="https://www.facebook.com/" target="_blank" className="p-2 rounded-full border-2 border-transparent hover:border-navy"><FaFacebookF /></a>
              <a href="https://x.com/" target="_blank" className="p-2 rounded-full border-2 border-transparent hover:border-navy"><FaXTwitter /></a>
              <a href="https://www.youtube.com/" target="_blank" className="p-2 rounded-full border-2 border-transparent hover:border-navy"><FaYoutube /></a>
              <a href="https://www.instagram.com/" target="_blank" className="p-2 rounded-full border-2 border-transparent hover:border-navy"><FaInstagram /></a>
              <a href="https://www.linkedin.com/" target="_blank" className="p-2 rounded-full border-2 border-transparent hover:border-navy"><FaLinkedinIn /></a>
            </div>
          </div>

        </div>

        {/*  Copyright */}
        <div className="mt-8 border-t pt-4 text-sm text-navy text-center">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className='font-semibold'>BRAIN</span>
            <span className='text-amber font-semibold'>BEEX</span>. All rights reserved.
          </p>

          <p className="mt-2">
            <span className='font-semibold'>BRAIN</span>
            <span className='text-amber font-semibold'>BEEX</span>, A Competition Based Website
          </p>
        </div>

      </div>
    </footer>
  );
};


export default Footer;
