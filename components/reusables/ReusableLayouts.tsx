import Image from 'next/image'
import React from 'react'

export default function ReusableLayouts() {
    return (
        <>
            <h1>2 Column Layout</h1>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                <div style={{ flex: "1 1 400px" }}>
                </div>

                <div style={{ flex: "1 1 400px", display: "grid", alignContent: "flex-start", gap: "1rem" }}>
                </div>
            </div>



            <h1>3 part Image layout</h1>
            <div style={{ display: "flex", gap: "1rem" }}>
                <div className='resizeSvg' style={{ width: "4rem", fill: "var(--primaryColor)" }}>
                    {/* svg */}
                </div>

                <div style={{ flex: "1 1 300px", display: "grid", gap: "1rem" }}>
                    <h3></h3>

                    <p></p>
                </div>
            </div>



            <h1>Image Starter</h1>
            <Image alt={`${1}'s image`} src={require(`@/public`).default.src} height={400} width={400} style={{ objectFit: "cover" }} />

        </>
    )
}
