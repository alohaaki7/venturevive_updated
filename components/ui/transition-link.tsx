"use client";

import Link from "next/link";
import { useTransition } from "@/components/ui/transition-context";
import { ReactNode, MouseEvent } from "react";

interface TransitionLinkProps {
    href: string;
    children: ReactNode;
    className?: string;
}

/**
 * TransitionLink - A link that triggers page transition animation
 * Use this for navigation that should have the tile animation
 */
export function TransitionLink({ href, children, className }: TransitionLinkProps) {
    const { navigateWithTransition } = useTransition();

    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        navigateWithTransition(href);
    };

    return (
        <Link href={href} onClick={handleClick} className={className}>
            {children}
        </Link>
    );
}
