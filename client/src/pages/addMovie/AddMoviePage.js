import { useNavigate } from "react-router-dom";
import './AddMoviePageStyles.css'
import React, { useState, useEffect } from 'react';
import Axios from "axios"


function AddMoviePage() {

    const navigate = useNavigate();
    const voltar = () => {
        navigate('/');
    }

    const [nomeFilme, setNomeFilme] = useState('');
    const [sinopseFilme, setSinopseFilme] = useState('');
    const [anoFilme, setAnoFilme] = useState('');
    const [filmePicURL, setFilmePicURL] = useState('');

    const submitReview = () => {
        Axios.post('http://localhost:3001/api/insert', {
          nomeFilme: nomeFilme,
          sinopseFilme: sinopseFilme,
          anoFilme: anoFilme,
          filmePicURL: filmePicURL
        })
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
                        <img src="./assets/user.ico" alt="user" />
                    </div>

                </div>
            </header>
            <main>
                <div className="div_add_movie">
                    <h1> Adicionar novo filme</h1>
                    <form className="form_add_movie">

                        <label >Nome do Filme</label>
                        <input type='text' placeholder='Nome do Filme' autoComplete="off" required onChange={(e) => {setNomeFilme(e.target.value)}}/>

                        <label >Capa do Filme</label>
                        <input type='url' placeholder='Capa do Filme (url)' autoComplete="off" required onChange={(e) => {setFilmePicURL(e.target.value)}}/>

                        <label >Sinopse</label>
                        <textarea type="text" placeholder="Sinopse" required onChange={(e) => {setSinopseFilme(e.target.value)}}/>

                         {/*
                         <label >Gênero</label>
                        <input type='text' placeholder='Gênero' autocomplete="off" required /> 
                        */}

                        <label >Ano de Lançamento</label>
                        <input type="number" placeholder='Ano de Lançamento' min="1888" max="2023" step="1" required onChange={(e) => {setAnoFilme(e.target.value)}}/>

                        <input type="submit" id="salvar_button" value="Salvar" onClick={submitReview}/>

                    </form>
                </div>
            </main>

            <footer className="footer_fixed">
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

export default AddMoviePage;