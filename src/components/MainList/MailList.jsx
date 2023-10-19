import { useTranslation } from "react-i18next"
import "./mailList.css"

const MailList = () => {
  const [ t ] = useTranslation("global")
  return (
    <div className="mail">
      <h1 className="mailTitle">{t('mailList.title')}!</h1>
      <span className="mailDesc">{t('mailList.desc')}</span>
      <div className="mailInputContainer">
        <input type="text" placeholder={`${t('mailList.placeholder')}`} />
        <button>{t('mailList.Subscribe')}</button>
      </div>
    </div>
  )
}

export default MailList