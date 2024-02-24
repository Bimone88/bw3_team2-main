import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPersonalProfile } from "../../redux/actions/index";
import { putPersonalProfile } from "../../redux/actions/index";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Col, Container, Form, Row } from "react-bootstrap";

const Profile = () => {
  const dispatch = useDispatch();
  const profilo = useSelector((state) => state.profile.profileDettagli);
  const spinner = useSelector((state) => state.profile.isLoading);
  const [show, setShow] = useState(false);

  const [updatedProfileData, setUpdatedProfileData] = useState({
    name: "",
    surname: "",
    title: "",
    bio: "",
    area: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    dispatch(getPersonalProfile());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Funzione per gestire le modifiche ai campi del profilo nel modale
  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProfileData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Funzione per gestire il salvataggio delle modifiche
  const handleSaveChanges = () => {
    dispatch(putPersonalProfile(updatedProfileData));
    handleClose(); // Chiudi il modale dopo il salvataggio
  };

  return (
    <>
      {spinner === false ? (
        <>
          <Container>
            <Row className="justify-content-center pt-5 mt-5">
              <Card className="p-0 ms-1" style={{ width: 770 }}>
                <Card.Img variant="top" src="https://placekitten.com/900/200" />
                <img
                  src={profilo.image}
                  alt=""
                  width={150}
                  className="rounded-circle z-3 position-absolute bottom-50 ms-3"
                />
                <Card.Body>
                  <div className="d-flex p-0 m-0 mt-5">
                    <Card.Text className="me-1 fs-2 fw-semibold p-0 mb-0">
                      {profilo.name}
                    </Card.Text>
                    <Card.Text className="fs-2 fw-semibold p-0 mb-0 flex-grow-1 ">
                      {profilo.surname}
                    </Card.Text>
                    <i className="bi bi-pencil-fill" onClick={handleShow}></i>
                  </div>
                  <Card.Text className="text-start  mt-0 mb-3">
                    {profilo.title}
                  </Card.Text>

                  <div className="d-flex">
                    <Card.Text className="me-2 text-secondary">
                      {profilo.area}{" "}
                    </Card.Text>
                    <Card.Text>
                      <a href="#" className="text-decoration-none fw-medium">
                        {" "}
                        Informazioni di contatto{" "}
                      </a>
                    </Card.Text>
                  </div>
                  <div className="text-start">
                    <Card.Text className="mb-3 fw-medium text-primary">
                      180 collegamenti
                    </Card.Text>
                  </div>
                  <div className="text-start">
                    <Button variant="primary" className="me-2 rounded-pill">
                      Disponibile per
                    </Button>
                    <Button
                      variant="outline-primary"
                      className="me-2 rounded-pill"
                    >
                      Aggiungi sezione del profilo
                    </Button>
                    <Button
                      variant="outline-secondary"
                      className="rounded-pill"
                    >
                      Altro
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Row>
          </Container>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>
                {" "}
                <h5>Modifica presentazione</h5>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="pt-0">
              <p className=" opacity-75 ">* indica che è obbligatorio</p>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className=" opacity-75 ">Nome*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    name="name"
                    value={updatedProfileData.name}
                    onChange={handleProfileChange}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className=" opacity-75 ">Cognome*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    name="surname"
                    value={updatedProfileData.surname}
                    onChange={handleProfileChange}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className=" opacity-75 ">Titolo</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    name="title"
                    value={updatedProfileData.title}
                    onChange={handleProfileChange}
                  />
                </Form.Group>
              </Form>
              <p className="mb-0">Pronuncia del nome</p>
              <p className=" small text-black opacity-75">
                <i className="bi bi-info-square-fill"></i> Può essere aggiunta
                solo usando la nostra app per dispositivi mobili
              </p>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className=" opacity-75 ">
                    Inserisci pronomi personalizzati
                  </Form.Label>
                  <Form.Control type="text" placeholder="" />
                  <p className="small opacity-50 ">
                    Indica i pronomi di genere che vuoi che altri usano per
                    riferirsi a te
                  </p>
                </Form.Group>
              </Form>
              <p>
                Scopri di più sui{" "}
                <span className="fw-bold text-primary"> pronomi di genere</span>
              </p>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className=" opacity-75 ">Bio*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    name="bio"
                    value={updatedProfileData.bio}
                    onChange={handleProfileChange}
                  />
                </Form.Group>
              </Form>
              <h5>Posizione attuale</h5>
              <p className="fw-bold text-primary mt-4">
                <i className="bi bi-plus-lg"></i> Aggiungi una nuova posizione
                lavorativa
              </p>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className=" opacity-75 ">Settore*</Form.Label>
                  <Form.Control type="text" placeholder="" />
                </Form.Group>
              </Form>
              <p>
                Scopri di più sulle{" "}
                <span className="fw-bold" style={{ color: "purple" }}>
                  opzioni relative al settore
                </span>
              </p>
              <h5 className="mt-4">Formazione</h5>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className=" opacity-75 ">Formazione*</Form.Label>
                  <Form.Control type="text" placeholder="" />
                </Form.Group>
              </Form>
              <p className="fw-bold text-primary mt-4">
                <i className="bi bi-plus-lg"></i> Aggiungi una nuovo grado di
                formazione
              </p>
              <Form>
                <Form.Group className="mb-3 d-flex">
                  <Form.Check type="checkbox" className="me-1" />
                  <p className="opacity-75">
                    Mostra la formazione nella mia presentazione
                  </p>
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className=" opacity-75 ">
                    Paese/Area geografica*
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    name="area"
                    value={updatedProfileData.area}
                    onChange={handleProfileChange}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className=" opacity-75 ">CAP</Form.Label>
                  <Form.Control type="text" placeholder="" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className=" opacity-75 ">Città*</Form.Label>
                  <Form.Control type="text" placeholder="" />
                </Form.Group>
              </Form>
              <h5>Informazioni di contatto</h5>
              <p className=" opacity-75">
                Aggiungi o modifica il tuo profilo URL, indirizzo email o altro
              </p>
              <p className="fw-bold text-primary ms-2 mt-4">
                Modifica le informazioni di contatto
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="primary"
                onClick={handleSaveChanges}
                className=" rounded-5 px-3"
              >
                Salva
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
};

export default Profile;
