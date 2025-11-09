"use client"

import { useState, useEffect, useRef } from "react"
import { CharacterStats } from "@/components/ffvii/character-stats"
import { MenuSidebar } from "@/components/ffvii/menu-sidebar"
import { CHARACTER_FILES } from "@/assets/data/ff7-data"
import "@/styles/ffvii.css"

export default function FF7Menu() {
  const [currentFile, setCurrentFile] = useState(0)
  const [gameData, setGameData] = useState(CHARACTER_FILES[0])
  const [selectedMenu, setSelectedMenu] = useState(0)
  const [totalPlayed, setTotalPlayed] = useState(0)
  const moveAudioRef = useRef(null)
  const loadAudioRef = useRef(null)

  // Initialize time from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("totalPlayed")
    setTotalPlayed(stored ? JSON.parse(stored) : 1)
  }, [])

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTotalPlayed((prev) => {
        const newTime = prev + 1
        localStorage.setItem("totalPlayed", JSON.stringify(newTime))
        return newTime
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.keyCode === 72 || e.keyCode === 104) {
        // H key - toggle extras
        setHideExtras((prev) => !prev)
      } else if (e.keyCode === 38) {
        // Up arrow
        moveAudioRef.current?.play()
        setSelectedMenu((prev) => {
          if (prev > 0) {
            return prev === 9 ? (gameData.phsExist === "yes" && gameData.phs === "no" ? prev - 1 : 7) : prev - 1
          }
          return 10
        })
      } else if (e.keyCode === 40) {
        // Down arrow
        moveAudioRef.current?.play()
        setSelectedMenu((prev) => {
          if (prev < 10) {
            return prev === 7 && gameData.phsExist === "no" ? prev + 2 : prev + 1
          }
          return 0
        })
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [gameData])

  const handleFileChange = (fileNum) => {
    setShowTransition(true)
    loadAudioRef.current?.play()

    setTimeout(() => {
      setCurrentFile(fileNum)
      setGameData(CHARACTER_FILES[fileNum])
      setSelectedMenu(0)
      setShowTransition(false)
    }, 3900)
  }

  const handlePrevFile = () => {
    const newFile = currentFile > 0 ? currentFile - 1 : 4
    handleFileChange(newFile)
  }

  const handleNextFile = () => {
    const newFile = currentFile < 4 ? currentFile + 1 : 0
    handleFileChange(newFile)
  }

  return (
    <div className="ff7-container 
          bg-gradient-to-b from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 
          px-6 transition-colors duration-700 ">

      <div className="ff7-group " >
        <section>
          <CharacterStats data={gameData} />
          <MenuSidebar
            selectedMenu={selectedMenu}
            onMenuSelect={setSelectedMenu}
            onMove={() => moveAudioRef.current?.play()}
            gameData={gameData}
          />
        </section>

        <div className="ff7-controls ">
          <audio ref={moveAudioRef} src="https://www.dropbox.com/s/fiyx4q2mdwynraj/FF7CursorMove.mp3?raw=1" />
          <audio ref={loadAudioRef} src="https://www.dropbox.com/s/v04ewrevpnnsz03/FF7CursorSaveLoad.mp3?raw=1" />

          <audio controls autoPlay loop >
            <source src={gameData.musicUrl} type="audio/mp3" />
          </audio>

          <button
            className={`ff7-cursor left `}
            onClick={handlePrevFile}
            aria-label="Previous file"
          >
            <img src="https://www.dropbox.com/s/aj9em3nbz9yr9nl/FF7CursorLeft.png?raw=1" alt="Left cursor" />
          </button>

          <button
            className={`ff7-cursor right`}
            onClick={handleNextFile}
            aria-label="Next file"
          >
            <img src="https://www.dropbox.com/s/1pq4d1ksjv3tuoz/FF7Cursor.png?raw=1" alt="Right cursor" />
          </button>

        </div>

        <div className="ff7-info-panel ">
          <div className={`ff7-time bg-gradient-to-b from-cyan-700 to-black`}>
            <div>
              Time <span className="time-value">{formatTime(totalPlayed)}</span>
            </div>
            <div>
              Gil <span className="gil-value">{formatGil(gameData.gil)}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

function formatTime(seconds) {
  if (seconds >= 360000) {
    return "99:99:99"
  }
  const hh = Math.floor(seconds / 3600)
  const mm = Math.floor((seconds % 3600) / 60)
  const ss = seconds % 60
  return `${hh}:${String(mm).padStart(2, "0")}:${String(ss).padStart(2, "0")}`
}

function formatGil(gil) {
  return gil.toLocaleString()
}
