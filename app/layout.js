import {Inter} from 'next/font/google'
import NavBar from "../component/ui/NavBar";
import '../app/globals.css';




const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <title>PokemonApp</title>
        <meta name="author" content="Sheila Fundora" />
        <meta name="description" content="Informacion sobre los pokemons" />
      </head>

        <body className={inter.className} >

            <NavBar />

            {children}




        </body>

      </html>
  )
}
