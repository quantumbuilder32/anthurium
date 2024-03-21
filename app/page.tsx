import ContactForm from '@/components/contactForm/ContactForm'
import DisplayBlogs from '@/components/displayBlogs/DisplayBlogs'
import DisplayStars from '@/components/displayStars/DisplayStars'
import DisplayTestimonials from '@/components/displayTestimonials/DisplayTestimonials'
import HowItWorks from '@/components/howItWorks/HowItWorks'
import ImageCarousel from '@/components/imageCarousel/ImageCarousel'
import ThirdButton from '@/components/thirdButton/ThirdButton'
import { servicesData } from '@/lib/servicesData'
import { testimonialData } from '@/lib/testimonialData'
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

      <section>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
          <div style={{ flex: "1 1 400px" }}>
            <Image alt={`${1}image`} src={"https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} height={1000} width={1000} style={{ objectFit: "cover", height: "100%" }} />
          </div>

          <div style={{ flex: "1 1 400px", display: "grid", alignContent: "flex-start", gap: "1rem" }}>
            <p className='supportingTitle2'>About Us</p>

            {/* <h1>We Deal With The Aspects Of Professional <span className='highlight'>Web Development Services</span></h1> */}

            <h1>Elevate your operations with our premium solutions, designed for <span className='highlight'>innovation</span> and sustainable  <span className='highlight'>growth</span>.</h1>

            {/* <p>At Anthurium, we&apos;re passionate about crafting exceptional digital experiences through our expertise in website development and mobile app solutions. As a trusted partner, we cater to the diverse needs of businesses worldwide, helping them thrive in the digital age with bespoke software solutions.</p> */}

            <p>We provide end-to-end software solutions tailored to meet your unique needs. Our services encompass careful planning, development, testing, and ongoing support.</p>

            <p>Whether you require scalable applications, intuitive user interfaces, or robust backend systems, we deliver efficient and future-ready software. </p>

            <p>From concept to deployment, our team ensures a seamless process, emphasizing quality, security, and a user-centric approach.</p>

            <div className='snap' style={{ overflowX: "auto", display: "grid", gap: "1rem", gridAutoFlow: "column", gridTemplateRows: "1fr 1fr", gridAutoColumns: "100%" }}>
              {[
                {
                  title: "Professional IT Services",
                  summary: 'With a team of seasoned professionals, Anthurium is dedicated to delivering professional IT services that exceed expectations.',
                  icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M176 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64c-35.3 0-64 28.7-64 64H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64c0 35.3 28.7 64 64 64v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h56v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h56v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448c35.3 0 64-28.7 64-64h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V280h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V176h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448c0-35.3-28.7-64-64-64V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H280V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H176V24zM160 128H352c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32zm192 32H160V352H352V160z" /></svg>
                },
                {
                  title: "Elevating User Experience",
                  summary: 'User experience is paramount to us. Our experts are committed to crafting immersive and intuitive digital experiences that captivate audiences and drive engagement.',
                  icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z" /></svg>
                },
                {
                  title: "Unrivaled Support",
                  summary: 'Customer satisfaction is our top priority.We offer swift and responsive support whenever and wherever you need it.',
                  icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 48C141.1 48 48 141.1 48 256v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V256C0 114.6 114.6 0 256 0S512 114.6 512 256V400.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24H240c-26.5 0-48-21.5-48-48s21.5-48 48-48h32c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40V256c0-114.9-93.1-208-208-208zM144 208h16c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H144c-35.3 0-64-28.7-64-64V272c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64v48c0 35.3-28.7 64-64 64H352c-17.7 0-32-14.3-32-32V240c0-17.7 14.3-32 32-32h16z" /></svg>
                },
                {
                  title: "Innovation at the Forefront",
                  summary: "We constantly push the boundaries of technology and creativity to deliver cutting-edge solutions that are future-proof. We're committed to driving innovation in everything we do.",
                  icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M297.2 248.9C311.6 228.3 320 203.2 320 176c0-70.7-57.3-128-128-128S64 105.3 64 176c0 27.2 8.4 52.3 22.8 72.9c3.7 5.3 8.1 11.3 12.8 17.7l0 0c12.9 17.7 28.3 38.9 39.8 59.8c10.4 19 15.7 38.8 18.3 57.5H109c-2.2-12-5.9-23.7-11.8-34.5c-9.9-18-22.2-34.9-34.5-51.8l0 0 0 0c-5.2-7.1-10.4-14.2-15.4-21.4C27.6 247.9 16 213.3 16 176C16 78.8 94.8 0 192 0s176 78.8 176 176c0 37.3-11.6 71.9-31.4 100.3c-5 7.2-10.2 14.3-15.4 21.4l0 0 0 0c-12.3 16.8-24.6 33.7-34.5 51.8c-5.9 10.8-9.6 22.5-11.8 34.5H226.4c2.6-18.7 7.9-38.6 18.3-57.5c11.5-20.9 26.9-42.1 39.8-59.8l0 0 0 0 0 0c4.7-6.4 9-12.4 12.7-17.7zM192 128c-26.5 0-48 21.5-48 48c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-44.2 35.8-80 80-80c8.8 0 16 7.2 16 16s-7.2 16-16 16zm0 384c-44.2 0-80-35.8-80-80V416H272v16c0 44.2-35.8 80-80 80z" /></svg>
                },
                {
                  title: "Partnering for Success",
                  summary: "At Anthurium, we believe in the power of partnerships. We view our clients as collaborators, working hand in hand to achieve trust, and collaboration",
                  icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M323.4 85.2l-96.8 78.4c-16.1 13-19.2 36.4-7 53.1c12.9 17.8 38 21.3 55.3 7.8l99.3-77.2c7-5.4 17-4.2 22.5 2.8s4.2 17-2.8 22.5l-20.9 16.2L550.2 352H592c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48H516h-4-.7l-3.9-2.5L434.8 79c-15.3-9.8-33.2-15-51.4-15c-21.8 0-43 7.5-60 21.2zm22.8 124.4l-51.7 40.2C263 274.4 217.3 268 193.7 235.6c-22.2-30.5-16.6-73.1 12.7-96.8l83.2-67.3c-11.6-4.9-24.1-7.4-36.8-7.4C234 64 215.7 69.6 200 80l-72 48H48c-26.5 0-48 21.5-48 48V304c0 26.5 21.5 48 48 48H156.2l91.4 83.4c19.6 17.9 49.9 16.5 67.8-3.1c5.5-6.1 9.2-13.2 11.1-20.6l17 15.6c19.5 17.9 49.9 16.6 67.8-2.9c4.5-4.9 7.8-10.6 9.9-16.5c19.4 13 45.8 10.3 62.1-7.5c17.9-19.5 16.6-49.9-2.9-67.8l-134.2-123z" /></svg>
                },
              ].map((eachItem, eachItemIndex) => {
                return (
                  <div key={eachItemIndex} style={{ display: "flex", gap: "1rem" }}>
                    <div className='resizeSvg' style={{ width: "4rem", fill: "var(--primaryColor)" }}>
                      {eachItem.icon}
                    </div>

                    <div style={{ flex: "1 1 300px", display: "grid", gap: "1rem" }}>
                      <h3>{eachItem.title}</h3>

                      <p>{eachItem.summary}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--secondaryColor)" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center", alignItems: "center" }}>
          <div>
            <p className='supportingTitle2'>our services</p>
            <h1>What We Provide</h1>
          </div>

          <div style={{ display: "grid", alignContent: "flex-start", gap: "1rem", }}>
            <p style={{ maxWidth: "75ch" }}>At Anthurium we specialize in delivering cutting-edge digital solutions tailored to your business needs. From innovative website development to seamless mobile app solutions, we offer a comprehensive suite of services designed to elevate your online presence.</p>
          </div>
        </div>

        <div className='snap' style={{ overflowX: "auto", display: "grid", gap: "1rem", gridAutoFlow: "column", gridAutoColumns: "min(400px, 100%)", marginTop: "1rem" }}>
          {servicesData.map((eachService, eachServiceIndex) => {
            return (
              <div key={eachServiceIndex} style={{ borderRadius: "1rem", display: "flex", flexDirection: "column", gap: "1rem", padding: "1rem", alignContent: "flex-start", backgroundColor: "#fff" }}>
                <Image alt={`${eachService.name}'s image`} src={eachService.image} height={400} width={400} style={{ objectFit: "cover", width: "100%", height: "300px", borderRadius: "1rem", }} />

                <h2>{eachService.name}</h2>

                <p style={{ flex: 1 }}>{eachService.shortSummary}</p>

                <ThirdButton link={eachService.link} text='Read More' />
              </div>
            )
          })}
        </div>
      </section>

      <section style={{ backgroundColor: "var(--backgroundColor)", color: "#fff", paddingBlock: "5rem" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: 'center' }}>
          <div style={{ flex: "1 1 300px" }}>
            <Image alt={`reasons to choose us image`} src="https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" height={1000} width={1000} style={{ objectFit: "cover", height: '100%', maxHeight: "80vh" }} />
          </div>

          <div style={{ flex: "2 1 300px", display: "grid", alignContent: "flex-start", gap: "1rem" }}>
            <p className='supportingTitle2'>Why choose Us</p>
            <h1>Reasons To <span className='highlight'>Choose</span> Anthurium</h1>

            <p>We make your life easier, streamline the development process and build excellent web applications.</p>

            {[
              {
                title: "Tailored Solutions",
                text: "We believe in crafting solutions tailored to your unique needs. Our team takes the time to understand your business objectives, challenges, and vision.",
                svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M352 320c88.4 0 160-71.6 160-160c0-15.3-2.2-30.1-6.2-44.2c-3.1-10.8-16.4-13.2-24.3-5.3l-76.8 76.8c-3 3-7.1 4.7-11.3 4.7H336c-8.8 0-16-7.2-16-16V118.6c0-4.2 1.7-8.3 4.7-11.3l76.8-76.8c7.9-7.9 5.4-21.2-5.3-24.3C382.1 2.2 367.3 0 352 0C263.6 0 192 71.6 192 160c0 19.1 3.4 37.5 9.5 54.5L19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L297.5 310.5c17 6.2 35.4 9.5 54.5 9.5zM80 408a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" /></svg>
              },
              {
                title: "Streamlined Process",
                text: "Our streamlined development process ensures efficiency and transparency every step of the way.",
                svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z" /></svg>
              },
              {
                title: "Commitment to Excellence",
                text: "Excellence is at the core of everything we do. We strive for perfection in every line of code, every design element, and every user interaction.",
                svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M4.1 38.2C1.4 34.2 0 29.4 0 24.6C0 11 11 0 24.6 0H133.9c11.2 0 21.7 5.9 27.4 15.5l68.5 114.1c-48.2 6.1-91.3 28.6-123.4 61.9L4.1 38.2zm503.7 0L405.6 191.5c-32.1-33.3-75.2-55.8-123.4-61.9L350.7 15.5C356.5 5.9 366.9 0 378.1 0H487.4C501 0 512 11 512 24.6c0 4.8-1.4 9.6-4.1 13.6zM80 336a176 176 0 1 1 352 0A176 176 0 1 1 80 336zm184.4-94.9c-3.4-7-13.3-7-16.8 0l-22.4 45.4c-1.4 2.8-4 4.7-7 5.1L168 298.9c-7.7 1.1-10.7 10.5-5.2 16l36.3 35.4c2.2 2.2 3.2 5.2 2.7 8.3l-8.6 49.9c-1.3 7.6 6.7 13.5 13.6 9.9l44.8-23.6c2.7-1.4 6-1.4 8.7 0l44.8 23.6c6.9 3.6 14.9-2.2 13.6-9.9l-8.6-49.9c-.5-3 .5-6.1 2.7-8.3l36.3-35.4c5.6-5.4 2.5-14.8-5.2-16l-50.1-7.3c-3-.4-5.7-2.4-7-5.1l-22.4-45.4z" /></svg>
              },
            ].map((eachItem, eachItemIndex) => {
              return (
                <div key={eachItemIndex} style={{ display: "flex", gap: "1rem" }}>
                  <div className='resizeSvg' style={{ width: "3rem", fill: "var(--primaryColor)" }}>
                    {eachItem.svg}
                  </div>

                  <div style={{ flex: "1 1 300px", display: "grid", gap: "1rem" }}>
                    <h3>{eachItem.title}</h3>

                    <p style={{ color: "var(--fadedWhite)" }}>{eachItem.text}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ flex: "1 1 400px" }}>
            <Image alt={`${1}'s image`} src="https://images.unsplash.com/photo-1535953472862-9cc610a70f8a?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" height={600} width={600} style={{ objectFit: "cover", maxHeight: "90vh" }} />
          </div>

          <div style={{ flex: "2 1 400px", display: "grid", alignContent: "flex-start", gap: "1rem" }}>
            <ContactForm />
          </div>
        </div>
      </section>

      <section>
        <HowItWorks />
      </section>

      <section>
        <div style={{ textAlign: "center", display: "grid", justifyItems: "center" }}>
          <p className='supportingTitle2'>Our Testimonials</p>
          <h1>We Deliver Solutions, built on trust</h1>
        </div>

        <DisplayTestimonials />
      </section>

      <section>
        <div style={{ textAlign: "center", display: "grid", justifyItems: "center" }}>
          <p className='supportingTitle2'>Our Blogs</p>
          <h1>Resources & Latest News</h1>
        </div>

        <DisplayBlogs />
      </section>
    </main>
  )
}
