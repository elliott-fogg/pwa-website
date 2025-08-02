import { useState, useEffect, useRef } from 'react'

export default function Chat() {
  const [messages, setMessages] = useState([
    { sender: 'me', text: 'Hey!' },
    { sender: 'her', text: 'Hi 🥰' }
  ])
  const [input, setInput] = useState('')
  const messagesEndRef = useRef(null)

  const sendMessage = () => {
    const trimmed = input.trim()
    if (!trimmed) return
    setMessages(prev => [...prev, { sender: 'me', text: trimmed }])
    setInput('')
    setTimeout(() => {
      setMessages(prev => [...prev, { sender: 'her', text: '❤️ Got it!' }])
    }, 1000)
  }

  // Scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <div
      className="flex flex-col bg-gray-50"
      style={{
        height: '100vh',
        maxHeight: '100vh',
        width: '100vw',
        maxWidth: '100vw',
        paddingTop: 'env(safe-area-inset-top)',
        paddingBottom: 'env(safe-area-inset-bottom)',
        paddingLeft: 'env(safe-area-inset-left)',
        paddingRight: 'env(safe-area-inset-right)',
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
        WebkitFontSmoothing: 'antialiased',
        scrollBehavior: 'smooth'
      }}
    >
      <div className="flex-1 overflow-y-auto px-4 py-2 space-y-2">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`max-w-[70%] p-3 rounded-lg whitespace-pre-line break-words ${
              msg.sender === 'me'
                ? 'ml-auto bg-blue-500 text-white'
                : 'mr-auto bg-gray-200 text-gray-900'
            }`}
          >
            {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="flex px-4 py-3 border-t border-gray-300 bg-white">
        <input
          type="text"
          className="flex-1 border rounded-l-lg px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          autoComplete="off"
          spellCheck={false}
        />
        <button
          onClick={sendMessage}
          className="bg-blue-600 text-white px-5 rounded-r-lg hover:bg-blue-700 active:bg-blue-800 transition"
        >
          Send
        </button>
      </div>
    </div>
  )
}
