import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

import { MdOutlineDarkMode } from 'react-icons/md';
import { MdHome } from 'react-icons/md';
import { MdFavorite } from 'react-icons/md';

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-[rgba(198,28,32)] p-2 h-20">
      <div className="flex justify-between  items-center gap-5">
        <Link to="/">
          <img src="/src/images/logo.jpg" alt="Logo" width={50} height={50} />
        </Link>
        <h1 className="text-4xl font-semibold text-[rgba(16,16,16)] max-sm:hidden">
          <a href="/">Film İzle</a>
        </h1>
      </div>

      <div className="flex justify-between items-center">
        <input
          className=" text-[rgba(16,16,16)] focus:bg-gray-50 outline-none w-52 rounded-l bg-slate-200"
          type="text"
          placeholder="Lütfen film adı giriniz..."
        ></input>
        <FaSearch className="text-white rounded-r bg-[rgba(16,16,16)] w-6 h-6 py-1 cursor-pointer" />
      </div>

      <div className="flex justify-between items-center gap-2 text-slate-200">
        <div className="flex justify-between items-center">
          <div>
            <Link to="/">
              <MdHome className=" bg-black rounded text-2xl cursor-pointer " />
            </Link>
          </div>
          <div className="flex gap-1  max-md:hidden text-black  font-semibold">
            Anasayfa
          </div>
        </div>

        <div className="flex justify-between items-center ">
          <div>
            <Link to="/FavPage">
              <MdFavorite className="bg-black rounded cursor-pointer text-2xl" />
            </Link>
          </div>
          <div className="flex gap-1  max-md:hidden text-black font-semibold">
            Favorites
          </div>
        </div>
        <div className="text-2xl cursor-pointer rounded bg-black text-slate-200">
          <MdOutlineDarkMode className="font-bold" />
        </div>
      </div>
    </div>
  );
};

export default Header;
