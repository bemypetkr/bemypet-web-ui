import React from "react";
import { Helmet, HelmetProvider, HelmetProps } from "react-helmet-async";
import styled from "styled-components";
import { getPixel } from "lib/helpers";
import { Footer, FooterProps } from "./Layouts/Footer";

export interface LayoutProps {
  helmetProps?: HelmetProps;
  children?: React.ReactNode;
  loading?: React.ReactNode;
  footerProps?: FooterProps;
}

export const Layout = ({
  helmetProps,
  footerProps,
  children,
  loading,
}: LayoutProps) => {
  return (
    <HelmetProvider>
      <Wrapper>
        <Helmet
          titleTemplate="%s :: 비마이펫"
          defaultTitle="비마이펫"
          {...helmetProps}
        />
        <Main>{loading ? loading : children}</Main>
        <Footer {...footerProps} />
      </Wrapper>
    </HelmetProvider>
  );
};

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1;
`;

export const PageBody = styled.div`
  width: 700px;
  max-width: 100%;
  margin: 0 auto;
`;

export interface GridProps {
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-evenly"
    | "space-around"
    | "stretch";
  alignItems?: "flex-start" | "flex-end" | "center";
  width?: string | number;
  marginTop?: string | number;
  marginBottom?: string | number;
  marginLeft?: string | number;
  marginRight?: string | number;
}

export const Column = styled.div<GridProps>`
  width: ${({ width = "100%" }) => getPixel(width)};
  display: flex;
  flex-direction: column;
  justify-content: ${({ justifyContent = "flex-start" }) => justifyContent};
  align-items: ${({ alignItems = "flex-start" }) => alignItems};
  margin-top: ${({ marginTop = 0 }) => getPixel(marginTop)};
  margin-bottom: ${({ marginBottom = 0 }) => getPixel(marginBottom)};
  margin-left: ${({ marginLeft = 0 }) => getPixel(marginLeft)};
  margin-right: ${({ marginRight = 0 }) => getPixel(marginRight)};
`;

export const Row = styled.div<GridProps>`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: ${({ justifyContent = "flex-start" }) => justifyContent};
  align-items: ${({ alignItems = "flex-start" }) => alignItems};
  margin-top: ${({ marginTop = 0 }) => getPixel(marginTop)};
  margin-bottom: ${({ marginBottom = 0 }) => getPixel(marginBottom)};
  margin-left: ${({ marginLeft = 0 }) => getPixel(marginLeft)};
  margin-right: ${({ marginRight = 0 }) => getPixel(marginRight)};
`;

export { Header } from "./Layouts/Header";
export { Footer };
