import { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineClose } from "react-icons/md";

function ShoppingCart() {
  const [count, setCount] = useState(1);

  return (
    <div className="w-full sm:w-[540px] md:w-[720px] lg:w-[960px] xl:w-[1176px] 2xl:w-[1320px] mx-auto px-3">
      <div className="py-[54px]">
        <div className="grid grid-cols-12 gap-4">
          {/* CART TABLE */}
          <div className="col-span-9 border border-gray-300 overflow-auto h-fit">
            <table>
              <thead className="text-base">
                <tr>
                  <th className="table-cell py-5 px-[30px] font-medium">
                    Product
                  </th>
                  <th className="table-cell py-5 px-[30px] font-medium"></th>
                  <th className="table-cell py-5 px-[30px] font-medium">
                    Price
                  </th>
                  <th className="table-cell py-5 px-[30px] font-medium">
                    Quantity
                  </th>
                  <th className="table-cell py-5 px-[30px] font-medium">
                    Total
                  </th>
                  <th className="table-cell py-5 px-[30px] font-medium">
                    Trash
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-300 ">
                  <td className="py-[15px] px-[30px]">
                    <Link
                      to="/product-details"
                      className="w-[72px] inline-block border border-gray-300"
                    >
                      <img
                        src="https://templates.envytheme.com/ehay/default/assets/images/products/product-1.jpg"
                        alt=""
                      />
                    </Link>
                  </td>
                  <td className="py-[15px] px-[30px] min-w-[318px]">
                    <Link to="/product-details">
                      DFMALB 20V Max XX Oscillating Multi Tool Variable Speed
                      Tool
                    </Link>
                  </td>
                  <td className="py-[15px] px-[30px]">
                    <span>$90.00</span>
                  </td>
                  <td className="py-[15px]">
                    <div className="text-center inline-flex items-center relative">
                      <span
                        onClick={() => setCount(count - 1)}
                        className="cursor-pointer absolute text-xl text-[#9c9c9c] left-2.5 w-[23px] h-[23px] leading-[23px] bg-[#ddd] border border-gray-300 rounded-full hover:bg-orange hover:border-orange hover:text-white transition-colors"
                      >
                        -
                      </span>
                      <input
                        type="text"
                        value={count}
                        onChange={(e) => setCount(e.target.value)}
                        className="text-center font-medium outline-0 border border-gray-300 max-w-[130px] h-11"
                      />
                      <span
                        onClick={() => setCount(count + 1)}
                        className="cursor-pointer absolute text-xl text-[#9c9c9c] right-2.5 w-[23px] h-[23px] leading-[23px] bg-[#ddd] border border-gray-300 rounded-full hover:bg-orange hover:border-orange hover:text-white transition-colors"
                      >
                        +
                      </span>
                    </div>
                  </td>
                  <td className="py-[15px] px-[30px]">
                    <span>$90.00</span>
                  </td>
                  <td className="py-[15px] px-[30px] text-center">
                    <MdOutlineClose
                      size={17}
                      className="inline cursor-pointer text-red-600"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* CART TOTAL */}
          <div className="col-span-3 border border-gray-300 p-[30px]">
            <h3 className="text-lg font-medium mb-4">Cart Total</h3>
            <ul className="mb-6">
              <li className="flex justify-between w-full mb-[15px] text-[#9c9c9c]">
                <span>Subtotal</span>
                <span>$240.00</span>
              </li>
              <li className="flex justify-between w-full mb-[15px] text-[#9c9c9c]">
                <span>Shipping</span>
                <span>$00.00</span>
              </li>
              <li className="flex justify-between w-full mb-[15px] text-[#9c9c9c]">
                <span>Total</span>
                <span>$315.00</span>
              </li>
              <li className="flex justify-between w-full">
                <span>Payable Total</span>
                <span>$240.00</span>
              </li>
            </ul>
            <button className="w-full py-3 px-5 bg-orange text-white">
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
