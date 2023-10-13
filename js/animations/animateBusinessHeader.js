import { gsap } from "gsap";

export function animateBusinessHeader() {
  const randomX = random(1, 30);
  const randomY = random(1, 20);
  const randomDelay = random(0, 10);
  const randomTime = random(2, 5);
  //   const randomTime2 = random(5, 10);
  //   const randomAngle = random(-10, 10);

  const images = gsap.utils.toArray('[animate="floating-img"]');
  // console.log(images);
  images.forEach((image) => {
    gsap.set(image, {
      x: randomX(-1),
      y: randomX(1),
      // rotation: randomAngle(-1)
    });

    moveX(image, 1);
    moveY(image, -1);
    // rotate(image, 1);
  });

  //   function rotate(target, direction) {
  //     gsap.to(target, randomTime2(), {
  //       rotation: randomAngle(direction),
  //       delay: randomDelay(),
  //       ease: "power1.inOut",
  //       onComplete: rotate,
  //       onCompleteParams: [target, direction * -1],
  //     });
  //   }

  function moveX(target, direction) {
    gsap.to(target, randomTime(), {
      x: randomX(direction),
      delay: randomDelay(),
      ease: "power1.inOut",
      onComplete: moveX,
      onCompleteParams: [target, direction * -1],
    });
  }

  function moveY(target, direction) {
    gsap.to(target, randomTime(), {
      y: randomY(direction),
      ease: "power1.inOut",
      onComplete: moveY,
      onCompleteParams: [target, direction * -1],
    });
  }

  function random(min, max) {
    const delta = max - min;
    return (direction = 1) => (min + delta * Math.random()) * direction;
  }
}
