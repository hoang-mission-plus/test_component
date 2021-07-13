// import React from "react";
// import { Container, Row, Col, Image, Nav } from "react-bootstrap";
// import ImgQuizz from "../../image/header_Quizz.png";
// import {
//   Alignment,
//   Button,
//   Navbar,
// } from "@rt-commercial-engineering/rt-design-system";

// const Header = () => {
//   return (
//     <Container className="header-fluid">
//       <Row className="header">
//         <Navbar>
//           <Col md={8} className="header_left">
//             <Navbar.Group align={Alignment.LEFT}>
//               <Navbar.Heading>
//                 {" "}
//                 <Image
//                   className="img_header"
//                   src={ImgQuizz}
//                   alt=""
//                   rounded
//                   width="110px"
//                   height="32px"
//                 />
//               </Navbar.Heading>
//               {/* <Navbar.Divider /> */}
//               <Navbar.Heading className="header_left_link">
//                 For Work
//               </Navbar.Heading>
//               <Navbar.Heading className="header_left_link">
//                 For Teachers
//               </Navbar.Heading>
//               <Navbar.Heading className="header_left_link">
//                 Schools & Districts <span className="new-tag">NEW</span>
//               </Navbar.Heading>
//             </Navbar.Group>
//           </Col>
//           <Col md={4} className="header_right">
//             <Navbar.Group className="nav-right" align={Alignment.RIGHT}>
//               <Navbar.Heading className="header_right_link">
//                 Notifications
//                 <Button minimal icon="notifications" />
//               </Navbar.Heading>
//               <Navbar.Heading className="header_right_link">
//                 <div className="user">
//                   <Image src={ImgQuizz} width="100%" />
//                 </div>
//                 <Button minimal icon="caret-down" />
//               </Navbar.Heading>
//             </Navbar.Group>
//           </Col>
//         </Navbar>
//       </Row>
//     </Container>
//   );
// };

// export default Header;

import React, { Fragment } from "react";
import {
  Alignment,
  Button,
  Navbar,
} from "@rt-commercial-engineering/rt-design-system";
import User from "../../image/avatar.svg";
import Logo from "../../image/navbar.svg";
import SVG from "react-inlinesvg";

function Header(args: any) {
  return (
    <Fragment>
      <Navbar {...args}>
        <Navbar.Group {...args}>
          <Navbar.Heading>
            <SVG src={Logo} />
          </Navbar.Heading>
          <ul>
            <li>
              <a href="#">Navigation Menu 1</a>
            </li>
            <li>
              <a href="#">Navigation Menu 2</a>
            </li>
            <li>
              <a href="#">Navigation Menu 3</a>
            </li>
          </ul>
        </Navbar.Group>
        <Navbar.Group
          className="nav-right"
          align={
            args.align === Alignment.LEFT ? Alignment.RIGHT : Alignment.LEFT
          }
        >
          <div className="user">
            {" "}
            <SVG src={User} />
          </div>
          <Button minimal icon="caret-down" />
        </Navbar.Group>
      </Navbar>
    </Fragment>
  );
}

export default Header;
