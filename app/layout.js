import NavBar from "../component/ui/NavBar";
import '../app/globals.css';


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <title>PokemonApp</title>
        <meta name="author" content="Sheila Fundora" />
        <meta name="description" content="Informacion sobre los pokemons" />
      </head>

        <body>

            <NavBar />

            {children}




        </body>

      </html>
  )
}
