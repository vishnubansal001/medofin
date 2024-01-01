import Medicine from "../models/medicineSchema.js";

// create new medicines
export const createMedicine = async (req, res) => {
    try {
        const newMedicine = new Medicine(req.body);
        const savedMedicine = await newMedicine.save();
        res.status(201).json({
            message: 'Medicine created successfully',
            medicine: savedMedicine
        });

    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }

}

// get all medicines
export const getAllMedicines = async (req, res) => {
    try {
        const medicines = await Medicine.find();
        res.status(200).json(medicines);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// to get a specific medicine by ID
export const getMedicineById = async (req, res) => {

    try {
        const medicine = await Medicine.findById(req.params.id);
        if (!medicine) {
            return res.status(404).json({ error: 'Medicine not found' });
        }
        res.status(200).json(medicine);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//  to update a medicine by ID
export const updateMedicineById = async (req, res) => {
    try {
        const updatedMedicine = await Medicine.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedMedicine) {
            return res.status(404).json({ error: 'Medicine not found' });
        }
        res.status(200).json(updatedMedicine);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//to delete a medicine by ID
export const deleteMedicineById = async (req, res) => {
    try {
        const deletedMedicine = await Medicine.findByIdAndDelete(req.params.id);
        if (!deletedMedicine) {
            return res.status(404).json({ error: 'Medicine not found' });
        }
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


