function WeatherDisplay({ data, description }) {
  return (
    <>
      <section>
        <img
          src={data.current.condition.icon}
          alt={data.current.condition.text}
        />
        <h1>{data.location.name}</h1>
        <p>{data.current.condition.text}</p>
        <p>{data.current.temp_c} °C</p>
      </section>
      <section>
        <p>{description}</p>
      </section>
    </>
  );
}

export default WeatherDisplay;
