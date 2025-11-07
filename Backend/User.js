const mongoose = require("mongoose")

const bcryptjs = require("bcryptjs")

const userSchema = new mongoose.Schema({
    fullName: { type: String, required: true},
    email: { type: String, required:true, unique: true },
    password: { type: String, required: true },
    profileImageUrl: { type: String, default: null }
    }, {
        timestamps: true
    }
);

// hash password before saving
userSchema.pre('save', async function (next) { // a Mongoose middleware runs before saving a user.
    if (!this.isModified('password')) return next(); // If the password wasn't changed, skip hashing
    this.password = await bcryptjs.hash(this.password, 10); // password is new or changed, hash it with 10 salt rounds (more secure).
    next(); // Move on and finish saving the user.
})

// compare password
userSchema.methods.comparePassword = async function (candidatePassword) {
    return await bcryptjs.compare(candidatePassword, this.password)
}

module.exports = mongoose.model("User", userSchema)
// const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");

// const UserSchema = new mongoose.Schema(
//   {
//     fullName: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     profileImageUrl: { type: String, default: null },
//   },
//   { timestamps: true }
// );

// // Hash password before saving
// UserSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) return next();
//   this.password = await bcrypt.hash(this.password, 10);
//   next();
// });

// // Compare passwords
// UserSchema.methods.comparePassword = async function (candidatePassword) {
//   return await bcrypt.compare(candidatePassword, this.password);
// };

// module.exports = mongoose.model("User", UserSchema, "user");