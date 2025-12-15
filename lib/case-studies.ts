// Shared portfolio/case study data - edit this to update both the home page carousel and case studies page

export interface CaseStudy {
    id: number;
    name: string;
    category: string;
    description: string;
    image: string; // For carousel
    link: string;
    tags: string[];
}

export const caseStudies: CaseStudy[] = [
    {
        id: 1,
        name: "Stellar VC",
        category: "VC FUND",
        description: "Complete website for an emerging defense-tech VC fund. Clean, modern design with smooth animations.",
        image: "/case-studies/stellar-vc.png",
        link: "https://stellar-vc-website.vercel.app",
        tags: ["Website", "Branding"],
    },
    {
        id: 2,
        name: "ViveReach",
        category: "STARTUP",
        description: "Investor outreach platform connecting startups with 50K+ VCs. Dark, modern design with premium feel.",
        image: "/case-studies/vivereach.png",
        link: "https://vivereach.com",
        tags: ["Website", "Web App"],
    },
    {
        id: 3,
        name: "Liquid Ventures",
        category: "VC FUND",
        description: "Website for an early-stage VC firm investing in pre-seed and seed stage tech companies building tomorrow's infrastructure.",
        image: "/case-studies/liquid-ventures.png",
        link: "https://liquidventures.vercel.app",
        tags: ["Website", "Branding"],
    },
    // Add more case studies here...
];
