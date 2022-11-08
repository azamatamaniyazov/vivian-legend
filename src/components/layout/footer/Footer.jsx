import { Link } from "react-router-dom";
import { TiLocationOutline } from "react-icons/ti";
import { FiPhone } from "react-icons/fi";
import { BiMailSend, BiTime } from "react-icons/bi";
import {
  FaGooglePlay,
  FaApple,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCcDiscover,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaTelegram,
} from "react-icons/fa";

const info = [
  { title: "About", path: "/about" },
  { title: "Order Tracking", path: "/order" },
  { title: "Terms & Conditions", path: "/rules" },
  { title: "Store Location", path: "/location" },
  { title: "Privacy Policy", path: "/privacy" },
  { title: "Delivery Information", path: "/delivery" },
];

const services = [
  { title: "Help Center", path: "/about" },
  { title: "Products", path: "/order" },
  { title: "Menoy-back Guarantee!", path: "/rules" },
  { title: "Blog", path: "/location" },
  { title: "Accessibility", path: "/delivery" },
  { title: "Contact", path: "/contact" },
];

function Footer() {
  return (
    <div>
      {/* SUBSCRIBE BLOCK */}
      <div className="bg-orange w-full py-12">
        <div className="w-full sm:w-[540px] md:w-[720px] lg:w-[960px] xl:w-[1176px] 2xl:w-[1320px] mx-auto px-3">
          <div className="grid lg:grid-cols-12 grid-rows-1 items-center px-3">
            <Link to="/" className="col-span-2">
              <img
                src="https://templates.envytheme.com/ehay/default/assets/images/white-logo.png"
                alt="logo"
                className="h-[41px]"
              />
            </Link>
            <div className="my-5 col-span-5 w-full text-white">
              <span className="text-sm">30% Discount For Your First Order</span>
              <h3 className="text-xl font-medium my-2">
                Subscribe To Our Newsletter
              </h3>
              <p>Subscribe to the newsletter for all the latest updates</p>
            </div>
            <div className="relative col-span-5">
              <input
                className="h-[51px] w-full mb-5 lg:mb-0 py-[10px] px-5 border border-orange outline-none"
                type="email"
                placeholder="Your email address"
              />
              <button className="absolute text-white bg-orange py-2.5 px-2 top-1 right-1">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* INFO BLOCK */}
      <div className="py-[54px]">
        <div className="w-full sm:w-[540px] md:w-[720px] lg:w-[960px] xl:w-[1176px] 2xl:w-[1320px] mx-auto px-3">
          <div className="grid sm:grid-cols-12 grid-rows-1">
            {/* 1 BLOCK */}
            <div className="mb-6 px-3 lg:col-span-3 sm:col-span-6">
              <h3 className="text-xl font-medium">Quick Information</h3>
              <ul className="mb-5">
                <li className="flex items-center text-sm mt-4 text-[#9c9c9c]">
                  <TiLocationOutline size={17} className="text-orange mr-1" />
                  <span>2491 Reel Avenue Albuquerque, NM</span>
                </li>
                <li className="flex items-center text-sm mt-4 text-[#9c9c9c]">
                  <FiPhone size={15} className="text-orange mr-1" />
                  <a href="tel:+1-(514)-321-4566" className="hover:text-orange">
                    +1 (514) 321-4566
                  </a>
                </li>
                <li className="flex items-center text-sm mt-4 text-[#9c9c9c]">
                  <BiMailSend size={17} className="text-orange mr-1" />
                  <a
                    href="mailto:ehay@example.com"
                    className="hover:text-orange"
                  >
                    ehay@example.com
                  </a>
                </li>
                <li className="flex items-center text-sm mt-4 text-[#9c9c9c]">
                  <BiTime size={17} className="text-orange mr-1" />
                  <span>Mon-Sat 8:00 AM - 8:00 PM</span>
                </li>
              </ul>
              <div className="flex items-center">
                <h5 className="mr-5">Stay connected:</h5>
                <ul className="flex text-[#9c9c9c]">
                  <li className="mr-2">
                    <a
                      href="https://www.facebook.com/"
                      className="hover:text-orange"
                    >
                      <FaFacebookF size={15} />
                    </a>
                  </li>
                  <li className="mr-2">
                    <a
                      href="https://www.facebook.com/"
                      className="hover:text-orange"
                    >
                      <FaInstagram size={15} />
                    </a>
                  </li>
                  <li className="mr-2">
                    <a
                      href="https://www.facebook.com/"
                      className="hover:text-orange"
                    >
                      <FaTwitter size={15} />
                    </a>
                  </li>
                  <li className="mr-2">
                    <a
                      href="https://www.facebook.com/"
                      className="hover:text-orange"
                    >
                      <FaTelegram size={15} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* 2 BLOCK */}
            <div className="mb-6 px-3 lg:col-span-3 sm:col-span-6">
              <h3 className="text-xl font-medium">Information</h3>
              <ul>
                {info.map((item, index) => {
                  return (
                    <li key={index} className="mt-4 text-[#9c9c9c]">
                      <Link to={item.path} className="hover:text-orange">
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* 3 BLOCK */}
            <div className="mb-6 px-3 lg:col-span-3 sm:col-span-6">
              <h3 className="text-xl font-medium">Customer Service</h3>
              <ul>
                {services.map((item, index) => {
                  return (
                    <li key={index} className="mt-4 text-[#9c9c9c]">
                      <Link to={item.path} className="hover:text-orange">
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* 4 BLOCK */}
            <div className="mb-6 px-3 lg:col-span-3 sm:col-span-6">
              <h3 className="text-xl font-medium mb-[15px]">
                Download App On Mobile
              </h3>
              <p className="text-[#9c9c9c] mb-[15px]">
                30% discount on your first order
              </p>
              <div className="flex mb-5">
                <button className="flex items-center mr-3 border border-black py-2 px-3">
                  <FaApple size={20} />
                  <span className="text-[#9c9c9c] text-xs font-medium ml-1">
                    App store
                  </span>
                </button>
                <button className="flex items-center border border-black py-2 px-3">
                  <FaGooglePlay />
                  <span className="text-[#9c9c9c] text-xs font-medium ml-1">
                    Google play
                  </span>
                </button>
              </div>
              <span className="text-base">We Accept Payment Via</span>
              <ul className="flex mt-5 text-[#9c9c9c]">
                <li className="mr-3">
                  <FaCcVisa size={40} />
                </li>
                <li className="mr-3">
                  <FaCcMastercard size={40} />
                </li>
                <li className="mr-3">
                  <FaCcPaypal size={40} />
                </li>
                <li className="mr-3">
                  <FaCcDiscover size={40} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT BLOCK */}
      <div className="py-[15px] border-t border-gray-300">
        <div className="w-full sm:w-[540px] md:w-[720px] lg:w-[960px] xl:w-[1176px] 2xl:w-[1320px] mx-auto px-3">
          <p className="text-[#9c9c9c] text-center">
            Copyright © 2022 Vivian. <span>Dev: azaamaniyazov</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
