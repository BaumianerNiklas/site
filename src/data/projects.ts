export interface Project {
    name: string;
    description: string;
    repoName?: string;
    url?: string;
    stack: Technology[];
}

export enum Technology {
    TypeScript,
    Svelte,
    Rust,
}

export const projectData: Project[] = [
    {
        name: "Iubus",
        description: "Dead simple discord.js v14 slash command framework",
        repoName: "iubus",
        stack: [Technology.TypeScript],
    },
    {
        name: "Waddle Bot",
        description: "Multipurpose Discord bot with lots of fun features",
        repoName: "Waddle-Bot",
        stack: [Technology.TypeScript],
    },
    {
        name: "Cardio",
        description: "Generate mathematical figures from nothing but straight lines",
        repoName: "Cardio",
        url: "https://cardio.neiklaes.tech",
        stack: [Technology.TypeScript, Technology.Svelte],
    },
    {
        name: "Quicalc",
        description: "A website for training your skills in mental arithmetic",
        repoName: "quicalc",
        url: "https://quicalc.neiklaes.tech",
        stack: [Technology.TypeScript, Technology.Svelte],
    },
    {
        name: "neiklaes.tech",
        description: "My personal site, you're looking at it right now!",
        repoName: "site",
        url: "https://neiklaes.tech",
        stack: [Technology.TypeScript],
    },
    {
        name: "FasTeX",
        description: "Rust CLI for quickly compiling LaTeX expression to beautiful PNGs",
        repoName: "FasTeX",
        stack: [Technology.Rust],
    },
    {
        name: "Rustdex",
        description: "Simple Rust CLI for getting basic information about Pokemon using PokéApi",
        repoName: "rustdex",
        stack: [Technology.Rust],
    },
];
