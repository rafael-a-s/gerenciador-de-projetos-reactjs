import styles from './Message.module.css'
import {useState, useEffect} from 'react'
function Message({type, msg}){ // type = mensagem de erro, sucesso enfim ...

  const [ visible,setVisible] = useState(false)
  useEffect(() =>  {
    if(!msg){
      setVisible(false)
      return
    }

    setVisible(true)
    const time = setTimeout(() => {
        setVisible(false)
    }, [3000])

    return () => clearTimeout(time)
  }, [msg])
   return (
     <>
        {visible && (
          <div className={`${styles.message} ${styles[type]}`} >
            {msg}
          </div>
        )}
     </>
   )
}
export default Message