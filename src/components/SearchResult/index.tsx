import { UserProfileDTO } from "../../models/user-profile";
import "./styles.css";

type Props = {
    userProfile: UserProfileDTO;
};

export default function SearchResult({ userProfile }: Props) {
    return (
        <div className="dga-user-profile-container">
            <img src={userProfile.avatar} alt={userProfile.name} />
            <div className="dga-user-profile-content">
                <div className="dga-user-profile-content-title">Informações</div>
                <div>
                    <div className="dga-result-box">
                        <span className="dga-profile-item">Perfil:</span>&nbsp;
                        <span className="dga-user-profile-url">{userProfile.url}</span>
                    </div>
                    <div className="dga-result-box">
                        <span className="dga-profile-item">Seguidores:</span>&nbsp;
                        {userProfile.followers}
                    </div>
                    <div className="dga-result-box">
                        <span className="dga-profile-item">Localidade:</span>&nbsp;
                        {userProfile.location}
                    </div>
                    <div className="dga-result-box">
                        <span className="dga-profile-item">Nome:</span>&nbsp;
                        {userProfile.name}
                    </div>
                </div>
            </div>
        </div>
    );
}
