import "./styles.css";
import Button from "../../../components/Button";

export default function ProfileFinder() {
  return (
    <main className="dga-container">
      <section className="dga-paddingl40 dga-profile-finder-section">
        <form>
          <div className="dga-profile-finder-title">Encontre um perfil Github</div>
          <input className="dga-profile-finder-input" type="text" placeholder="Usuário Github" />
          <div>
            <Button text="Encontrar" />
          </div>
        </form>
      </section>
    </main>
  );
}
