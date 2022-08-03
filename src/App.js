/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function getId(url) {
  let urlParts = url.split("https://pokeapi.co/api/v2/pokemon/");
  urlParts = urlParts[1].replace(/\D/g, "");
  // console.log(urlParts);
  return `https://raw.githubusercontent.com/PokeAPI/sprites/ff8ae47984a19dc0ab56efcc9bc32d9b2b9df04e/sprites/pokemon/other/dream-world/${urlParts}.svg`;
}

const PokemonApi = () => {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=649")
      .then((response) => response.json())
      // .then((data) => console.log(data))
      .then((data) => setPokemonData(data.results));
  }, []);

  return (
    <React.Fragment>
      <div className="container">
        <div className="cards">
          {pokemonData.map((item) => (
            <React.Fragment>
              <Card className="cardBody">
                <Card.Img  key={item.id} variant="top" src={getId(item.url)} className="img-card" />
                <Card.Body>
                  <Card.Title style={{marginTop: '8rem'}}>{item.name}</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </React.Fragment>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default PokemonApi;
