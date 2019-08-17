

const SmileSVG = ({ style, width, className, height, viewBox = "0 0 100 100" }) => {
  return (
    <svg
      width={width}
      style={style}
      height={height}
      viewBox={viewBox}
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
    <g stroke="none" stroke-width="1" fill="currentColor" fill-rule="evenodd">
      <g fill="currentColor">
        <path d="M84.1765461,65.7444444 L84.1765461,64.1666667 L84.1765461,61.2927875 C85.0761096,59.6426901 86.734125,57.5157895 87.9161075,57.2890838 C88.974739,57.0859649 89.6680022,56.0641326 89.4646294,55.0070175 C89.2614518,53.9499025 88.2399035,53.2569201 87.1797105,53.4604288 C86.1630417,53.6553606 85.1586689,54.1793372 84.1765461,55.0196881 L84.1765461,48.6130604 L85.973136,48.905848 C88.8839825,50.2888889 90.9192719,53.4064327 90.9192719,57.0231969 C90.9192719,61.3463938 88.0119386,64.9580897 84.1765461,65.7444444 L84.1765461,65.7444444 Z M50.4113904,95.7824561 C33.9456096,95.7824561 20.5497434,81.5996101 20.5497434,64.1666667 L20.5497434,47.208577 C20.5567697,47.2031189 20.5647719,47.1966862 20.5719934,47.1910331 C20.6209825,47.1528265 20.6715329,47.1128655 20.7236447,47.07154 C20.7394539,47.0588694 20.7548728,47.0465887 20.7710724,47.0337232 C20.8302105,46.9859649 20.8914956,46.9358674 20.9543421,46.8838207 C20.9711272,46.8699805 20.9883026,46.8555556 21.0054781,46.8413255 C21.0616886,46.794347 21.1192654,46.745809 21.1782083,46.6953216 C21.1916754,46.6838207 21.2047522,46.6729045 21.2186096,46.6610136 C21.2859452,46.602924 21.3554276,46.5421053 21.425886,46.4797271 C21.4469649,46.4612086 21.4680439,46.4423002 21.4891228,46.4233918 C21.5617281,46.3588694 21.635114,46.2925926 21.7102566,46.2231969 C21.7221623,46.2122807 21.7342632,46.2005848 21.746364,46.1894737 C21.8136996,46.1274854 21.8818158,46.0633528 21.9511031,45.9974659 C21.9735482,45.9760234 21.9957982,45.9549708 22.0184386,45.9333333 C22.0961184,45.8588694 22.1747741,45.7824561 22.2546009,45.7033138 C22.2750943,45.6830409 22.2959781,45.6621832 22.3164715,45.6417154 C22.3869298,45.57154 22.4579737,45.4998051 22.5299934,45.4259259 C22.5487303,45.4068226 22.5672719,45.3881092 22.5862039,45.3688109 C22.6693487,45.282846 22.7540548,45.1939571 22.8393465,45.1031189 C22.8637434,45.0769981 22.8883355,45.0506823 22.9129276,45.0243665 C22.9982193,44.9327485 23.0839013,44.8395712 23.1709496,44.7432749 C23.1826601,44.7300195 23.194761,44.7165692 23.2064715,44.7035088 C23.2900066,44.6101365 23.3747127,44.51423 23.459614,44.4163743 C23.4844013,44.3877193 23.5091886,44.3594542 23.5341711,44.3304094 C23.6243421,44.225731 23.7150987,44.1189084 23.8064408,44.0089669 C23.8273246,43.9840156 23.8482083,43.9582846 23.8690921,43.9329435 C23.9495044,43.8358674 24.0301118,43.7366472 24.1113048,43.6354776 C24.1323838,43.6087719 24.1538531,43.5826511 24.1753224,43.5555556 C24.2686162,43.4382066 24.3623004,43.3179337 24.4565702,43.1951267 C24.4811623,43.1631579 24.5055592,43.1307992 24.5301513,43.0984405 C24.6203224,42.9795322 24.7106886,42.8586745 24.8016404,42.7346979 C24.8112039,42.7220273 24.8205724,42.7095517 24.830136,42.6966862 C24.9267478,42.5641326 25.0239452,42.4276803 25.1211425,42.2894737 C25.1463202,42.2536062 25.1713026,42.2179337 25.1964803,42.1818713 C25.2930921,42.042885 25.3897039,41.9017544 25.486511,41.757115 C25.5034912,41.7315789 25.5206667,41.7052632 25.5376469,41.6797271 C25.6243048,41.5491228 25.7107675,41.4161793 25.7974254,41.2810916 C25.8190899,41.2473684 25.8407544,41.2140351 25.8624189,41.179922 C25.9586404,41.0282651 26.0546667,40.8734893 26.150693,40.7159844 C26.1735285,40.6781676 26.196364,40.639961 26.2191996,40.6021442 C26.3085899,40.4538012 26.3977851,40.3033138 26.4867851,40.1497076 C26.4986908,40.1290448 26.5107917,40.1087719 26.5226974,40.0879142 C26.6195044,39.920078 26.7157259,39.7479532 26.811557,39.5736842 C26.8347829,39.5311891 26.8582039,39.488499 26.881625,39.445614 C26.9776513,39.2693957 27.0730921,39.0906433 27.1679474,38.9077973 C27.1798531,38.8847953 27.1917588,38.8612086 27.2036645,38.8380117 C27.2907127,38.6693957 27.3769803,38.4976608 27.4628575,38.3233918 C27.4833509,38.2818713 27.5038443,38.2407407 27.5241425,38.1990253 C27.6166557,38.0095517 27.708193,37.8169591 27.7991447,37.6212476 C27.8178816,37.5803119 27.8368136,37.5385965 27.8557456,37.4974659 C27.9390855,37.3155945 28.0218399,37.131384 28.1036184,36.9440546 C28.1165,36.9150097 28.1291864,36.8865497 28.1416776,36.8573099 C28.231068,36.6512671 28.3192873,36.4411306 28.4065307,36.2282651 C28.4264386,36.1791423 28.4465417,36.1298246 28.4664496,36.0803119 C28.5544737,35.862963 28.6415219,35.6434698 28.7268136,35.4191033 C28.7330592,35.4033138 28.7387193,35.3871345 28.7447697,35.371345 C28.8257675,35.1576998 28.9053991,34.9403509 28.9840548,34.7204678 C29.002011,34.6703704 29.0197719,34.6204678 29.0375329,34.5701754 C29.1183355,34.3405458 29.1981623,34.1077973 29.2760373,33.8711501 C29.2902851,33.8282651 29.3041425,33.7844055 29.3183904,33.7413255 C29.3894342,33.5231969 29.4591118,33.3019493 29.5278136,33.0777778 C29.5397193,33.0389864 29.5518202,33.0007797 29.5635307,32.9617934 C29.6380877,32.7150097 29.710693,32.4641326 29.781932,32.2103314 C29.7973509,32.1551657 29.8127697,32.0994152 29.8279934,32.0440546 C29.9002083,31.7820663 29.9712522,31.5177388 30.0395636,31.2481481 C32.1540943,32.1711501 35.6024539,33.4678363 39.9624781,34.3692008 C42.9455395,34.98577 46.3552544,35.4173489 50.0561711,35.4173489 C59.1659846,35.4173489 66.5114123,32.8025341 70.0725833,31.2481481 C70.1539715,31.5692008 70.2388728,31.8834308 70.3255307,32.1935673 C70.3350943,32.2274854 70.3442675,32.2619883 70.3540263,32.2959064 C70.4369759,32.5890838 70.5224627,32.8766082 70.6099013,33.1602339 C70.6239539,33.2064327 70.6382018,33.2526316 70.6524496,33.2984405 C70.7385219,33.5744639 70.8271316,33.845614 70.9169123,34.1126706 C70.9331118,34.1602339 70.9493114,34.2074074 70.965511,34.2547758 C71.0564627,34.5210526 71.1493662,34.7830409 71.2438311,35.0401559 C71.2582741,35.0797271 71.2733026,35.1187135 71.2877456,35.1578947 C71.386114,35.4216374 71.4854583,35.6816764 71.5869496,35.9360624 C71.5953421,35.9569201 71.6039298,35.9773879 71.6123224,35.9982456 C71.7147895,36.2536062 71.8190132,36.5044834 71.9246031,36.7502924 C71.9316294,36.7666667 71.9384605,36.7836257 71.9454868,36.8001949 C72.0512719,37.0454191 72.1588136,37.2849903 72.2673311,37.5210526 C72.2829452,37.5547758 72.298364,37.5890838 72.3139781,37.6226121 C72.4185921,37.848538 72.5245724,38.0695906 72.6313333,38.2869396 C72.6504605,38.3261209 72.6699781,38.3653021 72.6893004,38.4042885 C72.7952807,38.6177388 72.9018465,38.8270955 73.0097785,39.0321637 C73.0291009,39.0692008 73.0482281,39.1054581 73.0677456,39.1421053 C73.1774342,39.3489279 73.2875132,39.5522417 73.3983728,39.7506823 C73.4134013,39.7773879 73.4284298,39.8035088 73.4434583,39.8302144 C73.5597829,40.0366472 73.6761075,40.2397661 73.7934079,40.437037 C73.7975066,40.4438596 73.8016053,40.4504873 73.8055088,40.4573099 C73.9220285,40.6528265 74.0387434,40.8432749 74.1558487,41.0302144 C74.1691206,41.051462 74.1823925,41.0730994 74.1954693,41.094152 C74.3092566,41.2746589 74.4230439,41.4502924 74.5368311,41.6226121 C74.5565439,41.6522417 74.5758662,41.6818713 74.5953838,41.7111111 C74.7064386,41.8779727 74.8176886,42.0407407 74.9285482,42.2 C74.9496272,42.2302144 74.9707061,42.260039 74.9915899,42.2900585 C75.1026447,42.4479532 75.2133092,42.6023392 75.3239737,42.7528265 C75.3427105,42.7785575 75.3616425,42.8037037 75.3805746,42.8290448 C75.4937763,42.9822612 75.6067829,43.1323587 75.7190088,43.2777778 C75.7311096,43.2931774 75.7428202,43.3079922 75.7547259,43.3231969 C75.8679276,43.4692008 75.980739,43.611501 76.0925746,43.7495127 C76.0997961,43.7584795 76.1070175,43.7678363 76.114239,43.7766082 C76.2272456,43.9157895 76.3396667,44.0500975 76.4509167,44.1814815 C76.4673114,44.2007797 76.4839013,44.2206628 76.5002961,44.2397661 C76.607057,44.3649123 76.7126469,44.4861598 76.8176513,44.6040936 C76.8369737,44.6259259 76.8562961,44.6477583 76.8754232,44.6693957 C76.9784759,44.7846004 77.0805526,44.8964912 77.181068,45.0048733 C77.2003904,45.0255361 77.2193224,45.045809 77.2382544,45.0662768 C77.3395504,45.174269 77.4394803,45.2795322 77.5378487,45.3807018 C77.5532675,45.3966862 77.5684912,45.4118908 77.5837149,45.4274854 C77.6854013,45.5317739 77.7861118,45.6331384 77.8844803,45.7302144 C77.8907259,45.7362573 77.8965811,45.7419103 77.9028268,45.7479532 C77.9998289,45.8432749 78.0946842,45.9345029 78.1877829,46.0230019 C78.1991031,46.0335283 78.2106184,46.0446394 78.2217434,46.0551657 C78.3136711,46.1417154 78.4030614,46.2243665 78.4910855,46.3042885 C78.5066996,46.3187135 78.5227039,46.3331384 78.538318,46.3473684 C78.6230241,46.4237817 78.7053882,46.4968811 78.7858004,46.5672515 C78.8025855,46.5818713 78.8189803,46.5962963 78.8355702,46.6105263 C78.9148114,46.6793372 78.9922961,46.7454191 79.0670482,46.8081871 C79.0816864,46.8204678 79.095739,46.8321637 79.110182,46.8442495 C79.1859101,46.9072125 79.2596864,46.9678363 79.3303399,47.0247563 C79.3400987,47.0325536 79.3490768,47.0397661 79.3584452,47.0473684 C79.4290987,47.1040936 79.4974101,47.1580897 79.5627939,47.2087719 C79.5670877,47.2120858 79.5717719,47.2157895 79.5760658,47.2191033 C79.643011,47.2709552 79.706443,47.3189084 79.7671425,47.3643275 C79.7761206,47.3711501 79.7852939,47.3779727 79.7940768,47.3846004 C79.8514583,47.4272904 79.9053268,47.4666667 79.9566579,47.5035088 C79.966807,47.5109162 79.976761,47.5181287 79.9867149,47.5253411 C80.0357039,47.5604288 80.0819605,47.5927875 80.1247039,47.6226121 C80.133682,47.6288499 80.1420746,47.6346979 80.1506623,47.6405458 C80.1928202,47.6695906 80.2318553,47.6962963 80.2673772,47.720078 C80.2689386,47.7212476 80.2712807,47.722807 80.2730373,47.7239766 L80.2730373,64.1666667 C80.2730373,81.5996101 66.8771711,95.7824561 50.4113904,95.7824561 L50.4113904,95.7824561 Z M16.6462346,65.7444444 C12.8108421,64.9580897 9.90350877,61.3463938 9.90350877,57.0231969 C9.90350877,53.397271 11.9491425,50.2729045 14.8715044,48.8949318 L16.6462346,48.5582846 L16.6462346,55.0196881 C15.6641118,54.1793372 14.659739,53.6553606 13.6430702,53.4604288 C12.5832675,53.2567251 11.5613289,53.9499025 11.3581513,55.0070175 C11.1547785,56.0641326 11.8480417,57.0859649 12.9066732,57.2890838 C13.6512675,57.4317739 15.3106491,58.7990253 16.6462346,61.2931774 L16.6462346,64.1666667 L16.6462346,65.7444444 Z M94.8227807,57.0231969 C94.8227807,52.280117 92.3374167,48.1352827 88.6599211,45.9304094 C88.8720768,43.8840156 89.1513728,39.7785575 88.7075439,34.8001949 C87.8710219,25.4179337 84.8194539,17.411306 79.8826864,11.6461988 C73.2656535,3.91832359 63.3499605,0 50.4113904,0 C37.4728202,0 27.5571272,3.91832359 20.9400943,11.6461988 C16.0033268,17.411306 12.9517588,25.4179337 12.1152368,34.8001949 C11.6714079,39.7785575 11.9507039,43.8840156 12.1630548,45.9304094 C8.48516886,48.1352827 6,52.280117 6,57.0231969 C6,63.662768 10.8665044,69.1337232 17.0639101,69.7434698 C19.6152434,86.6861598 33.5970263,99.6810916 50.4113904,99.6810916 C67.2257544,99.6810916 81.2075373,86.6861598 83.7590658,69.7434698 C89.9562763,69.1337232 94.8227807,63.662768 94.8227807,57.0231969 L94.8227807,57.0231969 Z M62.5374061,50.2893372 C58.5685136,50.2893372 55.3395311,53.5140936 55.3395311,57.4780312 C55.3395311,58.5546394 56.2135268,59.4273489 57.2912855,59.4273489 C58.3692395,59.4273489 59.2430399,58.5546394 59.2430399,57.4780312 C59.2430399,55.6639961 60.7209083,54.1879727 62.5374061,54.1879727 C64.3539039,54.1879727 65.8315772,55.6639961 65.8315772,57.4780312 C65.8315772,58.5546394 66.7053776,59.4273489 67.7833316,59.4273489 C68.8610904,59.4273489 69.735086,58.5546394 69.735086,57.4780312 C69.735086,53.5140936 66.5062987,50.2893372 62.5374061,50.2893372 M34.5058998,57.4781092 C34.5058998,55.6638791 35.9837682,54.1880507 37.800266,54.1880507 C39.6167638,54.1880507 41.0946322,55.6638791 41.0946322,57.4781092 C41.0946322,58.5547173 41.9684327,59.4274269 43.0463866,59.4274269 C44.1241454,59.4274269 44.998141,58.5547173 44.998141,57.4781092 C44.998141,53.5141715 41.7691586,50.2894152 37.800266,50.2894152 C33.8313735,50.2894152 30.602391,53.5141715 30.602391,57.4781092 C30.602391,58.5547173 31.4763866,59.4274269 32.5541454,59.4274269 C33.6319042,59.4274269 34.5058998,58.5547173 34.5058998,57.4781092 M67.6565846,67.6553021 C66.6291811,67.3264522 65.5311241,67.8911696 65.2020583,68.9163158 C65.1733675,69.0050097 62.2104092,77.7997466 50.1686702,77.7997466 C38.2399377,77.7997466 35.2533632,69.2687524 35.1354772,68.9161209 C34.8064114,67.8909747 33.7069882,67.3268421 32.6809509,67.6553021 C31.6543281,67.984152 31.0892952,69.0816179 31.418361,70.1069591 C31.4577864,70.2293762 32.4145364,73.1406823 35.2301373,75.9976023 C37.7931811,78.5983821 42.4656811,81.6983821 50.1686702,81.6983821 C57.8720496,81.6983821 62.5443544,78.5983821 65.1072031,75.9976023 C67.9229991,73.1406823 68.8797491,70.2293762 68.9191746,70.1067641 C69.2482404,69.0816179 68.6830123,67.984152 67.6565846,67.6553021">
        </path>
        </g>
      </g>
    </svg>
  )
}

export default SmileSVG


