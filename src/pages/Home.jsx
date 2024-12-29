import CountriesData from "../assets/CountriesData.json";
import Country from "../components/Country";

const Home = () => {
  return (
    // TODO: Home page
    // Render Country component (components/Country.jsx) for each country
    // Take data from (assets/CountriesData.json)
    <main className="main">
      <div className="container">
        <section className="countries-grid">
          {CountriesData.map((card, index) => (
            <Country key={index} card={card} />
          ))}
        </section>
      </div>
    </main>
  );
};

export default Home;
