import Image from "next/image";

/**
 * Flat illustraties staan als SVG in /public/illustrations. SVG is vectorieel en klein,
 * dus Next hoeft ze niet te converteren; we gebruiken next/image voor vaste afmetingen (geen layout shift)
 * en voor preload van de hero.
 */
export function Illustration({
  src,
  alt,
  width,
  height,
  priority = false,
  className = "",
  sizes = "(max-width: 860px) 100vw, 50vw",
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
  sizes?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      sizes={sizes}
      unoptimized
      className={`h-auto w-full ${className}`}
    />
  );
}
