import { BrowserRouter } from "react-router-dom";
import Toast from "./lib/helper/toast";
import Routers from "./Routers";
function App() {
  return (
    <BrowserRouter>
      <Toast />
      <Routers />
    </BrowserRouter>
  );
}

export default App;
