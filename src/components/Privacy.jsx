function Privacy() {
  return (
    <div>

      <header className="mainHeader">
        <h1>Privacy Protection & Safety Practices</h1>
      </header>

      

      <section className="privacyHero">
        <h2>Protect Your Digital Identity</h2>
        <p>
          Online privacy awareness helps users safeguard sensitive data,
          avoid cyber risks and maintain secure digital behaviour.
        </p>
      </section>

      <section className="tipsSection">

        <h2 className="infoTitle">Essential Safety Practices</h2>

        <table className="tipsTable">
          <tr>
            <th>Practice</th>
            <th>Purpose</th>
          </tr>

          <tr>
            <td>Use Strong Passwords</td>
            <td>Prevents unauthorized access to accounts</td>
          </tr>

          <tr>
            <td>Enable Two Factor Authentication</td>
            <td>Adds extra layer of login security</td>
          </tr>

          <tr>
            <td>Avoid Public WiFi for Banking</td>
            <td>Reduces risk of data interception</td>
          </tr>

          <tr>
            <td>Never Share OTP</td>
            <td>Protects financial transactions</td>
          </tr>

          <tr>
            <td>Update Software Regularly</td>
            <td>Fixes security vulnerabilities</td>
          </tr>
        </table>

      </section>

      <section className="caseStudyCard">

        <h2>Real World Case Study</h2>

        <p>
          A user purchased products from a fake e-commerce website offering heavy
          discounts. After completing the payment, the website became inaccessible
          and the user faced financial loss.
        </p>

        <div className="caseHighlight">
          Key Learning: Always verify website authenticity, reviews and secure payment
          gateways before making online transactions.
        </div>

      </section>

      <footer>
        <p>Digital Safety Awareness Module</p>
      </footer>

    </div>
  )
}

export default Privacy