export default function Slide({ image }) {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "200px",
        width: "350px",
      }}
    ></div>
  );
}
