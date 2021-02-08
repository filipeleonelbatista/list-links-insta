import React, { useContext, useState } from "react";

import ThemeContext from "../../context/Theme";
import Switch from "../../Components/ToogleButton";

import * as S from "./styles";

import profilePicture from "../../assets/pic.png";
import githubIcon from "../../assets/GitHubIcon.png";
import gmailIcon from "../../assets/GmailIcon.png";
import linkedInIcon from "../../assets/linkedin-icon.png";

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

          <S.Name>@mafe.dev</S.Name>
          <S.ContainerProfession>
            <S.Profession>Mobile Developer</S.Profession>
          </S.ContainerProfession>

          <S.Divider />

          <S.ContainerSocialMedia>
            <S.Button>
              <S.Icon src={linkedInIcon} />
              <S.TitleSocialMedia>LinkedIn</S.TitleSocialMedia>
            </S.Button>
            <S.Button>
              <S.Icon src={githubIcon} />
              <S.TitleSocialMedia>GitHub</S.TitleSocialMedia>
            </S.Button>
            <S.Button>
              <S.Icon src={gmailIcon} />
              <S.TitleSocialMedia>E-mail</S.TitleSocialMedia>
            </S.Button>
            <S.Button>
              <S.Icon src={gmailIcon} />
              <S.TitleSocialMedia>Instagram</S.TitleSocialMedia>
            </S.Button>
          </S.ContainerSocialMedia>
        </S.ContainerLinks>
      </S.Content>
    </S.Container>
  );
}

export default Home;
