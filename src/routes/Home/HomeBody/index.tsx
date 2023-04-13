import Button from '../../../components/Button';
import './styles.css';

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
                <Button text="Começar" />
            </section>
        </main>
    );
}