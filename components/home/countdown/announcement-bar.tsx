"use client";

import { useState, useEffect } from "react";
import { AlertCircle, Clock, Megaphone, ChevronRight, X } from "lucide-react";

interface AnnouncementBarProps {
    className?: string;
}

export default function AnnouncementBar({ className = "" }: AnnouncementBarProps) {
    const [isSpecialOffer, setIsSpecialOffer] = useState(true);
    const [daysLeft, setDaysLeft] = useState(3);
    const [isVisible, setIsVisible] = useState(true);
    
    // Calculate if we're still within the special offer period (3 days after deployment)
    useEffect(() => {
        // Deployment date - adjust this to your actual deployment date
        const deploymentDate = new Date('2025-05-21'); // Today's date as default
        const currentDate = new Date();
        
        // Calculate days since deployment
        const timeDifference = currentDate.getTime() - deploymentDate.getTime();
        const daysSinceDeployment = Math.floor(timeDifference / (1000 * 3600 * 24));
        
        // Special offer is valid for 3 days
        if (daysSinceDeployment <= 3) {
            setIsSpecialOffer(true);
            setDaysLeft(3 - daysSinceDeployment);
        } else {
            setIsSpecialOffer(false);
        }

        // Check if user has previously closed the banner
        // const announcementClosed = localStorage.getItem('announcementClosed');
        // if (announcementClosed === 'true') {
        //     setIsVisible(false);
        // }
    }, []);

    const closeAnnouncement = () => {
        setIsVisible(false);
        localStorage.setItem('announcementClosed', 'true');
    };

    if (!isVisible) return null;

    return (
        <div className={`bg-gradient-to-r from-blue-900 to-blue-800 text-white py-3 md:py-4 shadow-md ${className}`}>
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-center">
                    {isSpecialOffer ? (
                        <div className="flex items-center gap-2 group">
                            <div className="relative hidden sm:block">
                                <div className="absolute inset-0 bg-yellow-400 rounded-full animate-ping opacity-30"></div>
                                <Megaphone size={20} className="text-yellow-400 relative z-10" />
                            </div>
                            
                            {/* Mobile version (extremely compact) */}
                            <div className="flex items-center gap-1 sm:hidden">
                                <span className="font-bold text-yellow-400 text-sm">
                                    {daysLeft === 0 ? "FINAL HOURS!" : `${daysLeft}D LEFT!`}
                                </span>
                                <span className="font-bold text-white text-sm">Cinematic Studio</span>
                                <span className="font-bold text-yellow-400 text-sm">€127</span>
                            </div>
                            
                            {/* Desktop version (full content) */}
                            <div className="items-center gap-1 hidden sm:flex flex-wrap justify-center">
                                <span className="font-bold text-yellow-400">FLASH SALE:</span>
                                <span className="font-medium">
                                    {daysLeft === 0 ? (
                                        "Final hours!"
                                    ) : (
                                        `Only ${daysLeft} day${daysLeft !== 1 ? 's' : ''} left!`
                                    )}
                                </span>
                                <span className="font-medium"> Upgraded </span>
                                <span className="font-bold text-yellow-400">Cinematic Studio</span>
                                <span className="font-medium"> lifetime access for </span>
                                <span className="font-bold text-yellow-400">€127</span>
                                <span className="font-medium text-gray-300 line-through ml-1">€147</span>
                            </div>
                            
                            <a href="https://copecart.com/products/e41a84c4/checkout" target="_blank" className="flex items-center text-xs font-bold bg-yellow-400 hover:bg-yellow-300 text-blue-900 px-2 sm:px-3 py-1 rounded-full transition-all group-hover:scale-105">
                                <span className="sm:inline hidden">CLAIM OFFER</span>
                                <span className="sm:hidden inline">BUY</span>
                                <ChevronRight size={14} className="ml-1" />
                            </a>
                        </div>
                    ) : (
                        <div className="flex items-center gap-2">
                            <AlertCircle size={20} className="text-yellow-400" />
                            <p className="font-medium">Elevenstoic Premium - Unlock Your Content Creation Potential</p>
                        </div>
                    )}
                    
                    {/* Close button - uncomment if needed
                    <button 
                        onClick={closeAnnouncement}
                        className="text-gray-300 hover:text-white focus:outline-none ml-4"
                        aria-label="Close announcement"
                    >
                        <X size={18} />
                    </button>
                    */}
                </div>
            </div>
        </div>
    );
}