import "./styles.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div>
        <Link to={"/"}>
            <div className="dga-paddingl40">Github API</div>
        </Link>        
      </div>
    </header>
  );
}
