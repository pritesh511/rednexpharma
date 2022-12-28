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
                <Image
                  src="/images/nav_logo.png"
                  alt="nav_logo"
                  width={165}
                  height={40}
                />
              </Link>
            </NavLogo>
            <NavList>
              <NavItem>
                <Link href="/">Home</Link>
              </NavItem>
              <NavItem>
                <Link href="/about-us">About Us</Link>
              </NavItem>
              <NavItem>
                <Link href="/enquiry">Enquiry</Link>
              </NavItem>
              <NavItem>
                <Link href="/contact-us">Contact Us</Link>
              </NavItem>
              <NavItem>
                <Link href="/product">Blog</Link>
              </NavItem>
              <NavItem>
                <Link href="/pokemon">Pokemon</Link>
              </NavItem>
            </NavList>
          </NavbarBlock>
        </Container>
      </NavbarSection>
    </>
  );
};

export default Navbar;
