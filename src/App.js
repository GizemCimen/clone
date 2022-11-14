import React from "react";
import Container from "./twitter-layouts/Container";
import Sidebar from "./twitter-layouts/Sidebar";
import Content from "./twitter-layouts/Content";
import Widgets from "./twitter-layouts/Widgets";

const App = () => {
  return (
    <Container>
      <Sidebar />
      <Content />
      <Widgets />
    </Container>
  );
};

export default App;
