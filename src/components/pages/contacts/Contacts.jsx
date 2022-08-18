import { TiLocationOutline } from "react-icons/ti";
import { FiPhone } from "react-icons/fi";
import { BiMailSend, BiTime } from "react-icons/bi";

function Contacts() {
  return (
    <div className="w-full sm:w-[540px] md:w-[720px] lg:w-[960px] xl:w-[1176px] 2xl:w-[1320px] mx-auto px-3">
      <div className="grid grid-cols-12 py-[54px]">
        <div className="col-span-4">
          <h3 className="text-xl font-medium mb-5">Contact details</h3>
          <div>
            <h4 className="text-base font-medium mb-2">Europe Office</h4>
            <ul>
              <li className="flex items-center mb-[10px] text-[#9c9c9c]">
                <TiLocationOutline size={17} className="text-orange mr-1" />
                <span>2491 Reel Avenue Albuquerque, NM</span>
              </li>
              <li className="flex items-center mb-[10px] text-[#9c9c9c]">
                <FiPhone size={15} className="text-orange mr-1" />
                <a href="tel:+1-(514)-321-4566" className="hover:text-orange">
                  +1 (514) 321-4566
                </a>
              </li>
              <li className="flex items-center mb-[10px] text-[#9c9c9c]">
                <BiMailSend size={17} className="text-orange mr-1" />
                <a href="mailto:ehay@example.com" className="hover:text-orange">
                  ehay@example.com
                </a>
              </li>
              <li className="flex items-center mb-[10px] text-[#9c9c9c]">
                <BiTime size={17} className="text-orange mr-1" />
                <span>Mon-Sat 8:00 AM - 8:00 PM</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-base font-medium mb-2">Asia Office</h4>
            <ul>
              <li className="flex items-center mb-[10px] text-[#9c9c9c]">
                <TiLocationOutline size={17} className="text-orange mr-1" />
                <span>2491 Reel Avenue Albuquerque, NM</span>
              </li>
              <li className="flex items-center mb-[10px] text-[#9c9c9c]">
                <FiPhone size={15} className="text-orange mr-1" />
                <a href="tel:+1-(514)-321-4566" className="hover:text-orange">
                  +1 (514) 321-4566
                </a>
              </li>
              <li className="flex items-center mb-[10px] text-[#9c9c9c]">
                <BiMailSend size={17} className="text-orange mr-1" />
                <a href="mailto:ehay@example.com" className="hover:text-orange">
                  ehay@example.com
                </a>
              </li>
              <li className="flex items-center mb-[10px] text-[#9c9c9c]">
                <BiTime size={17} className="text-orange mr-1" />
                <span>Mon-Sat 8:00 AM - 8:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-8">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94174.3969284879!2d59.53378966986152!3d42.47135412857824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41dd9a36ea33d7cf%3A0x8454c68babd0b936!2z0J3Rg9C60YPRgSwg0KPQt9Cx0LXQutC40YHRgtCw0L0!5e0!3m2!1sru!2s!4v1660840558148!5m2!1sru!2s"
            width="600"
            height="400"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Contacts;
