import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import React  from 'react';


function Cost() {

    const [cost, setCost] = useState([]);
    const { SSid } = useParams();
    useEffect(() => {
        fetch("http://localhost:8080/cost/" + SSid)
            .then(res => res.json())
            .then((result) => { setCost(result); }
            );
    }, []);


    return (
        <>
            <div id="Cost">
                <h3>Package Expense</h3>
                <table className="table table-hover">
                    {/* <thead>
                        <tr>
                            <th scope="col">Sr. No.</th>
                            <th scope="col">Room Type</th>
                            <th scope="col">Deal Price</th>
                        </tr>
                    </thead> */}

                    <tbody>
                        {cost.map(cst => (
                            <>
                            <tr  style={{textAlign:"center", fontWeight:"bold"}}>
                                <td>Single Occupancy</td>
                                <td>Twin Sharing</td>
                                <td>Triple Sharing</td>
                                <td>Child With Parent</td>
                                <td>Child Without Parent</td>
                            </tr>
                            <tr style={{textAlign:"center"}}>
                            <td>₹ {cst.singleoccupancy}</td>
                            <td>₹ {cst.twinperson}</td>
                            <td>₹ {cst.tripplesharing}</td>
                            <td>₹ {cst.childwithparent}</td>
                            <td>₹ {cst.childwithoutparents}</td>
                            </tr>
                        </>
                        ))}
                    </tbody>
                </table>
                <br />
            </div>
        </>

    );
}

export default Cost;