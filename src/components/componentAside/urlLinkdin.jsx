import { Row, Col, Container, Button } from "react-bootstrap";

const UrlLinkdin = () => {
  return (
    <Container>
      <Row className="bg-white mb-3 rounded shadow">
        <Col md={12} className="p-3">
          <div className="d-flex justify-content-between">
            <h4>Public profile & URL</h4>
            <i className="bi bi-pencil-fill fs-5"></i>
          </div>
          <div>
            <p>www.linkedin.com/in/70b656280</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default UrlLinkdin;
