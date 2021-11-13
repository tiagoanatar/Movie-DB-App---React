import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--darkGreen);
  padding: 0 10px;
`;

export const Content = styled.div`
    display:flex;
    justify-content: space-between;
    align-items:center; 
    max-width: var(--maxWidth);
    padding: 10px 0;
    margin: 0 auto;
`;

export const LogoImg = styled.img`
    width: 120px;
`;

export const TMDBLogoImg = styled.img`
    width:100px;

    @media (max-width:500px){
        width: 80px;
    }
`;
