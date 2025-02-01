import React , {useRef , useEffect} from 'react';
import ThemeContext from '../../../ContextProvider';
const Novio = () => {
  const { show , setShow } = React.useContext(ThemeContext);
  const text1Ref = useRef();
  useEffect(()=>{
    text1Ref.current.style.color = show? 'black' : 'white';
  })
  return (
    <div ref={text1Ref} id="Novio" className='flex justify-center items-center ml-14'>
      <h1 className=" text-4xl fixed font-bold">Novio</h1>
    </div>
  );
};

export default Novio;
