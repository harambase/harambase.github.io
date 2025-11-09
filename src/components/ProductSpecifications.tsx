import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Divider } from './ui/divider';
import { ProductSpecifications } from '../types/product-specs';

interface ProductSpecificationsProps {
  specifications: ProductSpecifications;
  productCategory: string;
}

const ProductSpecificationsComponent: React.FC<ProductSpecificationsProps> = ({ 
  specifications, 
  productCategory 
}) => {
  const renderSpecificationTable = (table: any) => {
    if (table.multiColumn && table.columns) {
      return (
        <Table>
          <TableHeader>
            <TableRow className="h-8">
              <TableHead className="whitespace-nowrap py-2">参数</TableHead>
              {table.columns.map((column: string, index: number) => (
                <TableHead key={index} className="whitespace-nowrap py-2 text-center">{column}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {table.parameters.map((param: any, index: number) => {
              const values = param.value.split(' / ');
              return (
                <TableRow key={index} className="h-8">
                  <TableCell className="font-medium py-2">{param.parameter}</TableCell>
                  {values.map((value: string, valueIndex: number) => (
                    <TableCell key={valueIndex} className="py-2 text-center">{value}</TableCell>
                  ))}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      );
    }

    return (
      <Table>
        <TableHeader>
          <TableRow className="h-8">
            <TableHead className="whitespace-nowrap py-2">参数</TableHead>
            <TableHead className="whitespace-nowrap py-2">数值</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {table.parameters.map((param: any, index: number) => (
            <TableRow key={index} className="h-8">
              <TableCell className="font-medium py-2">{param.parameter}</TableCell>
              <TableCell className="py-2">
                {Array.isArray(param.value) ? (
                  <div className="space-y-1">
                    {param.value.map((subParam: any, subIndex: number) => (
                      <div key={subIndex} className="text-sm">
                        <span className="font-medium">{subParam.parameter}:</span> {subParam.value}
                      </div>
                    ))}
                  </div>
                ) : (
                  param.value
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  };

  const renderElectricalSpecs = () => {
    if (!specifications.electrical) return null;

    return (
      <div className="space-y-6">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="stc">
            <AccordionTrigger className="text-left py-2 px-3 text-sm">
              <div>
                <div className="font-medium text-sm">{specifications.electrical.stc.title}</div>
                <div className="text-xs text-muted-foreground font-normal">
                  光照强度：1000W/m²，电池温度：25℃，大气质量：1.5
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="border-0 py-2">
              {renderSpecificationTable(specifications.electrical.stc)}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="bnpi">
            <AccordionTrigger className="text-left py-2 px-3 text-sm">
              <div>
                <div className="font-medium text-sm">{specifications.electrical.bnpi.title}</div>
                <div className="text-xs text-muted-foreground font-normal">
                  光照强度：正面1000W/m²，背面135W/m²，环境温度25°C，大气质量1.5
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="border-t-0 py-2">
              {renderSpecificationTable(specifications.electrical.bnpi)}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    );
  };

  const renderTemperatureAndOperating = () => {
    if (!specifications.temperature && !specifications.operating) return null;

    // Combine temperature and operating parameters into one table
    const combinedParameters = [
      ...(specifications.temperature?.parameters || []),
      ...(specifications.operating?.parameters || [])
    ];

    return (
    <Table>
        <TableHeader>
        <TableRow className="h-8">
            <TableHead className="whitespace-nowrap py-2">参数</TableHead>
            <TableHead className="whitespace-nowrap py-2">数值</TableHead>
        </TableRow>
        </TableHeader>
        <TableBody>
        {combinedParameters.map((param: any, index: number) => (
            <TableRow key={index} className="h-8">
            <TableCell className="font-medium py-2">{param.parameter}</TableCell>
            <TableCell className="py-2">
              {Array.isArray(param.value) ? (
                <div className="space-y-1">
                  {param.value.map((subParam: any, subIndex: number) => (
                    <div key={subIndex} className="text-sm">
                      <span className="font-medium">{subParam.parameter}:</span> {subParam.value}
                    </div>
                  ))}
                </div>
              ) : (
                param.value
              )}
            </TableCell>
            </TableRow>
        ))}
        </TableBody>
    </Table>
    );
  };

  return (
    <Card className="bg-white/95 backdrop-blur-sm shadow-displacement">
      <CardHeader>
        <CardTitle>
          {productCategory === '太阳能板' ? '产品规格' : 
           productCategory === 'Steel' ? '产品参数' : '系统特点'}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Mechanical and Operating Parameters */}
        {(specifications.mechanical || specifications.packaging || (specifications.operating && productCategory !== '太阳能板')) && (
          <div className="space-y-4">
            {specifications.mechanical && 
              renderSpecificationTable(specifications.mechanical)}
            
            {specifications.packaging && 
              renderSpecificationTable(specifications.packaging)}
            
            {specifications.operating && productCategory !== '太阳能板' && 
              renderSpecificationTable(specifications.operating)}
          </div>
        )}

        {/* Divider between sections */}
        {(specifications.mechanical || specifications.packaging) && 
         productCategory === '太阳能板' && specifications.electrical && (
          <Divider />
        )}

        {/* Electrical Performance Parameters */}
        {productCategory === '太阳能板' && specifications.electrical && (
          <div>
            <h3 className="text-lg font-semibold mb-3">电气性能参数</h3>
            <div className="text-sm text-muted-foreground mb-4">
              标准测试条件（STC）和双面标称功率输入条件（BNPI）下的性能参数对比
            </div>
            {renderElectricalSpecs()}
          </div>
        )}

        {/* Divider between sections */}
        {productCategory === '太阳能板' && specifications.electrical && 
         (specifications.temperature || specifications.operating) && (
          <Divider />
        )}

        {/* Temperature Coefficients and Operating Parameters */}
        {productCategory === '太阳能板' && (specifications.temperature || specifications.operating) && (
          <div>
            <h3 className="text-lg font-semibold mb-3">温度系数与工作参数</h3>
            {renderTemperatureAndOperating()}
          </div>
        )}

        {/* Divider before notes */}
        {specifications.notes && (
          <Divider />
        )}

        {/* Notes */}
        {specifications.notes && (
          <div className="text-sm text-muted-foreground">
            <p>{specifications.notes}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ProductSpecificationsComponent;
