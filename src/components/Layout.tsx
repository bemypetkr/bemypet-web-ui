import React from "react";
import { Helmet, HelmetProvider, HelmetProps } from "react-helmet-async";
import styled from "styled-components";

interface LayoutProps {
  helmetProps?: HelmetProps;
  children?: React.ReactNode;
  loading?: React.ReactNode;
  footer?: React.ReactNode;
}

export const Layout = ({
  helmetProps,
  children,
  loading,
  footer,
}: LayoutProps) => {
  return (
    <Wrapper>
      <Header {...helmetProps} />
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

export const Header = (props: HelmetProps) => {
  return (
    <HelmetProvider>
      <Helmet {...props} />
    </HelmetProvider>
  );
};

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
`;
