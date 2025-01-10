"use client"
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Card } from "../ui/card";

const DietPlan = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [dietPlan, setDietPlan] = useState({
    morning: "Oatmeal with fruits, green tea",
    evening: "Grilled chicken salad",
    night: "Steamed vegetables and brown rice",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDietPlan((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Card className="p-6 mx-auto bg-gray-50 rounded-lg shadow-md  md:w-[50%]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Diet Plan</h2>
        <Button className="" onClick={() => setIsEditing((prev) => !prev)}>
          {isEditing ? "Cancel" : "Edit"}
        </Button>
      </div>
      <div>
        {Object.entries(dietPlan).map(([key, value]) => (
          <div key={key} className="mb-4">
            <Label className="block text-sm font-semibold mb-1 capitalize">
              {key} Meal
            </Label>
            {isEditing ? (
              <Input
                type="text"
                name={key}
                value={value}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            ) : (
              <p className="text-gray-700">{value}</p>
            )}
          </div>
        ))}
      </div>
      {isEditing && (
        <Button
          onClick={() => setIsEditing(false)}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Save
        </Button>
      )}
    </Card>
  );
};

export default DietPlan;
