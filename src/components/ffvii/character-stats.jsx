export function CharacterStats({ data }) {
  const characters = [
    data.firstCharacter,
    data.secondCharacter,
    data.thirdCharacter
  ].filter(c => c?.name)

  return (
    <section
      className="
        ff7-section
        bg-gradient-to-b from-cyan-700 to-black
        grid
        grid-cols-1 md:grid-cols-3
        gap-4
        p-4
      "
    >
      {characters.map((char, index) => (
        <CharacterCard
          key={char.name || index}
          character={char}
          position={index}
        />
      ))}
    </section>
  )
}

function CharacterCard({ character, position }) {
  if (!character?.name) return null

  const hpWidth = (character.hpCurrent / character.hpMax) * 145
  const mpWidth = (character.mpCurrent / character.mpMax) * 145
  const levelWidth = character.levelBar
  const limitWidth = character.limitBar

  const getLimitBarClass = () => {
    if (limitWidth === 180) return "limit-bar-break"
    if (character.status === "Fury") return "limit-bar-fury"
    if (character.status === "Sadness") return "limit-bar-sadness"
    return "limit-bar"
  }

  return (
    <div>

      <div className="grid grid-cols-7 grid-rows-7 place-items-center mb-2">

        {/* Imagen del personaje */}
        <div className="col-span-2 row-span-7 items-center pl-10">
          <figure className="character-photo-container">
            <img
              src={character.imageUrl || "/placeholder.svg"}
              alt={character.name}
              className={`character-photo ${character.position === "behind" ? "behind" : "front"}`}
            />
          </figure>
        </div>

        {/* Nombre del personaje */}
        <div className="col-span-5 w-full text-left text-lg font-bold pl-10">
          {character.name}
        </div>

        {/* Nivel del personaje */}
        <div className="col-span-2 w-full text-left pl-10 flex items-center gap-2">
          <span className="text-cyan-400">LV</span>
          <span className="text-white">{character.level}</span>
        </div>

        {/* Nivel del personaje */}
        <div className="col-span-3 w-full text-left pl-10 flex items-center">
          <p className="text-white">Next Level</p>
        </div>

        {/* Vida del Personaje */}
        <div className="col-span-3 w-full text-left pl-10 flex items-center gap-2">
          <span className="text-cyan-400">HP</span>
          <td className="text-white">{character.hpCurrent} /</td>
          <td className="text-white">{character.hpMax}</td>
        </div>
        {/* Barra de Nivel */}
        <div className="flex justify-start col-span-1">
          <div className="level-bar-background relative overflow-hidden">
            <div
              className="level-bar absolute inset-y-0 left-0"
              style={{ width: `${40}%` }}
            />
            
          </div>
        </div>


        {/* Barra de Vida */}
        <div className="flex justify-start col-span-3">
          <div className="hp-bar-background relative h-3 rounded overflow-hidden">
            <div
              className="hp-bar absolute inset-y-0 left-0"
              style={{ width: `${(character.hpCurrent / character.hpMax) * 100}%` }}
            />
          </div>
        </div>


        {/* Maná del Personaje */}
        <div className="col-span-3 row-span-1 w-full text-left pl-10 flex items-center gap-2">
          <span className="text-cyan-400">Maná</span>
          <td className="text-white">{character.mpCurrent} /</td>
          <td className="text-white">{character.mpMax}</td>
        </div>

        {/* Barra de Límite */}
        <div className="flex justify-start col-span-1">
          <div className="level-bar-background relative overflow-hidden">
            <div
              className="level-bar absolute inset-y-0 left-0"
              style={{ width: `${40}%` }}
            />
          </div>
        </div>


        {/* Barra de Maná */}
        <div className="flex justify-start col-span-3">
          <div className="mp-bar-background relative h-3 rounded overflow-hidden">
            <div
              className="mp-bar absolute inset-y-0 left-0"
              style={{ width: `${(character.mpCurrent / character.mpMax) * 100}%` }}
            />
          </div >
          
        </div>
      </div>

    </div>

  )
}

