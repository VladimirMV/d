import { FiAlignJustify } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';
import { Container, Logo, ModalBtnUser, Navigation } from 'components';
import { HeaderWrrap, MenuBtn, UserBox } from './Header.styled';
import { useState } from 'react';

export const Header = () => {
  const [nav, setNav] = useState(false);
  return (
    <header>
      <Container>
        <HeaderWrrap>
          <Logo />
          <Navigation nav={nav} />
          <UserBox>
            <ModalBtnUser />
            <MenuBtn
              onClick={() => {
                setNav(!nav);
              }}
            >
              {nav ? (
                <AiOutlineClose size={28} />
              ) : (
                <FiAlignJustify size={28} />
              )}
            </MenuBtn>
          </UserBox>
        </HeaderWrrap>
      </Container>
    </header>
  );
};