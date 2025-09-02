"use client";

import Image from "next/image";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

export type LogoItem =
  | { node: React.ReactNode; href?: string; title?: string; ariaLabel?: string }
  | {
      src: string;
      alt?: string;
      href?: string;
      title?: string;
      srcSet?: string;
      sizes?: string;
      width?: number;
      height?: number;
    };

export interface LogoLoopProps {
  logos: LogoItem[];
  speed?: number;
  direction?: "left" | "right";
  width?: number | string;
  logoHeight?: number;
  gap?: number;
  pauseOnHover?: boolean;
  fadeOut?: boolean;
  fadeOutColor?: string;
  scaleOnHover?: boolean;
  ariaLabel?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ANIMATION_CONFIG = {
  SMOOTH_TAU: 0.25,
  MIN_COPIES: 2,
  COPY_HEADROOM: 2,
} as const;

const toCssLength = (value?: number | string) =>
  typeof value === "number" ? `${value}px` : value ?? undefined;

const cx = (...parts: Array<string | false | null | undefined>) =>
  parts.filter(Boolean).join(" ");

const useResizeObserver = (
  callback: () => void,
  refs: React.RefObject<Element>[]
) => {
  useEffect(() => {
    callback(); // inicializa

    if (!window.ResizeObserver) {
      window.addEventListener("resize", callback);
      return () => window.removeEventListener("resize", callback);
    }

    const observers = refs.map((ref) => {
      if (!ref.current) return null;
      const observer = new ResizeObserver(callback);
      observer.observe(ref.current);
      return observer;
    });

    return () => observers.forEach((obs) => obs?.disconnect());
    // ⚠️ removemos o spread de ref.current para não gerar warnings
  }, [callback, refs]); // só depende da função e do array de refs
};

const useImageLoader = (
  seqRef: React.RefObject<HTMLUListElement>,
  onLoad: () => void
) => {
  useEffect(() => {
    const images = seqRef.current?.querySelectorAll("img") ?? [];
    if (!images.length) return onLoad();

    let remaining = images.length;
    const handleLoad = () => {
      remaining -= 1;
      if (remaining === 0) onLoad();
    };

    images.forEach((img) => {
      if ((img as HTMLImageElement).complete) handleLoad();
      else {
        img.addEventListener("load", handleLoad, { once: true });
        img.addEventListener("error", handleLoad, { once: true });
      }
    });

    return () => {
      images.forEach((img) => {
        img.removeEventListener("load", handleLoad);
        img.removeEventListener("error", handleLoad);
      });
    };
  }, [seqRef, onLoad]);
};

const useAnimationLoop = (
  trackRef: React.RefObject<HTMLDivElement>,
  targetVelocity: number,
  seqWidth: number,
  isHovered: boolean,
  pauseOnHover: boolean
) => {
  const rafRef = useRef<number | null>(null);
  const lastTimestamp = useRef<number | null>(null);
  const offsetRef = useRef(0);
  const velocityRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (seqWidth > 0) {
      offsetRef.current =
        ((offsetRef.current % seqWidth) + seqWidth) % seqWidth;
      track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
    }

    if (prefersReduced) return;

    const animate = (timestamp: number) => {
      if (lastTimestamp.current === null) lastTimestamp.current = timestamp;
      const delta = Math.max(0, timestamp - lastTimestamp.current) / 1000;
      lastTimestamp.current = timestamp;

      const target = pauseOnHover && isHovered ? 0 : targetVelocity;
      const easing = 1 - Math.exp(-delta / ANIMATION_CONFIG.SMOOTH_TAU);
      velocityRef.current += (target - velocityRef.current) * easing;

      if (seqWidth > 0) {
        const nextOffset = offsetRef.current + velocityRef.current * delta;
        offsetRef.current = ((nextOffset % seqWidth) + seqWidth) % seqWidth;
        track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      lastTimestamp.current = null;
    };
  }, [trackRef, targetVelocity, seqWidth, isHovered, pauseOnHover]);
};

