
const MemeForm = ({ meme, handleChange, getNewImage, loading }) => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        
        <div className="flex flex-col w-full">
          <label className="text-sm font-semibold text-gray-600 mb-2">
            Top Text
          </label>
          <input
            name="topText"
            type="text"
            placeholder="One does not simply..."
            className="rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition"
            value={meme.topText}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col w-full">
          <label className="text-sm font-semibold text-gray-600 mb-2">
            Bottom Text
          </label>
          <input
            name="bottomText"
            type="text"
            placeholder="Walk into Mordor"
            className="rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition"
            value={meme.bottomText}
            onChange={handleChange}
          />
        </div>

      </div>

      <button
        onClick={getNewImage}
        disabled={loading}
        className={`w-full ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-purple-600 hover:bg-purple-700 hover:cursor-pointer'} text-white font-semibold py-3 rounded-xl transition duration-300 shadow-md text-center`}
      >
        {loading ? 'Loading Memes...' : 'Get New Meme Image'}
      </button>
    </>
  )
}

export default MemeForm
