import React, { useState, useEffect } from 'react';
import Axios from "axios"
import { useParams } from "react-router-dom";
import './MoviePageStyles.css';
import StarRating from "../starRating.js";
import { FaStar } from 'react-icons/fa';


function MoviePage() {

    const { movieName } = useParams();
    const [filme, setFilme] = useState([]);
    const [reviewsList, setReviewsList] = useState([]);
    const [newFilmeReview, setNewFilmeReview] = useState('');
    var notaMediaFilme = 0;
    var count = 0;
    useEffect(() => {
        Axios.post(`http://localhost:3001/moviePage/${movieName}/get`).then((response) => {
            setFilme(response.data);
        })
    }, [movieName])

    useEffect(() => {
        if (filme.id !== undefined) {
            Axios.post(`http://localhost:3001/moviePage/getReviews/${filme.id}`, {
            }).then((response) => {
                setReviewsList(response.data);
            })
        }

    }, [filme.id])

    const updateNota = () => {
        Axios.put(`http://localhost:3001/api/${movieName}/updateNota`, {
            nota: notaMediaFilme
        });
        window.location.reload();
    }


    setTimeout(() => {
        reviewsList.map((e) => {
            notaMediaFilme += e.nota;
            count += 1;
            return 0
        });
        notaMediaFilme = Math.round(notaMediaFilme / (count) * 100) / 100
        if (filme.nota !== notaMediaFilme && notaMediaFilme !== undefined && notaMediaFilme !== null && !isNaN(notaMediaFilme)) {
            updateNota()
        }
    }, 500
    )

    const adicionarReview = () => {
        const nomeUsuario = prompt("Digite seu nome de usuario");
        const notaFilme = document.querySelector('#form').fb.value
        Axios.post(`http://localhost:3001/moviePage/${movieName}/insertReview`, {
            nomeUsuario: nomeUsuario,
            criticaFilme: newFilmeReview,
            notaFilme: notaFilme,
            idFilme: filme.id
        }).then(() => {
            setReviewsList([...reviewsList, { usuario: nomeUsuario, critica: newFilmeReview, nota: 5, idfilme: filme.id }])
        }
        )
    }

    const stars = Array(5).fill(0);
    return (
        <div className="body_movie_page">
            <main className="main_MoviePage">
                <div className="conteudo_principal">
                    <div className="capa_grande">
                        <img src={filme?.picURL}
                            alt={filme?.nome} />
                    </div>

                    <div className="conteudo_principal_escrito">
                        <h1>{filme?.nome}</h1>
                        <h3>{filme?.ano}</h3>
                        <div className="nota">
                        <h3>Nota: {filme?.nota}</h3>
                        {
                            stars.map((star, i) => {
                                const ratingValue = i+1;
                                return (
                                <FaStar className="stars" color={ratingValue <= filme?.nota ? "#ffc107" : "#e4e5e9"}></FaStar>
                        );})}
                        </div>
                        <br />
                        <p> {filme?.sinopse}.</p>
                    </div>
                </div>

                <div className="area_criticas">
                    <div className="adicionar_critica">
                        <h2>Críticas sobre o filme:</h2>
                        <form id='form'>
                            <textarea type="text" placeholder="Escreva sua critica..." onChange={(e) => {
                                setNewFilmeReview(e.target.value)
                            }} />

                            {(newFilmeReview) && <div class="estrelas">
                                <StarRating/>
                            </div>}

                            {(newFilmeReview) && <button className='addReview' onClick={adicionarReview}>Adicionar Review</button>}

                        </form>
                    </div>

                    {reviewsList.map((review) => {
                        return (

                            <div className="critica" key={review?.id} >
                                <h4>{review?.usuario}</h4>
                                <div className="nota">
                                    
                                    {
                                        stars.map((star, i) => {
                                        const ratingValue = i+1;
                                        return (
                                    <FaStar className="stars" color={ratingValue <= review?.nota ? "#ffc107" : "#e4e5e9"}></FaStar>
                                    );})}
                                </div>
                                <p>{review?.critica}</p>
                            </div>
                        )
                    })}

                </div>
            </main>
        </div>
    );
}

export default MoviePage;