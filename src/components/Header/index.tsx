import React from "react";
// @ts-ignore
import { Link } from "react-router-dom";
import RMDBLogo from "../../images/movie-app-logo.png";
import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.styles";

const Header: React.FC = () => {
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <LogoImg src={RMDBLogo} alt="RMDBLogo" />
        </Link>
      </Content>
    </Wrapper>
  );
};

export default Header;
