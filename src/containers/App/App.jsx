/* Styles */
import { AppStyles } from "./App.styles";
import "../../styles/style.css";
import "../../styles/loader.css";

/* Routes */
import AppRoutes from "./App.routes";

function App() {
  return (
    <AppStyles>
      <AppRoutes />
    </AppStyles>
  );
}

export default App;
