import axios from "axios";
import { useEffect, useState } from "react";
import "./dogs.css";

export default function Dogs() {
  const [dogbreeds, setDogBreeds] = useState([]);
  const [dogImage, setDogImage] = useState([]);
  const [dogName, setDogName] = useState([]);

  useEffect(() => {
    axios
      .get("https://dog.ceo/api/breeds/list")
      .then(
        (data) => (
          setDogBreeds(data.data.message), fetchIMage(data.data.message[0])
        )
      );
  }, []);

  function fetchIMage(dogimg) {
    setDogName(dogimg);
    axios
      .get(`https://dog.ceo/api/breed/${dogimg}/images/random`)
      .then((data) => setDogImage(data.data.message));
  }

  return (
    <div className="dog-breeds">
      <header>
        <h1 className="logo">DoggoSelect</h1>
      </header>
      <div className="container">
        <label>Select a Breed</label>
        <select
          className="u-full-width"
          id="breeds"
          onChange={(e) => fetchIMage(e.target.value)}
        >
          {dogbreeds.map((breed, index) => {
            return (
              <option key={index} value={breed}>
                {breed}
              </option>
            );
          })}
        </select>
        <div className="card">
          <img src={dogImage} alt="" onClick={() => fetchIMage(dogName)} />
        </div>
      </div>
    </div>
  );
}
