

const Home = () => {
  return (
    <div>
      


<section
  className="overflow-hidden bg-[url(https://wallpapercave.com/wp/wp3138985.jpg)] bg-cover bg-center bg-no-repeat"
>
  <div className="bg-black/50 p-8 md:p-12 lg:px-16 lg:py-24">
    <div className="text-center ltr:sm:text-left rtl:sm:text-right">
      <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl font-serif">Travis & Co.</h2>
      <h3 className="text-2xl font-bold text-white font-serif ">Trucking services </h3>

      <p className="hidden max-w-lg text-white/90 md:mt-6 font-bold font-serif   md:block md:text-lg md:leading-relaxed">
        Providing trucking and dispatch services all over the Country with professional drivers and experienced staff.
      </p>

      <div className="mt-4 sm:mt-8">
        <a
          href="/about"
          className="inline-block rounded-full bg-gray-800 px-12 py-3 text-sm font-medium text-white transition hover:bg-gray-600 focus:outline-none focus:ring-black focus:gray-400"
        >
          About US
        </a>
      </div>
    </div>
  </div>
</section>

{/* Carousel */}

{/* Detail */}

<section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
        <img
          alt=""
          src="src/assets/img2.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="lg:py-24">
        <h2 className="text-3xl font-bold sm:text-4xl">Who We Are?</h2>

        <p className="mt-4 text-gray-600">
        Short-distance services cater to urban areas, handling deliveries within a city or region. These services are often used for quick turnarounds.
        Trucking companies provide end-to-end logistics solutions, including route planning, load optimization, and tracking to streamline the supply chain.
        Trucking services typically use advanced technology for route optimization and tracking, ensuring transparency and efficiency in the delivery process.
        </p>

        <a
          href="#"
          className="mt-8 inline-block rounded bg-gray-900 px-12 py-3 text-sm font-medium text-white transition hover:bg-gray-800 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Get Started Today
        </a>
      </div>
    </div>
  </div>
</section>

{/* Detail */}

{/* Details 2 */}



<article className="overflow-hidden rounded-lg border border-zinc-300 bg-zinc-300 shadow-sm">
  <img
    alt=""
    src="https://www.truckdispatchtraininginc.com/wp-content/uploads/2021/04/bay-and-bay-highway-hero.jpeg"
    className="h-65 w-full object-cover"
  />

  <div className="p-4 sm:p-6">
    <a href="#">
      <h3 className="text-lg font-bold text-gray-900">
      Travis and Friends Trucking Company
      </h3>
    </a>

    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
    Truck dispatching involves coordinating and managing the movement of freight vehicles to ensure timely delivery of goods. Dispatchers communicate with drivers, plan routes, and handle logistical challenges to optimize efficiency and meet customer demands. Their role is crucial in maintaining smooth operations within the transportation and logistics industry.
    </p>

    <a href="/blog" className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-gray-800">
      Find out more

      <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
        &rarr;
      </span>
    </a>
  </div>
</article>



{/* Details 2 */}

{/* Stats */}

<div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
  <div className="mx-auto max-w-3xl text-center">
    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Trusted by eCommerce Businesses</h2>

    <p className="mt-4 text-gray-500 sm:text-xl">
      Our Company is trusted by most of the E-commerce platforms and they prefer taking our services as their pride for their journey.
    </p>
  </div>

  <dl className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
    <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
      <dt className="order-last text-lg font-medium text-gray-500">Total Sales</dt>

      <dd className="text-4xl font-extrabold text-gray-900 md:text-5xl">$4.8m</dd>
    </div>

    <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
      <dt className="order-last text-lg font-medium text-gray-500">Drivers</dt>

      <dd className="text-4xl font-extrabold text-gray-900 md:text-5xl">20</dd>
    </div>

    <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
      <dt className="order-last text-lg font-medium text-gray-500">Total Load</dt>

      <dd className="text-4xl font-extrabold text-gray-900 md:text-5xl">100</dd>
    </div>

    <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
      <dt className="order-last text-lg font-medium text-gray-500">Revenue</dt>

      <dd className="text-4xl font-extrabold text-gray-900 md:text-5xl">10000$+</dd>
    </div>
  </dl>
</div>

{/* stats */}


    </div>
  )
}

export default Home;
