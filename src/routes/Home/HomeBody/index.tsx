import './styles.css';
import { NavLink } from 'react-router-dom';
import Button from '../../../components/Button';


export default function HomeBody() {
    return(
        <main>
            <section>
                <div className='dga-paddingl40 dga-mt30 dga-home-title'>
                    Desafio Github API
                </div>
                <div className='dga-paddingl40 dga-mb30 dga-home-subtitle'>
                    DevSuperior - Escola de programação
                </div>
                <div className='dga-dflex dga-paddingl40'>
                    <NavLink to={"/profile-finder"}>
                        <Button text="Começar" />
                    </NavLink>
                </div>               
            </section>
        </main>
    );
}