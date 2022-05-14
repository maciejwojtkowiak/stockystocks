const MainPage = () => {
  return (
    <div className="h-screen bg-indigo-500 grid place-items-center">
      <div className="grid h-5/6 w-4/6 bg-indigo-300  gap-4 p-4 grid-cols-5 grid-rows-5 ">
        <div className="bg-red-100 row-span-2 col-span-2"></div>
        <div className="bg-indigo-400 row-span-5 col-span-3"></div>
        <div className="bg-indigo-200 row-span-3 col-span-2"></div>
      </div>
    </div>
  );
};

export default MainPage;
