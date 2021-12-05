import React from 'react';
import { Link } from 'react-router-dom';
import beersImg from './../assets/beers.png';
import randomBeersImg from './../assets/random-beer.png';
import newBeerImg from './../assets/new-beer.png';
import { Card } from 'react-bootstrap';

function HomePage() {
  return (
    <div
      className="d-inline-flex flex-column justify-content-center"
      style={{ maxWidth: '700px' }}
    >
      <Link to="/beers" className="link" style={{ margin: '20px 0 20px 0' }}>
        <Card>
          <Card.Img
            variant="top"
            src={beersImg}
            alt="pub-counter-with-various-tap-beers"
          />
          <Card.Body>
            <Card.Title>All Beers</Card.Title>
            <Card.Text className="card-text">
              Discover Ironhack's premium beer selection. Browse through the
              complete list to find the best match for your taste buds.
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>

      <Link
        to="/random-beer"
        className="link"
        style={{ margin: '20px 0 20px 0' }}
      >
        <Card>
          <Card.Img variant="top" src={randomBeersImg} alt="counter-tap" />
          <Card.Body>
            <Card.Title>Random Beer</Card.Title>
            <Card.Text className="card-text">
              Prefer to be surprised? <br /> Get a different beer suggestion
              every time.
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>

      <Link to="/new-beer" className="link" style={{ margin: '20px 0 20px 0' }}>
        <Card>
          <Card.Img
            variant="top"
            src={newBeerImg}
            alt="glass-of-beer-and-bottle"
          />
          <Card.Body>
            <Card.Title>New Beer</Card.Title>
            <Card.Text className="card-text">
              Is this collection missing a beer? <br /> Add one!
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
}

export default HomePage;
