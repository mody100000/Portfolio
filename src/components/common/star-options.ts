import type { ISourceOptions } from "@tsparticles/engine";

export const starOptions: ISourceOptions = {
  background: {
    color: {
      value: "transparent",
    },
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: false,
      },
      onHover: {
        enable: false,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    number: {
      value: 200, // Balanced density of stars per viewport
      density: {
        enable: true,
      },
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: { min: 0.1, max: 0.8 },
      animation: {
        enable: true,
        speed: 1, // Slow twinkling
        sync: false, // Asynchronous twinkling (independent)
        startValue: "random",
      },
    },
    size: {
      value: { min: 0.5, max: 3 }, // Crisp star sizes
    },
    move: {
      enable: true,
      speed: { min: 0.1, max: 0.4 }, // Slow upwards parallax scroll speed
      direction: "top", // Move straight up
      random: false,
      straight: true, // Straight vertical path
      outModes: {
        default: "out", // Wrap around screen boundaries when exiting
      },
    },
  },
  detectRetina: true,
};
