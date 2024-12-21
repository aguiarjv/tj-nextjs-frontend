"use client";

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { date: "January", result: 186 },
  { date: "February", result: 305 },
  { date: "March", result: 237 },
  { date: "April", result: 73 },
  { date: "May", result: 209 },
  { date: "June", result: 214 },
  { date: "next", result: -214 },
  { date: "next2", result: -300 },
  { date: "next3", result: -350 },
  { date: "next4", result: -150 },
  { date: "next5", result: 150 },
  { date: "next6", result: 250 },
];

const chartConfig = {
  result: {
    label: "Resultado",
    color: "hsl(220 70% 50%)",
  },
} satisfies ChartConfig;

const gradientOffset = () => {
  const dataMax = Math.max(...chartData.map((i) => i.result));
  const dataMin = Math.min(...chartData.map((i) => i.result));

  if (dataMax <= 0) {
    return 0;
  }
  if (dataMin >= 0) {
    return 1;
  }

  return dataMax / (dataMax - dataMin);
};

const off = gradientOffset();

export function EquityCurveChart() {
  return (
    <Card className="bg-card dark:bg-card">
      <CardHeader>
        <CardDescription>Resultado dos últimos 90 dias</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[252px] w-full ">
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={true}
              axisLine={true}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              dataKey="result"
              tickLine={true}
              axisLine={true}
              tickMargin={8}
              orientation="right"
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  formatter={(value) => {
                    let newValue = value.toLocaleString("en-us", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    });
                    if (newValue.slice(0, 1) == "-") {
                      return (
                        <p className="text-red-600 dark:text-red-500">{`-$${newValue.slice(1)}`}</p>
                      );
                    }
                    return (
                      <p className="text-green-600 dark:text-green-500">{`+$${newValue}`}</p>
                    );
                  }}
                />
              }
            />

            <defs>
              <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset={off}
                  stopColor="hsl(var(--chart-green))"
                  stopOpacity={1}
                />
                <stop
                  offset={off}
                  stopColor="hsl(var(--chart-red))"
                  stopOpacity={1}
                />
              </linearGradient>
            </defs>

            <Area
              dataKey="result"
              type="linear"
              fill="url(#splitColor)"
              fillOpacity={0.4}
              stroke="var(--color-result)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
