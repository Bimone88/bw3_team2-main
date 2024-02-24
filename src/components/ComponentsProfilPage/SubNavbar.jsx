import React from "react";
import { Button, Navbar } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPersonalProfile } from "../redux/actions/index";
const buttonStyle1 = {
  backgroundColor: "#ffffff",
  color: "#000000",
  border: "1px solid #d1d1d1",
  borderRadius: "20px",
  padding: "5px 15px",
  margin: "0 5px",
  boxShadow: "none",
  fontWeight: "bold",
};

const buttonStyle2 = {
  backgroundColor: "#0A66C2",
  color: "#ffffff",
  border: "none",
  borderRadius: "20px",
  padding: "5px 15px",
  margin: "0 5px",
  boxShadow: "none",
  fontWeight: "bold",
};

const buttonStyle3 = {
  backgroundColor: "#ffffff",
  border: "1px solid #0A66C2",
  borderRadius: "20px",
  padding: "5px 20px",
  margin: "0 5px",
  boxShadow: "0 2px 4px rgb(0 0 0 / 15%)",
  fontWeight: "bold",
};

const ProfileButtons = () => {
  return (
    <div>
      <Button style={buttonStyle1}>Altro</Button>
      <Button style={buttonStyle2}>Aggiungi sezione del profilo</Button>
      <Button style={buttonStyle3}>Disponibile per</Button>
    </div>
  );
};

const SubNavbarContent = () => {
  const dispatch = useDispatch();
  const profilo = useSelector((state) => state.profile.profileDettagli);
  const spinner = useSelector((state) => state.profile.isLoading);

  useEffect(() => {
    dispatch(getPersonalProfile());
    console.log(profilo);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={profilo.image}
          alt="Profile"
          style={{ borderRadius: "50%", marginRight: "10px" }}
        />
        <div>
          <strong>{profilo.name}</strong>
          <div>{profilo.title}</div>
        </div>
      </div>
      <ProfileButtons />
    </div>
  );
};

export default SubNavbarContent;
