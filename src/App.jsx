import React from "react";
import LeadForm from "./components/LeadForm";
import List from "./components/List";
import useLeads from "./hooks/UseLeads";

const defaultLeads = [
  { id: 1, name: "John Doe", email: "john@example.com", phone: "9876543210", notes: "Interested in product A" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "9123456780", notes: "Requested a demo" },
  { id: 3, name: "Mike Johnson", email: "mike@example.com", phone: "9988776655", notes: "Follow up next week" },
];

const App = () => {
  const { leads, addLead, deleteLead, leadToEdit, setLeadToEdit } = useLeads(defaultLeads);

  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-900 to-slate-700 p-6">
      <div className="max-w-full mx-auto bg-gradient-to-r from-slate-900 to-slate-700 p-8 rounded-2xl shadow-lg">
        <h1 className="text-4xl font-bold text-white text-center underline mb-7">
          Lead Management App
        </h1>
        <hr className="bg-white h-1" />

        <h2 className="text-2xl font-bold justify-center text-center align-center mt-2 pt-2 text-white underline mb-5">Lead Form</h2>
        <LeadForm addLead={addLead} leadToEdit={leadToEdit} />
        <hr className="bg-white h-1" />

        <h2 className="text-2xl font-bold text-white underline justify-center text-center align-center mb-5 mt-8">Lead List</h2>
        <List
  leads={leads}
  onDelete={deleteLead}
  onEdit={setLeadToEdit}
/>

      </div>
    </div>
  );
};

export default App;
