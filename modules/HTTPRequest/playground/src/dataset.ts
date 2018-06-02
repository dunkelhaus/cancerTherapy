/* Copyright 2016 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
==============================================================================*/

/**
 * A two dimensional example: x and y coordinates with the label.
 */
export type Example2D = {
  x: number,
  y: number,
  label: number
};

type Point = {
  x: number,
  y: number
};


/**
 * Shuffles the array using Fisher-Yates algorithm. Uses the seedrandom
 * library as the random generator.
 */
export function shuffle(array: any[]): void {
  let counter = array.length;
  let temp = 0;
  let index = 0;
  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    index = Math.floor(Math.random() * counter);
    // Decrease counter by 1
    counter--;
    // And swap the last element with it
    temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
}

export type DataGenerator = (numSamples: number, noise: number) => Example2D[];

export function classifyFmMutationsIndependent(numSamples: number, noise: number):
    Example2D[] {
  let points: Example2D[] = [];
  
  points.push({x:2, y:2, label:1});
  points.push({x:232.9259012627718732,y:-65.64313686291839645, label:1});
  points.push({x:223.5849416849567319,y:-66.81057035041969527, label:1});
  points.push({x:4.632009239561352842e+01,y:-1.029703526952492041e+02, label:1});
  points.push({x:-1.995874183764628924e+02,y:-2.520791010190839359e+02, label:1});
  points.push({x:2.130644688893144689e+02,y:-3.856466381225438056e+01, label:1});    
  points.push({x:2.177829675128117231e+02,y:-4.220374650947678674e+01, label:1});    
  points.push({x:-5.386687468479245808e+02,y:-4.543970469079715713e+02, label:1});
  points.push({x:2.346462828747968103e+02,y:-4.034846543536298924e+01, label:1});
  points.push({x:-5.769687615392518865e+02,y:-4.038249390064855220e+02,label:1});
  points.push({x:2.304235174776049178e+02,y:-3.183657153016453023e+01,label:1});
  points.push({x:2.187036782333427141e+02,y:-7.158072659140367477e+01,label:1});
  points.push({x:2.279194304899255883e+02,y:-3.541269535329949747e+01,label:1});
  points.push({x:2.163143841637689491e+02,y:-6.281362216820984656e+01,label:1});
  points.push({x:2.263067441348846387e+02,y:-4.029113287136251387e+01,label:1});
  points.push({x:2.288612846858472381e+02,y:-5.740417384683024693e+01,label:1});
  points.push({x:2.186222686303180751e+02,y:-4.102708440783631261e+01,label:1});
  points.push({x:2.371049884182706649e+02,y:-5.735684687140816607e+01,label:1});
  points.push({x:2.271434440083232289e+02,y:-3.499914223566467086e+01,label:1});
  points.push({x:2.190500689794874063e+02,y:-7.155175909817857871e+01,label:1});
  points.push({x:2.257852997986466335e+02,y:-2.791291525203694590e+01,label:1});
  points.push({x:-6.000735597502371093e+02,y:-3.524538556040854473e+02,label:1});
  points.push({x:2.377627458341793556e+02,y:-3.907298226015912235e+01,label:1});
  points.push({x:2.380596873041136803e+02,y:-2.070434263604102298e+01,label:1});
  points.push({x:-4.709083864853874957e+02,y:-4.797385187727253424e+02,label:1});
  points.push({x:2.262207316817875267e+02,y:-3.822867449040744958e+01,label:1});
  points.push({x:2.227636121450891551e+02,y:-4.113391306442599671e+01,label:1});
  points.push({x:2.280672964435658230e+02,y:-2.526332027306547801e+01,label:1});
  points.push({x:2.338488133325182332e+02,y:-6.217931226836832082e+01,label:1});
  points.push({x:2.310430352233218514e+02,y:-7.417012322208057640e+01,label:1});
  points.push({x:-5.840986307535371225e+02,y:-4.304417481056336214e+02,label:1});
  points.push({x:2.022021862745052658e+02,y:-3.912893688535457670e+01,label:1});
  points.push({x:2.080274740394852131e+02,y:-6.960092283881542130e+01,label:1});
  points.push({x:-5.542233137708917639e+02,y:-4.908452685694195452e+02,label:1});
  points.push({x:-5.260527474999045126e+02,y:-4.563760041808781693e+02,label:1});
  points.push({x:2.211309013405527253e+02,y:-3.613367353065402199e+01,label:1});
  points.push({x:2.285036774749400195e+02,y:-3.140535354917864908e+01,label:1});
  points.push({x:2.263543143243043403e+02,y:-5.478220223553727664e+01,label:1});
  points.push({x:1.587856775320940983e+02,y:-7.029415412583709610e+01,label:1});
  points.push({x:2.150564511914752188e+02,y:-4.572939278220106729e+01,label:1});
  points.push({x:2.244713320927205018e+02,y:-4.670604913865339114e+01,label:1});
  points.push({x:2.262034367875725138e+02,y:-4.156052634273417823e+01,label:1});
  points.push({x:2.295719613197408648e+02,y:-7.040933621210572824e+01,label:1});
  points.push({x:1.600032360731002162879e+02,y:1.256999482766598391e+02,label:-1});
  points.push({x:-7.192893641987253659e+02,y:2.290174774126199111e+02,label:-1});
  points.push({x:1.755329645887285892e+02,y:1.095684773521298752e+02,label:-1});
  points.push({x:2.209422459822382052e+02,y:-2.350766149733388488e+01,label:-1});
  points.push({x:1.404727303561630549e+02,y:1.453468144763643295e+02,label:-1});
  points.push({x:-3.644175904080955775e+02,y:2.038210332543099810e+02,label:-1});
  points.push({x:1.262558174827285313e+02,y:1.506205843826975013e+02,label:-1});
  points.push({x:-3.794289123884498736e+02,y:2.452560694460117077e+02,label:-1});
  points.push({x:-6.899102516492438326e+02,y:-1.658626006789170333e+02,label:-1});
  points.push({x:1.939829945431313831e+02,y:8.173387810220705774e+01,label:-1});
  points.push({x:-6.0718410042394490347e+02,y:3.460041476701848637e+02,label:-1});
  points.push({x:9.951087954956389581e+01,y:1.650120781611104519e+02,label:-1});
  points.push({x:2.292953930662955599e+02,y:-2.711123209671264078e+01,label:-1});
  points.push({x:2.215747122767829183e+02,y:-1.602409378965252529e+01,label:-1});
  points.push({x:2.244450835726389357e+02,y:-2.210993526044977386e+01,label:-1});
  points.push({x:1.416322801140474326e+02,y:1.442224612979137817e+02,label:-1});
  points.push({x:2.117289112263208040e+02,y:2.748295695019183071e+01,label:-1});
  points.push({x:-3.714340221199145731e+02,y:2.076527496838945410e+02,label:-1});
  points.push({x:2.163780683947854016e+02,y:-5.362455962590898295e+00,label:-1});
  points.push({x:1.841926403032167059e+02,y:9.631914852190867293e+01,label:-1});
  points.push({x:2.256122348249041067e+02,y:-3.190779926434733937e+01,label:-1});
  points.push({x:2.303352187910737428e+02,y:-2.175570887827676358e+01,label:-1});
  points.push({x:1.164618324021589473e+02,y:1.569305817402551213e+02,label:-1});
  points.push({x:2.190932815712637591e+02,y:2.431969147006469001e+01,label:-1});
  points.push({x:-3.728243565871858891e+02,y:2.272394172060681115e+02,label:-1});
  points.push({x:-3.889991040302405167e+02,y:2.721590231737243357e+02,label:-1});
  points.push({x:-3.238582549887559026e+02,y:3.326542809119883515e+01,label:-1});
  points.push({x:-8.281882970033014999e+02,y:9.193061031841301656e+01,label:-1});
  points.push({x:2.025356060798337410e+02,y:6.646657283630973723e+01,label:-1});
  points.push({x:2.050743778863981959e+02,y:6.127576508049813953e+01,label:-1});
  points.push({x:-7.291347803212760255e+02,y:3.342321747303824964e+01,label:-1});
  points.push({x:2.224743810836521618e+02,y:-2.546625996920402812e+01,label:-1});
  points.push({x:1.982076978761977273e+02,y:7.008719273061045385e+01,label:-1});
  points.push({x:-2.991103511549893028e+02,y:-6.734359293077288555e+01,label:-1});
  points.push({x:-6.835956661066936704e+02,y:-2.023598393050500022e+02,label:-1});
  points.push({x:2.004755734841604635e+02,y:6.833285891518677602e+01,label:-1});
  points.push({x:2.207899235916929115e+02,y:-1.404940350387022718e+01,label:-1});
  points.push({x:2.201514714738945599e+02,y:-2.232703546039997278e+01,label:-1});
  points.push({x:2.174587426639785122e+02,y:4.775387663772204583e+00,label:-1});
  points.push({x:1.708174973430615182e+02,y:1.168153841598900584e+02,label:-1});
  points.push({x:-3.786456452223087012e+02,y:2.517302923648182684e+02,label:-1});
  points.push({x:2.238796568636625750e+02,y:-2.625273058733527520e+01,label:-1});
  points.push({x:-3.563593641852502287e+02,y:1.310115936735700757e+02,label:-1});
  points.push({x:2.123545947308724635e+02,y:3.177988339669906637e+01,label:-1});
  points.push({x:4.205390023710861414e+01,y:-7.446899995206581480e+01,label:-1});
  points.push({x:1.736073355650341057e+02,y:1.137725638563691462e+02,label:-1});
  points.push({x:2.199912814686136926e+02,y:-6.641372175172317149e+00,label:-1});
  points.push({x:2.257039034947660809e+02,y:-2.916525657652788439e+01,label:-1});
  points.push({x:-7.339984713888007946e+02,y:6.014565438076182602e+01,label:-1});
  points.push({x:1.658846735502027911e+02,y:1.218622148909373664e+02,label:-1});
  points.push({x:2.264687004063264908e+02,y:-3.848499128492908739e+01,label:-1});
  points.push({x:1.711413929014057373e+02,y:1.126416925702144880e+02,label:-1});
  points.push({x:2.192523545633961817e+02,y:-1.203272414350453978e+01,label:-1});
  points.push({x:-7.101093954422901788e+02,y:2.559891063218517218e+02,label:-1});
  points.push({x:1.718051821980955367e+02,y:1.138608893468728667e+02,label:-1});
  points.push({x:1.604236254931022074e+02,y:1.194784125436319329e+02,label:-1});
  points.push({x:-3.565166379606089890e+02,y:1.570984181318374340e+02,label:-1});
  points.push({x:2.158155643476885643e+02,y:-1.311115084040642564e+01,label:-1});
  points.push({x:-7.115285357019380399e+02,y:2.771646535927042692e+02,label:-1});
  points.push({x:2.117793764819160458e+02,y:-5.069043546386096111e+00,label:-1});
  points.push({x:2.269295637380153607e+02,y:-3.521602148637619223e+01,label:-1});
  points.push({x:1.991477778369971929e+02,y:6.344093890904989053e+01,label:-1});
  points.push({x:1.836725771235219895e+02,y:1.007046357608692517e+02,label:-1});
  points.push({x:-7.182042556564593951e+02,y:2.483189103694917321e+02,label:-1});
  points.push({x:-7.337970281457197643e+02,y:7.376934027479435940e+01,label:-1});
  points.push({x:-7.253555483185965613e+02,y:1.958436956733936825e+02,label:-1});
  points.push({x:2.225176029939569560e+02,y:-1.389412294321929231e+01,label:-1});
  points.push({x:2.233976066354335046e+02,y:-1.848051585761580995e+01,label:-1});

  return points;
}