export const LogoLoop: React.FC<LogoLoopProps> = ({
  logos,
  speed = 120,
  direction = "left",
  width = "100%",
  logoHeight = 28,
  gap = 32,
  pauseOnHover = true,
  fadeOut = false,
  fadeOutColor,
  scaleOnHover = false,
  ariaLabel = "Partner logos",
  className,
  style,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(
    null
  ) as React.RefObject<HTMLDivElement>;
  const seqRef = useRef<HTMLUListElement>(
    null
  ) as React.RefObject<HTMLUListElement>;

  const [seqWidth, setSeqWidth] = useState(0);
  const [copyCount, setCopyCount] = useState<number>(
    ANIMATION_CONFIG.MIN_COPIES
  );
  const [isHovered, setIsHovered] = useState(false);

  const targetVelocity = useMemo(
    () => speed * (direction === "left" ? 1 : -1),
    [speed, direction]
  );

  const updateDimensions = useCallback(() => {
    const containerWidth = containerRef.current?.clientWidth ?? 0;
    const sequenceWidth = seqRef.current?.getBoundingClientRect().width ?? 0;

    if (sequenceWidth > 0) {
      setSeqWidth(Math.ceil(sequenceWidth));
      const copiesNeeded =
        Math.ceil(containerWidth / sequenceWidth) +
        ANIMATION_CONFIG.COPY_HEADROOM;
      setCopyCount(Math.max(ANIMATION_CONFIG.MIN_COPIES, copiesNeeded));
    }
  }, []);

  useResizeObserver(updateDimensions, [
    containerRef as React.RefObject<Element>,
    seqRef as React.RefObject<Element>,
  ]);
  useImageLoader(seqRef, updateDimensions);
  useAnimationLoop(trackRef, targetVelocity, seqWidth, isHovered, pauseOnHover);

  const cssVariables = useMemo<React.CSSProperties>(
    () =>
      ({
        "--logoloop-gap": `${gap}px`,
        "--logoloop-logoHeight": `${logoHeight}px`,
        ...(fadeOutColor && { "--logoloop-fadeColor": fadeOutColor }),
      } as React.CSSProperties),
    [gap, logoHeight, fadeOutColor]
  );

  const rootClasses = useMemo(
    () =>
      cx(
        "relative overflow-x-hidden group",
        scaleOnHover && "py-[calc(var(--logoloop-logoHeight)*0.1)]",
        className
      ),
    [scaleOnHover, className]
  );

  const handleMouseEnter = useCallback(
    () => pauseOnHover && setIsHovered(true),
    [pauseOnHover]
  );
  const handleMouseLeave = useCallback(
    () => pauseOnHover && setIsHovered(false),
    [pauseOnHover]
  );

  const renderLogoItem = useCallback(
    (item: LogoItem, key: React.Key) => {
      const content =
        "node" in item ? (
          <span
            className={cx(
              "inline-flex items-center motion-reduce:transition-none",
              scaleOnHover &&
                "transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/item:scale-120"
            )}
            aria-hidden={!!item.href && !item.ariaLabel}
          >
            {item.node}
          </span>
        ) : (
          <Image
            className={cx(
              "h-[var(--logoloop-logoHeight)] w-auto block object-contain pointer-events-none",
              scaleOnHover &&
                "transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/item:scale-120"
            )}
            src={item.src}
            alt={item.alt ?? ""}
            width={item.width}
            height={item.height}
            sizes={item.sizes}
            priority={false}
          />
        );

      const itemAriaLabel =
        "node" in item ? item.ariaLabel ?? item.title : item.alt ?? item.title;

      return (
        <li
          key={key}
          role="listitem"
          className={cx(
            "flex-none mr-[var(--logoloop-gap)] text-[length:var(--logoloop-logoHeight)] leading-[1]",
            scaleOnHover && "overflow-visible group/item"
          )}
        >
          {item.href ? (
            <a
              className="duration-200 ease-linear focus-visible:outline focus-visible:outline-current focus-visible:outline-offset-2 hover:opacity-80 inline-flex items-center no-underline rounded transition-opacity"
              href={item.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={itemAriaLabel || "logo link"}
            >
              {content}
            </a>
          ) : (
            content
          )}
        </li>
      );
    },
    [scaleOnHover]
  );

  const logoLists = useMemo(
    () =>
      Array.from({ length: copyCount }, (_, copyIndex) => (
        <ul
          key={`copy-${copyIndex}`}
          className="flex items-center"
          role="list"
          aria-hidden={copyIndex > 0}
          ref={copyIndex === 0 ? seqRef : undefined}
        >
          {logos.map((item, itemIndex) =>
            renderLogoItem(item, `${copyIndex}-${itemIndex}`)
          )}
        </ul>
      )),
    [copyCount, logos, renderLogoItem]
  );

  const containerStyle = useMemo<React.CSSProperties>(
    () => ({ width: toCssLength(width), ...cssVariables, ...style }),
    [width, cssVariables, style]
  );

  return (
    <div
      ref={containerRef}
      className={rootClasses}
      style={containerStyle}
      role="region"
      aria-label={ariaLabel}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {fadeOut && (
        <>
          <div
            aria-hidden
            className="absolute bg-[linear-gradient(to_right,var(--logoloop-fadeColor)_0%,rgba(0,0,0,0)_100%)] inset-y-0 left-0 pointer-events-none w-[clamp(24px,8%,120px)] z-[1]"
          />
          <div
            aria-hidden
            className="absolute bg-[linear-gradient(to_left,var(--logoloop-fadeColor)_0%,rgba(0,0,0,0)_100%)] inset-y-0 pointer-events-none right-0 w-[clamp(24px,8%,120px)] z-[1]"
          />
        </>
      )}

      <div
        ref={trackRef}
        className="flex motion-reduce:transform-none select-none w-max will-change-transform"
      >
        {logoLists}
      </div>
    </div>
  );
};

LogoLoop.displayName = "LogoLoop";
export default LogoLoop;
