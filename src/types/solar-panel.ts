export interface ElectricalParameter {
  parameter: string;
  unit: string;
  values: number[];
}

export interface STCSpecs {
  title: string;
  conditions: string;
  parameters: ElectricalParameter[];
  powerRatings: number[];
}

export interface BNIPSpecs {
  title: string;
  conditions: string;
  parameters: ElectricalParameter[];
  powerRatings: number[];
}

export interface TemperatureCoefficients {
  title: string;
  coefficients: {
    parameter: string;
    value: string;
  }[];
}

export interface OperatingParameters {
  title: string;
  parameters: {
    parameter: string;
    value: string;
  }[];
}

export interface SolarPanelSpecs {
  stc: STCSpecs;
  bnpi: BNIPSpecs;
  temperatureCoefficients: TemperatureCoefficients;
  operatingParameters: OperatingParameters;
}

export const SOLAR_PANEL_SPECS: SolarPanelSpecs = {
  stc: {
    title: "电气性能参数",
    conditions: "STC: 光照强度 1000W/m², 电池温度 25℃, 大气质量=1.5",
    powerRatings: [605, 610, 615, 620, 625, 630],
    parameters: [
      {
        parameter: "额定峰值功率",
        unit: "Wp",
        values: [605, 610, 615, 620, 625, 630]
      },
      {
        parameter: "额定峰值电压",
        unit: "V",
        values: [41.18, 41.31, 41.43, 41.56, 41.69, 41.82]
      },
      {
        parameter: "额定峰值电流",
        unit: "A",
        values: [14.69, 14.77, 14.84, 14.92, 14.99, 15.07]
      },
      {
        parameter: "开路电压",
        unit: "V",
        values: [48.59, 48.74, 48.89, 49.04, 49.19, 49.34]
      },
      {
        parameter: "短路电流",
        unit: "A",
        values: [15.86, 15.94, 16.02, 16.11, 16.19, 16.27]
      },
      {
        parameter: "组件全面积效率",
        unit: "%",
        values: [22.4, 22.6, 22.8, 23.0, 23.1, 23.3]
      }
    ]
  },
  bnpi: {
    title: "电气性能参数",
    conditions: "BNPI: 光照强度:正面1000W/m²,背面135W/m²,环境温度25°C,大气质量1.5",
    powerRatings: [665, 670, 675, 680, 685, 690],
    parameters: [
      {
        parameter: "额定峰值功率",
        unit: "Wp",
        values: [665, 670, 675, 680, 685, 690]
      },
      {
        parameter: "额定峰值电压",
        unit: "V",
        values: [41.00, 41.13, 41.25, 41.37, 41.49, 41.61]
      },
      {
        parameter: "额定峰值电流",
        unit: "A",
        values: [16.22, 16.29, 16.36, 16.44, 16.51, 16.58]
      },
      {
        parameter: "开路电压",
        unit: "V",
        values: [48.79, 48.94, 49.09, 49.14, 49.19, 49.24]
      },
      {
        parameter: "短路电流",
        unit: "A",
        values: [17.45, 17.53, 17.61, 17.72, 17.83, 17.94]
      }
    ]
  },
  temperatureCoefficients: {
    title: "温度系数",
    coefficients: [
      {
        parameter: "额定功率温度系数 (Pmpp)",
        value: "-0.29%/℃"
      },
      {
        parameter: "短路电流温度系数 (Isc)",
        value: "+0.043%/℃"
      },
      {
        parameter: "开路电压温度系数 (Voc)",
        value: "-0.25%/℃"
      }
    ]
  },
  operatingParameters: {
    title: "工作参数",
    parameters: [
      {
        parameter: "最大系统电压 (IEC/UL)",
        value: "1500VDC"
      },
      {
        parameter: "双面系数 (Pmpp)",
        value: "80±5%"
      },
      {
        parameter: "接线盒防护等级 (Junction Box Protection Class)",
        value: "IP 68"
      },
      {
        parameter: "最大串联保险丝额定电流 (Max Series Fuse Rated Current)",
        value: "35 A"
      }
    ]
  }
};
