/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const Button = ({ text }) => (
  <a href="https://www.youtube.com/watch?v=aiGVZTYfH9M" css={styles} className="btn">
    {text}
  </a>
);

const styles = css`
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  padding: 15px 44px;
  background: #010b8b;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  border: 1px solid transparent;
  transition: all 500ms ease-in-out;
`;

export default Button;
