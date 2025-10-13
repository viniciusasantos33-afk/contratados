import { cn } from "@/lib/utils";

type FigureProps = {
  className?: string;
};

export const LeftFigure = ({ className }: FigureProps) => (
  <svg
    width="100"
    height="320"
    viewBox="0 0 100 320"
    className={cn("fill-current text-white opacity-70", className)}
    aria-hidden="true"
  >
    <path d="M50 0C38.9543 0 30 8.9543 30 20C30 31.0457 38.9543 40 50 40C61.0457 40 70 31.0457 70 20C70 8.9543 61.0457 0 50 0ZM20 50V160H0V320H30V160H40V320H80V160H70V50H20Z" />
  </svg>
);

export const RightFigure = ({ className }: FigureProps) => (
  <svg
    width="100"
    height="320"
    viewBox="0 0 100 320"
    className={cn("fill-current text-white opacity-70 -scale-x-100", className)}
    aria-hidden="true"
  >
    <path d="M50 0C38.9543 0 30 8.9543 30 20C30 31.0457 38.9543 40 50 40C61.0457 40 70 31.0457 70 20C70 8.9543 61.0457 0 50 0ZM20 50V160H0V320H30V160H40V320H80V160H70V50H20Z" />
  </svg>
);
