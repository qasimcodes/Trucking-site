

const About = () => {
  return (
    <div>
      
      <section>
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
    <div className="max-w-3xl">
      <h2 className="text-3xl font-bold sm:text-4xl">
        Travis and company have the legacy of trucking of 10 years experience.
      </h2>
    </div>

    <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
        <img
          alt=""
          src="https://images7.alphacoders.com/888/888167.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="lg:py-16">
        <article className="space-y-4 text-gray-600">
          <p>
          At Travis & Co, we specialize in providing efficient and reliable trucking and dispatching services for businesses of all sizes. With a focus on timely deliveries, safety, and cost-effectiveness, our experienced team ensures that shipments are handled with care from start to finish. We offer customized solutions to meet the unique needs of our clients, leveraging the latest technology to streamline operations and improve communication. Whether you're moving freight locally or across the country, we’re committed to getting your goods where they need to go—on time, every time.
          </p>

          <p>
          With a team of experienced drivers and dispatchers, we ensure smooth operations, minimizing delays and maximizing cost-efficiency. Our commitment to sustainability and modern technology also helps us optimize routes, reduce fuel consumption, and lower carbon footprints. From freight planning to real-time tracking, Travis & Co is dedicated to delivering exceptional trucking services that keep your business moving forward, no matter the distance.
          </p>
        </article>
      </div>
    </div>
  </div>
</section>


{/* about more */}

<section className="overflow-hidden rounded-lg shadow-2xl md:grid md:grid-cols-3">
  <img
    alt=""
    src="https://images4.alphacoders.com/281/281476.jpg"
    className="h-32 w-full object-cover md:h-full"
  />

  <div className="p-4 text-center sm:p-6 md:col-span-2 lg:p-8">
    <p className="text-sm font-semibold uppercase tracking-widest">Run with the pack</p>

    <h2 className="mt-6 font-black uppercase">
      <span className="text-4xl font-black sm:text-5xl lg:text-6xl"> Get 20% off </span>

      <span className="mt-2 block text-sm">On your first ride with us</span>
    </h2>

    <a
      className="mt-8 inline-block w-full bg-black py-4 text-sm font-bold uppercase tracking-widest text-white"
      href="/pricing"
    >
      Get Discount
    </a>

    <p className="mt-8 text-xs font-medium uppercase text-gray-800">
      Offer valid until 24th March, 2024 *
    </p>
  </div>
</section>




{/* about more */}

    </div>
  )
}

export default About
