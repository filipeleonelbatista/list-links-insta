import React, { useContext, useState } from "react";

import ThemeContext from "../../context/Theme";
import Switch from "../../Components/ToogleButton";

import * as S from "./styles";

import profilePicture from "../../assets/pic.png";
import GlobeIcon from "../../assets/globe.png";
import githubIcon from "../../assets/GitHubIcon.png";
import gmailIcon from "../../assets/GmailIcon.png";
import linkedInIcon from "../../assets/linkedin-icon.png";
import instaIcon from "../../assets/insta-icon.png";

function Home() {
  const { switchTheme } = useContext(ThemeContext);
  const [isToggled, setIsToggled] = useState(false);

  return (
    <S.Container>
      <S.Content>
        <S.CircularGlassLeft />
        <S.ContainerLinks>
          <Switch
            id="test-switch"
            toggled={isToggled}
            onChange={() => setIsToggled(switchTheme)}
          />
          <S.ContainerAvatar>
            <S.Avatar src={profilePicture} />
          </S.ContainerAvatar>

          <S.Name>@filipeleonelbatista</S.Name>
          <S.ContainerProfession>
            <S.Profession>Desenvolvedor de Aplicativos</S.Profession>
          </S.ContainerProfession>

          <S.Divider />

          <S.ContainerSocialMedia>
            <S.Button href="https://desenvolvedordeaplicativos.ga">
              <S.ContainerButton>
                <S.Icon src={GlobeIcon} />
                <S.TitleSocialMedia>Site</S.TitleSocialMedia>
              </S.ContainerButton>
            </S.Button>
            <S.Button href="https://www.linkedin.com/in/filipeleonelbatista/">
              <S.ContainerButton>
                <S.Icon src={linkedInIcon} />
                <S.TitleSocialMedia>LinkedIn</S.TitleSocialMedia>
              </S.ContainerButton>
            </S.Button>
            <S.Button href="https://github.com/filipeleonelbatista">
              <S.ContainerButton>
                <S.Icon src={githubIcon} />
                <S.TitleSocialMedia>GitHub</S.TitleSocialMedia>
              </S.ContainerButton>
            </S.Button>
            <S.Button href="mailto:filipe.x2016@gmail.com?subject=Olá">
              <S.ContainerButton>
                <S.Icon src={gmailIcon} />
                <S.TitleSocialMedia>E-mail</S.TitleSocialMedia>
              </S.ContainerButton>
            </S.Button>
            <S.Button href="https://instagram.com/filipeleonelbatista/">
              <S.ContainerButton>
                <S.Icon src={instaIcon} />
                <S.TitleSocialMedia>Instagram</S.TitleSocialMedia>
              </S.ContainerButton>
            </S.Button>
          </S.ContainerSocialMedia>
        </S.ContainerLinks>
      </S.Content>
    </S.Container>
  );
}

export default Home;
