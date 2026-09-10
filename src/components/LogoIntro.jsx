import React, { useState, useRef, useEffect } from 'react';

/**
 * LogoIntro — Plays the F40 logo animation video once on first load,
 * then fades out and unmounts to reveal the full page.
 * Uses sessionStorage so it only plays once per browser session.
 */
const LogoIntro = ({ onComplete }) => {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);
  const videoRef = useRef(null);

  // Check if already played this session
  useEffect(() => {
    const alreadyPlayed = sessionStorage.getItem('f40-intro-played');
    if (alreadyPlayed) {
      onComplete();
      setVisible(false);
      return;
    }

    // Lock body scroll while intro plays
    document.body.style.overflow = 'hidden';

    // Safety fallback: if video doesn't play/load within 5s, skip it
    const fallback = setTimeout(() => handleEnd(), 5000);
    return () => clearTimeout(fallback);
  }, []);

  const handleEnd = () => {
    if (fading) return;
    setFading(true);
    sessionStorage.setItem('f40-intro-played', 'true');
    document.body.style.overflow = '';

    // Wait for fade-out CSS transition then unmount
    setTimeout(() => {
      setVisible(false);
      onComplete();
    }, 800);
  };

  if (!visible) return null;

  return (
    <div className={`logo-intro ${fading ? 'fade-out' : ''}`} aria-hidden="true">
      <video
        ref={videoRef}
        src="/assets/animacion-logo-f40.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={handleEnd}
        onError={handleEnd}
        className="logo-intro-video"
      />
      {/* Skip button for accessibility */}
      <button className="logo-intro-skip" onClick={handleEnd} aria-label="Skip intro">
        SKIP
      </button>
    </div>
  );
};

export default LogoIntro;
