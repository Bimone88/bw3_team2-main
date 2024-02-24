import { Row, Col, Container, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getAllProfile } from "../../redux/actions/index";
import { Spinner } from "react-bootstrap/esm";

const ProfileConsulted = (prop) => {
  const dispatch = useDispatch();
  // const allProfile = useSelector((state) => state.profile.allProfileList);
  const spinner = useSelector((state) => state.profile.isLoading);
  useEffect(() => {
    dispatch(getAllProfile());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Row className="bg-white mb-3 rounded shadow">
        <h5 className="mt-4">{prop.title}</h5>
        {spinner === true ? (
          <Spinner className="border-top" animation="border" />
        ) : (
          prop.array.map((item, index) => (
            <Col md={12} className=" py-3  bg-white border-bottom" key={index}>
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
                <div className="d-flex flex-column align-items-center ">
                  <h5>
                    {item.name} {item.surname} - 2°
                  </h5>
                  <p className="m-0"></p>
                  <span>{item.title}</span>
                  <Button
                    style={{
                      // width: 100,
                      borderRadius: 50,
                      marginTop: 10,
                    }}
                    variant="outline-dark"
                  >
                    <i className="bi bi-person-plus-fill me-1"></i>
                    Collegati
                  </Button>
                </div>
              </div>
            </Col>
          ))
        )}
        <Col className=" btn-custom ">
          <div className="text-center my-3">
            <p className="m-0">Mostra tutto</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileConsulted;
