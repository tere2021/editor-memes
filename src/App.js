import Imgmeme from "./componentes/Imgmeme";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ReactSwitch from "react-switch";
import { useState } from "react";
import { useThemeContext } from "./context/ThemeContext";

function App() {
  const {contextTheme, setContextTheme} = useThemeContext();

  const [checked, setChecked] = useState(false);

  const handleSwitch = (nextChecked) => {
    setContextTheme((state) => (state === "Light" ? "Dark" : "Light"));
    setChecked(nextChecked);
  };

  return (
    <div className="App" id={contextTheme}>
    
        <ReactSwitch
          onChange={handleSwitch}
          checked={checked}
          onColor="#86d3ff"
          onHandleColor="#2693e6"
          handleDiameter={15}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={10}
          width={28}
          className="react-switch"
          id="material-switch"
        />
        <p className="h6">{contextTheme} Mode</p>
        <Imgmeme />
 
    </div>
  );
}

export default App;
