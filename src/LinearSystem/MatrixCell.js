import { useState } from "react";

const MatrixCell = ({n})=>{
    const [matrix, setMatrix] = useState(Array(n).fill(Array(n).fill(null)));
    
}

export default MatrixCell;