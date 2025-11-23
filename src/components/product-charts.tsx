"use client"

import { Line, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Mock data for I-V Curve (Current vs Voltage at different Irradiances)
const dataIV = [
  { voltage: 0, current1000: 16.2, current800: 13.0, current600: 9.8, current400: 6.5, current200: 3.3 },
  { voltage: 10, current1000: 16.1, current800: 12.9, current600: 9.75, current400: 6.45, current200: 3.25 },
  { voltage: 20, current1000: 16.0, current800: 12.8, current600: 9.7, current400: 6.4, current200: 3.2 },
  { voltage: 30, current1000: 15.8, current800: 12.6, current600: 9.6, current400: 6.3, current200: 3.15 },
  { voltage: 35, current1000: 15.5, current800: 12.4, current600: 9.4, current400: 6.2, current200: 3.1 },
  { voltage: 40, current1000: 14.5, current800: 11.5, current600: 8.5, current400: 6.0, current200: 3.0 },
  { voltage: 45, current1000: 8.0, current800: 6.0, current600: 4.0, current400: 3.0, current200: 1.5 },
  { voltage: 48, current1000: 0, current800: 0, current600: 0, current400: 0, current200: 0 },
]

// Mock data for P-V Curve (Power vs Voltage at different Irradiances)
const dataPV = [
  { voltage: 0, power1000: 0, power800: 0, power600: 0, power400: 0, power200: 0 },
  { voltage: 10, power1000: 160, power800: 128, power600: 96, power400: 64, power200: 32 },
  { voltage: 20, power1000: 320, power800: 256, power600: 192, power400: 128, power200: 64 },
  { voltage: 30, power1000: 470, power800: 375, power600: 280, power400: 185, power200: 90 },
  { voltage: 40, power1000: 580, power800: 460, power600: 340, power400: 220, power200: 110 },
  { voltage: 42, power1000: 615, power800: 490, power600: 365, power400: 240, power200: 120 },
  { voltage: 45, power1000: 360, power800: 280, power600: 200, power400: 130, power200: 60 },
  { voltage: 48, power1000: 0, power800: 0, power600: 0, power400: 0, power200: 0 },
]

// Mock data for I-V Curve at Different Temperatures (Temperature dependence)
// Typically, Voc decreases as Temp increases
const dataTempIV = [
  { voltage: 0, temp25: 16.2, temp35: 16.25, temp45: 16.3, temp55: 16.35, temp65: 16.4 },
  { voltage: 10, temp25: 16.1, temp35: 16.15, temp45: 16.2, temp55: 16.25, temp65: 16.3 },
  { voltage: 30, temp25: 15.8, temp35: 15.85, temp45: 15.9, temp55: 15.95, temp65: 16.0 },
  { voltage: 35, temp25: 15.5, temp35: 15.5, temp45: 15.5, temp55: 15.5, temp65: 15.5 },
  { voltage: 40, temp25: 14.5, temp35: 12.0, temp45: 10.0, temp55: 8.0, temp65: 6.0 }, // Simplified drop-off
  // Real curve shifts left (Voc decreases)
  // Let's approximate the knee point shift
  { voltage: 38, temp25: 15.0, temp35: 14.8, temp45: 14.5, temp55: 14.0, temp65: 13.0 },
  { voltage: 42, temp25: 12.0, temp35: 8.0, temp45: 4.0, temp55: 1.0, temp65: 0 },
  { voltage: 45, temp25: 5.0, temp35: 1.0, temp45: 0, temp55: 0, temp65: 0 },
  { voltage: 48, temp25: 0, temp35: 0, temp45: 0, temp55: 0, temp65: 0 },
]

// Helper for custom tooltip
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border bg-background p-2 shadow-sm text-xs">
        <p className="font-bold mb-1">{`Voltage: ${label}V`}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} style={{ color: entry.color }}>
            {`${entry.name}: ${entry.value}`}
          </p>
        ))}
      </div>
    )
  }
  return null
}

