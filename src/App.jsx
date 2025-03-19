import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import L from "./components/Layout";
import About from "./pages/About";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Events from "./pages/Events";
import Resources from "./pages/Resources";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <L>
                <Home />
              </L>
            }
          />
          <Route path="about-us">
            <Route
              index
              element={
                <L>
                  <About />
                </L>
              }
            />
            <Route
              path="register"
              element={
                <L>
                  <Register />
                </L>
              }
            />
          </Route>
          <Route
            path="events"
            element={
              <L>
                <Events />
              </L>
            }
          />
          <Route
            path="projects"
            element={
              <L>
                <Projects />
              </L>
            }
          />
          <Route
            path="resources"
            element={
              <L>
                <Resources />
              </L>
            }
          />
          <Route
            path="contact-us"
            element={
              <L>
                <Contact />
              </L>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
