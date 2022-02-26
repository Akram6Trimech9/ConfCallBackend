const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    nom: String,
    prenom: String,
    email: String,
    motdepasse: String,
    image: String,
    role: { type: mongoose.Schema.Types.ObjectId, ref: 'role' },
    roleType: String,
    equipe: { type: mongoose.Schema.Types.ObjectId, ref: 'equipe' }
});

module.exports = mongoose.model("user", userSchema);
