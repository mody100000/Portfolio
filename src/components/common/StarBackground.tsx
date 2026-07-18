"use client";

import { useEffect, useState } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import type { Container, Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { starOptions } from "./star-options";

export default function StarBackground() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const particlesInit = async (engine: Engine): Promise<void> => {
    await loadSlim(engine);
  };

  const particlesLoaded = async (container?: Container): Promise<void> => {
    // Optionally perform actions when the particles are loaded
  };

  // Safe SSR/Hydration handling: render a placeholder div on the server
  // and client during initial render to prevent hydration mismatches.
  if (!isMounted) {
    return <div className="fixed inset-0 -z-10 h-full w-full bg-[#0e1116]" />;
  }

  return (
    <ParticlesProvider init={particlesInit}>
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={starOptions}
        className="fixed inset-0 -z-10 h-full w-full bg-[#0e1116]"
      />
    </ParticlesProvider>
  );
}
