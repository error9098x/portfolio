"use client"

import { useState, useRef } from "react"
import { Play, Pause } from "lucide-react"

interface AudioPlayerProps {
  audioUrl: string
}

export default function AudioPlayer({ audioUrl }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [playbackRate, setPlaybackRate] = useState(1)
  const audioRef = useRef<HTMLAudioElement>(null)

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const changePlaybackRate = (rate: number) => {
    if (audioRef.current) {
      audioRef.current.playbackRate = rate
      setPlaybackRate(rate)
    }
  }

  return (
    <div className="flex flex-col gap-2 p-4 bg-gray-700 rounded-lg">
      <audio ref={audioRef} src={audioUrl} onEnded={() => setIsPlaying(false)} className="hidden" />
      <div className="flex items-center gap-4">
        <button
          onClick={togglePlayPause}
          className="p-2 rounded-full bg-cyan-400 hover:bg-cyan-300 transition-colors"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? <Pause size={20} className="text-gray-800" /> : <Play size={20} className="text-gray-800" />}
        </button>
        <div className="flex gap-2">
          {[1, 1.5, 2].map((rate) => (
            <button
              key={rate}
              onClick={() => changePlaybackRate(rate)}
              className={`px-3 py-1 rounded ${
                playbackRate === rate ? "bg-cyan-400 text-gray-900" : "bg-gray-600 hover:bg-gray-500"
              } transition-colors`}
            >
              {rate}x
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}


