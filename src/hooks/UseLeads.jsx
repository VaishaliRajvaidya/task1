import { useState, useEffect } from "react";

export default function useLeads(defaultLeads) {
  const [leads, setLeads] = useState([]);
  const [leadToEdit, setLeadToEdit] = useState(null);

  // Load from localStorage or defaults
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("leads"));
    if (stored && stored.length > 0) {
      setLeads(stored);
    } else {
      setLeads(defaultLeads);
    }
  },[]);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("leads", JSON.stringify(leads));
  }, [leads]);

  const addLead = (lead) => {
    if (leadToEdit) {
      // Update existing
      setLeads((prev) =>
        prev.map((l) =>
          l.id === leadToEdit.id ? { ...lead, id: leadToEdit.id } : l
        )
      );
      setLeadToEdit(null);
    } else {
      // Add new
      setLeads((prev) => [...prev, { ...lead, id: Date.now() }]);
    }
  };

  const deleteLead = (id) => {
    setLeads((prev) => prev.filter((l) => l.id !== id));
  };

  return { leads, addLead, deleteLead, leadToEdit, setLeadToEdit };
}
