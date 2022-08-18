import { MdOutlineSupportAgent } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";

function Services() {
  return (
    <div className="grid grid-cols-12 gap-6 pt-12 pb-8 lg:pt-0">
      <div className="col-span-12 sm:col-span-6 lg:col-span-4">
        <div className="text-center xl:text-start xl:flex items-center relative p-[30px] xl:pl-[115px] border border-gray-300 hover:border-orange transition-colors">
          <span className="inline-block mb-1 xl:absolute top-7 left-8 h-[70px] w-[70px] leading-[70px] text-center bg-[#f5f5f5] rounded-full">
            <MdOutlineSupportAgent size={38} className="text-orange inline" />
          </span>
          <div>
            <h3 className="text-xl font-medium mb-1">Customer Support</h3>
            <p className="text-[#9c9c9c] leading-[1.8]">
              24/7 We are customer care best support
            </p>
          </div>
        </div>
      </div>
      <div className="col-span-12 sm:col-span-6 lg:col-span-4">
        <div className="text-center xl:text-start xl:flex relative p-[30px] xl:pl-[115px] border border-gray-300 hover:border-orange transition-colors">
          <span className="inline-block mb-1 xl:absolute top-7 left-8 h-[70px] w-[70px] leading-[70px] text-center bg-[#f5f5f5] rounded-full">
            <RiSecurePaymentLine size={38} className="text-orange inline" />
          </span>
          <div>
            <h3 className="text-xl font-medium mb-1">Secure Payments</h3>
            <p className="text-[#9c9c9c] leading-[1.8]">
              Pay with the world's top payment methods
            </p>
          </div>
        </div>
      </div>
      <div className="col-span-12 sm:col-span-6 sm:col-start-4 lg:col-span-4">
        <div className="text-center xl:text-start xl:flex relative p-[30px] xl:pl-[115px] border border-gray-300 hover:border-orange transition-colors">
          <span className="inline-block mb-1 xl:absolute top-7 left-8 h-[70px] w-[70px] leading-[70px] text-center bg-[#f5f5f5] rounded-full">
            <TbTruckDelivery size={38} className="text-orange inline" />
          </span>
          <div>
            <h3 className="text-xl font-medium mb-1">Worldwide Delivery</h3>
            <p className="text-[#9c9c9c] leading-[1.8]">
              What you want, delivered to where you want
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
