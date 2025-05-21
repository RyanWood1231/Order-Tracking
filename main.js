function getTrackingUrl(carrier, trackingNumber) {
  switch (carrier.toUpperCase()) {
    case 'DHL':
      return `https://www.dhl.com/global-en/home/tracking.html?tracking-id=${trackingNumber}&submit=1`;
    case 'TNT':
      return `https://www.tnt.com/express/en_cn/site/shipping-tools/tracking.html?searchType=con&cons=${trackingNumber}&submit=1`;
    case 'DB':
      return `https://www.dbschenker.com/global/products/track-trace?reference=${trackingNumber}&submit=1`;
    default:
      return '#';
  }
}

function track(carrier) {
  let inputId = '';
  switch (carrier.toUpperCase()) {
    case 'DHL':
      inputId = 'dhl-input';
      break;
    case 'TNT':
      inputId = 'tnt-input';
      break;
    case 'DB':
      inputId = 'db-input';
      break;
  }

  const trackingNumber = document.getElementById(inputId).value.trim();
  if (!trackingNumber) {
    alert(`请输入 ${carrier} 的运单号`);
    return;
  }

  const url = getTrackingUrl(carrier, trackingNumber);
  window.open(url, '_blank');
}
