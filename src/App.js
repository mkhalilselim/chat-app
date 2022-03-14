import { ChatEngine } from 'react-chat-engine'
import ChatFeed from './components/ChatFeed'
import './App.css'

function App() {
  return (
    <ChatEngine
      height='100vh'
      projectID='bbf34111-610a-4647-8845-23bc2da305fb'
      userName='mennakh'
      userSecret='1234'
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  )
}

export default App
