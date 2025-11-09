import React, {useMemo, useState} from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import {ALL, CATEGORIES, PRODUCTS} from '../types/products';

export default function ProductsPage() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<string>(ALL);
  const [sort, setSort] = useState<'relevance' | 'name'>('relevance');
  const [selectedProducts, setSelectedProducts] = useState<Set<string>>(new Set());

  const filtered = useMemo(() => {
    // Filter out individual solar panels (p15-p19) from display, but keep p14 (main entrance)
    let items = PRODUCTS.filter(p => {
      // Exclude individual solar panels from the listing
      if (p.category === '光伏板' && p.id !== 'p14') {
        return false;
      }
      return category === ALL || p.category === category;
    });
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      items = items.filter(p => p.name.toLowerCase().includes(q));
    }
    if (sort === 'name') items = [...items].sort((a, b) => a.name.localeCompare(b.name));
    return items;
  }, [query, category, sort]);

  const handleInquiryToggle = (productId: string) => {
    const newSelected = new Set(selectedProducts);
    if (newSelected.has(productId)) {
      newSelected.delete(productId);
    } else {
      newSelected.add(productId);
    }
    setSelectedProducts(newSelected);
  };

  return (
    <Layout title="产品列表 - 元鑫荣华贸易有限公司" description="查看我们的钢材与光伏系列产品列表">
      <section className="page-header pt-120 pb-90" style={{backgroundImage: 'url(/static/image/slider_bg.png)'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h1>产品列表</h1>
              <p>支持分类筛选与搜索</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-30 pb-120">
        <div className="container">
          <div className="row align-items-end mb-30">
            <div className="col-lg-4 col-md-6 mb-15">
              <label className="d-block mb-10">搜索</label>
              <input
                type="text"
                className="form-control"
                placeholder="输入产品名称..."
                value={query}
                onChange={e => setQuery(e.target.value)}
              />
            </div>
            <div className="col-lg-4 col-md-6 mb-15">
              <label className="d-block mb-10">分类</label>
              <select className="form-control" value={category} onChange={e => setCategory(e.target.value)}>
                {CATEGORIES.map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            <div className="col-lg-4 col-md-6 mb-15">
              <label className="d-block mb-10">排序</label>
              <select className="form-control" value={sort} onChange={e => setSort(e.target.value as any)}>
                <option value="relevance">相关度</option>
                <option value="name">产品名称</option>
              </select>
            </div>
          </div>

          <div className="row">
            {filtered.map(p => (
              <div key={p.id} className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-30">
                <div className="services-box-05 h-100 d-flex flex-column">
                  <div className="services-icon-05 hover-zoomin">
                    <Link href={`/products/${p.id}`} className="d-block">
                      <img src={p.image} alt={p.name} style={{width: '100%', height: '220px', objectFit: 'cover'}}/>
                    </Link>
                  </div>
                  <div className="services-content-05 flex-grow">
                    <h4 className="mb-10">{p.name}</h4>
                    <div className="mb-10">
                      <small className="text-muted d-block">安装地点: 地面/屋面</small>
                      <small className="text-muted d-block">主要材质: 热镀锌钢材</small>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={`inquiry-${p.id}`}
                        checked={selectedProducts.has(p.id)}
                        onChange={() => handleInquiryToggle(p.id)}
                      />
                      <label className="form-check-label" htmlFor={`inquiry-${p.id}`}>
                        加入询价
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {filtered.length === 0 && (
              <div className="col-12 text-center py-60">未找到匹配的产品</div>
            )}
          </div>

          {selectedProducts.size > 0 && (
            <div className="row mt-30">
              <div className="col-12">
                <div className="d-flex justify-content-between align-items-center p-20"
                     style={{backgroundColor: '#f8f9fa', borderRadius: '8px'}}>
                  <div className="d-flex align-items-center">
                    <span className="me-3">已选择 {selectedProducts.size} 个产品</span>
                    {Array.from(selectedProducts).slice(0, 3).map(id => {
                      const product = PRODUCTS.find(p => p.id === id);
                      return product ? (
                        <div key={id} className="d-flex align-items-center me-2">
                          <img src={product.image} alt={product.name}
                               style={{width: '40px', height: '40px', objectFit: 'cover', borderRadius: '4px'}}/>
                          <span className="ms-2" style={{fontSize: '12px'}}>{product.name}</span>
                        </div>
                      ) : null;
                    })}
                    {selectedProducts.size > 3 && <span className="text-muted">...</span>}
                  </div>
                  <button className="btn btn-primary">联系供应商</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}


