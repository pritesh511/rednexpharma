import Image from "next/image";
import Link from "next/link";
import { Container } from "../../styles/commonStyles";
import {
  NavbarBlock,
  NavbarSection,
  NavItem,
  NavList,
  NavLogo,
} from "./styles";

const Navbar = () => {
  return (
    <>
      <NavbarSection>
        <Container>
          <NavbarBlock>
            <NavLogo>
              <Link href="/">
                <a>
                  <Image
                    src="/images/nav_logo.png"
                    alt="nav_logo"
                    width={165}
                    height={40}
                  />
                </a>
              </Link>
            </NavLogo>
            <NavList>
              <NavItem>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/about-us">
                  <a>About Us</a>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/enquiry">
                  <a>Enquiry</a>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/contact-us">
                  <a>Contact Us</a>
                </Link>
              </NavItem>
            </NavList>
          </NavbarBlock>
        </Container>
      </NavbarSection>
    </>
  );
};

export default Navbar;
