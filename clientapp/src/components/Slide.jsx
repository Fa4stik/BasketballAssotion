export default function Slide({ image }) {
  return (
    <div
      style={{

        height: "100%",
        width: "100%",
        marginLeft: "15px",
      }}
    >
      <img
        style={{ height: "100%", width:'100%', objectFit: "cover" }}
        src={image}
        alt=""
      />
    </div>
  );
}
