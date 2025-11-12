const MENU_ITEMS = [
  { label: "Item", number: 0 },
  { label: "Magic", number: 1 },
  { label: "Materia", number: 2 },
  { label: "Equip", number: 3 },
  { label: "Status", number: 4 },
  { label: "Order", number: 5 },
  { label: "Limit", number: 6 },
  { label: "Config", number: 7 },
  { label: "PHS", number: 8, special: true },
  { label: "Save", number: 9 },
  { label: "Quit", number: 10 },
]

export function MenuSidebar({ selectedMenu, onMenuSelect, onMove, gameData }) {
  const handleItemClick = (index) => {
    onMenuSelect(index)
    onMove()
  }

  return (
    <aside className="ff7-aside">
      <ul className="ff7-menu bg-gradient-to-b from-cyan-700 to-black">

        {MENU_ITEMS.map((item) => {
          if (item.special) {
            const isPhsAvailable = gameData.phsExist === "yes"
            const isPhsActive = gameData.phs === "yes"
            return (
              <li
                key={item.number}
                className={`menu-item ${selectedMenu === item.number ? "selected" : ""}`}
                onClick={() => handleItemClick(item.number)}
              >
                {isPhsAvailable ? <span className={isPhsActive ? "active" : "inactive"}>PHS</span> : <br />}
              </li>
            )
          }

          const isSave = item.number === 9
          const isAvailable = isSave ? gameData.save === "yes" : true

          return (
            <li
              key={item.number}
              className={`menu-item ${selectedMenu === item.number ? "selected" : ""} ${isAvailable ? "active" : "inactive"}`}
              onClick={() => handleItemClick(item.number)}
            >
              {item.label}
            </li>
          )
        })}
      </ul>
    </aside>
  )
}
