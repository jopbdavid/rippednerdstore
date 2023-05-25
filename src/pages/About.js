import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../resources/heroBcg.png";

const About = () => {
  return (
    <main>
      <PageHero title="About" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className="title">
            <h2>My story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Welcome to TheRippedNerd, where we are passionate about empowering
            individuals to embrace a healthy lifestyle through proper nutrition
            and exercise. Our story begins with a shared vision and a
            deep-rooted desire to make a positive impact on people's lives.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default About;
