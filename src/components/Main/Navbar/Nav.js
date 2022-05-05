/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useState } from "react";
import Container from "../../GlobalComponents/Container";
import Logo from "./Logo";
import Menu from "./Menu";
import Button from "../../GlobalComponents/Button";

const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav css={styles}>
      <Container>
        <Logo />
        <Menu openMenu={openMenu} />
        <Button text="join us" />
        <i
          onClick={() => setOpenMenu(!openMenu)}
          id="gymMenu"
          className={
            openMenu ? "fas fa-times fa-lg" : "fas fa-align-right fa-lg"
          }
        ></i>
      </Container>
    </nav>
  );
};

const styles = css`
  width: 100%;
  position: absolute;
  top: 0;
  padding: 40px 0;
  .container {
    max-width: 78%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
      cursor: pointer;
    }
    #gymMenu {
      cursor: pointer;
      display: none;
    }
  }
  
      #gymMenu {
        display: block;
      }
    }
  }
`;

export default Nav;

