function Display(props) {
  return (
    <>
    <h1>{props.generalInfo.firstName} {props.generalInfo.lastName}</h1>
    <p>{props.generalInfo.city}, {props.generalInfo.state} {props.generalInfo.zip}</p>
    <p>{props.generalInfo.phone}</p>
    <p>{props.generalInfo.email}</p>
    </>
  );
}

export default Display;