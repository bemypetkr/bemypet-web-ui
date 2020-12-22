import { getPixel } from "lib/helpers";
import React from "react";
import { Helmet, HelmetProvider, HelmetProps } from "react-helmet-async";
import styled from "styled-components";

interface LayoutProps {
  helmetProps?: HelmetProps;
  children?: React.ReactNode;
  loading?: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

export const Layout = ({
  helmetProps,
  children,
  loading,
  header,
  footer,
}: LayoutProps) => {
  return (
    <Wrapper>
      <HelmetComponent {...helmetProps} />
      {!!header ? header : null}
      <Main>{!!loading ? loading : children}</Main>
      {!!footer ? footer : null}
    </Wrapper>
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

const HelmetComponent = ({ ...props }: HelmetProps) => (
  <HelmetProvider>
    <Helmet {...props} />
  </HelmetProvider>
);

export const Header = styled.div`
  padding: 0 30px;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary100};
  color: ${({ theme }) => theme.colors.grey100};
`;

interface GridProps {
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-evenly"
    | "space-around"
    | "stretch";
  alignItems?: "flex-start" | "flex-end" | "center";
  marginTop?: string | number;
  marginBottom?: string | number;
  marginLeft?: string | number;
  marginRight?: string | number;
}

export const Column = styled.div<GridProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: ${({ marginTop = 0 }) => getPixel(marginTop)};
  margin-bottom: ${({ marginBottom = 0 }) => getPixel(marginBottom)};
  margin-left: ${({ marginLeft = 0 }) => getPixel(marginLeft)};
  margin-right: ${({ marginRight = 0 }) => getPixel(marginRight)};
`;

export const Row = styled.div<GridProps>`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: ${({ justifyContent = "flex-start" }) => justifyContent};
  align-items: ${({ alignItems = "flex-start" }) => alignItems};
  margin-top: ${({ marginTop = 0 }) => getPixel(marginTop)};
  margin-bottom: ${({ marginBottom = 0 }) => getPixel(marginBottom)};
  margin-left: ${({ marginLeft = 0 }) => getPixel(marginLeft)};
  margin-right: ${({ marginRight = 0 }) => getPixel(marginRight)};
`;
