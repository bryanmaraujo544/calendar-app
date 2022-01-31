export const overlayVariants = {
  hidden: {
    transition: {
      when: 'afterChildren',
    },
    opacity: 0,
    display: 'none',
  },
  show: {
    opacity: 1,
    display: 'flex',
    transition: {
      when: 'beforeChildren',
    }
  }
}
