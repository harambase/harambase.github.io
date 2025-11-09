import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import Link from 'next/link';
import { getProductById, PRODUCTS } from '../types/products';
import { getProductSpecificationsById } from '../types/product-specs';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';

interface ComparisonProduct {
  id: string;
  name: string;
  image: string;
  powerRange: string;
  maxEfficiency: string;
  specifications: any;
}

const ComparePage: React.FC = () => {
  const router = useRouter();
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [comparisonProducts, setComparisonProducts] = useState<ComparisonProduct[]>([]);

  // Get solar panel products
  const solarPanels = PRODUCTS.filter(p => p.category === '光伏板' && p.id !== 'p14');

  // Helper function to get power range and efficiency
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

  // Update comparison products when selection changes
  useEffect(() => {
    const products = selectedProducts.map(id => {
      const product = getProductById(id);
      if (!product) return null;
      
      const performance = getSolarPanelPerformance(id);
      const specifications = getProductSpecificationsById(id);
      
      return {
        id,
        name: product.name,
        image: product.image,
        powerRange: performance.powerRange,
        maxEfficiency: performance.maxEfficiency,
        specifications
      };
    }).filter(Boolean) as ComparisonProduct[];
    
    setComparisonProducts(products);
  }, [selectedProducts]);

  const handleProductSelect = (productId: string) => {
    if (selectedProducts.includes(productId)) {
      setSelectedProducts(selectedProducts.filter(id => id !== productId));
    } else if (selectedProducts.length < 3) {
      setSelectedProducts([...selectedProducts, productId]);
    }
  };

  const removeProduct = (productId: string) => {
    setSelectedProducts(selectedProducts.filter(id => id !== productId));
  };

  const getSpecValue = (specs: any, paramName: string) => {
    if (!specs?.electrical?.stc) return 'N/A';
    
    const param = specs.electrical.stc.parameters.find((p: any) => p.parameter.includes(paramName));
    if (!param || typeof param.value !== 'string') return 'N/A';
    
    const values = param.value.split(' / ');
    return `${values[0]}~${values[values.length - 1]}`;
  };

  const getMechanicalSpec = (specs: any, paramName: string) => {
    if (!specs?.mechanical) return 'N/A';
    
    const param = specs.mechanical.parameters.find((p: any) => p.parameter.includes(paramName));
    return param ? param.value : 'N/A';
  };

  return (
    <Layout title="产品对比" description="对比不同太阳能板产品的规格和性能">
      {/* Header */}
      <section className="pt-60 pb-20" style={{backgroundColor: '#f8f9fa'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="text-3xl font-bold mb-4">太阳能板产品对比</h1>
              <p className="text-gray-600 mb-6">选择最多3款产品进行详细对比</p>
              
              {/* Product Selection */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {solarPanels.map((panel) => (
                  <Card 
                    key={panel.id} 
                    className={`cursor-pointer transition-all duration-200 ${
                      selectedProducts.includes(panel.id) 
                        ? 'ring-2 ring-blue-500 bg-blue-50' 
                        : 'hover:shadow-md'
                    }`}
                    onClick={() => handleProductSelect(panel.id)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <img src={panel.image} alt={panel.name} className="w-16 h-16 object-cover rounded" />
                        <div className="flex-1">
                          <h3 className="font-semibold text-sm">{panel.name}</h3>
                          <p className="text-xs text-gray-500">{getSolarPanelPerformance(panel.id).powerRange}</p>
                        </div>
                        {selectedProducts.includes(panel.id) && (
                          <Badge variant="default" className="text-xs">已选择</Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {selectedProducts.length > 0 && (
                <div className="flex justify-center">
                  <Button 
                    onClick={() => setSelectedProducts([])}
                    variant="outline"
                    className="mr-4"
                  >
                    清空选择
                  </Button>
                  <Button 
                    onClick={() => router.push('/products')}
                    variant="default"
                  >
                    查看所有产品
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      {comparisonProducts.length > 0 && (
        <section className="pt-10 pb-20">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">产品规格对比</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left p-4 font-semibold bg-gray-50">规格</th>
                            {comparisonProducts.map((product) => (
                              <th key={product.id} className="text-center p-4 font-semibold bg-gray-50 min-w-[200px]">
                                <div className="space-y-2">
                                  <img src={product.image} alt={product.name} className="w-20 h-20 mx-auto object-cover rounded" />
                                  <h3 className="font-semibold text-sm">{product.name}</h3>
                                  <Button 
                                    variant="outline" 
                                    size="sm"
                                    onClick={() => removeProduct(product.id)}
                                    className="text-xs"
                                  >
                                    移除
                                  </Button>
                                </div>
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {/* Power Range */}
                          <tr className="border-b">
                            <td className="p-4 font-medium">功率范围</td>
                            {comparisonProducts.map((product) => (
                              <td key={product.id} className="p-4 text-center">
                                <span className="text-lg font-bold text-blue-600">{product.powerRange}</span>
                              </td>
                            ))}
                          </tr>

                          {/* Max Efficiency */}
                          <tr className="border-b">
                            <td className="p-4 font-medium">最高效率</td>
                            {comparisonProducts.map((product) => (
                              <td key={product.id} className="p-4 text-center">
                                <span className="text-lg font-bold text-green-600">{product.maxEfficiency}</span>
                              </td>
                            ))}
                          </tr>

                          {/* STC Power */}
                          <tr className="border-b">
                            <td className="p-4 font-medium">STC 额定功率</td>
                            {comparisonProducts.map((product) => (
                              <td key={product.id} className="p-4 text-center">
                                {getSpecValue(product.specifications, '额定峰值功率')}
                              </td>
                            ))}
                          </tr>

                          {/* STC Voltage */}
                          <tr className="border-b">
                            <td className="p-4 font-medium">STC 额定电压</td>
                            {comparisonProducts.map((product) => (
                              <td key={product.id} className="p-4 text-center">
                                {getSpecValue(product.specifications, '额定峰值电压')}
                              </td>
                            ))}
                          </tr>

                          {/* STC Current */}
                          <tr className="border-b">
                            <td className="p-4 font-medium">STC 额定电流</td>
                            {comparisonProducts.map((product) => (
                              <td key={product.id} className="p-4 text-center">
                                {getSpecValue(product.specifications, '额定峰值电流')}
                              </td>
                            ))}
                          </tr>

                          {/* Open Circuit Voltage */}
                          <tr className="border-b">
                            <td className="p-4 font-medium">开路电压</td>
                            {comparisonProducts.map((product) => (
                              <td key={product.id} className="p-4 text-center">
                                {getSpecValue(product.specifications, '开路电压')}
                              </td>
                            ))}
                          </tr>

                          {/* Short Circuit Current */}
                          <tr className="border-b">
                            <td className="p-4 font-medium">短路电流</td>
                            {comparisonProducts.map((product) => (
                              <td key={product.id} className="p-4 text-center">
                                {getSpecValue(product.specifications, '短路电流')}
                              </td>
                            ))}
                          </tr>

                          {/* BNPI Power */}
                          <tr className="border-b">
                            <td className="p-4 font-medium">BNPI 额定功率</td>
                            {comparisonProducts.map((product) => (
                              <td key={product.id} className="p-4 text-center">
                                {product.specifications?.electrical?.bnpi ? 
                                  getSpecValue(product.specifications, '额定峰值功率') : 'N/A'}
                              </td>
                            ))}
                          </tr>

                          {/* Temperature Coefficient */}
                          <tr className="border-b">
                            <td className="p-4 font-medium">功率温度系数</td>
                            {comparisonProducts.map((product) => (
                              <td key={product.id} className="p-4 text-center">
                                {product.specifications?.temperature?.parameters.find((p: any) => 
                                  p.parameter.includes('额定功率温度系数'))?.value || 'N/A'}
                              </td>
                            ))}
                          </tr>

                          {/* Dimensions */}
                          <tr className="border-b">
                            <td className="p-4 font-medium">组件尺寸</td>
                            {comparisonProducts.map((product) => (
                              <td key={product.id} className="p-4 text-center">
                                {getMechanicalSpec(product.specifications, '组件外形尺寸')}
                              </td>
                            ))}
                          </tr>

                          {/* Weight */}
                          <tr className="border-b">
                            <td className="p-4 font-medium">组件重量</td>
                            {comparisonProducts.map((product) => (
                              <td key={product.id} className="p-4 text-center">
                                {getMechanicalSpec(product.specifications, '组件重量')}
                              </td>
                            ))}
                          </tr>

                          {/* Cell Type */}
                          <tr className="border-b">
                            <td className="p-4 font-medium">电池片类型</td>
                            {comparisonProducts.map((product) => (
                              <td key={product.id} className="p-4 text-center">
                                {getMechanicalSpec(product.specifications, '电池片')}
                              </td>
                            ))}
                          </tr>

                          {/* Max System Voltage */}
                          <tr className="border-b">
                            <td className="p-4 font-medium">最大系统电压</td>
                            {comparisonProducts.map((product) => (
                              <td key={product.id} className="p-4 text-center">
                                {product.specifications?.operating?.parameters.find((p: any) => 
                                  p.parameter.includes('最大系统电压'))?.value || 'N/A'}
                              </td>
                            ))}
                          </tr>

                          {/* Bifacial Factor */}
                          <tr className="border-b">
                            <td className="p-4 font-medium">双面系数</td>
                            {comparisonProducts.map((product) => (
                              <td key={product.id} className="p-4 text-center">
                                {product.specifications?.operating?.parameters.find((p: any) => 
                                  p.parameter.includes('双面系数'))?.value || 'N/A'}
                              </td>
                            ))}
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Empty State */}
      {comparisonProducts.length === 0 && (
        <section className="pt-20 pb-20">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="py-20">
                  <h2 className="text-2xl font-bold mb-4">选择产品进行对比</h2>
                  <p className="text-gray-600 mb-8">从上方选择最多3款太阳能板产品进行详细对比</p>
                  <Link href="/products">
                    <Button variant="default">浏览所有产品</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default ComparePage;

