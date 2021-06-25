import React, { useState, useEffect } from "react";
import { Container, Title, Dropzone, DropzoneBackground } from "../components";
import FileEditor from "../components/FileEditor";
import Tilt from "react-parallax-tilt";

import { useDropzone } from "react-dropzone";
import { isMobile } from "react-device-detect";

const Home = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const {
    getRootProps,
    getInputProps,
    isDragReject,
    isDragAccept
  } = useDropzone({
    maxFiles: 1,
    maxSize: 52428800,
    multiple: false,
    accept: "image/jpeg, image/png, image/jpg",
    onDrop: acceptedFiles => {
      if (
        acceptedFiles &&
        typeof acceptedFiles !== "undefined" &&
        acceptedFiles.length > 0
      ) {
        setUploading(true);
        let tempFile = acceptedFiles[0];
        setFile(
          Object.assign(tempFile, {
            preview: URL.createObjectURL(tempFile)
          })
        );
      }
    }
  });

  useEffect(() => {
    if (file) {
      setUploading(false);
    }
  }, [file]);

  return (
    <Tilt
      tiltAngleXInitial={0}
      tiltAngleYInitial={0}
      tiltEnable={true}
      gyroscope={true}
      tiltMaxAngleX={!file ? 5 : 0}
      tiltMaxAngleY={!file ? 5 : 0}
    >
      <Container>
        {!file && (
          <Dropzone
            {...getRootProps()}
            reject={isDragReject}
            accept={isDragAccept}
          >
            <input {...getInputProps()} />

            <Title reject={isDragReject} accept={isDragAccept}>
              {isDragReject ? "Invalid file" : "Drop an image here"}
            </Title>
            <p style={{ opacity: 0.7 }}>
              <em>Only *.jpeg and *.png images less than 5MB</em>
            </p>

            {isMobile && (
              <div
                style={{
                  position: "absolute",
                  width: "100%",
                  background: "#f3ba2e",
                  bottom: "20%",
                  display: "flex",
                  padding: "24px 16px",
                  color: "#222",
                  fontSize: 20
                }}
              >
                <strong>
                  Note: Image downloading is not reliable on mobile. Either use
                  a desktop browser, or take a screenshot after editing
                </strong>
              </div>
            )}
            {uploading && <p>Uploading...</p>}
            <DropzoneBackground reject={isDragReject} accept={isDragAccept} />
          </Dropzone>
        )}

        {file && <FileEditor file={file} setFile={setFile} />}
      </Container>
    </Tilt>
  );
};

export default Home;
