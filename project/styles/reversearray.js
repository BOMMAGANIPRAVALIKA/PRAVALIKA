let s=["hello","hii","how","are","you"];
let rs=s.reverse();
console.log(rs);


let country=[
  
    { 
        "name":"India",
     "capital":"newdelhi",
      "population":2000,
    }
    ,
    {
  
    "name":"Canada",
      "capital":"Ottawa",
      "population":1800,
    },
    
    { 
        "name":"Japan",
      "capital":"tokyo",
      "population":160,
    },
    { 
        "name":"Russia",
      "capital":"moscow",
      "population":2200,
    }
      ]
      for(let c=0;c<country.length;c++)
      {
          if(country[c].population<2000)
          console.log(country[c].name)
      }