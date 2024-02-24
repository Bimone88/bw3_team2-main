import React from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { PlusLg, Pencil } from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const LanguageSection = () => {
  return (
    <Container>
      <Card
        className="border border-secondary-subtle bg-white rounded-3 mt-3"
        style={{ width: "770px", marginLeft: "auto", marginRight: "auto" }}
      >
        <Row>
          <Col>
            <Card.Header className="d-flex justify-content-between align-items-center bg-white">
              <h5>Lingue</h5>
              <div>
                <Button variant="link" className="text-secondary p-0">
                  <PlusLg size={24} />
                </Button>
                <Button variant="link" className="text-secondary p-0 ms-2">
                  <Pencil size={24} />
                </Button>
              </div>
            </Card.Header>
            <Card.Body>
              <div className="border-bottom pb-3">
                <h3>Italiano</h3>
                <p>Conoscenza madre lingua</p>
              </div>
              <div className="pt-3">
                <h3>Inglese</h3>
                <p>Conoscenza professionale</p>
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default LanguageSection;
