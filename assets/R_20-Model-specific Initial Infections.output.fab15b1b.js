const l="R_20",n="Model-specific Initial Infections",u={Consumption:[-.13257274431691632,-.15876785690852557,-.1900407956760195,-.2273499633634414,-.2718234648469985,-.3247842868473121,-.38777702611202014,-.46259513219641973,-.5513069596775533,-.6562779755116664,-.7801851983036036,-.9260182644897138,-1.0970594458704825,-1.2968324698969358,-1.529007325783163,-1.7972457875125316,-2.104970841396626,-2.455043877299325,-2.849338029418578,-3.2882068468125762,-3.769866653593322,-4.289740167274691,-4.839846884030916,-5.408366701078763,-5.9795348127245855,-6.534029176396077,-7.049966719584195,-7.504519122317809,-7.876004702942545,-8.14615076208297,-8.30211455843748,-8.337858337382613,-8.254610349213229,-8.060365797890482,-7.768604536127322,-7.396546412357656,-6.96329520882869,-6.488156732544946,-5.989304564605983,-5.4828567460235424,-4.982346039530089,-4.49852114827753,-4.039399393942137,-3.6104919690441126,-3.215132419468895,-2.8548521586314335,-2.529760747973389,-2.2389018345985416,-1.980567104337484,-1.7525598899185126,-1.5524069221492371,-1.3775213422937858,-1.2253227252832666,-1.0933210495542343,-.9791716612895349,-.8807077783585837,-.7959562240466442,-.7231411085810193,-.6606792245465246,-.6071700683412604,-.5613826621444794,-.5222407573768179,-.4888075334192746,-.4602705389935528,-.4359273568489823,-.41517227822098224,-.3974841294344742,-.3824152998490747,-.3695819577366446,-.3586553950505037,-.34935442395559546,-.341438734466639,-.33470311502372047,-.32897244513033724,-.32409736918525767,-.3199505669621438,-.3164235483020695,-.3134239000168721,-.3108729273200515,-.30870363423560854,-.30685899649874293,-.30529048656933194,-.30395681379339057,-.3028228497429218,-.3018587121280097,-.30103898347786967,-.3003420461495369,-.2997495151422846,-.29924575584280394,-.2988174730885072,-.2984533617226378,-.2981438091214433,-.2978806417649502,-.297656910236087,-.2974667059171292,-.2973050053615016,-.29716753727765194,-.2970506706818254,-.29695131840465905,-.29686685572803656,-.2967950513192817],Labour:[-.13257274431688662,-.15876785690854328,-.1900407956760414,-.2273499633634274,-.2718234648469947,-.3247842868473159,-.38777702611203385,-.4625951321964824,-.5513069596775539,-.6562779755117091,-.7801851983036715,-.9260182644897209,-1.0970594458704532,-1.2968324698969176,-1.5290073257831593,-1.7972457875125611,-2.1049708413966486,-2.45504387729931,-2.849338029418583,-3.2882068468125802,-3.769866653593322,-4.289740167274702,-4.839846884030887,-5.40836670107875,-5.979534812724574,-6.53402917639607,-7.049966719584214,-7.504519122317816,-7.876004702942549,-8.146150762082979,-8.302114558437484,-8.33785833738262,-8.25461034921322,-8.060365797890475,-7.768604536127323,-7.396546412357656,-6.9632952088287015,-6.488156732544942,-5.989304564605971,-5.482856746023538,-4.982346039530076,-4.498521148277523,-4.039399393942088,-3.6104919690441326,-3.2151324194688864,-2.854852158631439,-2.5297607479734032,-2.2389018345985403,-1.9805671043374804,-1.7525598899185184,-1.5524069221492494,-1.3775213422937898,-1.2253227252832768,-1.0933210495542385,-.979171661289525,-.8807077783585857,-.7959562240466542,-.7231411085810142,-.6606792245465215,-.6071700683412489,-.5613826621444798,-.5222407573768297,-.4888075334192542,-.46027053899354603,-.43592735684898276,-.41517227822098873,-.39748412943452016,-.3824152998490813,-.3695819577366617,-.35865539505050703,-.3493544239555965,-.3414387344666349,-.3347031150237058,-.32897244513035484,-.3240973691852693,-.3199505669621273,-.3164235483020806,-.3134239000168829,-.3108729273200458,-.3087036342356193,-.3068589964987466,-.3052904865693289,-.3039568137933873,-.3028228497429401,-.3018587121280175,-.30103898347788516,-.3003420461495438,-.29974951514227965,-.2992457558428762,-.2988174730884712,-.2984533617226057,-.2981438091213965,-.2978806417649371,-.29765691023609214,-.29746670591712665,-.2973050053615055,-.2971675372776101,-.2970506706818212,-.2969513184046414,-.2968668557280313,-.2967950513193018],Output:[-.13257274431691632,-.15876785690852557,-.1900407956760195,-.2273499633634414,-.2718234648469985,-.3247842868473121,-.38777702611202014,-.46259513219641973,-.5513069596775533,-.6562779755116664,-.7801851983036036,-.9260182644897138,-1.0970594458704825,-1.2968324698969358,-1.529007325783163,-1.7972457875125316,-2.104970841396626,-2.455043877299325,-2.849338029418578,-3.2882068468125762,-3.769866653593322,-4.289740167274691,-4.839846884030916,-5.408366701078763,-5.9795348127245855,-6.534029176396077,-7.049966719584195,-7.504519122317809,-7.876004702942545,-8.14615076208297,-8.30211455843748,-8.337858337382613,-8.254610349213229,-8.060365797890482,-7.768604536127322,-7.396546412357656,-6.96329520882869,-6.488156732544946,-5.989304564605983,-5.4828567460235424,-4.982346039530089,-4.49852114827753,-4.039399393942137,-3.6104919690441126,-3.215132419468895,-2.8548521586314335,-2.529760747973389,-2.2389018345985416,-1.980567104337484,-1.7525598899185126,-1.5524069221492371,-1.3775213422937858,-1.2253227252832666,-1.0933210495542343,-.9791716612895349,-.8807077783585837,-.7959562240466442,-.7231411085810193,-.6606792245465246,-.6071700683412604,-.5613826621444794,-.5222407573768179,-.4888075334192746,-.4602705389935528,-.4359273568489823,-.41517227822098224,-.3974841294344742,-.3824152998490747,-.3695819577366446,-.3586553950505037,-.34935442395559546,-.341438734466639,-.33470311502372047,-.32897244513033724,-.32409736918525767,-.3199505669621438,-.3164235483020695,-.3134239000168721,-.3108729273200515,-.30870363423560854,-.30685899649874293,-.30529048656933194,-.30395681379339057,-.3028228497429218,-.3018587121280097,-.30103898347786967,-.3003420461495369,-.2997495151422846,-.29924575584280394,-.2988174730885072,-.2984533617226378,-.2981438091214433,-.2978806417649502,-.297656910236087,-.2974667059171292,-.2973050053615016,-.29716753727765194,-.2970506706818254,-.29695131840465905,-.29686685572803656,-.2967950513192817],Susceptibles:[99.9,99.84137485566183,99.77122262105857,99.68731238110858,99.58699686087782,99.46714138667978,99.32404364231925,99.15334436820444,98.94992992167701,98.7078287814133,98.42010576723972,98.07876010619407,97.67463665328012,97.19736368364309,96.63533572759168,95.9757657399283,95.2048369569831,94.30799004550042,93.27038380555025,92.07756511173247,90.71637253852647,89.17607452489572,87.44970422825853,85.53549957268585,83.43829407342221,81.17064509472985,78.75345205883431,76.21583168567926,73.5940981463836,70.92984203179057,68.26728524516878,65.65025749891552,63.11923646687711,60.708880752107405,58.44636558513625,56.350648087991765,54.432603420666005,52.69583743297925,51.137919856189974,49.75178908239704,48.52713125881492,47.451605102114755,46.51184837995903,45.69425128319185,44.985513311439476,44.373016301189054,43.845051255119735,43.39093501614711,43.001047919005195,42.66681755397401,42.38066794892775,42.13594841179077,41.92685216575124,41.74833172740256,41.59601559983111,41.466129126438624,41.355421130918785,41.26109712870461,41.180759334003504,41.11235332568832,41.05412101564088,41.00455944101155,40.96238484563585,40.9265015029485,40.89597474725082,40.87000771109003,40.84792130627255,40.8291370296314,40.813162218833625,40.799577426205154,40.788025618569336,40.77820294781336,40.76985087006221,40.76274942094598,40.75671148063642,40.75157788533055,40.747213261948275,40.743502480274266,40.740347631899596,40.73766545837841,40.73538516226311,40.73344654434932,40.731798418756505,40.73039726457714,40.72920607890842,40.72819340127912,40.727332483924755,40.726600586153495,40.725978374278434,40.725449411347334,40.7249997232499,40.724617429783066,40.72429243095878,40.7240161402892,40.72378125801892,40.72358157832474,40.72341182539751,40.72326751408119,40.72314483139148,40.72304053578666,40.72295187153162],Infected:[.1,.11973625544928225,.1433243907111546,.17149736760679976,.20511946710158832,.24520625964901452,.29294601414602744,.34972183831516507,.41713334772003063,.49701596387039726,.591454992094378,.7027903784366697,.8336064619585838,.9866991408339345,1.1650107643388234,1.3715210103148652,1.6090805114709485,1.880173890714933,2.186601395387077,2.5290751021098954,2.906738468939822,3.3166381890939665,3.753204745527952,4.207829777839764,4.668657030165713,5.120717163793638,5.546520191547198,5.927160490211662,6.243887172202796,6.479964942050293,6.62253536231919,6.664132689892761,6.603546564750644,6.445856393228436,6.201649629499642,5.885614492949824,5.51480907968399,5.106927091938073,4.678817466306994,4.245408114313872,3.8190738934405983,3.4094046471360904,3.0232817842944506,2.6651581871693324,2.3374457528003068,2.0409360814061595,1.775203762484195,1.5389629827129694,1.3303644754665054,1.1472308778162719,.9872351414895345,.8480299013805808,.727336741327663,.6230040024933702,.5330407957618355,.45563362635805177,.3891507671830925,.33213835993717794,.2833112368849358,.2415406530782027,.20584048692856055,.1753529833078981,.1493347518416369,.12714346881279892,.10822554219438826,.09210486750179775,.07837271273524918,.06667871220158182,.05672291269873635,.04824879483325634,.04103718225614083,.034900948801388824,.029680435352004972,.025239492942452094,.02146207488550518,.018249307735903046,.015516978109772662,.013193379407756693,.011217469123853066,.009537293541322968,.008108642168326323,.00689389923887935,.005861064016574368,.004982915522819845,.004236300710446556,.003601528063457637,.003061851170927343,.0026030290423815117,.0022129518454055315,.0018813223921771243,.0015993851148766078,.0013596954814809586,.0011559238407402284,.000982688572253754,.0008354141755514826,.0007102105792397013,.0006037705034304929,.0005132821795271122,.00043635513276481843,.0003709570748435808,.00031536024522126196],Recovered:[0,.03869444444444444,.08502572328912504,.14048430002819126,.20684425366048906,.28621409190285363,.38109529181704177,.4944491245129907,.629772046949942,.7911794784427205,.9834970444625715,1.212357267792424,1.484298100337502,1.806857489645365,2.1886552405291626,2.639449683508046,3.170152118888215,3.792776883465723,4.520299725067363,5.366392987226862,6.345004547571052,7.469750849580267,8.753105571082461,10.205387296227027,11.833583651930024,13.640094552769144,15.621527610870405,17.76772278498853,20.06120460800654,22.477242061028345,24.984628495549472,27.547181762135757,30.125830883530373,32.681036540390835,35.17522486143728,37.574918731963116,39.85232456215175,41.98624929770725,43.96234636411551,45.77278878927263,47.41552587350576,48.893295299495406,50.21254548656779,51.38238757699062,52.41365573108142,53.31811737931776,54.10784625748409,54.79475149113423,55.39024466750067,55.90502181036868,56.348936425034815,56.730941578394514,57.0590820374565,57.34052094875356,57.58158888638503,57.78784606096732,57.96415096138864,58.11473068880143,58.243249781966014,58.35287549112732,58.44633830494341,58.52598713780216,58.59383900050991,58.65162325309752,58.70082071200202,58.74269798430113,58.77833745108724,58.80866333687618,58.83446429412529,58.856412910066766,58.87508251317863,58.890961622868296,58.90446635111284,58.91595103068099,58.925717312255664,58.93402194289886,58.94108341114222,58.94708761961637,58.95219272448165,58.95653326183985,58.96022366459071,58.96336125862973,58.96602881464078,58.96829672080053,58.970224832279214,58.97186404530412,58.97325763657979,58.9744424028801,58.97544963050678,58.97630591992918,58.97703388717704,58.97765276036178,58.978178886974476,58.978626165282854,58.97900641116651,58.97932967004055,58.97960448207857,58.979838107720596,58.98003671940839,58.98020556460282,58.98034910438206],Deaths:[0,.0001944444444444445,.0004272649411513822,.0007059512564230717,.00103941836010296,.0014382617683560486,.001915051717673577,.0024846689674019634,.0031646836530147848,.003975776273581511,.004942196203329506,.006092247576846352,.007458784423806544,.009079685877614901,.010998267540347552,.013263566248784156,.015930412657729726,.019059180318923237,.02004652236172309,.022225526922692387,.025736373676472652,.03071591130125818,.03728950339330983,.04556085431593809,.05560019147533451,.0674316346159985,.08102108938743777,.0962664448223631,.11299206808542803,.1309494062229029,.14982482457645138,.16925468345326777,.18884630971509253,.20820232326803126,.22694509726505027,.24473817829201286,.26130223378794837,.27642426823229455,.28996009494651775,.3018310508943978,.31201652602897134,.32054403474903764,.32747838528903084,.3329111469179733,.3369512056692069,.3397168271756721,.3413293555156045,.3419084803930626,.3449009084150045,.34748772822841156,.34971845493527653,.3516380788215062,.3532870258519684,.35470129173788334,.3559126884093982,.35694915662337956,.35783511089685355,.35859179294415405,.35923761753292077,.3597885004935304,.3602581628745158,.36065840826576573,.3609993723999756,.3612897455285565,.361536968940137,.3617474074944038,.361926500292324,.36207889167819807,.36220854472970115,.36231883928217096,.3624126563832356,.3624924509042892,.3625603138602919,.3626180258179208,.3626671026097534,.3627088344220307,.3627443191870728,.3627744910889529,.36280014488224577,.36282195662776434,.3628405013652058,.36285626816942196,.3628696729734976,.36288106948686316,.3628907584892686,.36289899574065004,.36290599871188456,.36291195231138357,.3629170137567438,.3629213167186654,.3629249748455391,.3629280847610402,.36293072861336534,.36293297624305565,.3629348870263906,.36293651144284306,.36293789240785823,.36293906640605933,.36294006445474175,.36294091292305547,.36294163422847875],"Nominal Interest Rate":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],Inflation:[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],Investment:[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]};var t={model:l,shock:n,data:u};export{u as data,t as default,l as model,n as shock};