import { CONTACT_INFO } from '@/lib/constants';

function getWhatsAppUrl(phone: string) {
  const digits = phone.replace(/\D/g, '');
  const message = encodeURIComponent(
    'Hello Hope Foundation, I would like to get in touch through WhatsApp.',
  );

  return `https://wa.me/${digits}?text=${message}`;
}

export default function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppUrl(CONTACT_INFO.phone)}
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact Hope Foundation on WhatsApp"
      title="Chat with Hope Foundation on WhatsApp"
    >
      <span className="whatsapp-button__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" role="img" focusable="false">
          <path d="M12 2.25A9.75 9.75 0 0 0 4.56 18.35L3 21l2.76-1.47A9.75 9.75 0 1 0 12 2.25Zm0 17.6c-1.2 0-2.38-.32-3.44-.92l-.25-.15-1.63.87.43-1.54-.16-.25a7.42 7.42 0 1 1 2.65 2.64l-.25-.15-.02.01a7.4 7.4 0 0 1-3.12-.84l.01-.01Z" />
          <path d="M16.77 13.8c-.26-.13-1.53-.76-1.77-.85-.24-.09-.41-.13-.58.13-.17.26-.67.85-.82 1.02-.15.17-.3.2-.56.07-.26-.13-1.11-.41-2.11-1.3-.78-.7-1.3-1.56-1.45-1.82-.15-.26-.02-.4.11-.53.11-.11.26-.3.39-.44.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.44-.07-.13-.58-1.4-.8-1.92-.21-.5-.43-.43-.58-.44h-.49c-.17 0-.44.06-.67.32-.23.26-.88.86-.88 2.1 0 1.23.9 2.43 1.03 2.6.13.17 1.77 2.71 4.3 3.8.6.26 1.07.42 1.44.54.6.19 1.15.17 1.58.1.48-.07 1.53-.62 1.74-1.22.21-.6.21-1.11.15-1.22-.07-.11-.24-.17-.5-.3Z" />
        </svg>
      </span>
    </a>
  );
}
