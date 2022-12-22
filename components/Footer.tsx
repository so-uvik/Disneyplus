import React from "react";
import styled from "styled-components";
const FooterComponent = () => {
  return (
    <Footer>
      <p>
        Website developed by
        <a target="_blank" > Souvik Saha</a> - No
        commercial purposes intended, made only for showing web development techniques and to be included as a piece of portfolio. All copyrights are owned by Disney.<br/>
        This product uses the TMDb API but is not endorsed or certified by TMDb. This site does not store any files on our server, we only linked to the media which is hosted on 3rd party services, and for this reason it is advised to use a dedicated ad blocker for this website for a smooth viewing experience . 
      </p>
      <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="The Movie Db Logo"/>
    </Footer>
  );
};

export default FooterComponent;

const Footer = styled.footer`
    color: white;
    text-align: center;
    padding: 20px;
    position: relative;

    a 
    {
    color: inherit;
    }

    img {
    width: 100px;
    margin-top: 11px;
    position: relative;
    margin: 11px auto;
    }

    p {
    font-size: 12px;
    opacity: .4;
    }

    @media (min-width: 992px) {
    p {
    font-size: 14px;
    max-width: 700px;
    margin: 0 auto;
  }
}
`
const P = styled.p`
    font-size: 12px;
    opacity: .4;
`