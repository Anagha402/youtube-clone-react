export const API_KEY='AIzaSyDTRpa9mfdrXTXOHNZwMAUG2IDZ4mUsXao'

export const value_converter=(value)=>{
    if(value>=10000000){
        return Math.floor(value/10000000)+ 'M'
    }else if(value>=1000){
        return Math.floor(value/1000)+ 'K'
    }else{
        return value;
    }
}