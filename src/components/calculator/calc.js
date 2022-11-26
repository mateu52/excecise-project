
    function useCounter(initialValue = ''){
        const [ value, setValue ] =useState(initialValue);
        const sendChange = ( props ) => {
            if(props==='del'){
                setValue('')
            }else{
                const sum= value+props;
                setValue(sum);
            }
        };
        return [ value, sendChange ];
    }
    function useSume(value1 = '', value2 = '', value3 = ''){
        const [value, setValue ] = useState('');
        const val_1 = value1; 
        const val_2 = value2;
        const sendChange = () => {
            //if '+'
            setValue( val_1 + val_2 );
        }
        return [ value, sendChange ];
    }
    const [ counter, setCounter ] = useCounter(''); //wyswietlacz
    const [ numbers, setNumber ] = useState('') //liczba w stanie
    const [ action, setAction ] = useState('') // działanie
    const [ sume, setSume ] = useSume(''); //wynik
    const hClick = ( event) => {
        console.log(Number.isInteger(event))
        if(Number.isInteger(event)===true){
            setCounter(event)
        }else if(event === 'sum'){
            setSume(counter, numbers)
            console.log('hfg')
        }else if(event === '+' || '-' || '*' || '/' ){
            setNumber(counter)
            setCounter('del');
            setAction(event)
        }
    }