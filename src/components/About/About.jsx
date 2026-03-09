    import React from "react";
    import ReactTypingEffect from "react-typing-effect";
    import profile from "../../assets/profile2.jpeg";

    const About = () => {
    return (
        <section id="about" className="w-full">

        <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

            <div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Hi, I am
                <br />
                <span className="text-[#8245ec]">
                Ishaan Sensharma
                </span>
            </h1>

            <h2 className="text-xl md:text-2xl text-gray-300 mt-4">
                I am a{" "}
                <span className="text-[#8245ec]">
                <ReactTypingEffect
                    text={[
                    "AI/ML Engineer",
                    "MLOps Enthusiast",
                    "Full Stack Developer",
                    "Gamer",
                    ]}
                />
                </span>
            </h2>

            <p className="text-gray-400 mt-6 max-w-lg">
                Computer Science student specializing in AI and Machine Learning.
                I build intelligent systems, scalable applications, and
                data-driven solutions that integrate AI and ML with various softwares
                and websites or also on a standalone basis.
            </p>

            {/* Resume Button */}
            <a
            href="https://drive.google.com/file/d/1LpUfXzjD7urHU2v1cCe2_oCUPURCaEiZ/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-8 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
                background: 'linear-gradient(90deg, #8245ec, #a855f7)',
                boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
                }}
                >
                DOWNLOAD CV
                </a>

            </div>
            <div className="flex justify-center">

            <img
                src={profile}
                alt="profile"
                className="w-[260px] md:w-[320px] lg:w-[360px] aspect-square object-cover rounded-full border-4 border-[#8245ec] shadow-[0_0_50px_rgba(130,69,236,0.5)]"
            />

            </div>

        </div>

        </section>
    );
    };

    export default About;