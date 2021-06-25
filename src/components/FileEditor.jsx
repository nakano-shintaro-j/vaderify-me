import React, { useState } from "react";
import styled from "styled-components";
import Slider, { Thumb, Track } from "./StyledSlider";
import Button from "./Button";
import * as htmlToImage from "html-to-image";

import { isMobile } from "react-device-detect";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("https://cdn.glitch.com/ec76fcf1-8987-412f-8a9a-e1b59470b0cb%2F21a1c069-9b26-4eab-8b5c-843c0a9b616d_BgRepeat.svg?v=1620655750781);
  background-repeat: repeat;
  overflow: hidden;
  border-radius: 16px;
`;

const FileEditor = ({ file, setFile }) => {
  const [borderWidth, setBorderWidth] = useState(5);
  const [hoveringSlider, setHoveringSlider] = useState(false);
  const [disabledGenerate, setDisabledGenerate] = useState(false);

  return (
    <Container>
      {file && (
        <>
          <div
            style={{
              width: "100%",
              paddingTop: "100%",
              position: "relative"
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                padding: 16
              }}
            >
              <div
                id="to-generate"
                style={{
                  background: "transparent",
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  boxSizing: "border-box",
                  background: '#FF9DDB',
                  overflow: "hidden"
                }}
              >
                <img
                  src={file.preview}
                  style={{
                    display: "block",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "50%",
                    clipPath: "circle(" + (50 - borderWidth) + "% at 50% 50%)"
                  }}
                />
              </div>
            </div>
          </div>

          <div
            style={{
              width: "100%",
              padding: 16,
              backgroundColor: "rgba(0,0,0,.4)",
              position: "absolute",
              bottom: 0,
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap"
            }}
          >
            {!isMobile && (
              <Button outlined={true} onClick={() => setFile(null)}>
                Reset
              </Button>
            )}

            <div
              style={{
                position: "relative",
                bottom: 0,
                flexGrow: 1,
                minWidth: 300,
                marginLeft: 8,
                marginRight: 8,
                transition: "opacity 300ms ease-in-out",
                cursor: "pointer",
                opacity: (hoveringSlider || isMobile) ? 1 : 0.5
              }}
              onMouseEnter={() => setHoveringSlider(true)}
              onMouseLeave={() => setHoveringSlider(false)}
            >
              <Slider
                min={0}
                max={50}
                defaultValue={borderWidth}
                renderTrack={Track}
                renderThumb={Thumb}
                onChange={value => setBorderWidth(value)}
              />
            </div>

            {!isMobile && (
              <Button
                disabled={disabledGenerate}
                onClick={() => {
                  if (!disabledGenerate) {
                    setDisabledGenerate(true);
                    const canvas = document.getElementById("generator-canvas");
                    const node = document
                      .getElementById("to-generate")
                      .cloneNode(true);
                    canvas.innerHTML = "";
                    canvas.appendChild(node);
                    htmlToImage.toPng(node).then(function(dataUrl) {
                      let link = document.createElement("a");
                      link.download = "vaderified.png";
                      link.href = dataUrl;
                      link.click();
                      setDisabledGenerate(false);
                    });
                  }
                }}
              >
                Generate
              </Button>
            )}
          </div>
        </>
      )}
    </Container>
  );
};

export default FileEditor;
