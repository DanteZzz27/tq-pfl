export const easing = {
  luxury: [0.22, 1, 0.36, 1] as const,
  snap: [0.16, 1, 0.3, 1] as const,
};

export const duration = {
  fast: 0.35,
  base: 0.7,
  slow: 1.2,
};

export const stagger = 0.08;

export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: duration.base,
      delay: i * stagger,
      ease: easing.luxury,
    },
  }),
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: duration.base, ease: easing.luxury },
  },
};

export const viewportOnce = {
  once: true,
  margin: "-10%",
} as const;
