import React from 'react'

function Monthly({ planMonthly, handleSelectPlan, plan }) {
    return (
        <section className='text-gray-600 body-font overflow-hidden'>
            <div className="flex flex-wrap -m-4">
                {planMonthly.map((item) => (
                    <div key={item.id} className='p-4 xl:w-1/4 md:w-1/2 w-full'>

                        <div className=
                            {`h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden 
                            ${plan === item.id ? 'border-purple-500' : 'border-gray-300'}`}>

                            <h2 className="text-sm tracking-widest title-font mb-1 font-medium">{item.name}</h2>
                            <h1 className="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">{item.price}</h1>
                            <p className="flex items-center text-gray-600 mb-2">
                                <span className={`w-4 h-4 mr-2 inline-flex items-center justify-center  ${plan === item.id ? 'bg-green-600' : 'bg-gray-400'} text-white rounded-full flex-shrink-0`}>
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Lorem Ipsum is simply.
                            </p>
                            <p className="flex items-center text-gray-600 mb-2">
                                <span className={`w-4 h-4 mr-2 inline-flex items-center justify-center  ${plan === item.id ? 'bg-green-600' : 'bg-gray-400'} text-white rounded-full flex-shrink-0`}>
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Lorem Ipsum is simply.
                            </p>
                            <p className="flex items-center text-gray-600 mb-6">
                                <span className={`w-4 h-4 mr-2 inline-flex items-center justify-center  ${plan === item.id ? 'bg-green-600' : 'bg-gray-400'} text-white rounded-full flex-shrink-0`}>
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Lorem Ipsum is simply.
                            </p>
                            <button onClick={() => handleSelectPlan(item.id)}
                                className={`flex items-center mt-auto text-white 
                                ${plan === item.id ? 'bg-purple-500 hover:bg-purple-600'
                                        : 'bg-gray-400 hover:bg-gray-500'} 
                                        border-0 py-2 px-4 w-full focus:outline-none rounded`}>Select
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Monthly