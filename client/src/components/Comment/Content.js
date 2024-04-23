













const Content = ({ content }) => {


  const r = (/@\w+/gm)

  let match
  let lastIndex = 0
  let spans = []

  while (match = r.exec(content)) {
    const { 0: username, index } = match

    let s = content.substring(lastIndex, index)
    if (s !== "") {
      spans.push(<span>{ s }</span>)
    }

    spans.push(<span class="comment__ping">{ content.substr(index, username.length) }</span>)
    lastIndex = index + username.length
  }

  spans.push(<span>{ content.substr(lastIndex, content.length) }</span>)

  return (
    <p className="comment__content">{ spans }</p>
  )
}

export default Content