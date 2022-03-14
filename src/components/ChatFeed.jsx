import React from 'react'
import MessageForm from './MessageForm'
import MyMessage from './MyMessage'
import TheirMessage from './TheirMessage'

const ChatFeed = (props) => {
  const { chats, activeChat, userName, messages } = props

  const chat = chats && chats[activeChat]
  // console.log(messages)

  const renderMessages = () => {
    const keys = Object.keys(messages)
    // console.log(keys)

    return keys.map((key, index) => {
      const message = messages[key]
      console.log(message)
      const lastMessageKey = index === 0 ? null : keys[index - 1]
      const isMyMessage = userName === message.sender.username

      return (
        <div key={`mgs_${index}`}>
          <div className='message-block'>
            {isMyMessage ? (
              <MyMessage message={message} />
            ) : (
              <TheirMessage
                message={message}
                lastMessage={messages[lastMessageKey]}
              />
            )}
          </div>
          <div className='read-receipts'>read receipts</div>
        </div>
      )
    })
  }

  return (
    <div className='chat-feed'>
      <div className='chat-title-container'>
        <div className='chat-title'>{chat.title}</div>
        <div className='chat-subtitle'>
          {chat.people.map((person) => ` ${person.person.username}`)}
        </div>
      </div>
      {renderMessages()}

      if(!chat) return 'Loading...'
      <div className='message-form-container'>
        <MessageForm {...props} chatId={activeChat} />
      </div>
    </div>
  )
}

export default ChatFeed
