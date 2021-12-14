/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { Input, Button, neutral, pink } from '@superys/momo-ui';
import styled from 'styled-components';

export default function HomePage() {
  return (
    <StyledHomePage>
      <header>
        <h1>
          <span role="img" aria-label="girl emoji">
            👧
          </span>{' '}
          PostGirl
        </h1>
        <p className="description">
          Make GET and POST requests, from your PC, your cellphone ... your TV
          (if that&apos;s what you want - who am I to stop you). From wherever
          you want!
        </p>
      </header>

      <main>
        <section className="request">
          <select>
            <option value="get">Get</option>
            <option value="post">Post</option>
          </select>
          <Input placeholder="Your endpoint URL here ..." />
          <Button>Send</Button>
        </section>

        <section className="response">
          <div className="response-header">
            {/* <div className="buttons">
              <TertiaryButton modifiers="small">Body</TertiaryButton>
            </div> */}
            <div className="info">
              <span>
                <strong>Status:</strong> 200 OK
              </span>
              <span>
                <strong>Time:</strong> 207 ms
              </span>
              <span>
                <strong>Size:</strong> 880 B
              </span>
            </div>
          </div>
          <code>1 | &#123; &#34;key&#34;: &#34;value&#34; &#125;</code>
        </section>
      </main>
    </StyledHomePage>
  );
}

const StyledHomePage = styled.div`
  max-width: 900px;
  margin: 0 auto;

  header {
    text-align: center;
    max-width: 600px;
    padding: 15px 25px;
    margin: 0 auto;
  }

  main {
    .request {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 20px;
      label {
        flex-grow: 2;
        input {
          width: 100%;
        }
      }
      button {
        background-color: ${pink[300]};
      }
    }

    .response {
      border-top: 1px solid ${neutral[400]};
      width: 100%;
      .response-header {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        padding: 20px 0;
        margin-bottom: 10px;
        .buttons button:not(:last-child) {
          margin-right: 5px;
        }
        .info span {
          margin-right: 8px;
        }
      }
      code {
        padding-left: 20px;
        color: ${pink[500]};
      }
    }
  }

  @media screen and (max-width: 600px) {
    header .description {
      display: none;
    }
    main .request {
      flex-direction: column;
      align-items: stretch;
      gap: 5px;
      input {
        width: 100%;
      }
    }
  }

  /* To be removed when select component is imported from momo*/
  select {
    font-size: 1rem;
    background-color: #ffffff;
    color: #333333;
    padding: 12px 20px;
    border-radius: 30px;
    border: 2px solid #e0e0e0;
    box-sizing: border-box;
    -webkit-transition: background-color 0.2s linear, color 0.2s linear,
      box-shadow 0.2s linear;
    transition: background-color 0.2s linear, color 0.2s linear,
      box-shadow 0.2s linear;
  }
`;
