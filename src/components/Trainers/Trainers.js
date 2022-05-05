/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Container from "../GlobalComponents/Container";
import Title from "../GlobalComponents/Title";

import MainBgOne from "../Images/mainBgOne.png";
import TrainerCard from "./TrainerCard";
import Igor from "../Images/Igor.png";
import Vicpic from "../Images/Vicpic.png";
import Ournasha from "../Images/Ournasha.png";

const Trainers = () => (
  <section css={styles} className="trainers" id="pages">
    {/* <ImgOverlay />
    <Title
      title="OUR TRAINERS"
      desc="There are many variations of passages of lorem Ipsum available, but the majority
        have suffered alteration."
    /> */}
    <Container>
      <TrainerCard
        trainerName="Игорь Войтенко"
        trainerGender="Mеn Trainer"
        trainerImg={Igor}
      />
      <TrainerCard
        trainerName="Виктор Блуд"
        trainerGender="Men Trainer"
        trainerImg={Vicpic}
      />
      <TrainerCard
        trainerName="Майя Манеза"
        trainerGender="Women Trainer"
        trainerImg={Ournasha}
      />
    </Container>
  </section>
);

const styles = css`
  width: 100%;
  padding: 160px 0;
  text-align: center;
  position: relative;
  background: url('${MainBgOne}') no-repeat center/cover;
  .title{
    position: relative;
    z-index: 5;
  }
  .container {
    display: flex;
    justify-content: space-between;
    z-index: 6;
    position: relative;
    padding: 80px 0 0 0;
  }
  
`;

export default Trainers;
