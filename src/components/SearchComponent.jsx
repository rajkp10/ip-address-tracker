import React from "react";
import { useGlobalContext } from "./context";

const IndividualInformation = ({ header, info }) => {
  return (
    <section className="px-6 h-full w-full md:w-1/4 flex flex-col justify-start items-center md:items-start space-y-2">
      <span className="text-xs text-DarkGray font-semibold uppercase tracking-widest">
        {header}
      </span>
      <h2 className="text-lg md:text-2xl font-semibold text-VeryDarkGray">
        {info}
      </h2>
    </section>
  );
};

function SearchComponent() {
  const { loading, query, data, handleChange, handleSearch } =
    useGlobalContext();

  const { ip, location, isp } = data;
  const { postalCode, region, city, timezone, lat, lng } = location;

  return (
    <div
      className={`relative p-4 h-[35vh] w-full flex flex-col items-center bg-pattern bg-no-repeat bg-cover`}
    >
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
          onChange={handleChange}
          value={query}
        />
        <div
          className="w-2/12 md:w-1/12 bg-black grid place-items-center hover:bg-VeryDarkGray transition duration-300"
          onClick={handleSearch}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
            <path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6" />
          </svg>
        </div>
      </div>
      {/* Information section */}
      <div className="absolute container top-40 md:top-44 py-8 h-auto max-w-xs md:max-w-5xl bg-white flex flex-col md:flex-row md:divide-x-2 space-y-4 md:space-y-0 shadow-lg rounded-xl z-10">
        {loading ? (
          <div className="h-full w-full grid place-items-center text-2xl font-semibold text-VeryDarkGray">
            Loading...
          </div>
        ) : (
          <>
            {/* IP Address */}
            <IndividualInformation header="ip address" info={ip} />
            {/* Location */}
            <IndividualInformation
              header="locatoin"
              info={`${city}, ${region}, ${postalCode}`}
            />
            {/* Timezone */}
            <IndividualInformation header="timezone" info={"UTC" + timezone} />
            {/* ISP */}
            <IndividualInformation header="isp" info={isp} />
          </>
        )}
      </div>
    </div>
  );
}

export default SearchComponent;
