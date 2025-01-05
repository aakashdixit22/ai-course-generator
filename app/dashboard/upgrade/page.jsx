"use client"
import React, { useState } from "react";
import PopupModal from "../_components/PopupModal";

const PricingCard = ({ plan, price, features, isPro, onSelect }) => (
  <div className={`relative overflow-hidden rounded-3xl ${isPro ? 'bg-gradient-to-br from-indigo-600 to-blue-700' : 'bg-white'} p-8 shadow-xl transition-transform duration-300 hover:scale-105`}>
    {isPro && (
      <div className="absolute -right-12 top-8 rotate-45 bg-yellow-400 px-12 py-1.5 text-sm font-semibold text-gray-900">
        Popular
      </div>
    )}
    
    <div className="text-center">
      <h2 className={`text-xl font-bold ${isPro ? 'text-white' : 'text-gray-900'}`}>
        {plan}
      </h2>
      
      <div className="mt-6">
        <span className={`text-5xl font-bold ${isPro ? 'text-white' : 'text-gray-900'}`}>
          ${price}
        </span>
        <span className={`text-sm font-medium ${isPro ? 'text-gray-200' : 'text-gray-500'}`}>
          /month
        </span>
      </div>
    </div>

    <ul className="mt-8 space-y-4">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center space-x-3">
          <svg 
            className={`h-5 w-5 flex-shrink-0 ${isPro ? 'text-green-300' : 'text-green-500'}`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className={`text-sm ${isPro ? 'text-gray-200' : 'text-gray-600'}`}>
            {feature}
          </span>
        </li>
      ))}
    </ul>

    <button
      onClick={() => onSelect({ plan, price })}
      className={`mt-8 w-full rounded-xl ${
        isPro
          ? 'bg-white px-6 py-3.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-gray-100'
          : 'bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500'
      } transition-colors duration-200`}
    >
      Get started
    </button>
  </div>
);

const Pricing = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    setShowModal(true);
  };

  const plans = {
    starter: {
      name: "Starter",
      price: "20",
      features: [
        "10 users included",
        "2GB of storage",
        "Email support",
        "Help center access"
      ]
    },
    pro: {
      name: "Pro",
      price: "30",
      features: [
        "20 users included",
        "5GB of storage",
        "Priority email support",
        "Help center access",
        "Phone support",
        "Community access"
      ]
    }
  };

  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600">
            Choose the perfect plan for your needs. Includes a 14-day free trial.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:gap-12">
          <PricingCard
            plan={plans.starter.name}
            price={plans.starter.price}
            features={plans.starter.features}
            isPro={false}
            onSelect={handlePlanSelect}
          />
          <PricingCard
            plan={plans.pro.name}
            price={plans.pro.price}
            features={plans.pro.features}
            isPro={true}
            onSelect={handlePlanSelect}
          />
        </div>
      </div>

      {showModal && (
        <PopupModal 
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          plan={selectedPlan}
        />
      )}
    </div>
  );
};

export default Pricing;