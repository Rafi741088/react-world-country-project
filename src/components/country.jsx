// country.jsx
export default function Country({ country }) {
  // Destructure safely or use optional chaining (?.) to prevent crashes

  return (
    <div>
      <h3>{name?.common}</h3>
      <img src={country.flags.flags.png} alt={country.flags.flags.png } style={{ width: '100px' }} />
    </div>
  );
}