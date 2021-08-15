import Loader from 'react-loader-spinner';


const Spinner = ({type, color, height, width}) => {
  return ( 
    <div className="page-loader-container">
      <Loader
          type={type}
          color={color}
          height={height}
          width={width}
      />
    </div>
  );
}
 
export default Spinner;