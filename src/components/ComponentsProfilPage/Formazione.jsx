import React from "react";
import { Card, ListGroup, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Pencil, Plus } from "react-bootstrap-icons";

const Formazione = () => {
  return (
    <Container>
      <Card
        className="border border-secondary-subtle bg-white rounded-3 mt-3"
        style={{ width: "770px", marginLeft: "auto", marginRight: "auto" }}
      >
        <Row className="ms-3 mt-4">
          <Col>
            <Card.Body>
              <Card.Title className="mb-4 d-flex justify-content-between align-items-start">
                Formazione
                <div>
                  <Button
                    variant="outline-secondary"
                    className="me-2 p-0 bg-transparent border-0"
                  >
                    <Plus size={24} />
                  </Button>
                  <Button
                    variant="outline-secondary"
                    className="p-0 bg-transparent border-0"
                  >
                    <Pencil size={24} />
                  </Button>
                </div>
              </Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item className="d-flex align-items-center">
                  <div className="me-auto">
                    <div className="fw-bold">Epicode</div>
                    <div>2023 - 2024</div>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default Formazione;
