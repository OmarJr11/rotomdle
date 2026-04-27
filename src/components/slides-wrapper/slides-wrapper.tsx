"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionWrapper from "../section-wrapper/section-wrapper";
import { Games, GamesDescriptions } from "@/enums/games-descriptions";

/**
 * Render sections with GSAP ScrollTrigger pin/scale animation.
 * @returns JSX.Element
 */
export default function SlidesWrapper() {
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    useEffect((): () => void => {
        gsap.registerPlugin(ScrollTrigger);
        const wrapperElement: HTMLDivElement | null = wrapperRef.current;
        if (!wrapperElement) {
            return (): void => undefined;
        }
        const context = gsap.context((): void => {
            const panels: HTMLElement[] = gsap.utils.toArray<HTMLElement>("[data-gsap-panel]", wrapperElement);
            panels.pop();
            panels.forEach((panel: HTMLElement): void => {
                const innerPanel: HTMLElement | null = panel.querySelector<HTMLElement>("[data-gsap-inner]");
                if (!innerPanel) {
                    return;
                }
                const panelHeight: number = innerPanel.offsetHeight;
                const windowHeight: number = window.innerHeight;
                const difference: number = panelHeight - windowHeight;
                const fakeScrollRatio: number = difference > 0 ? difference / (difference + windowHeight) : 0;
                if (fakeScrollRatio > 0) {
                    panel.style.marginBottom = `${panelHeight * fakeScrollRatio}px`;
                }
                const timeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: panel,
                        start: "bottom bottom",
                        end: (): string => (fakeScrollRatio > 0 ? `+=${innerPanel.offsetHeight}` : "bottom top"),
                        pinSpacing: false,
                        pin: true,
                        scrub: true,
                        invalidateOnRefresh: true,
                    },
                });
                if (fakeScrollRatio > 0) {
                    timeline.to(innerPanel, {
                        yPercent: -100,
                        y: window.innerHeight,
                        duration: 1 / (1 - fakeScrollRatio) - 1,
                        ease: "none",
                    });
                }
                timeline
                    .fromTo(panel, { scale: 1, opacity: 1 }, { scale: 0.7, opacity: 0.5, duration: 0.9 })
                    .to(panel, { opacity: 0, duration: 0.1 });
            });
        }, wrapperElement);
        const refreshScrollTrigger = (): void => {
            ScrollTrigger.refresh();
        };
        const frameId: number = window.requestAnimationFrame(refreshScrollTrigger);
        window.addEventListener("load", refreshScrollTrigger);
        window.addEventListener("resize", refreshScrollTrigger);
        return (): void => {
            window.cancelAnimationFrame(frameId);
            window.removeEventListener("load", refreshScrollTrigger);
            window.removeEventListener("resize", refreshScrollTrigger);
            context.revert();
        };
    }, []);
    return (
        <div ref={wrapperRef} className="w-full">
            <SectionWrapper 
                section={Games.ROTOMDLE}
                className="section1"
                description={GamesDescriptions.ROTOMDLE}
                image="/assets/rotom-bg.jpg" />
            <SectionWrapper 
                section={Games.REGIONDLE}
                className="section2"
                description={GamesDescriptions.REGIONDLE}
                image="/assets/region-bg.jpg" />
            <SectionWrapper
                section={Games.TYPEODLE}
                className="section3"
                description={GamesDescriptions.TIPODLE}
                image="/assets/types-bg.png" />
        </div>
    );
}
