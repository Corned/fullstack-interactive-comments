const ProfilePicture = ({ className, src }) => {
  return <img
    className={`profile-picture ${className}`}
    src={"https://i.imgur.com/bhVbCL6_d.webp?maxwidth=50&shape=thumb&fidelity=high"}
    alt="Profile"
  />
}

export default ProfilePicture