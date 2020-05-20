import React from "react";
import { Document, Page } from "react-pdf/dist/entry.webpack";

import { ResumePageContainer, ResumeContainer } from "./resume.styles";

const ResumePage = () => (
  <ResumePageContainer>
    <h1>Title</h1>
    <ResumeContainer>
      <Document file="/resume.pdf">
        <Page pageNumber={1} width={600} />
      </Document>
    </ResumeContainer>
  </ResumePageContainer>
);

export default ResumePage;
