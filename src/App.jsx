import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Privacy from './components/Privacy'
import Threats from './components/Threats'
import Quiz from './components/Quiz'
import Profile from './components/Profile'

function App() {
  return (
    <BrowserRouter>

      {/* Header */}
      <header className="mainHeader">
        <h1>D I G I - S U R E</h1>
        <p>DIGITAL SAFETY AND CYBERCRIME AWARENESS SYSTEM</p>
      </header>

      {/* Navigation */}
      <nav>
        <Link to="/">Home</Link>
        <Link to="/threats">Threats</Link>
        <Link to="/privacy">Privacy</Link>
        <Link to="/quiz">Quiz</Link>
        <Link to="/profile">Profile</Link>
      </nav>
      <Routes>

        <Route
          path="/"
          element={
            <>
              <section className="heroNew">
                <div className="heroOverlay">
                  <h2>Why Digital Safety Matters</h2>

                  <p>
                    In today’s interconnected digital world, individuals are constantly exposed
                    to cyber threats such as phishing attacks, identity theft, online fraud,
                    and misinformation.
                  </p>

                  <p>
                    Developing digital safety awareness enables users to identify suspicious
                    activities, protect sensitive information, and make responsible decisions
                    while interacting online.
                  </p>

                  <Link to="/quiz" className="startBtn">
                    Check Your Awareness
                  </Link>
                </div>
              </section>

              {/* Features Section */}
              <section className="featureSection">
                <div className="featureBox fb1">
                  <h3>Cyber Awareness</h3>
                  <p>Understand phishing, fraud and malware attacks.</p>
                </div>

                <div className="featureBox fb2">
                  <h3>Privacy Protection</h3>
                  <p>Learn safe digital practices and data security.</p>
                </div>

                <div className="featureBox fb4">
                  <h3>Cybercrime Response</h3>
                  <p>Learn steps to report incidents and secure your accounts.</p>
                </div>
              </section>

              {/* Info Section */}
              <section className="infoSection">
                <h2 className="infoTitle">Digital Safety</h2>

                <div className="infoGrid">
                  <div className="infoCard">
                    <h3>Rising Cyber Attacks</h3>
                    <p>
                      Millions of internet users face phishing, online fraud, and malware attacks.
                      Awareness helps in recognising threats early.
                    </p>
                  </div>

                  <div className="infoCard">
                    <h3>Data Privacy Protection</h3>
                    <p>
                      Protecting passwords, banking details, and personal identity is essential
                      for safe digital interaction.
                    </p>
                  </div>

                  <div className="infoCard">
                    <h3>Smart Digital Behaviour</h3>
                    <p>
                      Verifying links, using secure websites, and maintaining cyber hygiene
                      builds long-term digital safety.
                    </p>
                  </div>
                </div>
              </section>

              {/* Assessment Section */}
              <section className="featureSection">
                <div className="featureBox fb3">
                  <h3>Self Assessment</h3>
                  <p>Evaluate your digital safety awareness level.</p>

                  <Link to="/quiz" className="startBtn">
                    Take Assessment
                  </Link>
                </div>
              </section>

              {/* Footer */}
              <footer>
                <p>Web Programming Mini Project</p>
              </footer>
            </>
          }
        />

        {/* Other Pages */}
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/threats" element={<Threats />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/profile" element={<Profile />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App