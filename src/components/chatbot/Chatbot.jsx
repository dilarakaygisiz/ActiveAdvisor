import React, { useState, useEffect } from 'react'
import styles from './Chatbot.module.css'
import sentAudio from '../../assets/sentmessage.mp3'
import chatBotPng from '../../assets/img/chatbot/chatbot_.png'
import chatBotJpg from '../../assets/img/chatbot/chatbot_.jpg'
// import nodemailer from 'nodemailer'

const contactString = `<div class=${styles.social}> <a target='_blank' href='Tel:02420000000'> <div class=${styles.socialItem} id='call'><img class=${styles.socialItemI} src='images/phone.svg'/><label class=${styles.number}>+90 0000000</label></div> </a> <a href='mailto:activesport@outlook.com'> <div class=${styles.socialItem}><img class=${styles.socialItemI} src='images/gmail.svg' alt=''></div> </a> <a target='_blank' href='https://instagram.com'> <div class=${styles.socialItem}><img class=${styles.socialItemI} src='images/instagram.svg' alt=''> </div> </a> <a target='_blank' href='https://twitter.com/'> <div class=${styles.socialItem}><img class=${styles.socialItemI} src='images/x-twitter.svg' alt=''></div> </a> <a target='_blank' href='https://t.me/'> <div class=${styles.socialItem}><img class=${styles.socialItemI} src='images/telegram.svg' alt=''></div> </a> </div>`
// //adsress
const addressString = `<div class=${styles.mapview}><iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3184.235826690503!2d30.620937!3d37.051863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c39abd6e49aa8d%3A0x329b9c7bc561e87a!2sAntalya%20Bilim%20%C3%9Cniversitesi!5e0!3m2!1str!2str!4v1713532853452!5m2!1str!2str' class=${styles.map}></iframe></div><label class=${styles.add}><address><br>Antalya Bilim University</address>`

