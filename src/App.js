import s from "./App.module.scss";

import Header from "./components/Header/Header";

function App() {
  return (
    <div className={s.app}>
      <Header />
    </div>
  );
}

export default App;
