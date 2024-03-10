import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center", justifyContent: "space-around" }}>
          <div>
            <h1>Welcome to Anthurium</h1>

            <h2>Innovating your digital world</h2>

            <div style={{ display: "flex", marginTop: "2rem", flexWrap: "wrap", gap: "1rem" }}>
              <button className="secondaryButton">Explore our services</button>
              <button>Get in Touch</button>
            </div>
          </div>

          <Image height={300} width={300} alt="tree" src={require("@/public/treebg.jpg").default.src} style={{ objectFit: "contain" }} />
        </div>
      </section>

      <section>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
          <div style={{ flex: "1 1 300px", position: "relative", overflowX: "clip" }}>
            <Image height={300} width={300} alt="tree" src={require("@/public/businesslady.jpg").default.src} style={{ objectFit: "contain", width: "500px", height: "auto", position: "relative", left: "5rem" }} />

            <Image height={300} width={300} alt="tree" src={require("@/public/businesspeople.jpg").default.src} style={{ objectFit: "contain", position: "absolute", bottom: "-2rem" }} />
          </div>

          <div style={{ flex: "1 1 300px" }}>
            <h3>ABOUT COMPANY</h3>

            <h2>We Empower <span className="highlight">Businesses</span> Through <span className="highlight">Technology</span></h2>

            <p>Anthurium has consistently driven innovation in the tech industry. With a passion for excellence and a commitment to delivering top-notch software solutions. Our team is your trusted partner in navigating the digital landscape.</p>

            <div style={{}}>
              {[{
                svgPath: (
                  <path d="M211.2 96a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zM32 256c0 17.7 14.3 32 32 32h85.6c10.1-39.4 38.6-71.5 75.8-86.6c-9.7-6-21.2-9.4-33.4-9.4H96c-35.3 0-64 28.7-64 64zm461.6 32H576c17.7 0 32-14.3 32-32c0-35.3-28.7-64-64-64H448c-11.7 0-22.7 3.1-32.1 8.6c38.1 14.8 67.4 47.3 77.7 87.4zM391.2 226.4c-6.9-1.6-14.2-2.4-21.6-2.4h-96c-8.5 0-16.7 1.1-24.5 3.1c-30.8 8.1-55.6 31.1-66.1 60.9c-3.5 10-5.5 20.8-5.5 32c0 17.7 14.3 32 32 32h224c17.7 0 32-14.3 32-32c0-11.2-1.9-22-5.5-32c-10.8-30.7-36.8-54.2-68.9-61.6zM563.2 96a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zM321.6 192a80 80 0 1 0 0-160 80 80 0 1 0 0 160zM32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32H608c17.7 0 32-14.3 32-32s-14.3-32-32-32H32z" />
                ),
                heading: "User Experience",
                text: "Skilled professionals are always ready to provide reliable services to our clients!"
              },
              {
                svgPath: (
                  <path d="M256 48C141.1 48 48 141.1 48 256v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V256C0 114.6 114.6 0 256 0S512 114.6 512 256V400.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24H240c-26.5 0-48-21.5-48-48s21.5-48 48-48h32c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40V256c0-114.9-93.1-208-208-208zM144 208h16c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H144c-35.3 0-64-28.7-64-64V272c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64v48c0 35.3-28.7 64-64 64H352c-17.7 0-32-14.3-32-32V240c0-17.7 14.3-32 32-32h16z" />
                ),
                heading: "Quick Support",
                text: "We are always here to answer any questions while we develop"
              },
              {
                svgPath: (
                  <path d="M353.8 54.1L330.2 6.3c-3.9-8.3-16.1-8.6-20.4 0L286.2 54.1l-52.3 7.5c-9.3 1.4-13.3 12.9-6.4 19.8l38 37-9 52.1c-1.4 9.3 8.2 16.5 16.8 12.2l46.9-24.8 46.6 24.4c8.6 4.3 18.3-2.9 16.8-12.2l-9-52.1 38-36.6c6.8-6.8 2.9-18.3-6.4-19.8l-52.3-7.5zM256 256c-17.7 0-32 14.3-32 32V480c0 17.7 14.3 32 32 32H384c17.7 0 32-14.3 32-32V288c0-17.7-14.3-32-32-32H256zM32 320c-17.7 0-32 14.3-32 32V480c0 17.7 14.3 32 32 32H160c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32H32zm416 96v64c0 17.7 14.3 32 32 32H608c17.7 0 32-14.3 32-32V416c0-17.7-14.3-32-32-32H480c-17.7 0-32 14.3-32 32z" />
                ),
                heading: "Commitment To Quality",
                text: "We pride ourselves on delivering high-quality, reliable, and scalable solutions that not only meet but exceed your expectations."
              }].map(eachItem => {
                return (
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginTop: "1rem" }}>
                    <svg style={{ width: "3rem", fill: "var(--backgroundColor)" }} viewBox="0 0 640 512">{eachItem.svgPath}</svg>

                    <div style={{ flex: 1 }}>
                      <h3 style={{ marginBottom: "1rem" }}>{eachItem.heading}</h3>
                      <p>{eachItem.text}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section>

      </section>
    </main>
  );
}
