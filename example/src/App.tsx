import React from "react";

import { Typography, ThemeProvider } from "bemypet-web-ui";

const App = () => {
  return (
    <div>
      <ThemeProvider>
        <Typography variant="heading1" color="green">
          산돌고딕네오인가?
        </Typography>
        <Typography color="">산돌고딕네오인가?</Typography>
      </ThemeProvider>
    </div>
  );
};

export default App;
