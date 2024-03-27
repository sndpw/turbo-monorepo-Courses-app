import { connectToDatabase } from "@repo/ui/lib/database/index.ts";
import Admin from "@repo/ui/lib/database/models/user.model.ts";
import jwt from "jsonwebtoken";

const SECRET = "admin_secret";
const MONGODB_URI = process.env.MONGODB_URL as string;
console.log(MONGODB_URI);
export async function POST(request: Request) {
  await connectToDatabase(MONGODB_URI);
  const userData = await request.json();

  const username = userData.username;
  const password = userData.password;

  const admin = await Admin.findOne({ username });
  if (admin) {
    Response.json({ message: "Admin already exists" });
    console.log("user exists");
  } else {
    const obj = { username: username, password: password };
    const newAdmin = new Admin(obj);
    newAdmin.save();

    const token = jwt.sign({ username, role: "admin" }, SECRET, {
      expiresIn: "1h",
    });
    console.log(token);
    Response.json({ message: "Admin created successfully", token });
  }
  return Response.json("", { status: 200 });
}
