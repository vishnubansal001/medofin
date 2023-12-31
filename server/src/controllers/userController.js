import User from '../models/userSchema.js'


// update user
export const updateUser = async (req, res) => {
    const id = req.params.id

    try {
        const updateUser = await User.findByIdAndUpdate(
            id,
            { $set: req.body },
            { new: true }
        )
        res.status(200).json({
            success: true,
            message: 'User updated successfully',
            data: updateUser,
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
export const deleteUser = async (req, res) => {
    const id = req.params.id

    try {
        const updateUser = await User.findByIdAndDelete(
            id,
        )
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
export const getSingleUser = async (req, res) => {
    const id = req.params.id

    try {
        const user = await User.findById(
            id,
        ).select('-password');
        res.status(200).json({
            success: true,
            message: 'User Found !',
            data: user,
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
export const getAllUser = async (req, res) => {
    const id = req.params.id

    try {
        const users = await User.find({}).select('-password');
        res.status(200).json({
            success: true,
            message: 'Users Found !',
            data: users,
        })
    } catch (error) {
        console.error('Not Found !!:', error)
        res.status(500).json({
            success: false,
            message: 'Internal server error',
        })
    }
}





