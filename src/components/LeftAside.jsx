import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useSelector } from "react-redux";

const LeftAside = () => {
  const profilo = useSelector((state) => state.profile.profileDettagli);

  if (!profilo) {
    return <div>Caricamento del profilo in corso...</div>;
  }

  return (
    <Card
      style={{
        width: "100%",
        borderRadius: "15px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      }}
    >
      <Card.Img
        variant="top"
        src={profilo.image}
        style={{
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          margin: "10px auto",
        }}
      />
      <Card.Body style={{ textAlign: "center" }}>
        <Card.Title>{profilo.name}</Card.Title>
        <Card.Text>{profilo.title}</Card.Text>
      </Card.Body>
      <ListGroup variant="flush">
        <ListGroup.Item
          style={{ padding: "10px 15px 0px 15px", borderBottom: "none" }}
        >
          {" "}
          <span style={{ fontSize: "small", color: "grey" }}>Collegamenti</span>
          <span style={{ float: "right", color: "#0A66C2" }}>5</span>
        </ListGroup.Item>
        <ListGroup.Item
          style={{ padding: "0 15px", borderBottom: "1px solid #E0E0E0" }}
        >
          <span style={{ fontSize: "small", fontWeight: "bolder" }}>
            Espandi la tua rete
          </span>
        </ListGroup.Item>
        <ListGroup.Item style={{ padding: "5px 15px" }}>
          <div style={{ fontSize: "small", color: "grey" }}>
            Sblocca strumenti e informazioni Premium
          </div>
          <div
            style={{ fontSize: "small", color: "black", fontWeight: "bolder" }}
          >
            Prova Premium per 0 EUR
          </div>
        </ListGroup.Item>
        <ListGroup.Item
          style={{ borderTop: "1px solid #E0E0E0", padding: "10px 15px" }}
        >
          <i className="bi bi-bookmark-fill" style={{ color: "#5E5E5E" }}></i>
          <span
            style={{
              color: "#5E5E5E",
              fontSize: "small",
              fontWeight: "bolder",
            }}
          >
            I miei elementi
          </span>
        </ListGroup.Item>

        {/* Aggiungi questa nuova sezione dopo gli elementi esistenti */}
        <ListGroup.Item
          style={{ borderTop: "1px solid #E0E0E0", padding: "10px 15px" }}
        >
          <i className="bi bi-people-fill" style={{ color: "#5E5E5E" }}></i>
          <span
            style={{
              color: "#5E5E5E",
              fontSize: "small",
              fontWeight: "bolder",
              marginLeft: "5px",
            }}
          >
            Gruppi
          </span>
        </ListGroup.Item>

        {/* Aggiungi un nuovo ListGroup.Item per la sezione Eventi */}
        <ListGroup.Item style={{ padding: "10px 15px" }}>
          <i
            className="bi bi-calendar-event-fill"
            style={{ color: "#5E5E5E" }}
          ></i>
          <span
            style={{
              color: "#5E5E5E",
              fontSize: "small",
              fontWeight: "bolder",
              marginLeft: "5px",
            }}
          >
            Eventi
          </span>
          <i
            className="bi bi-plus-lg"
            style={{ float: "right", color: "#5E5E5E" }}
          ></i>
        </ListGroup.Item>

        {/* Aggiungi un nuovo ListGroup.Item per la sezione Hashtag seguiti */}
        <ListGroup.Item style={{ padding: "10px 15px" }}>
          <i className="bi bi-hash" style={{ color: "#5E5E5E" }}></i>
          <span
            style={{
              color: "#5E5E5E",
              fontSize: "small",
              fontWeight: "bolder",
              marginLeft: "5px",
            }}
          >
            Hashtag seguiti
          </span>
        </ListGroup.Item>
      </ListGroup>
      <Card.Body style={{ padding: "10px 15px", textAlign: "center" }}>
        {" "}
        {/* aggiunto textAlign per centrare */}
        <Card.Link
          href="#"
          style={{
            display: "inline-block",
            margin: "10px 0",
            color: "#74809C",
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          Scopri di più
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

export default LeftAside;
