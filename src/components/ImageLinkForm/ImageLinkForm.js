const ImageLinkForm=({onInputChange, onBtnClick})=> {
    return(
      <div>
        <p className="f3 lightest-blue">
            {'This Magic Brain will detect faces in your pictures. Give it a try.'}
        </p>
        <div className="pa4 br3 shadow-3 w-80 center">
            <input className='f4 pa2 w-70 center' type="text" onChange={onInputChange} />
            <button className='w-30 grow f4 link ph3 pv2 dib white bg-blue'onClick={onBtnClick}>Detect</button>
        </div>
      </div>  
    )
};

export default ImageLinkForm; 