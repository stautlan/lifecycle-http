import { TimeZones } from '../data/data'
// https://react.dev/reference/react-dom/components/select

type Props = {
    onChange: (value: string) => void;
}

const ComboUTCTime = ({onChange}: Props) => {
    function handleSelect(event: React.ChangeEvent<HTMLSelectElement>): void {
        //throw new Error('Function not implemented.')
        onChange(event.target.value.substring(3).replace(':', '.'))
    }

  return (
    <label className='input'>
    Временная зона: 
        <select onChange={handleSelect}>
        {TimeZones.map((item ,i) => (
            <option key={i} value={item.UTC}>{item.area}</option>
        ))}
        </select>
    </label>
  )
}

export default ComboUTCTime