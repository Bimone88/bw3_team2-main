import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "./CNavbar";
import SottoNavbar from "./ComponentsProfilPage/SottoNavbar";
import Profile from "./ComponentsProfilPage/Profilo";
import Analisi from "./ComponentsProfilPage/Analisi";
import Risorse from "./ComponentsProfilPage/Risorse";
import Informazioni from "./ComponentsProfilPage/Informazioni";
import Esperienza from "./ComponentsProfilPage/Esperienza";
import Formazione from "./ComponentsProfilPage/Formazione";
import Competenze from "./ComponentsProfilPage/Competenze";
import Lingue from "./ComponentsProfilPage/Lingue";
import Interessi from "./ComponentsProfilPage/Interessi";
import CFooter from "./CFooter";

const ProfilePage = () => {
  return (
    <div>
      <Navbar />
      <SottoNavbar />
      <Profile />
      <Analisi />
      <Risorse />
      <Informazioni />
      <Esperienza />
      <Formazione />
      <Competenze />
      <Lingue />
      <Interessi />

      <CFooter />
    </div>
  );
};

export default ProfilePage;
