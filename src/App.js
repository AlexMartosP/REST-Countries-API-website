import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
// Context
import ThemeProvider from "./context/ThemeProvider";
import Country from "./pages/Country";
// Pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <HelmetProvider>
        <ThemeProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:code" element={<Country />} />
            <Route path="/404" element={<NotFound />} />
          </Routes>
        </ThemeProvider>
      </HelmetProvider>
    </Router>
  );
}

export default App;
