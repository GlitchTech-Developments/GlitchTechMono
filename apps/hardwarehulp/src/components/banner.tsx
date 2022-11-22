/* eslint-disable @typescript-eslint/no-explicit-any */

interface BannerProps {
  title: string | any
  desc: string | any
}

const Banner = (props: BannerProps) => {
  return (
    <section id="banner">
      <div className="inner" style={{ opacity: 1 }}>
        <h2 style={{ opacity: 1, fontSize: "3rem", lineHeight: 1.2 }}>
          {props.title}
        </h2>
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