export function ProductCharts() {
  // Suppress warnings from Recharts
  const error = console.error;
  console.error = (...args: any) => {
    if (/defaultProps/.test(args[0])) return;
    error(...args);
  };

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {/* Chart 1: Current-Voltage (Irradiance) */}
      <Card className="md:col-span-1">
        <CardHeader className="pb-2">
          <CardTitle className="text-base text-center">Current-Voltage (615W)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={dataIV} margin={{ top: 5, right: 10, bottom: 5, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted/50" />
                <XAxis dataKey="voltage" tick={{fontSize: 10}} label={{ value: 'Voltage (V)', position: 'insideBottom', offset: -5, fontSize: 10 }} />
                <YAxis tick={{fontSize: 10}} label={{ value: 'Current (A)', angle: -90, position: 'insideLeft', fontSize: 10 }} />
                <Tooltip content={<CustomTooltip />} />
                <Legend verticalAlign="top" height={36} iconSize={8} wrapperStyle={{ fontSize: '10px' }} />
                <Line type="monotone" dataKey="current1000" name="1000W/m²" stroke="hsl(var(--primary))" dot={false} strokeWidth={2} />
                <Line type="monotone" dataKey="current800" name="800W/m²" stroke="hsl(var(--chart-2))" dot={false} strokeWidth={2} />
                <Line type="monotone" dataKey="current600" name="600W/m²" stroke="hsl(var(--chart-3))" dot={false} strokeWidth={2} />
                <Line type="monotone" dataKey="current400" name="400W/m²" stroke="hsl(var(--chart-4))" dot={false} strokeWidth={2} />
                <Line type="monotone" dataKey="current200" name="200W/m²" stroke="hsl(var(--chart-5))" dot={false} strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Chart 2: Power-Voltage (Irradiance) */}
      <Card className="md:col-span-1">
        <CardHeader className="pb-2">
          <CardTitle className="text-base text-center">Power-Voltage (615W)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={dataPV} margin={{ top: 5, right: 10, bottom: 5, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted/50" />
                <XAxis dataKey="voltage" tick={{fontSize: 10}} label={{ value: 'Voltage (V)', position: 'insideBottom', offset: -5, fontSize: 10 }} />
                <YAxis tick={{fontSize: 10}} label={{ value: 'Power (W)', angle: -90, position: 'insideLeft', fontSize: 10 }} />
                <Tooltip content={<CustomTooltip />} />
                <Legend verticalAlign="top" height={36} iconSize={8} wrapperStyle={{ fontSize: '10px' }} />
                <Line type="monotone" dataKey="power1000" name="1000W/m²" stroke="hsl(var(--primary))" dot={false} strokeWidth={2} />
                <Line type="monotone" dataKey="power800" name="800W/m²" stroke="hsl(var(--chart-2))" dot={false} strokeWidth={2} />
                <Line type="monotone" dataKey="power600" name="600W/m²" stroke="hsl(var(--chart-3))" dot={false} strokeWidth={2} />
                <Line type="monotone" dataKey="power400" name="400W/m²" stroke="hsl(var(--chart-4))" dot={false} strokeWidth={2} />
                <Line type="monotone" dataKey="power200" name="200W/m²" stroke="hsl(var(--chart-5))" dot={false} strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Chart 3: Current-Voltage (Temperature) */}
      <Card className="md:col-span-1">
        <CardHeader className="pb-2">
          <CardTitle className="text-base text-center">Current-Voltage (Temp)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={dataTempIV} margin={{ top: 5, right: 10, bottom: 5, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted/50" />
                <XAxis dataKey="voltage" tick={{fontSize: 10}} label={{ value: 'Voltage (V)', position: 'insideBottom', offset: -5, fontSize: 10 }} />
                <YAxis tick={{fontSize: 10}} label={{ value: 'Current (A)', angle: -90, position: 'insideLeft', fontSize: 10 }} />
                <Tooltip content={<CustomTooltip />} />
                <Legend verticalAlign="top" height={36} iconSize={8} wrapperStyle={{ fontSize: '10px' }} />
                <Line type="monotone" dataKey="temp25" name="25°C" stroke="#3b82f6" dot={false} strokeWidth={2} />
                <Line type="monotone" dataKey="temp35" name="35°C" stroke="#ef4444" dot={false} strokeWidth={2} />
                <Line type="monotone" dataKey="temp45" name="45°C" stroke="#84cc16" dot={false} strokeWidth={2} />
                <Line type="monotone" dataKey="temp55" name="55°C" stroke="#a855f7" dot={false} strokeWidth={2} />
                <Line type="monotone" dataKey="temp65" name="65°C" stroke="#06b6d4" dot={false} strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
