function useEventListiner(event, callback, deps) {
  useEffect(() => {
    window.addEventListener(event, callback);
    return () => window.removeEventListener(event, callback);
  }, [event, callback, ...deps])
}

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEventListiner("resize", () => setWidth(window.innerWidth), []);

  return width;
}