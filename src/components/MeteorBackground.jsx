    import React, { useMemo } from "react";

    const MeteorBackground = () => {
    const meteors = useMemo(() => {
        return Array.from({ length: 30 }, (_, i) => ({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        duration: `${3 + Math.random() * 6}s`,
        delay: `${Math.random() * 10}s`,
        size: `${1 + Math.random() * 2}px`,
        length: `${80 + Math.random() * 120}px`,
        opacity: 0.4 + Math.random() * 0.6,
        }));
    }, []);

    return (
        <>
        <style>{`
            @keyframes meteor {
            0% {
                transform: translateX(0) translateY(0) rotate(215deg);
                opacity: 1;
            }
            70% {
                opacity: 1;
            }
            100% {
                transform: translateX(600px) translateY(600px) rotate(215deg);
                opacity: 0;
            }
            }

            .meteor {
            position: fixed;
            border-radius: 9999px;
            animation: meteor linear infinite;
            pointer-events: none;
            z-index: 0;
            }

            .meteor::before {
            content: "";
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 0;
            height: 1px;
            background: linear-gradient(90deg, #a855f7, transparent);
            }
        `}</style>

        <div
            className="fixed inset-0 overflow-hidden pointer-events-none"
            style={{ zIndex: 0 }}
        >
            {meteors.map((meteor) => (
            <span
                key={meteor.id}
                className="meteor"
                style={{
                top: meteor.top,
                left: meteor.left,
                width: meteor.size,
                height: meteor.size,
                animationDuration: meteor.duration,
                animationDelay: meteor.delay,
                opacity: meteor.opacity,
                background: "#a855f7",
                boxShadow: `0 0 6px 1px rgba(168, 85, 247, 0.5)`,
                }}
            >
                <span
                style={{
                    position: "absolute",
                    top: "50%",
                    transform: "translateY(-50%) rotate(0deg)",
                    right: "0",
                    width: meteor.length,
                    height: "1px",
                    background:
                    "linear-gradient(90deg, rgba(168,85,247,0.8), transparent)",
                    transformOrigin: "right center",
                }}
                />
            </span>
            ))}
        </div>
        </>
    );
    };

    export default MeteorBackground;