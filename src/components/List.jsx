import React, { useRef, useEffect } from "react";
import LeadCard from "./LeadCard";
import gsap from "gsap";

function List({ leads, onEdit, onDelete }) {
  const listRef = useRef(null);

  useEffect(() => {
    if (listRef.current) {
      const cards = listRef.current.querySelectorAll("div");
      gsap.fromTo(
        cards,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.2, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [leads]);

  if (!leads || leads.length === 0) {
    return <p className="text-white italic">No leads available.</p>;
  }

  return (
    <div ref={listRef}>
      {leads.map((lead) => (
        <LeadCard
          key={lead.id}
          lead={lead}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default List;
