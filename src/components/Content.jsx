import { useState, useEffect } from "react"
import MemeForm from "./MemeForm"
import MemeDisplay from "./MemeDisplay"


const Content = () => {

const [memes, setMemes] = useState([])
const [loading, setLoading] = useState(true)

useEffect(() => {
  const getMemes = async () => {
    try {
      const res = await fetch("https://api.imgflip.com/get_memes")
      if (!res.ok) throw new Error("Failed to fetch memes")
      const data = await res.json()
      setMemes(data.data.memes)
      setLoading(false)
    } catch (error) {
      console.error("Error fetching memes:", error)
      setLoading(false)
    }
  }
  getMemes()
}, [])

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: ""
  })

  useEffect(() => {
    if (memes.length > 0) {
      const randomIndex = Math.floor(Math.random() * memes.length)
      setMeme(prev => ({
        ...prev,
        topText: `${memes[randomIndex].name}`,
        randomImage: memes[randomIndex].url
      }))
    }
  }, [memes])


  const handleChange = (event) => {
    const { name, value } = event.target

    setMeme(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const getNewImage = () => {
    if (memes.length > 0) {
      const randomIndex = Math.floor(Math.random() * memes.length)
      const randomMeme = memes[randomIndex]
      setMeme(prev => ({
        ...prev,
        topText: randomMeme.name,
        randomImage: randomMeme.url
      }))
    }
  }

  return (
    <div className="min-h-screen  from-purple-50 to-purple-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-2xl w-full border border-purple-100">
        
        <h2 className="text-2xl font-bold text-purple-700 mb-6 text-center">
          Meme Generator
        </h2>

        <MemeForm
          meme={meme}
          handleChange={handleChange}
          getNewImage={getNewImage}
          loading={loading}
        />

        <MemeDisplay meme={meme} />

      </div>
    </div>
  )
}

export default Content
