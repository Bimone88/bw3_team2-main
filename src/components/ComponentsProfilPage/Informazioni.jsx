import React, { useEffect } from "react";
import { Card, Spinner, Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getPersonalProfile } from "../../redux/actions/index";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Informazioni = () => {
  const dispatch = useDispatch();
  const personalProfile = useSelector((state) => state.profile.profileDettagli);
  const bio = personalProfile?.bio;
  const spinner = useSelector((state) => state.profile.isLoading);

  useEffect(() => {
    dispatch(getPersonalProfile());
  }, [dispatch]);

  return (
    <>
      {spinner === false ? (
        <Container>
          <Card
            className="border border-secondary-subtle bg-white rounded-3  mt-3"
            style={{ width: "770px", marginLeft: "auto", marginRight: "auto" }}
          >
            <Row className="ms-3 mt-4">
              <Col>
                <Card.Body>
                  <h5 className="mb-0">Informazioni</h5>
                  <p className="mb-0">
                    <i className="bi bi-eye-fill opacity-75"></i> Solo per te
                  </p>
                </Card.Body>
                <Card.Body>
                  <div className="d-flex">
                    <p>{bio}</p>
                  </div>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Container>
      ) : (
        <div className="text-center">
          <Spinner animation="border" /> <br />
          <p>Loading</p>
        </div>
      )}
    </>
  );
};

export default Informazioni;
