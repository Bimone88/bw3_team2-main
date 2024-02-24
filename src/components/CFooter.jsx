import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Form from "react-bootstrap/Form";
import { Col, Container, Row } from "react-bootstrap";

const CFooter = () => {
  const annoCorrente = new Date().getFullYear();
  return (
    <Container style={{ width: "1200px" }}>
      <Row className="justify-content-center mt-5">
        <Col lg={6}>
          <Row className="testo-footer">
            <Col lg={4}>
              <p style={{ fontWeight: 600 }}>Informazioni</p>
              <p>Linee guida della community</p>
              <p className="mb-4">
                Privacy e condizioni <i className="bi bi-caret-down-fill"></i>
              </p>
              <p>Sales Solutions</p>
              <p>Centro sicurezza</p>
            </Col>
            <Col lg={4}>
              <p style={{ color: "purple" }}>Accessibilità</p>
              <p>Carriera</p>
              <p>
                Opzioni per gli annunci <br /> pubblicitari
              </p>
              <p>Mobile</p>
            </Col>
            <Col lg={4}>
              <p>Talent Solutions</p>
              <p>Soluzioni di marketing</p>
              <p style={{ color: "purple" }}>Pubblicità</p>
              <p>Piccole imprese</p>
            </Col>
          </Row>
        </Col>
        <Col lg={6}>
          <Row>
            <Col lg={6} className="">
              <div className="d-flex">
                <i className="bi bi-question-circle-fill fs-4 me-2"></i>
                <div className=" nowrap">
                  <h6 className=" small mb-0">Domande?</h6>
                  <p className="small opacity-75">
                    Visità il nostro centro assistenza.
                  </p>
                </div>
              </div>
              <div className="d-flex">
                <i className="bi bi-gear-fill fs-4 me-2"></i>
                <div>
                  <h6 className="small mb-0">
                    Gestisci il tuo account e la tua privacy
                  </h6>
                  <p className="small opacity-75">Vai alle impostazioni</p>
                </div>
              </div>
              <div className="d-flex">
                <i className="bi bi-shield-shaded fs-4 me-2"></i>
                <div>
                  <h6 className=" small mb-0">
                    Trasparenza sui contenuti consigliati
                  </h6>
                  <p className=" small opacity-75">
                    Scopri di più sui contenuti consigliati.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <p className="mb-0 opacity-75 ">Seleziona lingue</p>
              <Form.Select aria-label="Default select example">
                <option>Italiano (Italiano)</option>
                <option value="2">Inglese (Inglese)</option>
                <option value="3">Aramaico (Aramaico antico)</option>
              </Form.Select>
            </Col>
          </Row>
        </Col>
        <p className="small">LinkedIn Corporation &copy; {annoCorrente}</p>
      </Row>
    </Container>
  );
};

export default CFooter;

// <div className="row justify-content-center mt-5 footer">
//   <div className="col ">
//     <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-5 ">
//       <div className="col ">
//         <div className="row">
//           <div className="col footer-links d-flex flex-column">
//             <p>
//               <a href="#" alt="footer link">
//                 Informazioni
//               </a>
//             </p>
//             <p>
//               <a href="#" alt="footer link">
//                 Linee guida della community
//               </a>
//             </p>
//             <p>
//               <a href="#" alt="footer link">
//                 Privacy e condizioni{" "}
//                 <i className="bi bi-caret-down-fill"></i>
//               </a>
//             </p>
//             <p>
//               <a href="#" alt="footer link">
//                 Sales Solutions
//               </a>
//             </p>
//             <p>
//               <a href="#" alt="footer link">
//                 Centro sicurezza
//               </a>
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="col">
//         <div className="row">
//           <div className="col footer-links d-flex flex-column">
//             <p>
//               <a href="#" alt="footer link">
//                 Accessibilità
//               </a>
//             </p>
//             <p>
//               <a href="#" alt="footer link">
//                 Carriera
//               </a>
//             </p>
//             <p>
//               <a href="#" alt="footer link">
//                 Opzioni per gli annunci <br /> pubblicitari
//               </a>
//             </p>
//             <p>
//               <a href="#" alt="footer link">
//                 Mobile
//               </a>
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="col ">
//         <div className="row">
//           <div className="col footer-links d-flex flex-column">
//             <p>
//               <a href="#" alt="footer link">
//                 Talent Solutions
//               </a>
//             </p>
//             <p>
//               <a href="#" alt="footer link">
//                 Soluzioni di marketing
//               </a>
//             </p>
//             <p>
//               <a href="#" alt="footer link">
//                 Pubblicità
//               </a>
//             </p>
//             <p>
//               <a href="#" alt="footer link">
//                 Piccole Imprese
//               </a>
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="col">
//         <div className="row">
//           <div className="col footer-links d-flex flex-column">
//             <p>
//               <a href="#" alt="footer link">
//                 <i className="bi bi-question-circle-fill"></i>{" "}
//                 <strong>Domande?</strong>
//                 <br />
//                 Visita il nostro Centro assistenza{" "}
//               </a>
//             </p>
//             <p>
//               <a href="#" alt="footer link">
//                 <i className="bi bi-gear-fill"></i>{" "}
//                 <strong>Gestici il tuo account e la tua privacy</strong>
//                 <br />
//                 Vai alle impostazioni
//               </a>
//             </p>
//             <p>
//               <a href="#" alt="footer link">
//                 <i className="bi bi-shield-shaded"></i>{" "}
//                 <strong>Trasparenza sui contenuti consigliati</strong>
//                 <br />
//                 Scopri di più sui contenuti consigliati
//               </a>
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="col">
//         <div className="row">
//           <div className="col footer-links d-flex flex-column">
//             <p>Seleziona Lingua</p>
//             <Form.Select aria-label="Default select example">
//               <option>Italiano (Italiano)</option>
//               <option value="2">Inglese (Inglese)</option>
//               <option value="3">Aramaico (Aramaico antico)</option>
//             </Form.Select>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className="row">
//       <div className="col mb-2 mt-2 copyright d-flex align-items-start">
//         Linkedin Corporation © 2024
//       </div>
//     </div>
//   </div>
// </div>
