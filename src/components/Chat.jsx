import { useState } from 'react'

export default function Chat() {
  const [messages, setMessages] = useState([
    { sender: 'me', text: 'Hey!' },
    { sender: 'her', text: 'Hi 🥰' }
  ])
  const [input, setInput] = useState('')

  const sendMessage = () => {
    if (!input.trim()) return
    setMessages([...messages, { sender: 'me', text: input }])
    setInput('')
    // TODO: Send to backend
  }

  return (
    <div className="flex flex-col h-screen p-4 bg-gray-50">
      <div className="flex-1 overflow-y-auto space-y-2">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`max-w-[70%] p-2 rounded-lg ${
              msg.sender === 'me' ? 'ml-auto bg-blue-500 text-white' : 'mr-auto bg-gray-200'
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex mt-2">
        <input
          className="flex-1 border p-2 rounded-l-lg"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button
          className="bg-blue-500 text-white px-4 rounded-r-lg"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  )
}
