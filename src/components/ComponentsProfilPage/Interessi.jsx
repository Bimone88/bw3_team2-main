import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProfile } from "../../redux/actions";
import { Container, Row, Col, Card, Button, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Interest = () => {
  const dispatch = useDispatch();
  const allProfile = useSelector((state) => state.profile.allProfileList);
  const spinner = useSelector((state) => state.profile.isLoading);

  useEffect(() => {
    dispatch(getAllProfile());
  }, [dispatch]);

  return (
    <Container>
      <Card
        className="border border-secondary-subtle bg-white rounded-3 mt-3"
        style={{ width: "770px", marginLeft: "auto", marginRight: "auto" }}
      >
        <Card.Header className="d-flex justify-content-between align-items-center bg-white">
          <h5>Interessi</h5>
        </Card.Header>
        <Card.Body>
          <Row>
            {spinner ? (
              <Col className="d-flex justify-content-center">
                <Spinner animation="border" />
              </Col>
            ) : (
              allProfile
                .filter((_, index) => index > 2)
                .map(
                  (item, index) =>
                    index < 2 && (
                      <Col md={6} key={index}>
                        <div className="d-flex">
                          <div className="me-3">
                            <img
                              className="rounded-circle"
                              src={item.image}
                              alt="Profile"
                              width={50}
                              height={50}
                            />
                          </div>
                          <div className="d-flex flex-column">
                            <h5>
                              {item.name} {item.surname} - 2°
                            </h5>
                            <span>{item.title}</span>
                            <Button
                              style={{
                                width: "100px",
                                borderRadius: "50px",
                                marginTop: "10px",
                              }}
                              variant="outline-dark"
                            >
                              Segui già
                            </Button>
                          </div>
                        </div>
                      </Col>
                    )
                )
            )}
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Interest;
