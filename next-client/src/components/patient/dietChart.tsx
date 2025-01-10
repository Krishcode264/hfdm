import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const DietChart = () => {
  const [dietData, setDietData] = useState([
    {
      meal: "Morning",
      ingredients: "Oatmeal, Banana, Green Tea",
      instructions: "Low Sugar",
    },
    {
      meal: "Evening",
      ingredients: "Grilled Chicken, Salad",
      instructions: "No Salt",
    },
    {
      meal: "Night",
      ingredients: "Steamed Vegetables, Brown Rice",
      instructions: "Low Fat",
    },
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    meal: "",
    ingredients: "",
    instructions: "",
  });

  const handleEdit = (index: number) => {
    setEditIndex(index);
    setFormData(dietData[index]);
    setIsEditing(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    const updatedData = [...dietData];
    if (editIndex !== null) {
      updatedData[editIndex] = formData;
    } else {
      updatedData.push(formData);
    }
    setDietData(updatedData);
    setIsEditing(false);
    setEditIndex(null);
  };

  const handleAddNewMeal = () => {
    setFormData({ meal: "", ingredients: "", instructions: "" });
    setIsEditing(true);
    setEditIndex(null);
  };

  return (
    <div className="container mx-auto py-10 px-4 md:px-10 bg-gray-50 shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Patient Diet Chart</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Meal</TableHead>
            <TableHead>Ingredients</TableHead>
            <TableHead>Instructions</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {dietData.map((diet, index) => (
            <TableRow key={index}>
              <TableCell>{diet.meal}</TableCell>
              <TableCell>{diet.ingredients}</TableCell>
              <TableCell>{diet.instructions}</TableCell>
              <TableCell>
                <Button onClick={() => handleEdit(index)} variant="outline">
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="mt-4">
        <Button onClick={handleAddNewMeal}>Add New Meal</Button>
      </div>

      {/* Dialog for Editing/Adding */}
      <Dialog open={isEditing} onOpenChange={setIsEditing}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {editIndex !== null ? "Edit Meal" : "Add New Meal"}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Input
              name="meal"
              placeholder="Meal Name (e.g., Morning)"
              value={formData.meal}
              onChange={handleInputChange}
            />
            <Input
              name="ingredients"
              placeholder="Ingredients (e.g., Oatmeal, Banana)"
              value={formData.ingredients}
              onChange={handleInputChange}
            />
            <Input
              name="instructions"
              placeholder="Instructions (e.g., Low Sugar)"
              value={formData.instructions}
              onChange={handleInputChange}
            />
          </div>
          <DialogFooter>
            <Button onClick={() => setIsEditing(false)} variant="ghost">
              Cancel
            </Button>
            <Button onClick={handleSave}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DietChart;
