import { Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CardHome(prop) {
  console.log("dati passati", prop.array);

  return (
    <>
      {prop.spinner === true ? (
        <Spinner animation="border" />
      ) : (
        prop.array.map((post, index) => {
          return (
            <Card key={index} className="mb-3">
              <Card.Body>
                <Card.Title>
                  {post.user.name} {post.user.surname}
                </Card.Title>
                <Card.Text>{post.text}</Card.Text>
                <Card.Img variant="top" src={post.image} />
              </Card.Body>
            </Card>
          );
        })
      )}
    </>
  );
}

export default CardHome;