export function classifyFmSampleIndependent(numSamples: number, noise: number):
    Example2D[] {
  let points: Example2D[] = [];

  function genFmSampleIndependent() {


  }
  return points;
}


export function classifytop10000LungMel(numSamples: number, noise: number):
    Example2D[] {
  let points: Example2D[] = [];

  function genClassifyTop10000() {


  }
  return points;
}


export function classifytop1000LungMel(numSamples: number, noise: number):
    Example2D[] {
  let points: Example2D[] = [];

  function genClassifyTop1000() {


  }
  return points;
}


export function classifytop100LungMel(numSamples: number, noise: number):
    Example2D[] {
  let points: Example2D[] = [];

  function genClassifyTop100() {


  }
  return points;
}


export function classifytop10LungMel(numSamples: number, noise: number):
    Example2D[] {
  let points: Example2D[] = [];

  function genClassifyTop10() {


  }
  return points;
}




export function regressFmMutationsIndependent(numSamples: number, noise: number):
    Example2D[] {
  let points: Example2D[] = [];

  points.push({x:2, y:2, label:1});
  points.push({x:232.9259012627718732,y:-65.64313686291839645, label:1});
  points.push({x:223.5849416849567319,y:-66.81057035041969527, label:1});
  points.push({x:4.632009239561352842e+01,y:-1.029703526952492041e+02, label:1});
  points.push({x:-1.995874183764628924e+02,y:-2.520791010190839359e+02, label:1});
  points.push({x:2.130644688893144689e+02,y:-3.856466381225438056e+01, label:1});
  points.push({x:2.177829675128117231e+02,y:-4.220374650947678674e+01, label:1});
  points.push({x:-5.386687468479245808e+02,y:-4.543970469079715713e+02, label:1});
  points.push({x:2.346462828747968103e+02,y:-4.034846543536298924e+01, label:1});
  points.push({x:-5.769687615392518865e+02,y:-4.038249390064855220e+02,label:1});
  points.push({x:2.304235174776049178e+02,y:-3.183657153016453023e+01,label:1});
  points.push({x:2.187036782333427141e+02,y:-7.158072659140367477e+01,label:1});
  points.push({x:2.279194304899255883e+02,y:-3.541269535329949747e+01,label:1});
  points.push({x:2.163143841637689491e+02,y:-6.281362216820984656e+01,label:1});
  points.push({x:2.263067441348846387e+02,y:-4.029113287136251387e+01,label:1});
  points.push({x:2.288612846858472381e+02,y:-5.740417384683024693e+01,label:1});
  points.push({x:2.186222686303180751e+02,y:-4.102708440783631261e+01,label:1});
  points.push({x:2.371049884182706649e+02,y:-5.735684687140816607e+01,label:1});
  points.push({x:2.271434440083232289e+02,y:-3.499914223566467086e+01,label:1});
  points.push({x:2.190500689794874063e+02,y:-7.155175909817857871e+01,label:1});
  points.push({x:2.257852997986466335e+02,y:-2.791291525203694590e+01,label:1});
  points.push({x:-6.000735597502371093e+02,y:-3.524538556040854473e+02,label:1});
  points.push({x:2.377627458341793556e+02,y:-3.907298226015912235e+01,label:1});
  points.push({x:2.380596873041136803e+02,y:-2.070434263604102298e+01,label:1});
  points.push({x:-4.709083864853874957e+02,y:-4.797385187727253424e+02,label:1});
  points.push({x:2.262207316817875267e+02,y:-3.822867449040744958e+01,label:1});
  points.push({x:2.227636121450891551e+02,y:-4.113391306442599671e+01,label:1});
  points.push({x:2.280672964435658230e+02,y:-2.526332027306547801e+01,label:1});
  points.push({x:2.338488133325182332e+02,y:-6.217931226836832082e+01,label:1});
  points.push({x:2.310430352233218514e+02,y:-7.417012322208057640e+01,label:1});
  points.push({x:-5.840986307535371225e+02,y:-4.304417481056336214e+02,label:1});
  points.push({x:2.022021862745052658e+02,y:-3.912893688535457670e+01,label:1});
  points.push({x:2.080274740394852131e+02,y:-6.960092283881542130e+01,label:1});
  points.push({x:-5.542233137708917639e+02,y:-4.908452685694195452e+02,label:1});
  points.push({x:-5.260527474999045126e+02,y:-4.563760041808781693e+02,label:1});
  points.push({x:2.211309013405527253e+02,y:-3.613367353065402199e+01,label:1});
  points.push({x:2.285036774749400195e+02,y:-3.140535354917864908e+01,label:1});
  points.push({x:2.263543143243043403e+02,y:-5.478220223553727664e+01,label:1});
  points.push({x:1.587856775320940983e+02,y:-7.029415412583709610e+01,label:1});
  points.push({x:2.150564511914752188e+02,y:-4.572939278220106729e+01,label:1});
  points.push({x:2.244713320927205018e+02,y:-4.670604913865339114e+01,label:1});
  points.push({x:2.262034367875725138e+02,y:-4.156052634273417823e+01,label:1});
  points.push({x:2.295719613197408648e+02,y:-7.040933621210572824e+01,label:1});
  points.push({x:1.600032360731002162879e+02,y:1.256999482766598391e+02,label:-1});
  points.push({x:-7.192893641987253659e+02,y:2.290174774126199111e+02,label:-1});
  points.push({x:1.755329645887285892e+02,y:1.095684773521298752e+02,label:-1});
  points.push({x:2.209422459822382052e+02,y:-2.350766149733388488e+01,label:-1});
  points.push({x:1.404727303561630549e+02,y:1.453468144763643295e+02,label:-1});
  points.push({x:-3.644175904080955775e+02,y:2.038210332543099810e+02,label:-1});
  points.push({x:1.262558174827285313e+02,y:1.506205843826975013e+02,label:-1});
  points.push({x:-3.794289123884498736e+02,y:2.452560694460117077e+02,label:-1});
  points.push({x:-6.899102516492438326e+02,y:-1.658626006789170333e+02,label:-1});
  points.push({x:1.939829945431313831e+02,y:8.173387810220705774e+01,label:-1});
  points.push({x:-6.0718410042394490347e+02,y:3.460041476701848637e+02,label:-1});
  points.push({x:9.951087954956389581e+01,y:1.650120781611104519e+02,label:-1});
  points.push({x:2.292953930662955599e+02,y:-2.711123209671264078e+01,label:-1});
  points.push({x:2.215747122767829183e+02,y:-1.602409378965252529e+01,label:-1});
  points.push({x:2.244450835726389357e+02,y:-2.210993526044977386e+01,label:-1});
  points.push({x:1.416322801140474326e+02,y:1.442224612979137817e+02,label:-1});
  points.push({x:2.117289112263208040e+02,y:2.748295695019183071e+01,label:-1});
  points.push({x:-3.714340221199145731e+02,y:2.076527496838945410e+02,label:-1});
  points.push({x:2.163780683947854016e+02,y:-5.362455962590898295e+00,label:-1});
  points.push({x:1.841926403032167059e+02,y:9.631914852190867293e+01,label:-1});
  points.push({x:2.256122348249041067e+02,y:-3.190779926434733937e+01,label:-1});
  points.push({x:2.303352187910737428e+02,y:-2.175570887827676358e+01,label:-1});
  points.push({x:1.164618324021589473e+02,y:1.569305817402551213e+02,label:-1});
  points.push({x:2.190932815712637591e+02,y:2.431969147006469001e+01,label:-1});
  points.push({x:-3.728243565871858891e+02,y:2.272394172060681115e+02,label:-1});
  points.push({x:-3.889991040302405167e+02,y:2.721590231737243357e+02,label:-1});
  points.push({x:-3.238582549887559026e+02,y:3.326542809119883515e+01,label:-1});
  points.push({x:-8.281882970033014999e+02,y:9.193061031841301656e+01,label:-1});
  points.push({x:2.025356060798337410e+02,y:6.646657283630973723e+01,label:-1});
  points.push({x:2.050743778863981959e+02,y:6.127576508049813953e+01,label:-1});
  points.push({x:-7.291347803212760255e+02,y:3.342321747303824964e+01,label:-1});
  points.push({x:2.224743810836521618e+02,y:-2.546625996920402812e+01,label:-1});
  points.push({x:1.982076978761977273e+02,y:7.008719273061045385e+01,label:-1});
  points.push({x:-2.991103511549893028e+02,y:-6.734359293077288555e+01,label:-1});
  points.push({x:-6.835956661066936704e+02,y:-2.023598393050500022e+02,label:-1});
  points.push({x:2.004755734841604635e+02,y:6.833285891518677602e+01,label:-1});
  points.push({x:2.207899235916929115e+02,y:-1.404940350387022718e+01,label:-1});
  points.push({x:2.201514714738945599e+02,y:-2.232703546039997278e+01,label:-1});
  points.push({x:2.174587426639785122e+02,y:4.775387663772204583e+00,label:-1});
  points.push({x:1.708174973430615182e+02,y:1.168153841598900584e+02,label:-1});
  points.push({x:-3.786456452223087012e+02,y:2.517302923648182684e+02,label:-1});
  points.push({x:2.238796568636625750e+02,y:-2.625273058733527520e+01,label:-1});
  points.push({x:-3.563593641852502287e+02,y:1.310115936735700757e+02,label:-1});
  points.push({x:2.123545947308724635e+02,y:3.177988339669906637e+01,label:-1});
  points.push({x:4.205390023710861414e+01,y:-7.446899995206581480e+01,label:-1});
  points.push({x:1.736073355650341057e+02,y:1.137725638563691462e+02,label:-1});
  points.push({x:2.199912814686136926e+02,y:-6.641372175172317149e+00,label:-1});
  points.push({x:2.257039034947660809e+02,y:-2.916525657652788439e+01,label:-1});
  points.push({x:-7.339984713888007946e+02,y:6.014565438076182602e+01,label:-1});
  points.push({x:1.658846735502027911e+02,y:1.218622148909373664e+02,label:-1});
  points.push({x:2.264687004063264908e+02,y:-3.848499128492908739e+01,label:-1});
  points.push({x:1.711413929014057373e+02,y:1.126416925702144880e+02,label:-1});
  points.push({x:2.192523545633961817e+02,y:-1.203272414350453978e+01,label:-1});
  points.push({x:-7.101093954422901788e+02,y:2.559891063218517218e+02,label:-1});
  points.push({x:1.718051821980955367e+02,y:1.138608893468728667e+02,label:-1});
  points.push({x:1.604236254931022074e+02,y:1.194784125436319329e+02,label:-1});
  points.push({x:-3.565166379606089890e+02,y:1.570984181318374340e+02,label:-1});
  points.push({x:2.158155643476885643e+02,y:-1.311115084040642564e+01,label:-1});
  points.push({x:-7.115285357019380399e+02,y:2.771646535927042692e+02,label:-1});
  points.push({x:2.117793764819160458e+02,y:-5.069043546386096111e+00,label:-1});
  points.push({x:2.269295637380153607e+02,y:-3.521602148637619223e+01,label:-1});
  points.push({x:1.991477778369971929e+02,y:6.344093890904989053e+01,label:-1});
  points.push({x:1.836725771235219895e+02,y:1.007046357608692517e+02,label:-1});
  points.push({x:-7.182042556564593951e+02,y:2.483189103694917321e+02,label:-1});
  points.push({x:-7.337970281457197643e+02,y:7.376934027479435940e+01,label:-1});
  points.push({x:-7.253555483185965613e+02,y:1.958436956733936825e+02,label:-1});
  points.push({x:2.225176029939569560e+02,y:-1.389412294321929231e+01,label:-1});
  points.push({x:2.233976066354335046e+02,y:-1.848051585761580995e+01,label:-1});

  
  return points;
}


