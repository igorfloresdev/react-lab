export default function Button({ children, className, onClick }) {
  return (
    <button className={`btn${className ? ' ' + className : ''}`} onClick={onClick && onClick}>
      {children}
    </button>
  )
}
