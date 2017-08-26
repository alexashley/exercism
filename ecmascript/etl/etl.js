const transform = prev => {
   return Object.entries(prev).reduce((prevObj, [point, letters]) => {
        const keys = letters.reduce((obj, letter) => { 
            return Object.assign({}, obj, {[letter.toLowerCase()]: parseInt(point) });
        }, {});
        return Object.assign({}, prevObj, keys);
   }, {}); 
}

export default transform;
