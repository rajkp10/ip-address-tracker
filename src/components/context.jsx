import React, { useState, useContext } from "react";
import axios from "axios";

export const API = `https://geo.ipify.org/api/v2/country,city?apiKey=${
  import.meta.env.VITE_IP_GEOLOCATION_API_KEY
}&ipAddress=`;

const initialData = {
  ip: "8.8.8.8",
  location: {
    country: "US",
    region: "California",
    city: "Mountain View",
    lat: 37.40599,
    lng: -122.078514,
    postalCode: "94043",
    timezone: "-07:00",
    geonameId: 5375481,
  },
  domains: [
    "0d2.net",
    "003725.com",
    "0f6.b0094c.cn",
    "007515.com",
    "0guhi.jocose.cn",
  ],
  as: {
    asn: 15169,
    name: "Google LLC",
    route: "8.8.8.0/24",
    domain: "https://about.google/intl/en/",
    type: "Content",
  },
  isp: "Google LLC",
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    console.log(query);
    // check if input is empty or invalid ip
    if (!query) {
      setQuery("Write IP");
      setTimeout(() => setQuery(""), 1000);
      return;
    }
    if (
      !/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
        query
      )
    ) {
      setQuery("Invalid IP");
      setTimeout(() => setQuery(""), 1000);
      return;
    }
    setLoading(true);
    axios.get(`${API}${query}`).then((res) => {
      console.log(res.data);
      setData(res.data);
    });
    setLoading(false);
    setQuery("");
  };

  return (
    <AppContext.Provider
      value={{ loading, query, data, handleChange, handleSearch }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
