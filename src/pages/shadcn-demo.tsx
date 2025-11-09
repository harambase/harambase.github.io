import React from 'react';
import Layout from '../components/Layout';
import ShadcnDemo from '../components/ShadcnDemo';

const ShadcnDemoPage: React.FC = () => {
  return (
    <Layout title="shadcn/ui Demo - 元鑫荣华贸易有限公司" description="Demo of shadcn/ui components">
      <section className="pt-120 pb-120">
        <ShadcnDemo />
      </section>
    </Layout>
  );
};

export default ShadcnDemoPage;
