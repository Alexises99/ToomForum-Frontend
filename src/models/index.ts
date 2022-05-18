import { Island } from "./island";
import { User } from "./user";

User.hasOne(Island)
Island.belongsTo(User)

void User.sync()
void Island.sync()

export {User} 

