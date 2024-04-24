const Content = ({ content }) => {
  const atUsernameRegex = /@\w+/gm

  let lastMatch
  let lastIndex = 0
  let spans = []

  while ((lastMatch = atUsernameRegex.exec(content))) {
    const { 0: username, index } = lastMatch

    let usernameMatch = content.substring(lastIndex, index)
    if (usernameMatch !== "") {
      spans.push(
        <span key={`@${index.toString()}`}>
          { usernameMatch }
        </span>
      )
    }

    spans.push(
      <span key={index.toString()} className="comment__ping">
        { content.substr(index, username.length) }
      </span>
    )

    lastIndex = index + username.length
  }

  spans.push(<span key="rest">{ content.substr(lastIndex, content.length) }</span>)

  return (
    <p className="comment__content">{ spans }</p>
  )
}

export default Content