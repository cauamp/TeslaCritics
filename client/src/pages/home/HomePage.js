import { useNavigate } from "react-router-dom";
import './HomePageStyles.css';


function HomePage() {



    const navigate = useNavigate();
    const abrirCatalogo = () => {
        navigate('/catalog');
    }

    return (
        <div className="body_home">
            <main>
                <section>
                    <div className="descubra">
                        <div className="descubra_inside">
                            <h2> Descubra vários filmes e se aventure nas recomendações e avaliações de nossos usuários</h2>

                            <p><br />e não se esqueça de nos contar suas opiniões e avaliar cada filme assistido!</p>
                        </div>
                    </div>

                    <div className="acesso_rapido">
                        <h3>Acesso rápido: </h3>
                        <div className="acesso_rapido_catalogo">

                            <br />
                            <div className="capa_filme">
                                <a href="/moviepage" >
                                    <img src='https://upload.wikimedia.org/wikipedia/pt/3/3a/Interstellar_Filme.png' alt="Nome do filme" />
                                    <p>Interestelar</p>
                                </a>
                            </div>

                            <div className="capa_filme">
                                <a href="/moviepage" >
                                    <img src='https://br.web.img2.acsta.net/medias/nmedia/18/90/07/53/20391069.jpg' alt="Nome do filme" />
                                    <p>Django Livre</p>
                                </a>
                            </div>

                            <div className="capa_filme">
                                <a href="/moviepage">
                                    <img src='https://upload.wikimedia.org/wikipedia/pt/1/10/CidadedeDeus.jpg' alt="Nome do filme" />
                                    <p>Cidade de Deus</p>
                                </a>
                            </div>

                            <div className="capa_filme">
                                <a href="/moviepage">
                                    <img src='https://upload.wikimedia.org/wikipedia/pt/3/3a/Interstellar_Filme.png' alt="Nome do filme" />
                                    <p>Interestelar</p>
                                </a>
                            </div>

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