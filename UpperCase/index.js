

// ------------- helper function -------------------

const __displayOnScreen = (value) => {
  const valueBeautify = JSON.stringify(value, undefined, 2);
  const appDiv = document.getElementById('app');
  appDiv.innerHTML = `<h1><pre>${valueBeautify}</pre></h1>`;
};

const isObject = (value) => {
  const type = typeof value;
  return value != null && (type === 'object' || type === 'function');
};

const upperCase = (strValue) => String.prototype.toUpperCase.call(strValue);

// ----------- end helper function -------------------

// ----------- Calling Implementation ------------------
const personObjectData = {
  id: 'uuid-32Xhonn',
  name: 'joe',
  level: 'novice',
  dept: {
    name: 'sales',
    details: {
      memberCount: 100,
      foo: [1, 2, 34],
    },
  },
};

const upperCaseObjectKeys = (obj) => {
  // implement here
  const ans=Object.keys(obj).reduce(function reduce(acc,key){
      acc[key.toUpperCase()]=obj[key];
      if(typeof(obj[key])==="object"){
          acc[key.toUpperCase()]=upperCaseObjectKeys(obj[key]);
      }
    return acc;
  },{});
//   console.log(ans);
  return ans;
}
//   Object.keys(obj).forEach((key)=>{
//       key=key.toUpperCase();
//   })
//   console.log(obj);
//   return obj;
// };

const uppObject = upperCaseObjectKeys(personObjectData);
console.log(uppObject);
__displayOnScreen(uppObject);

// output
// {
//   "ID": "uuid-32Xhonn",
//   "NAME": "joe",
//   "LEVEL": "novice",
//   "DEPT": {
//     "NAME": "sales",
//     "DETAILS": {
//       "MEMBERCOUNT": 100,
//.      "FOO": [1, 2, 34]
//     }
//   }
// }
