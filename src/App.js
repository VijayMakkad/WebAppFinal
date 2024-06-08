import Navbar from "./components/Navbar/Navbar";
import MainBg from "./screens/Background/MainBg";
import Shop from "./components/Shop/Shop";
function App() {
  return (
    <div id="App">
      <MainBg>
        <Navbar />
        <Shop/>
      </MainBg>
    </div>
  );
}

export default App;
