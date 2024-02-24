import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const Risorse = () => {
  return (
    <Container>
      <div
        className=" border border-secondary-subtle bg-white rounded-3  mt-3 mb-3"
        style={{ width: "770px", marginLeft: "auto", marginRight: "auto" }}
      >
        <Row className="ms-3 mt-4 ">
          <h5 className="mb-0">Risorse</h5>
          <p className="opacity-75">
            <i className="bi bi-eye-fill"></i> Solo per te
          </p>
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
          <Col>
            <hr className="mt-0 me-4 opacity-25 " />
            <div className="d-flex">
              <i className="bi bi-people-fill"></i>
              <div>
                <p className="fw-bold mb-0 opacity-75 ">La mia rete</p>
                <p>Salva e gestisci i tuoi collegamenti e interessi.</p>
              </div>
            </div>
          </Col>
        </Row>
        <hr className="mt-0" />
        <Link to="/RisorsePage" className="text-decoration-none">
          <p className="text-center opacity-75 text-black ">
            Mostra tutte le risorse ( 5 ) <i className="bi bi-arrow-right"></i>
          </p>
        </Link>
      </div>
    </Container>
  );
};

export default Risorse;
