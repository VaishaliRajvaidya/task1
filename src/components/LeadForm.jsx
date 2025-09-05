import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

function LeadForm({ addLead, leadToEdit }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  const formRef = useRef(null);

  // Animation
  useEffect(() => {
    gsap.fromTo(
      formRef.current,
      { scale: 0.8, y: -20 },
      { scale: 1, y: 0, duration: 0.8, ease: "back.out(1.7)" }
    );
  }, [leadToEdit]);

  // edit mode
  useEffect(() => {
    if (leadToEdit) {
      setFormData(leadToEdit);
    } else {
      setFormData({ name: "", email: "", phone: "", notes: "" });
    }
  }, [leadToEdit]);

  // Validation
  const validate = () => {
    if (!formData.name) {
      alert("Name is required");
      return false;
    }
    if (!formData.email) {
      alert("Email is required");
      return false;
    } else if (!formData.email.includes("@") || !formData.email.includes(".")) {
      alert("Enter a valid Email address");
      return false;
    }
    if (!formData.phone || formData.phone.length !== 10) {
      alert("Phone must be 10 digits");
      return false;
    }
    if (!formData.notes) {
      alert("Notes are required");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      addLead(formData);
      setFormData({ name: "", email: "", phone: "", notes: "" });

      // Animation
      gsap.fromTo(
        formRef.current,
        { boxShadow: "0 0 0px rgba(0,255,0,0)" },
        { boxShadow: "0 0 20px rgba(16,185,129,0.9)", duration: 0.6, yoyo: true, repeat: 1 }
      );
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto space-y-4 mb-6 
                 bg-gradient-to-r from-indigo-100 via-purple-100 to-cyan-100 
                 p-6 rounded-2xl shadow-xl border border-indigo-200"
    >
      <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
        {leadToEdit ? "Update Lead" : "Add New Lead"}
      </h2>

      <div>
        <label className="block font-semibold">Name</label>
        <input
          type="text"
          className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-indigo-400 outline-none"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>

      <div>
        <label className="block font-semibold">Email</label>
        <input
          type="email"
          className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-indigo-400 outline-none"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>

      <div>
        <label className="block font-semibold">Phone</label>
        <input
          type="tel"
          className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-indigo-400 outline-none"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </div>

      <div>
        <label className="block font-semibold">Notes</label>
        <textarea
          className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-indigo-400 outline-none"
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 rounded-lg text-white font-semibold 
                   bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 
                   hover:from-indigo-600 hover:to-blue-600 
                   shadow-md transition-transform transform hover:scale-105"
      >
        {leadToEdit ? "Update Lead" : "Add Lead"}
      </button>
    </form>
  );
}

export default LeadForm;
