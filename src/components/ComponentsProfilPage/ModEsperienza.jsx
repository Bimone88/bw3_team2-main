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
  getSingleExperience,
  deleteExperience,
  updateExperience,
} from "../../redux/actions";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const ModEsperienza = (props) => {
  //
  const dispatch = useDispatch();
  const { experienceId } = useParams();
  const experience = useSelector(
    (state) => state.singleExperience.singleExperience
  );
  const userId = useSelector((state) => state.profile.profileDettagli?._id);
  const [isExperienceDeleted, setIsExperienceDeleted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newExperience, setNewExperience] = useState({
    role: "",
    company: "",
    area: "",
    startDate: "",
    endDate: "",
    description: "",
  });
  const [isExperienceUpdated, setIsExperienceUpdated] = useState(false);
  // console.log(experienceId, userId)
  useEffect(() => {
    if (experience) {
      setNewExperience({
        role: experience.role,
        company: experience.company,
        area: experience.area,
        startDate: experience.startDate,
        endDate: experience.endDate,
        description: experience.description,
      });
    }
  }, [experience]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  // console.log(userId, experienceId)

  const handleDeleteExperience = async () => {
    try {
      if (userId && experienceId) {
        await dispatch(deleteExperience(userId, experienceId));
        setIsExperienceDeleted(true);
      } else {
        console.error("userId or experienceId is undefined");
      }
    } catch (error) {
      console.error("Error deleting experience:", error);
    }
  };

  if (isExperienceDeleted) {
    return (
      <div className="modCard">
        {" "}
        <Link to={"/"}>
          <i className="bi bi-arrow-left-short"></i>
        </Link>{" "}
        <br /> <strong> Esperienza cancellata con successo!</strong>
      </div>
    );
  }

  if (!experience) {
    return <div>Loading...</div>;
  }

  const handleUpdateExperience = async (e) => {
    e.preventDefault();
    try {
      await dispatch(updateExperience(userId, experienceId, newExperience));
      setIsExperienceUpdated(true);
      closeModal();
    } catch (error) {
      console.error("Error updating experience:", error);
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewExperience({
      ...newExperience,
      [name]: value,
    });
  };

  return (
    <div>
      {isExperienceUpdated ? (
        <div className="modCard">
          {" "}
          <Link to={"/"}>
            <i className="bi bi-arrow-left-short"></i>
          </Link>{" "}
          <br /> <strong> Esperienza modificata con successo!</strong>
        </div>
      ) : (
        <Card key={experience._id}>
          <Card.Body className="modCard">
            <Row>
              <Col xs={1}>
                <Link to={"/"}>
                  <i className="bi bi-arrow-left-short"></i>
                </Link>
              </Col>
              <Col xs={9}>
                <Card.Title>
                  <strong>Esperienza</strong>
                </Card.Title>
              </Col>
              <Col xs={2}>
                <div className="mb-3 modIcons add">
                  <i
                    className="bi bi-plus-lg add "
                    style={{ cursor: "pointer" }}
                  ></i>
                </div>
                <div className="mb-3 modIcons mod" onClick={openModal}>
                  <i
                    className="bi bi-pencil mod"
                    style={{ cursor: "pointer" }}
                  ></i>
                </div>
              </Col>
            </Row>
            <blockquote className="blockquote mb-0">
              <Row>
                <Col xs={2}>
                  <img src={experience.image} alt="experience img" />
                </Col>
                <Col xs={9}>
                  <h2>{experience.role}</h2>
                  <p>{experience.company}</p>
                  <p>
                    {experience.startDate} - {experience.endDate}
                  </p>
                  <p>{experience.description}</p>
                  <p>{experience.area}</p>
                </Col>
                <Col xs={1}>
                  <div
                    className="ms-1 mt-1 delete"
                    onClick={handleDeleteExperience}
                  >
                    <i
                      className="bi bi-x-circle delete"
                      style={{ cursor: "pointer" }}
                    ></i>
                  </div>
                </Col>
              </Row>
            </blockquote>
          </Card.Body>
        </Card>
      )}
      <Modal show={isModalOpen} onHide={closeModal} id="addExpModal">
        <Modal.Header closeButton>
          <Modal.Title>Modifica Esperienza</Modal.Title>
        </Modal.Header>
        <p>* Indica che è obbligatorio</p>
        <Form onSubmit={handleUpdateExperience} id="addExpModal2">
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

export default ModEsperienza;
