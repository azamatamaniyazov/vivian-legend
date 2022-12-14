import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetMeQuery } from "../../../../api/apiSlice";
import { getme } from "../../../../api/auth/auth";
import { removeUser } from "../../../../slices/userSlice";

function Dashboard() {
  // const { data: user, isSuccess } = useGetMeQuery();
  const { token } = useSelector((state) => state.user);
  const [userData, setUserData] = useState();
  const [isSuccess, setIsSucces] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      getMeQuery();
    }
  }, [token]);

  const getMeQuery = async () => {
    try {
      const { data } = await getme(token);
      setUserData(data);
      setIsSucces(true);
    } catch (e) {
      setIsSucces(false);
    }
  };

  const onLogOut = () => {
    dispatch(removeUser());
    localStorage.removeItem("token");
  };
  return (
    <div className="w-full sm:w-[540px] md:w-[720px] lg:w-[960px] xl:w-[1176px] 2xl:w-[1320px] mx-auto px-3">
      <div className="py-[54px]">
        <div className="grid px-2 grid-cols-12 gap-7">
          <div className="col-span-4 border border-gray-300 pt-[15px] h-max">
            <h3 className="text-xl font-medium px-[30px] pb-[15px]">
              Navigation
            </h3>
            <ul>
              <li className="cursor-pointer text-[#9c9c9c] hover:text-orange transition-colors border-t border-gray-300 px-[30px] py-[15px]">
                Dashboard
              </li>
              <li className="cursor-pointer text-[#9c9c9c] hover:text-orange transition-colors border-t border-gray-300 px-[30px] py-[15px]">
                Edit Profile
              </li>
              <li className="cursor-pointer text-[#9c9c9c] hover:text-orange transition-colors border-t border-gray-300 px-[30px] py-[15px]">
                Edit Adress
              </li>
              <li className="cursor-pointer text-[#9c9c9c] hover:text-orange transition-colors border-t border-gray-300 px-[30px] py-[15px]">
                Password
              </li>
              <li
                onClick={onLogOut}
                className="cursor-pointer text-[#9c9c9c] hover:text-orange transition-colors border-t border-gray-300 px-[30px] py-[15px]"
              >
                Log Out
              </li>
            </ul>
          </div>
          <div className="col-span-8">
            {isSuccess && (
              <>
                <div className="flex items-center justify-between p-8 bg-[#e6f7f6] mb-[30px]">
                  <div className="flex items-center">
                    <img
                      src="https://templates.envytheme.com/ehay/default/assets/images/profile-img.jpg"
                      alt="profile"
                      className="rounded-full mr-6"
                    />
                    <div>
                      <h3 className="text-xl mb-2 font-medium">
                        {userData.payload.name}
                      </h3>
                      <span className="block text-[#9c9c9c] mb-[5px]">
                        contact@mail.ru
                      </span>
                      <span className="text-[#9c9c9c]">
                        {userData.payload.phone}
                      </span>
                    </div>
                  </div>
                  <button className="bg-orange text-white px-[30px] py-[15px]">
                    Edit Profile
                  </button>
                </div>
                <div className="p-8 bg-[#fff4f3]">
                  <h3 className="text-xl font-medium mb-5">??????????</h3>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-[#9c9c9c] mb-2">
                        {userData.payload.name}
                      </p>
                      <p className="text-[#9c9c9c]">
                        <span className="text-black pr-2">??????????:</span>
                        {userData.payload.address}
                      </p>
                    </div>
                    <div>
                      <p className="text-[#9c9c9c] mb-2">
                        <span className="text-black pr-2">??????????:</span>
                        {userData.payload.phone}
                      </p>
                      <p className="text-[#9c9c9c]">
                        <span className="text-black pr-2">??????????:</span>
                        contact@mail.ru
                      </p>
                    </div>
                    <button className="bg-orange text-white px-[30px] py-[15px]">
                      Edit Profile
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
