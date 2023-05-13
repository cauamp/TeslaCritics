import React, { useState, useEffect } from 'react';
import Axios from "axios"
import { useNavigate, useParams } from "react-router-dom";
import './MoviePageStyles.css';


function MoviePage() {

    const { movieName } = useParams();
    const [filme, setFilme] = useState([]);
    const [reviewsList, setReviewsList] = useState([]);
    const [newFilmeReview, setNewFilmeReview] = useState('');


    useEffect(() => {
        Axios.get(`http://localhost:3001/moviePage/${movieName}/get`).then((response) => {
            setFilme(response.data);
        })
    }, [])

    useEffect(() => {
        Axios.get(`http://localhost:3001/moviePage/${movieName}/getReviews`,).then((response) => {
            setReviewsList(response.data);
        })
    }, [])

    const navigate = useNavigate();
    const voltar = () => {
        navigate('/catalog');
    }

    const adicionarReview = () => {
        const nomeUsuario = prompt("Digite seu nome de usuario");
        Axios.post(`http://localhost:3001/moviePage/${movieName}/insertReview`, {
            nomeUsuario: nomeUsuario,
            criticaFilme: newFilmeReview,
            notaFilme: 5,
            idFilme: filme.id
        }).then(() => {
            setReviewsList([...reviewsList, { usuario: nomeUsuario, critica: newFilmeReview }])
        }
        )
        setNewFilmeReview("");
    }

    return (
        <div className="body_movie_page">
            <header>
                <div className="cabecalho">

                    <div className="cabecalho_logo" onClick={voltar}>
                        <img src="/assets/logo.png" alt="logo" />
                    </div>


                    <div className="cabecalho_titulo">
                        <h1>TESLA CRITICS</h1>
                    </div>

                    <div className="cabecalho_usuario">
                        <img src="/assets/user.ico" alt="user"></img>
                    </div>

                </div>
            </header>
            <main className="main_MoviePage">
                <div className="conteudo_principal">
                    <div className="capa_grande">
                        <img src={filme?.picURL}
                            alt={filme?.nome} />
                    </div>

                    <div className="conteudo_principal_escrito">
                        <h1>{filme?.nome}</h1>
                        <h3>{filme?.ano}</h3>
                        {/*<h3>Ficção científica</h3>*/}
                        <br />
                        <p> {filme?.sinopse}.</p>
                    </div>
                </div>

                <div className="area_criticas">
                    <div className="adicionar_critica">
                        <h2>Críticas sobre o filme:</h2>
                        <textarea type="text" placeholder="Escreva sua critica..." onChange={(e) => { setNewFilmeReview(e.target.value) }} />

                        {(newFilmeReview) && <button className='addReview' onClick={adicionarReview}>Adicionar Review</button>} 
                       
                    </div>

                    {reviewsList.map((review) => {
                        return (

                            <div className="critica">
                                <h4>{review?.usuario}</h4>
                                <p>{review?.critica}</p>
                            </div>
                        )
                    })}

                </div>
            </main>

            <footer>
                <div className="rodape">
                    <div className="termos_uso">
                        <h4>Todos os direitos reservados &#169;</h4>
                    </div>

                    <div className="redes">
                        <a> <img src="/assets/instagram.ico" alt="instagram logo" /></a>
                        <a> <img src="/assets/twitter.ico" alt=" twitter logo" /></a>
                        <a> <img src="/assets/youtube.ico" alt="youtube logo" /></a>
                    </div>
                </div>
            </footer>

        </div>
    );
}

export default MoviePage;