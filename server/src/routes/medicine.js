import express from 'express';
import { createMedicine, getAllMedicines, getMedicineById, updateMedicineById, deleteMedicineById } from '../controllers/medicineControllers.js';
const router = express.Router();

// Create a new medicine
router.post('/create', createMedicine);

// Get all medicines
router.get('/', getAllMedicines);

// Get a specific medicine by ID
router.get('/:id', getMedicineById);

// Update a medicine by ID
router.put('/:id', updateMedicineById);

// Delete a medicine by ID
router.delete('/:id', deleteMedicineById);


export default router;