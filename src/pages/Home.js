import { Link } from "react-router-dom";
import "../sass/components/_home.scss";

const Home = () => {
    return ( 
        <section id="home">

            <h1>Bonjour je suis une page Home</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link to="/about">A Propos</Link>
                </li>

                <li>
                    <Link to="/tototototo">404</Link>
                </li>
            </ul>
        </section>
     );
}
 
export default Home;