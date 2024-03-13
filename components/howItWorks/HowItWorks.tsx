import Image from 'next/image'
import React from 'react'
import styles from "./style.module.css"

export default function HowItWorks() {
    return (
        <div>
            <div style={{ display: "grid", justifyItems: "center" }}>
                <p className='supportingTitle2'>How It Works</p>
                <h1>check Out Our <span className='highlight'>Work Process</span></h1>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(200px, 100%), 1fr))", gap: "1rem", marginBlock: "1rem" }}>
                    {[
                        {
                            title: "Contact Us",
                            text: "Feel free to reach out to us through our website, phone, or email. There we can discuss your project needs in detail.",
                            img: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        },
                        {
                            title: "Consultation",
                            text: "Once you've contacted us, we'll schedule a consultation to understand your business, goals, and vision for your website.",
                            img: "https://cdn.pixabay.com/photo/2018/03/10/12/00/teamwork-3213924_1280.jpg"
                        },
                        {
                            title: "Quote & Proposal",
                            text: "After gathering your requirements, we'll provide you with a detailed quote and proposal outlining the scope of work, timeline, and pricing for your project.",
                            img: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        },
                        {
                            title: "Website Development & Delivery",
                            text: "Our expert team will start working on your website. Upon completion, we'll deliver your website, ensuring it meets your expectations and exceeds industry standards.",
                            img: "https://images.pexels.com/photos/5905750/pexels-photo-5905750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        },
                    ].map((eachItem, eachItemIndex) => {
                        return (
                            <div key={eachItemIndex} className={styles.mainCard} style={{ display: "flex", alignItems: 'center', gap: '1rem', flexDirection: "column" }}>
                                <div style={{ width: "70%", aspectRatio: "1/1", display: "grid", position: "relative" }}>
                                    <Image alt={`${eachItem.title}'s image`} src={eachItem.img} height={400} width={400} style={{ objectFit: "cover", height: '90%', width: "90%", borderRadius: "50%", position: "absolute", top: "50%", left: "50%", translate: "-50% -50%", }} />

                                    <div className={styles.outline} style={{ position: "absolute", height: "100%", width: "100%", aspectRatio: "1/1", borderRadius: "50%" }}></div>

                                    <div className={styles.circleCont} style={{ position: "absolute", top: "50%", left: 0, width: "30%", aspectRatio: "1/1", }}>
                                        <div style={{ position: "absolute", top: "50%", left: "50%", translate: "-50% -50%", width: "100%", height: "100%", borderRadius: "50%", backgroundColor: "var(--primaryColor)", opacity: 1 }}></div>
                                        <div style={{ position: "absolute", top: "50%", left: "50%", translate: "-50% -50%", width: "100%", height: "100%", borderRadius: "50%", backgroundColor: "var(--primaryColor)", opacity: .5, scale: 1.3, }}></div>
                                        <div style={{ position: "absolute", top: "50%", left: "50%", translate: "-50% -50%", width: "100%", height: "100%", borderRadius: "50%", backgroundColor: "var(--primaryColor)", opacity: .5, scale: 1.7, }}></div>
                                        <div style={{ position: "absolute", top: "50%", left: "50%", translate: "-50% -50%", width: "100%", height: "100%", display: "grid", alignItems: "center", justifyItems: "center", color: "#fff" }}>{eachItemIndex + 1}</div>
                                    </div>
                                </div>

                                <h3>{eachItem.title}</h3>

                                <p style={{ textAlign: "center" }}>{eachItem.text}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
