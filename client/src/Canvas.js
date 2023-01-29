import React, { useRef, useEffect, useState } from "react";

const scaleWidth = 3000;
const scaleHeight = 3000;

function draw(topImage, canvas, scaleX, scaleY) {
  console.log(topImage);
  const ctx = canvas.getContext("2d");
  ctx.scale(scaleX, scaleY);
  ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
  topImage.map((item, index) => {
    if (index === 0) {
      const image = new Image();
      image.src = item;
      image.onload = () => {
        ctx.drawImage(image, 0, 0, 1000, 1000);
      };
    } else if (index === 1) {
      const image = new Image();
      image.src = item;
      image.onload = () => {
        ctx.drawImage(image, 30, 50, 200, 200);
      };
    }
  });
}
export default function App() {
  const [width, setWidth] = useState(800);
  const [height, setHeight] = useState(500);
  const [URL, setURL] = useState([
   // "http://127.0.0.1:8081/CottonField.jpg",
    "https://images.unsplash.com/photo-1627482474155-f42f5c1f0786?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80",
    "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    //"https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
  ]);
  const [scale, setScale] = React.useState({ x: 1, y: 1 });
  const canvas = useRef(null);

  const calculateScaleX = () =>
    !canvas.current ? 0 : canvas.current.clientWidth / scaleWidth;
  const calculateScaleY = () =>
    !canvas.current ? 0 : canvas.current.clientHeight / scaleHeight;

  const resized = () => {
    canvas.current.width = canvas.current.clientWidth;
    canvas.current.height = canvas.current.clientHeight;
    setScale({ x: calculateScaleX(), y: calculateScaleY() });
  };

  useEffect(() => resized(), []);

  useEffect(() => {
    const currentCanvas = canvas.current;
    currentCanvas.addEventListener("resize", resized);
    return () => currentCanvas.removeEventListener("resize", resized);
  });

  useEffect(() => {
    draw(URL, canvas.current, scale.x, scale.y);
  }, [URL, scale]);

  return (
    <>
      <canvas ref={canvas} style={{ width: 1000, height: 1000 }}></canvas>
    </>
  );
}
