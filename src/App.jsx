import { useRef } from "react";
import Display from "./components/Display";
import Jumbotron from "./components/Jumbotron";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import SoundSection from "./components/SoundSection";
import WebgiViewer from "./components/WebgiViewer";

const App = () => {
  const webgiViewerRef = useRef();
  const contentRef = useRef();
  const handlePreview = () => {
    webgiViewerRef.current.triggerPreview();
  };

  return (
    <div className="App">
      <Loader />
      <div id="content" ref={contentRef}>
        <Navbar />
        <Jumbotron />
        <SoundSection />
        <Display triggerPreview={handlePreview} />
      </div>
      <WebgiViewer ref={webgiViewerRef} contentRef={contentRef} />
    </div>
  );
};

export default App;
