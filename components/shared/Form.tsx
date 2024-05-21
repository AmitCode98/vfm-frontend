import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const inputFields = [
  { name: "fullName", type: "text", placeholder: "Full name" },
  { name: "email", type: "email", placeholder: "Email" },
  { name: "phoneNo", type: "tel", placeholder: "Phone No" },
];
export default function Form() {
  return (
    <form className="flex flex-col gap-8 py-10 px-8 border bg-white">
      <h2 className="text-2xl font-normal">Tell us about your enquiry</h2>
      <div className="flex justify-between gap-5">
        {inputFields.map((field, index) => (
          <input
            key={index}
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            className="block w-full px-4 border text-[#7d7d7d] text-sm font-normal focus:outline-none focus:border-secondary"
            required
          />
        ))}

        <select
          name="service"
          className="block w-full px-4 border text-[#7d7d7d] text-sm font-normal focus:outline-none focus:border-secondary"
          required
        >
          <option value="" disabled>
            Select Services
          </option>

          <option value="Designing">Designing</option>
          <option value="Development">Development</option>
          <option value="Marketing">Marketing</option>
        </select>
        <div className="block">
          <Button className="">
            Submit <ArrowUpRight />
          </Button>
        </div>
      </div>
    </form>
  );
}
