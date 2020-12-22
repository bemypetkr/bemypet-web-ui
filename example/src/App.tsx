import React from "react";

import {
  Typography,
  ThemeProvider,
  Button,
  Layout,
  Row,
  Column,
} from "bemypet-web-ui";
import styled from "styled-components";

const App = () => {
  return (
    <ThemeProvider>
      <Layout>
        <Container>
          <Typography variant="heading1">Typography</Typography>
          <Typography variant="heading3">Color Variation</Typography>
          <Row>
            <Typography>Default</Typography>
            <Typography color="red">Red Color</Typography>
            <Typography color="green">Green Color</Typography>
          </Row>
        </Container>
        <Container>
          <Typography variant="heading1">Button</Typography>
          <Typography variant="heading3">Size Variation</Typography>
          <Row>
            <Button size="small">Small</Button>
            <Button size="medium">Medium</Button>
            <Button size="large">Large</Button>
            <Button color="primary" size="small">
              Small
            </Button>
            <Button color="primary" size="medium">
              Medium
            </Button>
            <Button color="primary" size="large">
              Large
            </Button>
          </Row>
        </Container>
      </Layout>
    </ThemeProvider>
  );
};

export default App;

const Container = styled(Column)`
  padding: 20px 30px 50px;
`;
