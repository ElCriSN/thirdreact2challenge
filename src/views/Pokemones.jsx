import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap"

import Context from "../Context";

export default function Pokemones() {
    const { pokemones } = useContext(Context);
    const [name, setName] = useState("");
    const navigate = useNavigate();
    const irAPokemon = () => {
        navigate(`/pokemones/${name}`);
    }

    return (
        <div className="mt-5">
            <h1>Selecciona un pokemon</h1>
            <Form.Select className="formSelectPokemones"
                onChange={({ target }) => setName(target.value)}
                value={name}>
                <option value="1">Pokemones</option>
                {pokemones.map((pokemon) => {
                    return (
                        <option value={pokemon.name} key={pokemon.name}>{pokemon.name}</option>
                    )
                })}
            </Form.Select>
            <Button className="btn-success" onClick={irAPokemon}>Ver Detalle</Button>
        </div>
    );
}