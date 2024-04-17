import { RotatingLines } from 'react-loader-spinner';

function Spinner() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '15%' }}>
        <RotatingLines 
            visible={true}
            height="96"
            width="96"
            color="grey"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{}}
            wrapperClass=""
            strokeColor="#938c8c"
        />
    </div>
  )
}

export default Spinner