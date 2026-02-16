import { useState } from "react"
import { images } from "/public/images"
import MemeForm from "./MemeForm"
import MemeDisplay from "./MemeDisplay"


const Content = () => {

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: images[Math.floor(Math.random() * images.length)]
  })

  const handleChange = (event) => {
    const { name, value } = event.target

    setMeme(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const getNewImage = () => {
    const random = images[Math.floor(Math.random() * images.length)]

    setMeme(prev => ({
      ...prev,
      randomImage: random
    }))
  }

  return (
    <div className="min-h-screen  bg-gradient-to-br from-purple-50 to-purple-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-2xl w-full border border-purple-100">
        
        <h2 className="text-2xl font-bold text-purple-700 mb-6 text-center">
          Meme Generator
        </h2>

        <MemeForm
          meme={meme}
          handleChange={handleChange}
          getNewImage={getNewImage}
        />

        <MemeDisplay meme={meme} />

      </div>
    </div>
  )
}

export default Content
