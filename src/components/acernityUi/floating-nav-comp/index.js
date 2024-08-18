"use client";
import React from "react";
import { FloatingNav } from "../../ui/floating-navbar";
import { IconBrandMailgun, IconHome, IconMessage, IconProgressCheck, IconUser } from "@tabler/icons-react";
export function FloatingNavDemo() {
    const navItems = [
        {
            name: "Home",
            link: "#home",
            icon: <IconHome className="h-4 w-4 text-white" />,
        },
        {
            name: "About",
            link: "#about",
            icon: <IconUser className="h-4 w-4 text-white" />,
        },
        {
            name: "Service",
            link: "#services", // Updated to use an ID selector
            icon: <IconBrandMailgun className="h-4 w-4 text-white" />,
        },
        {
            name: "Programs",
            link: "#programs", // Updated to use an ID selector
            icon: <IconProgressCheck className="h-4 w-4 text-white" />,
        },
    ];
    return (
        <div className="relative w-full">
            <FloatingNav navItems={navItems} />
        </div>
    );
}


