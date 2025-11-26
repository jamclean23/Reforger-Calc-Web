  function calcRange (units: number, mils: number, setRange: any): void{
    let range: number = 0;

    // Mildot estimation
    if (units > 0 && mils > 0) {
      range = units*1000/mils;
    }

    // Round
    range = Math.floor(range * 100)/100;

    setRange(range);
  };



  export default calcRange;