import React, { useState, useEffect } from "react";
import pdfjsLib from "pdfjs-dist";
const PDFViewer = ({ pdfUrl }) => {
  const [pdfDoc, setPdfDoc] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [numPages, setNumPages] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const loadingTask = pdfjsLib.getDocument(pdfUrl);
    loadingTask.promise.then((pdf) => {
      setPdfDoc(pdf);
      setNumPages(pdf.numPages);
      setIsLoading(false);
    });
  }, [pdfUrl]);
  const handlePrevPage = () => {
    setPageNum(pageNum - 1);
  };
  const handleNextPage = () => {
    setPageNum(pageNum + 1);
  };
  const handleFirstPage = () => {
    setPageNum(1);
  };
  const handleLastPage = () => {
    setPageNum(numPages);
  };
  const renderPage = () => {
    if (!pdfDoc) {
      return null;
    }
    pdfDoc.getPage(pageNum).then((page) => {
      const canvas = document.getElementById("pdfCanvas");
      const context = canvas.getContext("2d");
      const viewport = page.getViewport({ scale: 1 });
      canvas.height = viewport.height;
      canvas.width = viewport.width;
      const renderContext = { canvasContext: context, viewport: viewport };
      const renderTask = page.render(renderContext);
      renderTask.promise.then(() => {
        console.log("Page rendered");
      });
    });
  };
  return (
    <div className="pdfViewer">
      {" "}
      {isLoading ? (
        <div className="loadingMessage">Loading...</div>
      ) : (
        <>
          {" "}
          <div className="pdfControls">
            {" "}
            <button onClick={handlePrevPage} disabled={pageNum === 1}>
              {" "}
              Prev{" "}
            </button>{" "}
            <button onClick={handleNextPage} disabled={pageNum === numPages}>
              {" "}
              Next{" "}
            </button>{" "}
            <button onClick={handleFirstPage} disabled={pageNum === 1}>
              {" "}
              First{" "}
            </button>{" "}
            <button onClick={handleLastPage} disabled={pageNum === numPages}>
              {" "}
              Last{" "}
            </button>{" "}
          </div>{" "}
          <canvas id="pdfCanvas"></canvas> {renderPage()}{" "}
        </>
      )}{" "}
    </div>
  );
};
export default PDFViewer;
