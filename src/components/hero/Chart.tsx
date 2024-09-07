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
  const { x, y, width, value } = props;
  const rectWidth = Number(width);
  const rectHeight = 3;

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
        <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "#AF3E0D", stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: "#FF4D01", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#AF3E0D", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
      <rect
        x={x}
        y={y ? Number(y) - rectHeight - 3 : rectHeight - 3}
        width={rectWidth}
        height={rectHeight}
        rx={rectHeight / 2}
        ry={rectHeight / 2}
        fill={
          Number(value) < -150
            ? "url(#gradient3)"
            : Number(value) > 240
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
        <CardHeader className="pr-0">
          <CardDescription>Algorithm Overview</CardDescription>
          <Select
            onValueChange={async (value: string) => {
              setSelectedAlgorithm(value);
            }}
            value={selectedAlgorithm}
          >
            <SelectTrigger className="pl-0 border-none focus:ring-0">
              <SelectValue asChild>
                <div className="flex gap-2 items-center">
                  <h3 className="text-xl md:text-2xl">{selectedAlgorithm}</h3>
                  <ChevronDown className="size-6 md:size-8 hover:cursor-pointer" />
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

          <div className="mt-1 md:mt-2 flex gap-2 items-center">
            <div className="text-xs md:text-sm flex items-center gap-2 p-1 pr-3 rounded-full bg-secondary w-fit">
              <Avatar className="size-4 md:size-5">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              Vihaan
            </div>
            <Button
              variant={"outline"}
              className="text-xs md:text-sm py-1 h-6 md:h-7 md:py-1.5 border-white rounded-full cursor-default"
            >
              {
                heroChartData.find((data) => data.name === selectedAlgorithm)!
                  .currency
              }
            </Button>
          </div>
        </CardHeader>
        <div className="pt-6 pr-6 text-right ">
          <span className="text-muted-foreground">AUM</span>
          <h3 className="text-xl md:text-2xl w-fit">
            ${" "}
            {heroChartData.find((data) => data.name === selectedAlgorithm)!.aum}
          </h3>
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
            <Bar dataKey="value" fill="url(#fillValue)" radius={5}>
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
        <div className="flex gap-2 justify-between w-full">
          <div>
            <div className="flex items-center gap-2">
              <h4 className="text-base leading-5 whitespace-nowrap">
                Return on Investment
              </h4>
            </div>
            <span className="text-2xl lg:text-3xl font-semibold text-[#2ACCA4]">
              {
                heroChartData.find((data) => data.name === selectedAlgorithm)!
                  .roi
              }
            </span>
          </div>
          <div>
            <div className="flex gap-1 justify-between text-lg leading-5 md:text-xl">
              <span className="font-semibold text-[#2ACCA4]">
                {
                  heroChartData.find((data) => data.name === selectedAlgorithm)!
                    .profitableTrades
                }
              </span>
              <h4 className="lg:w-auto text-base justify-between text-muted-foreground">
                Profitable trades
              </h4>
            </div>
            <div className="flex mt-1 justify-end text-lg leading-5">
              <span className="mr-3 text-base">$10</span>
              <h4 className="min-[820px]:w-min lg:w-auto text-base text-muted-foreground">
                Minimum Investment
              </h4>
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
