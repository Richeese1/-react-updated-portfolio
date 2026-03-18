import { ArrowRight, ExternalLink, Github, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const projects = [
    {
        id: 1,
        title: "Gamified Science Quest",
        description: "An educational web game that transforms science learning into an engaging adventure. Built with React and Tailwind CSS, this thesis project features interactive quizzes, progress tracking, and gamified learning mechanics to make science education fun and effective.",
        image: "/projects/Project1.png",
        tags: ["React", "TailwindCSS", "Firebase"],
        category: "game-dev",
        demoUrl: "https://www.sciencequest.free.nf/",
        githubUrl: "https://github.com/ReynoldMantes01/Gamified2",
    },
    {
        id: 2,
        title: "My 1st Ever Game",
        description: "My first venture into game development using HTML, CSS, and Three.js. This browser-based game showcases fundamental game mechanics, 3D graphics rendering, and interactive gameplay elements that marked my journey into the world of game development.",
        image: "/projects/Project2.png",
        tags: ["HTML", "CSS", "Three.js"],
        category: "game-dev",
        demoUrl: "https://richeese1.github.io/WebAppGame/",
        githubUrl: "https://github.com/Richeese1/WebAppGame",
    },
    {
        id: 3,
        title: "TaskFlow",
        description: "A modern task management system designed to boost productivity and streamline workflow. Features include task creation, priority management, deadline tracking, and a clean intuitive interface built with React and modern web technologies.",
        image: "/projects/Task-flow.png",
        tags: ["React", "JavaScript", "CSS", "MongoDB"],
        category: "web-dev",
        demoUrl: "https://task-flow-task-management-system.netlify.app/",
        githubUrl: "https://github.com/Richeese1/task-management-system",
    },
]

const categories = ["all", "web-dev", "game-dev"];

export const ProjectsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const [selectedImage, setSelectedImage] = useState(null);

    const filteredProjects = projects.filter(
        (project) => activeCategory === "all" || project.category === activeCategory
    );

    const openImageModal = (imageSrc) => {
        setSelectedImage(imageSrc);
    };

    const closeImageModal = () => {
        setSelectedImage(null);
    };
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                {" "}
                Featured<span className="text-primary"> Projects</span></h2>

            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
                Here are some of my Projects.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, key) => (
                    <button
                        key={key}
                        onClick={() => setActiveCategory(category)}
                        className={cn(
                            "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                            activeCategory === category
                                ? "bg-primary text-primary-foreground"
                                : "bg-secondary/70 text-foreground hover:bg-secondary"
                        )}
                    >
                        {category.replace('-', ' ')}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, key, ) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden cursor-pointer" onClick={() => openImageModal(project.image)}>
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary text-secondary-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold mb-1">{project.title}
                                </h3>
                                <p className="text-muted-foreground text-sm mb-4">{project.description}
                                </p>
                                <div className="flex justify-between item-center">
                                    <div className="flex space-x-3">
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            className="flex items-center gap-2 px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm hover:bg-primary/90 transition-colors"
                                        >
                                            <ExternalLink size={16} /> DEMO
                                        </a>
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            className="flex items-center gap-2 px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm hover:bg-secondary/80 transition-colors"
                                        >
                                            <Github size={16} /> GitHub
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-12">
                <a className="cosmic-button w-fit flex items-center mx-auto gap-2"
                    target="_blank"
                    href="https://github.com/Richeese1"
                >
                    Check my Github <ArrowRight size={16} />
                </a>

            </div>
        </div>

        {/* Image Modal */}
        {selectedImage && (
            <div
                className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
                onClick={closeImageModal}
            >
                <div className="relative max-w-4xl max-h-[90vh]">
                    <button
                        onClick={closeImageModal}
                        className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
                    >
                        <X className="h-8 w-8" />
                    </button>
                    <img
                        src={selectedImage}
                        alt="Project screenshot"
                        className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                    />
                </div>
            </div>
        )}
    </section>
    };