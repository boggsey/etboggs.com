import styled from "styled-components";
import tw from "tailwind.macro";

const WorkItemIndividual = styled.div`
  ${tw`w-full flex flex-col md:flex-row min-h-screen justify-center pl-4 pr-4 bg-cover bg-center`};

  &.alchemy {
    background-image: url("https://res.cloudinary.com/ericboggs/image/upload/v1563324005/alchemy_bi6keb.jpg");
  }

  &.avfti {
    background-image: url("https://res.cloudinary.com/ericboggs/image/upload/v1563324011/avfti_va2uwo.jpg");
  }

  &.gdi {
    background-image: url("https://res.cloudinary.com/ericboggs/image/upload/v1563324020/gdi_i2wd3c.jpg");
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
