import React from "react";
import { Timeline } from "react-twitter-widgets";
import { MessagesIcon, SearchIcon} from "../icons/Icon";
import TrendsKeyword from "./TrendsKeyword";
//import Appcss from "../App.css";
//import UserBox from "../components/UserBox";

const Widgets = () => {
  
  return (
    <aside className="w-80">

      {/* search */}
      <div className="flex items-center space-x-4 p-3 m-3 bg-gray-200 rounded-full text-gray-dark focus-within:bg-white focus-within:ring-1 focus-within:ring-primary-base focus-within:text-primary-base">
        <SearchIcon className="w-5 h-5" />
        <input
          type="text"
          placeholder="Search Twitter"
          className="placeholder-gray-dark bg-transparent focus:outline-none w-full text-sm"
        />
      </div>

    {/* Trend */}
      <div className="text-[#d9d9d9] space-y-3 bg-[#15181c] pt-2 rounded-xl w-11/12 xl:w-9/12">
        <TrendsKeyword />
      </div>

      {/* reactjs profile */}
      <div className="mt-5">
        <Timeline
          dataSource={{
            sourceType: "profile",
            screenName: "reactjs",
          }}
          options={{
            height: "300",
          }}
        />
      </div>
      <div className="flex justify-between items-center mb-5 hover:bg-primary-light cursor-pointer rounded-full py-2 px-10 "></div> 
      <header className=" sticky bottom-0 z-10 bg-white flex justify-between items-center p-4 border-b border-gray-extraLight ">
        <span className="font-bold text-xl text-gray-900 ">Messages</span>
        <MessagesIcon className=" w-6 h-6 text-primary-base" />
        
      </header>
      
      
      <message />
    </aside>
  );
};

export default Widgets;
