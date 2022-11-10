import { Link } from "react-router-dom";
import { MdOutlineClose } from "react-icons/md";
import { useState } from "react";
import {
  useDeleteOrderMutation,
  useUpdateOrderMutation,
} from "../../../api/apiSlice";

function CartItem({ product, count, basketId, order_id }) {
  let [quantity, setQuantity] = useState(count);
  const [deleteOrder] = useDeleteOrderMutation();
  const [updateOrder] = useUpdateOrderMutation();

  const onDeleteOrder = () => {
    deleteOrder({ basketId, order_id });
  };

  const onChangeCount = () => {
    setQuantity(++quantity);
    updateOrder({ basketId, order_id, quantity });
  };

  return (
    <tr className="border-t border-gray-300 ">
      <td className="py-[15px] px-[30px] text-center">
        <Link
          to="/product-details"
          className="w-[72px] inline-block border border-gray-300"
        >
          <img src={product.image} alt="img" />
        </Link>
      </td>
      <td className="py-[15px] px-[30px] min-w-[318px]">
        <Link to="/product-details">{product.name}</Link>
      </td>
      <td className="text-center py-[15px] px-[20px]">
        <span>{product.price} UZS</span>
      </td>
      <td className="py-[15px] text-center">
        <div className="text-center inline-flex items-center relative">
          <span className="cursor-pointer absolute text-xl text-[#9c9c9c] left-2.5 w-[23px] h-[23px] leading-[23px] bg-[#ddd] border border-gray-300 rounded-full hover:bg-orange hover:border-orange hover:text-white transition-colors">
            -
          </span>
          <input
            type="text"
            value={quantity}
            readOnly={true}
            className="text-center font-medium outline-0 border border-gray-300 max-w-[120px] h-11"
          />
          <span
            onClick={onChangeCount}
            className="cursor-pointer absolute text-xl text-[#9c9c9c] right-2.5 w-[23px] h-[23px] leading-[23px] bg-[#ddd] border border-gray-300 rounded-full hover:bg-orange hover:border-orange hover:text-white transition-colors"
          >
            +
          </span>
        </div>
      </td>
      <td className="text-center py-[15px] px-[20px]">
        <span>{product.price * quantity} UZS</span>
      </td>
      <td onClick={onDeleteOrder} className="py-[15px] px-[20px] text-center">
        <MdOutlineClose
          size={17}
          className="inline cursor-pointer text-red-600"
        />
      </td>
    </tr>
  );
}

export default CartItem;
