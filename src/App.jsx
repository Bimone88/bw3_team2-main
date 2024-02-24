import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ProfilePage from "./components/ProfilePage";
import AnalisiPage from "./components/ComponentsProfilPage/AnalisiPage";
import RisorsePage from "./components/ComponentsProfilPage/RisorsePage";
import Aside from "./components/aside";
import { Col, Container, Row } from "react-bootstrap";
import HomePage from "./components/HomePage";
import CNavbar from "./components/CNavbar";
import FooterHome from "./components/FooterHome";
import Lavoro from "./components/Lavoro";
import ModEsperienza from "./components/ComponentsProfilPage/ModEsperienza";

// Componente Layout per utilizzare useLocation
const Layout = () => {
  const location = useLocation();

  const showAside =
    location.pathname === "/" || location.pathname === "/profile";
  const showFooterHome =
    location.pathname === "/" || location.pathname === "/Lavoro";

  return (
    <>
      <Row>
        <Col lg={8}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/Lavoro" element={<Lavoro />} />
            <Route path="/AnalisiPage" element={<AnalisiPage />} />
            <Route path="/RisorsePage" element={<RisorsePage />} />
            <Route
              path="/modEsperienza/:userId/:experienceId"
              element={<ModEsperienza />}
            />
          </Routes>
        </Col>
        <Col lg={3}>
          {showAside && <Aside />}
          {showFooterHome && <FooterHome />}
        </Col>
      </Row>
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Container>
        <CNavbar />
        <Layout />{" "}
        {/* Utilizza Layout per contenere le Routes e la logica condizionale */}
      </Container>
    </BrowserRouter>
  );
}

export default App;
