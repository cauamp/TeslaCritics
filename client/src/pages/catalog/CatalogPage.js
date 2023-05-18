import React, { useState, useEffect } from 'react';
import Axios from "axios"
import { useNavigate } from "react-router-dom";
import './CatalogPageStyles.css';


function CatalogPage() {
    const [filmesList, setFilmesList] = useState([]);
    const [generosList, setGenerosList] = useState([]);
    const [pesquisa, setPesquisa] = useState('');
    const navigate = useNavigate();


    const addMovie = () => {
        navigate('/addMovie');
    }

    const goToMovie = (filme) => {
        navigate(`/moviePage/${filme}`);

    }


    useEffect(() => {
        Axios.get('http://localhost:3001/api/getFilmes')
            .then((response) => {
                setFilmesList(response.data);
            })
    }, [])

    useEffect(() => {
        Axios.get('http://localhost:3001/api/getGeneros')
            .then((response) => {
                setGenerosList(response.data);
            })
    }, [])

    const filteredFilmesList = pesquisa.length > 0
        ? filmesList.filter(filmesList => filmesList.nome.toLowerCase().includes(pesquisa.toLowerCase()))
        : filmesList;


    return (
        <div className='body_catalog'>
            <main>
                <section id="sec1">
                    <h2>Lista de Filmes</h2>
                    <br /><h3>Escolha aquele que mais te interessar para acessar mais informações e suas críticas feitas por usuários</h3>
                </section>
                <section id="sec2">
                    <div id="busca">
                        <input id="pesquisaFilme" type="search" placeholder="Digite o nome de um filme..." onChange={e => setPesquisa(e.target.value)}></input>
                    </div>
                    <div id="add"><button onClick={addMovie}>Adicionar novo filme</button></div>
                </section>
                <section id="sec3">


                    {generosList.map((genero) => {
                        return (
                            <div id="genero">
                                <h2>• {genero.nome}</h2>
                                <div id="movies">
                                    {filteredFilmesList.map((filme) => {
                                        if (filme.idgenero === genero.id) {
                                            return (
                                                <div id="movie" key={filme.id} onClick={() => { goToMovie(filme.nome) }}>
                                                    <img alt={filme.nome} src={filme.picURL} />
                                                    <h3><i>{filme.nome}</i></h3>
                                                    <h5>Nota: {filme.nota} </h5>

                                                </div>
                                            )
                                        }
                                        return ("");
                                    })}
                                </div>
                            </div>);

                    })
                    }

                </section>

            </main>
        </div>
    );
}

export default CatalogPage;