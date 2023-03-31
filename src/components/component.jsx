export const Button = (props) => {
  const { label } = props;
  return (
    //to style components add className in the component, not in the App.js
    <button className="button">{label}</button>  
    )
}