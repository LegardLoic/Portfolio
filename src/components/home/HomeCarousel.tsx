import type { KeyboardEvent } from "react";
import { useEffect, useState } from "react";

import { homeCarouselSlides } from "../../data/home";
import { ButtonLink } from "../ui/Button";

const AUTOPLAY_DELAY = 7000;

function getPreviousIndex(currentIndex: number) {
  return currentIndex === 0 ? homeCarouselSlides.length - 1 : currentIndex - 1;
}

function getNextIndex(currentIndex: number) {
  return currentIndex === homeCarouselSlides.length - 1 ? 0 : currentIndex + 1;
}

export function HomeCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  const activeSlide = homeCarouselSlides[activeIndex];

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleMotionChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener("change", handleMotionChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMotionChange);
    };
  }, []);

  useEffect(() => {
    if (isPaused || prefersReducedMotion) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => getNextIndex(currentIndex));
    }, AUTOPLAY_DELAY);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [isPaused, prefersReducedMotion]);

  const goToPreviousSlide = () => {
    setActiveIndex((currentIndex) => getPreviousIndex(currentIndex));
  };

  const goToNextSlide = () => {
    setActiveIndex((currentIndex) => getNextIndex(currentIndex));
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goToPreviousSlide();
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      goToNextSlide();
    }
  };

  return (
    <section className="home-carousel-section" aria-labelledby="home-carousel-title">
      <div className="section__header">
        <p className="eyebrow">Vitrine</p>
        <h2 id="home-carousel-title">Trois facettes du portfolio</h2>
        <p>
          Une lecture rapide du parcours, des projets personnels et de la part
          créative qui structure l'identité du site.
        </p>
      </div>

      <div
        aria-label="Carrousel de présentation"
        aria-live={isPaused || prefersReducedMotion ? "polite" : "off"}
        aria-roledescription="carousel"
        className="home-carousel"
        onBlur={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onKeyDown={handleKeyDown}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        role="region"
        tabIndex={0}
      >
        <div
          aria-label={`${activeIndex + 1} sur ${homeCarouselSlides.length}`}
          aria-roledescription="slide"
          className={`home-carousel__slide home-carousel__slide--${activeSlide.tone}`}
          key={activeSlide.id}
          role="group"
        >
          <div className="home-carousel__content">
            <p className="eyebrow">{activeSlide.eyebrow}</p>
            <h3>{activeSlide.title}</h3>
            <p>{activeSlide.text}</p>
            <ButtonLink to={activeSlide.ctaTo} variant="secondary">
              {activeSlide.ctaLabel}
            </ButtonLink>
          </div>

          <div className="home-carousel__visual" aria-hidden="true">
            <span className="home-carousel__metric">{activeSlide.metric.value}</span>
            <strong>{activeSlide.visualTitle}</strong>
            <span>{activeSlide.metric.label}</span>
            <ul>
              {activeSlide.visualItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="home-carousel__controls">
          <button
            aria-label="Afficher la slide précédente"
            className="carousel-control"
            onClick={goToPreviousSlide}
            type="button"
          >
            <span aria-hidden="true">&lt;</span>
          </button>
          <button
            aria-label="Afficher la slide suivante"
            className="carousel-control"
            onClick={goToNextSlide}
            type="button"
          >
            <span aria-hidden="true">&gt;</span>
          </button>
        </div>

        <div className="home-carousel__dots" aria-label="Choisir une slide">
          {homeCarouselSlides.map((slide, index) => (
            <button
              aria-current={activeIndex === index ? "true" : undefined}
              aria-label={`Afficher la slide ${index + 1} : ${slide.title}`}
              className={
                activeIndex === index
                  ? "carousel-dot carousel-dot--active"
                  : "carousel-dot"
              }
              key={slide.id}
              onClick={() => setActiveIndex(index)}
              type="button"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

