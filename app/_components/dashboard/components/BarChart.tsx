"use client";

interface BarChartProps {
  data: { label: string; value: number }[];
  color?: string;
  height?: number;
}

export function BarChart({ data, color = "#0BB586", height = 200 }: BarChartProps) {
  const maxValue = Math.max(...data.map((d) => d.value), 1);
  const padding = 40;
  const chartWidth = 600;
  const chartHeight = height;
  const barWidth = (chartWidth - padding * 2) / data.length - 10;

  return (
    <div className="w-full overflow-x-auto">
      <svg width={chartWidth} height={chartHeight} viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="w-full" preserveAspectRatio="xMidYMid meet">
        {/* Grid lines */}
        {[0, 1, 2, 3, 4].map((i) => {
          const y = padding + (i / 4) * (chartHeight - padding * 2);
          return (
            <line
              key={i}
              x1={padding}
              y1={y}
              x2={chartWidth - padding}
              y2={y}
              stroke="#B2F2E8"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
          );
        })}

        {/* Bars */}
        {data.map((d, i) => {
          const barHeight = ((d.value / maxValue) * (chartHeight - padding * 2));
          const x = padding + i * (barWidth + 10) + 5;
          const y = chartHeight - padding - barHeight;

          return (
            <g key={i}>
              <rect
                x={x}
                y={y}
                width={barWidth}
                height={barHeight}
                fill={color}
                rx="4"
                opacity="0.8"
              />
              {/* Value label */}
              <text
                x={x + barWidth / 2}
                y={y - 5}
                textAnchor="middle"
                className="text-xs font-semibold fill-teal-deep"
                fontSize="10"
              >
                {d.value}
              </text>
              {/* X-axis label */}
              <text
                x={x + barWidth / 2}
                y={chartHeight - padding / 2}
                textAnchor="middle"
                className="text-xs fill-gray-500"
                fontSize="10"
              >
                {d.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

