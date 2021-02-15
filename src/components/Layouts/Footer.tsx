import React from "react";
import styled from "styled-components";
import { buttonBaseStyles, IconButton } from "components/Button";
import {
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
  PlayStoreIcon,
  AppStoreIcon,
} from "components/Icons";
import Urls from "lib/urls";

interface FooterButtonProps {
  label?: string;
  icon?: React.ReactNode;
  onClick: () => void;
}

export interface FooterProps {
  version?: string;
  buttons?: FooterButtonProps[];
  outlinks?: string;
  visible?: boolean;
}

export const Footer = styled(
  ({
    version,
    outlinks = "instagram|youtube|facebook|playStore|appStore",
    buttons = [],
    ...rest
  }: FooterProps) => {
    const outlinkProviders = outlinks.split("|");

    const handleOnOutlinkClick = (providerId: string) => () => {
      window.open(Urls[providerId], "_blank");
    };

    return (
      <footer {...rest}>
        <FooterInfo>
          상호명 : 비마이펫© Copyright 2020, All Rights Reserved 주소 : 서울시
          서초구 서초중앙로 24길 55, 401호 대표자 : 성현진 문의:{" "}
          <a href={"tel:050-7724-6399"}>050-7724-6399</a>,{" "}
          <a href="mailto:business@bemypet.kr">business@bemypet.kr</a>
          {version ? <span> version: v{version}</span> : null}
        </FooterInfo>
        {buttons.map(({ label, onClick }) => (
          <FooterButton key={`footer-button-${label}`} onClick={onClick}>
            {label}
          </FooterButton>
        ))}
        <FooterIconButtons>
          {outlinkProviders.map((providerId) => {
            switch (providerId) {
              case "instagram":
                return (
                  <IconButton
                    key={`provider-${providerId}`}
                    icon={<InstagramIcon width={24} height={24} />}
                    onClick={handleOnOutlinkClick(providerId)}
                  />
                );

              case "youtube":
                return (
                  <IconButton
                    key={`provider-${providerId}`}
                    icon={<YoutubeIcon width={24} height={24} />}
                    onClick={handleOnOutlinkClick(providerId)}
                  />
                );

              case "facebook":
                return (
                  <IconButton
                    key={`provider-${providerId}`}
                    icon={<FacebookIcon width={24} height={24} />}
                    onClick={handleOnOutlinkClick(providerId)}
                  />
                );
              case "playStore":
                return (
                  <IconButton
                    key={`provider-${providerId}`}
                    icon={<PlayStoreIcon width={24} height={24} />}
                    onClick={handleOnOutlinkClick(providerId)}
                  />
                );

              case "appStore":
                return (
                  <IconButton
                    key={`provider-${providerId}`}
                    icon={<AppStoreIcon width={24} height={24} />}
                    onClick={handleOnOutlinkClick(providerId)}
                  />
                );
              default:
                return null;
            }
          })}
        </FooterIconButtons>
      </footer>
    );
  },
)`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 40px;
  font-size: 11px;
  color: ${({ theme }) => theme.colors.grey500};
  background-color: ${({ theme }) => theme.colors.grey100};
  border-top: 1px solid ${({ theme }) => theme.colors.grey300};

  > button {
    border-right: 1px solid ${({ theme }) => theme.colors.grey300};
    height: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
  }

  ${({ visible }) => (visible === false ? "display: none" : "")};
`;

const FooterInfo = styled.div`
  border-right: 1px solid ${({ theme }) => theme.colors.grey300};
  height: 100%;
  box-sizing: border-box;
  font-size: 11px;
  padding: 0px 10px;
`;

const FooterButton = styled.button`
  ${buttonBaseStyles}
  padding: 12px 10px;
  color: ${({ theme }) => theme.colors.grey500};
  background-color: ${({ theme }) => theme.colors.grey100};
`;

const FooterIconButtons = styled.div`
  white-space: nowrap;
  padding: 0 10px;

  button {
    margin-right: 16px;

    :last-child {
      margin-right: 0px;
    }
  }
`;
