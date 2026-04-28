import { useEffect, useState } from "react";

export function CountdownTimer() {
  const [time, setTime] = useState({ h: 0, m: 14, s: 59 });

  useEffect(() => {
    const id = setInterval(() => {
      setTime((t) => {
        let { h, m, s } = t;
        s -= 1;
        if (s < 0) { s = 59; m -= 1; }
        if (m < 0) { m = 59; h -= 1; }
        if (h < 0) { h = 0; m = 14; s = 59; }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const pad = (n: number) => n.toString().padStart(2, "0");

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-3">
      {[
        { v: time.h, l: "HORAS" },
        { v: time.m, l: "MIN" },
        { v: time.s, l: "SEG" },
      ].map((b) => (
        <div key={b.l} className="bg-card border border-primary/40 rounded-lg px-3 py-2 min-w-[64px] text-center shadow-card">
          <div className="text-2xl sm:text-3xl font-bold text-gradient-gold tabular-nums">{pad(b.v)}</div>
          <div className="text-[10px] text-muted-foreground tracking-widest">{b.l}</div>
        </div>
      ))}
    </div>
  );
}
