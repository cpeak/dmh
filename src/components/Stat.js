function Stat(props) {
  let stat = props.value ? (
    <h3 className="text-2xl mb-2 leading-3 p-1 font-black">{props.value}</h3>
  ) : null

  return (
    <>
      { stat }
    </>
  )
}

export default Stat;
