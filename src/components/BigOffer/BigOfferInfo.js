/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Button from "../GlobalComponents/Button";

const BigOfferInfo = () => (
  <div css={styles} className="info">
    <h3>
      A BIG OFFER FOR <br /> THIS SUMMER
    </h3>
    <h2>50% Off</h2>
    <p>
      There are many variations of passages of lorem Ipsum available, <br /> but
      the majority have suffered alteration.
    </p>
    <Button text="JOIN NOW" />
  </div>
);

const styles = css`
  width: 100%;
  max-width: 560px;
  color: #fff;
  h3 {
    font-size: 42px;
    font-weight: 900;
    line-height: 1.3;
  }
  h2 {
    font-size: 80px;
    font-weight: 500;
    line-height: 1;
    color: #ff1414;
    margin: 20px 0 24px 0;
  }
  p {
    line-height: 1.7;
  }
  .btn {
    margin: 40px 0 0 0;
  
  }
  
`;

export default BigOfferInfo;
