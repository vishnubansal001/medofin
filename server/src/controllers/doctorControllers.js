import Doctor from '../models/doctorSchema.js'

// update user
export const updateDoctor = async (req, res) => {
    const id = req.params.id

    try {
        const updateDoctor = await Doctor.findByIdAndUpdate(
            id,
            { $set: req.body },
            { new: true }
        )
        res.status(200).json({
            success: true,
            message: 'User updated successfully',
            data: updateDoctor,
        })
    } catch (error) {
        console.error('Error in updating user:', error)
        res.status(500).json({
            success: false,
            message: 'Internal server error',
        })
    }
}

// delete user
export const deleteDoctor = async (req, res) => {
    const id = req.params.id

    try {
        const deleteDoctor = await Doctor.findByIdAndDelete(id)
        res.status(200).json({
            success: true,
            message: 'User deleted successfully',
        })
    } catch (error) {
        console.error('Error in deleting user:', error)
        res.status(500).json({
            success: false,
            message: 'Internal server error',
        })
    }
}

// get single user
export const getSingleDoctor = async (req, res) => {
    const id = req.params.id

    try {
        const doctor = await Doctor.findById(id).populate('reviews').select('-password')
        res.status(200).json({
            success: true,
            message: 'User Found !',
            data: doctor,
        })
    } catch (error) {
        console.error('No User Found !!:', error)
        res.status(500).json({
            success: false,
            message: 'Internal server error',
        })
    }
}

// get all user
export const getAllDoctors = async (req, res) => {
    try {
        const { query } = req.query;
        let doctors;

        if (query) {
            doctors = await Doctor.find({
                isApproved: 'approved',
                $or: [
                    { name: { $regex: query, $options: 'i' } },
                    { specialization: { $regex: query, $options: 'i' } },
                ],
            }).select('-password');
        } else {
            doctors = await Doctor.find({ isApproved: 'approved' }).select('-password');
        }

        res.status(200).json({
            success: true,
            message: 'Users Found!',
            data: doctors,
        });
    } catch (error) {
        console.error('Not Found:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
        });
    }
};
