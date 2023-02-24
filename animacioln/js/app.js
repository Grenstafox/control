const box = document.getElementById("box");

box.animate(
  [
    {}, 
    {
      transform: "translateY(150px)"
    },
    {
      transform: "translate(150px, 150px)"
    },
    {
      transform: "translateX(150px)"
    },
    {}
  ],
  { duration: 4000, iterations: Infinity }
);