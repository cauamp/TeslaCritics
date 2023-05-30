import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Axios from "axios"
import './HomePageStyles.css';


function HomePage() {

    const [filmesList, setFilmesList] = useState([]);
    const navigate = useNavigate();
    const abrirCatalogo = () => {
        navigate('/catalog');
    }
    useEffect(() => {
        Axios.get('http://localhost:3001/api/getFilmes')
            .then((response) => {
                setFilmesList(response.data);
            })
    }, [])

    const sortedFilmesList = filmesList.sort(() => 0.5 - Math.random())
    const goToMovie = (filme) => {
        navigate(`/moviePage/${filme}`);

    }

    return (
        <div className="body_home">
            <main>
                <section>
                    <div className="descubra">
                        <div className="descubra_inside">
                            <h2> Descubra vários filmes e se aventure nas recomendações e avaliações de nossos usuários</h2>

                            <p>e não se esqueça de nos contar suas opiniões e avaliar cada filme assistido!</p>
                        </div>
                    </div>

                    <div className="acesso_rapido">
                        <h3>Acesso rápido: </h3>
                        <div className="acesso_rapido_catalogo">

                            <br />
                            {
                                sortedFilmesList.map((filme, index) => {
                                    if (index < 4)
                                        return (
                                            <div className="capa_filme" onClick={() => { goToMovie(filme.nome) }}>
                                                <img alt={filme.nome} src={filme.picURL} />
                                                <h3>{filme.nome}</h3>
                                            </div>
                                        )
                                    return ""

                                })
                            }

                        </div>
                        <br />
                        <button className="explore_button" onClick={abrirCatalogo}>Explore mais filmes</button>

                    </div>
                </section>
            </main>
        </div>
    );
}

export default HomePage;