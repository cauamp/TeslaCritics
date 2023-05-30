import './AddMoviePageStyles.css'
import React, { useState } from 'react';
import Axios from "axios"


function AddMoviePage() {

    const [nomeFilme, setNomeFilme] = useState('');
    const [sinopseFilme, setSinopseFilme] = useState('');
    const [anoFilme, setAnoFilme] = useState('');
    const [filmePicURL, setFilmePicURL] = useState('');
    const [generoFilme, setGeneroFilme] = useState('');

    const submitReview = () => {
        if (generoFilme !== "Selecionar") {
            Axios.post('http://localhost:3001/api/insert', {
                nomeFilme: nomeFilme,
                sinopseFilme: sinopseFilme,
                anoFilme: anoFilme,
                filmePicURL: filmePicURL,
                generoFilme: generoFilme

            })
        }
    }


    return (

        <div className="body_addMovie">
            <main>
                <div className="div_add_movie">
                    <h1> Adicionar novo filme</h1>
                    <form className="form_add_movie">

                        <label >Nome do Filme</label>
                        <input type='text' placeholder='Nome do Filme' autoComplete="off" required onChange={(e) => { setNomeFilme(e.target.value) }} />

                        <label >Capa do Filme</label>
                        <input type='url' placeholder='Capa do Filme (url)' autoComplete="off" required onChange={(e) => { setFilmePicURL(e.target.value) }} />

                        <label >Sinopse</label>
                        <textarea type="text" placeholder="  Sinopse" required onChange={(e) => { setSinopseFilme(e.target.value) }} />

                        <label >Gênero</label>

                        <select required onChange={(e) => { setGeneroFilme(e.target.value) }}>
                            <option>Selecionar</option>
                            <option>Ação</option>
                            <option>Aventura</option>
                            <option>Animação</option>
                            <option>Biografia</option>
                            <option>Comedia</option>
                            <option>Crime</option>
                            <option>Documentario</option>
                            <option>Drama</option>
                            <option>Fantasia</option>
                            <option>Suspense</option>
                        </select>

                        <label >Ano de Lançamento</label>
                        <input type="number" placeholder='Ano de Lançamento' min="1888" max="2023" step="1" required onChange={(e) => { setAnoFilme(e.target.value) }} />

                        <input type="submit" id="salvar_button" value="Salvar" onClick={submitReview} />

                    </form>
                </div>
            </main>
        </div>
    );
}

export default AddMoviePage;