import Btc from "../../images/btc.jpg";
import Image from "next/image";

const DetailedAssetCard = () => {
  const onAddToFavHandler = async () => {
    const content = {
      title: "testujemy",
    };
    await fetch("/api/search", {
      method: "POST",
      body: JSON.stringify(content),
      headers: {
        "Content-type": "application/json",
      },
    });
    console.log("SUCCESS");
  };
  return (
    <div className=" h-full bg-gray-100 rounded-lg grid grid-cols-auto-full  drop-shadow-2xl  ">
      <div className="w-32 h-32 rounded-full grid self-center   ">
        <Image src={Btc} alt="" />
      </div>
      <div className=" grid grid-cols-fill-40 place-items-center grid-rows-2 auto-rows-min my-6 text-center">
        <p>
          Hello <span className="block ">123</span>
        </p>
        <p>
          Hello <span className="block ">123</span>
        </p>
        <p>
          Hello <span className="block ">123</span>
        </p>
        <p>
          Hello <span className="block  ">123</span>
        </p>
        <p>
          Hello <span className="block ">123</span>
        </p>
        <p>
          Hello <span className="block ">123</span>
        </p>
        <div className="lg:col-start-3 text-2xl">
          <button className="shadow-lg bg-green-400 shadow-green-500/50 px-4 py-1 mr-4">
            Buy
          </button>
          <button className="shadow-lg bg-red-500 shadow-red-500/50 px-4 py-1">
            Sell
          </button>
          <button
            onClick={onAddToFavHandler}
            className="shadow-lg bg-blue-500 shadow-blue-500/50 px-4 py-1"
          >
            Add to fav
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailedAssetCard;
