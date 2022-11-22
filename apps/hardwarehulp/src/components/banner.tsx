/* eslint-disable @typescript-eslint/no-explicit-any */

interface BannerProps {
  title: string | any
  desc: string | any
}

const Banner = (props: BannerProps) => {
  return (
    <section id="banner">
      <div className="inner" style={{ opacity: 1 }}>
        <h1 style={{ opacity: 1 }}>
          {props.title}
          <small style={{ display: "none" }}>
            {
              "HardwareHulp, Technische ondersteuning, Computers op maat, Computer Upgrades, Diensten, Jesse Koldewijn."
            }
          </small>
        </h1>
        <p
          style={{
            opacity: 1,
          }}
        >
          {props.desc}
        </p>
      </div>
    </section>
  )
}

export default Banner
