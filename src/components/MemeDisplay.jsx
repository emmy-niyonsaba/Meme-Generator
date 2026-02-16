const MemeDisplay = ({ meme }) => {
  return (
    <div className="relative w-full h-64 rounded-xl mt-6 overflow-hidden">
      <img
        src={meme.randomImage}
        alt="Meme"
        className="w-full h-full object-cover"
      />

      <h1 className="absolute top-4 left-1/2 -translate-x-1/2 text-black font-extrabold text-2xl uppercase tracking-wide text-center px-2 drop-shadow-lg">
        {meme.topText}
      </h1>

      <h1 className="absolute bottom-4 left-1/2 -translate-x-1/2 text-black font-extrabold text-2xl uppercase tracking-wide text-center px-2 drop-shadow-lg">
        {meme.bottomText}
      </h1>
    </div>
  )
}

export default MemeDisplay
