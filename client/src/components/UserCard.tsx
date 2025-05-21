import type { User } from "../types/Users";
import { FaHeart } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { FaUserFriends } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";

type UserCardProps = {
  user?: User;
};

export const UserCard = ({ user }: UserCardProps) => {
  return (
    <section className="flex flex-col m-4">
      <div className="bg-cyan-700 h-40 rounded-t-2xl">
        <div className="flex relative top-21 items-center gap-4 ml-4">
          <div className="w-24 h-24">
            <img
              src={user?.picture}
              alt={user?.name}
              className="w-full h-full rounded-full border border-white object-cover"
            />
          </div>
          <div className="relative bottom-3">
            <h2 className="text-[1.5rem]">{user?.name}</h2>
            <h3>{user?.email}</h3>
          </div>
        </div>
      </div>
      <nav className="flex justify-end items-center bg-white rounded-b-2xl h-[40px] px-3">
        <ul className="flex gap-2 items-center text-sm font-medium h-full">
          <li className="flex items-center hover:border-b-2 h-full px-2 cursor-pointer text-gray-700 gap-1">
            <ImProfile />
            <a href="/" className="text-gray-700">
              Profile
            </a>
          </li>
          <li className="flex items-center hover:border-b-2 h-full px-2 cursor-pointer text-gray-700 gap-1">
            <FaHeart />
            <a href="/" className="text-gray-700">
              Followers
            </a>
          </li>
          <li className="flex items-center hover:border-b-2 h-full px-2 cursor-pointer text-gray-700 gap-1">
            <FaUserFriends />
            <a href="/" className="text-gray-700">
              Friends
            </a>
          </li>
          <li className="flex items-center hover:border-b-2 h-full px-2 cursor-pointer text-gray-700 gap-1">
            <GrGallery />
            <a href="/" className="text-gray-700">
              Gallery
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
};
