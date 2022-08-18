function CommentsCard() {
  return (
    <div className="bg-[#eff5ff] p-5">
      <div className="flex items-center pb-3 lg:flex-col lg:items-start xl:flex-row xl:items-center">
        <img
          src="https://templates.envytheme.com/ehay/default/assets/images/customer/customer-1.png"
          alt="avatar"
        />
        <div className="mt-2 ml-4 lg:ml-0 xl:ml-4">
          <h3 className="text-base mb-2 font-medium">Georgia Cargill</h3>
          <span className="text-sm text-[#9c9c9c]">Finance Officer</span>
        </div>
      </div>
      <p className="leading-[1.8]">
        "Vivamus suscipit tortor eget felis porttitor volutpat. Nulla porttitor
        accumsan tincidunt. Lorem ipsum dolor sit amet, consectetur elit. Donec
        sollicitudin molestie eget malesuada accumsan sit amet, consectetur.
        Lorem ipsum dolor sit amet, consectetur elit eget felis porttitor
        volutpat"
      </p>
    </div>
  );
}

export default CommentsCard;
