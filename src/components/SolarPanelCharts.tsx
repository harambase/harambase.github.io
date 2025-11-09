import React from 'react';
import ReactECharts from 'echarts-for-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const SolarPanelCharts: React.FC = () => {
  // Current-Voltage Curve (Irradiance variation)
  const currentVoltageIrradianceOption = {
    title: {
      text: '电流-电压曲线 (615W)',
      left: 'center',
      textStyle: {
        fontSize: 16,
        fontWeight: 'bold'
      }
    },
    tooltip: {
      trigger: 'axis',
      formatter: function(params: any) {
        return `电压: ${params[0].axisValue}V<br/>电流: ${params[0].value}A<br/>辐照度: ${params[0].seriesName}`;
      }
    },
    legend: {
      data: ['1000W/m²', '800W/m²', '600W/m²', '400W/m²', '200W/m²'],
      orient: 'vertical',
      right: 10,
      top: 'center',
      itemGap: 15
    },
    grid: {
      left: '3%',
      right: '20%',
      bottom: '10%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      name: '电压 (V)',
      nameLocation: 'middle',
      nameGap: 25,
      min: 0,
      max: 55,
      interval: 5
    },
    yAxis: {
      type: 'value',
      name: '电流 (A)',
      nameLocation: 'middle',
      nameGap: 40,
      min: 0,
      max: 18,
      interval: 2
    },
    series: [
      {
        name: '1000W/m²',
        type: 'line',
        symbol: 'none',
        smooth: true,
        data: [
          [0, 16.5], [2, 16.5], [4, 16.5], [6, 16.5], [8, 16.5], [10, 16.5], [12, 16.5], [14, 16.5], [16, 16.5], [18, 16.5], [20, 16.5], [22, 16.5], [24, 16.5], [26, 16.5], [28, 16.5], [30, 16.5], [32, 16.5], [34, 16.5], [36, 16.5], [38, 16.5], [40, 16.5], [40.5, 16.4], [41, 16.2], [41.5, 15.9], [42, 15.5], [42.5, 15.0], [43, 14.2], [43.5, 13.2], [44, 12.1], [44.5, 10.7], [45, 9.2], [45.5, 7.5], [46, 5.8], [46.5, 4.0], [47, 2.1], [47.5, 0.5], [48, 0]
        ],
        lineStyle: { color: '#00C851' },
        itemStyle: { color: '#00C851' }
      },
      {
        name: '800W/m²',
        type: 'line',
        symbol: 'none',
        smooth: true,
        data: [
          [0, 13.5], [2, 13.5], [4, 13.5], [6, 13.5], [8, 13.5], [10, 13.5], [12, 13.5], [14, 13.5], [16, 13.5], [18, 13.5], [20, 13.5], [22, 13.5], [24, 13.5], [26, 13.5], [28, 13.5], [30, 13.5], [32, 13.5], [34, 13.5], [36, 13.5], [38, 13.5], [40, 13.5], [40.5, 13.4], [41, 13.2], [41.5, 12.9], [42, 12.6], [42.5, 12.1], [43, 11.4], [43.5, 10.6], [44, 9.7], [44.5, 8.6], [45, 7.4], [45.5, 6.0], [46, 4.6], [46.5, 3.1], [47, 1.7], [47.2, 0.8], [47.5, 0]
        ],
        lineStyle: { color: '#00C851' },
        itemStyle: { color: '#00C851' }
      },
      {
        name: '600W/m²',
        type: 'line',
        symbol: 'none',
        smooth: true,
        data: [
          [0, 10], [2, 10], [4, 10], [6, 10], [8, 10], [10, 10], [12, 10], [14, 10], [16, 10], [18, 10], [20, 10], [22, 10], [24, 10], [26, 10], [28, 10], [30, 10], [32, 10], [34, 10], [36, 10], [38, 10], [40, 10], [40.5, 9.9], [41, 9.8], [41.5, 9.6], [42, 9.4], [42.5, 9.0], [43, 8.5], [43.5, 7.9], [44, 7.3], [44.5, 6.4], [45, 5.5], [45.5, 4.5], [46, 3.5], [46.5, 2.4], [47, 1.3], [47.2, 0.6], [47, 0]
        ],
        lineStyle: { color: '#00C851' },
        itemStyle: { color: '#00C851' }
      },
      {
        name: '400W/m²',
        type: 'line',
        symbol: 'none',
        smooth: true,
        data: [
          [0, 6.5], [2, 6.5], [4, 6.5], [6, 6.5], [8, 6.5], [10, 6.5], [12, 6.5], [14, 6.5], [16, 6.5], [18, 6.5], [20, 6.5], [22, 6.5], [24, 6.5], [26, 6.5], [28, 6.5], [30, 6.5], [32, 6.5], [34, 6.5], [36, 6.5], [38, 6.5], [40, 6.5], [40.5, 6.4], [41, 6.3], [41.5, 6.2], [42, 6.0], [42.5, 5.7], [43, 5.4], [43.5, 5.0], [44, 4.6], [44.5, 4.1], [45, 3.5], [45.5, 2.8], [46, 2.2], [46.3, 1.1], [46.5, 0]
        ],
        lineStyle: { color: '#00C851' },
        itemStyle: { color: '#00C851' }
      },
      {
        name: '200W/m²',
        type: 'line',
        symbol: 'none',
        smooth: true,
        data: [
          [0, 3.3], [2, 3.3], [4, 3.3], [6, 3.3], [8, 3.3], [10, 3.3], [12, 3.3], [14, 3.3], [16, 3.3], [18, 3.3], [20, 3.3], [22, 3.3], [24, 3.3], [26, 3.3], [28, 3.3], [30, 3.3], [32, 3.3], [34, 3.3], [36, 3.3], [38, 3.3], [40, 3.3], [40.5, 3.3], [41, 3.2], [41.5, 3.1], [42, 3.0], [42.5, 2.8], [43, 2.7], [43.5, 2.5], [44, 2.3], [44.5, 2.0], [45, 1.7], [45.5, 1.4], [46, 1.1], [46.2, 0.5], [46, 0]
        ],
        lineStyle: { color: '#00C851' },
        itemStyle: { color: '#00C851' }
      }
    ]
  };

  // Power-Voltage Curve (Irradiance variation)
  const powerVoltageIrradianceOption = {
    title: {
      text: '功率-电压曲线 (615W)',
      left: 'center',
      textStyle: {
        fontSize: 16,
        fontWeight: 'bold'
      }
    },
    tooltip: {
      trigger: 'axis',
      formatter: function(params: any) {
        return `电压: ${params[0].axisValue}V<br/>功率: ${params[0].value}W<br/>辐照度: ${params[0].seriesName}`;
      }
    },
    legend: {
      data: ['1000W/m²', '800W/m²', '600W/m²', '400W/m²', '200W/m²'],
      orient: 'vertical',
      right: 10,
      top: 'center',
      itemGap: 15
    },
    grid: {
      left: '3%',
      right: '20%',
      bottom: '10%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      name: '电压 (V)',
      nameLocation: 'middle',
      nameGap: 25,
      min: 0,
      max: 55,
      interval: 5
    },
    yAxis: {
      type: 'value',
      name: '功率 (W)',
      nameLocation: 'middle',
      nameGap: 40,
      min: 0,
      max: 700,
      interval: 100
    },
    series: [
      {
        name: '1000W/m²',
        type: 'line',
        symbol: 'none',
        smooth: true,
        data: [
          [0, 0], [2, 33], [4, 66], [6, 99], [8, 132], [10, 165], [12, 198], [14, 231], [16, 264], [18, 297], [20, 330], [22, 363], [24, 396], [26, 429], [28, 462], [30, 495], [32, 528], [34, 561], [36, 594], [38, 627], [40, 660], [40.5, 672], [41, 680], [41.5, 685], [42, 686], [42.5, 682], [43, 670], [43.5, 650], [44, 620], [44.5, 580], [45, 530], [45.5, 470], [46, 400], [46.5, 320], [47, 230], [47.5, 130], [48, 0]
        ],
        lineStyle: { color: '#00C851' },
        itemStyle: { color: '#00C851' }
      },
      {
        name: '800W/m²',
        type: 'line',
        symbol: 'none',
        smooth: true,
        data: [
          [0, 0], [2, 27], [4, 54], [6, 81], [8, 108], [10, 135], [12, 162], [14, 189], [16, 216], [18, 243], [20, 270], [22, 297], [24, 324], [26, 351], [28, 378], [30, 405], [32, 432], [34, 459], [36, 486], [38, 513], [40, 540], [40.5, 550], [41, 558], [41.5, 564], [42, 567], [42.5, 567], [43, 562], [43.5, 552], [44, 536], [44.5, 514], [45, 486], [45.5, 452], [46, 412], [46.5, 366], [47, 314], [47.2, 250], [47.5, 0]
        ],
        lineStyle: { color: '#00C851' },
        itemStyle: { color: '#00C851' }
      },
      {
        name: '600W/m²',
        type: 'line',
        symbol: 'none',
        smooth: true,
        data: [
          [0, 0], [2, 20], [4, 40], [6, 60], [8, 80], [10, 100], [12, 120], [14, 140], [16, 160], [18, 180], [20, 200], [22, 220], [24, 240], [26, 260], [28, 280], [30, 300], [32, 320], [34, 340], [36, 360], [38, 380], [40, 400], [40.5, 408], [41, 415], [41.5, 420], [42, 423], [42.5, 424], [43, 422], [43.5, 417], [44, 408], [44.5, 395], [45, 378], [45.5, 357], [46, 332], [46.5, 303], [47, 270], [47.2, 200], [47, 0]
        ],
        lineStyle: { color: '#00C851' },
        itemStyle: { color: '#00C851' }
      },
      {
        name: '400W/m²',
        type: 'line',
        symbol: 'none',
        smooth: true,
        data: [
          [0, 0], [2, 13], [4, 26], [6, 39], [8, 52], [10, 65], [12, 78], [14, 91], [16, 104], [18, 117], [20, 130], [22, 143], [24, 156], [26, 169], [28, 182], [30, 195], [32, 208], [34, 221], [36, 234], [38, 247], [40, 260], [40.5, 265], [41, 270], [41.5, 273], [42, 275], [42.5, 275], [43, 273], [43.5, 269], [44, 262], [44.5, 252], [45, 239], [45.5, 223], [46, 204], [46.3, 150], [46.5, 0]
        ],
        lineStyle: { color: '#00C851' },
        itemStyle: { color: '#00C851' }
      },
      {
        name: '200W/m²',
        type: 'line',
        symbol: 'none',
        smooth: true,
        data: [
          [0, 0], [2, 6.6], [4, 13.2], [6, 19.8], [8, 26.4], [10, 33], [12, 39.6], [14, 46.2], [16, 52.8], [18, 59.4], [20, 66], [22, 72.6], [24, 79.2], [26, 85.8], [28, 92.4], [30, 99], [32, 105.6], [34, 112.2], [36, 118.8], [38, 125.4], [40, 132], [40.5, 134.4], [41, 136.4], [41.5, 137.8], [42, 138.6], [42.5, 138.8], [43, 138.4], [43.5, 137.2], [44, 135.2], [44.5, 132.4], [45, 128.8], [45.5, 124.4], [46, 119.2], [46.2, 100], [46, 0]
        ],
        lineStyle: { color: '#00C851' },
        itemStyle: { color: '#00C851' }
      }
    ]
  };

  // Current-Voltage Curve (Temperature variation)
  const currentVoltageTemperatureOption = {
    title: {
      text: '电流-电压曲线 (615W)',
      left: 'center',
      textStyle: {
        fontSize: 16,
        fontWeight: 'bold'
      }
    },
    tooltip: {
      trigger: 'axis',
      formatter: function(params: any) {
        return `电压: ${params[0].axisValue}V<br/>电流: ${params[0].value}A<br/>温度: ${params[0].seriesName}`;
      }
    },
    legend: {
      data: ['Cells temp.=25℃', 'Cells temp.=35℃', 'Cells temp.=45℃', 'Cells temp.=55℃', 'Cells temp.=65℃'],
      orient: 'vertical',
      right: 10,
      top: 'center',
      itemGap: 15
    },
    grid: {
      left: '3%',
      right: '20%',
      bottom: '10%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      name: '电压 (V)',
      nameLocation: 'middle',
      nameGap: 25,
      min: 0,
      max: 55,
      interval: 5
    },
    yAxis: {
      type: 'value',
      name: '电流 (A)',
      nameLocation: 'middle',
      nameGap: 40,
      min: 0,
      max: 18,
      interval: 2
    },
    series: [
      {
        name: 'Cells temp.=25℃',
        type: 'line',
        symbol: 'none',
        smooth: true,
        data: [
          [0, 16.5], [2, 16.5], [4, 16.5], [6, 16.5], [8, 16.5], [10, 16.5], [12, 16.5], [14, 16.5], [16, 16.5], [18, 16.5], [20, 16.5], [22, 16.5], [24, 16.5], [26, 16.5], [28, 16.5], [30, 16.5], [32, 16.5], [34, 16.5], [36, 16.5], [38, 16.5], [40, 16.5], [40.5, 16.4], [41, 16.2], [41.5, 15.9], [42, 15.5], [42.5, 15.0], [43, 14.2], [43.5, 13.2], [44, 12.1], [44.5, 10.7], [45, 9.2], [45.5, 7.5], [46, 5.8], [46.5, 4.0], [47, 2.1], [47.5, 0.5], [48, 0]
        ],
        lineStyle: { color: '#2196F3' },
        itemStyle: { color: '#2196F3' }
      },
      {
        name: 'Cells temp.=35℃',
        type: 'line',
        symbol: 'none',
        smooth: true,
        data: [
          [0, 16.5], [2, 16.5], [4, 16.5], [6, 16.5], [8, 16.5], [10, 16.5], [12, 16.5], [14, 16.5], [16, 16.5], [18, 16.5], [20, 16.5], [22, 16.5], [24, 16.5], [26, 16.5], [28, 16.5], [30, 16.5], [32, 16.5], [34, 16.5], [36, 16.5], [38, 16.5], [38.5, 16.4], [39, 16.2], [39.5, 15.8], [40, 15.2], [40.5, 14.4], [41, 13.4], [41.5, 12.2], [42, 10.8], [42.5, 9.2], [43, 7.4], [43.5, 5.4], [44, 3.2], [44.5, 1.8], [45, 0.5], [45.5, 0.1], [46, 0]
        ],
        lineStyle: { color: '#F44336' },
        itemStyle: { color: '#F44336' }
      },
      {
        name: 'Cells temp.=45℃',
        type: 'line',
        symbol: 'none',
        smooth: true,
        data: [
          [0, 16.3], [2, 16.3], [4, 16.3], [6, 16.3], [8, 16.3], [10, 16.3], [12, 16.3], [14, 16.3], [16, 16.3], [18, 16.3], [20, 16.3], [22, 16.3], [24, 16.3], [26, 16.3], [28, 16.3], [30, 16.3], [32, 16.3], [34, 16.3], [36, 16.3], [36.5, 16.2], [37, 16.0], [37.5, 15.6], [38, 15.0], [38.5, 14.2], [39, 13.2], [39.5, 12.0], [40, 10.6], [40.5, 9.0], [41, 7.2], [41.5, 5.2], [42, 3.0], [42.5, 1.5], [43, 0.5], [43.5, 0.1], [44, 0]
        ],
        lineStyle: { color: '#4CAF50' },
        itemStyle: { color: '#4CAF50' }
      },
      {
        name: 'Cells temp.=55℃',
        type: 'line',
        symbol: 'none',
        smooth: true,
        data: [
          [0, 16.2], [2, 16.2], [4, 16.2], [6, 16.2], [8, 16.2], [10, 16.2], [12, 16.2], [14, 16.2], [16, 16.2], [18, 16.2], [20, 16.2], [22, 16.2], [24, 16.2], [26, 16.2], [28, 16.2], [30, 16.2], [32, 16.2], [34, 16.2], [34.5, 16.1], [35, 15.8], [35.5, 15.3], [36, 14.6], [36.5, 13.7], [37, 12.6], [37.5, 11.3], [38, 9.8], [38.5, 8.1], [39, 6.2], [39.5, 4.1], [40, 1.8], [40.5, 1.0], [41, 0.5], [41.5, 0.1], [42, 0]
        ],
        lineStyle: { color: '#9C27B0' },
        itemStyle: { color: '#9C27B0' }
      },
      {
        name: 'Cells temp.=65℃',
        type: 'line',
        symbol: 'none',
        smooth: true,
        data: [
          [0, 16.1], [2, 16.1], [4, 16.1], [6, 16.1], [8, 16.1], [10, 16.1], [12, 16.1], [14, 16.1], [16, 16.1], [18, 16.1], [20, 16.1], [22, 16.1], [24, 16.1], [26, 16.1], [28, 16.1], [30, 16.1], [32, 16.1], [32.5, 16.0], [33, 15.7], [33.5, 15.2], [34, 14.5], [34.5, 13.6], [35, 12.5], [35.5, 11.2], [36, 9.7], [36.5, 8.0], [37, 6.1], [37.5, 4.0], [38, 1.7], [38.5, 1.0], [39, 0.5], [39.5, 0.1], [40, 0]
        ],
        lineStyle: { color: '#00BCD4' },
        itemStyle: { color: '#00BCD4' }
      }
    ]
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>曲线图</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {/* Current-Voltage Curve (Irradiance) */}
            <div>
              <ReactECharts 
                option={currentVoltageIrradianceOption} 
                style={{ height: '300px', width: '100%' }}
              />
            </div>

            {/* Power-Voltage Curve (Irradiance) */}
            <div>
              <ReactECharts 
                option={powerVoltageIrradianceOption} 
                style={{ height: '300px', width: '100%' }}
              />
            </div>

            {/* Current-Voltage Curve (Temperature) */}
            <div>
              <ReactECharts 
                option={currentVoltageTemperatureOption} 
                style={{ height: '300px', width: '100%' }}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SolarPanelCharts;
