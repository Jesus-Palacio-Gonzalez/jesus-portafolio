import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { getStoredConsent, storeConsent, loadGoogleAnalytics } from '../lib/analytics';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = getStoredConsent();

    if (consent === 'accepted') {
      loadGoogleAnalytics();
    } else if (consent === null) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    storeConsent('accepted');
    loadGoogleAnalytics();
    setVisible(false);
  };

  const handleReject = () => {
    storeConsent('rejected');
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 px-5 sm:px-8 md:px-10 pb-5 sm:pb-6"
        >
          <div
            className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-4 sm:gap-6 rounded-[24px] sm:rounded-[30px] p-5 sm:p-6 border border-[#D7E2EA]/15"
            style={{
              background: 'rgba(12, 12, 12, 0.92)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <p className="text-[#D7E2EA] font-light text-sm sm:text-base leading-relaxed flex-1 text-center sm:text-left">
              En PalacioTECH utilizamos cookies para ofrecer una experiencia de navegación más rápida, segura y personalizada. Al continuar navegando, aceptas nuestro uso de cookies conforme a nuestra Política de Privacidad.
            </p>

            <div className="flex gap-3 flex-shrink-0">
              <button
                onClick={handleReject}
                className="rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-5 py-2.5 text-xs sm:text-sm transition-colors duration-200 hover:bg-[#D7E2EA]/10"
              >
                Rechazar
              </button>
              <button
                onClick={handleAccept}
                className="rounded-full text-white font-medium uppercase tracking-widest px-5 py-2.5 text-xs sm:text-sm transition-opacity duration-200 hover:opacity-80"
                style={{
                  background:
                    'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                  boxShadow:
                    '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
                  outline: '2px solid white',
                  outlineOffset: '-3px',
                }}
              >
                Aceptar
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}