function Stat(props) {
  let stat = props.value ? (
    <h3 className="text-xl mb-2 font-black">{props.value}</h3>
  ) : null

  return (
    <>
      { stat }
    </>
  )
}

export default Stat;
