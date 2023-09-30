import './App.css'
import { useState } from 'react';
import { monthlyPlan } from './components/Plan';
import { yearlyPlan } from './components/Plan';
import Yearly from './components/Yearly';
import Monthly from './components/Monthly';

function App() {

  const [planSelected, setPlanSelected] = useState('monthly');

  const handleSelect = (planType) => {
    setPlanSelected(planType)
  }

  const [planMonthly, setPlanMonthly] = useState(monthlyPlan);
  const [planYearly, setPlanYearly] = useState(yearlyPlan);

  const [plan, setPlan] = useState(true)

  const handleSelectPlan = (id) => {

    const isSelected = plan === id

    if (!isSelected) {
      setPlan(id)
    }

  }



  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Select Plan</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.</p>
          <div className="flex mx-auto border-2 border-purple-500 rounded overflow-hidden mt-6">
            <button onClick={() => handleSelect('monthly')} className={`py-1 px-4 focus:outline-none ${planSelected === 'monthly' ? 'bg-purple-500 text-white' : 'bg-white text-black'}`}>Monthly</button>
            <button onClick={() => handleSelect('yearly')} className={`py-1 px-4 focus:outline-none ${planSelected === 'yearly' ? 'bg-purple-500 text-white' : 'bg-white text-black'}`}>Yearly</button>
          </div>
        </div>

        {planSelected === 'monthly' ? <Monthly plan={plan} handleSelectPlan={handleSelectPlan} planMonthly={planMonthly} /> : <Yearly planYearly={planYearly} plan={plan} handleSelectPlan={handleSelectPlan} />}

      </div>
    </section>
  )
}

export default App;