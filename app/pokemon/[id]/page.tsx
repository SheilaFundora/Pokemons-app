import PokemonDetails from "@/component/pokemon/PokemonDetails";

const fetchPost = (id:number) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    console.log(url);
    return fetch(url).then(res => res.json());
}

// @ts-ignore
export default async function Pokemon({params}) {
    const pokemon = await fetchPost(params.id);

    return (
           <PokemonDetails pokemon={pokemon} />
    )
}
