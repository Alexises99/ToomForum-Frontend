import { UserImageProps } from "../interfaces/nav/UserImage.interface"

const ImageUser = ({ className, user }: UserImageProps) => {
  const attributes = {
    className,
    alt: "avatar",
  }
  console.log(user)

  return !user ? (
    <img
      {...attributes}
      src="https://www.svgrepo.com/show/416739/account-customize-man.svg"
    />
  ) : (
    <img {...attributes} src={`/api/images/${user}`} />
  )
}

export default ImageUser
