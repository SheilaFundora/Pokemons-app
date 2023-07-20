'use client'
import Image from 'next/image';
import { Spacer, Text, useTheme, Link } from '@nextui-org/react';


const Header = () => {
    const { theme } = useTheme()
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'start',
            padding: '0 50px',
            backgroundColor: theme?.colors.gray900.value
        }}>
           {/* <Image
                src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"}
                alt="icono de la app"
                width={70}
                height={70}
            />*/}

            {/*<NextLink href="/" passHref>*/}
            {/*    <Link>*/}
            <Text color='white' h2>P</Text>
            <Text color='white' h3>okémon</Text>
            {/*    </Link>*/}
            {/*</NextLink>*/}

            <Spacer css={{ flex: 1 }}/>

            {/*<NextLink href="/favorites" passHref>*/}
            {/*    <Link css={{ marginRight: '10px' }}>*/}
            <Text color='white' h3>Favoritos</Text>
            {/*    </Link>*/}
            {/*</NextLink>*/}

        </div>
    );
};

export default Header;