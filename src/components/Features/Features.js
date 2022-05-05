/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Container from "../GlobalComponents/Container";
import Title from "../GlobalComponents/Title";
import FeaturesCard from "./FeaturesCard";
import IconOne from "../Images/iconOne.svg";
import IconTwo from "../Images/iconTwo.svg";
import IconThree from "../Images/iconThree.svg";
import IconFour from "../Images/iconFour.svg";

const Features = () => (
  <section css={styles} className="features" id="about">
    <Title
      title="OUR FEATURES"
      desc="There are many variations of passages of trains, but the majority
        have suffered alteration."
    />
    <Container>
      <FeaturesCard cardImg={IconOne} cardTitle="Weightlifting" />
      <FeaturesCard cardImg={IconTwo} cardTitle="Specific Muscles" />
      <FeaturesCard cardImg={IconThree} cardTitle="Flex Your Muscles" />
      <FeaturesCard cardImg={IconFour} cardTitle="Cardio Exercises" />
    </Container>
  </section>
);

const styles = css`
  width: 100%;
  padding: 170px 0;
  background: #000;
  .container {
    display: flex;
    padding: 80px 0 0 0;
  }

`;

export default Features;