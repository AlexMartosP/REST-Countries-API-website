import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
// Context
import ThemeProvider from "./context/ThemeProvider";
import Country from "./pages/Country";
// Pages
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <ThemeProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:code" element={<Country />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
