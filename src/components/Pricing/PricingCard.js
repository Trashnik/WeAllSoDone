/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import PricingTitle from "./PricingTitle";
import PricingInfo from "./PricingInfo";

const PricingCard = ({ level }) => (
  <div css={styles} className="pricingCard">
    <PricingTitle level={level} />
    <PricingInfo />
  </div>
);

const styles = css`
  width: 100%;
  max-width: 32%;
  padding: 40px 0;
  background: #1a1a1a;
  border: 1px solid transparent;
  text-align: center;
  cursor: pointer;
  transition: border 600ms ease-in-out;
 
`;

export default PricingCard;
