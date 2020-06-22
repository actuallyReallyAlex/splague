import * as React from "react";

// eslint-disable-next-line
const useInterval = (callback: Function, delay: number): void => {
  // eslint-disable-next-line
  const savedCallback: React.MutableRefObject<any> = React.useRef();

  // Remember the latest callback.
  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  React.useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

export default useInterval;
