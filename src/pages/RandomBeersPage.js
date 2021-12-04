import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Header from '../components/Header';

const apiURL = 'https://ih-beers-api2.herokuapp.com/beers';

function RandomBeersPage() {
  const [randomBeer, setRandomBeer] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiURL}/random`);
        const randomBeerData = response.data;

        setRandomBeer(randomBeerData);
        setLoading(false);
      } catch (err) {
        return <p>No beers found</p>;
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Header />
      {loading && (
        <img
          src="https://c.tenor.com/tEBoZu1ISJ8AAAAC/spinning-loading.gif"
          alt="loading"
        />
      )}
      <h2>You Win a Random Beer! </h2>
      <img src={randomBeer.image_url} alt="beer" height="200" />
      <h2>{randomBeer.name}</h2>
      <p>{randomBeer.tagline}</p>
      <p>{randomBeer.first_brewed}</p>
      <p>{randomBeer.attenuation_level}</p>
      <p>{randomBeer.description}</p>
      <p>{randomBeer.contributed_by}</p>
    </div>
  );
}

export default RandomBeersPage;

// image;
// name;
// tagline;
// first_brewed;
// attenuation_level;
// description;
// contributed_by;
