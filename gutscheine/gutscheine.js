const paymentLinks = window.KUK_PAYPAL_LINKS || {};
const voucherButtons = [...document.querySelectorAll('.voucher-buy[data-amount]')];
const paymentStatus = document.querySelector('[data-payment-status]');

const isPayPalUrl = (value) => {
  if (!value) return false;

  try {
    const url = new URL(value);
    const host = url.hostname.toLowerCase();
    return url.protocol === 'https:' && (
      host === 'paypal.me' ||
      host === 'www.paypal.com' ||
      host.endsWith('.paypal.com')
    );
  } catch {
    return false;
  }
};

let configuredButtons = 0;

voucherButtons.forEach((button) => {
  const amount = button.dataset.amount;
  const paymentUrl = paymentLinks[amount];

  if (!isPayPalUrl(paymentUrl)) return;

  button.href = paymentUrl;
  button.target = '_blank';
  button.rel = 'noopener noreferrer';
  button.classList.add('payment-ready');
  button.innerHTML = `Sicher mit PayPal kaufen <span aria-hidden="true">↗</span>`;
  button.setAttribute('aria-label', `Workshop-Gutschein über ${amount} Euro sicher mit PayPal kaufen`);
  configuredButtons += 1;
});

if (paymentStatus && configuredButtons > 0) {
  paymentStatus.classList.add('payment-ready');

  if (configuredButtons === voucherButtons.length) {
    paymentStatus.innerHTML = '<span aria-hidden="true">●</span> Die Zahlung erfolgt sicher auf der von PayPal gehosteten Checkout-Seite. Es werden keine Zahlungsdaten auf dieser Website gespeichert.';
  } else {
    paymentStatus.innerHTML = '<span aria-hidden="true">●</span> Der 39-Euro-Gutschein kann bereits sicher über PayPal gekauft werden. Der 49-Euro-Gutschein bleibt bis zur Freischaltung seines Zahlungslinks per E-Mail anfragbar.';
  }
}
