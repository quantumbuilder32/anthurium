"use client"
import React, { useRef, useEffect, useState, HTMLAttributes } from 'react'

export default function ImageCarousel({ childEls, ...elProps }: { childEls: JSX.Element[] } & HTMLAttributes<HTMLDivElement>) {
    const [currentIndex, currentIndexSet] = useState(0)

    const next = () => {
        currentIndexSet(prev => {
            let newIndex = prev + 1
            if (newIndex > childEls.length - 1) {
                newIndex = 0
            }

            return newIndex
        })
    }

    const prev = () => {
        currentIndexSet(prev => {

            let newIndex = prev - 1
            if (newIndex < 0) {
                newIndex = childEls.length - 1
            }

            return newIndex
        })
    }

    return (
        <div {...elProps} style={{ position: "relative", ...elProps?.style }}>
            {childEls.map((eachItem, eachItemIndex) => {
                return (
                    <div key={eachItemIndex} className={`${eachItemIndex !== currentIndex ? "noDisplay" : ""}`}>
                        {eachItem}
                    </div>
                )
            })}

            <div style={{ position: "absolute", right: 0, bottom: "-1rem", padding: "1rem", display: "flex", gap: "1rem" }}>
                <button className="secondaryButton" style={{ aspectRatio: "1/1" }} onClick={prev}>
                    <svg style={{ width: "clamp(1rem, 3vw, 3rem)" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" /></svg>
                </button>

                <button className="secondaryButton" style={{ aspectRatio: "1/1" }} onClick={next}>
                    <svg style={{ width: "clamp(1rem, 3vw, 3rem)" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
                </button>
            </div>
        </div>
    )
}
