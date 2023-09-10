import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Page404() {
  return (
    <Error>
      <div>
        <h1>404</h1>
        <h2>Oops! Page not Found</h2>
        <p>Sorry, the page you're looking for doesn't exist.</p>
        <div>
          <Link to="/">Return Home</Link>
          <Link to={-1}>Navigate Back</Link>
        </div>
      </div>
    </Error>
  );
}

const Error = styled.section`
  height: 47rem;
  display: flex;
  justify-content: center;
  align-items: center;
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    & * {
      margin: 0;
      padding: 0;
    }
    & h1 {
      margin-top: -5rem;
      margin-bottom: -3rem;
      font-size: 15rem;
      background: linear-gradient(
        to right bottom,
        var(--hover-color1),
        var(--hover-color2)
      );
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }
    & h2 {
      font-size: 2.5rem;
      text-transform: uppercase;
    }
    & p {
      font-size: 1.2rem;
      font-weight: 500;
    }
    & div {
      width: 100%;
      display: flex;
      justify-content: space-around;
      & a:first-child {
        padding: 0.5rem 1rem;
        background-color: var(--hover-color1);
        color: white;
        border-radius: 50px;
        font-size: 1.2rem;
        transition: 0.3s ease-in-out;
        & > svg {
          font-size: 1.4rem;
        }
        &:hover {
          color: black;
          box-shadow: 5px 5px 5px rgba(81, 81, 81, 0.5);
        }
      }
      & a:last-child {
        padding: 0.5rem 1rem;
        border: 3px solid var(--hover-color1);
        color: var(--text-color1);
        border-radius: 50px;
        font-size: 1.1rem;
        font-weight: 500;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: var(--hover-color1);
          color: black;
          box-shadow: 5px 5px 5px rgba(81, 81, 81, 0.5);
        }
      }
    }
  }
`;

export default Page404;
