import { useState } from 'react';
import Back from './Back';



export default function Calculator({onSelect}) {
    const button=[7,8,9,"*",4,5,6,"-",1,2,3,"+",0,".","=","/"];
    const [first, setFirst] = useState([]);
    const [second, setSecond] = useState([]);
    const [operator, setOperator] = useState(null);

    function setClick(value){
        if(Number.isInteger(value) || value=="."){
            if(operator==null)
                setFirst([...first, value]);
            else
                setSecond([...second, value]);
        } 
        else if(['+','-','/','*',].includes(value)){
            setOperator(value);
        }
        else if(value=="="){
            let res=0;
            switch (operator) {
                case "+":
                    res=parseFloat(first.join(""))+parseFloat(second.join(""));
                    break;
                case "-":
                    res=parseFloat(first.join(""))-parseFloat(second.join(""));
                    break;
                case "*":
                    res=parseFloat(first.join(""))*parseFloat(second.join(""));
                    break;
                case "/":
                    res=parseFloat(first.join(""))/parseFloat(second.join(""));
                    break;
                default:
                    break;
            }
            setFirst([res]);
            setSecond([]);
            setOperator(null);
        }
    }

    return ( 
        <>
            <Back onSelect={onSelect} />
            <div className="bg-black rounded size-max p-1 mt-5">
                <p className='text-white size-full text-right text-5xl p-1 h-12'>{second.length!=0 ? second : first}</p>
                {button.map((value, index) => 
                    <Button value={value} index={index} click={() => setClick(value)} />   
                    )}
            </div>
        </>
    );
}

export function Button({value, index, click}) {
    return <>    
        {index%4 ? '' : <br />}
        <button className="w-16 h-16 bg-gray-300 text-2xl font-bold rounded-full hover:bg-gray-400 focus:outline-none focus:ring focus:ring-gray-500 m-1" onClick={click}>{value}</button>
    </>;
}