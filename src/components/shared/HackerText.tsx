import { cn } from "@/lib/utils";
import { useState, useEffect, useCallback, useRef } from "react";

const HackerText = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  const [displayText, setDisplayText] = useState("_".repeat(text.length));
  const characters = "abcdefghijklmnopqrstuvwxyz";
  const elementRef = useRef<HTMLSpanElement>(null);

  const scrambleText = useCallback(() => {
    let currentIndex = 0;
    const scrambleInterval = setInterval(() => {
      if (currentIndex >= text.length) {
        clearInterval(scrambleInterval);
        return;
      }

      setDisplayText((prev) =>
        prev
          .split("")
          .map((_, index) => {
            if (index < currentIndex) return text[index];
            if (index === currentIndex)
              return characters[Math.floor(Math.random() * characters.length)];
            return "_";
          })
          .join("")
      );

      currentIndex++;
    }, 50);

    return () => clearInterval(scrambleInterval);
  }, [text]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          scrambleText();
        }
      },
      { threshold: 0.1 }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [scrambleText]);

  useEffect(() => {
    setDisplayText(text);
  }, [text]);

  return (
    <span ref={elementRef} className={cn(className)}>
      {displayText}
    </span>
  );
};

export default HackerText;
