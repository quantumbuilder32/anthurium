"use client"
import React, { useRef, useEffect, useState, HTMLAttributes } from 'react'

export default function ImageCarousel({ children, ...elProps }: { children: React.ReactNode } & HTMLAttributes<HTMLDivElement>) {
    const mainDivRef = useRef<HTMLDivElement>(null!)
    const [currentIndex, currentIndexSet] = useState(0)
    const [childElements, childElementsSet] = useState<NodeListOf<HTMLDivElement>>()

    //load up elements
    useEffect(() => {
        childElementsSet(mainDivRef.current.childNodes as NodeListOf<HTMLDivElement>)
    }, [])

    useEffect(() => {
        if (!childElements) return

        childElements.forEach((eachEl, eachElIndex) => {
            eachEl.classList.add("noDisplay")
        })

        childElements[currentIndex].classList.remove("noDisplay")
    }, [currentIndex, childElements])

    const next = () => {
        currentIndexSet(prev => {
            if (!childElements) return prev

            let newIndex = prev + 1
            if (newIndex > childElements.length - 1) {
                newIndex = 0
            }

            return newIndex
        })
    }

    const prev = () => {
        currentIndexSet(prev => {
            if (!childElements) return prev

            let newIndex = prev - 1
            if (newIndex < 0) {
                newIndex = childElements.length - 1
            }

            return newIndex
        })
    }


    //main div has children elements
    //identify every div
    //make it a carousel slide el
    //give an animate class - anything with it will get animated when the current index is called
    //if currently selected give on animations and display

    return (
        <div {...elProps} className={`fadeIn ${elProps?.className}`} style={{ display: !childElements ? "none" : "", ...elProps?.style }}>
            <div ref={mainDivRef}>
                {children}
            </div>

            <div>
                <button onClick={prev}>prev</button>
                <button onClick={next}>next</button>
            </div>
        </div>
    )
}
