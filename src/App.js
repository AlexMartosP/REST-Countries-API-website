import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Context
import ThemeProvider from "./context/ThemeProvider";
// Pages
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
