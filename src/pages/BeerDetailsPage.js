import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const apiURL = 'https://ih-beers-api2.herokuapp.com/beers';

function BeerDetailsPage() {
  const { beerId } = useParams();

  const [requestedBeer, setRequestedBeer] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiURL}/${beerId}`);
        const requestedBeerData = response.data;

        console.log(requestedBeerData);
        setRequestedBeer(requestedBeerData);
        setLoading(false);
      } catch (err) {
        return (
          <div>
            <p>No beers found</p>
          </div>
        );
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading && (
        <img
          src="https://c.tenor.com/tEBoZu1ISJ8AAAAC/spinning-loading.gif"
          alt="loading"
        />
      )}
      <h2>Beer Details Page</h2>
      <img src={requestedBeer.image_url} alt="beer" height="200" />
      <h3>{requestedBeer.name}</h3>
      <p>{requestedBeer.tagline}</p>
      <p>Attenuation level: {requestedBeer.attenuation_level}</p>
      <p>Description: {requestedBeer.description}</p>
      <p>Created by: {requestedBeer.contributed_by}</p>

      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>
    </div>
  );
}

export default BeerDetailsPage;

// image;
// name;
// tagline;
// first_brewed;
// attenuation_level;
// description;
// contributed_by;
