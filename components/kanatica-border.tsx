const UNIT = 80;   // px per repeating unit
const CX   = 40;   // horizontal centre of the 80px strip
const COUNT = 40;  // units rendered → 3200px, clipped to h-screen

function EmbroideryStrip() {
  const totalH = COUNT * UNIT;

  return (
    <svg width="80" height={totalH} style={{ display: "block" }}>
      {/* Framing border lines */}
      <rect x="3"  y="0" width="2" height={totalH} fill="currentColor" />
      <rect x="75" y="0" width="2" height={totalH} fill="currentColor" />

      {Array.from({ length: COUNT }).map((_, i) => {
        const cy = i * UNIT + 38;

        return (
          <g key={i}>
            {/*
              Diamond ring — evenodd creates a hollow centre automatically,
              so the background colour shows through regardless of what it is.
            */}
            <path
              fillRule="evenodd"
              fill="currentColor"
              d={
                `M${CX},${cy - 28} L${CX + 24},${cy} L${CX},${cy + 28} L${CX - 24},${cy} Z ` +
                `M${CX},${cy - 14} L${CX + 12},${cy} L${CX},${cy + 14} L${CX - 12},${cy} Z`
              }
            />

            {/* Centre dot */}
            <polygon
              fill="currentColor"
              points={`${CX},${cy - 5} ${CX + 5},${cy} ${CX},${cy + 5} ${CX - 5},${cy}`}
            />

            {/* Side studs — protrude from the left / right diamond tips */}
            <rect x={CX - 32} y={cy - 4} width="8" height="8" fill="currentColor" />
            <rect x={CX + 24} y={cy - 4} width="8" height="8" fill="currentColor" />

            {/* Connector bar to the next diamond */}
            {i < COUNT - 1 && (
              <rect
                x={CX - 2}
                y={cy + 28}
                width="4"
                height={UNIT - 56}
                fill="currentColor"
              />
            )}
          </g>
        );
      })}
    </svg>
  );
}

export function KanaticaBorder() {
  return (
    <>
      {/* Left strip */}
      <div className="absolute left-0 top-0 bottom-0 w-20 pointer-events-none hidden lg:flex overflow-hidden text-primary opacity-30 z-[5]">
        <EmbroideryStrip />
      </div>

      {/* Right strip — mirror of the left */}
      <div
        className="absolute right-0 top-0 bottom-0 w-20 pointer-events-none hidden lg:flex overflow-hidden text-primary opacity-30 z-[5]"
        style={{ transform: "scaleX(-1)" }}
      >
        <EmbroideryStrip />
      </div>
    </>
  );
}
