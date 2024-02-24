import { Col, Container, Row } from "react-bootstrap";

const FooterHome = () => {
  const annoCorrente = new Date().getFullYear();
  return (
    <>
      <Container style={{ width: "300px" }}>
        <Row className="mt-5">
          <Row>
            <Col className="d-flex justify-content-center">
              <p className="small me-3">Informazione</p>
              <p className="small" style={{ color: "purple" }}>
                Accessibilità
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center">
              <p className="small me-3">Centro assistenza</p>
              <p className="small">
                Privacy e condizioni{" "}
                <i className="bi bi-caret-down-fill opacity-75 "></i>
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center">
              <p className="small">Opzioni per gli annunci pubblicitari</p>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center">
              <p className="small me-3">Pubblicità</p>
              <p className="small">
                Servizi alle aziende{" "}
                <i className="bi bi-caret-down-fill opacity-75"></i>
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center">
              <p className="small me-3">Scarica l&apos;app LinkedIn</p>
              <p className="small border bg-primary text-white">Altro</p>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <p className="small">
                <span className="fw-bold text-primary ">Linked</span>
                <span className="fw-bold border bg-primary text-white ">
                  In
                </span>
                LinkedIn Corporation © {annoCorrente}
              </p>
            </Col>
          </Row>
        </Row>
      </Container>
    </>
  );
};

export default FooterHome;
