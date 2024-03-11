import ImageCarousel from '@/components/imageCarousel/ImageCarousel'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Home() {
  return (
    <main>
      <ImageCarousel style={{ backgroundColor: "#000" }} childEls={[
        {
          supportingTitle: "Next-Gen Web Solutions",
          Heading: "Next.js Web Development",
          summary: "Unlock the potential of your online presence with cutting-edge websites and dynamic web applications powered by Next.js. Our expert team crafts tailor-made solutions to elevate your brand and engage your audience.",
          buttonText: "Discover Next.js Solutions",
          image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=1812&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          supportingTitle: "Cloud-First Approach",
          Heading: "Cloud Solutions Deployment",
          summary: "Embrace the flexibility and scalability of cloud computing with our comprehensive deployment services. From setup to optimization, we tailor cloud solutions to your business needs, ensuring seamless performance and cost-efficiency.",
          buttonText: "Explore Cloud Solutions",
          image: "https://images.unsplash.com/photo-1584169417032-d34e8d805e8b?q=80&w=1909&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          supportingTitle: "Innovative Design & Development",
          Heading: "Bespoke Website Creation",
          summary: "Stand out in the digital realm with bespoke website designs and robust development tailored to your brand identity. Our team blends creativity with functionality to deliver captivating online experiences that drive results.",
          buttonText: "See Our Web Designs",
          image: "https://plus.unsplash.com/premium_photo-1661679290109-770a3e282fa9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          supportingTitle: "Custom Web Applications",
          Heading: "Tailor-Made Web Apps",
          summary: "Empower your business with custom web applications designed to streamline processes and enhance user engagement. From e-commerce platforms to enterprise solutions, we develop scalable and feature-rich web apps to meet your unique needs.",
          buttonText: "Explore Web Apps",
          image: "https://images.unsplash.com/photo-1480694313141-fce5e697ee25?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          supportingTitle: "Optimized Security Solutions",
          Heading: "Digital Security & Performance",
          summary: "Ensure the safety and reliability of your digital assets with our comprehensive security and performance optimization services. From SSL integration to speed optimization, we fortify your online presence while ensuring lightning-fast performance.",
          buttonText: "Secure Your Digital Assets",
          image: "https://plus.unsplash.com/premium_photo-1661878265739-da90bc1af051?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      ]
        .map((eachItem, eachItemIndex) => {
          return (
            <div key={eachItemIndex} style={{ padding: "5rem 1rem", color: "#fff", position: "relative" }}>
              <Image alt={`${eachItem.Heading}'s image`} src={eachItem.image} priority={true} width={1920} height={1920} style={{ objectFit: "cover", position: "absolute", top: 0, left: 0, width: "100%", height: "100%" } as React.CSSProperties} />

              <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(0,0,0,0.6  )" }}></div>

              <div style={{ display: "grid", gap: "1rem", position: "relative" }}>
                <p className='supportingTitle1 slideIn'>{eachItem.supportingTitle}</p>


                <div className='slideInCont'>
                  <h1 className='slideIn' style={{ animationDelay: "200ms" }}>{eachItem.Heading}</h1>
                </div>

                <div className='slideInCont'>
                  <p className='slideIn' style={{ maxWidth: "50ch", animationDelay: "400ms" }}>{eachItem.summary}</p>
                </div>


                <div className='slideInCont'>
                  <Link className='slideIn' href={""} style={{ justifySelf: "flex-start", display: "inline-block", animationDelay: "600ms" }}>
                    <button className='mainButton'>{eachItem.buttonText}</button>
                  </Link>
                </div>
              </div>
            </div>
          )
        })} />
    </main>
  )
}
