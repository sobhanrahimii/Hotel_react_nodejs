import { useTranslation } from "react-i18next";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  const [t] = useTranslation('global')
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">{t('featuedProp.featuedPropName1')}</span>
        <span className="fpCity">{t('featuedProp.featuedPropCity1')}</span>
        <span className="fpPrice">{t('featuedProp.featuedPropPrice1')} $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>{t('featuedProp.featuedPropPrice1')}</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">{t('featuedProp.featuedPropName2')}</span>
        <span className="fpCity">{t('featuedProp.featuedPropCity2')}</span>
        <span className="fpPrice">{t('featuedProp.featuedPropPrice2')} $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>{t('featuedProp.featuedPropPrice2')}</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/232902339.jpg?k=3947def526b8af0429568b44f9716e79667d640842c48de5e66fd2a8b776accd&o=&hp=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">{t('featuedProp.featuedPropName3')}</span>
        <span className="fpCity">{t('featuedProp.featuedPropCity3')}</span>
        <span className="fpPrice">{t('featuedProp.featuedPropPrice3')} $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>{t('featuedProp.featuedPropPrice3')}</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1"
          alt=""
          className="fpImg"
        />
       <span className="fpName">{t('featuedProp.featuedPropName4')}</span>
        <span className="fpCity">{t('featuedProp.featuedPropCity4')}</span>
        <span className="fpPrice">{t('featuedProp.featuedPropPrice4')} $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>{t('featuedProp.featuedPropPrice4')}</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;