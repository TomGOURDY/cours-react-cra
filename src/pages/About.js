import { Link } from 'react-router-dom';
import "../sass/components/_about.scss";

const About = () => {
    return ( 
        <section id="about">

            <h1>Bonjour je suis une page about</h1>
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
 
export default About;