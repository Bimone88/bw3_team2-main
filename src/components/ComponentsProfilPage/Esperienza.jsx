import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import {
  Card,
  Row,
  Col,
  Modal,
  Button,
  Form,
  InputGroup,
} from "react-bootstrap";
import {
  getAllExperience,
  addExperience,
  getSingleExperience,
} from "../../redux/actions";
import { Link, useNavigate } from "react-router-dom";

const Esperienza = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.profile.profileDettagli?._id);
  const allExperience = useSelector(
    (state) => state.allExperience.allExperienceList
  );
  const [showModal, setShowModal] = useState(false);

  const [newExperience, setNewExperience] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
  });

  useEffect(() => {
    if (userId) {
      // console.log("Recupero l'ID utente:", userId);
      dispatch(getAllExperience(userId));
    }
  }, [dispatch, userId]);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModOpen = (experienceId) => {
    // console.log("Experience ID:", experienceId);
    dispatch(getSingleExperience(userId, experienceId));
  };
  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewExperience({ ...newExperience, [name]: value });
  };

  const handleAddExperience = async (event) => {
    event.preventDefault();
    try {
      await dispatch(addExperience(userId, newExperience));

      setShowModal(false);

      dispatch(getAllExperience(userId));
    } catch (error) {
      console.log("Errore durante l'aggiunta dell'esperienza:", error);
    }
  };

  return (
    <div style={{ width: "800px", marginLeft: "auto", marginRight: "auto" }}>
      {allExperience &&
        allExperience.map((experience) => (
          <Card key={experience._id} className="m-3 expCard">
            <Card.Body>
              <Row>
                <Col xs={10}>
                  <Card.Title className="ms-1 mb-4">
                    <strong>Esperienza</strong>
                  </Card.Title>
                </Col>
                <Col xs={2}>
                  <span
                    className="me-4 add"
                    onClick={() => {
                      handleModalOpen();
                    }}
                  >
                    <i
                      className="bi bi-plus-lg "
                      style={{ cursor: "pointer" }}
                    ></i>
                  </span>
                  <span
                    className="mod"
                    onClick={() => handleModOpen(experience._id)}
                  >
                    <Link to={`/modEsperienza/${userId}/${experience._id}`}>
                      <i className="bi bi-pencil mod"></i>
                    </Link>
                  </span>
                </Col>
              </Row>
              <blockquote className="blockquote mb-0">
                <Row>
                  <Col xs={2}>
                    <img
                      src="/public/0x0.png"
                      alt="experience img"
                      width={50}
                    />
                  </Col>
                  <Col xs={10}>
                    <h2>{experience.role}</h2>
                    <p>{experience.company}</p>
                    <p>
                      {experience.startDate} - {experience.endDate}
                    </p>
                    <p>{experience.area}</p>
                    <p>{experience.description}</p>
                  </Col>
                </Row>
              </blockquote>
            </Card.Body>
          </Card>
        ))}
      {!allExperience.length && (
        <Button onClick={handleModalOpen}>Aggiungi Esperienza</Button>
      )}
      <Modal show={showModal} onHide={handleModalClose} id="addExpModal">
        <p>* Indica che è obbligatorio</p>
        <Form onSubmit={handleAddExperience} id="addExpModal2">
          <Form.Group className="mb-3">
            <Form.Label>Qualifica*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Esempio: Retail Sales Manager"
              name="role"
              value={newExperience.role}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formGridState1">
            <Form.Label>Tipo di impiego</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Seleziona</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Nome azienda*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Esempio: Microsoft"
              name="company"
              value={newExperience.company}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Località*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Esempio: Milano, Italia"
              name="area"
              value={newExperience.area}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formGridState2">
            <Form.Label>Tipo di località</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Seleziona</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>
          <br />
          <br />
          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check
              type="checkbox"
              label="Attualmente ricopro questo ruolo"
              className="mb-4"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Data di inizio*</Form.Label>
            <Form.Control
              type="text"
              placeholder="anno-mese-giorno"
              name="startDate"
              value={newExperience.startDate}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Data di fine*</Form.Label>
            <Form.Control
              type="text"
              placeholder="anno-mese-giorno"
              name="endDate"
              value={newExperience.endDate}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Settore*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Esempio: Informatica"
              name="description"
              value={newExperience.description}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Label>Descrizione</Form.Label>
          <InputGroup>
            <Form.Control as="textarea" aria-label="With textarea" />
          </InputGroup>
          <br />
          <br />
          <Form.Group className="mb-3">
            <Form.Label>Sommario del profilo</Form.Label>
            <Form.Control
              type="text"
              placeholder="Esempio: Full-Stack Developer"
            />
          </Form.Group>
          <Button variant="primary" type="submit" id="addExpBtn">
            Salva
          </Button>
        </Form>
      </Modal>
    </div>
  );
};

export default Esperienza;
