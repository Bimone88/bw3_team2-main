import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const RisorsePage = () => {
  return (
    <Container>
      <Row
        className=" justify-content-center mt-4"
        style={{ paddingTop: "3.4rem" }}
      >
        <div className=" border border-secondary-subtle bg-white rounded-3 w-75 mt-3 mb-3 ps-4">
          <h5 className="mt-4">
            <Link to="/profile" className="text-decoration-none">
              <i className="bi bi-arrow-left me-3 text-dark"></i>
            </Link>
            Risorse
          </h5>
          <Col lg={12}>
            <div className="d-flex">
              <i className="bi bi-radar me-2"></i>
              <div>
                <p className="fw-bold mb-0 opacity-75 ">
                  Modalità creazione di contenuti{" "}
                  <span className="border bg-secondary-subtle px-2 rounded-2 ">
                    {" "}
                    No
                  </span>
                </p>
                <p>
                  Fatti scoprire, metti in risalto i contenuti sul tuo profilo e
                  accedi agli strumenti di creazione.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={12}>
            <hr className="mt-0 me-4 opacity-25 " />
            <div className="d-flex">
              <i className="bi bi-people-fill me-2"></i>
              <div>
                <p className="fw-bold mb-0 opacity-75 ">La mia rete</p>
                <p>Salva e gestisci i tuoi collegamenti e interessi.</p>
              </div>
            </div>
          </Col>
          <Col lg={12}>
            <hr className="mt-0 me-4 opacity-25 " />
            <div className="d-flex">
              <i className="bi bi-person-fill me-2"></i>
              <div>
                <p className="fw-bold mb-0 opacity-75 ">
                  Informazioni demografiche personali
                </p>
                <p>Aggiungi o gestisci le tue informazioni.</p>
              </div>
            </div>
          </Col>
          <Col lg={12}>
            <hr className="mt-0 me-4 opacity-25 " />
            <div className="d-flex">
              <i className="bi bi-layout-text-window me-2"></i>
              <div>
                <p className="fw-bold mb-0 opacity-75 ">Attività</p>
                <p>
                  Guarda cosa hai condiviso con la tua rete, per esempio post,
                  articoli e commenti.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={12}>
            <hr className="mt-0 me-4 opacity-25 " />
            <div className="d-flex">
              <i className="bi bi-bookmark-fill me-2"></i>
              <div>
                <p className="fw-bold mb-0 opacity-75 ">I miei elementi</p>
                <p>
                  Monitora le tue offerte di lavoro, i corsi e gli articoli.
                </p>
              </div>
            </div>
          </Col>
        </div>
      </Row>
    </Container>
  );
};

export default RisorsePage;
