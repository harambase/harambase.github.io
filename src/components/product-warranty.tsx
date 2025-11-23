"use client"

import { Line, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts"
import { ShieldCheck } from "lucide-react"

const dataWarranty = [
  { year: 0, value: 100, label: '100%' },
  { year: 1, value: 99, label: '99%' },
  { year: 30, value: 87.4, label: '87.40%' },
]

const dataLinear = [
    { year: 0, value: 100 },
    { year: 30, value: 84.95 }
]

export function ProductWarranty() {
  // Suppress warnings from Recharts
  const error = console.error;
  console.error = (...args: any) => {
    if (/defaultProps/.test(args[0])) return;
    error(...args);
  };

  return (
    <div className="grid xl:grid-cols-2 gap-8 items-start pt-4">
        {/* Left Column: Warranty Chart */}
        <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary">Warranty</h3>
            
            <div className="flex gap-8">
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <ShieldCheck className="h-10 w-10 text-primary" />
                        <span className="absolute -top-1 -right-1 bg-background text-foreground text-xs font-bold border rounded-full w-5 h-5 flex items-center justify-center">15</span>
                    </div>
                    <span className="text-sm font-medium text-muted-foreground">15-year Product Warranty</span>
                </div>
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <ShieldCheck className="h-10 w-10 text-primary" />
                        <span className="absolute -top-1 -right-1 bg-background text-foreground text-xs font-bold border rounded-full w-5 h-5 flex items-center justify-center">30</span>
                    </div>
                    <span className="text-sm font-medium text-muted-foreground">30-year Linear Power Warranty</span>
                </div>
            </div>

            <div className="h-[300px] w-full relative pt-8">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart margin={{ top: 20, right: 30, bottom: 20, left: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} className="stroke-muted" />
                        <XAxis 
                            dataKey="year" 
                            type="number" 
                            domain={[0, 30]} 
                            ticks={[0, 5, 10, 15, 20, 25, 30]}
                            tick={{ fontSize: 12 }}
                            tickFormatter={(val) => `${val}`}
                        />
                        <YAxis 
                            domain={[80, 100]} 
                            tick={{ fontSize: 12 }}
                            tickFormatter={(val) => `${val}%`}
                        />
                        <Tooltip 
                            formatter={(value: number) => [`${value}%`, "Power Output"]}
                            labelFormatter={(label) => `Year ${label}`}
                        />
                        {/* Main Warranty Line (n-type) */}
                        <Line 
                            data={dataWarranty} 
                            dataKey="value" 
                            type="linear" 
                            stroke="hsl(var(--primary))" 
                            strokeWidth={3}
                            dot={{ r: 4, fill: "hsl(var(--primary))" }}
                        />
                        {/* Comparison Line (p-type) */}
                        <Line 
                            data={dataLinear} 
                            dataKey="value" 
                            type="linear" 
                            stroke="hsl(var(--muted-foreground))" 
                            strokeWidth={2} 
                            strokeDasharray="5 5" 
                            dot={false}
                        />
                    </LineChart>
                </ResponsiveContainer>
                
                {/* Labels on Chart */}
                <div className="absolute top-[25%] left-[10%] text-sm font-bold">99.00%</div>
                <div className="absolute bottom-[35%] right-0 text-sm font-bold text-primary">87.40%</div>
                <div className="absolute bottom-[25%] right-0 text-sm font-bold text-muted-foreground">84.95%</div>
                <div className="absolute top-[40%] left-[20%] text-xs text-muted-foreground -rotate-6">Linear degradation ≤0.4%</div>
            </div>
        </div>

        {/* Right Column: Features & Certifications */}
        <div className="space-y-8">
            <div className="space-y-6">
                <div className="flex gap-4">
                    <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center shrink-0">
                        <span className="font-bold text-xs">TOPCon</span>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg">n-type TOPCon 4.0</h4>
                        <p className="text-muted-foreground">Novel upgrade, enhancing module efficiency</p>
                    </div>
                </div>
                
                <div className="flex gap-4">
                    <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center shrink-0">
                        <span className="font-bold text-xs">Voc</span>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg">Low Voc Design</h4>
                        <p className="text-muted-foreground">Increasing per string power, lower BOS cost and LCOE</p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center shrink-0">
                        <span className="font-bold text-xs">Bi</span>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg">Bifacial Power Generation</h4>
                        <p className="text-muted-foreground">Maximizing bifaciality, boosting backside power output</p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center shrink-0">
                        <span className="font-bold text-xs">App</span>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg">Multi-scenario Applications</h4>
                        <p className="text-muted-foreground">Compatible with mainstream application scenarios</p>
                    </div>
                </div>
            </div>

            {/* Certifications Footer */}
            <div className="flex flex-wrap gap-6 items-center pt-4 border-t">
                <div className="h-10 w-10 bg-muted rounded flex items-center justify-center text-[10px] font-bold text-muted-foreground">TUV</div>
                <div className="h-10 w-10 bg-muted rounded flex items-center justify-center text-[10px] font-bold text-muted-foreground">CE</div>
                <div className="h-10 w-10 bg-muted rounded flex items-center justify-center text-[10px] font-bold text-muted-foreground">IEC</div>
                
                <div className="ml-auto flex gap-4">
                    <div className="text-right">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Top Performer</p>
                        <p className="font-bold text-sm">Kiwa 2025</p>
                    </div>
                    <div className="text-right border-l pl-4">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Tier 1</p>
                        <p className="font-bold text-sm">BloombergNEF</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
