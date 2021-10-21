import React from "react";

const DEFAULT_THRESHOLD = .7;

export default function useInViewPort({
  threshold = DEFAULT_THRESHOLD,
  triggerOnce = true
} = {}) {
  let nodeRef = React.useRef(null);
  let observerRef = React.useRef(null);

  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    observerRef.current = new IntersectionObserver(
      entries => {
        setIsVisible(entries[0].isIntersecting);
      },
      { threshold }
    );

    observerRef.current.observe(nodeRef.current);

    return () => {
      observerRef.current.disconnect();
    };
  }, []);

  React.useEffect(() => {
    if (isVisible && triggerOnce) {
      observerRef.current.disconnect();
    }
  }, [isVisible]);

  return [nodeRef, isVisible];
}