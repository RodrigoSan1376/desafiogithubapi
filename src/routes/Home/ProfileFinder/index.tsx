import "./styles.css";
import axios from "axios";
import Button from "../../../components/Button";
import { useEffect, useState } from "react";
import { UserProfileDTO } from "../../../models/user-profile";
import { BASE_URL } from "../../../utils/system";
import SearchResult from "../../../components/SearchResult";
import UserNotFound from "../../../components/UserNotFound";

type FormData = {
  userLogin: string;
};

export default function ProfileFinder() {
  const [formData, setFormData] = useState<FormData>({
    userLogin: "",
  });

  const [conditions, setConditions] = useState({
    showResult: false,
    noContent: false,
  });

  const [click, setClick] = useState(0);

  const [profile, setProfile] = useState<UserProfileDTO>({
    avatar: "",
    followers: 0,
    location: "",
    name: "",
    url: "",
  });

  function handleInputChange(event: any) {
    const value = event.target.value;
    const name = event.target.name;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    setClick(click + 1);
    formData.userLogin === ""
      ? setConditions({ ...conditions, showResult: false })
      : setConditions({ ...conditions, showResult: true });
  }

  useEffect(() => {
    if (formData.userLogin != "")
      axios
        .get(`${BASE_URL}/${formData.userLogin}`)
        .then((response) => {
          console.log(response.data);
          setConditions({ ...conditions, noContent: false });
          setProfile({
            avatar: response.data.avatar_url,
            followers: Number(response.data.followers),
            location: response.data.location,
            name: response.data.name,
            url: response.data.url,
          });
        })
        .catch(() => setConditions({ ...conditions, noContent: true }));
  }, [click]);

  return (
    <main className="dga-container">
      <section className="dga-paddingl40 dga-profile-finder-section">
        <form onSubmit={handleSubmit}>
          <div className="dga-profile-finder-title">
            Encontre um perfil Github
          </div>
          <input
            name="userLogin"
            className="dga-profile-finder-input"
            type="text"
            placeholder="Usuário Github"
            onChange={handleInputChange}
            value={formData.userLogin}
          />
          <div>
            <Button text="Encontrar" />
          </div>
        </form>
      </section>
      <section className="dga-result-section">
        {!conditions.showResult ? (<></>) : conditions.noContent ? (<UserNotFound />) : (<SearchResult userProfile={profile} />)}
      </section>
    </main>
  );
}
