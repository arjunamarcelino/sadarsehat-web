"use client";

interface PieChartProps {
  data: { label: string; value: number; color?: string }[];
  height?: number;
}

export function PieChart({ data, height = 200 }: PieChartProps) {
  const total = data.reduce((sum, d) => sum + d.value, 0);
  const centerX = 150;
  const centerY = height / 2;
  const radius = Math.min(centerX - 20, centerY - 20);

  let currentAngle = -90; // Start from top

  const colors = [
    "#0BB586", // emerald-health
    "#006D77", // teal-deep
    "#FF914D", // alert-orange
    "#B2F2E8", // soft-mint
    "#F2EDE4", // warm-sand
  ];

  return (
    <div className="w-full overflow-x-auto">
      <svg width={300} height={height} className="w-full">
        {data.map((d, i) => {
          const percentage = (d.value / total) * 100;
          const angle = (d.value / total) * 360;
          const startAngle = currentAngle;
          const endAngle = currentAngle + angle;

          const x1 = centerX + radius * Math.cos((startAngle * Math.PI) / 180);
          const y1 = centerY + radius * Math.sin((startAngle * Math.PI) / 180);
          const x2 = centerX + radius * Math.cos((endAngle * Math.PI) / 180);
          const y2 = centerY + radius * Math.sin((endAngle * Math.PI) / 180);

          const largeArcFlag = angle > 180 ? 1 : 0;

          const pathData = [
            `M ${centerX} ${centerY}`,
            `L ${x1} ${y1}`,
            `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
            "Z",
          ].join(" ");

          const labelAngle = startAngle + angle / 2;
          const labelRadius = radius * 0.7;
          const labelX = centerX + labelRadius * Math.cos((labelAngle * Math.PI) / 180);
          const labelY = centerY + labelRadius * Math.sin((labelAngle * Math.PI) / 180);

          currentAngle = endAngle;

          return (
            <g key={i}>
              <path
                d={pathData}
                fill={d.color || colors[i % colors.length]}
                opacity="0.8"
              />
              {percentage > 5 && (
                <text
                  x={labelX}
                  y={labelY}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="text-xs font-semibold fill-white"
                  fontSize="11"
                >
                  {percentage.toFixed(0)}%
                </text>
              )}
            </g>
          );
        })}

        {/* Legend */}
        <g transform={`translate(200, 20)`}>
          {data.map((d, i) => (
            <g key={i} transform={`translate(0, ${i * 25})`}>
              <rect
                width="12"
                height="12"
                fill={d.color || colors[i % colors.length]}
                rx="2"
              />
              <text
                x="18"
                y="9"
                className="text-xs fill-teal-deep"
                fontSize="11"
              >
                {d.label}
              </text>
              <text
                x="18"
                y="22"
                className="text-xs fill-gray-500"
                fontSize="10"
              >
                {d.value}
              </text>
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}

