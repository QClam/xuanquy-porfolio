import React from "react";
import { projects } from "../../data/Projects";
import { RevealOnScroll } from "./RevealOnScroll";

export const Project = () => {
  return (
    <section id="projects" className="min-h-screen px-4 py-20">
      <RevealOnScroll>
        <h2 className="text-3xl text-center font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          Các dự án đã thực hiện
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:border-blue-500/30 flex flex-col justify-between h-full"
              key={index}
            >
              <h3 className="font-semibold text-xl text-blue-100 mb-3">
                {project.projectName}
              </h3>
              <p className="text-sm text-gray-300 mb-2">
                <strong>Vị trí:</strong> {project.position}
              </p>
              <p className="text-sm text-gray-300 mb-2">
                <strong>Số lượng thành viên:</strong> {project.member}
              </p>
              <p className="text-sm text-gray-300 mb-2">
                <strong>Mô tả:</strong> {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techInUse.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-500 text-white py-1 px-3 rounded-full text-xs hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(58,130,224,0.2)] transition flex items-center justify-center"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.link && (
                <div className="mt-auto pt-2">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-sm text-blue-400 hover:underline hover:text-blue-300 transition-colors"
                  >
                    Xem dự án &rarr;
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </RevealOnScroll>
    </section>
  );
};
