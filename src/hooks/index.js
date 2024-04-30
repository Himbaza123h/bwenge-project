export const useFormatNumberWithCommas = () => {
  const formatNumberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return formatNumberWithCommas;
};

// Hook to format a date
export const useFormatDate = () => {
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (seconds < 60) {
      return "Just now";
    } else if (minutes === 1) {
      return "1 min";
    } else if (minutes < 60) {
      return `${minutes} mins`;
    } else if (hours === 1) {
      return "1 hour";
    } else if (hours < 24) {
      return `${hours} hours`;
    } else if (days === 1) {
      return "Yesterday";
    } else if (days <= 7) {
      const date = new Date(timestamp);
      const options = {
        weekday: 'short',
        hour: '2-digit',
        minute: '2-digit'
      };
      return date.toLocaleDateString('en-US', options);
    } else {
      const options = {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      };
      return date.toLocaleDateString('en-US', options);
    }
  };

  return formatDate;
};

