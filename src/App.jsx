import "../src/assets/css/common.css";
import "../src/assets/css/details.css";
import "../src/assets/css/main.css";
import "../src/assets/css/modal.css";
import "../src/assets/scss/common.scss";
import Home from "./pages/Home";

function App() {
  //   const [counter, setCounter] = useState(0);

  //   const handleClick = () => setCounter(3);

  //   useEffect(() => {
  //     var id = setTimeout(() => {
  //       if (counter > 0) setCounter(counter - 1);
  //     }, 1000);
  //     return () => clearTimeout(id);
  //   }, [counter]);
  return (
    <>
      {/* <button onClick={handleClick}>Count</button>
      <p>{counter}</p> */}
      <Home />
    </>
  );
}

export default App;
