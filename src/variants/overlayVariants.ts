export const overlayVariants = {
  hidden: {
    opacity: 0,
    display: 'none',
    transition: {
      when: 'afterChildren',
    }
  },
  show: {
    opacity: 1,
    display: 'flex',
    transition: {
      when: 'beforeChildren',
    }
  }
}
