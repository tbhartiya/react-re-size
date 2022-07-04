import "./styles.css";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

export default function App() {
  return (
    <div className="App flex-container">
      <Sidebar />
      <Header />
      <Main />
    </div>
  );
}
