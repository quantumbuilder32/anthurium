import React from 'react'
import Logo from '../logo/Logo'
import Socials from '../socials/Socials'
import { companyInfo } from '@/lib/companyInfo'
import { blogData } from '@/lib/blogData'
import Image from 'next/image'
import Link from 'next/link'
import styles from "./page.module.css"

export default function Footer() {
    return (
        <footer style={{ padding: "3rem 1rem", backgroundColor: "var(--backgroundColor)", color: "#fff", display: "grid", gap: "1rem" }}>
            <div className={styles.listCont} style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(min(200px, 100%), 1fr))" }}>
                <div style={{ display: "grid", gap: "1rem", alignContent: 'flex-start' }}>
                    <Logo />

                    <p>Here to fit all your needs</p>

                    <Socials style={{ justifyContent: "flex-start", paddingLeft: "0rem" }} />
                </div>

                <div>
                    <h2>Contact Information</h2>

                    <div style={{ display: "grid", gap: "1rem" }}>
                        <p><b>Adress: </b>{companyInfo.address}</p>
                        <p><b>Phone: </b>{companyInfo.number}</p>
                        <p><b>Email: </b>{companyInfo.email}</p>
                    </div>
                </div>

                <div>
                    <h2>Recent Posts</h2>

                    <div style={{ display: "grid", gap: "1rem", }}>
                        {blogData.sort((a, b) => (b.datePosted as any) - (a.datePosted as any)).slice(0, 2).map((eachBlog, eachBlogIndex) => {
                            return (
                                <Link href={`/blog/${eachBlog.slug}`} key={eachBlogIndex} style={{ display: "flex", gap: "1rem" }}>
                                    <Image alt={`${eachBlog.title}'s image`} src={eachBlog.coverImage} height={100} width={100} style={{ objectFit: "cover" }} />


                                    <div style={{ flex: "1 1 300px", display: "grid", gap: "1rem" }}>
                                        <h3 className='hoverHighlight'>{eachBlog.title}</h3>

                                        <p>{eachBlog.datePosted.toLocaleDateString('en-US', {
                                            month: 'long',
                                            day: 'numeric',
                                            year: 'numeric'
                                        })}</p>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>

            <div style={{ padding: "1rem", marginTop: "1rem", borderTop: "1px solid var(--fadedWhite2)", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "1rem" }}>
                <p>Copyright © Anthurium all rights reserved.</p>

                <ul style={{ display: "flex", flexWrap: 'wrap', gap: "1rem" }}>
                    {[{
                        link: "/aboutUs",
                        name: "About Us"
                    },
                    {
                        link: "/privacyPolicy",
                        name: "Privacy Policy"
                    },
                    {
                        link: "/services",
                        name: "Services"
                    }].map((eachLink, eachLinkIndex) => {
                        return (
                            <Link href={eachLink.link} key={eachLinkIndex}>{eachLink.name}</Link>
                        )
                    })}
                </ul>
            </div>
        </footer>
    )
}
