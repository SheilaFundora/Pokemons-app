'use client';
import {SmallPokemon} from "@/interfaces";
import { Grid, Card, Spacer, Text } from '@nextui-org/react';
import {FC} from "react";
import styles from './Pokemon.module.css'
import {useRouter} from "next/navigation";


interface Props {
    pokemon: SmallPokemon
}

const PokemonsCard : FC <Props> = ({pokemon}) => {

    const router = useRouter();

    const onclick = () => {
        router.push(`/pokemon/${pokemon.id}`);
    }

    return (
        <Grid xs={ 6 } sm={ 3 } md={ 2 } xl={ 2 } key={ pokemon.id }>
            <div
                onClick={ onclick }
                className={styles['card-pokemon']}
            >
                <Card.Body css={{ p: 1 }}>
                    <Card.Image
                        src={ pokemon.img }
                        width="100%"
                        height={ 140 }
                    />
                </Card.Body>
                <Card.Footer>
                    <div className={styles['pokemon-footer']}>
                        <Text transform='capitalize' color='white'>{ pokemon.name }</Text>
                        <Spacer x={5}/>
                        <Text color='white'>#{ pokemon.id }</Text>
                    </div>
                </Card.Footer>
            </div>
        </Grid>
    );
};

export default PokemonsCard;