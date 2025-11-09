import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { ProductFeature } from '../types/product-specs';

interface ProductFeaturesProps {
  features: ProductFeature[];
}

const ProductFeatures: React.FC<ProductFeaturesProps> = ({ features }) => {
  if (!features || features.length === 0) return null;


  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>特点</TableHead>
          <TableHead>描述</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {features.map((feature, index) => (
          <TableRow key={index} className="hover:bg-gray-50 transition-colors h-8 py-2">
             <TableCell className="font-semibold text-sm h-8 py-2">
                 {feature.title === '认证' ? (
                     <div className="space-y-2">
                       <div>{feature.title}</div>
                       <div>
                         <img src="/static/picture/ce.svg" alt="CE Certification" className="h-8 w-auto" />
                         <img src="/static/picture/cqc.png" alt="CQC Certification" className="h-12 w-auto" />
                       </div>
                     </div>
                   ):(
                     <>{feature.title}</>
                   )}
             </TableCell>
                <TableCell className="text-sm text-muted-foreground h-8 py-2">
                  <div className="whitespace-pre-line">
                    {feature.description}
                  </div>
                  
                </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ProductFeatures;

