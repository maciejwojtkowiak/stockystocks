import { Fragment, useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchForm = () => {
  const [assetName, setAssetName] = useState<string>("");
  const [detailedAsset, setDetailedAsset] = useState();
  const onChangeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAssetName(e.target.value);
  };
  const onSearchSubmitHandler = async () => {
    const getData = async () => {
      const response = await fetch(
        `https://rest.coinapi.io/v1/assets/${assetName}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-CoinAPI-Key": "EB201340-DF56-494E-BA6F-9524985EA13C",
          },
        }
      );
      const data = await response.json();
      console.log(data);
      setDetailedAsset(data);
    };

    getData();
  };

  return (
    <Fragment>
      <div className="w-full h-1/6 flex items-center justify-center ">
        <input
          className="w-1/2 p-2 outline-green-600 border-0 pr-8 relative"
          onChange={onChangeInputHandler}
        />
        <button
          className="bg-white p-2  -ml-24 z-10"
          onClick={onSearchSubmitHandler}
          type="submit"
        >
          Search
        </button>
      </div>
    </Fragment>
  );
};

export default SearchForm;
