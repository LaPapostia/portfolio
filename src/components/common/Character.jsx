export default function Character({ name, level, hpMin, hpMax, mpMin, mpMax, img }) {
  return (
    <article className="character">
      <figure className="photoContainer">
        <img className="photo" src={img} alt={name} />
      </figure>

      <table className="statsTable">
        <tbody>
          <tr>
            <td colSpan="3">{name}</td>
          </tr>
          <tr>
            <td>LV</td>
            <td colSpan="2">{level}</td>
          </tr>
          <tr>
            <td>HP</td>
            <td>{hpMin}/</td>
            <td>{hpMax}</td>
          </tr>
          <tr>
            <td>MP</td>
            <td>{mpMin}/</td>
            <td>{mpMax}</td>
          </tr>
        </tbody>
      </table>

      <table className="levelsTable">
        <tbody>
          <tr>
            <td>next level</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>Limit level 1</td>
          </tr>
        </tbody>
      </table>
    </article>
  );
}
