const bodyElement = document.querySelector('body');
bodyElement.addEventListener('mousemove', (event) => {
  const xPos = event.offsetX;
  const yPos = event.offsetY;
  const size = Math.random() * 100;
  const spanElement= document.createElement('span');
  spanElement.style.width = `${size}px`;
  spanElement.style.height = `${size}px`;
  spanElement.style.left = `${xPos}px`;
  spanElement.style.top = `${yPos}px`;
  bodyElement.appendChild(spanElement);
  setTimeout(() => {
    spanElement.remove();
  }, 3000); 
});