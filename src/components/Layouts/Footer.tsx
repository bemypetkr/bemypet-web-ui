import React from "react";
import styled from "styled-components";
import { IconButton } from "components/Button";
import {
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
  PlayStoreIcon,
  AppStoreIcon,
} from "components/Icons";
import Urls from "lib/urls";

interface LinkInterface {
  to: string;
  label?: string;
  icon?: React.ReactNode;
  target?: string;
}

interface FooterProps {
  version?: string;
  buttons?: LinkInterface[];
  outlinks?: string;
}

export const Footer = styled(
  ({
    version,
    outlinks = "instagram|youtube|facebook|playStore|appStore",
    ...rest
  }: FooterProps) => {
    const outlinkProviders = outlinks.split("|");
    const handleOnClick = (providerId: string) => () => {
      console.log(providerId, Urls[providerId], Urls.facebook);
    };

    return (
      <div {...rest}>
        <FooterInfo>
          상호명 : 비마이펫© Copyright 2020, All Rights Reserved 주소 : 서울시
          서초구 서초중앙로 24길 55, 401호 대표자 : 성현진 문의: 050-7724-6399,
          business@bemypet.kr
          {version ? <span>version: {version}</span> : null}
        </FooterInfo>
        <FooterButton>크리에이터 제휴문의</FooterButton>
        <FooterButton>크리에이터 전체보기</FooterButton>
        <FooterIconButtons>
          {outlinkProviders.map((providerId) => {
            switch (providerId) {
              case "instagram":
                return (
                  <IconButton
                    key={`provider-${providerId}`}
                    icon={<InstagramIcon width={24} height={24} />}
                    onClick={handleOnClick(providerId)}
                  />
                );

              case "youtube":
                return (
                  <IconButton
                    key={`provider-${providerId}`}
                    icon={<YoutubeIcon width={24} height={24} />}
                    onClick={handleOnClick(providerId)}
                  />
                );

              case "facebook":
                return (
                  <IconButton
                    key={`provider-${providerId}`}
                    icon={<FacebookIcon width={24} height={24} />}
                    onClick={handleOnClick(providerId)}
                  />
                );
              case "playStore":
                return (
                  <IconButton
                    key={`provider-${providerId}`}
                    icon={<PlayStoreIcon width={24} height={24} />}
                    onClick={handleOnClick(providerId)}
                  />
                );

              case "appStore":
                return (
                  <IconButton
                    key={`provider-${providerId}`}
                    icon={<AppStoreIcon width={24} height={24} />}
                    onClick={handleOnClick(providerId)}
                  />
                );
              default:
                return null;
            }
          })}
        </FooterIconButtons>
      </div>
    );
  },
)`
  display: flex;
  width: 100%;
  height: 40px;
  font-size: 11px;
  color: ${({ theme }) => theme.colors.grey500};
  background-color: ${({ theme }) => theme.colors.grey100};
  border-top: 1px solid ${({ theme }) => theme.colors.grey300};

  > button,
  > div {
    border-right: 1px solid ${({ theme }) => theme.colors.grey300};
    height: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;

    :last-child {
      border: none;
    }
  }
`;

const FooterInfo = styled.div`
  font-size: 11px;
  padding: 0px 10px;
`;

const FooterButton = styled.button`
  outline: none;
  border: none;
  white-space: nowrap;
  padding: 0px 10px;
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
