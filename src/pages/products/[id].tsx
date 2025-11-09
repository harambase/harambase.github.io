import React from 'react';
import {useRouter} from 'next/router';
import Layout from '../../components/Layout';
import Link from 'next/link';
import {getProductById, PRODUCTS, CATEGORIES, ALL} from '../../types/products';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import SolarPanelCharts from '../../components/SolarPanelCharts';
import ProductSpecificationsComponent from '../../components/ProductSpecifications';
import { getProductSpecifications, getProductSpecificationsById } from '../../types/product-specs';
import PerformanceBanner from '../../components/PerformanceBanner';
import ProductFeatures from '../../components/ProductFeatures';
import { COMPONENTS } from '../../types/components';
import { STEEL_COMPONENTS } from '../../types/steel-components';
import { SOLAR_PANEL_COMPONENTS } from '../../types/solar-panel-components';

export default function ProductDetailPage() {
  const router = useRouter();
  const {id} = router.query as { id?: string };
  const product = id ? getProductById(id) : undefined;

  // Helper function to get power range and efficiency for solar panels
  const getSolarPanelPerformance = (productId: string) => {
    const specs = getProductSpecificationsById(productId);
    if (!specs?.electrical?.stc) return { powerRange: '625~650W', maxEfficiency: '23.3%' };
    
    const stcSpecs = specs.electrical.stc;
    const powerParam = stcSpecs.parameters.find(p => p.parameter.includes('额定峰值功率'));
    const efficiencyParam = stcSpecs.parameters.find(p => p.parameter.includes('组件全面积效率'));
    
    if (powerParam && efficiencyParam && typeof powerParam.value === 'string' && typeof efficiencyParam.value === 'string') {
      const powerValues = powerParam.value.split(' / ');
      const efficiencyValues = efficiencyParam.value.split(' / ');
      const powerRange = `${powerValues[0].replace('W', '')}~${powerValues[powerValues.length - 1].replace('W', '')}W`;
      const maxEfficiency = efficiencyValues[efficiencyValues.length - 1];
      return { powerRange, maxEfficiency };
    }
    
    return { powerRange: '625~650W', maxEfficiency: '23.3%' };
  };

  if (!product) {
    return (
      <Layout title="产品详情">
        <section className="pt-120 pb-120">
          <div className="container text-center">
            正在加载或未找到该产品。
          </div>
        </section>
      </Layout>
    );
  }

  // Special handling for 光伏支架系统 (p10) - show custom layout for colored steel tile roof
  if (product.id === 'p10') {
    const features = [
      { icon: '🏠', text: '美观大方' },
      { icon: '🔧', text: '易于安装' },
      { icon: '☀️', text: '环境适应性强' },
      { icon: '⚖️', text: '轻量化设计' },
      { icon: '💎', text: '结构坚固稳定' },
      { icon: '💰', text: '节约成本' },
    ];

    const components = [
      { name: '中压块', nameEn: 'Mid clamp', image: '/static/picture/component/mid-clamp.png' },
      { name: 'H型轨道', nameEn: 'H rail', image: '/static/picture/component/h-rail.png' },
      { name: '梯形瓦夹具', nameEn: 'Trapezoidal tile fixture', image: '/static/picture/component/trapezoidal-fixture.png' },
      { name: '侧压块', nameEn: 'End clamp', image: '/static/picture/component/end-clamp.png' },
      { name: '导轨连接件', nameEn: 'Rail Splice', image: '/static/picture/component/rail-splice.png' },
    ];

    return (
      <Layout title="光伏支架系统 - 产品详情" description="查看光伏支架系统的详细信息">
        {/* Breadcrumb */}
        <section className="pt-60 pb-20" style={{backgroundColor: '#f8f9fa'}}>
          <div className="container">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link href="/">主页</Link></li>
                <li className="breadcrumb-item"><Link href="/products">产品</Link></li>
                <li className="breadcrumb-item active" aria-current="page">{product.name}</li>
              </ol>
            </nav>
          </div>
        </section>

        <section className="pt-20 pb-120">
          <div className="container">
            <div className="row">
              {/* Left Column */}
              <div className="col-lg-7">
                {/* Title */}
                <div className="mb-4">
                  <h1 className="text-danger d-inline-block px-4 py-2 mb-0" style={{backgroundColor: 'transparent'}}>
                    彩钢瓦屋面支架系统
                  </h1>
                  <p className="text-muted mt-2">COLORED STEEL TILE ROOF SUPPORT SYSTEM</p>
                </div>

                {/* Main Image */}
                <div className="mb-4">
                  <img 
                    src={product.banner || product.image} 
                    alt={product.name}
                    className="img-fluid w-100"
                    style={{ borderRadius: '8px' }}
                  />
                </div>

                {/* Features */}
                <div className="row mb-4">
                  {features.map((feature, index) => (
                    <div key={index} className="col-4 col-md-2 text-center mb-3">
                      <div className="mb-2" style={{ fontSize: '32px' }}>{feature.icon}</div>
                      <div style={{ fontSize: '13px' }}>{feature.text}</div>
                    </div>
                  ))}
                </div>

                {/* Specifications Table */}
                <Card className="shadow-sm">
                  <CardContent className="p-4">
                    <h3 className="mb-3 fw-bold">技术项目 / Technical Project</h3>
                    <div className="table-responsive">
                      <table className="table table-bordered table-sm mb-0">
                        <thead>
                          <tr>
                            <th style={{ width: '40%', padding: '8px', fontSize: '13px' }}>技术项目</th>
                            <th style={{ padding: '8px', fontSize: '13px' }}>参数</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td style={{ padding: '6px 8px', fontSize: '13px' }}>安装地点 / Installation location</td>
                            <td style={{ padding: '6px 8px', fontSize: '13px' }}>彩钢瓦屋面 Color steel tile roof</td>
                          </tr>
                          <tr>
                            <td style={{ padding: '6px 8px', fontSize: '13px' }}>安装角度 / Mounting angle</td>
                            <td style={{ padding: '6px 8px', fontSize: '13px' }}>与屋面平行 Parallel to roof</td>
                          </tr>
                          <tr>
                            <td style={{ padding: '6px 8px', fontSize: '13px' }}>风载 / Wind load</td>
                            <td style={{ padding: '6px 8px', fontSize: '13px' }}>42m/s</td>
                          </tr>
                          <tr>
                            <td style={{ padding: '6px 8px', fontSize: '13px' }}>雪载 / Snow load</td>
                            <td style={{ padding: '6px 8px', fontSize: '13px' }}>1.4KN/m²</td>
                          </tr>
                          <tr>
                            <td style={{ padding: '6px 8px', fontSize: '13px' }}>电池板排列形式 / Battery panel arrangement</td>
                            <td style={{ padding: '6px 8px', fontSize: '13px' }}>横向或纵向 Horizontal or vertical</td>
                          </tr>
                          <tr>
                            <td style={{ padding: '6px 8px', fontSize: '13px' }}>设计标准 / Design criteria</td>
                            <td style={{ padding: '6px 8px', fontSize: '13px' }}>AS/NZS1170, DIN1055, JIS C 8955:2011</td>
                          </tr>
                          <tr>
                            <td style={{ padding: '6px 8px', fontSize: '13px' }}>型材材质 / Profile material</td>
                            <td style={{ padding: '6px 8px', fontSize: '13px' }}>AL6005-T5/AL6063-T5 (本色阳极氧化Anodized)</td>
                          </tr>
                          <tr>
                            <td style={{ padding: '6px 8px', fontSize: '13px' }}>紧固件材质 / Fastener material</td>
                            <td style={{ padding: '6px 8px', fontSize: '13px' }}>304不锈钢SUS304</td>
                          </tr>
                          <tr>
                            <td style={{ padding: '6px 8px', fontSize: '13px' }}>配件材质 / Accessory material</td>
                            <td style={{ padding: '6px 8px', fontSize: '13px' }}>AL6005-T5/AL6063-T5 (本色阳极氧化Anodized) 铝合金Aluminium alloy</td>
                          </tr>
                          <tr>
                            <td style={{ padding: '6px 8px', fontSize: '13px' }}>质保 / Warranty</td>
                            <td style={{ padding: '6px 8px', fontSize: '13px' }}>10年 10 years</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column - Component Callouts */}
              <div className="col-lg-5">
                {/* Title */}
                <div className="mb-4">
                  <h2 className="text-danger d-inline-block px-4 py-2 mb-0" style={{backgroundColor: 'transparent'}}>
                    主要组件
                  </h2>
                  <p className="text-muted mt-2">MAIN COMPONENTS</p>
                </div>

                {/* Components List */}
                <div className="space-y-3">
                  {components.map((component, index) => (
                    <Card key={index} className="shadow-sm">
                      <CardContent className="p-3">
                        <div className="row align-items-center">
                          <div className="col-4">
                            <div 
                              className="bg-light rounded d-flex align-items-center justify-content-center"
                              style={{ height: '80px', border: '1px solid #e0e0e0' }}
                            >
                              <img 
                                src={component.image} 
                                alt={component.name}
                                className="img-fluid"
                                style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.style.display = 'none';
                                  if (target.parentElement) {
                                    target.parentElement.innerHTML = '<div class="text-muted text-center" style="font-size: 12px;">图片</div>';
                                  }
                                }}
                              />
                            </div>
                          </div>
                          <div className="col-8">
                            <div style={{ fontSize: '14px', fontWeight: '600', marginBottom: '4px' }}>
                              {component.name}
                            </div>
                            <div style={{ fontSize: '12px', color: '#6c757d' }}>
                              {component.nameEn}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  // Special handling for 光伏电站系统 (p9) - show custom layout
  if (product.id === 'p9') {
    const features = [
      { icon: '🏠', text: '美观大方' },
      { icon: '🔧', text: '安装简便' },
      { icon: '☀️', text: '环境适应性强' },
      { icon: '💡', text: '轻量化设计' },
      { icon: '🛡️', text: '结构坚固稳定' },
      { icon: '💰', text: '节约成本' },
    ];

    const mainComponents = [
      { name: 'C型钢', image: '/static/picture/component/c-steel.png' },
      { name: 'U型钢', image: '/static/picture/component/u-steel.png' },
      { name: '地桩', image: '/static/picture/component/ground-pile.png' },
      { name: '热镀锌螺栓', image: '/static/picture/component/galvanized-bolt.png' },
      { name: '热镀锌双头', image: '/static/picture/component/double-ended-bolt.png' },
      { name: 'U型螺栓', image: '/static/picture/component/u-bolt.png' },
      { name: '热镀锌螺母', image: '/static/picture/component/galvanized-nut.png' },
      { name: '热镀锌拉条', image: '/static/picture/component/tie-rod.png' },
      { name: '地脚螺栓', image: '/static/picture/component/anchor-bolt.png' },
      { name: '三角连接件', image: '/static/picture/component/triangular-connector.png' },
      { name: '塑翼螺母', image: '/static/picture/component/wing-nut.png' },
      { name: '中压/边压', image: '/static/picture/component/pressure-plate.png' },
    ];

    return (
      <Layout title="光伏电站系统 - 产品详情" description="查看光伏电站系统的详细信息">
        {/* Breadcrumb */}
        <section className="pt-60 pb-20" style={{backgroundColor: '#f8f9fa'}}>
          <div className="container">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link href="/">主页</Link></li>
                <li className="breadcrumb-item"><Link href="/products">产品</Link></li>
                <li className="breadcrumb-item active" aria-current="page">{product.name}</li>
              </ol>
            </nav>
          </div>
        </section>

        <section className="pt-20 pb-120">
          <div className="container">
            <div className="row">
              {/* Left Column */}
              <div className="col-lg-7">
                {/* Title */}
                <div className="mb-4">
                  <h1 className="text-danger d-inline-block px-4 py-2 mb-0" style={{backgroundColor: 'transparent'}}>
                    光伏电站
                  </h1>
                  <p className="text-muted mt-2">PHOTOVOLTAIC POWER STATION</p>
                </div>

                {/* Main Image */}
                <div className="mb-4">
                  <img 
                    src={product.banner || product.image} 
                    alt={product.name}
                    className="img-fluid w-100"
                    style={{ borderRadius: '8px' }}
                  />
                </div>

                {/* Features */}
                <div className="row mb-4">
                  {features.map((feature, index) => (
                    <div key={index} className="col-4 col-md-2 text-center mb-3">
                      <div className="mb-2" style={{ fontSize: '32px' }}>{feature.icon}</div>
                      <div style={{ fontSize: '13px' }}>{feature.text}</div>
                    </div>
                  ))}
                </div>

                {/* Specifications Table */}
                <Card className="shadow-sm">
                  <CardContent className="p-4">
                    <h3 className="mb-3 fw-bold">技术项目 / Technical Project</h3>
                    <div className="table-responsive">
                      <table className="table table-bordered table-sm mb-0">
                        <thead>
                          <tr>
                            <th style={{ width: '40%', padding: '8px', fontSize: '13px' }}>技术项目</th>
                            <th style={{ padding: '8px', fontSize: '13px' }}>参数</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td style={{ padding: '6px 8px', fontSize: '13px' }}>安装地点 / Installation location</td>
                            <td style={{ padding: '6px 8px', fontSize: '13px' }}>光伏电站 Photovoltaic power station</td>
                          </tr>
                          <tr>
                            <td style={{ padding: '6px 8px', fontSize: '13px' }}>安装角度 / Mounting angle</td>
                            <td style={{ padding: '6px 8px', fontSize: '13px' }}>0-45°</td>
                          </tr>
                          <tr>
                            <td style={{ padding: '6px 8px', fontSize: '13px' }}>风载 / Wind load</td>
                            <td style={{ padding: '6px 8px', fontSize: '13px' }}>42m/s</td>
                          </tr>
                          <tr>
                            <td style={{ padding: '6px 8px', fontSize: '13px' }}>雪载 / Snow load</td>
                            <td style={{ padding: '6px 8px', fontSize: '13px' }}>1.4KN/m²</td>
                          </tr>
                          <tr>
                            <td style={{ padding: '6px 8px', fontSize: '13px' }}>电池板排列 / Battery panel arrangement</td>
                            <td style={{ padding: '6px 8px', fontSize: '13px' }}>横向或纵向 Horizontal or vertical</td>
                          </tr>
                          <tr>
                            <td style={{ padding: '6px 8px', fontSize: '13px' }}>设计标准 / Design criteria</td>
                            <td style={{ padding: '6px 8px', fontSize: '13px' }}>AS/NZ51170, DIN1055, JIS C 8955:2011</td>
                          </tr>
                          <tr>
                            <td style={{ padding: '6px 8px', fontSize: '13px' }}>型材材质 / Profile material</td>
                            <td style={{ padding: '6px 8px', fontSize: '13px' }}>AL6005-TS/AL6063-T5 (本色阳极氧化Anodized)</td>
                          </tr>
                          <tr>
                            <td style={{ padding: '6px 8px', fontSize: '13px' }}>紧固件材质 / Fastener material</td>
                            <td style={{ padding: '6px 8px', fontSize: '13px' }}>304不锈钢 SUS304</td>
                          </tr>
                          <tr>
                            <td style={{ padding: '6px 8px', fontSize: '13px' }}>配件材质 / Accessory material</td>
                            <td style={{ padding: '6px 8px', fontSize: '13px' }}>AL6005-TS/AL6063-T5 (本色阳极氧化Anodized) 铝合金Aluminium alloy</td>
                          </tr>
                          <tr>
                            <td style={{ padding: '6px 8px', fontSize: '13px' }}>质保 / Warranty</td>
                            <td style={{ padding: '6px 8px', fontSize: '13px' }}>10年 10 years</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column */}
              <div className="col-lg-5">
                {/* Title */}
                <div className="mb-4">
                  <h2 className="text-danger d-inline-block px-4 py-2 mb-0" style={{backgroundColor: 'transparent'}}>
                    主要组件
                  </h2>
                  <p className="text-muted mt-2">MAIN COMPONENTS</p>
                </div>

                {/* Components Grid */}
                <div className="row g-3">
                  {mainComponents.map((component, index) => (
                    <div key={index} className="col-4">
                      <Card className="shadow-sm h-100">
                        <CardContent className="p-3 text-center">
                          <div 
                            className="bg-light rounded d-flex align-items-center justify-content-center mb-2"
                            style={{ height: '100px', border: '1px solid #e0e0e0' }}
                          >
                            <img 
                              src={component.image} 
                              alt={component.name}
                              className="img-fluid"
                              style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                if (target.parentElement) {
                                  target.parentElement.innerHTML = '<div class="text-muted">图片</div>';
                                }
                              }}
                            />
                          </div>
                          <div style={{ fontSize: '12px', fontWeight: '500' }}>{component.name}</div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  // Special handling for Steel category - show steel components catalog
  if (product.category === 'Steel') {
    return (
      <Layout title="热镀锌钢材产品 - 产品目录" description="查看我们的热镀锌钢材产品目录">
        {/* Breadcrumb */}
        <section className="pt-60 pb-20" style={{backgroundColor: '#f8f9fa'}}>
          <div className="container">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link href="/">主页</Link></li>
                <li className="breadcrumb-item"><Link href="/products">产品</Link></li>
                <li className="breadcrumb-item active" aria-current="page">热镀锌钢材产品</li>
              </ol>
            </nav>
          </div>
        </section>

        <section className="pt-20 pb-120">
          <div className="container">
            {/* Title Section */}
            <div className="row mb-20">
              <div className="col-12 text-center">
                <h1 className="text-2xl font-bold mb-0">热镀锌钢材产品目录</h1>
              </div>
            </div>

            <div className="space-y-4">
              {STEEL_COMPONENTS.map((steelComponent) => (
                <Card key={steelComponent.id} className="shadow-md">
                  <CardContent className="p-4">
                    <div className="row align-items-center">
                      {/* Left Side - Single Image */}
                      <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                        <div 
                          className="bg-gray-100 rounded d-flex align-items-center justify-content-center"
                          style={{ height: '200px', border: '1px solid #e0e0e0' }}
                        >
                          <img 
                            src={steelComponent.image3d} 
                            alt={steelComponent.name}
                            className="img-fluid"
                            style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              if (target.parentElement) {
                                target.parentElement.innerHTML = '<div class="text-muted text-center">图片</div>';
                              }
                            }}
                          />
                        </div>
                      </div>

                      {/* Right Side - Technical Parameters Table */}
                      <div className="col-lg-8 col-md-12">
                        <div className="table-responsive">
                          <table className="table table-bordered table-sm mb-0" style={{ minWidth: '100%' }}>
                            <thead>
                              <tr>
                                <th colSpan={2} className="text-center bg-primary text-white" style={{ padding: '8px', fontSize: '14px' }}>
                                  技术参数 / technical parameter
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="fw-bold" style={{ width: '30%', padding: '6px 8px', fontSize: '13px' }}>
                                  名称 / Name
                                </td>
                                <td style={{ padding: '6px 8px', fontSize: '13px' }}>
                                  {steelComponent.name} / {steelComponent.nameEn}
                                </td>
                              </tr>
                              <tr>
                                <td className="fw-bold" style={{ padding: '6px 8px', fontSize: '13px' }}>
                                  型号 / Model
                                </td>
                                <td style={{ padding: '6px 8px', fontSize: '13px' }}>{steelComponent.model}</td>
                              </tr>
                              <tr>
                                <td className="fw-bold" style={{ padding: '6px 8px', fontSize: '13px' }}>
                                  材质 / Material
                                </td>
                                <td style={{ padding: '6px 8px', fontSize: '13px' }}>
                                  {steelComponent.material} / {steelComponent.materialEn}
                                </td>
                              </tr>
                              <tr>
                                <td className="fw-bold" style={{ padding: '6px 8px', fontSize: '13px' }}>
                                  表面处理 / Surface treatment
                                </td>
                                <td style={{ padding: '6px 8px', fontSize: '13px' }}>
                                  {steelComponent.surfaceTreatment} / {steelComponent.surfaceTreatmentEn}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  // Special handling for 光伏板 category - show solar panel catalog (only for main entrance p14)
  if (product.category === '光伏板' && product.id === 'p14') {
    return (
      <Layout title="光伏板 - 产品目录" description="查看我们的光伏板产品目录">
        {/* Breadcrumb */}
        <section className="pt-60 pb-20" style={{backgroundColor: '#f8f9fa'}}>
          <div className="container">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link href="/">主页</Link></li>
                <li className="breadcrumb-item"><Link href="/products">产品</Link></li>
                <li className="breadcrumb-item active" aria-current="page">光伏板</li>
              </ol>
            </nav>
          </div>
        </section>

        <section className="pt-20 pb-120">
          <div className="container">
            {/* Title Section */}
            <div className="row mb-20">
              <div className="col-12 text-center">
                <h1 className="text-2xl font-bold mb-0">光伏板产品目录</h1>
              </div>
            </div>

            <div className="space-y-4">
              {SOLAR_PANEL_COMPONENTS.map((solarPanel) => (
                <Card key={solarPanel.id} className="shadow-md">
                  <CardContent className="p-4">
                    <div className="row align-items-center">
                      {/* Left Side - Single Image */}
                      <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                        <div 
                          className="bg-gray-100 rounded d-flex align-items-center justify-content-center"
                          style={{ height: '200px', border: '1px solid #e0e0e0' }}
                        >
                          <img 
                            src={solarPanel.image3d} 
                            alt={solarPanel.name}
                            className="img-fluid"
                            style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              if (target.parentElement) {
                                target.parentElement.innerHTML = '<div class="text-muted text-center">图片</div>';
                              }
                            }}
                          />
                        </div>
                      </div>

                      {/* Right Side - Technical Parameters Table */}
                      <div className="col-lg-8 col-md-12">
                        <div className="table-responsive">
                          <table className="table table-bordered table-sm mb-0" style={{ minWidth: '100%' }}>
                            <thead>
                              <tr>
                                <th colSpan={2} className="text-center bg-primary text-white" style={{ padding: '8px', fontSize: '14px' }}>
                                  技术参数 / technical parameter
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="fw-bold" style={{ width: '30%', padding: '6px 8px', fontSize: '13px' }}>
                                  名称 / Name
                                </td>
                                <td style={{ padding: '6px 8px', fontSize: '13px' }}>
                                  {solarPanel.name} / {solarPanel.nameEn}
                                </td>
                              </tr>
                              <tr>
                                <td className="fw-bold" style={{ padding: '6px 8px', fontSize: '13px' }}>
                                  型号 / Model
                                </td>
                                <td style={{ padding: '6px 8px', fontSize: '13px' }}>{solarPanel.model}</td>
                              </tr>
                              <tr>
                                <td className="fw-bold" style={{ padding: '6px 8px', fontSize: '13px' }}>
                                  功率范围 / Power Range
                                </td>
                                <td style={{ padding: '6px 8px', fontSize: '13px' }}>
                                  {solarPanel.powerRange} / {solarPanel.powerRangeEn}
                                </td>
                              </tr>
                              <tr>
                                <td className="fw-bold" style={{ padding: '6px 8px', fontSize: '13px' }}>
                                  效率 / Efficiency
                                </td>
                                <td style={{ padding: '6px 8px', fontSize: '13px' }}>
                                  {solarPanel.efficiency} / {solarPanel.efficiencyEn}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="mt-3 text-end">
                          <Link href={`/products/${solarPanel.productId}`}>
                            <Button variant="outline" size="sm">
                              查看详情
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  // Special handling for 组件 category - show components catalog
  if (product.category === '组件') {
    return (
      <Layout title="组件 - 产品目录" description="查看我们的组件产品目录">
        {/* Breadcrumb */}
        <section className="pt-60 pb-20" style={{backgroundColor: '#f8f9fa'}}>
          <div className="container">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link href="/">主页</Link></li>
                <li className="breadcrumb-item"><Link href="/products">产品</Link></li>
                <li className="breadcrumb-item active" aria-current="page">组件</li>
              </ol>
            </nav>
          </div>
        </section>

        <section className="pt-20 pb-120">
          <div className="container">
            {/* Title Section */}
            <div className="row mb-20">
              <div className="col-12 text-center">
                <h1 className="text-2xl font-bold mb-0">镀镁铝锌支架介绍</h1>
              </div>
            </div>

            {/* Introduction Text */}
            <div className="row mb-20">
              <div className="col-12">
                <Card className="shadow-sm mb-0">
                  <CardContent className="p-3">
                    <div style={{ fontSize: '13px', lineHeight: '1.6' }}>
                      <div className="mb-2">
                        <h3 className="fw-bold mb-1" style={{ fontSize: '14px' }}>超强的耐腐蚀性</h3>
                        <p className="mb-0" style={{ fontSize: '13px' }}>
                        镀锌镁铝支架的表面呈特有的光滑、平坦和华丽的星花，它的耐腐蚀性主要来自铝的障碍层保护功能和锌的牺牲性保护功能，在同等条件下测试表面，镀镁铝锌支架的使用年限是镀锌板的5-10倍以上。                         </p>
                      </div>

                      <div className="mb-2">
                        <h3 className="fw-bold mb-1" style={{ fontSize: '14px' }}>热反射性</h3>
                        <p className="mb-0" style={{ fontSize: '13px' }}>
                        镀镁铝锌支架的热反射性很高，是镀锌钢板的两倍，适合用它来作隔热的材料和钢构的金属屋顶，可达到节能的效果。
                        </p>
                      </div>

                      <div className="mb-2">
                        <h3 className="fw-bold mb-1" style={{ fontSize: '14px' }}>耐热性</h3>
                        <p className="mb-0" style={{ fontSize: '13px' }}>
                        镀镁铝锌钢板可用于高达315°C的高温环境，普通镀锌钢板的使用环境不能超过230℃。
                        </p>
                      </div>

                      <div className="mb-2">
                        <h3 className="fw-bold mb-1" style={{ fontSize: '14px' }}>优良的加工性和耐损伤性</h3>
                        <p className="mb-0" style={{ fontSize: '13px' }}>
                        由于镁铝锌的镀层非常致密、光滑、镀层表面硬度(140-160HW)是普通镀锌的(55-65HW)的25倍，使其具有优良拉伸、冲压、折弯、接焊等加工性和卓越的耐刮伤性和耐磨性，所以在冷弯加工成型过程中不易损伤，成品表面更美观。                        </p>
                      </div>

                      <div className="mt-2 pt-2" style={{ borderTop: '1px solid #e0e0e0' }}>
                        <p className="mb-0 fw-semibold" style={{ fontSize: '13px' }}>
                          基于以上镀镁铝锌支架的特性，相比普通热镀锌钢板，AZ150镀镁铝锌具有更优的品质和更有利的成本，完全可以替代目前市场上可用的275g热镀锌产品。
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Components Catalog Title */}
            <div className="row mb-20">
              <div className="col-12 text-center">
                <h2 className="text-xl font-bold mb-0">组件产品目录</h2>
              </div>
            </div>

            <div className="space-y-4">
              {COMPONENTS.map((component, index) => (
                <Card key={component.id} className="shadow-md">
                  <CardContent className="p-4">
                    <div className="row align-items-center">
                      {/* Left Side - Single Image */}
                      <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                        <div 
                          className="bg-gray-100 rounded d-flex align-items-center justify-content-center"
                          style={{ height: '200px', border: '1px solid #e0e0e0' }}
                        >
                          <img 
                            src={component.image3d} 
                            alt={component.name}
                            className="img-fluid"
                            style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              if (target.parentElement) {
                                target.parentElement.innerHTML = '<div class="text-muted text-center">图片</div>';
                              }
                            }}
                          />
                        </div>
                      </div>

                      {/* Right Side - Technical Parameters Table */}
                      <div className="col-lg-8 col-md-12">
                        <div className="table-responsive">
                          <table className="table table-bordered table-sm mb-0" style={{ minWidth: '100%' }}>
                            <thead>
                              <tr>
                                <th colSpan={2} className="text-center bg-primary text-white" style={{ padding: '8px', fontSize: '14px' }}>
                                  技术参数 / technical parameter
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="fw-bold" style={{ width: '30%', padding: '6px 8px', fontSize: '13px' }}>
                                  名称 / Name
                                </td>
                                <td style={{ padding: '6px 8px', fontSize: '13px' }}>
                                  {component.name} / {component.nameEn}
                                </td>
                              </tr>
                              <tr>
                                <td className="fw-bold" style={{ padding: '6px 8px', fontSize: '13px' }}>
                                  型号 / Model
                                </td>
                                <td style={{ padding: '6px 8px', fontSize: '13px' }}>{component.model}</td>
                              </tr>
                              <tr>
                                <td className="fw-bold" style={{ padding: '6px 8px', fontSize: '13px' }}>
                                  材质 / Material
                                </td>
                                <td style={{ padding: '6px 8px', fontSize: '13px' }}>
                                  {component.material} / {component.materialEn}
                                </td>
                              </tr>
                              <tr>
                                <td className="fw-bold" style={{ padding: '6px 8px', fontSize: '13px' }}>
                                  表面处理 / Surface treatment
                                </td>
                                <td style={{ padding: '6px 8px', fontSize: '13px' }}>
                                  {component.surfaceTreatment} / {component.surfaceTreatmentEn}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout title={`${product.name} - 产品详情`} description={`查看 ${product.name} 的详细信息`}>
      {/* Breadcrumb */}
      <section className="pt-60 pb-20" style={{backgroundColor: '#f8f9fa'}}>
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link href="/">主页</Link></li>
              <li className="breadcrumb-item"><Link href="/products">产品</Link></li>
              <li className="breadcrumb-item active" aria-current="page">{product.name}</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Performance Banner */}
      {product.category === '光伏板' && (
        <PerformanceBanner 
          powerRange={getSolarPanelPerformance(product.id).powerRange}
          maxEfficiency={getSolarPanelPerformance(product.id).maxEfficiency}
        />
      )}

      <section className="pt-10 pb-10">
        <div className="container">
          <div className="row h-full w-full">
            {/* Left Sidebar - Categories (2 columns) */}
            <div className="col-lg-2 mb-10">
              <Card className="h-full shadow-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="text-primary text-lg font-semibold">产品分类</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {CATEGORIES.filter(c => c !== ALL).map((category) => (
                    <div key={category} className="space-y-3">
                      {/* Category Header */}
                      <div className="flex items-center justify-between">
                        <h3 className={`font-semibold text-base ${
                          product.category === category 
                            ? 'text-primary border-b-2 border-primary pb-1' 
                            : 'text-gray-700 hover:text-primary transition-colors'
                        }`}>
                          {category}
                        </h3>
                        {product.category === category && (
                          <Badge variant="secondary" className="text-xs">当前</Badge>
                        )}
                      </div>
                      
                      {/* Subcategories */}
                      <div className="ml-2 space-y-2">
                        {category === 'Steel' && (
                          <>
                            <Link 
                              href="/products/p1"
                              className={`block text-sm px-2 py-1 rounded transition-all duration-200 ${
                                product.id === 'p1'
                                  ? 'text-primary bg-primary/10 font-medium'
                                  : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                              }`}
                            >
                              热镀锌钢材产品
                            </Link>
                          </>
                        )}
                        {category === 'Solar Frame' && (
                          <>
                            {[
                              '集中式地面支架系统',
                              '螺旋地桩支架系统',
                              '圆管立柱支架系统',
                              '彩钢屋顶支架系统',
                              '跟踪式支架系统',
                              '固定式支架系统'
                            ].map((subcategory) => (
                              <Link 
                                key={subcategory}
                                href="/products?category=Solar Frame" 
                                className="block text-sm text-gray-600 hover:text-primary hover:bg-gray-50 px-2 py-1 rounded transition-all duration-200"
                              >
                                {subcategory}
                              </Link>
                            ))}
                          </>
                        )}
                        {category === '光伏板' && (
                          <>
                            <Link 
                              href="/products/p14"
                              className={`block text-sm px-2 py-1 rounded transition-all duration-200 ${
                                product.id === 'p14'
                                  ? 'text-primary bg-primary/10 font-medium'
                                  : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                              }`}
                            >
                              光伏板
                            </Link>
                            {PRODUCTS.filter(p => p.category === '光伏板' && p.id !== 'p14').map((solarProduct) => (
                              <Link 
                                key={solarProduct.id}
                                href={`/products/${solarProduct.id}`}
                                className={`block text-sm px-2 py-1 rounded transition-all duration-200 ml-3 ${
                                  product.id === solarProduct.id
                                    ? 'text-primary bg-primary/10 font-medium'
                                    : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                                }`}
                              >
                                {solarProduct.name}
                              </Link>
                            ))}
                          </>
                        )}
                        {category === '组件' && (
                          <>
                            <Link 
                              href="/products/p20"
                              className={`block text-sm px-2 py-1 rounded transition-all duration-200 ${
                                product.id === 'p20'
                                  ? 'text-primary bg-primary/10 font-medium'
                                  : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                              }`}
                            >
                              组件
                            </Link>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
            <div className="col-lg-10">
              <div className="row mb-4">
                <div className="col-lg-12">
                  <div className="space-y-6">
                    <Card>
                      <CardHeader>
                        <div className="flex justify-between items-center">
                          <CardTitle className="text-2xl">{product.name}</CardTitle>
                          {product.category === '光伏板' && (
                            <Link href="/compare">
                              <Button variant="outline" size="sm">
                                产品对比
                              </Button>
                            </Link>
                          )}
                        </div>
                        </CardHeader>
                        <CardContent className="container">
                          <div className="row">
                            <div className="col-lg-2 flex justify-center items-center">
                              <img src={product.banner || product.image} alt={product.name} className="w-1/2" />
                            </div>
                            
                            <div className="col-lg-6">
                              {product.category === '光伏板' && (getProductSpecificationsById(product.id)?.features || getProductSpecifications(product.category)?.features) && (
                                <ProductFeatures features={(getProductSpecificationsById(product.id) || getProductSpecifications(product.category))!.features!} />
                              )}
                            </div>
                            <div className="col-lg-4 flex justify-center items-center vertical-align-middle">
                              <img src={product.image} alt={product.name} className="w-full" />
                            </div>
                          </div>
                        </CardContent>
                    </Card>
                  </div>
                
                </div>
              </div>
              <div className="row" style={{display: 'flex', alignItems: 'stretch'}}>            
                <div className="col-lg-7" style={{display: 'flex', flexDirection: 'column'}}>
                  <div style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
                    <ProductSpecificationsComponent 
                      specifications={getProductSpecificationsById(product.id) || getProductSpecifications(product.category) || {}} 
                      productCategory={product.category} 
                    />
                  </div>
                </div>
                <div className="col-lg-5" style={{display: 'flex', flexDirection: 'column'}}>
                  <div style={{flex: 1, display: 'flex', flexDirection: 'column'}} className="space-y-6">

                    {/* Charts for 光伏板 */}
                    {product.category === '光伏板' && <SolarPanelCharts />}

                    {/* More Products for other categories */}
                    {product.category !== '光伏板' && product.category !== '组件' && product.category !== 'Steel' && (
                      <Card>
                        <CardHeader>
                          <CardTitle>更多产品</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-2 gap-4">
                            {PRODUCTS.filter(x => x.id !== product.id).slice(0, 6).map(x => (
                              <Link key={x.id} href={`/products/${x.id}`} className="block">
                                <div className="space-y-2">
                                  <img src={x.image} alt={x.name}
                                        className="w-full h-20 object-cover"/>
                                  <p className="text-sm text-center">{x.name}</p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
