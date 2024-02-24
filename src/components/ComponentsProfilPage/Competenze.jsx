import React from "react";
import { Card, ListGroup, Button, Container, Row, Col } from "react-bootstrap";
import { PlusLg, Pencil, ArrowRight } from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";

const Competenze = () => {
  const skills = [
    { id: 1, name: "HTML5" },
    { id: 2, name: "CSS" },
  ];

  return (
    <Container>
      <Card
        className="border border-secondary-subtle bg-white rounded-3 mt-3"
        style={{ width: "770px", marginLeft: "auto", marginRight: "auto" }}
      >
        <Row className="ms-3">
          <Col>
            <Card.Header className="d-flex justify-content-between align-items-center bg-white">
              <h5>Competenze</h5>
              <div>
                <Button variant="link" className="text-secondary p-0">
                  <PlusLg size={24} />
                </Button>
                <Button variant="link" className="text-secondary p-0 ms-2">
                  <Pencil size={24} />
                </Button>
              </div>
            </Card.Header>
            <ListGroup variant="flush">
              {skills.map((skill) => (
                <ListGroup.Item
                  key={skill.id}
                  className="d-flex justify-content-between align-items-center bg-white"
                >
                  {skill.name}
                </ListGroup.Item>
              ))}
            </ListGroup>
            <Card.Footer className="bg-white d-flex justify-content-center align-items-center">
              <Button
                variant="link"
                className="text-black text-decoration-none"
              >
                Mostra tutte le competenze (9) <ArrowRight className="ms-2" />
              </Button>
            </Card.Footer>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default Competenze;
