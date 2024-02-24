import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useDispatch, useSelector } from "react-redux";
import { getPersonalProfile } from "../../redux/actions/index";
import { Link } from "react-router-dom";

const AnalisiPage = () => {
  const dispatch = useDispatch();
  const profilo = useSelector((state) => state.profile.profileDettagli);
  const dataCorrente = new Date();

  useEffect(() => {
    dispatch(getPersonalProfile());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const giornoCorrente = dataCorrente.getDay();
  const giorniSettimana = [
    "Domenica",
    "Lunedì",
    "Martedì",
    "Mercoledì",
    "Giovedì",
    "Venerdì",
    "Sabato",
  ];
  const giornoAttuale = giorniSettimana[giornoCorrente];

  const giornoDelMese = dataCorrente.getDate();

  const meseCorrente = dataCorrente.getMonth();
  const mesi = [
    "Gennaio",
    "Febbraio",
    "Marzo",
    "Aprile",
    "Maggio",
    "Giugno",
    "Luglio",
    "Agosto",
    "Settembre",
    "Ottobre",
    "Novembre",
    "Dicembre",
  ];
  const meseAttuale = mesi[meseCorrente];

  return (
    <>
      <Container>
        <Row
          className=" justify-content-center mt-4"
          style={{ paddingTop: "4.4rem" }}
        >
          <div className=" border border-secondary-subtle bg-white rounded-3 w-75">
            <Row className="ms-3 my-3">
              <Col>
                <div className="d-flex">
                  <Link to="/profile" className="text-decoration-none">
                    <img
                      src={profilo.image}
                      alt="logo"
                      style={{ width: 50 }}
                      className=" rounded-circle me-3"
                    />
                  </Link>
                  <div>
                    <h5 className="mb-0">Analisi e strumenti</h5>
                    <p className="mb-0">
                      {giornoAttuale}, {giornoDelMese} {meseAttuale}
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className=" border border-secondary-subtle bg-white rounded-3 w-75 mt-3">
            <Row className="ms-3 mt-4">
              <h5 className=" opacity-75 mb-4">
                Analisi <i className="bi bi-question-circle-fill fs-6 "></i>
              </h5>
              <Col>
                <div className="border border-secondary-subtle rounded-3 ps-3">
                  <h5 className="mb-0 mt-3">104</h5>
                  <p className="opacity-75">
                    Impresisoni del post
                    <br />
                    <span className=" text-success">
                      <i className="bi bi-caret-up-fill"></i>300%{" "}
                    </span>
                    Ultimi 7 giorni
                  </p>
                </div>
              </Col>
              <Col>
                <div className="border border-secondary-subtle rounded-3 ps-3 me-3">
                  <h5 className="mb-0 mt-3">188</h5>
                  <p className="opacity-75">
                    Follower
                    <br />
                    <span className="text-success">
                      {" "}
                      <i className="bi bi-caret-up-fill"></i>0,6%{" "}
                    </span>
                    Ultimi 7 giorni
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="my-3 ms-3">
              <Col>
                <div className="border border-secondary-subtle rounded-3 ps-3">
                  <h5 className="mb-0 mt-3">24</h5>
                  <p className="opacity-75">
                    Visitatori del profilo
                    <br />
                    Ultimi 90 giorni
                  </p>
                </div>
              </Col>
              <Col>
                <div className="border border-secondary-subtle rounded-3 ps-3 me-3">
                  <h5 className="mb-0 mt-3">2</h5>
                  <p className="opacity-75">
                    Comparse nelle ricerche
                    <br /> settimana precedente
                  </p>
                </div>
              </Col>
            </Row>
          </div>
          <div className=" border border-secondary-subtle bg-white rounded-3 mt-3 w-75">
            <Row className="ms-3 mt-4">
              <Col>
                <h5>Strumenti di crazione</h5>
                <p>
                  Scopri altri modi per avviare la conversazione con la tua
                  community.
                  <a href="#" className="fw-bold text-decoration-none">
                    {" "}
                    Scopri di più{" "}
                  </a>
                  sull&apos;accesso agli strumenti di creazione.
                </p>
                <div className="d-flex justify-content-between">
                  <p>LinkedIn Live</p>
                  <p className="me-5  opacity-75 mb-0">
                    <i className="bi bi-info-square-fill"></i> Scopri di più{" "}
                    <i className="bi bi-chevron-compact-right"></i>
                  </p>
                </div>
                <hr className="mt-0" />
                <div className="d-flex justify-content-between">
                  <p>Evento audio</p>
                  <p className="me-5  opacity-75 mb-0">
                    <i className="bi bi-info-square-fill"></i> Scopri di più{" "}
                    <i className="bi bi-chevron-compact-right"></i>
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Row>
      </Container>
    </>
  );
};
export default AnalisiPage;
