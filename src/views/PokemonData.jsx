import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Card from "react-bootstrap/Card";

export default function PokemonData() {
    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        consultarPokemonData();
    }, []);

    async function consultarPokemonData() {
            const endpoint = `https://pokeapi.co/api/v2/pokemon/${name}/`
            const response = await fetch(endpoint)
            const data = await response.json()
            setPokemon(data)
    }

    const { name } = useParams();
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={pokemon.id && pokemon.sprites.front_default} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <ul>
                            <li>{pokemon.id && pokemon.stats[0].stat.name}: {pokemon.id && pokemon.stats[0].base_stat}</li>
                            <li>{pokemon.id && pokemon.stats[1].stat.name}: {pokemon.id && pokemon.stats[1].base_stat}</li>
                            <li>{pokemon.id && pokemon.stats[2].stat.name}: {pokemon.id && pokemon.stats[2].base_stat}</li>
                            <li>{pokemon.id && pokemon.stats[3].stat.name}: {pokemon.id && pokemon.stats[3].base_stat}</li>
                            <li>{pokemon.id && pokemon.stats[4].stat.name}: {pokemon.id && pokemon.stats[4].base_stat}</li>
                            <li>{pokemon.id && pokemon.stats[5].stat.name}: {pokemon.id && pokemon.stats[5].base_stat}</li>
                        </ul>
                        {pokemon.id && pokemon.types[0].type.name}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}