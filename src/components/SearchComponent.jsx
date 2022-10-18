import React from "react";

function SearchComponent() {
  return (
    <div className="relative p-4 h-[35vh] w-full flex flex-col items-center bg-pattern bg-no-repeat bg-cover">
      {/* Header */}
      <h1 className="mt-4 font-extrabold text-white text-3xl">
        IP Address Tracker
      </h1>
      {/* Search bar */}
      <div className="container mt-4 h-14 max-w-xs md:max-w-lg flex bg-white rounded-lg shadow-lg overflow-hidden">
        <input
          type="text"
          className="w-10/12 md:w-11/12 text-[18px] p-4 outline-none"
          placeholder="Search for any IP address or domain"
        />
        <div className="w-2/12 md:w-1/12 bg-black grid place-items-center hover:bg-VeryDarkGray transition duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
            <path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6" />
          </svg>
        </div>
      </div>
      {/* Information section */}
      <div className="absolute container top-40 md:top-44 py-8 h-auto md:h-36 max-w-xs md:max-w-5xl bg-white flex flex-col md:flex-row md:divide-x-2 space-y-4 md:space-y-0 shadow-lg rounded-xl z-10">
        {/* ip address */}
        <section className="px-6 h-full w-full md:w-1/4 flex flex-col justify-start items-center md:items-start space-y-2">
          <span className="text-xs text-DarkGray font-semibold uppercase tracking-widest">
            ip address
          </span>
          <h2 className="text-lg md:text-2xl font-semibold text-VeryDarkGray">
            192.212.174.101
          </h2>
        </section>
        {/* location */}
        <section className="px-6 h-full w-full md:w-1/4 flex flex-col justify-start items-center md:items-start space-y-2">
          <span className="text-xs text-DarkGray font-semibold uppercase tracking-widest">
            location
          </span>
          <h2 className="text-lg md:text-2xl font-semibold text-VeryDarkGray">
            Brooklyn, NY 1001
          </h2>
        </section>
        {/* timezone */}
        <section className="px-6 h-full w-full md:w-1/4 flex flex-col justify-start items-center md:items-start space-y-2">
          <span className="text-xs text-DarkGray font-semibold uppercase tracking-widest">
            timezone
          </span>
          <h2 className="text-lg md:text-2xl font-semibold text-VeryDarkGray">
            UTC-05:00
          </h2>
        </section>
        {/* isp */}
        <section className="px-6 h-full w-full md:w-1/4 flex flex-col justify-start items-center md:items-start space-y-2">
          <span className="text-xs text-DarkGray font-semibold uppercase tracking-widest">
            isp
          </span>
          <h2 className="text-lg md:text-2xl font-semibold text-VeryDarkGray">
            SpaceX Starlink
          </h2>
        </section>
      </div>
    </div>
  );
}

export default SearchComponent;
