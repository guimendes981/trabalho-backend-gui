const z = require("zod");

const UserSchema = z.object({
  name: z.string({
    required_error: "Name required",
    invalid_type_error: "Name must be a string",
  }).min(3),

  email: z.string({
    required_error: "Description required",
  }).email("Invalid email."), 
  
  password: z.string({
    required_error: "Password required",
  })
});

const LoginSchema = z.object({
  email: z.string({
    required_error: "Description required",
  }).email("Invalid email."), 
  
  password: z.string({
    required_error: "Password required",
  })
});

module.exports = {
  UserSchema,
  LoginSchema
}