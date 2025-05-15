function Firsttag() {
    return (
    <div>
      <h1>Hello</h1>
    </div>
    )
}

export function Secondtag(Y) {
  return(
    <div>
      <h1 style={{ color: Y.color }}>World is a better place with { Y.name }</h1>
    </div>
  )
}

export default Firsttag;