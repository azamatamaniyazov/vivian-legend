function Dashboard() {
  return (
    <div className="w-full sm:w-[540px] md:w-[720px] lg:w-[960px] xl:w-[1176px] 2xl:w-[1320px] mx-auto px-3">
      <div className="py-[54px]">
        <div className="grid px-2 grid-cols-12 gap-6">
          <div className="col-span-4 border border-gray-300 pt-[15px]">
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
              <li className="cursor-pointer text-[#9c9c9c] hover:text-orange transition-colors border-t border-gray-300 px-[30px] py-[15px]">
                Log Out
              </li>
            </ul>
          </div>
          <div className="col-span-8">
            <div className="flex items-center justify-between p-10 bg-[#e6f7f6]">
              <div className="flex items-center">
                <img
                  src="https://templates.envytheme.com/ehay/default/assets/images/profile-img.jpg"
                  alt="profile"
                  className="rounded-full mr-6"
                />
                <div>
                  <h3 className="text-xl mb-2 font-medium">Doreen Mcool</h3>
                  <a
                    className="block text-[#9c9c9c] mb-[5px]"
                    href="mailto:contact@mail.ru"
                  >
                    contact@mail.ru
                  </a>
                  <a className="text-[#9c9c9c]" href="tel:+998930959900">
                    998930959900
                  </a>
                </div>
              </div>
              <button className="bg-orange text-white px-[30px] py-[15px]">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
