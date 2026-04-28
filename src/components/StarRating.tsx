import { Star } from "lucide-react";

export function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="size-5 fill-primary text-primary" />
      ))}
    </div>
  );
}
