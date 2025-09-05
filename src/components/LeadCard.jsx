import React, { useRef, useEffect } from "react";
import gsap from "gsap";

function LeadCard({ lead, onEdit, onDelete }) {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
    );
  }, []);

  return (
    <div
      ref={cardRef}
      className="w-full bg-gradient-to-r from-indigo-50 via-purple-50 to-cyan-50
                 rounded-xl shadow-md p-2 mb-3 border border-indigo-200 flex flex-col md:flex-row items-center md:justify-between"
    >
      {/* Row data */}
      <div className="flex flex-col md:flex-row flex-1 gap-2 w-full overflow-x-auto">
        <div className="flex-1 w-full md:w-auto bg-gradient-to-r from-indigo-100 via-indigo-200 to-indigo-100 rounded-lg p-2 text-center">
          <p className="font-bold text-gray-800">{lead.name}</p>
        </div>
        <div className="flex-1 w-full md:w-auto bg-gradient-to-r from-purple-100 via-purple-200 to-purple-100 rounded-lg p-2 text-center">
          <p className="text-gray-700">{lead.email}</p>
        </div>
        <div className="flex-1 w-full md:w-auto bg-gradient-to-r from-cyan-100 via-cyan-200 to-cyan-100 rounded-lg p-2 text-center">
          <p className="text-gray-700">{lead.phone}</p>
        </div>
        <div className="flex-1 w-full md:w-auto bg-gradient-to-r from-teal-100 via-teal-200 to-teal-100 rounded-lg p-2 text-center">
          <p className="text-gray-700 italic">{lead.notes}</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-2 mt-2 md:mt-0 md:ml-3">
        <button
          onClick={() => onEdit(lead)}
          className="px-3 py-1 rounded-lg text-white font-medium
                     bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500
                     hover:from-blue-600 hover:to-indigo-700 transition-all"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(lead.id)}
          className="px-3 py-1 rounded-lg text-white font-medium
                     bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500
                     hover:from-teal-600 hover:to-emerald-700 transition-all"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default LeadCard;
