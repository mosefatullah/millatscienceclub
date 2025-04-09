import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import L from "./components/Layout";
import About from "./pages/About";
import Register from "./pages/Register";
import Events from "./pages/Events";
import EventById from "./pages/EventById";
import Resources from "./pages/Resources";
import PanelTeacher from "./pages/PanelTeacher";
import PanelAdvisor from "./pages/PanelAdvisor";
import PanelExecutive from "./pages/PanelExecutive";
import PanelFounder from "./pages/PanelFounder";
import ResourceById from "./pages/ResourceById";
import Achievements from "./pages/Achievements";

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
     <Route
      path="about-us"
      element={
       <L>
        <About />
       </L>
      }
     />
     <Route
      path="achievements"
      element={
       <L>
        <Achievements />
       </L>
      }
     />
     <Route path="panel">
      <Route
       path="teachers"
       element={
        <L>
         <PanelTeacher />
        </L>
       }
      />
      <Route
       path="advisors"
       element={
        <L>
         <PanelAdvisor />
        </L>
       }
      />
      <Route
       path="executives"
       element={
        <L>
         <PanelExecutive />
        </L>
       }
      />
      <Route
       path="founders"
       element={
        <L>
         <PanelFounder />
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
     <Route path="activity">
      <Route
       path="events"
       element={
        <L>
         <Events />
        </L>
       }
      />
      <Route
       path="event/:id"
       element={
        <L>
         <EventById />
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
       path="resource/:id"
       element={
        <L>
         <ResourceById />
        </L>
       }
      />
     </Route>
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
