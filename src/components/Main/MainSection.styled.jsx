import styled from '@emotion/styled';
import { theme } from 'styles';
import background1 from "../../img/mae-mu-T7heq8rawkc-unsplash 1.png";


export const MainSectionWrap = styled.section`
  // outline: 1px solid green;

  max-width: 1440px;
  margin: 0 aut
  height: 796px;o;
   padding: 80px 20px;

  @media screen and (min-width: 375px) {
    height: 1001px;
    margin: 0 auto;
    }


  @media (min-width: 768px) {
     padding: 140px 32px;
     height: 1001px;

  }

  @media (min-width: 1440px) {
     padding: 160px 100px 140px 100px;
     max-width: 1440px;
     height: 790px;

  }
`;

export const MainSectionSubtitle = styled.p`
   
  margin-bottom: 32px;
  color:${theme.colors.lightGray};
  line-height: 1.25;
  max-width: 266px;
  font-size: 14px;
  // padding-bottom: 80px;

  //@media screen and (min-width: 375px) {
       
  // margin-bottom: 40px;
  //   font-size: ${theme.fontSizes.sectionTitleTablet};
  //   max-width: 449px;
  //   line-height: 1.07;
  //   font-size: 18px;
  // }
  @media screen and (min-width: 768px) {
       
    margin-bottom: 40px;
    font-size: ${theme.fontSizes.sectionTitleTablet};
    max-width: 449px;
    font-size: 18px;
    line-height: 1.07;
  }
  @media screen and (min-width: 1240px) {
       
   padding-bottom: 40px;
    font-size: ${theme.fontSizes.sectionTitle};
    font-size: 18px;
    line-height: 1.06;
  }


  @media (min-width: 768px) {
   width: 500px;
  height: 72px;
  padding-bottom: 40px;
  // margin-left: 100px;
font-size: 18px;
font-weight: 400;
line-height: 24px;
  }
`;

export const MainSectionTitle = styled.h1`

max-width: 279px;
margin-bottom: 28px;
font-size: ${theme.fontSizes.sectionTitlePhone};
color:${theme.colors.lightGray};
font-weight: 600;
line-height: 1.18;

// @media screen and (min-width: 375px) {
//   font-size: ${theme.fontSizes.sectionTitleTablet};
//   max-width: 483px;
//   line-height: 1.07;
// }
@media screen and (min-width: 768px) {
  font-size: ${theme.fontSizes.sectionTitleTablet};
  max-width: 483px;
  line-height: 1.07;
}
@media screen and (min-width: 1200px) {
  font-size: ${theme.fontSizes.sectionTitle};
  max-width: 715px;
  line-height: 1.06;
}
`;
export const BackgroundImageWrap = styled.div`

max-width: 375px;
    height: 700px; 
background-size: 496px 700px;
  background-repeat: no-repeat;
 background-position: top 0px left 102px;
background-image: linear-gradient(0.95deg, #0A0A11 -0.56%, rgba(10, 10, 17, 0) 21.93%),
 linear-gradient(86.16deg, #0A0A11 8.41%, rgba(10, 10, 17, 0) 46.6%),
    url('${background1}');


   @media screen and (min-width: 768px) {
    max-width: 1200px;
    height: 1001px; 
    margin: 0 auto;
    
  background-size: 710px 1001px; 
  background-position: top -80px left 323px;
background-image: linear-gradient(0.95deg, #0A0A11 -0.56%, rgba(10, 10, 17, 0) 21.93%),
 linear-gradient(86.16deg, #0A0A11 8.41%, rgba(10, 10, 17, 0) 46.6%),
    url('${background1}');

   }

    @media screen and (min-width: 1240px) {   
    max-width: 1240px;
   height: 790px; 
    margin: 0 auto;
  background-size: 710px 790px;
  background-repeat: no-repeat;
 background-position: top -84px left 630px;
background-image: linear-gradient(0.95deg, #0A0A11 -0.56%, rgba(10, 10, 17, 0) 21.93%),
 linear-gradient(86.16deg, #0A0A11 8.41%, rgba(10, 10, 17, 0) 46.6%),
    url('${background1}');
  }


`;
export const ButtonContainer = styled.div`
margin: 0 auto;
display: flex-inline;
justify-content: center;
align-items: center;
margin-left: 550px;

`;