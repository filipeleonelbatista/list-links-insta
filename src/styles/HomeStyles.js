import styled from "styled-components";

export const Container = styled.div`
  display: flex; 
  justify-content: center;
  padding-top: 4.4rem;
  height: 100vh;
  background-color:${({ theme }) => theme.background};
  transition: 0.75s ease-in-out;

  @media(max-width: 425px){
    
  padding-top: 4.4rem;
  }

  
`;

export const Content = styled.div`
  position: relative; 
`;

export const ContainerLinks = styled.div`
  display: flex;
  width: 400px;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  justify-content: center;
  background: ${({ theme }) => theme.background}; 
  box-shadow: ${({ theme }) => theme.shadow};
  position: relative;
  transition: 0.75s ease-in-out;

  @media(max-width: 425px){
    width: 320px;
  }
`;

export const CircularGlassLeft = styled.div`
  width: 7rem;
  height: 7rem;
  border: 1px solid rgb(255 255 255 / 20%);
  border-radius: 50%;
  background-image: linear-gradient(
    128.09deg,
    var(--purpleSecondary) 0%,
    var(--blueSecondary) 60%,
    transparent 100%
  );
  backdrop-filter: blur(0.625rem);
  box-shadow: 0.125rem 0.125rem 0 0 rgb(255 255 255 /10%);
  transform-style: preserve-3d;
  transition: 0.75s ease-in-out;
  backface-visibility: hidden;
  position: absolute;
  top: -40px;
  left: -40px;

  @media(max-width: 320px){
    display: none;
  }
`;
export const CheckBoxWrapper = styled.div`
  position: relative;
`;

export const DarkLightContainer = styled.label`
  display: flex;
  align-items: center;
  width: 64px;
  height: 32px;
  border-radius: 50px;
  background:${({ theme }) => theme.background};
  border: none;
  box-shadow: ${({ theme }) => theme.shadowInset} ;
  align-self: flex-end;
  margin: 16px 16px 0 0;
  padding: 0 0.5rem;
  transition: 0.75s ease-in-out;
`;

export const DarkLightButton = styled.button`
  width: 1rem;
  height: 1rem;
  border: none;
  border-radius: 50%;
  background: ${({ theme }) => theme.background};
  box-shadow: 0 0.25rem 0.25rem 0.25rem var(--darkShadow);
  cursor: pointer;
  transition: 0.75s ease-in-out;
  transform:${props => props.isClick ? 'translateX(200%)' : 'translateX(0)'}; 
`;


export const ContainerAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 7.5rem;
  height: 7.5rem;
  border: solid 2px transparent;
  margin-bottom: 0.6rem;
  border-radius: 50%; 
  background-image: linear-gradient( ${({ theme }) => theme.background},  ${({ theme }) => theme.background}),
    radial-gradient(circle at top left, var(--purplePrimary), var(--bluePrimary));
  background-clip: content-box, border-box;
  transition: 0.75s ease-in-out;
`;

export const Avatar = styled.img`
  width: 6.25rem;
  height: 6.25rem;
  border-radius: 50%;
  transition: 0.75s ease-in-out;
`;

export const Name = styled.h1`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.title};
  font-weight: 700;
`;

export const ContainerProfession = styled.div`
  border-radius: 8px;
  background: ${({ theme }) => theme.background};
  border: none;
  box-shadow: ${({ theme }) => theme.shadowInset};
  padding: 0 10px;
  margin: 0.5rem 0;
  transition: 0.75s ease-in-out;
`

export const Profession = styled.h1`
  font-size: 1rem;
  color: #5D5D5D;
  font-weight: medium;
  margin: 0.5rem 0;
`;

export const Divider = styled.div`
  width: 100%;
  height: 0.5rem;
  background: var(--primaryDark);
  box-shadow: ${({ theme }) => theme.shadowInset};
  transition: 0.75s ease-in-out;
`;

export const ContainerSocialMedia = styled.div`
  display: grid;
  position: relative;
  margin: 1.4rem 0;
  grid-gap: 0.8rem;
  grid-template-columns: 1fr 1fr;
  transition: 0.75s ease-in-out;
  
  @media(max-width: 425px){
    grid-template-columns: 1fr;
    width:90%
  }
`;

export const TitleSocialMedia = styled.h1`
  color: #f1f2f2;
  font-weight: 700;
  font-size: 1rem;
`;

export const ContainerButton = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
`

export const Button = styled.a`
  display:flex;
  flex-direction:column;
  align-items:center;
  justfy-content:center;

  background-image: linear-gradient(to right, var(--purplePrimary), var(--bluePrimary));
  padding: 1.4rem 0.8rem;
  border-radius: 10px;
  border: none;
  box-shadow: 0.25rem 0.25rem 0.25rem 0.25rem var(--darkShadow);
  cursor: pointer;
  transition: 0.75s ease-in-out;
  text-decoration: none;  

`;
