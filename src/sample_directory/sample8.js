import React from 'react' ;

const Hello = (props) => {
    return <div>こんにちは,{props.name}</div> ;
};

ReactDOM.render(
    <div>
        <Hello name="坂本龍馬" />
        <Hello name="西郷隆盛" />
        <Hello name="勝海舟" />
    </div>
    document.getElementById('root')
)