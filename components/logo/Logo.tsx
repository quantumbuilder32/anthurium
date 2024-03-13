import Link from 'next/link'
import React from 'react'

export default function Logo() {
    return (
        <div style={{ fontSize: "clamp(1rem, 2.5vw,3rem)" }}>
            <Link style={{ cursor: "pointer" }} href={"/"}>Anthur<span style={{ color: "var(--primaryColor)" }}>ium</span></Link>
        </div>)
}
