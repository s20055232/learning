export default function Card({
  locationPhoto = "/images/japan.jpg",
  country = "Japan",
  flag = "🇯🇵",
  days = 10,
  title = "Mount Fuji",
  description = "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
  mapLink = "https://maps.app.goo.gl/n2bKKcPzD8s4LFF16",
}) {
  return (
    <div className="card">
      <img src={locationPhoto} alt="location photo"></img>
      <h1>
        {country}
        {flag}
      </h1>
      <h2>{days} days</h2>
      <h2>{title}</h2>
      <article>{description}</article>
      <a href={mapLink}>View on Google Maps</a>
    </div>
  );
}
