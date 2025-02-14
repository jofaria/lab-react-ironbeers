import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './../components/Header';
import Search from './../components/Search';
import { Card } from 'react-bootstrap';

const apiURL = 'https://ih-beers-api2.herokuapp.com/beers';

function AllBeersPage() {
  const [allBeers, setAllBeers] = useState([]);
  const [updatedBeers, setUpdatedBeers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiURL);
        const allBeersData = response.data;

        setAllBeers(allBeersData);
        setUpdatedBeers(allBeersData);
        setLoading(false);
      } catch (err) {
        return <p>No beers found</p>;
      }
    };

    fetchData();
  }, []);

  const handleSearch = (char) => {
    let filteredBeers;

    if (char === '') {
      filteredBeers = allBeers;
    } else {
      filteredBeers = allBeers.filter((eachBeer) => {
        return eachBeer.name.toLowerCase().includes(char.toLowerCase());
      });
    }
    setUpdatedBeers(filteredBeers);
  };

  return (
    <div
      className="d-inline-flex flex-column justify-content-center"
      style={{ maxWidth: '700px' }}
    >
      <Header />

      <h1 style={{ margin: '20px 0 20px 0' }}>
        Ironhack's Premium Beer Selection
      </h1>

      {loading && (
        <img
          src="https://c.tenor.com/tEBoZu1ISJ8AAAAC/spinning-loading.gif"
          alt="loading"
        />
      )}

      {!loading && <Search handleSearchObj={handleSearch} />}

      {updatedBeers.map((eachBeer) => {
        return (
          <Link
            to={'/beers/' + eachBeer._id}
            className="link"
            key={eachBeer._id}
            style={{ width: '100%', margin: '20px' }}
          >
            <Card style={{ margin: '20px' }}>
              <Card.Body>
                <img src={eachBeer.image_url} alt="beer" height="100px" />
                <Card.Title>{eachBeer.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {eachBeer.tagline}
                </Card.Subtitle>
                <Card.Text>Created by:{eachBeer.contributed_by}</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}

export default AllBeersPage;
