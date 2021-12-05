import React from 'react';
import { Link } from 'react-router-dom';
import beersImg from './../assets/beers.png';
import randomBeersImg from './../assets/random-beer.png';
import newBeerImg from './../assets/new-beer.png';
import { Card } from 'react-bootstrap';

function HomePage() {
  return (
    <div>
      <Link to="/beers" className="link">
        <Card style={{ width: '18rem' }}>
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

      <Link to="/random-beer" className="link">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={randomBeersImg} alt="" />
          <Card.Body>
            <Card.Title>Random Beer</Card.Title>
            <Card.Text className="card-text">
              Prefer to be surprised? Click here to get a different beer
              suggestion every time.
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>

      <Link to="/new-beer" className="link">
        <Card style={{ width: '18rem' }}>
          <Card.Img
            variant="top"
            src={newBeerImg}
            alt="pub-counter-with-various-tap-beers"
          />
          <Card.Body>
            <Card.Title>New Beer</Card.Title>
            <Card.Text className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              mattis commodo nunc, in suscipit massa faucibus tempor. Praesent
              elementum interdum turpis sed interdum. Nunc consectetur ipsum sit
              amet dolor suscipit, et convallis nisl aliquet.
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
}

export default HomePage;

// <div class="card" style="width: 18rem;">
//   <img src="..." class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
