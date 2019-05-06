/* global tw */
import styled from "react-emotion";
import WorkItemPicture from "../../images/avfti-strength.jpg";

const WorkItemIndividual = styled.div`
  ${tw("w-full flex flex-row min-h-screen")};

  .container {
    ${tw(
      "w-full md:w-90p flex flex-col md:flex-row items-stretch justify-between"
    )};
  }

  h2 {
    font: 400 30px/25px "Alegreya";
    padding-bottom: 30px;
  }

  .work-item-summary {
    ${tw(
      "w-full md:w-1/2 min-h-screen text-white flex flex-col justify-center"
    )};
    background-color: #000;
    padding: 80px;

    @media screen and (max-width: $breakpoint-mobile-max) {
      min-height: 30vh;
      padding: 20px 10%;
    }

    .line {
      width: 30px;
      height: 2px;
      background: white;
    }

    h3 {
      font: 700 24px/28px "Alegreya Sans";
      text-transform: uppercase;
    }

    p {
      ${tw("pt-2")};

      font: 400 15px/20px;
    }
  }

  .work-item-explanation {
    ${tw("w-4/5 md:w-1/2 text-white text-black flex flex-col justify-center")};
    background: #fdfdfd;
    padding: 0 120px 0 50px;

    @media screen and (max-width: $breakpoint-mobile-max) {
      margin: 0 auto;
      min-height: 50vh;
      padding: 30px 0;
    }

    h3 {
      font: 700 20px/20px "Alegreya Sans";
      text-transform: uppercase;
    }
  }
`;

export default WorkItemIndividual;
