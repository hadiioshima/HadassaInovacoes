import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // espaço após chaves por convenção

import projetosBase from '../../data/projetos';
import imgLogo from './projetos.png'; // ✅ melhor usar import em vez de require

export default function ProjetosHome() {
    const [projetos, setProjetos] = useState([]);

    useEffect(() => {
        setProjetos(projetosBase);
    }, []);

    return (
        <div className='ListadeProjetos'>
            {
                projetos.slice(-4).map((item, index) => (
                    <article key={index}>
                        <img src={imgLogo} alt={item.titulo || 'Imagem do projeto'} />
                        <h2>Título: {item.titulo}</h2>
                        <p>Resumo: {item.resumo}</p>
                        <Link to="/">Ver detalhes</Link>
                    </article>
                ))
            }
            <a href="#">Ver mais projetos</a>
        </div>
    );
}
