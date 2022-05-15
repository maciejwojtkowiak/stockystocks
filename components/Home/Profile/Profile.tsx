import Image from "next/image";
import Inwestor from "../../../images/inwestor.jpg";

const Profile = () => {
  return (
    <div className="h-full grid content-center place-items-center">
      <div className="w-32 h-32 bg-green-100 rounded-full"></div>
      <p className="m-8 text-2xl">Maciej</p>
    </div>
  );
};

export default Profile;
