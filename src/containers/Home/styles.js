import styled from "styled-components";
import Background from "../../assets/img/background.svg";
import Background2 from "../../assets/img/background-2.svg";

export const Container = styled.div`
  width: 100%;
  background: no-repeat url(${Background});
  background-color: #16161a;
  background-size: 106%;
`;

export const Header = styled.header`
  width: 95%;
  padding: 20px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;
    gap: 24px;
  }

  a {
    font-family: "Cinzel", sans-serif;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    color: #ffffff;
    position: relative;
    cursor: pointer;
  }
  a:after {
    content: " ";
    width: 0px;
    height: 2px;
    position: absolute;
    bottom: 2px;
    left: 0px;
    background-color: #ffffff;
    transition: 0.3s;
  }

  a:hover::after {
    width: 100%;
  }
`;

export const BtnPrimary = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 32px;
  width: 179px;
  height: 56px;
  background: #5092d2;
  border-radius: 5px;

  font-family: "Cinzel", sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  color: #16161a;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

export const BtnSecondary = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 56px;
  background: transparent;
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 5px;

  font-family: "Cinzel", sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

export const FirstSection = styled.section`
  margin-top: 20px;
  padding: 0 40px;
  h1 {
    font-family: "Cinzel", sans-serif;
    font-weight: 700;
    font-size: 64px;
    line-height: 90%;
    color: #ffffff;
    width: 750px;
  }

  p {
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 160%;
    color: #ffffff;
    width: 600px;
    opacity: 0.8;
  }

  .container-actions {
    display: flex;
    align-items: center;
    gap: 32px;
    margin-top: 16px;
  }

  .container-video {
    display: flex;
    justify-content: end;
    padding-right: 75px;
  }

  video {
    width: 370px;
    height: 208px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
      url(main.jpg);
    border: 1px solid #ffffff;
    border-radius: 4px;
  }
`;

export const SecondSection = styled.section`
  margin-top: 150px;
  text-align: center;

  h2 {
    font-family: "Cinzel", sans-serif;
    font-weight: 700;
    color: #ffffff;
    font-size: 38px;
    line-height: 65px;
  }

  .container-carousel {
    display: flex;
    margin-top: 32px;
    justify-content: space-around;
  }

  .container-items {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .carousel-item {
    width: 250px;
    height: 360px;
    position: relative;
    display: flex;
    justify-content: center;
    opacity: 0.6;
    transition: 0.3s;
    z-index: 1;
  }

  .carousel-item:hover {
    opacity: 1;
  }

  .carousel-item::after {
    content: "";
    width: 100%;
    height: 80%;
    background: #27272e;
    position: absolute;
    bottom: 0px;
    left: 0px;
    z-index: -1;
    transform: 0.3s;
  }

  .carousel-item:hover::after {
    border: 1px solid #f9f9f0;
  }

  .item {
    width: 250px;
    height: 360px;
  }

  p {
    position: absolute;
    bottom: 12px;
    font-family: "Cinzel", sans-serif;
    font-weight: 700;
    color: #ffffff;
    font-size: 32px;
    line-height: 43px;
  }

  .arrow:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;
export const ThirdSection = styled.section`
  margin-top: 150px;
  background: no-repeat url(${Background2});
  width: 100%;
  height: 700px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-size: 100%;

  .container-photos {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 15px;
    margin-left: 40px;
  }

  img {
    width: 320px;
  }

  .container-description {
    width: 400px;
    margin-right: 40px;
  }

  h2 {
    font-family: "Cinzel", sans-serif;
    font-weight: 700;
    color: #ffffff;
    font-size: 38px;
    line-height: 65px;
  }

  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    color: #ffffff;
    opacity: 0.8;
  }
`;
export const FourthSection = styled.section`
  margin-top: 150px;
  padding: 0px 40px 150px 40px;

  h2 {
    font-family: "Cinzel", sans-serif;
    font-weight: 700;
    color: #ffffff;
    font-size: 38px;
    line-height: 65px;
  }

  .container-weapons {
    margin-top: 24px;
    width: 100%;
    display: flex;
    gap: 24px;
  }

  .weapon {
    display: flex;
    align-items: end;
    background-color: #27272e;
    border-radius: 5px;
    padding: 30px 25px;
  }

  .weapon-description {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  h3 {
    font-family: "Cinzel", sans-serif;
    font-weight: 700;
    font-size: 32px;
    line-height: 43px;
    color: #ffffff;
    margin: 0;
  }

  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 160%;
    color: #ffffff;
    opacity: 0.8;
  }

  img {
    height: 350px;
    width: 220px;
  }
`;
