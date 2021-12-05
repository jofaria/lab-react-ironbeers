import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const apiURL = 'https://ih-beers-api2.herokuapp.com/beers';

function AddBeerPage() {
  const [name, setName] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [first_brewed, setFirst_Brewed] = useState('');
  const [brewers_tips, setBrewers_Tips] = useState('');
  const [attenuation_level, setAttenuation_Level] = useState(0);
  const [contributed_by, setContributed_By] = useState('');

  const navigate = useNavigate();

  // handler functions
  const handleName = (e) => setName(e.target.value);
  const handleTagline = (e) => setTagline(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleFirst_Brewed = (e) => setFirst_Brewed(e.target.value);
  const handleBrewers_Tips = (e) => setBrewers_Tips(e.target.value);
  const handleAttenuation_Level = (e) => setAttenuation_Level(e.target.value);
  const handleContributed_By = (e) => setContributed_By(e.target.value);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const newBeer = {
        name,
        tagline,
        description,
        first_brewed,
        brewers_tips,
        attenuation_level,
        contributed_by,
      };

      await axios.post(`${apiURL}/new`, newBeer);
      console.log('new beer posted', newBeer);

      setName('');
      setTagline('');
      setDescription('');
      setFirst_Brewed('');
      setBrewers_Tips('');
      setAttenuation_Level(0);
      setContributed_By('');

      navigate('/');
    } catch (err) {
      return <p>No beers found</p>;
    }
  };

  return (
    <div
      className="d-inline-flex flex-column justify-content-center"
      style={{ maxWidth: '700px' }}
    >
      <Header />
      <h1>Add a Beer</h1>
      <form onSubmit={handleSubmit} style={{ margin: '20px' }}>
        <Form.Group className="mb-3" controlId="formGroupName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            value={name}
            onChange={handleName}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupTagline">
          <Form.Label>Tagline</Form.Label>
          <Form.Control
            type="text"
            placeholder="Tagline"
            value={tagline}
            onChange={handleTagline}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Description"
            value={description}
            onChange={handleDescription}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupfirst_brewed">
          <Form.Label>First Brewed</Form.Label>
          <Form.Control
            type="text"
            placeholder="First Brewed"
            value={first_brewed}
            onChange={handleFirst_Brewed}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupbrewers_tips">
          <Form.Label>Brewers Tips</Form.Label>
          <Form.Control
            type="text"
            placeholder="Brewers Tips"
            value={brewers_tips}
            onChange={handleBrewers_Tips}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupattenuation_level">
          <Form.Label>Attenuation Level</Form.Label>
          <Form.Control
            type="text"
            placeholder="Attenuation Level"
            value={attenuation_level}
            onChange={handleAttenuation_Level}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupcontributed_by">
          <Form.Label>Created By</Form.Label>
          <Form.Control
            type="text"
            placeholder="Created By"
            value={contributed_by}
            onChange={handleContributed_By}
          />
        </Form.Group>
        <button className="btn btn-primary">Add Beer</button>
      </form>
    </div>
  );
}

export default AddBeerPage;

/*
<form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" value={name} onChange={handleName} />
        <label>Tagline</label>
        <input
          type="text"
          name="tagline"
          value={tagline}
          onChange={handleTagline}
        />

        <label>Description</label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={handleDescription}
        />

        <label>First Brewed</label>
        <input
          type="text"
          name="first_brewed"
          value={first_brewed}
          onChange={handleFirst_Brewed}
        />

        <label>Brewer Tips</label>
        <input
          type="text"
          name="brewers_tips"
          value={brewers_tips}
          onChange={handleBrewers_Tips}
        />

        <label>Attenuation Level</label>
        <input
          type="text"
          name="attenuation_level"
          value={attenuation_level}
          onChange={handleAttenuation_Level}
        />

        <label>Created By</label>
        <input
          type="text"
          name="contributed_by"
          value={contributed_by}
          onChange={handleContributed_By}
        />
        <button>Add Beer</button>
      </form>
*/
