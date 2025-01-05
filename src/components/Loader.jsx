import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
function Loader() {
  return (
    <div className="loader">
      <div className="spinner">
        <FontAwesomeIcon icon={faCircleNotch} spin className="icon" />
      </div>
    </div>
  );
}

export default Loader;