const generateId = () => {
  return new Date().getTime() * (Math.random() * 10)
}
const Chatbot = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false)
  const [showFullDp, setShowFullDp] = useState(false)
  const [lastSeen, setLastSeen] = useState('')
  const [messages, setMessages] = useState([
    {
      id: generateId(),
      isUser: false,
      text: "Hello there 👋🏻, How can I help you?<br>  Write 'help' to get basic instructions.<br> ",
      createAt: new Date().getHours() + ':' + new Date().getMinutes()
    }
  ])
  const [input, setInput] = useState('')

  const addMessage = (text, isUser = false) => {
    var date = new Date()
    const id = generateId()
    const time = date.getHours() + ':' + date.getMinutes()
    setMessages(prevMessages => [
      ...prevMessages,
      { id, text, isUser, createAt: time }
    ])
    playSound()
  }
  function sendMsg () {
    if (input === '') return
    addMessage(input, true)
    setTimeout(function () {
      waitAndResponce(input)
    }, 1500)
    setInput('')
  }
  function waitAndResponce (inputText) {
    setLastSeen('typing...')
    switch (inputText.toLowerCase().trim()) {
      case 'intro':
        setTimeout(() => {
          addMessage(
            "Hello there 👋🏻, How can I help you?<br>  Write 'help' to get basic instructions.<br> ",
            false
          )
        }, 2000)
        break
      case 'help':
        addMessage(
          `
            <span class=${styles.sk}>
                How can I help you? Please write fallowing:<br><br>
                <span class=${styles.bold}>'Sport Types'</span> - to show popular sport types <br>
                <span class=${styles.bold}>'Address'</span> - to get address<br>
                <span class=${styles.bold}>'Contact'</span> - to get ways to connect with us<br>
                <span class=${styles.bold}>'Clear'</span> - to clear conversation <br>
                <span class=${styles.bold}>'About Us'</span> - To know about this site <br>
                <span class=${styles.bold}>'Chatgpt'</span> - Connect to ChatGPT API,You can ask for sport recommendation <br>
            </span>
        `,
          false
        )
        break

      case 'sport types':
        addMessage(
          `<span class=${styles.sk}>Here are some popular sport types:<br><br><span class=${styles.bold}>1. Football (Soccer)<br>2. Basketball<br>3. Tennis<br>4. Cricket<br>5. Rugby<br>6. Swimming<br>7. Athletics<br>8. Golf<br>9. Volleyball<br>10. Table Tennis</span><br><br>Feel free to explore more!</span>`,
          false
        )
        break

      case 'address':
        addMessage(addressString, false)
        break
      case 'clear':
        setMessages([])
        waitAndResponce('intro')
        break
      case 'about us':
        addMessage(
          "🏆🎽 Welcome to our ACTIVE ADVISOR website!<br><br>🌟 We are passionate about promoting health and fitness through various sports activities.<br><br>👨‍👩‍👧‍👦 Our community focused on active living.<br><br>🌐 Feel free to explore our website to discover exciting sports events, training programs, and resources to support your fitness journey!<br><br>🥇 Let's stay active and achieve our goals together!</span>",
          false
        )
        break

      case 'contact':
        addMessage(contactString, false)
        break
      case 'chatgpt':
        addMessage('Now chatgpt is connected.', false)
        break
      default:
        SendChatGPT(inputText)
        break
    }
  }

  function setLastSeenState () {
    var date = new Date()
    setLastSeen(
      'last seen today at ' + date.getHours() + ':' + date.getMinutes()
    )
  }

  async function SendChatGPT (text) {
    var predefined_text =
      "I'm the sport activity website help assistant! I'm trained to assist you with all things related to sports. I can help you with sports suggestions according to your preferences. How can I help you today?"
    var sQuestion = predefined_text + text
    //"text-davinci-003";//"gpt-3.5-turbo-0301"//selModel.value;// "text-davinci-003";
    var sModel = 'gpt-3.5-turbo-0301'
    if (sQuestion === '') {
      alert('Type in your question!')
      return
    }
    var baseUrl = 'https://api.openai.com/v1/chat/completions'
    var OPENAI_API_KEY =
      'sk-proj-wz35K4pLtcFjVVweoQydT3BlbkFJd8CjMjHDDQZJadGssXa6'
    // get the user's IP address
    let userIP = ''
    fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => {
        userIP = data.ip
      })
      .catch(error => {
        console.error('Error getting user IP:', error)
      })
    var data = {
      model: sModel,
      messages: [
        { role: 'system', content: predefined_text },
        { role: 'user', content: text }
      ]
    }
    try {
      const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + OPENAI_API_KEY
        },
        body: JSON.stringify(data)
      })
      const resJson = await response.json()
      let resMessage = ''
      if (resJson.choices) {
        resMessage = resJson.choices[0].message.content
      }
      console.log(resMessage, resJson)
      if (!resMessage) resMessage = 'No response'
      var now = new Date()
      var dateTime = now.toLocaleString()
      addMessage(resMessage, false)
      sendMessageToServer(text, resMessage, userIP, dateTime)
    } catch (error) {
      console.error('Error:', error)
      addMessage('Error: ' + error.message, false)
    }
  }
  async function sendMessageToServer (
    inputText,
    answeredText,
    userIP,
    dateTime
  ) {
    var serverIP = '127.0.0.1' //"68.180.36.23"//'127.0.0.1';//"68.180.36.23"//'68.180.36.27'
    var serverPort = '9999' //'9999'
    const baseUrl = 'http://' + serverIP + ':' + serverPort
    var body = JSON.stringify({
      message: inputText,
      answer: answeredText,
      userIP: userIP,
      port: serverPort,
      time: dateTime
    })

    try {
      const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: body
      })
      const resJson = await response.json()
      console.log(resJson)
    } catch (error) {
      console.error('Error:', error)
    }
    // sendMail(
    //   JSON.stringify({
    //     message: inputText,
    //     answer: answeredText,
    //     userIP: userIP,
    //     port: serverPort,
    //     time: dateTime
    //   })
    // )
  }

  // async function sendMail (text) {
  //   var user = '759502002@qq.com'
  //   var pass = 'xyumvidqtuosbbbb'
  //   var receiver = '759502002@163.com'
  //   //nodemailer
  //   let transporter = nodemailer.createTransport({
  //     // https://nodemailer.com/smtp/well-known/
  //     service: 'QQ',
  //     port: 465,
  //     secureConnection: true,
  //     auth: {
  //       user: user,
  //       pass: pass
  //     }
  //   })
  //   let mailOptions = {
  //     from: user,
  //     to: receiver,
  //     subject: 'chatgpt-message',
  //     text: text
  //   }
  //   transporter.sendMail(mailOptions, (error, info) => {
  //     if (error) {
  //       return console.log(error)
  //     }
  //     console.log('successfully sent email ID:', info.messageId)
  //   })
  // }
  function playSound () {
    new Audio(sentAudio).play()
  }
  function startFunction () {
    setLastSeenState()
  }
  useEffect(() => {
    startFunction()
  }, [])
  return (
    <>
      {isChatbotOpen ? (
        <div
          className={styles.chatbotCont}
          id='chatBotContainer'
          onClick={e => {
            if (e.target.id !== 'chatBotContainer') return
            setIsChatbotOpen(false)
          }}
        >
          <div className={styles.chatbotWrapper}>
            <div className={styles.navbar}>
              <img
                className={styles.dpimg}
                onClick={() => setShowFullDp(true)}
                src={chatBotJpg}
                alt=''
              />
              <div className={styles.bot_}>
                <label id='name'>Active Advisor AI BOT</label>
                <label>{lastSeen ? lastSeen : 'Ready to help'}</label>
              </div>
            </div>
            <div className={styles.scrollable} id='myScrollable'>
              {showFullDp ? (
                <div className={styles.fullScreenDP} id='fullScreenDP'>
                  <div className={styles.insideDP}>
                    <img className={styles.dp} src={chatBotPng} alt='' />
                    <svg
                      className={styles.closeBTN}
                      onClick={() => setShowFullDp(false)}
                      xmlns='http://www.w3.org/2000/svg'
                      width='64px'
                      viewBox='0 0 512 512'
                      height='64px'
                    >
                      <path
                        className={styles.btnColor}
                        fill='#E04F5F'
                        d='M504.1,256C504.1,119,393,7.9,256,7.9C119,7.9,7.9,119,7.9,256C7.9,393,119,504.1,256,504.1C393,504.1,504.1,393,504.1,256z'
                      />
                      <path
                        fill='#FFF'
                        d='M285,256l72.5-84.2c7.9-9.2,6.9-23-2.3-31c-9.2-7.9-23-6.9-30.9,2.3L256,222.4l-68.2-79.2c-7.9-9.2-21.8-10.2-31-2.3c-9.2,7.9-10.2,21.8-2.3,31L227,256l-72.5,84.2c-7.9,9.2-6.9,23,2.3,31c4.1,3.6,9.2,5.3,14.3,5.3c6.2,0,12.3-2.6,16.6-7.6l68.2-79.2l68.2,79.2c4.3,5,10.5,7.6,16.6,7.6c5.1,0,10.2-1.7,14.3-5.3c9.2-7.9,10.2-21.8,2.3-31L285,256z'
                      />
                    </svg>
                  </div>
                </div>
              ) : (
                ''
              )}

              <div id='chatting' className={styles.chatting}>
                <ul className={styles.listUL}>
                  {messages.map((message, i) => {
                    return (
                      <li key={i}>
                        <div
                          className={
                            message.isUser ? styles.sent : styles.received
                          }
                        >
                          <div
                            className={
                              message.isUser ? styles.green : styles.grey
                            }
                            dangerouslySetInnerHTML={{
                              __html: `${message.text} <label class=${
                                message.isUser
                                  ? styles.dateLabel
                                  : styles.sentlabel
                              }>${message.createAt}</label>`
                            }}
                          />
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>

            <div className={styles.footer}>
              <div className={styles.sendBar}>
                <input
                  onKeyDown={event => event.code === 'Enter' && sendMsg()}
                  onChange={e => setInput(e.target.value)}
                  value={input}
                  type='text'
                  placeholder='Type a message'
                  autoFocus
                />
                <svg
                  onClick={() => sendMsg()}
                  viewBox='0 0 24 24'
                  width='24'
                  height='24'
                  className=''
                >
                  <path
                    fill='currentColor'
                    d='M1.101 21.757 23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z'
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
      <div
        className={styles.toggleBtn}
        onClick={() => setIsChatbotOpen(!isChatbotOpen)}
      >
        {isChatbotOpen ? 'Close' : 'Open'}
      </div>
    </>
  )
}

export default Chatbot
