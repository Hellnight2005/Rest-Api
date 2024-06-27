const express = require("express");
const router = express.Router();
const {
  handleAllUser,
  getUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreatedUser,
} = require("../controllers/user");

router.route("/")
.get(handleAllUser)
.post(handleCreatedUser);

// Grouped routes for handling user by ID
router
  .route("/:id")
  .get(getUserById)
  .patch(handleUpdateUserById)
  .delete(handleDeleteUserById);

// POST /api/users - Create a new user


module.exports = router;
