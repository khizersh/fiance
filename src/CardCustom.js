import React, { Fragment } from "react";
import { Card  , Row} from "react-bootstrap";
import './app.css';

 const CardCustom = () => {
  return (
    <Fragment>
    <Row>
      <Card style={{ width: "18rem" }} className="mt-4">
        <Card.Img variant="top" src={require("./images/card0.png")} />
        <Card.Body>
          
          <Card.Text>
          <i>
            I just cannot believe how you are now mine, no one else’s but only
            mine forever.
            </i>
          </Card.Text>
        </Card.Body>
      </Card>
      </Row>
      <Row>
      <Card style={{ width: "18rem" }} className="mt-4">
        <Card.Img variant="top" src={require("./images/card1.jpg")} />
        <Card.Body>
          <Card.Text>
          <i>
          No relationship is perfect which is why I am thankful that you love my imperfections.
          </i>
          </Card.Text>
        </Card.Body>
      </Card>
      </Row>
      <Row>
      <Card style={{ width: "18rem" }} className="mt-4">
        <Card.Img variant="top" src={require("./images/card2.jpg")} />
        <Card.Body>
        
          <Card.Text>
          <i>
          I love the sound of your voice in my ears, as if you are making me forget all my fears.
            </i>
          </Card.Text>
        </Card.Body>
      </Card>
      </Row>
      <Row>
      <Card style={{ width: "18rem" }} className="mt-4">
        <Card.Img variant="top" src={require("./images/card3.jpg")} />
        <Card.Body>
        
          <Card.Text>
          <i>
          I want you to know that having you as my fiancé is one of the best things that has ever happened in this life of mine.
            </i>
          </Card.Text>
        </Card.Body>
      </Card>
      </Row>
      <Row>
      <Card style={{ width: "18rem" }} className="mt-4">
        <Card.Img variant="top" src={require("./images/card4.jpg")} />
        <Card.Body>
        
          <Card.Text>
          <i>
          It is such an honor to be the husband of the most beautiful girl in this world.
            </i>
          </Card.Text>
        </Card.Body>
      </Card>
      </Row>
      <Row>
      <Card style={{ width: "18rem" }} className="mt-4">
        <Card.Img variant="top" src={require("./images/card5.jpg")} />
        <Card.Body>
        
          <Card.Text>
          <i>
          I just want you to know that you mean the whole world to me and you always will.
            </i>
          </Card.Text>
        </Card.Body>
      </Card>
      </Row>
    </Fragment>
  );
};

export default CardCustom;
