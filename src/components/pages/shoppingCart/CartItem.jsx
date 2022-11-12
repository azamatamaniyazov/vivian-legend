import { Link } from "react-router-dom";
import { MdOutlineClose } from "react-icons/md";
import { useState } from "react";
import {
  useDeleteOrderMutation,
  useUpdateOrderMutation,
} from "../../../api/apiSlice";
import { useDispatch } from "react-redux";
import { setProductId } from "../products/productsSlice";

function CartItem({ product, count, basketId, order_id }) {
  const dispatch = useDispatch();
  const [deleteOrder] = useDeleteOrderMutation();
  const [updateOrder] = useUpdateOrderMutation();

  const onSelectProductId = (id) => {
    dispatch(setProductId(id));
    localStorage.setItem("productId", id);
  };

  const onDeleteOrder = () => {
    deleteOrder({ basketId, order_id });
  };

  const onChangeCount = (type) => {
    if (type === "inc") {
      updateOrder({ basketId, order_id, count: ++count });
    }
    if (type === "dec") {
      count === 1
        ? onDeleteOrder()
        : updateOrder({ basketId, order_id, count: --count });
    }
  };

  return (
    <tr className="border-t border-gray-300 ">
      <td className="py-[15px] px-[30px] text-center">
        <Link
          onClick={() => onSelectProductId(product.id)}
          to="/product-details"
          className="w-[72px] inline-block border border-gray-300"
        >
          <img src={product.image} alt="img" />
        </Link>
      </td>
      <td className="py-[15px] px-[30px] min-w-[318px]">
        <Link
          onClick={() => onSelectProductId(product.id)}
          to="/product-details"
          className="hover:text-orange"
        >
          {product.name}
        </Link>
      </td>
      <td className="text-center py-[15px] px-[20px]">
        <span>{product.price} UZS</span>
      </td>
      <td className="py-[15px] text-center">
        <div className="text-center inline-flex items-center relative">
          <span
            onClick={() => onChangeCount("dec")}
            className="cursor-pointer absolute text-xl text-[#9c9c9c] left-2.5 w-[23px] h-[23px] leading-[23px] bg-[#ddd] border border-gray-300 rounded-full hover:bg-orange hover:border-orange hover:text-white transition-colors"
          >
            -
          </span>
          <input
            type="text"
            value={count}
            readOnly={true}
            className="text-center font-medium outline-0 border border-gray-300 max-w-[120px] h-11"
          />
          <span
            onClick={() => onChangeCount("inc")}
            className="cursor-pointer absolute text-xl text-[#9c9c9c] right-2.5 w-[23px] h-[23px] leading-[23px] bg-[#ddd] border border-gray-300 rounded-full hover:bg-orange hover:border-orange hover:text-white transition-colors"
          >
            +
          </span>
        </div>
      </td>
      <td className="text-center py-[15px] px-[20px]">
        <span>{product.price * count} UZS</span>
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
