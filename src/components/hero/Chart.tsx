import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bar, BarChart, LabelList, XAxis, YAxis } from "recharts";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { ContentType } from "recharts/types/component/Label";
import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react";
import { heroChartData } from "@/constants/chartData";
import { useState } from "react";

export const description = "A bar chart with a label";

const chartConfig = {
  value: {
    label: "Value",
    color: "hsl(217, 8%, 20%)",
  },
} satisfies ChartConfig;

const renderCustomizedLabel: ContentType = (props) => {
  const { x, y, width, index } = props;
  const rectWidth = Number(width);
  const rectHeight = 3;

  const differentColoredCapIndex: number[] = [1, 4, 5, 9, 10];

  return (
    <g>
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "#393939", stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: "#ffffff", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#393939", stopOpacity: 1 }}
          />
        </linearGradient>
        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "#207661", stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: "#2EE2B6", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#207661", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
      <rect
        x={x}
        y={y ? Number(y) - rectHeight - 2 : rectHeight - 2}
        width={rectWidth}
        height={rectHeight}
        rx={rectHeight / 2}
        ry={rectHeight / 2}
        fill={
          index && differentColoredCapIndex.includes(index)
            ? "url(#gradient2)"
            : "url(#gradient1)"
        }
      />
    </g>
  );
};

export function Chart() {
  const [selectedAlgorithm, setSelectedAlgorithm] =
    useState<string>("Vortex Algorithm");

  const chartData = heroChartData.find(
    (data) => data.name === selectedAlgorithm
  )!.data;

  return (
    <Card className="border rounded-3xl bg-card-gradient">
      <div className="flex justify-between">
        <CardHeader>
          <CardDescription>Algorithm Overview</CardDescription>
          <Select
            onValueChange={async (value: string) => {
              setSelectedAlgorithm(value);
            }}
            value={selectedAlgorithm}
          >
            <SelectTrigger className="border-none focus:ring-0">
              <SelectValue asChild>
                <div className="flex gap-2 items-center">
                  <h3 className="text-2xl">{selectedAlgorithm}</h3>
                  <ChevronDown className="h-8 w-8 hover:cursor-pointer" />
                </div>
              </SelectValue>
            </SelectTrigger>
            <SelectContent className="border border-muted">
              {heroChartData.map((chartData, index) => (
                <SelectItem key={index} value={chartData.name}>
                  {chartData.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <div className="mt-2 flex gap-2 items-center">
            <div className="flex items-center gap-3 p-1.5 pr-4 rounded-full bg-secondary w-fit">
              <Avatar className="size-6">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              Vihaan
            </div>
            <Button variant={"outline"} className="border-white rounded-full">
              ETH/USD
            </Button>
          </div>
        </CardHeader>
        <div className="p-6 text-right">
          <span>AUM</span>
          <h3 className="text-2xl">$ 190k</h3>
        </div>
      </div>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
            }}
          >
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis axisLine={false} tickLine={false} />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <defs>
              <linearGradient id="fillValue" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-value)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="90%"
                  stopColor="var(--color-value)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <Bar dataKey="value" fill="url(#fillValue)">
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
                content={renderCustomizedLabel}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex justify-between w-full">
          <div>
            <h4 className="text-xl">Return on Investment</h4>
            <span className="text-3xl font-semibold text-[#2ACCA4]">
              43.32%
            </span>
          </div>
          <div>
            <div className="flex justify-between text-xl">
              <span className="font-semibold text-[#2ACCA4]">68.4%</span>
              <h4>Profitable trades</h4>
            </div>
            <div className="flex justify-between text-xl">
              <span className="mr-3">$10</span>
              <h4>Minimum Investment</h4>
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
