import React from "react";
import { Document, Page } from "react-pdf/dist/entry.webpack";

import { ResumePageContainer, ResumeContainer } from "./resume.styles";

const ResumePage = () => (
  <ResumePageContainer>
    <h1>My Resume</h1>
    <ResumeContainer>
      <a
        target="_blank"
        href="https://drive.google.com/file/d/1fqA2Q1UlK8iUHy-x-HAM-t-8TVFGBTbq/view?usp=sharing"
      >
        <Document file="/resume.pdf">
          <Page pageNumber={1} width={600} />
        </Document>
      </a>
    </ResumeContainer>
  </ResumePageContainer>
);

export default ResumePage;
