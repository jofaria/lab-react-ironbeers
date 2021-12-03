import React from 'react';
import { Link } from 'react-router-dom';
import beersImg from './../assets/beers.png';
import randomBeersImg from './../assets/random-beer.png';
import newBeerImg from './../assets/new-beer.png';

function HomePage() {
  return (
    <div>
      <h2>Home Page</h2>
      <Link to="/beers">
        <img src={beersImg} alt="" />
        <h2>All Beers</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          mattis commodo nunc, in suscipit massa faucibus tempor. Praesent
          elementum interdum turpis sed interdum. Nunc consectetur ipsum sit
          amet dolor suscipit, et convallis nisl aliquet. Aliquam nec justo eu
          nibh sollicitudin consequat. Maecenas porttitor sapien eu ex
          imperdiet, at euismod ligula vestibulum. Cras est augue, facilisis at
          interdum in, elementum eu ipsum. Integer feugiat auctor lacus sit amet
          pulvinar. Vestibulum maximus semper arcu at maximus.
        </p>
      </Link>
      <Link to="/random-beer">
        <img src={randomBeersImg} alt="" />
        <h2>Random Beer</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          mattis commodo nunc, in suscipit massa faucibus tempor. Praesent
          elementum interdum turpis sed interdum. Nunc consectetur ipsum sit
          amet dolor suscipit, et convallis nisl aliquet. Aliquam nec justo eu
          nibh sollicitudin consequat. Maecenas porttitor sapien eu ex
          imperdiet, at euismod ligula vestibulum. Cras est augue, facilisis at
          interdum in, elementum eu ipsum. Integer feugiat auctor lacus sit amet
          pulvinar. Vestibulum maximus semper arcu at maximus.
        </p>
      </Link>
      <Link to="/new-beer">
        <img src={newBeerImg} alt="" />
        <h2>New Beers</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          mattis commodo nunc, in suscipit massa faucibus tempor. Praesent
          elementum interdum turpis sed interdum. Nunc consectetur ipsum sit
          amet dolor suscipit, et convallis nisl aliquet. Aliquam nec justo eu
          nibh sollicitudin consequat. Maecenas porttitor sapien eu ex
          imperdiet, at euismod ligula vestibulum. Cras est augue, facilisis at
          interdum in, elementum eu ipsum. Integer feugiat auctor lacus sit amet
          pulvinar. Vestibulum maximus semper arcu at maximus.
        </p>
      </Link>
    </div>
  );
}

export default HomePage;
