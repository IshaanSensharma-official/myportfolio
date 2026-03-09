    import React from "react";
    import { SkillsInfo } from "../../constants";

    const Skills = () => {
    return (
        <section id="skills" className="py-24">
        <div className="max-w-[1200px] mx-auto px-6">

            {/* Section Title */}
            <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white">SKILLS</h2>
            <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-3"></div>
            <p className="text-gray-400 mt-4 text-lg font-semibold">
                A collection of my technical skills and expertise honed through
                various projects and experiences
            </p>
            </div>

            {/* Skills Grid */}
            <div className="grid md:grid-cols-2 gap-8">
            {SkillsInfo.map((category) => (
                <div
                key={category.title}
                className="bg-[#111128] p-8 rounded-2xl border border-[rgba(139,92,246,0.25)] shadow-[0_0_20px_1px_rgba(130,69,236,0.15)] hover:shadow-[0_0_30px_2px_rgba(130,69,236,0.25)] transition-shadow duration-300"
                >
                {/* Category Title */}
                <h3 className="text-xl text-gray-200 font-semibold text-center mb-6">
                    {category.title}
                </h3>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-3 justify-center">
                    {category.skills.map((skill) => (
                    <div
                        key={skill.name}
                        className="flex items-center gap-2 bg-[#0d0d20] border border-[rgba(139,92,246,0.3)] rounded-xl px-4 py-2 hover:border-[#8245ec] hover:bg-[#1a1040] transition-all duration-200 cursor-default"
                    >
                        <img
                        src={skill.logo}
                        alt={skill.name}
                        className="w-5 h-5 object-contain flex-shrink-0"
                        />
                        <span className="text-sm text-gray-300 whitespace-nowrap">
                        {skill.name}
                        </span>
                    </div>
                    ))}
                </div>
                </div>
            ))}
            </div>

        </div>
        </section>
    );
    };

    export default Skills;