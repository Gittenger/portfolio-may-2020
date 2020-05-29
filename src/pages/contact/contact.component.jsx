import React from "react";

import {
  ContactPageContainer,
  ContactForm,
  ContactDesc,
  ContactOptions,
} from "./contact.styles";

const ContactPage = () => (
  <ContactPageContainer>
    <h1>Contact Info</h1>
    <ContactForm>
      <ContactDesc>
        <p>You can contact me easily via email or phone.</p>
        <p>
          If you are looking for a self-motivated, passionate developer to join
          your team, don't hesitate to reach out. I look forward to hearing from
          you!
        </p>
      </ContactDesc>
      <ContactOptions>
        <h2>Email: </h2>
        <p>
          <a href="mailto:john.pittenger86@gmail.com">
            john.pittenger86@gmail.com
          </a>
        </p>
        <h2>Phone: </h2>
        <p>(513) 378-6143</p>
      </ContactOptions>
    </ContactForm>
  </ContactPageContainer>
);

export default ContactPage;
