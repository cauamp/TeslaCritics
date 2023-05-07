import { useNavigate } from "react-router-dom";
import './HomePageStyles.css';


function HomePage() {



    const navigate = useNavigate();
    const abrirCatalogo = () => {
        navigate('/catalog');
    } 
    const voltar = () => {
        navigate('/');
    }

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
                                <a>
                                    <img src='https://br.web.img2.acsta.net/medias/nmedia/18/90/07/53/20391069.jpg' alt="Nome do filme" />
                                    <p>Django Livre</p>
                                </a>
                            </div>

                            <div className="capa_filme">
                                <a>
                                    <img src='https://upload.wikimedia.org/wikipedia/pt/1/10/CidadedeDeus.jpg' alt="Nome do filme" />
                                    <p>Cidade de Deus</p>
                                </a>
                            </div>

                            <div className="capa_filme">
                                <a>
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

            <footer className="footer_fixed">
                <div className="rodape">
                    <div className="termos_uso">
                        <h4>Termos de Uso - Política de privacidade</h4>
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

export default HomePage;