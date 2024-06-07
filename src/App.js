
import Header from "./components/Header";
import Footer from "./components/Footer";
import MyRouter from "./router/MyRouter";
import ScrollToUp from "./components/ScrollToUp";
function App() {
  return (
    <div className="App">
     <Header />
    <MyRouter />
     <Footer />
     <ScrollToUp /> 
    </div>
  );
}

export default App;
