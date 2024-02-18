import { createContext, useContext, useRef, useEffect, useState } from "react"
//import { ChevronDown } from "react-feather"

const AccordianContext = createContext()

export default function Accordian({ children, value, onChange, ...props }) {
  const [selected, setSelected] = useState(value)

  useEffect(() => {
    onChange?.(selected)
  }, [selected])

  return (
    <ul {...props}>
      <AccordianContext.Provider value={{ selected, setSelected }}>
        {children}
      </AccordianContext.Provider>
    </ul>
  )
}

export function AccordianItem({ children, value, trigger, styles }) {
  const { selected, setSelected } = useContext(AccordianContext)
  const open = selected === value

  const ref = useRef(null)

  return (
    <li className={styles.wrapper}>
      <div
        role="button"
        onClick={() => setSelected(open ? null : value)}
        className={`${open ? 'text-ascent' : null} transition-colors ${styles.title}`}
      >
        {trigger}
        {/* <ChevronDown
          size={16}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        /> */}
        <svg className={`transition-transform inline-block w-7 h-aut text-white ${open ? "rotate-180" : ""}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 10.8284L7.0502 15.7782L5.63599 14.364L11.9999 8L18.3639 14.364L16.9497 15.7782L11.9999 10.8284Z"></path></svg>
      </div>
      <div
        className="overflow-y-hidden transition-all"
        style={{ height: open ? ref.current?.offsetHeight || 0 : 0 }}
      >
        <div className="p-4" ref={ref}>
          {children}
        </div>
      </div>
    </li>
  )
}