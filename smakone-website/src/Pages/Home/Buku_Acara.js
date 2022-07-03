import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

import demoFile from "./DraftBukuAcaraPLS2022.pdf";

export default function BukuAcara() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
      <div style={{ height: "720px" }}>
        <Viewer fileUrl={demoFile} plugins={[defaultLayoutPluginInstance]} />
      </div>
    </Worker>
  );
}