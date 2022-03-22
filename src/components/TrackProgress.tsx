import {FC} from 'react'

interface TrackProgressProps {
  left: number
  right: number
  onChange: (e: any) => void
}
const TrackProgress: FC<TrackProgressProps> = ({left, right, onChange}) => {

  
  return (
    <div style={{display: 'flex', marginLeft: 10, alignItems: 'center', width: '100%'}}>
      <input 
        type="range"
        style={{width: '100%'}}
        min={0}
        max={right}
        value={left}
        onChange={onChange}
      />
      <div style={{whiteSpace: 'nowrap', marginLeft: 10}}>{left} / {right}</div>
    </div>
  )
}

export default TrackProgress