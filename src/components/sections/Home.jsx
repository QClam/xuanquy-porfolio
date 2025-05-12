import React from "react";
import { RevealOnScroll } from "./RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            Xin chào, tôi là Xuân Quý
          </h1>

          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            Với kinh nghiệm được trau dồi từ môi trường đại học, tôi mong muốn ứng tuyển vào
            Công ty để có thể áp dụng những kiến thức, kinh nghiệm
            lập trình của bản thân để nâng cấp sản phẩm và mang lại những giá
            trị hữu ích cho doanh nghiệp. Đồng thời, mục tiêu phát triển trong
            vòng 2 năm tới của tôi sẽ trở thành một lập trình viên giỏi.
          </p>

          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white px-6 py-3 rounded font-medium relative shadow-lg overflow-hidden hover:-translate-y-1 hover:bg-blue-600 transition duration-300"
            >
              Xem dự án
            </a>
            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 px-6 py-3 rounded font-medium transition-all relative shadow-lg overflow-hidden hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:bg-blue-500/10 duration-300"
            >
              Liên hệ
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
