import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import L from "./components/Layout";
import About from "./pages/About";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Events from "./pages/Events";
import Resources from "./pages/Resources";
import PanelTeacher from "./pages/PanelTeacher";
import PanelAdvisor from "./pages/PanelAdvisor";
import PanelExecutive from "./pages/PanelExecutive";

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
       path="teacher-panel"
       element={
        <L>
         <PanelTeacher />
        </L>
       }
      />
      <Route
       path="advisor-panel"
       element={
        <L>
         <PanelAdvisor />
        </L>
       }
      />
      <Route
       path="executive-panel"
       element={
        <L>
         <PanelExecutive />
        </L>
       }
      />
     </Route>
     <Route
      path="register"
      element={
       <L>
        <Register />
       </L>
      }
     />
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
     <Route
      path="*"
      element={
       <div className="flex justify-center items-center min-h-screen text-center">
        <div>
         <h1 className="text-6xl font-bold">404</h1>
         <p className="text-2xl font-semibold">Page not found!</p>
        </div>
       </div>
      }
     />
    </Routes>
   </BrowserRouter>
  </>
 );
}

export default App;
