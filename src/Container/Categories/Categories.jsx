import { useState, useEffect } from 'react'
import { Categorycard } from '../../components'
import { shoes,jackets,watches } from '../../Constants/ProductImage'
const Categories = ({  view, name }) => {
    const [Data, setData] = useState([])
    useEffect(() => {
        if (name == "man") {
            const temp=shoes.map((shoe,index)=><Categorycard shoe={shoe} index={index} view={view} />)
            setData([...temp])
        }
        if(name=="jacket"){
            const temp=jackets.map((shoe,index)=><Categorycard shoe={shoe} index={index} view={view} />)
            setData([...temp])
        }
        if(name=="watch"){
            const temp=watches.map((shoe,index)=><Categorycard shoe={shoe} index={index} view={view} />)
            setData([...temp])
        }
  
    }, [name,view])

    return (
        <div className="container" >
            <div className=" overflow-auto scrollto pt-3 pb-6" style={{
                height: "calc(100vh - 110px)",
                overflowX: "hidden !important"
            }}>
                <div className="row  gy-3">
                    {
                        Data
                    }
                </div>

            </div>
        </div>
    )
}

export default Categories