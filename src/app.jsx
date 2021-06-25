import React, { useState, useEffect } from "react";
import { Router, Link } from "wouter";

// Import and apply CSS stylesheet
import "./styles/styles.css";

// Where all of our pages come from
import PageRouter from "./components/router.jsx";
import useHashLocation from "./hooks/wouter-hash";

// The component that adds our Meta tags to the page
import Seo from "./components/seo.jsx";

export default function Home() {
  return (
    <Router hook={useHashLocation}>
      <Seo />
      <main role="main" className="wrapper">
        <div className="content">
          <PageRouter />

          <div
            style={{
              width: "100%",
              textAlign: "center",
              marginTop: 16,
              opacity: 0.4
            }}
          >
            Glitch App by&nbsp;
            <a href="https://twitter.com/euthenics" target="_blank">
              @euthenics
            </a>
            <br />
            <span style={{ fontSize: 12, opacity: 0.5 }}>
              ⚡️ ETH: 0x581A91df7Fb87CD1a1D0B05D47ce1a2821bC2AC4
            </span>
          </div>
        </div>
      </main>
    </Router>
  );
}
