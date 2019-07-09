import styled from "styled-components";
import tw from "tailwind.macro";
import AlchemyPicture from "../../images/alchemy2.jpg";
import AvftiPicture from "../../images/avfti-strength-blue.jpg";
import GdiPicture from "../../images/gdi.jpg";

const WorkItemIndividual = styled.div`
  ${tw`w-full flex flex-col md:flex-row min-h-screen justify-center pl-4 pr-4 bg-cover bg-center`};

  &.alchemy {
    background-image: url(${AlchemyPicture});
  }

  &.avfti {
    background-image: url(${AvftiPicture});
  }

  &.gdi {
    background-image: url(${GdiPicture});
  }

  .work-item-summary {
    ${tw`w-full pl-4 pr-4 md:w-1/4 min-h-screen text-white flex flex-col items-center justify-center`};

    h3 {
      ${tw`font-sans font-bold uppercase mb-0 text-2xl`};
    }

    .job-title {
      ${tw`text-xl italic mt-0`};
    }

    .line {
      background-color: white;
      width: 30px;
      height: 2px;
    }

    p {
      ${tw`pt-2 text-base leading-normal text-lg`};
    }
  }
`;

export default WorkItemIndividual;
