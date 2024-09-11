import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Bar, BarChart, LabelList, LabelProps, XAxis, YAxis } from "recharts";
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
import { Button } from "../ui/button";
import { ChevronDown, Info } from "lucide-react";
import { heroChartData } from "@/constants/chartData";
import { useState, useEffect } from "react";
import { usePostHog } from "posthog-js/react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

const chartConfig = {
  value: {
    label: "Value",
    color: "hsl(217, 8%, 20%)",
  },
} satisfies ChartConfig;

interface CustomizedLabelProps extends LabelProps {
  chartData: {
    month: string;
    value: number;
  }[];
}

const renderCustomizedLabel = (props: CustomizedLabelProps) => {
  const { x, y, width, value, chartData } = props;
  const rectWidth = Number(width);
  const rectHeight = 3;

  // Sort the chart data and get the top 6 values
  const sortedValues = chartData
    .map((item) => item.value)
    .sort((a, b) => b - a);
  const top6Values = sortedValues.slice(0, 6);

  // Determine which gradient to apply
  const isTop6 = top6Values.includes(Number(value));
  const fillGradient =
    Number(value) < 0
      ? "url(#gradient3)"
      : isTop6
      ? "url(#gradient2)"
      : "url(#gradient1)";

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
        fill={fillGradient}
      />
    </g>
  );
};

const InfoTooltip = ({ content }: { content: string }) => (
  <TooltipPrimitive.Provider delayDuration={0}>
    <TooltipPrimitive.Root>
      <TooltipPrimitive.Trigger asChild>
        <Info className="h-4 w-4 ml-1 text-muted-foreground" />
      </TooltipPrimitive.Trigger>
      <TooltipPrimitive.Portal>
        <TooltipPrimitive.Content
          className="bg-popover text-popover-foreground px-3 py-1.5 text-xs rounded-md shadow-md max-w-xs animate-in fade-in-0 zoom-in-95"
          sideOffset={5}
        >
          {content}
          <TooltipPrimitive.Arrow className="fill-popover" />
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Portal>
    </TooltipPrimitive.Root>
  </TooltipPrimitive.Provider>
);

export function Chart() {
  const posthog = usePostHog();
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<string>(
    heroChartData[0].name
  );

  const handleAlgorithmChange = (value: string) => {
    setSelectedAlgorithm(value);
    posthog.capture("selected_algorithm", { algorithm: value });
  };

  const [chartData, setChartData] = useState(
    heroChartData.find((data) => data.name === selectedAlgorithm)!.data
  );

  useEffect(() => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const updatedChartData = heroChartData
      .find((data) => data.name === selectedAlgorithm)!
      .data.map((item, index) => ({
        ...item,
        month: months[(currentMonth + index + 1) % 12],
      }));

    setChartData(updatedChartData);
  }, [selectedAlgorithm]);

  return (
    <Card className="border rounded-3xl bg-card-gradient">
      <div className="flex justify-between">
        <CardHeader className="pr-0">
          <CardDescription>Algorithm Overview</CardDescription>
          <Select
            onValueChange={handleAlgorithmChange}
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
                <AvatarImage
                  src={
                    heroChartData.find(
                      (data) => data.name === selectedAlgorithm
                    )!.image
                  }
                />
              </Avatar>
              {
                heroChartData.find((data) => data.name === selectedAlgorithm)!
                  .creator
              }
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
        {/* Add tooltips to the AUM section */}
        <div className="pt-6 pr-6 text-right">
          <div className="flex items-center justify-end">
            <span className="text-muted-foreground mr-1">AUM</span>
            <div className="hidden md:block">
              <InfoTooltip content="Assets Under Management: The total value of assets currently managed by this algorithm." />
            </div>
          </div>
          <h3 className="text-xl md:text-2xl">
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
              left: -20,
            }}
          >
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              label={{
                value: "% Change in Investment",
                angle: -90,
                position: "insideLeft",
                style: { textAnchor: "middle" },
                dx: 20,
              }}
            />
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
            <Bar dataKey="value" fill="url(#fillValue)" radius={3}>
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
                content={(props) =>
                  renderCustomizedLabel({ ...props, chartData })
                }
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 justify-between w-full">
          <div>
            <div className="flex items-center gap-2">
              <h4 className="hidden md:block min-[820px]:hidden xl:block text-base leading-5 whitespace-nowrap">
                Return on Investment
              </h4>
              <h4 className="md:hidden text-base min-[820px]:block xl:hidden">
                ROI
              </h4>
              <div className="hidden md:block">
                <InfoTooltip content="The total percentage gain or loss on the initial investment over the past year." />
              </div>
            </div>
            <span className="text-2xl lg:text-3xl font-semibold text-[#2ACCA4]">
              {
                heroChartData.find((data) => data.name === selectedAlgorithm)!
                  .roi
              }
            </span>
          </div>
          <div>
            <div className="flex gap-1 justify-between items-center text-lg leading-5 md:text-xl">
              <span className="font-semibold text-[#2ACCA4]">
                {
                  heroChartData.find((data) => data.name === selectedAlgorithm)!
                    .profitableTrades
                }
              </span>
              <h4 className="lg:w-auto text-base justify-between text-muted-foreground">
                Profitable trades
              </h4>
              <div className="hidden md:block">
                <InfoTooltip content="The percentage of trades that resulted in a profit over the past year." />
              </div>
            </div>
            <div className="flex mt-1 justify-end items-center text-lg leading-5">
              <span className="mr-3 text-base">$10</span>
              <h4 className="text-base text-muted-foreground">
                Min. Investment
              </h4>
              <div className="hidden md:block">
                <InfoTooltip content="The smallest amount you can invest in this algorithm." />
              </div>
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
