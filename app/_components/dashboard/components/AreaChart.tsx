"use client";

interface AreaChartProps {
  data: { label: string; value: number }[];
  color?: string;
  height?: number;
}

export function AreaChart({ data, color = "#0BB586", height = 200 }: AreaChartProps) {
  const maxValue = Math.max(...data.map((d) => d.value));
  const minValue = Math.min(...data.map((d) => d.value));
  const range = maxValue - minValue || 1;
  const padding = 40;
  const chartWidth = 600;
  const chartHeight = height;

  const points = data.map((d, i) => {
    const x = padding + (i / (data.length - 1 || 1)) * (chartWidth - padding * 2);
    const y = chartHeight - padding - ((d.value - minValue) / range) * (chartHeight - padding * 2);
    return { x, y, value: d.value, label: d.label };
  });

  const pathData = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
    .join(" ");

  const areaPath = `${pathData} L ${points[points.length - 1].x} ${chartHeight - padding} L ${points[0].x} ${chartHeight - padding} Z`;

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

        {/* Area */}
        <path
          d={areaPath}
          fill={color}
          fillOpacity="0.2"
        />

        {/* Line */}
        <path
          d={pathData}
          fill="none"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Data points */}
        {points.map((point, i) => (
          <g key={i}>
            <circle
              cx={point.x}
              cy={point.y}
              r="4"
              fill={color}
              stroke="white"
              strokeWidth="2"
            />
            {/* X-axis label */}
            <text
              x={point.x}
              y={chartHeight - padding / 2}
              textAnchor="middle"
              className="text-xs fill-gray-500"
              fontSize="10"
            >
              {point.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

