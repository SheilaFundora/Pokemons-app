'use client'
import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react';
import {Pokemon} from "@/interfaces";
import {FC} from "react";
import styles from "@/component/pokemon/Pokemon.module.css";

interface Props {
    pokemon:Pokemon;
}

const PokemonDetails: FC <Props> = ({pokemon}) => {
    return (
        <div className={styles['card-details']}>
            <Grid xs={ 12 } sm={ 3 } >
                <Card css={{ padding: '30px' }} className={styles['card-pokemon-details']}>
                    <Card.Body>
                        <Card.Image
                            src={ pokemon.sprites.other?.dream_world.front_default || '/no-image.png' }
                            alt={ pokemon.name }
                            width="100%"
                            height={ 200 }
                        />
                    </Card.Body>
                </Card>
            </Grid>

            <Grid xs={ 12 } sm={ 8 }>
                <Card className={styles['card-pokemon-details']} css={{paddingRight: '40px', paddingLeft: '20px'}}>
                    <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Text h1 transform='capitalize' color="white">{ pokemon.name }</Text>

                        <Button
                            color="gradient"
                            ghost
                            auto

                        >
                            Guardar en favoritos
                        </Button>
                    </Card.Header>

                    <Card.Body>
                        <Text size={30} color="white">Sprites:</Text>

                        <Container direction='row' display='flex' gap={ 0 }>
                            <Image
                                src={ pokemon.sprites.front_default }
                                alt={ pokemon.name }
                                width={ 100 }
                                height={ 100 }
                            />
                            <Image
                                src={ pokemon.sprites.back_default }
                                alt={ pokemon.name }
                                width={ 100 }
                                height={ 100 }
                            />
                            <Image
                                src={ pokemon.sprites.front_shiny }
                                alt={ pokemon.name }
                                width={ 100 }
                                height={ 100 }
                            />
                            <Image
                                src={ pokemon.sprites.back_shiny }
                                alt={ pokemon.name }
                                width={ 100 }
                                height={ 100 }
                            />

                        </Container>


                    </Card.Body>


                </Card>
            </Grid>

        </div>
    );
};

export default PokemonDetails;