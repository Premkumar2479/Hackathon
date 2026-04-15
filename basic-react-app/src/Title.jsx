function Title() {
  let name = "Nick";
  return (
    <div>
      <p>2*2 = {2*2}</p>   {/* ✅ fixed */}
      <p>hi, {name.toUpperCase()}</p>
    </div>
  );
}

export default Title;