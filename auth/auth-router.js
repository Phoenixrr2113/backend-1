const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const createToken = require("../token/tokenCoin"),createToken;
const Users = require("../models/user-model");



//need to generate password, user and ERRORS AS WELL AS LOGIN

router.post("api/register", (req, res) => {
    const user = req.body;

    if(!user.username || !user.password) {
        res.status(400).json({errorMessage: "Please provide correct login info."});
    } else {
    
    //generate hash
    const hEncrypt = bcrypt.hashSync(user.password, 10); 
    
    //override use.password
    user.password = hEncrypt;


    //Adds the user whilst sending back response
    Users.add(user)
    .then(userId => {
        user.id = userId;
        //Create token with user info - Login the user when registering
        const token = createToken(user);

        res.status(201).json({ userId: userId, token: token });
    })
    .catch(error => {
        res.status(500).json({
            errorMessage: "Oops something went wrong. Please try again."
        });
    });
    }
});

router.post("/api/login", (req, res) => {
    let { username, password } = req.body;

    if (!username || !password) {
        res.status(400).json({
            errorMessage: "Please provide a username, and password."
    });
    } else {
      Users.findBy({ username }) // Check username exist in database
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
            // Check that password is same as in database
                const token = createToken(user); // Create token because user is valid
                res.status(200).json({ message: `Welcome ${user.username}!`, token }); // Send token to client
        }   else {
            res.status(400).json({ errorMessage: "Incorrect Username & Password." });
            }
        })
        .catch(error => {
            res.status(500).json({
                errorMessage: "There was an error logging user"
        });
        });
    }
});
//doesnt work
// router.delete('/:id', (req, res) => {
//     const id = req.params.id;
//     actionsDB
//         .remove(id)
//         .then(count => {
//             if(count) {
//                 res.json({ message: "Action successfully deleted"})
//             }
//             else {
//                 res
//                     .status(404)
//                     .json({ error: "Action at specified ID could not be found "})
//             }
//         })
//         .catch(err => {
//             res
//                 .status(500)
//                 .json({ error: "Failed to delete action"})
//         })
// })

module.exports = router;
