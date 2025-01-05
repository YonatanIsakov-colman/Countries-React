import PropTypes from "prop-types";
const Modal = ({ country, onClose }) => {
  return (
    <>
      {console.log(country)}
      <div className="modal">
        <div className="modal-content">
          <button className="close" onClick={onClose}>
            X
          </button>
          <div className="modal-left">
            <img src={country.flags.png} alt={country.name.common} />
            <h2>{country.name.common}</h2>
            <ul>
              <li>
                <strong>Native Name:</strong>{" "}
                {country.name.nativeName
                  ? Object.values(country.name.nativeName)
                      .map((nativeName) => nativeName.common)
                      .join(", ")
                  : "N/A"}
              </li>
              <li>
                <strong>Population:</strong> {country.population}
              </li>
              <li>
                <strong>Region:</strong> {country.region}
              </li>
              <li>
                <strong>Sub Region:</strong> {country.region}
              </li>
              <li>
                <strong>Capital:</strong>{" "}
                {country.capital ? country.capital : "N/A"}
              </li>
            </ul>
          </div>
          <div className="modal-right">
            <ul>
              <li>
                <strong>Top Level Domain:</strong>{" "}
                {country.tld ? country.tld.join(", ") : "N/A"}
              </li>
              <li>
                <strong>Currencies:</strong>{" "}
                {country.currencies
                  ? Object.values(country.currencies)
                      .map((currency) => ` ${currency.name} ${currency.symbol}`)
                      .join(", ")
                  : "N/A"}
              </li>
              <li>
                <strong>Languages:</strong>{" "}
                {country.languages
                  ? Object.values(country.languages).join(", ")
                  : "N/A"}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

Modal.propTypes = {
  country: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};
export default Modal;
