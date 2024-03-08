import { GlobalStyles } from "./globalStyles/Global";
import styled from "styled-components";
import Header from "./components/Header";
import Messages from "./components/Messages";
import data from "./data.json";
import { useState } from "react";

function App() {
  let filteredData = data.notifications.filter((item) => {
    return item.isUnread === true;
  });

  const [count, setCount] = useState(filteredData.length);
  return (
    <Container>
      <GlobalStyles />
      <Header count={count} setCount={setCount} />
      <Messages data={data.notifications} count={count} setCount={setCount} />
    </Container>
  );
}

export default App;

const Container = styled.div`
  max-width: 45.63rem;
  border-radius: 0.94rem;
  box-shadow: 0rem 1.25rem 3.75rem 0rem rgba(73, 97, 168, 0.05);
  background: rgb(255, 255, 255);
  padding: 33px 30px 17px 30px;

  @media screen and (max-width: 1000px) {
    max-width: 45.63rem !important;
    padding: 16px 26px 16px 16px;
  }
`;
