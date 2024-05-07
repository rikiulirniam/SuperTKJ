/** @type {HTMLCanvasElement} */
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

let position = {
  x: 10,
  y: 10,
};

let velocity = {
  x: 0,
  y: 0,
};

let platforms = [
  {
    x: canvas.width + 200,
    y: canvas.height - 500,
  },
];

const setup = () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight - 3.1;
  for (let i = 0; i < 5; i++) {
    platforms.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
    });
  }
};

const update = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const img = new Image();
  img.src = "../agent/kiki.png";
  ctx.drawImage(img, position.x, position.y, 75, 100);

  if (position.x <= canvas.width / 2 - 100) position.x += velocity.x;
  position.y += velocity.y;

  platforms.forEach((platform, i) => {
    if (position.x >= canvas.width / 2 - 100) {
      platforms[i].x = platform.x - velocity.x;
    }
    drawRect(platform.x, platform.y, 100, 50, "blue");

    if (
      position.y + 100 >= platform.y &&
      position.y + 100 <= platform.y + 50 &&
      position.x + 75 >= platform.x &&
      position.x <= platform.x + 100
    ) {
      velocity.y = 0;
      position.y = platform.y - 100;
      
    }
  });

  if (position.y <= canvas.height - 100) velocity.y += 1;
  else {
    velocity.y = 0;
    position.y = canvas.height - 100;
  }

  requestAnimationFrame(update);
};

addEventListener("keydown", (e) => {
  switch (e.key) {
    case "d":
      velocity.x = 10;
      break;
    case "a":
      velocity.x = -10;
      break;
    case "w":
      velocity.y = -20;
      break;
  }
});

addEventListener("keyup", (e) => {
  switch (e.key) {
    case "d":
      velocity.x = 0;
      break;
    case "a":
      velocity.x = 0;
      break;
  }
});

setup();
update();
