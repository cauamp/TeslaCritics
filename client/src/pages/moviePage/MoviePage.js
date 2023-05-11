import React, { useState, useEffect } from 'react';
import Axios from "axios"
import { useNavigate, useParams } from "react-router-dom";
import './MoviePageStyles.css';


function MoviePage() {

    const { movieName } = useParams();
    const [filme, setFilme] = useState([]);
   
    useEffect(() => {
        Axios.get(`http://localhost:3001/moviePage/${movieName}/get`).then((response) => {
            setFilme(response.data);
        })
    }, [])

    const navigate = useNavigate();
    const voltar = () => {
        navigate('/');
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
                        <textarea type="text" placeholder="Escreva sua critica..." />
                    </div>
                    <div className="critica">
                        <h4>Pedrinho 123</h4>
                        <p>Filmaço E S P E T A C U L A R. Uma obra prima para o futuro com certeza. Um elenco de
                            primeiríssima com atuações magistrais. Ficção Cientifica com um drama muito bem contado. Roteiro
                            bem construído. Por enquanto, o único filme da safra 2014 sério candidato a muitos prêmios.</p>
                    </div>
                    <div className="critica">
                        <h4>Maria 456</h4>
                        <p>Nunca fomos tão longe... Foi o que a personagem de Anne Hathaway, Dr Brand, disse em um
                            determinado momento do filme, e eu tenho que concordar. Cinematograficamente, Nolan nunca havia
                            ido tão longe. Há exatamente um ano, eu me deparei com um pequeno teaser. No tal vídeo, víamos
                            Matthew Mcconaughey dirigindo uma pick-up, com lágrimas nos olhos, falando sobre o pioneirismo
                            do homem. Algumas imagens de um milharal, e um foguete subindo aos ...</p>
                    </div>
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