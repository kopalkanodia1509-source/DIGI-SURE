import { useState,useEffect } from "react"

function Profile() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [age, setAge] = useState("")
  const [gender, setGender] = useState("")
  const [message, setMessage] = useState("")

  useEffect(() => {
    
    const savedProfile = JSON.parse(localStorage.getItem("profile"))

    if (savedProfile) {
      setName(savedProfile.name || "")
      setEmail(savedProfile.email || "")
      setAge(savedProfile.age || "")
      setGender(savedProfile.gender || "")
      console.log("Loaded from localStorage:", savedProfile);
    }
    else {
      console.log("No data found in localStorage");
    }
  }, [])

  // 🔹 SAVE DATA WHEN NAME CHANGES (example side effect)
  useEffect(() => {
    if (name) {
      console.log("Name updated:", name)
    }
  }, [name])

  const createProfile = () => {

    if (!name || !email || !password || !age || !gender) {
      setMessage("⚠ Please fill all fields")
      return
    }

    setMessage("Profile Created Successfully!")

    // Optional: store data
    console.log({ name, email, age, gender })
    const profileData = { name, email, age, gender }

    localStorage.setItem("profile", JSON.stringify(profileData))
    console.log("Saved Data:", profileData);
  }


  return (
    <section className="profileBg">

      <div className="profileCard">

        <h2>Create Your Profile</h2>

        <label>Full Name</label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
        />

        <label>Email</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <label>Age</label>
        <input
          type="number"
          onChange={(e) => setAge(e.target.value)}
        />

        <label>Gender</label>
        <select onChange={(e) => setGender(e.target.value)}>
          <option value="">Select</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>

        <button className="submitBtn" onClick={createProfile}>
          Create Profile
        </button>

        <h3>{message}</h3>

      </div>

    </section>
  )
}

export default Profile