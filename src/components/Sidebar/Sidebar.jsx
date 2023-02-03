import React from "react";
import { Link } from "react-router-dom";
import { Container, Content } from "./SidebarStyles";
import {
  FaTimes,
  FaHome,
  FaEnvelope,
  FaUserAlt,
  FaIdCardAlt,
} from "react-icons/fa";

import SidebarItem from "../SidebarItem/SidebarItem";

const Sidebar = ({ active }) => {
  const closeSidebar = () => {
    active(false);
  };

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />
      <Content>
        <Link to={`/`}>
          <SidebarItem Icon={FaHome} Text="Home" />
        </Link>
        <Link to={`/aboutme`}>
          <SidebarItem Icon={FaUserAlt} Text="Quem sou" />
        </Link>

        <Link to={`/contact`}>
          <SidebarItem Icon={FaEnvelope} Text="Contato" />
        </Link>

        <Link to={`/works`}>
          <SidebarItem Icon={FaIdCardAlt} Text="Portifólio" />
        </Link>
      </Content>
    </Container>
  );
};

export default Sidebar;

// import styles from "./Sidebar.module.css";
// import { Link } from "react-router-dom";

// export function Sidebar() {
//   return (
//     <>
//       <div className={styles.sidebar}>
//         <div className={styles.menu}>
//           <Link to={`/`} className={styles.button}>
//             <p>INÍCIO</p>
//           </Link>

//           <Link to={`/aboutme`} className={styles.button}>
//             <p>QUEM SOU</p>
//           </Link>

//           <Link to={`/works`} className={styles.button}>
//             <p>PORTIFÓLIO</p>
//           </Link>

//           <Link to={`/contact`} className={styles.button}>
//             <p>CONTATO</p>
//           </Link>
//         </div>

//         <div className={styles.footer}>
//           <p>₢2022 Portifolio - Todos direitos reservados</p>
//         </div>
//       </div>
//     </>
//   );
// }
