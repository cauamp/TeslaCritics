import { useNavigate } from "react-router-dom";


function CatalogPage() {

    const navigate = useNavigate();
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
           
        </main>

        <footer>
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

export default CatalogPage;