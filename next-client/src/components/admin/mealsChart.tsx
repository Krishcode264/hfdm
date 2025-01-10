"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const mealsData = [
  { date: "01/01", meals: 150 },
  { date: "01/02", meals: 180 },
  { date: "01/03", meals: 200 },
  { date: "01/04", meals: 170 },
  { date: "01/05", meals: 220 },
  { date: "01/06", meals: 190 },
  { date: "01/07", meals: 210 },
];

const mealsChartConfig = {
  meals: {
    label: "Meals Delivered",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function MealsDeliveredChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Meals Delivered - Last 7 Days</CardTitle>
        <CardDescription>Tracking daily meal deliveries</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={mealsChartConfig}>
          <BarChart
            accessibilityLayer
            data={mealsData}
            margin={{
              top: 20,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="meals" fill="var(--color-meals)" radius={8}>
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 3.7% this week <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing daily meal deliveries for the past 7 days
        </div>
      </CardFooter>
    </Card>
  );
}
