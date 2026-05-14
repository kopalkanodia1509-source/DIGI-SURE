import { useState, useEffect } from "react"
import { Pie } from "react-chartjs-2"
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { Doughnut } from "react-chartjs-2"
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js"
ChartJS.register(ChartDataLabels)


import QuestionCard from "./QuestionCard"
ChartJS.register(ArcElement, Tooltip, Legend)

function Quiz() {
  const [enabled, setEnabled] = useState(false)
  const [score, setScore] = useState(null)
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")

  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [gender, setGender] = useState("")

  // 🔹 LOAD SAVED DATA
  useEffect(() => {
    const savedScore = JSON.parse(localStorage.getItem("quizScore"))
    const savedMessage = localStorage.getItem("quizMessage")

    /*if (savedScore) setScore(Number(savedScore))
    if (savedMessage) setMessage(savedMessage)*/
  
    if (savedScore !== null) {
      console.log("Previous Score", savedScore)
      
    }
    if(savedMessage)
    {
      console.log("Previous Message:",savedMessage)
    }
  }, [])
  useEffect(() => {
  if (score !== null) {
    localStorage.setItem("quizScore", score)
    localStorage.setItem("quizMessage", message)
  }
}, [score, message])

  const enableQuestions = (n, a, g) => {
    if (n && a && g) setEnabled(true)
  }

  const calculateScore = () => {

    setError("")

    const radios = ['q1','q2','q5','q8','q10']

    for (let r of radios) {
      if (!document.querySelector(`input[name="${r}"]:checked`)) {
        setError("⚠ Please answer all questions!")
        return
      }
    }

    let total = 0

    const q1 = document.querySelector('input[name="q1"]:checked').value
    const q2 = document.querySelector('input[name="q2"]:checked').value
    const q5 = document.querySelector('input[name="q5"]:checked').value
    const q8 = document.querySelector('input[name="q8"]:checked').value
    const q10 = document.querySelector('input[name="q10"]:checked').value

    const q3 = document.getElementById("q3").value
    const q6 = document.getElementById("q6").value
    const q9 = document.getElementById("q9").value

    const q4 = document.getElementById("q4").value.toLowerCase()
    const q7 = document.getElementById("q7").value.toLowerCase()

    total += Number(q1) + Number(q2) + Number(q5) + Number(q8) + Number(q10)
    total += Number(q3) + Number(q6) + Number(q9)

    if (q4 === "otp") total++
    if (q7 === "phishing") total++

    setScore(total)
    console.log("Calculated Score:",total)
    if (total >= 8) 
    {
      setMessage("🟢 Excellent Awareness") 
      console.log("🟢 Excellent Awareness")
    } 
    else if (total >= 5){
      setMessage("🟡 Moderate Awareness")
      console.log("🟡 Moderate Awareness")
    } 
    else 
      {
        setMessage("🔴 Low Awareness")
        console.log("🔴 Low Awareness")
      }
  }
const chartData = {
    labels: ["Correct", "Incorrect"],
    datasets: [
      {
        data: score ? [score, 10 - score] : [0, 10],
        backgroundColor: ["#4caf50", "#f44336"],
        
      },
    ],
  }
  const options = {
  plugins: {
    datalabels: {
      color: "#fff",
      font: {
        weight: "bold",
        size: 20,
        
      },
      formatter: (value, context) => {
        const total = context.chart.data.datasets[0].data.reduce((a, b) => a + b, 0)
        const percentage = ((value / total) * 100).toFixed(0) + "%"
        return percentage
      },
    },
  },
}
  return (
  <section className="quizBg">
  <header className="mainHeader">
    <h1>Digital Safety Self Assessment</h1>
  </header>
<div className="quizWrapper">
        <div className="quizCard">
          <h2>User Details</h2>
          <input
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value)
              enableQuestions(e.target.value, age, gender)
            }}
          />
          <input
            placeholder="Age"
            type="number"
            value={age}
            onChange={(e) => {
              setAge(e.target.value)
              enableQuestions(name, e.target.value, gender)
            }}
          />
          <select
            value={gender}
            onChange={(e) => {
              setGender(e.target.value)
              enableQuestions(name, age, e.target.value)
            }}
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
          <hr />
          <div className={enabled ? "" : "disabledBlock"}>

            <h2>Assessment Questions</h2>

            <QuestionCard question="1. Do you use antivirus in your computer?">
              <label><input type="radio" name="q1" value="1" disabled={!enabled}/> Yes</label>
              <label><input type="radio" name="q1" value="0" disabled={!enabled}/> No</label>
            </QuestionCard>

            <QuestionCard question="2. Do you verify links before clicking?">
              <label><input type="radio" name="q2" value="1" disabled={!enabled}/> Yes</label>
              <label><input type="radio" name="q2" value="0" disabled={!enabled}/> No</label>
            </QuestionCard>

            <QuestionCard question="3.Among the options which one is a secure password?">
              <select id="q3" disabled={!enabled}>
                <option value="0">123456</option>
                <option value="1">A@7kP!92</option>
              </select>
            </QuestionCard>

            <QuestionCard question="4. You should never share your? Hint:(pto in reverse)">
              <input id="q4" disabled={!enabled}/>
            </QuestionCard>

            <QuestionCard question="5. Do you enable 2FA?">
            <label><input type="radio" name="q5" value="1" /> Yes</label>
            <label><input type="radio" name="q5" value="0" /> No</label>
            </QuestionCard>

            <QuestionCard question="6. Which website is safer?">
            <select id="q6">
                <option value="1">https://securebank.com</option>
                <option value="0">http://freegift.net</option>
              </select>
            </QuestionCard>

            <QuestionCard question="7. What is cyber attack stealing login data called?">
              <input type="text" id="q7"/>
            </QuestionCard>

            <QuestionCard question="8.Do you logout on public computers after using?">
            <label><input type="radio" name="q8" value="1" /> Yes</label>
            <label><input type="radio" name="q8" value="0" /> No</label>
            </QuestionCard>

            <QuestionCard question="9.Which is a better option?">
            <select id="q9">
                <option value="1">Updating passwords</option>
                <option value="0">Sharing OTP</option>
                <option value="0">Clicking unknown links</option>
              </select>
            </QuestionCard>

            <QuestionCard question="10.Do you keep your social media private?">
            <label><input type="radio" name="q10" value="1" /> Yes</label>
            <label><input type="radio" name="q10" value="0" /> No</label>
            </QuestionCard>

            <button className="submitBtn" onClick={calculateScore}>
              Show Result
            </button>
          

            {error && <p style={{color:"red"}}>{error}</p>}

            {score !== null && (
              <>
                <h3>Your Score: {score}/10</h3>
                
                <h3>{message}</h3>

                <div style={{width:"300px"}}>
                  
                  <Doughnut data={chartData} options={options} />
                </div>
              </>
            )}

          </div>

        </div>

      </div>

    </section>
  )
}

export default Quiz