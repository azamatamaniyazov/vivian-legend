import { useGetViewBasketQuery } from "../../../api/apiSlice";
import CartItem from "./CartItem";

function ShoppingCart() {
  const { data: basket, isSuccess } = useGetViewBasketQuery();
  const { orders, id } = isSuccess && basket.payload;

  return (
    <div className="w-full sm:w-[540px] md:w-[720px] lg:w-[960px] xl:w-[1176px] 2xl:w-[1320px] mx-auto px-3">
      <div className="py-[54px]">
        <div className="grid grid-cols-12 gap-4">
          {/* CART TABLE */}
          <div className="col-span-12 lg:col-span-9 border border-gray-300 overflow-auto h-fit">
            {orders?.length > 0 ? (
              <table>
                <thead className="text-base">
                  <tr>
                    <th className="table-cell py-5 px-[30px] font-medium">
                      Продукт
                    </th>
                    <th className="table-cell py-5 px-[30px] font-medium"></th>
                    <th className="table-cell py-5 px-[30px] font-medium">
                      Цена
                    </th>
                    <th className="table-cell py-5 px-[30px] font-medium">
                      Количество
                    </th>
                    <th className="table-cell py-5 px-[30px] font-medium">
                      Сумма
                    </th>
                    <th className="table-cell py-5 px-[30px] font-medium">
                      Удалить
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((item, i) => {
                    return (
                      <CartItem
                        key={i}
                        {...item}
                        basketId={id}
                        // onDeleteProduct={onDeleteProduct}
                      />
                    );
                  })}
                </tbody>
              </table>
            ) : (
              <p className="text-center py-2">
                Пока Вы ничего не добавили в корзину :(
              </p>
            )}
          </div>
          {/* CART TOTAL */}
          <div className="col-span-12 lg:col-span-3 border border-gray-300 p-5 xl:p-[30px] h-max">
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
            <button className="w-full py-3 px-3 xl:px-5 bg-orange text-white">
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
