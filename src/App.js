import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
// Context
import ThemeProvider from "./context/ThemeProvider";
// Pages
import Home from "./pages/Home";
import Country from "./pages/Country/";
import NotFound from "./pages/NotFound";
// Component
import Header from "./components/Header";

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
