import React from 'react';

interface PerformanceBannerProps {
  powerRange: string;
  maxEfficiency: string;
}

const PerformanceBanner: React.FC<PerformanceBannerProps> = ({ powerRange, maxEfficiency }) => {
  return (
    <div className="bg-blue-600 text-white p-6 mb-6 shadow-displacement">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold">{powerRange}</div>
            <div className="text-sm opacity-90">功率范围</div>
          </div>
          <div>
            <div className="text-2xl font-bold">0~+3%</div>
            <div className="text-sm opacity-90">功率公差</div>
          </div>
          <div>
            <div className="text-2xl font-bold">{maxEfficiency}</div>
            <div className="text-sm opacity-90">最高组件转换效率</div>
          </div>
          <div>
            <div className="text-2xl font-bold">≤ 1.0%</div>
            <div className="text-sm opacity-90">首年衰减</div>
          </div>
          <div>
            <div className="text-2xl font-bold">≤ 0.4%</div>
            <div className="text-sm opacity-90">历年衰减</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceBanner;

