import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const Analisi = () => {
  return (
    <>
      <Container>
        <div
          className=" border border-secondary-subtle bg-white rounded-3 mt-3"
          style={{ width: "770px", marginLeft: "auto", marginRight: "auto" }}
        >
          <Row className="ms-3 mt-4">
            <h5 className=" mb-0">Analisi</h5>
            <p className="mb-0">
              <i className="bi bi-eye-fill opacity-75 "></i> Solo per te
            </p>
            <Col>
              <div className="d-flex">
                <i className="bi bi-people-fill me-2"></i>
                <div>
                  <p className=" mb-0 fw-bold opacity-75">
                    24 visualizzazioni del <br />
                    profilo
                  </p>
                  <p>
                    scopri chi ha visto il tuo <br /> profilo.
                  </p>
                </div>
              </div>
            </Col>
            <Col>
              <div className="d-flex">
                <i className="bi bi-bar-chart-line-fill me-2"></i>
                <div>
                  <p className=" mb-0 fw-bold opacity-75">
                    75 impressioni del post
                  </p>
                  <p>
                    scopri chi sta interagendo con i <br />
                    tuoi post.
                  </p>
                </div>
              </div>
            </Col>
            <Col>
              <div className="d-flex">
                <i className="bi bi-search me-2"></i>
                <div>
                  <p className=" mb-0 fw-bold opacity-75">
                    2 comparse nei motori di <br />
                    ricerca
                  </p>
                  <p>
                    vedi quante volte compari nei <br />
                    motori di ricerca.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <hr className="mt-0" />
              <Link to="/AnalisiPage" className="text-decoration-none">
                <p className="text-center opacity-75 text-black ">
                  Mostra tutte le analisi <i className="bi bi-arrow-right"></i>
                </p>
              </Link>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Analisi;
