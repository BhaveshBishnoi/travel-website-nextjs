"use client";

import { Check, X } from "lucide-react";

interface PricingOption {
  people: string;
  vehicle: string;
  price: string;
}

interface PricingTableProps {
  options: PricingOption[];
}

const PricingTable = ({ options }: PricingTableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-blue-600">
          <tr>
            <th className="px-6 py-4 text-left text-sm font-medium text-white uppercase tracking-wider">
              Number of People
            </th>
            <th className="px-6 py-4 text-left text-sm font-medium text-white uppercase tracking-wider">
              Vehicle Type
            </th>
            <th className="px-6 py-4 text-left text-sm font-medium text-white uppercase tracking-wider">
              Price Per Person
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {options.map((option, index) => (
            <tr 
              key={index} 
              className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
            >
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {option.people}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {option.vehicle}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                ₹{option.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

interface IncludesExcludesProps {
  includes: string[];
  excludes: string[];
}

export const IncludesExcludes = ({ includes, excludes }: IncludesExcludesProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Cost Includes</h3>
        <ul className="space-y-3">
          {includes.map((item, index) => (
            <li key={index} className="flex items-start">
              <Check size={20} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Cost Excludes</h3>
        <ul className="space-y-3">
          {excludes.map((item, index) => (
            <li key={index} className="flex items-start">
              <X size={20} className="text-red-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PricingTable;
