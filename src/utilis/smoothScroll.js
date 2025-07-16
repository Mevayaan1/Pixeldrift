export const smoothScrollTo = (target) => {
  const element = document.querySelector(target);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};

export const smoothScroll = {
  to: smoothScrollTo,
  top: () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
};