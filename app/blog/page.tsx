import React from 'react'
import styles from "./page.module.css"
import { blogData } from '@/lib/blogData'
import Link from 'next/link'
import Image from 'next/image'

export default function Page({ searchParams }: { searchParams: { category: string } }) {

    const usingSearchParams = searchParams.category !== undefined

    const usableBlogData = usingSearchParams ? blogData.filter(eachBlog => eachBlog.category === searchParams.category) : blogData

    return (
        <main>
            <section>
                <h1>Discover our blogs</h1>

                {usableBlogData.length === 0 && usingSearchParams && (
                    <p>No Blogs seen for this category</p>
                )}

                <div style={{ display: "grid" }}>
                    {usingSearchParams && (
                        <Link style={{ justifySelf: "flex-end" }} href={"/blog"}><button className='mainButton'>reset</button></Link>
                    )}
                </div>
            </section>


            <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fill, minmax(min(300px, 100%), 1fr))", padding: "1rem" }}>
                {usableBlogData.map((eachBlog, eachBlogIndex) => {
                    return (
                        <div key={eachBlogIndex} style={{ display: "flex", flexDirection: "column", gap: "1rem", position: "relative", backgroundColor: "#fff", boxShadow: "0px 0px 10px rgba(0,0,0,.1)" }}>
                            <Link href={`/blog?category=${eachBlog.category}`} style={{ backgroundColor: "var(--primaryColor)", position: "absolute", top: 0, left: 0, margin: "1rem", padding: ".5rem 1rem", borderRadius: ".2rem", color: "#fff", textTransform: "uppercase", fontSize: "var(--smallFontSize)" }}>{eachBlog.category}</Link>

                            <Image alt={`${eachBlog.title}'s image`} src={eachBlog.coverImage} height={400} width={400} style={{ objectFit: "cover", width: "100%" }} />

                            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", padding: "1rem", height: "100%" }}>
                                <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", fontSize: "var(--smallFontSize)", color: "var(--fadedTextColor)" }}>
                                    <p>Anthurium</p>

                                    <p>{eachBlog.datePosted.toLocaleDateString('en-US', {
                                        month: 'long',
                                        day: 'numeric',
                                        year: 'numeric'
                                    })}</p>
                                </div>

                                <Link className='hoverHighlight' href={`/blog/${eachBlog.slug}`}>
                                    <h3>{eachBlog.title}</h3>
                                </Link>

                                <p>{eachBlog.brief}</p>

                                <div style={{ display: "flex", gap: ".5rem", marginTop: "auto" }}>
                                    <Link className='highlight' href={`/blog/${eachBlog.slug}`}>Read More</Link>

                                    <svg className='highlight' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M334.5 414c8.8 3.8 19 2 26-4.6l144-136c4.8-4.5 7.5-10.8 7.5-17.4s-2.7-12.9-7.5-17.4l-144-136c-7-6.6-17.2-8.4-26-4.6s-14.5 12.5-14.5 22l0 72L32 192c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l288 0 0 72c0 9.6 5.7 18.2 14.5 22z" /></svg>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </main>
    )
}
