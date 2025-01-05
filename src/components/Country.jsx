import PropTypes from "prop-types";

const Country = ({ card, onClick }) => {
  return (
    // TODO: Country component
    <a
      className="country"
      href="#"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      <div className="country-flag">
        <img src={card.flag} alt={card.name} />
      </div>
      <div className="country-info">
        <h2 className="country-title">{card.name}</h2>
        <ul className="country-brief">
          <li>
            <strong>Population:</strong> {card.population}
          </li>
          <li>
            <strong>Region:</strong> {card.region}
          </li>
          <li>
            <strong>Capital:</strong> {card.capital}
          </li>
        </ul>
      </div>
    </a>
  );
};
Country.propTypes = {
  card: PropTypes.shape({
    flag: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    population: PropTypes.number.isRequired,
    region: PropTypes.string.isRequired,
    capital: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Country;
