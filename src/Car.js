function Car(props) {
  return props.name ? (
    <div>
      <h1>{props.name ? <span>{props.name}</span> : "Car"}</h1>
      <p>{props.price}</p>
    </div>
  ) : (
    <h1>Ma'lumot mavjud emas</h1>
  );
}

export default Car;
