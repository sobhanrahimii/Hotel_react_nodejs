import "./footer.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const [ t ] = useTranslation('global')
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <li className="fListItem">{t('footer.link1')}</li>
          <li className="fListItem">{t('footer.link2')}</li>
          <li className="fListItem">{t('footer.link3')}</li>
          <li className="fListItem">{t('footer.link4')}</li>
          <li className="fListItem">{t('footer.link5')}</li>
          <li className="fListItem">{t('footer.link6')}</li>
        </ul>
        <ul className="fList">
        <li className="fListItem">{t('footer.link7')}</li>
        <li className="fListItem">{t('footer.link8')}</li>
        <li className="fListItem">{t('footer.link9')}</li>
        <li className="fListItem">{t('footer.link10')}</li>
        <li className="fListItem">{t('footer.link11')}</li>
        <li className="fListItem">{t('footer.link12')}</li>

        </ul>
        <ul className="fList">
        <li className="fListItem">{t('footer.link13')}</li>
        <li className="fListItem">{t('footer.link14')}</li>
        <li className="fListItem">{t('footer.link15')}</li>
        <li className="fListItem">{t('footer.link16')}</li>
        <li className="fListItem">{t('footer.link17')}</li>

        </ul>
        <ul className="fList">
        <li className="fListItem">{t('footer.link18')}</li>
        <li className="fListItem">{t('footer.link19')}</li>
        <li className="fListItem">{t('footer.link20')}</li>
        <li className="fListItem">{t('footer.link21')}</li>

        </ul>
        <ul className="fList">
        <li className="fListItem">{t('footer.link22')}</li>
        <li className="fListItem">{t('footer.link23')}</li>
        <li className="fListItem">{t('footer.link24')}</li>
        <li className="fListItem">{t('footer.link25')}</li>
        <li className="fListItem">{t('footer.link26')}</li>
        <li className="fListItem">{t('footer.link27')}</li>
        <li className="fListItem">{t('footer.link28')}</li>

        </ul>
      </div>
      <div className="fText">Copyright © 2022 Lamabooking.</div>
    </div>
  );
};

export default Footer;