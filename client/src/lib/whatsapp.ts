export const WHATSAPP_NUMBERS = ['919025491773', '918015700576'];

export const DEFAULT_WHATSAPP_MESSAGE =
  'Hello Aspra Overseas! I would like to inquire about your services. Please contact me.';

export function openWhatsAppChats(message = DEFAULT_WHATSAPP_MESSAGE) {
  const encodedMessage = encodeURIComponent(message);

  WHATSAPP_NUMBERS.forEach((number) => {
    window.open(`https://wa.me/${number}?text=${encodedMessage}`, '_blank', 'noopener,noreferrer');
  });
}
