import React from "react";
import { getPosts } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import CardHome from "./CardHome";
import LeftAside from "./LeftAside";
import { Row, Col } from "react-bootstrap";

const HomePage = () => {
  const dispatch = useDispatch();
  const allPost = useSelector((state) => state.postsReducer.postsList);
  const spinner = useSelector((state) => state.postsReducer.isLoading);
  useEffect(() => {
    dispatch(getPosts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Row>
      <Col lg={1}>
        {" "}
        {/* Questa è una colonna di riempimento vuota per mantenere il layout */}
      </Col>
      <Col lg={3} style={{ paddingTop: "6rem" }}>
        <LeftAside />
      </Col>
      <Col lg={8} style={{ paddingTop: "6rem" }}>
        {/* CardHome con le proprietà passate come prima */}
        <CardHome
          spinner={spinner}
          array={allPost.filter((post, index) => post.image && index <= 80)}
        />
      </Col>
    </Row>
  );
};
export default HomePage;
