const collectText = (el, acc = []) => {
  if (el) {
    if (typeof el === 'string') acc.push(el)
    if (Array.isArray(el)) el.map((item) => collectText(item, acc))
    if (typeof el === 'object') collectText(el.props && el.props.children, acc)
  }
  return acc.join('').trim()
}

const Heading = ({ children: 