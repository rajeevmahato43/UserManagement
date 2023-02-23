import express from "express";
const router = express.Router();
import UserService from "../service/userService";

// Add a user
router.post('/users', async (req, res) => {
    const { name, email, dob } = req.body;

    // Generate unique ID for the new user
    const id = new Date().getTime();

    const user: User = { id, name, email, dob };
    let userService = new UserService();
    await userService.saveUser(user);
    res.status(201).json(user);
});
// Get a particular user by ID
router.get('/users/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    let userService = new UserService();
    const user = await userService.getUser(id);
    if (user) {
        res.json(user);
    } else {
        res.send("User Not Available");
    }
});

// Delete a particular user by ID
router.delete('/users/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    let userService = new UserService();
    const user = await userService.deleteUser(id);

    if (user) {
        res.sendStatus(204);
    } else {
        res.sendStatus(404);
    }
});

export {
    router
}