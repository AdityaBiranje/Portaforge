"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const BackgroundBeams = ({ className }: { className?: string }) => {
    return (
        <div
            className={cn(
                "absolute top-0 left-0 w-full h-full bg-neutral-950 -z-50 overflow-hidden",
                className
            )}
        >
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-neutral-950 to-neutral-950" />
            <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] animate-spin-slow opacity-30">
                <div className="absolute top-[50%] left-[50%] w-[50%] h-[50%] bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent blur-3xl transform -translate-x-1/2 -translate-y-1/2 rotate-45" />
            </div>
        </div>
    );
};
