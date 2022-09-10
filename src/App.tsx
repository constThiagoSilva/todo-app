import { BrowserRouter as Router } from "react-router-dom";
import { MainContext } from "./contexts/MainContext";
import { MainRoutes } from "./routes/MainRoutes";

function App() {
  return (
    <Router>
      <MainContext>
        <MainRoutes />
      </MainContext>
    </Router>
  );
}

export default App;
