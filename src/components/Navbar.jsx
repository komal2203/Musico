import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold">
        <div className="flex items-center gap-2">
          <img
            onClick={() => navigate(-1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer hover:bg-green-600 hover:scale-110"
            src={assets.arrow_left}
            alt=""
          />
          <img
            onClick={() => navigate(1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer hover:bg-green-600 hover:scale-110"
            src={assets.arrow_right}
            alt=""
          />
        </div>
        <div className="flex items-center gap-4">
          <p className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer hover:scale-110">
            Explore Premium
          </p>
          <p className="bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer hover:bg-green-600 hover:scale-110">
            Install App
          </p>
          <p className="bg-purple-400 text-black w-7 h-7 rounded-full flex justify-center items-center cursor-pointer hover:bg-purple-700 hover:text-white hover:scale-110">
            K
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-4 ">
        <p className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer hover:bg-green-600 hover:text-white hover:scale-110">
          All
        </p>
        <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer hover:bg-green-600 hover:scale-110">
          Music
        </p>
        <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer hover:bg-green-600 hover:scale-110">
          Podcasts
        </p>
      </div>
    </>
  );
};

export default Navbar;
