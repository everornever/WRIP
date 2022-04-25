import { React, useState, createRef,useEffect}  from 'react'
import RoutePlaning from "./RoutePlaning"
import { createFileName, useScreenshot } from 'use-react-screenshot'
import html2canvas from 'html2canvas';
import isEmpty from 'lodash.isempty';




function Main() {

    // const [el1, setEl1] = useState();
    // const [el2, setEl2] = useState();

    // function getScreenshotOfElement(element, posX, posY, width, height, callback) {
    //     html2canvas(element, {
    //         onrendered: function (canvas) {
    //             var context = canvas.getContext('2d');
    //             var imageData = context.getImageData(posX, posY, width, height).data;
    //             var outputCanvas = document.createElement('canvas');
    //             var outputContext = outputCanvas.getContext('2d');
    //             outputCanvas.width = width;
    //             outputCanvas.height = height;
    
    //             var idata = outputContext.createImageData(width, height);
    //             idata.data.set(imageData);
    //             outputContext.putImageData(idata, 0, 0);
    //             callback(outputCanvas.toDataURL().replace("data:image/png;base64,", ""));
    //         },
    //         width: width,
    //         height: height,
    //         useCORS: true,
    //         taintTest: false,
    //         allowTaint: false
    //     });
    // }
    
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //       const el1 = document.getElementById("screen")
    //       const el2 = document.getElementById("shot")
    //       setEl1(el1);
    //       setEl2(el2);
    //     },500)
    //     return () => {   
    //       clearTimeout(timer)
    //     }
    //   }, [])
    
    return (
        <div>
            {/* {console.log("EL1", el1)}
            {console.log("EL2", el2)} */}

            {/* <button onClick = { ()=>{
                !isEmpty(el1)?
                getScreenshotOfElement(
                el1
                .get(0), 0, 0, 100, 100,
                 function(data) {
                    el2.attr("src", "data:image/png;base64,"+data);
                    }): alert("empty")}
            }>Download screenshot</button> */}
              <div
            //   id="screen"
            //   ref={ref}
              >
              <RoutePlaning/>
              </div>
            <img
            id="shot"></img>
        </div>
    )
}

export default Main
// const ref = createRef(null);
    // const [image, takeScreenshot] = useScreenshot({
    //     type: "image/png",
    //     quality: 0.1
    //   })
    // const download = (image, {name = "img", extension = "png"} = {}) =>{
    //     const a = document.createElement("a");
    //     a.href = image;
    //     a.download = createFileName(extension, name);
    //     a.click();
    //   }
    //   const downloadScreenshot = () => {

    //     setTimeout(takeScreenshot(ref.current).then(download)
    //     , 5000)
          
          
          

    //   }