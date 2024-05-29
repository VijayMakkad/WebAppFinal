import Navbar from "./components/Navbar/Navbar";
import MainBg from "./screens/Background/MainBg";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div id="App">
      <MainBg>
        <Navbar />
      </MainBg>
    </div>
  );
}

export default App;
