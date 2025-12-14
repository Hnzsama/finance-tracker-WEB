"use client"

import * as React from "react"
import { Label, Pie, PieChart } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A donut chart with text"

const chartData = [
    { type: "income", amount: 2750000, fill: "var(--color-income)" },
    { type: "expense", amount: 2000000, fill: "var(--color-expense)" },
    { type: "savings", amount: 287000, fill: "var(--color-savings)" },
    { type: "debt", amount: 173000, fill: "var(--color-debt)" },
]

const chartConfig = {
    amount: {
        label: "Amount",
    },
    income: {
        label: "Income",
        color: "var(--chart-1)",
    },
    expense: {
        label: "Expense",
        color: "var(--destructive)", // Using destructive for expense
    },
    savings: {
        label: "Savings",
        color: "var(--chart-2)",
    },
    debt: {
        label: "Debt",
        color: "var(--chart-3)",
    },
} satisfies ChartConfig

export function ChartPieDonutText() {
    const totalAmount = React.useMemo(() => {
        return chartData.reduce((acc, curr) => acc + curr.amount, 0)
    }, [])

    return (
        <Card className="flex flex-col h-full">
            <CardHeader className="items-center pb-0">
                <CardTitle>Transaction Distribution</CardTitle>
                <CardDescription>Current Month Inventory</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[250px]"
                >
                    <PieChart>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Pie
                            data={chartData}
                            dataKey="amount"
                            nameKey="type"
                            innerRadius={60}
                            strokeWidth={5}
                        >
                            <Label
                                content={({ viewBox }) => {
                                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                        return (
                                            <text
                                                x={viewBox.cx}
                                                y={viewBox.cy}
                                                textAnchor="middle"
                                                dominantBaseline="middle"
                                            >
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={viewBox.cy}
                                                    className="fill-foreground text-3xl font-bold"
                                                >
                                                    {new Intl.NumberFormat("id-ID", {
                                                        style: "currency",
                                                        currency: "IDR",
                                                        notation: "compact",
                                                        maximumFractionDigits: 1
                                                    }).format(totalAmount)}
                                                </tspan>
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) + 24}
                                                    className="fill-muted-foreground"
                                                >
                                                    Total Traffic
                                                </tspan>
                                            </text>
                                        )
                                    }
                                }}
                            />
                        </Pie>
                    </PieChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col gap-2 text-sm">
                <div className="flex items-center gap-2 font-medium leading-none">
                    Trending up by 5.2% this month
                </div>
                <div className="leading-none text-muted-foreground">
                    Showing total transaction distribution
                </div>
            </CardFooter>
        </Card>
    )
}
