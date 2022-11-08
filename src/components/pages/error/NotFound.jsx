function NotFound() {
  return (
    <div className="flex flex-col items-center py-[54px] bg-[#e9fcff]">
      <h1 className="text-[280px] font-bold text-orange leading-none">
        4 <span className="text-red-600 inline-block rotate-45">0</span> 4
      </h1>
      <h3 className="mt-7 text-[#ff0000] text-3xl font-medium">
        Oops! Page Not Found
      </h3>
      <p className="my-5 text-orange text-lg">
        The page you were looking for could not be found.
      </p>
    </div>
  );
}

export default NotFound;
