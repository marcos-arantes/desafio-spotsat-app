
import React from 'react';
import Head from 'next/head';

interface Props {
}

const HomePage: React.FC<Props> = () => {
  return (
    <div>
      <Head>
        <title>Minha Página Next.js</title>
        <meta name="description" content="Esta é uma página Next.js com TypeScript." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Bem-vindo à minha aplicação simples usando Next.js com TypeScript!</h1>
        <h2>Front-End com Next.js - Desafio SpotSat</h2>
        <img src="https://spotsat.com.br/wp-content/uploads/2023/03/LogoS-1024x304.webp" alt="spotsat" style={{ width: '100%', maxWidth: '500px' }} />
      </main>

      <footer>
        <p>Feito com ❤️ </p>
      </footer>
    </div>
  );
}

export default HomePage;
