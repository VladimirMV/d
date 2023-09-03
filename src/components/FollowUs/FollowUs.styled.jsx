import styled from '@emotion/styled';
import { BiLogoFacebook } from 'react-icons/bi';
import { AiFillInstagram, AiFillYoutube } from 'react-icons/ai';
import { theme } from 'styles';

export const List = styled.ul`
  display: flex;
  gap: 14px;

  @media (min-width: 768px) {
    gap: 16px;
  }
`;

export const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border: 1px solid ${theme.colors.gray};
  border-radius: 10px;
`;

export const Link = styled.a`
  width: 22px;
  height: 22px;

  @media (min-width: 768px) {
    width: 28px;
    height: 28px;
  }
`;
export const FacebookIcon = styled(BiLogoFacebook)`
  width: 22px;
  height: 22px;
  color: ${theme.colors.lightGray};
  transition: filter linear 200ms, scale linear 200ms;

  &:hover {
    color: ${theme.colors.lightGray};
    background-color: transparent;
    box-shadow: ${theme.shadows.regular};
    transform: scale(1.5);
  }

  @media (min-width: 768px) {
    width: 28px;
    height: 28px;
  }
`;

export const InstagramIcon = FacebookIcon.withComponent(AiFillInstagram);

export const YoutubeIcon = FacebookIcon.withComponent(AiFillYoutube);
