"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

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

export const description = "A multiple bar chart"

const chartData = [
    { month: "January", income: 1860000, expense: 800000 },
    { month: "February", income: 3050000, expense: 2000000 },
    { month: "March", income: 2370000, expense: 1200000 },
    { month: "April", income: 730000, expense: 1900000 },
    { month: "May", income: 2090000, expense: 1300000 },
    { month: "June", income: 2140000, expense: 1400000 },
]

const chartConfig = {
    income: {
        label: "Income",
        color: "var(--chart-1)",
    },
    expense: {
        label: "Expense",
        color: "var(--destructive)",
    },
} satisfies ChartConfig

export function ChartBarMultiple() {
    return (
        <Card className="flex flex-col h-full">
            <CardHeader>
                <CardTitle>Monthly Overview</CardTitle>
                <CardDescription>January - June 2024</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
                <ChartContainer config={chartConfig} className="h-full w-full">
                    <BarChart accessibilityLayer data={chartData}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="dashed" />}
                        />
                        <Bar dataKey="income" fill="var(--color-income)" radius={4} />
                        <Bar dataKey="expense" fill="var(--color-expense)" radius={4} />
                    </BarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 font-medium leading-none">
                    Income up by 5.2% this month
                </div>
                <div className="leading-none text-muted-foreground">
                    Showing income vs expense for the last 6 months
                </div>
            </CardFooter>
        </Card>
    )
}
