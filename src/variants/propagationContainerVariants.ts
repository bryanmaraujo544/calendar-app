export const propagationContainerVariants = {
  hidden: {
    opacity: 0,
    // transition: {
    //   staggerChildren: 0.1
    // }
  },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.25,
      staggerChildren: 0.25
    }
  }
}