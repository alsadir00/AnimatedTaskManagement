import React from 'react'
import SectionTitle from './SectionTitle'

const Pricing = () => {
  return (
    <div>
      <SectionTitle text1="Price Plans" text2="Choose the plan that's right for you" text3="Ship Beautiful Frontends Without the Overhead — Customizable, Scalable, and Developer-Friendly UI Components." />
      <section className='md:flex justify-center gap-4'>
      {["Basic", "Pro", "Enterprise"].map((plan, i) => (
          <div key={i} className="border border-pink-50 dark:border-none dark:shadow-xl rounded-2xl md:w-80 shadow-md p-6 flex flex-col gap-2 mb-3">
            <h3 className="text-xl font-bold">{plan}</h3>
            <p className="mt-2 text-4xl font-extrabold">${(i + 1) * 10}</p>
            <ul className="mt-4 space-y-1">
              <li>✔ Feature 1</li>
              <li>✔ Feature 2</li>
              <li>✔ Feature 3</li>
            </ul>
            <button className="mt-auto bg-rose-200 font-bold  rounded-xl px-4 py-2 hover:bg-rose-300 dark:bg-gray-500 dark:hover:bg-gray-600">Choose</button>
          </div>
        ))}
      </section>
    </div>
  )
}

export default Pricing