export function regressFmSampleIndependent(numSamples: number, noise: number):
    Example2D[] {
  let points: Example2D[] = [];

  function getFmSampleIndependent() {


  }
  return points;
}


export function regresstop10000LungMel(numSamples: number, noise: number):
    Example2D[] {
  let points: Example2D[] = [];

  function genRegressTop10000() {


  }
  return points;
}


export function regresstop1000LungMel(numSamples: number, noise: number):
    Example2D[] {
  let points: Example2D[] = [];

  function genRegressTop1000() {


  }
  return points;
}


export function regresstop100LungMel(numSamples: number, noise: number):
    Example2D[] {
  let points: Example2D[] = [];

  function genRegressTop100() {


  }
  return points;
}


export function regresstop10LungMel(numSamples: number, noise: number):
    Example2D[] {
  let points: Example2D[] = [];

  function genRegressTop10() {


  }
  return points;
}





export function regressPlane(numSamples: number, noise: number):
  Example2D[] {
  let radius = 6;
  let labelScale = d3.scale.linear()
    .domain([-10, 10])
    .range([-1, 1]);
  let getLabel = (x, y) => labelScale(x + y);

  let points: Example2D[] = [];
  for (let i = 0; i < numSamples; i++) {
    let x = randUniform(-radius, radius);
    let y = randUniform(-radius, radius);
    let noiseX = randUniform(-radius, radius) * noise;
    let noiseY = randUniform(-radius, radius) * noise;
    let label = getLabel(x + noiseX, y + noiseY);
    points.push({x, y, label});
  }
  return points;
}

