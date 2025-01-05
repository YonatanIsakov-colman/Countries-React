import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faMagnifyingGlass,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";

import Country from "../components/Country";
import Loader from "../components/Loader";
import Modal from "../components/Modal";
import { useState, useEffect } from "react";
const Home = () => {
  const [countries, setCountries] = useState([]);
  const [searchFilter, setSearchFilter] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedRegion, setSelectedRegion] = useState("Filter by Region");
  const [error, setError] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const fetchCountries = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      if (!response.ok) {
        setLoading(false);
        setError("failed to fetch countries");
        return;
      }
      const data = await response.json();
      setCountries(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchCountries();
  }, []);

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <p>{error}</p>;
  }
  const filteredCountries = countries.filter((country) => {
    const matchSearch =
      searchFilter === "" ||
      country.name.common.toLowerCase().includes(searchFilter.toLowerCase());
    const matchRegion =
      selectedRegion === "Filter by Region" ||
      selectedRegion === "all" ||
      country.region.toLowerCase() === selectedRegion.toLowerCase();

    return matchSearch && matchRegion;
  });
  const handleRegionSelect = (e) => {
    const region = e.target.dataset.region;
    setSelectedRegion(region);
    setIsDropdownOpen(false);
  };

  const onCountryClick = (country) => {
    setSelectedCountry(country);
    setIsModelOpen(true);
  };
  const onCloseModel = () => {
    setIsModelOpen(false);
  };
  return (
    <>
      <header className="header">
        <div className="container flex flex-jc-sb flex-ai-c">
          <div className="logo">
            <a href="index.html">
              <h1>Where in the world?</h1>
            </a>
          </div>
          <button
            type="button"
            aria-label="Theme Switcher Button"
            className="theme-toggle flex flex-jc-sb flex-ai-c"
          >
            <FontAwesomeIcon icon={faMoon} className="theme-icon" />
            <span className="theme-text">Dark Mode</span>
          </button>
        </div>
      </header>
      <section className="filters">
        <div className="container">
          <div className="search-wrapper">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
            <input
              type="text"
              className="search-input"
              placeholder="Search for a country..."
              onChange={(e) => setSearchFilter(e.target.value)}
            />
          </div>
          <div className={`dropdown-wrapper ${isDropdownOpen ? "open" : ""}`}>
            <div
              className="dropdown-header flex flex-jc-sb flex-ai-c"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span>{selectedRegion}</span>
              <FontAwesomeIcon icon={faChevronDown} className="icon" />
            </div>
            <div className="dropdown-body" onClick={handleRegionSelect}>
              <ul>
                <li data-region="all">All</li>
                <li data-region="africa">Africa</li>
                <li data-region="americas">America</li>
                <li data-region="asia">Asia</li>
                <li data-region="europe">Europe</li>
                <li data-region="oceania">Oceania</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <main className="main">
        <div className="container">
          <section className="countries-grid">
            {filteredCountries.map((card) => (
              <Country
                key={card.cca3}
                card={{
                  flag: card.flags.png,
                  name: card.name.common,
                  population: card.population,
                  region: card.region,
                  capital: card.capital ? card.capital[0] : "N/A",
                }}
                onClick={() => onCountryClick(card)}
              />
            ))}
          </section>
        </div>
      </main>
      {console.log("Modal open state:", isModelOpen)}
      {isModelOpen && selectedCountry && (
        <Modal country={selectedCountry} onClose={onCloseModel} />
      )}
    </>
  );
};

export default Home;
