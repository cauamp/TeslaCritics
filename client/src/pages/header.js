import { useNavigate } from "react-router-dom";


function Header() {
    const navigate = useNavigate();
    const goCatalog = () => {
        navigate('/catalog');
    }

    const goHome = () => {
        navigate('/');
    }

    return (
        <header>
            <div className="cabecalho">

                <div className="cabecalho_logo" onClick={goCatalog}>
                    <img src="/assets/logo.png" alt="logo" />
                </div>


                <div className="cabecalho_titulo" onClick={goHome}>
                    <h1>TESLA CRITICS</h1>
                </div>

                <div className="cabecalho_usuario">
                    <img src="/assets/user.ico" alt="user"></img>
                </div>

            </div>
        </header>
    )
}

export default Header;