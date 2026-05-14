import PropTypes from "prop-types"

function QuestionCard({ question, children }) {
  return (
    <div className="qItem">
      <p>{question}</p>
      {children}
    </div>
  )
}
QuestionCard.propTypes = {
  question: PropTypes.string.isRequired,
  children: PropTypes.node
}

export default QuestionCard