import './pageContainer.styles.css';

const PageContainer = ({title, children}) => {
  return ( 
    <div className="page-container">
      <div className="page-container-title secodary-bgcolor-medium">{title}</div>
      {children}
    </div>
  );
}
 
export default PageContainer;