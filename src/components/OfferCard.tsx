import { Link } from 'react-router-dom';
import type { Offer } from '../types';
import { getOfferTypeInfo } from '../utils/offerType';
import { API_BASE_URL } from '../config';
import { useLang } from '../utils/lang';
import { t } from '../i18n';

const OfferCard = ({ offer }: { offer: Offer }) => {
  const { lang, langPath } = useLang();
  const deadlineDate = new Date(offer.deadline);
  const today = new Date();
  const isExpired = deadlineDate < today;
  
  const offerTypeInfo = getOfferTypeInfo(offer.type);
  
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow flex flex-col h-full">
      <div className="p-6 flex-grow">
        <div className="flex justify-between items-start mb-2">
          <span className={`px-2 py-1 text-xs font-semibold rounded ${offerTypeInfo.color}`}>
            {offerTypeInfo.name}
          </span>
          <span className={`px-2 py-1 text-xs font-semibold rounded ${isExpired ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
            {isExpired ? t(lang, 'offer.expired') : `${t(lang, 'offer.expires')} ${deadlineDate.toLocaleDateString()}`}
          </span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{offer.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{offer.description}</p>
        <div className="grid grid-cols-1 gap-2 mb-4">
          <div>
            <p className="text-sm text-gray-500">{t(lang, 'offer.reference')}</p>
            <p className="font-medium">{offer.reference}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">{t(lang, 'offer.country')}</p>
            <p className="font-medium">{offer.country}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">{t(lang, 'offer.department')}</p>
            <p className="font-medium">{offer.department}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">{t(lang, 'offer.project')}</p>
            <p className="font-medium">{offer.projet}</p>
          </div>
        </div>
        {offer.tdr_url && (
          <button
            onClick={async (e) => {
              e.preventDefault();
              try {
                const response = await fetch(`${API_BASE_URL}${offer.tdr_url}`);
                if (!response.ok) throw new Error('Failed to fetch TDR');
                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `TDR_${offer.title}.pdf`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);
              } catch (err) {
                alert('Failed to download TDR');
                console.error(err);
              }
            }}
            className="text-sm text-blue-600 hover:underline cursor-pointer"
          >
            💾 {t(lang, 'offer.downloadTdr')}
          </button>
        )}
      </div>
      <div className="p-6 pt-0">
        {!isExpired && (
          <Link
            to={langPath(`/offer/${offer.id}`)}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-center block"
          >
            {t(lang, 'offer.learnMore')}
          </Link>
        )}
      </div>
    </div>
  );
};

export default OfferCard;