// Create a function to move an element. The function arguments are,
// distance, duration, and the element to move

// using latest web animations api
function moveElement(duration, distance, element) {
  element.animate(
    {
      transform: ['translateX(0)', `translateX(${distance}px)`],
    },
    {
      duration,
    }
  );
}

//using requestion animation frames
function moveElement2(duration, distance, element) {
  const start = performance.now();

  const move = (currentTime) => {
    const elpased = currentTime - start;
    const progress = elpased / duration;
    const amountToMove = progress * duration;

    element.style.transform = `translateX(${amountToMove}`;

    if (amountToMove < distance) {
      requestAnimationFrame(move);
    }
  };
  move(performance.now());
  //requestAnimationFrame(move);
}
