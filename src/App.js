import s from "./App.module.scss";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";

function App() {
  return (
    <div className={s.app}>
      <Header />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
