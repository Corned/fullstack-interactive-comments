const ProfilePicture = ({ className, src }) => {
  return <img
    className={`profile-picture ${className}`}
    //src={"../." + src}
    alt="Profile"
  />
}

export default ProfilePicture