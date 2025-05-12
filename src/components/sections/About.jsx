import React from "react";
import { RevealOnScroll } from "./RevealOnScroll";

export const About = () => {
  const frontEndSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "ReactJS",
    "MUI",
    "Tailwind CSS",
    "Bootstrap",
    "Redux",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex justify-center items-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl text-center font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Giới thiệu bản thân
          </h2>

          <div className="rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all hover:shadow-lg hover:border-blue-500/30 bg-white/5">
            <p className="text-gray-300 mb-6">
              Là một lập trình viên trẻ tuổi đam mê muốn học hỏi và phát triển
              bản thân, tôi đã có 1 năm kinh nghiệm làm việc với ReactJS và
              NodeJS.
            </p>

            <div className="flex justify-center items-center">
              <div className="rounded-xl p-6 transition-all hover:-translate-y-1">
                <h3 className="text-center font-bold text-shadow-indigo-50 mb-4">
                  Frontend
                </h3>
                <div className="grid grid-cols-4 gap-4">
                  {frontEndSkills.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-500 text-shadow-white py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(58,130,224,0.2)] transition flex items-center justify-center"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 border border-white/10 hover:-translate-y-1 transition-all hover:shadow-lg hover:border-blue-500/30  bg-white/5 rounded-xl">
              <h3 className="font-bold text-xl mb-4"> &#x1F3EB; Học vấn</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>Cử nhân ngành Kỹ thuật phần mềm</strong> <br />
                  Đại học FPT (2020 - 2024)
                </li>
                <li>
                  Môn học:
                  <ul className="list-[circle] list-inside text-gray-300 ml-3 mt-1">
                    <li>
                      <strong>Nguyên tắc cơ bản trong lập trình với C</strong>
                    </li>
                    <li>
                      <strong>Lập trình hướng đối tượng với Java</strong>
                    </li>
                    <li>
                      <strong>Thiết kế web bằng HTML và CSS</strong>
                    </li>
                    <li>
                      <strong>Phát triển web với React</strong>
                    </li>
                    <li>
                      <strong>
                        Phát triển ứng dụng Mobile với React Native
                      </strong>
                    </li>
                    <li>
                      <strong>
                        Phát triển Server-Side với Nodejs, Express và MongoDB
                      </strong>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="p-6 border border-white/10 hover:-translate-y-1 transition-all hover:shadow-lg hover:border-blue-500/30  bg-white/5 rounded-xl">
              <h3 className="font-bold text-xl mb-4">
                &#128188; Kinh nghiệm làm việc
              </h3>
              <div className="space-y-4 mt-3">
                <div className="flex items-center space-x-2">
                  <p>
                    <span className="text-blue-400 font-bold">
                      Thực tập sinh
                    </span>{" "}
                    tại FPT Software (09/2023 - 12/2023)
                  </p>
                </div>
                <ul className="list-[circle] list-inside text-gray-300 ml-3 mt-1">
                  <li>
                    Tham gia dự án phát triển trang web FAMS( FPT Academic
                    Management System) từ thiết kế ban đầu cho đến hoàn thiện,
                    tối ưu hóa tất cả khả năng tương thích trên nhiều trình
                    duyệt và đa nền tảng.
                  </li>
                  <li>
                    Sử dụng ReactJs và thư viện Boostrap để xây dựng UI, quản lý
                    state một cách chặt chẽ bằng Redux.
                  </li>
                  <li>
                    Hợp tác chặt chẽ với các lập trình viên Back-end để đáp ứng
                    các yêu cầu, mục tiêu và chức năng mong muốn.
                  </li>
                  <li>
                    Báo cáo tiến độ dự án định kỳ với Mentor. Đảm bảo tiến độ dự
                    án theo mô hình Agile.
                  </li>
                  <li>
                    Hỗ trợ các thành viên trong nhóm với các chức năng phức tạp,
                    tham gia nhận xét, đánh giá source code của các thành viên
                    trong nhóm.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
