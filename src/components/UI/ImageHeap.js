import React from 'react';
import { useSprings, animated, interpolate } from 'react-spring';
import { useGesture } from 'react-with-gesture';

// returns: Props for init states of the imageDiv-Containers & the imageDivs
const to = i => ({ x: 0, y: i * (window.innerWidth / window.innerHeight < 1 / 1 ? -50 : -4), scale: 0.9, rot: -5 + 4 * i })

// returns: Rotating the images a litle bit
const trans = (r, s) =>
  `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

const gone = new Set();

export default (props) => {
  const images = props.data.map(d => d[0]);
  const labels = props.data.map(d => d[1]);
  const [animatedProps, set] = useSprings(images.length, i => ({ ...to(i) }))

  const bind = useGesture(({
    args: [index],
    down,
    delta: [xDelta, yDelta],
    direction: [xDir, yDir],
    velocity
  }) => {

    // We only allow sliding the top image
    if (index !== props.data.length - gone.size - 1)
      return;

    const trigger = velocity > 0.2;
    const dirX = xDir < 0 ? -1 : 1;

    if (!down && trigger)
      gone.add(index);

    // Update the animatedProps accordingly
    set(i => {
      if (index !== i) return;
      const isGone = gone.has(index);
      const x = isGone ? (200 + window.innerWidth) * dirX : down ? xDelta : 0;
      const rot = xDelta / 100 + (isGone ? dirX * 300 * velocity : 0);
      const scale = down ? 1 : 0.9;
      return { x, rot, scale, config: { friction: 10, tension: down ? 800 : isGone ? 200 : 500 } };
    });
    // All images are gone => re-display them after 600ms by setting their state to init state
    if (!down && gone.size === images.length)
      setTimeout(() => gone.clear() || set(i => to(i)), 600);
  });

  return animatedProps.map(({ x, y, rot, scale }, i) => (
    <animated.div key={i} style={{
      transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`) }}>
      <animated.div {...bind(i)}
        style={{ transform: interpolate([rot, scale], trans),
                backgroundImage: `url(${images[i]})` }}
        onClick={(event) =>
          {if (i === (props.data.length - gone.size -1))
            return props.handleClick(event, i)}}>
        <p>{labels[i]}</p>
      </animated.div>
  </animated.div>));
}
