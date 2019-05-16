import styled from "styled-components";
import tw from "tailwind.macro";
import AlchemyPicture from "../../images/alchemy2.jpg";
import AvftiPicture from "../../images/avfti-strength-blue.jpg";
import GdiPicture from "../../images/gdi.jpg";

const WorkItemIndividual = styled.div`
  ${tw`w-full flex flex-col md:flex-row min-h-screen justify-center pl-4 pr-4`};

  &.alchemy {
    background: url(${AlchemyPicture}) center center;
    background-size: cover;
  }

  &.avfti {
    background: url(${AvftiPicture}) center center;
    background-size: cover;
  }

  &.gdi {
    background: url(${GdiPicture}) center center;
    background-size: cover;
  }

  h2 {
    font: 400 30px/25px "Alegreya";
    padding-bottom: 30px;
  }

  .work-item-summary {
    ${tw`w-full md:w-1/4 min-h-screen text-white flex flex-col items-center justify-center`};

    @media screen and (max-width: $breakpoint-mobile-max) {
      min-height: 30vh;
      padding: 20px 10%;
    }

    h3 {
      font: 700 24px/28px "Alegreya Sans";
      text-transform: uppercase;
      margin-bottom: 0;
    }

    .job-title {
      margin-top: 0;
      font-style: italic;
    }

    .line {
      width: 30px;
      height: 2px;
      background: white;
    }

    p {
      ${tw`pt-2`};
      font: 400 15px/20px;
    }
  }
`;

export default WorkItemIndividual;
