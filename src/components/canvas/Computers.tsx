import  { useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: isMobile ? "70vh" : "100vh", // Adjust height for mobile
        overflow: "hidden",
      }}
    >
      <Spline
        scene="https://prod.spline.design/dlpq05nSzUnvhwcH/scene.splinecode"
        style={{
          position: "absolute",
          top: isMobile ? "2%" : -68, // Adjust positioning for mobile
          left: isMobile ? "5%" : 0, // Slight left alignment for mobile
          width: isMobile ? "90%" : "100%", // Adjust width for mobile
          height: isMobile ? "90%" : "100%", // Adjust height for mobile
          zIndex: 1, // Ensures that the model stays behind other content
        }}
      />
    </div>
  );
};

export default ComputersCanvas;
