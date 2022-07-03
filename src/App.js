import "./styles.css";
import { Resizable } from "re-resizable";

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px #ddd",
  background: "#f0f0f0",
  margin: "1rem",
};

export default function App() {
  return (
    <div className="App flex-container">
      <Resizable
        style={style}
        defaultSize={{
          width: "30%",
          height: 250,
        }}
      >
        sidebar
      </Resizable>
      <Resizable
        style={style}
        defaultSize={{
          width: "60%",
          height: 250,
        }}
      >
        header
      </Resizable>
      <Resizable
        style={style}
        defaultSize={{
          width: "94%",
          height: 300,
        }}
      >
        main
      </Resizable>
    </div>
  );
}
