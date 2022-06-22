const e="AAL_20",t="Model-specific Initial Infections",o={Consumption:[-2.0022461274600056,-2.012352615186741,-2.0398042760409685,-2.114405831409527,-2.293246948664718,-2.6113306971248584,-2.9994301935606815,-3.3448411257545607,-3.5977827471360024,-3.7660365173303845,-3.8738583875074895,-3.942487887819013,-3.986512899196659,-4.015141521785615,-4.034034299220657,-4.046671369369392,-4.05522010289634,-4.061055125186186,-4.065065156148718,-4.0678350102815175,-4.069755337420866,-4.071090252274945,-4.072019990603271,-4.072668410584268,-4.073121066341323,-4.073437274360547,-4.073658270085867,-4.073812774048802,-4.0739208171163055,-4.0739963829279136,-4.074049240066325,-4.07408621580444,-4.074112083306769,-4.074130180417623,-4.074142841649763,-4.07415169996378,-4.074157897685016,-4.074162233962852,-4.074165267889274,-4.074167390620376,-4.07416887582518,-4.074169914976233,-4.074170642038643,-4.0741711507426785,-4.074171506668122,-4.074171755698963,-4.074171929938764,-4.074172051849434,-4.074172137146914,-4.074172196827163,-4.074172238583773,-4.074172267799692,-4.074172288241284,-4.074172302543677,-4.074172312550662,-4.074172319552272,-4.074172324451119,-4.0741723278786885,-4.074172330276871,-4.074172331954806,-4.0741723331288116,-4.074172333950243,-4.074172334524984,-4.074172334927084,-4.074172335208437,-4.0741723354052795,-4.074172335543002,-4.074172335639381,-4.074172335706805,-4.074172335753978,-4.074172335786985,-4.074172335810077,-4.074172335826254,-4.074172335837545,-4.07417233584545,-4.07417233585099,-4.074172335854875,-4.074172335857574,-4.074172335859472,-4.074172335860792,-4.074172335861714,-4.074172335862358,-4.074172335862835,-4.074172335863135,-4.074172335863347,-4.0741723358635245,-4.074172335863646,-4.074172335863735,-4.074172335863779,-4.074172335863835,-4.074172335863846,-4.074172335863868,-4.074172335863913,-4.074172335863913,-4.074172335863924,-4.074172335863924,-4.074172335863924,-4.074172335863935,-4.074172335863935,-4.074172335863935,-4.074172335863935],Labour:[-2.0022461274600056,-2.012352615186741,-2.0398042760409685,-2.114405831409527,-2.293246948664718,-2.6113306971248584,-2.9994301935606815,-3.3448411257545607,-3.5977827471360024,-3.7660365173303845,-3.8738583875074895,-3.942487887819013,-3.986512899196659,-4.015141521785615,-4.034034299220657,-4.046671369369392,-4.05522010289634,-4.061055125186186,-4.065065156148718,-4.0678350102815175,-4.069755337420866,-4.071090252274945,-4.072019990603271,-4.072668410584268,-4.073121066341323,-4.073437274360547,-4.073658270085867,-4.073812774048802,-4.0739208171163055,-4.0739963829279136,-4.074049240066325,-4.07408621580444,-4.074112083306769,-4.074130180417623,-4.074142841649763,-4.07415169996378,-4.074157897685016,-4.074162233962852,-4.074165267889274,-4.074167390620376,-4.07416887582518,-4.074169914976233,-4.074170642038643,-4.0741711507426785,-4.074171506668122,-4.074171755698963,-4.074171929938764,-4.074172051849434,-4.074172137146914,-4.074172196827163,-4.074172238583773,-4.074172267799692,-4.074172288241284,-4.074172302543677,-4.074172312550662,-4.074172319552272,-4.074172324451119,-4.0741723278786885,-4.074172330276871,-4.074172331954806,-4.0741723331288116,-4.074172333950243,-4.074172334524984,-4.074172334927084,-4.074172335208437,-4.0741723354052795,-4.074172335543002,-4.074172335639381,-4.074172335706805,-4.074172335753978,-4.074172335786985,-4.074172335810077,-4.074172335826254,-4.074172335837545,-4.07417233584545,-4.07417233585099,-4.074172335854875,-4.074172335857574,-4.074172335859472,-4.074172335860792,-4.074172335861714,-4.074172335862358,-4.074172335862835,-4.074172335863135,-4.074172335863347,-4.0741723358635245,-4.074172335863646,-4.074172335863735,-4.074172335863779,-4.074172335863835,-4.074172335863846,-4.074172335863868,-4.074172335863913,-4.074172335863913,-4.074172335863924,-4.074172335863924,-4.074172335863924,-4.074172335863935,-4.074172335863935,-4.074172335863935,-4.074172335863935],Output:[-2.0022461274600056,-2.012352615186741,-2.0398042760409685,-2.114405831409527,-2.293246948664718,-2.6113306971248584,-2.9994301935606815,-3.3448411257545607,-3.5977827471360024,-3.7660365173303845,-3.8738583875074895,-3.942487887819013,-3.986512899196659,-4.015141521785615,-4.034034299220657,-4.046671369369392,-4.05522010289634,-4.061055125186186,-4.065065156148718,-4.0678350102815175,-4.069755337420866,-4.071090252274945,-4.072019990603271,-4.072668410584268,-4.073121066341323,-4.073437274360547,-4.073658270085867,-4.073812774048802,-4.0739208171163055,-4.0739963829279136,-4.074049240066325,-4.07408621580444,-4.074112083306769,-4.074130180417623,-4.074142841649763,-4.07415169996378,-4.074157897685016,-4.074162233962852,-4.074165267889274,-4.074167390620376,-4.07416887582518,-4.074169914976233,-4.074170642038643,-4.0741711507426785,-4.074171506668122,-4.074171755698963,-4.074171929938764,-4.074172051849434,-4.074172137146914,-4.074172196827163,-4.074172238583773,-4.074172267799692,-4.074172288241284,-4.074172302543677,-4.074172312550662,-4.074172319552272,-4.074172324451119,-4.0741723278786885,-4.074172330276871,-4.074172331954806,-4.0741723331288116,-4.074172333950243,-4.074172334524984,-4.074172334927084,-4.074172335208437,-4.0741723354052795,-4.074172335543002,-4.074172335639381,-4.074172335706805,-4.074172335753978,-4.074172335786985,-4.074172335810077,-4.074172335826254,-4.074172335837545,-4.07417233584545,-4.07417233585099,-4.074172335854875,-4.074172335857574,-4.074172335859472,-4.074172335860792,-4.074172335861714,-4.074172335862358,-4.074172335862835,-4.074172335863135,-4.074172335863347,-4.0741723358635245,-4.074172335863646,-4.074172335863735,-4.074172335863779,-4.074172335863835,-4.074172335863846,-4.074172335863868,-4.074172335863913,-4.074172335863913,-4.074172335863924,-4.074172335863924,-4.074172335863924,-4.074172335863935,-4.074172335863935,-4.074172335863935,-4.074172335863935],Susceptibles:[96.26746371107447,93.21648003749169,86.39735322369917,73.27632837496606,53.97581286669313,34.35101976107963,20.43528763880906,12.582752350739817,8.461843842494124,6.254732641780814,5.010123553050179,4.270464650888693,3.811275933201995,3.5164900437988207,3.322503410833532,3.192542538454984,3.1043542427502966,3.0439659833008927,3.002348193458186,2.973536652882037,2.9535273495705794,2.9396001271573886,2.929891114123783,2.923115311608245,2.9183829368263905,2.9150759650218463,2.912764193367232,2.911147701517449,2.9100171717928536,2.9092264087716835,2.9086732499603163,2.908286276938961,2.9080155504857608,2.9078261443257656,2.9076936287642337,2.9076009145710158,2.9075360466236004,2.9074906611052307,2.9074589065019496,2.907436688875795,2.907421143911875,2.9074102675774793,2.9074026577305103,2.907397333342804,2.9073936080219442,2.9073910015210345,2.9073891778260372,2.9073879018379425,2.90738700906483,2.90738638441644,2.9073859473673904,2.9073856415763513,2.907385427622875,2.907385277925581,2.9073851731865488,2.9073850999035598,2.9073850486294903,2.9073850127544487,2.90738498765368,2.9073849700913694,2.907384957803508,2.9073849492060337,2.907384943190619,2.907384938981801,2.907384936037008,2.9073849339766182,2.90738493253502,2.9073849315263747,2.9073849308206534,2.9073849303268795,2.907384929981399,2.9073849297396768,2.9073849295705503,2.9073849294522165,2.907384929369422,2.907384929311493,2.907384929270961,2.9073849292426024,2.907384929222761,2.907384929208878,2.9073849291991647,2.9073849291923684,2.9073849291876126,2.907384929184286,2.907384929181958,2.9073849291803295,2.907384929179191,2.9073849291783938,2.9073849291778355,2.9073849291774456,2.9073849291771725,2.9073849291769807,2.907384929176846,2.907384929176753,2.9073849291766876,2.9073849291766423,2.90738492917661,2.907384929176588,2.9073849291765717,2.90738492917656,2.9073849291765512],Infected:[1.5217959495374678,3.6783137201660785,8.388657978559253,16.947194664825354,27.83898719714122,35.19961136147449,35.20258106048678,30.116626557909658,23.607391826983555,17.65814199818848,12.87213350657306,9.244646850822608,6.579797762950013,4.656578951113775,3.283372410444943,2.3094654645317063,1.6217634622977737,1.1375651718178796,.79731601281014,.5585392030744355,.3911259972613928,.2738220239749417,.1916648739304395,.13414132698995496,.09387391141444346,.0656902409026505,.04596617451447335,.03216347620985856,.022504977751070434,.015746639741064578,.011017746764698546,.007708938773706817,.005393792671336356,.003773917410569812,.0026405201040598154,.0018475058668026613,.0012926521026627449,.0009044345118642385,.000632808555283318,.00044275898267477295,.0003097863629996048,.0002167490108641138,.00015165330938036984,.00010610763069758844,7424057258333259e-20,51944071483166475e-21,3634382626722777e-20,2542876673117627e-20,17791802165248413e-21,12448429922110121e-21,870982067153955e-20,6094019581532488e-21,426381620412005e-20,29832737373649566e-22,20873137463911382e-22,14604354322049104e-22,10218260926610907e-22,7149433243887024e-22,5002259782986899e-22,3499942173712675e-22,2448812286445468e-22,17133659116827608e-23,11987945189762133e-23,8387632138688781e-23,5868593138901314e-23,4106091547553412e-23,28729181589848598e-24,20101010054172004e-24,14064118183424403e-24,9840272689903114e-24,6884965367054546e-24,48172189530854355e-25,33704742442039454e-25,2358227172452132e-24,16499860239094062e-25,1154449372348897e-24,8077361468541423e-25,565150537183763e-24,3954201268853881e-25,27666447514173733e-26,19357444551026935e-26,13543866062098088e-26,9476266736783951e-26,6630280516282778e-26,4639023039944153e-26,32457955153302306e-27,22709929303270807e-27,1588950648688904e-26,11117446163098504e-27,7778568157002061e-27,5442447994392868e-27,3807929630983241e-27,2664302550885047e-27,18641384611983122e-28,13042858820085777e-28,912572589116232e-27,6385016827168463e-28,44674188518752244e-29,31257288333476116e-29,21869856092673142e-29,15301730604762343e-29],Recovered:[.20849421192803996,1.092853627155474,3.1741845217006217,7.662071128799093,15.891952987500929,27.83803818032103,41.36270110714347,53.955779965595966,64.33298158338633,72.32108884270032,78.24388455286929,82.54240061046971,85.62241340465133,87.8117894833018,89.36008987950088,90.45132062764392,91.21866219205559,91.75741371969505,92.13527063758295,92.40008913376201,92.58559131574717,92.71548759659274,92.80642402134251,92.87007495081752,92.91462208541785,92.94579651971497,92.96761136203243,92.9828760482239,92.99355703333977,93.00103056855934,93.00625976320866,93.00991856848287,93.01247857353614,93.01426975784601,93.01552300948195,93.0163998795984,93.01701340358875,93.01744267042004,93.0177430170535,93.01795316152112,93.01810019389993,93.01820306843544,93.01827504692147,93.01832540828381,93.01836064473734,93.01838529870852,93.01840254840893,93.0184146175459,93.01842306198608,93.01842897032647,93.01843310422817,93.01843599660437,93.01843802031966,93.01843943625701,93.01844042694904,93.01844112010873,93.0184416050933,93.01844194442354,93.01844218184348,93.0184423479596,93.01844246418645,93.01844254550716,93.01844260240495,93.0184426422148,93.01844267006864,93.01844268955719,93.01844270319279,93.01844271273325,93.01844271940844,93.01844272407888,93.01844272734664,93.01844272963301,93.01844273123274,93.018442732352,93.01844273313513,93.01844273368307,93.01844273406643,93.01844273433468,93.01844273452235,93.01844273465368,93.01844273474555,93.01844273480981,93.0184427348548,93.01844273488628,93.01844273490829,93.01844273492367,93.01844273493444,93.01844273494197,93.01844273494726,93.01844273495095,93.01844273495352,93.01844273495533,93.0184427349566,93.01844273495747,93.0184427349581,93.01844273495853,93.01844273495882,93.01844273495904,93.0184427349592,93.01844273495928,93.01844273495936],Deaths:[.0022461274600067004,.012352615186729006,.039804276040947606,.1144058314095107,.29324694866472134,.6113306971248617,.9994301935606948,1.3448411257545647,1.5977827471359767,1.766036517330371,1.8738583875074943,1.9424878878190246,1.9865128991966994,2.015141521785647,2.03403429922069,2.0466713693694465,2.05522010289639,2.061055125186203,2.0650651561487603,2.0678350102815553,2.0697553374209114,2.071090252274976,2.0720199906033065,2.072668410584317,2.0731210663413417,2.073437274360555,2.0736582700858874,2.0738127740488186,2.0739208171163255,2.073996382927947,2.0740492400663486,2.0740862158044817,2.074112083306795,2.074130180417676,2.0741428416497865,2.0741516999638163,2.0741578976850277,2.074162233962897,2.074165267889303,2.0741673906204317,2.0741688758252192,2.0741699149762574,2.0741706420386805,2.0741711507427407,2.074171506668194,2.0741717556990276,2.0741719299388293,2.074172051849501,2.0741721371469737,2.0741721968272264,2.0741722385838326,2.074172267799765,2.074172288241339,2.0741723025437393,2.0741723125507314,2.0741723195523454,2.0741723244511787,2.074172327878757,2.074172330276938,2.0741723319548795,2.0741723331288875,2.074172333950308,2.0741723345250342,2.074172334927154,2.0741723352085057,2.0741723354053594,2.0741723355430928,2.0741723356394606,2.074172335706886,2.0741723357540622,2.0741723357870705,2.074172335810166,2.074172335826324,2.0741723358376296,2.07417233584554,2.0741723358510744,2.0741723358549473,2.074172335857657,2.074172335859553,2.0741723358608795,2.0741723358618067,2.0741723358624564,2.0741723358629107,2.074172335863228,2.0741723358634507,2.074172335863606,2.074172335863715,2.074172335863791,2.0741723358638446,2.074172335863882,2.074172335863908,2.0741723358639264,2.0741723358639383,2.0741723358639477,2.0741723358639534,2.0741723358639583,2.074172335863961,2.0741723358639637,2.0741723358639654,2.074172335863966,2.074172335863966]};var c={model:e,shock:t,data:o};export{o as data,c as default,e as model,t as shock};
