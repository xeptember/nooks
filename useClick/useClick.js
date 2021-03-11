export const useClick = onClick => {
  if(typeof onClick !== "function") {
    return;
  }
  const el = useRef();
  useEffect(() => {
    if (el.current) {
      el.current.addEventListener("click", onClick);
    }
    return () => {
      if(el.current) {
        el.current.removeEventListener("click", onClick)
      }
    }
  }, []);
  return el;
};

const App = () => {
  const sayHello = () => console.log("say hello");
  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  );
};