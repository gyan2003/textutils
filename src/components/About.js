import React,{useState} from 'react'

export default function About(props) {
  
  return (
    <div className="container rounded-3" style={{border:props.mode==='dark'?'2px solid white':'none'}}>
     <h2 className='my-3' style={{color:props.mode==='dark'?'white':'#121212'}}>About Us</h2>
        <div className="accordion" id="accordionExample">
     <div className="accordion-item" style={{backgroundColor:props.mode==='dark'?'#121212':'white'}}>
     <h2 className="accordion-header" id="headingOne" style={{color:props.mode==='dark'?'white':'#121212'}}>
      <button className="accordion-button my-2" type="button" style={{backgroundColor:props.mode==='dark'?'#121212':'white',color:props.mode==='dark'?'white':'#121212',border:props.mode==='dark'?'2px solid white':'none'}} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
       <strong>Analyze Your Text</strong>
      </button>
      </h2>
     <div id="collapseOne" style={{color:props.mode==='dark'?'white':'#121212'}} className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" >
        TextUtils gives you a way to analyze your text quickly and efficiently.Beit word count oor character count. 
    </div>
  </div>
  <div className="accordion-item" style={{backgroundColor:props.mode==='dark'?'#121212':'white'}} >
    <h2 className="accordion-header" id="headingTwo" style={{color:props.mode==='dark'?'white':'#121212'}}>
      <button className="accordion-button collapsed my-2"  type="button" data-bs-toggle="collapse" style={{backgroundColor:props.mode==='dark'?'#121212':'white',color:props.mode==='dark'?'white':'#121212',border:props.mode==='dark'?'2px solid white':'none'}} data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Free to Use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" style={{color:props.mode==='dark'?'white':'#121212'}} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" >
       TextUtils is a free character counter tool that provides instant character count and word count statistcis for a giver text.TextUtils reports the number of words and characters.Thus it is suitable for writing text with word/character limit. 
      </div>
    </div>
  </div>
  <div className="accordion-item" style={{backgroundColor:props.mode==='dark'?'#121212':'white'}}>
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed my-2"  style={{backgroundColor:props.mode==='dark'?'#121212':'white',color:props.mode==='dark'?'white':'#121212',border:props.mode==='dark'?'2px solid white':'none'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Browser Compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" style={{color:props.mode==='dark'?'white':'#121212'}} className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" >
     This word counter softwarre works in any browser such as Chrome, Firefox,Internet Explorer, Safari,Opera.It suits to count characters in facebook, blog,books,excel document,pdf document,essays,etc. 
      </div>
    </div>
  </div>
</div>
    </div>
    </div>
  )
}
