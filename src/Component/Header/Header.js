import header from './header.module.css'
import {HiDocumentText} from 'react-icons/hi'
import {useState} from 'react'
import {BsTypeBold} from 'react-icons/bs'
import {BiItalic} from 'react-icons/bi'
import {ImUnderline} from 'react-icons/im'
import {IoMdRedo , IoMdUndo} from 'react-icons/io'
import {AiFillPrinter} from 'react-icons/ai'
import {MdPhotoSizeSelectActual} from 'react-icons/md'
import {AiOutlineAlignLeft , AiOutlineAlignRight ,AiOutlineAlignCenter} from 'react-icons/ai'
import {MdOutlineFormatListBulleted} from 'react-icons/md'
import {BiListOl} from 'react-icons/bi'
import {MdFormatClear} from 'react-icons/md'
import {MdFormatAlignJustify} from 'react-icons/md'
import {TbStrikethrough} from 'react-icons/tb'
import {handleRedo,handleUndo,handlePrint,handleBold,handleItalic,handleUnderline,handleRemoveFormat,handleLeft,handleCenter,handleRight,handleStretch,strikeThrough,handleOrderList,handleUnorderList,handleFont} from '../../Helper/Helper'
import {useRecoilState} from 'recoil'
import {imageAdress , titleAtom} from '../../Recoil/Atom'

const Header = ({element_Control}) => {
    const [imageLocation , setImageLocation] = useRecoilState(imageAdress)
    const [title, setTitle] = useRecoilState(titleAtom)
    const [show , setShow] = useState(false)
    const [fontSize , setFontSize] = useState(4)
    const [zoom , setZoom] = useState('')
    const [color, setColor] = useState('')
    const [backgroundColor, setBackgroundColor] = useState('')

    const showValue = () => {
      setShow((prev) => !prev)
    }
    const hideValue = () => {
      setShow((prev) => !prev)
    }
    const increaseFont = () => {
      setFontSize(fontSize+1)
      handleFont()
    }
    const decreaseFont = () => {
      setFontSize(fontSize-1)
      handleFont()
    }
    const handleFont = () => {
      document.execCommand("fontSize" , false , fontSize)
   }
   function handleBackgroundColor(e) {
    setBackgroundColor(e.target.value);
    document.execCommand("backColor", false, e.target.value);
    }
    function handleFontColor(e) {
      setColor(e.target.value);
      console.log(e.target.value);
      document.execCommand("foreColor", false, e.target.value);
    }
   const handleZoom = (e) => {
    setZoom(e.target.value)
    if(e.target.value === "100%"){
    element_Control.current.style.transform = "scale(1,1)" 
    }else if(e.target.value === "75%"){
      element_Control.current.style.transform = "scale(0.8,1)"
    }else if(e.target.value === "50%"){
      element_Control.current.style.transform = "scale(0.5,0.5)"
    }
   }
   console.log(zoom)
    return(
        <div className={header.main_Component}>
          <div className={header.header_Section}>  
          <HiDocumentText className={header.docs__Logo} /> 
          <input onMouseLeave={hideValue}  onMouseOver={showValue} onChange={(e) => setTitle(e.target.value)} value={title} className={header.tittle_text} />
         {show && <p className={header.name_Hover}>Rename</p> }
          </div>
          <div className={header.iconSection}>
           <button className={header.button_style} onClick={handleUndo} > <IoMdUndo className={header.icon_Size} /></button>
           <button className={header.button_style} onClick={handleRedo} ><IoMdRedo className={header.icon_Size}/></button>
           <button className={header.button_style} onClick={handlePrint}> <AiFillPrinter className={header.icon_Size}/></button>
            <select onChange={handleZoom}>
              <option>zoom</option>
              <option>100%</option>
              <option>75%</option>
              <option>50%</option>
            </select>
            <div className={header.button_Wrapper}>
            <button className={header.button} onClick={decreaseFont}>-</button>
            <p className={header.font_Size}>{fontSize}</p>
            <button className={header.button} onClick={increaseFont}>+</button>
            </div>
            <button className={header.button_style} onClick={handleBold}><BsTypeBold className={header.icon_Size} /></button>
            <button className={header.button_style} onClick={handleItalic}><BiItalic className={header.icon_Size}/></button>
            <button className={header.button_style} onClick={handleUnderline} > <ImUnderline className={header.icon_Size}/></button>
            <input onChange={(e) => setImageLocation(URL.createObjectURL(e.target.files[0])) } type='file' id='files' className={header.fileUpload} multiple/>
            <label for='files'><MdPhotoSizeSelectActual className={header.icon_Size}/></label>
            <button className={header.button_style} onClick={handleLeft}> <AiOutlineAlignLeft className={header.icon_Size}/> </button>
            <button className={header.button_style} onClick={handleCenter} > <AiOutlineAlignCenter className={header.icon_Size}/></button>
            <button className={header.button_style} onClick={handleRight}>  <AiOutlineAlignRight className={header.icon_Size}/></button>
            <button className={header.button_style} onClick={handleStretch}>  <MdFormatAlignJustify className={header.icon_Size}/></button>
            <button className={header.button_style} onClick={handleUnorderList} > <MdOutlineFormatListBulleted className={header.icon_Size}/></button>
            <button className={header.button_style} onClick={handleOrderList} > <BiListOl className={header.icon_Size1}/></button>
            <button className={header.button_style} onClick={handleRemoveFormat}>  <MdFormatClear className={header.icon_Size}/></button>
            <button className={header.button_style} onClick={strikeThrough} > <TbStrikethrough className={header.icon_Size}/></button>
            <input type="color" onChange={handleFontColor} value={color} />
            <input type="color" onChange={handleBackgroundColor} value={backgroundColor} />
          </div>
        </div>
    )
}

export default Header