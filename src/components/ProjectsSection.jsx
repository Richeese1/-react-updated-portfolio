import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects =[
    {
        id:1,
        title: "Gamified Science Quest",
        description: "Our Thesis a Web based    game created using React and Tailwind.",
        image:"/projects/Project1.png",
        tags: ["React", "TailwindCSS", "Firebase"],
        demoUrl: "https://www.sciencequest.free.nf/",
        githubUrl: "https://github.com/ReynoldMantes01/Gamified2",
    },
        {
        id:2,
        title: "My 1st Ever Game",
        description: "My first ever game created using html CSS and 3JS.",
        image:"/projects/Project2.png",
        tags: ["HTML", "CSS", "3JS"],
        demoUrl: "https://richeese1.github.io/WebAppGame/",
        githubUrl: "https://github.com/Richeese1/WebAppGame",
    },
]


export const ProjectsSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                {" "}
                Featured<span className="text-primary"> Projects</span></h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of my Projects.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key, ) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden">
                            <img 
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
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
                                className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                    <ExternalLink />
                                </a>
                                 <a 
                                 href={project.githubUrl} 
                                 target="_blank" 
                                 className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                  <Github/>
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
                        Check my Github <ArrowRight size={16}/>
                    </a>

                </div>
        </div>
    </section> 
    };