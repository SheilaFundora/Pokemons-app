'use client';

import { SmallPokemon} from "@/interfaces";
import PokemonsCard from "@/component/pokemon/PokemonsCard";
import { Grid } from '@nextui-org/react';
import {FC} from "react";
import styles from './Pokemon.module.css'

interface Props {
    pokemons: SmallPokemon[];
}

const PokemonsList : FC <Props> = ({pokemons}) => {
    return (
        <div className={styles['pad-card']}>
            {
                pokemons.map(
                    ( pokemon: SmallPokemon ) => (
                        <PokemonsCard pokemon={pokemon} key={pokemon.id} />
                    )
                )
            }
        </div>
    );
};

export default PokemonsList;