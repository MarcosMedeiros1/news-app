import {
  FacebookIcon,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import styled from "styled-components";

export const ShareOptionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
`;

export const ShareOptions = ({ link, title }) => {
  return (
    <>
      <WhatsappShareButton url={link} title={title} separator=":: ">
        <WhatsappIcon size={24} round />
      </WhatsappShareButton>

      <TelegramShareButton
        url={link}
        title={title}
        className="Demo__some-network__share-button"
      >
        <TelegramIcon size={24} round />
      </TelegramShareButton>

      <TwitterShareButton url={link} title={title}>
        <TwitterIcon size={24} round />
      </TwitterShareButton>

      <LinkedinShareButton
        url={link}
        className="Demo__some-network__share-button"
      >
        <LinkedinIcon size={24} round />
      </LinkedinShareButton>

      <FacebookMessengerShareButton
        url={link}
        appId="521270401588372"
        className="Demo__some-network__share-button"
      >
        <FacebookMessengerIcon size={24} round />
      </FacebookMessengerShareButton>

      <FacebookShareButton
        url={link}
        quote={title}
        className="Demo__some-network__share-button"
      >
        <FacebookIcon size={24} round />
      </FacebookShareButton>
    </>
  );
};
