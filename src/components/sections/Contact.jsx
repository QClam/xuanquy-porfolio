import React, { useState } from "react";
import { RevealOnScroll } from "./RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
})

  const handleSubmit = (e) => {
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    e.preventDefault();

    emailjs
      .sendForm(serviceID, templateID, e.target, publicKey)
      .then((result) => {
        alert("Tin nhắn của bạn đã được gửi thành công!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch(() => alert("Đã có lỗi xảy ra, vui lòng thử lại sau!"));
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex justify-center items-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-150">
          <h2 className="text-3xl text-center font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Liên hệ với tôi
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:bg-blue-500/5 focus:border-blue-500"
                placeholder="Họ và tên"
              />
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:bg-blue-500/5 focus:border-blue-500"
                placeholder="Email@gmail.com"
              />
            </div>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:bg-blue-500/5 focus:border-blue-500"
                placeholder="Hãy để lại tin nhắn của bạn ở đây..."
              />
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blue-500 py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-1 "
            >
              Gửi
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
