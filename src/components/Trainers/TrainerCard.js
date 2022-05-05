/** @jsx jsx */
import { jsx, css } from "@emotion/core";


const TrainerCard = ({ trainerName, trainerGender, trainerImg }) => (
  <div css={styles} className="trainerCard">
    <div className="trainerImg">
     
      <img src={trainerImg} alt="trainer" />
    </div>
    <h2>{trainerName}</h2>
    <p>{trainerGender}</p>
  </div>
);

const styles = css`
  color: #fff;
  
  .trainerImg {
    position: relative;
  }
  h2 {
    font-size: 26px;
    font-weight: 900;
    line-height: 1;
    margin: 14px 0 0 0;
  }
  p {
    font-size: 16px;
    margin: 16px 0 0 0;
  }
 
`;

export default TrainerCard;
