import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const apiURL = 'https://ih-beers-api2.herokuapp.com/beers';

function AllBeersPage() {
  const [allBeers, setAllBeers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiURL);
        const allBeersData = response.data;

        console.log('inside fetchData: allBeersData', allBeersData);

        setAllBeers(allBeersData);
        setLoading(false);
      } catch (err) {
        return <p>No beers found</p>;
      }
    };

    fetchData();

    console.log(allBeers);
  }, []);

  return (
    <div>
      <h1>All Beers Page</h1>

      {loading && (
        <img
          src="https://c.tenor.com/tEBoZu1ISJ8AAAAC/spinning-loading.gif"
          alt="loading"
        />
      )}

      <form>
        <input type="text" placeholder="Search for a beer" />
      </form>
      {allBeers.map((eachBeer) => {
        return (
          <Link to={'/beers/' + eachBeer._id}>
            <div key={eachBeer._id}>
              <img src={eachBeer.image_url} alt="beer" height="200" />
              <h3>{eachBeer.name}</h3>
              <h4>{eachBeer.tagline}</h4>
              <p>Created by:{eachBeer.contributed_by}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default AllBeersPage;
