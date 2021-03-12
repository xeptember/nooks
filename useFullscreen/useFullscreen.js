export const useFullscreen = (callback) => {
  const element = useRef();
  const runCb = isFull => {
    if (callback && typeof callback === "function") {
        callback(isFull);
      }
  }
  const triggerFull = () => {
    if (element.current) {
        if(element.cyrrent.requestFullscreen) {
            elenment.current.requestFullscreen();
        } else if (element.current.mozRequestFullScreen) {
            elenment.current.mozRequestFullScreen();
        } else if (element.current.webkitRequestFullscreen){
            element.current.webkitRequestFullscreen();
        } else if (element.current.msRequestFullscreen){
            element.current.msRequestFullscreen();
        }
      runCb(true);
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
    if (callback && typeof callback === "function") {
        runCb(false);
    }
  };
  return { element, triggerFull, exitFull };
};

const App = () => {
  const onFullS = (isFull) => {
    console.log(isFull ? "We are full" : "We are small");
  };
  const { element, triggerFull, exitFull } = useFullscreen(onFullS);
  return (
    <div className="App">
      <div ref={element}>
        <img
          src={`https://homepages.cae.wisc.edu/~ece533/images/airplane.png`}
        />
        <button onClick={exitFull}>Exit fullscreen</button>
        <button onClick={triggerFull}>Make fullscreen</button>
      </div>
    </div>
  );
};