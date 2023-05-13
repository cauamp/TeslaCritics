import React, { useState, useEffect } from 'react';
import Axios from "axios"
import { useNavigate } from "react-router-dom";
import './CatalogPageStyles.css';


function CatalogPage() {
    const [filmesList, setFilmesList] = useState([]);
    const [pesquisa, setPesquisa] = useState('');
    const navigate = useNavigate();


    const voltar = () => {
        navigate('/');
    }

    const addMovie = () => {
        navigate('/addMovie');
    }

    const goToMovie = (filme) => {
        navigate(`/moviePage/${filme}`);

    }


    useEffect(() => {
        Axios.get('http://localhost:3001/api/getFilmes').
        then((response) => {
            setFilmesList(response.data);
        })
    }, [])

    const filteredFilmesList = pesquisa.length > 0
        ? filmesList.filter(filmesList => filmesList.nome.toLowerCase().includes(pesquisa.toLowerCase()))
        : [];


    return (
        <div>
            <header>
                <div className="cabecalho">
                    <div className="cabecalho_logo" onClick={voltar}>
                        <img src="/assets/logo.png" alt="logo" />
                    </div>


                    <div className="cabecalho_titulo">
                        <h1>TESLA CRITICS</h1>
                    </div>

                    <div className="cabecalho_usuario">
                        <img src="./assets/user.ico" alt="user" />
                    </div>

                </div>
            </header>
            <main>
                <section id="sec1">
                    <h2>Lista de Filmes</h2>
                    <br /><h3>Escolha aquele que mais te interessar para acessar mais informações e suas críticas feitas por usuários</h3>
                </section>
                <section id="sec2">
                    <div id="busca">
                        <input id="pesquisaFilme" type="search" placeholder="Digite o nome de um filme..." onChange={e => setPesquisa(e.target.value)}></input>
                        <button>OK</button>
                    </div>
                    <div id="add"><button onClick={addMovie}>Adicionar novo filme</button></div>
                </section>
                <section id="sec3">
                    <div id="genero">
                        <h2>• FILMES DB</h2>
                        <div id="movies">

                            {pesquisa.length > 0 ? (
                                filteredFilmesList.map((filme) => {
                                    return (

                                        <div id="movie" key={filme.id} onClick={() => { goToMovie(filme.nome) }}>
                                            <a ><img alt={filme.nome} src={filme.picURL} />
                                                <h3><i>{filme.nome}</i></h3>
                                                <h5>Ano: {filme.ano} </h5>
                                            </a>
                                        </div>


                                    )
                                })
                            ) : (
                                filmesList.map((filme) => {
                                    return (

                                        <div id="movie" key={filme.id} onClick={() => { goToMovie(filme.nome) }}>
                                            <a ><img alt={filme.nome} src={filme.picURL} />
                                                <h3><i>{filme.nome}</i></h3>
                                                <h5>Ano: {filme.ano} </h5>
                                            </a>
                                        </div>


                                    )
                                })
                            )}
                            { }
                        </div>

                    </div>

                    <div id="genero">
                        <h2>• FICÇÃO</h2>
                        <div id="movies">
                            <div id="movie">
                                <a><img alt="movie" src="./assets/movie.jpg" />
                                    <h3><i>Inception</i></h3>
                                    <h5>Nota: 5.0 ★</h5></a>
                            </div>
                            <div id="movie">
                                <a><img alt="movie" src="./assets/movie1.jpg" />
                                    <h3><i>Jogos Vorazes</i></h3>
                                    <h5>Nota: 4.8 ★</h5></a>
                            </div>
                            <div id="movie">
                                <a><img alt="movie" src="./assets/movie2.jpg" />
                                    <h3><i>Harry Potter e a Pedra Filosofal</i></h3>
                                    <h5>Nota: 4.5 ★</h5></a>
                            </div>
                        </div>
                    </div>
                    <div id="genero">
                        <h2>• AÇÃO</h2>
                        <div id="movies">
                            <div id="movie">
                                <a><img alt="movie" src="./assets/movie3.jpg" />
                                    <h3><i>Velozes e Furiosos 9</i></h3>
                                    <h5>Nota: 4.0 ★</h5></a>
                            </div>
                            <div id="movie">
                                <a><img alt="movie" src="./assets/movie4.webp" />
                                    <h3><i>Alerta Vermelho</i></h3>
                                    <h5>Nota: 3.7 ★</h5></a>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            <footer>
                <div className="rodape">
                    <div className="termos_uso">
                        <h4>Todos os direitos reservados &#169;</h4>
                    </div>

                    <div className="redes">
                        <a> <img src="./assets/instagram.ico" alt="instagram logo" /></a>
                        <a> <img src="./assets/twitter.ico" alt=" twitter logo" /></a>
                        <a> <img src="./assets/youtube.ico" alt="youtube logo" /></a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default CatalogPage;