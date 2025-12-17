"use client";

import Script from "next/script";

interface StructuredDataProps {
    type?: "organization" | "website" | "service";
}

export function StructuredData({ type = "organization" }: StructuredDataProps) {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "VentureVive",
        "url": "https://venturevive.io",
        "logo": "https://venturevive.io/logo.png",
        "description": "Specialized social media management for venture capital firms and Web3 startups. We help VCs attract better deal flow through strategic digital presence.",
        "foundingDate": "2024",
        "sameAs": [
            "https://linkedin.com/company/venturevive",
            "https://twitter.com/venturevive"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "email": "hello@venturevive.io",
            "contactType": "customer service"
        },
        "areaServed": "Worldwide",
        "serviceType": [
            "Social Media Management",
            "Website Development",
            "Brand Strategy",
            "Content Marketing"
        ]
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "VentureVive",
        "url": "https://venturevive.io",
        "description": "Social Media Management for VC & Web3",
        "publisher": {
            "@type": "Organization",
            "name": "VentureVive"
        }
    };

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Social Media Management",
        "provider": {
            "@type": "Organization",
            "name": "VentureVive",
            "url": "https://venturevive.io"
        },
        "areaServed": "Worldwide",
        "description": "Specialized social media management for venture capital firms and Web3 startups.",
        "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock"
        }
    };

    const getSchema = () => {
        switch (type) {
            case "website":
                return websiteSchema;
            case "service":
                return serviceSchema;
            default:
                return organizationSchema;
        }
    };

    return (
        <Script
            id={`structured-data-${type}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(getSchema()),
            }}
        />
    );
}

/**
 * Combined schema for homepage - includes all relevant schemas
 */
export function HomePageStructuredData() {
    const combinedSchema = [
        {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "VentureVive",
            "url": "https://venturevive.io",
            "logo": "https://venturevive.io/logo.png",
            "description": "Specialized social media management for venture capital firms and Web3 startups.",
            "sameAs": [
                "https://linkedin.com/company/venturevive"
            ],
            "contactPoint": {
                "@type": "ContactPoint",
                "email": "hello@venturevive.io",
                "contactType": "customer service"
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "VentureVive",
            "url": "https://venturevive.io"
        },
        {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "VentureVive",
            "url": "https://venturevive.io",
            "priceRange": "$$",
            "serviceType": ["Social Media Management", "Website Development", "Brand Strategy"],
            "areaServed": "Worldwide"
        }
    ];

    return (
        <Script
            id="homepage-structured-data"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(combinedSchema),
            }}
        />
    );
}
