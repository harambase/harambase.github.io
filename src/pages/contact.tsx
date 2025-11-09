import React, {useState} from 'react';
import Layout from '../components/Layout';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <Layout title="联系我们 - 元鑫荣华贸易有限公司" description="联系我们获取专业的钢材和光伏支架服务">
      {/* Page Header */}
      <section className="page-header pt-120 pb-120" style={{backgroundImage: 'url(/static/image/slider_bg.png)'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-header-content text-center">
                <h1>联系我们</h1>
                <p>我们很乐意为您提供专业的咨询服务</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="contact-info pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="contact-info-item text-center">
                <div className="contact-icon">
                  <img src="/static/picture/phone-call.png" alt="电话" width={60} height={60}/>
                </div>
                <h4>电话咨询</h4>
                <p>028-65520978</p>
                <p>+86 1528351812</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="contact-info-item text-center">
                <div className="contact-icon">
                  <img src="/static/picture/mailing.png" alt="邮箱" width={60} height={60}/>
                </div>
                <h4>邮箱联系</h4>
                <p>info@yxrhgt.com</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="contact-info-item text-center">
                <div className="contact-icon">
                  <img src="/static/picture/fot-icon2.png" alt="地址" width={60} height={60}/>
                </div>
                <h4>公司地址</h4>
                <p>中国四川省成都市量力钢材城<br/>D区5幢22号</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form-area pt-120 pb-120" style={{backgroundColor: '#f8f9fa'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="section-title text-center mb-50">
                <h2>发送消息</h2>
                <p>请填写以下表单，我们会尽快与您联系</p>
              </div>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        placeholder="您的姓名"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        placeholder="您的邮箱"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="tel"
                        name="phone"
                        placeholder="您的电话"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <select name="service" required>
                        <option value="">选择服务类型</option>
                        <option value="steel">钢材销售</option>
                        <option value="solar">光伏支架</option>
                        <option value="consultation">咨询服务</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        placeholder="您的消息"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-12 text-center">
                    <button type="submit" className="btn btn-primary">
                      发送消息
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="map-container">
                <img src="/static/picture/map.png" alt="地图" width={1200} height={400}/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
