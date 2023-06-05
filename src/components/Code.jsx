import { useContext } from "react";
import { DataContext } from "../context/DataProvider";
import Editor from "./Editor";

import { Box, styled } from "@mui/material";

const Container = styled(Box)`
  display: flex;
  background: #060606;
  height: 50vh;
`;
const Code = () => {
  const { html, css, js, setHtml, setCss, setJs } = useContext(DataContext);

  return (
    <Container>
      <Editor
        heading="HTML"
        language="xml"
        icon="/"
        color="#FF3C41"
        value={html}
        onChange={setHtml}
      />
      <Editor
        language="css"
        heading="CSS"
        icon="*"
        color="#0EBEFF"
        value={css}
        onChange={setCss}
      />
      <Editor
        language="javascript"
        heading="JAVASCRIPT"
        icon="{}"
        color="#FCD000"
        value={js}
        onChange={setJs}
      />
    </Container>
  );
};
export default Code;
