function Bonus(props) {

  var bonus = 0;

  switch (props.value) {
    case 1:
      bonus = -5
      break;
    case 2:
    case 3:
      bonus = -4
      break;
    case 4:
    case 5:
      bonus = -3
      break;
    case 6:
    case 7:
      bonus = -2
      break;
    case 8:
    case 9:
      bonus = -1
      break;
    case 10:
    case 11:
      bonus = 0
      break;
    case 12:
    case 13:
      bonus = 1
      break;
    case 14:
    case 15:
      bonus = 2
      break;
    case 16:
    case 17:
      bonus = 3
      break;
    case 18:
    case 19:
      bonus = 4
      break;
    case 20:
    case 21:
      bonus = 5
      break;
    case 22:
    case 23:
      bonus = 6
      break;
    case 24:
    case 25:
      bonus = 7
      break;
    case 26:
    case 27:
      bonus = 8
      break;
    case 28:
    case 29:
      bonus = 9
      break;
    case 30:
      bonus = 10
      break;
    default:
      break;
  }


  if (props.value > 10) {
    return <span className="block mx-auto w-8 text-sm bg-blue-900 text-white rounded-lg font-bold">+{bonus}</span>
  } else if (props.value < 10) {
    return <span className="block mx-auto w-8 text-sm bg-red-800 text-white rounded-lg font-bold">{bonus}</span>
  } else if (bonus === 10) {
    return null
  } else {
    return null
  }
}

export default Bonus;
