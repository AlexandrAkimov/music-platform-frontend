import {FC, useRef} from 'react'

interface TrackProgressProps {
  left: number
  right: number
  showLeft?: string
  showRight?: string
  onChange: (e: any) => void
}
const TrackProgress: FC<TrackProgressProps> = ({left, right, showLeft, showRight, onChange}) => {

  const inputEl = useRef<any>(null);
  
  return (
    <div style={{display: 'flex', marginLeft: 10, alignItems: 'center', width: '100%'}}>
      <input 
        ref={inputEl}
        type="range"
        style={{width: '100%'}}
        min={0}
        max={right}
        value={left}
        onChange={onChange}
      />
      <div style={{whiteSpace: 'nowrap', marginLeft: 10}}>{showLeft || left} / {showRight || right}</div>
    </div>
  )
}

export default TrackProgress