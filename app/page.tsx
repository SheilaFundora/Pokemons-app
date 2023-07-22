import {SmallPokemon} from "@/interfaces";
import PokemonsList from "@/component/pokemon/PokemonsList";

interface Props {
    pokemons: SmallPokemon
}

const fetchPost = () => {
    return fetch('https://pokeapi.co/api/v2/pokemon?limit=151').then(res => res.json());
}

export default async function HomePage() {
    const data = await fetchPost();

    const pokemons: SmallPokemon[] = data.results.map( (poke: SmallPokemon, i : number ) => ({
        ...poke,
        id: i + 1,
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ i + 1 }.svg`
    }) )

    return (
      <section>
          <h1>Pokemons</h1>

         <PokemonsList pokemons={pokemons}/>



      </section>
    )
}
