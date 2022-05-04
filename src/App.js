import s from "./App.module.scss";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className={s.app}>
      <Header />

      <Footer />
    </div>
  );
}

export default App;
