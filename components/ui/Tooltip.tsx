import React, { ReactNode } from "react";

interface TooltipProps {
    content: ReactNode;
    children: ReactNode;
}

export default function Tooltip({ content, children }: TooltipProps) {
    return (
        <div className="relative group flex flex-col items-center">
            {children}
            <div className="absolute bottom-full mb-2 hidden group-hover:flex flex-col items-center z-50 w-max max-w-xs">
                <div className="bg-slate-900 text-white text-xs rounded py-1 px-2 shadow-lg text-center">
                    {content}
                </div>
                <div className="w-2 h-2 bg-slate-900 rotate-45 -mt-1"></div>
            </div>
        </div>
    );
}