export function regressGaussian(numSamples: number, noise: number):
  Example2D[] {
  let points: Example2D[] = [];

  let labelScale = d3.scale.linear()
    .domain([0, 2])
    .range([1, 0])
    .clamp(true);

  let gaussians = [
    [-4, 2.5, 1],
    [0, 2.5, -1],
    [4, 2.5, 1],
    [-4, -2.5, -1],
    [0, -2.5, 1],
    [4, -2.5, -1]
  ];

  function getLabel(x, y) {
    // Choose the one that is maximum in abs value.
    let label = 0;
    gaussians.forEach(([cx, cy, sign]) => {
      let newLabel = sign * labelScale(dist({x, y}, {x: cx, y: cy}));
      if (Math.abs(newLabel) > Math.abs(label)) {
        label = newLabel;
      }
    });
    return label;
  }
  let radius = 6;
  for (let i = 0; i < numSamples; i++) {
    let x = randUniform(-radius, radius);
    let y = randUniform(-radius, radius);
    let noiseX = randUniform(-radius, radius) * noise;
    let noiseY = randUniform(-radius, radius) * noise;
    let label = getLabel(x + noiseX, y + noiseY);
    points.push({x, y, label});
  };
  return points;
}


export function classifyCircleData(numSamples: number, noise: number):
    Example2D[] {
  let points: Example2D[] = [];
  let radius = 5;
  function getCircleLabel(p: Point, center: Point) {
    return (dist(p, center) < (radius * 0.5)) ? 1 : -1;
  }

  // Generate positive points inside the circle.
  for (let i = 0; i < numSamples / 2; i++) {
    let r = randUniform(0, radius * 0.5);
    let angle = randUniform(0, 2 * Math.PI);
    let x = r * Math.sin(angle);
    let y = r * Math.cos(angle);
    let noiseX = randUniform(-radius, radius) * noise;
    let noiseY = randUniform(-radius, radius) * noise;
    let label = getCircleLabel({x: x + noiseX, y: y + noiseY}, {x: 0, y: 0});
    points.push({x, y, label});
  }

  // Generate negative points outside the circle.
  for (let i = 0; i < numSamples / 2; i++) {
    let r = randUniform(radius * 0.7, radius);
    let angle = randUniform(0, 2 * Math.PI);
    let x = r * Math.sin(angle);
    let y = r * Math.cos(angle);
    let noiseX = randUniform(-radius, radius) * noise;
    let noiseY = randUniform(-radius, radius) * noise;
    let label = getCircleLabel({x: x + noiseX, y: y + noiseY}, {x: 0, y: 0});
    points.push({x, y, label});
  }
  return points;
}

