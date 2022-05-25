import { Island } from "./island";
import { User } from "./user";
import { Image } from "./image"

Image.hasOne(User)
User.belongsTo(Image)

void Image.sync({alter: true})
void User.sync({alter: true})
void Island.sync({alter: true})


export {User, Image, Island} 

