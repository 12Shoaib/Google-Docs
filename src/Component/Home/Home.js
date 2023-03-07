import home from './home.module.css'
import Header from '../Header/Header'
import {RiFolderDownloadFill} from 'react-icons/ri'
import { useRef, useState } from 'react'
import {imageAdress ,titleAtom} from '../../Recoil/Atom'
import { useRecoilValue } from 'recoil'
import html2canvas from 'html2canvas'

const Home = () => {
    const [show , setShow] = useState(false)
    const imageLocation  = useRecoilValue(imageAdress)
    const title  = useRecoilValue(titleAtom)
    const element_Control = useRef()
    const showValue = () => {
        setShow((prev) => !prev)
      }
    const hideValue = () => {
        setShow((prev) => !prev)
      }
    async function downloadPDF() {
        const sheetContent = document.getElementById(`edit`);
        const canvas = await html2canvas(sheetContent, { dpi: 300 });
        const imageData = canvas.toDataURL("image/png", 1.0);
        const pdfDoc = new jsPDF({
          orientation: "portrait",
          unit: "mm",
          format: "a4",
          compress: false,
        });
    pdfDoc.addImage(imageData, "PNG", 0, 0, 210, 297, "", "FAST");
    pdfDoc.save(`${title}.pdf`);
      }

    return(
        <>
            <Header element_Control={element_Control} />
        <div className={home.main_Component}>
            <div className={home.container}>
            <div className={home.textarea} ref={element_Control} contentEditable>
            <img src={imageLocation} className={home.image} />    
             </div>
            </div>
            <div onClick={downloadPDF} onMouseLeave={hideValue} onMouseOver={showValue} className={home.download_Wrapper}>
            <RiFolderDownloadFill onMouseLeave={hideValue} onMouseOver={showValue} className={home.download_Icon} />
            {show && <p  className={home.information}>Download</p>}
            </div>

        </div>
        </>
    )
}

export default Home