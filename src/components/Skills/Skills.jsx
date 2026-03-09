    import React from "react";
    import { SkillsInfo } from "../../constants";
    import Tilt from "react-parallax-tilt";

    const Skills = () => {

    return (
        <section id="skills" className="py-24">

        <div className="max-w-[1200px] mx-auto px-6">

            <div className="text-center mb-16">

            <h2 className="text-4xl font-bold">
                SKILLS
            </h2>

            <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-3"></div>

            <p className="text-gray-400 mt-4">
                A collection of my technical skills
            </p>

            </div>

            <div className="grid md:grid-cols-2 gap-10">

            {SkillsInfo.map((category) => (

                <div
                key={category.title}
                className="bg-gray-900 p-8 rounded-2xl border border-gray-700"
                >

                <h3 className="text-2xl text-gray-300 text-center mb-6">
                    {category.title}
                </h3>

                <Tilt>

                    <div className="grid grid-cols-3 gap-4">

                    {category.skills.map((skill) => (

                        <div
                        key={skill.name}
                        className="flex items-center gap-2 border border-gray-700 rounded-xl px-3 py-2"
                        >

                        <img
                            src={skill.logo}
                            alt={skill.name}
                            className="w-6 h-6 object-contain"
                        />

                        <span className="text-sm text-gray-300">
                            {skill.name}
                        </span>

                        </div>

                    ))}

                    </div>

                </Tilt>

                </div>

            ))}

            </div>

        </div>

        </section>
    );
    };

    export default Skills;