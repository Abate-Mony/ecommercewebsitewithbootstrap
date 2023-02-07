import SpecailProduct from "../../components/SpecailProductt.jsx/SpecialProduct"
const SpecailProducts = () => {
  return (
    <div className="row px-4">
    <SpecailProduct rating={2} progress={33}/>
    <SpecailProduct progress={94} rating={4}/>
    <SpecailProduct progress={22} rating={5}/>
    <SpecailProduct progress={12} rating={1}/>
    <SpecailProduct progress={78} rating={0}/>
    <SpecailProduct progress={89} rating={3}/>
    </div>
  )
}

export default SpecailProducts