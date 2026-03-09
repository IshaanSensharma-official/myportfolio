    import React from "react";
    import ReactTypingEffect from "react-typing-effect";
    import profile from "../../assets/profile2.jpeg";

    const About = () => {
    return (
        <section id="about" className="py-24">

        <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

            <div>

            <h1 className="text-5xl font-bold leading-tight">
                Hi, I am
                <br />
                <span className="text-[#8245ec]">
                Ishaan Sensharma
                </span>
            </h1>

            <h2 className="text-2xl text-gray-300 mt-4">
                I am a{" "}
                <span className="text-[#8245ec]">
                <ReactTypingEffect
                    text={[
                    "AI/ML Engineer",
                    "Data Scientist",
                    "Full Stack Developer",
                    "Python Developer",
                    ]}
                    speed={80}
                    eraseSpeed={50}
                    typingDelay={500}
                    eraseDelay={1500}
                />
                </span>
            </h2>

            <p className="text-gray-400 mt-6 max-w-lg">
                I am a Computer Science student specializing in AI and Machine
                Learning. I build intelligent systems, scalable web apps,
                and data-driven solutions.
            </p>

            <button className="mt-8 px-8 py-3 rounded-full bg-[#8245ec] hover:bg-purple-700 transition">
                Download CV
            </button>

            </div>

            <div className="flex justify-center">

            <img
                src={profile}
                alt="profile"
                className="w-[340px] h-[340px] object-cover rounded-full border-4 border-[#8245ec] shadow-[0_0_60px_rgba(130,69,236,0.6)]"
            />

            </div>

        </div>

        </section>
    );
    };

    export default About;