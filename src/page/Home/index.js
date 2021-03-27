import React, { useContext, useState } from "react";

import ThemeContext from "../../context/Theme";
// import Switch from "../../Components/ToogleButton";

import * as S from "./styles";

import profilePicture from "../../assets/pic.png";
import { FaInstagram, FaGithub, FaEnvelope, FaGlobe, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

function Home() {
  const { switchTheme } = useContext(ThemeContext);
  // const [isToggled, setIsToggled] = useState(false);

  return (
    <S.Container>
      <S.Content>
        <S.CircularGlassLeft />
        <S.ContainerLinks>
          {/* <Switch
            id="test-switch"
            toggled={isToggled}
            onChange={() => setIsToggled(switchTheme)}
          /> */}
          <S.ContainerAvatar onClick={() => setIsToggled(switchTheme)}>
            <S.Avatar src={profilePicture} />
          </S.ContainerAvatar>

          <S.Name>@filipeleonelbatista</S.Name>
          <S.ContainerProfession>
            <S.Profession>Desenvolvedor de Aplicativos</S.Profession>
          </S.ContainerProfession>

          <S.Divider />

          <S.ContainerSocialMedia>
            <S.Button href="https://www.youtube.com/channel/UCYUeJiqZCXcABWukG9RvQtw">
              <S.ContainerButton>
                <FaYoutube size={32} style={{ marginRight: '0.8rem' }} color="#FFF" />
                <S.TitleSocialMedia>Youtube</S.TitleSocialMedia>
              </S.ContainerButton>
            </S.Button>
            <S.Button href="https://desenvolvedordeaplicativos.ga">
              <S.ContainerButton>
                <FaGlobe size={32} style={{ marginRight: '0.8rem' }} color="#FFF" />
                <S.TitleSocialMedia>Site</S.TitleSocialMedia>
              </S.ContainerButton>
            </S.Button>
            <S.Button href="https://www.linkedin.com/in/filipeleonelbatista/">
              <S.ContainerButton>
                <FaLinkedinIn size={32} style={{ marginRight: ' 0.8rem' }} color="#FFF" />
                <S.TitleSocialMedia>LinkedIn</S.TitleSocialMedia>
              </S.ContainerButton>
            </S.Button>
            <S.Button href="https://github.com/filipeleonelbatista">
              <S.ContainerButton>
                <FaGithub size={32} style={{ marginRight: ' 0.8rem' }} color="#FFF" />
                <S.TitleSocialMedia>GitHub</S.TitleSocialMedia>
              </S.ContainerButton>
            </S.Button>
            <S.Button href="mailto:filipe.x2016@gmail.com?subject=Olá">
              <S.ContainerButton>
                <FaEnvelope size={32} style={{ marginRight: ' 0.8rem' }} color="#FFF" />
                <S.TitleSocialMedia>E-mail</S.TitleSocialMedia>
              </S.ContainerButton>
            </S.Button>
            <S.Button href="https://instagram.com/filipeleonelbatista/">
              <S.ContainerButton>
                <FaInstagram size={32} style={{ marginRight: '0.8rem' }} color="#FFF" />
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