export function classifyXORData(numSamples: number, noise: number):
    Example2D[] {
  function getXORLabel(p: Point) { return p.x * p.y >= 0 ? 1 : -1; }

  let points: Example2D[] = [];
  for (let i = 0; i < numSamples; i++) {
    let x = randUniform(-5, 5);
    let padding = 0.3;
    x += x > 0 ? padding : -padding;  // Padding.
    let y = randUniform(-5, 5);
    y += y > 0 ? padding : -padding;
    let noiseX = randUniform(-5, 5) * noise;
    let noiseY = randUniform(-5, 5) * noise;
    let label = getXORLabel({x: x + noiseX, y: y + noiseY});
    //console.log(x);
    points.push({x, y, label});
  }


  return points;
}

/**
 * Returns a sample from a uniform [a, b] distribution.
 * Uses the seedrandom library as the random generator.
 */
function randUniform(a: number, b: number) {
  return Math.random() * (b - a) + a;
}

/**
 * Samples from a normal distribution. Uses the seedrandom library as the
 * random generator.
 *
 * @param mean The mean. Default is 0.
 * @param variance The variance. Default is 1.
 */
function normalRandom(mean = 0, variance = 1): number {
  let v1: number, v2: number, s: number;
  do {
    v1 = 2 * Math.random() - 1;
    v2 = 2 * Math.random() - 1;
    s = v1 * v1 + v2 * v2;
  } while (s > 1);

  let result = Math.sqrt(-2 * Math.log(s) / s) * v1;
  return mean + Math.sqrt(variance) * result;
}

/** Returns the eucledian distance between two points in space. */
function dist(a: Point, b: Point): number {
  let dx = a.x - b.x;
  let dy = a.y - b.y;
  return Math.sqrt(dx * dx + dy * dy);
}
