const l="CF_20",n="Model-specific Initial Infections",t={Consumption:[-.002308686957278996,-.0025806744602099333,-.0028840157303519328,-.003222090153821936,-.0035985832949880373,-.004017499635582049,-.00448317151011604,-.005000262728721032,-.005573765075678955,-.006208985537417984,-.006911521656843041,-.007687222146300029,-.008542129374720018,-.009482400140918976,-.010514200900100967,-.011643573452373003,-.012876267547034961,-.01421753724019196,-.015671898811071,-.01724285008311896,-.018932552702111957,-.020741482650879006,-.022668057742799987,-.024708255838622975,-.02685524173970702,-.029099027506085957,-.031426193668359026,-.03381970384747207,-.03625884580958107,-.03871933066083608,-.04117357614757497,-.04359119074900804,-.045939661286424065,-.048185230965264086,-.050293933644549066,-.052232734092687014,-.05397070975160699,-.055480196838576044,-.05673782344918809,-.05772536097109807,-.0584303315512231,-.05884634065653006,-.058973121617136005,-.05881630196125808,-.05838692782296905,-.05770079321445302,-.05677762718246707,-.05564020810669207,-.054313453329141045,-.05282353465082999,-.05119706147204704,-.04946035632027308,-.04763884642717806,-.04575657247964107,-.04383581969318704,-.041896864305891054,-.03995782196674801,-.038034586125426,-.036140840735315954,-.03428813094060001,-.03248597769836995,-.03074202372723297,-.029062198204368023,-.027450891717414043,-.025911133702016968,-.024444766355154027,-.02305261110001802,-.02173462432355098,-.020490040954269005,-.019317504433518026,-.018215183099846995,-.017180872937537978,-.016212087375032984,-.015306134828469025,-.014460184955391024,-.013671324605946037,-.012936604543689003,-.012253077962286042,-.011617831760025033,-.011028011513022051,-.010480841035385923,-.009973637269038004,-.009503821217585983,-.009068925589719,-.008666599630001945,-.008294611710375007,-.00795085001483998,-.007633321769192943,-.007340151228855037,-.00706957678062002,-.006819947309882985,-.006589718064543033,-.006377446142736038,-.006181785752972952,-.006001483334813923,-.0058353726343829465,-.005682369799298976,-.00554146854734699,-.005411735445009042,-.005292305344310938,null],Labour:[-.002108686957277952,-.002357287507385955,-.002634538254788879,-.002943525976517872,-.0032876169023368686,-.0036704682918660175,-.0040960365273929366,-.004568580341789979,-.0050926575261720005,-.005673113158695015,-.0063150569727988895,-.00702382725336593,-.007804938166598948,-.008664007255959014,-.009606659613254975,-.010638405083775015,-.011764485295871997,-.012989687645846973,-.01431812425326297,-.015752975808077902,-.017296201741856938,-.01894822161842693,-.020707575766028906,-.022570577772935998,-.024530975224235887,-.026579641380504032,-.028704322777038025,-.030889472416976958,-.03311619856607704,-.03536235790935597,-.03760281649288498,-.039809893374183045,-.04195398910130703,-.04400438681689494,-.045930194348114954,-.04770138130504497,-.049289852458470056,-.050670487015473054,-.05182207363886393,-.05272807934481305,-.05337719574168298,-.053763635621358,-.053887168625304016,-.05375290535716498,-.053370863676207025,-.052755359730119966,-.05192427138760508,-.05089823747543998,-.04969983528571503,-.04835278175617796,-.04688119591687195,-.04530894429352205,-.04365909102368392,-.041953452980169045,-.040212265104888,-.03845394980352006,-.03669497809869303,-.034949812142658,-.033230915005247975,-.031548812988663,-.02991219788694591,-.028328057880416955,-.026801825589471,-.025337535692339902,-.023937985042611045,-.02260488980512201,-.021339036061499915,-.020140420854080986,-.019008382379849996,-.01794171795066903,-.016938789741176925,-.015997618233080897,-.015115963968456008,-.014291398215119893,-.013521363405992928,-.01280322423255588,-.012134310357734946,-.011511951671621957,-.010933506955139961,-.010396386803045898,-.009898071613247971,-.00943612531196698,-.009008205464334016,-.00861207037865098,-.008245583632370998,-.007906716549969004,-.007593548928032886,-.007304268427727975,-.007037168820944969,-.006790647423143954,-.006563201845736895,-.006353426283272907,-.00616000744981799,-.005981720302376931,-.005817423631029001,-.005666055603159032,-.005526629320977034,-.005398228442480896,-.005280002898737873,-.005171164753628948,null],Output:[-.002108686957277952,-.0023572875073860212,-.0026345382547889457,-.0029435259765179054,-.003287616902336902,-.0036704682918660175,-.004096036527392903,-.004568580341790045,-.0050926575261721,-.005673113158695081,-.006315056972798955,-.007023827253365996,-.007804938166598915,-.008664007255959047,-.009606659613255008,-.010638405083775082,-.011764485295871964,-.012989687645847039,-.014318124253263035,-.015752975808077902,-.017296201741857038,-.01894822161842693,-.020707575766028906,-.02257057777293603,-.024530975224235953,-.026579641380504063,-.02870432277703799,-.030889472416977024,-.033116198566077136,-.03536235790935604,-.03760281649288508,-.03980989337418314,-.04195398910130703,-.04400438681689493,-.04593019434811492,-.047701381305045004,-.04928985245847009,-.05067048701547315,-.05182207363886403,-.05272807934481315,-.053377195741683016,-.05376363562135796,-.053887168625304016,-.05375290535716505,-.05337086367620706,-.05275535973012003,-.05192427138760514,-.050898237475440006,-.049699835285715026,-.04835278175617806,-.046881195916872016,-.04530894429352208,-.04365909102368395,-.04195345298016901,-.040212265104888,-.03845394980352012,-.03669497809869306,-.034949812142658035,-.03323091500524801,-.031548812988663,-.02991219788694591,-.02832805788041702,-.026801825589471067,-.025337535692339968,-.02393798504261111,-.022604889805122076,-.02133903606149998,-.020140420854080986,-.019008382379850027,-.017941717950669095,-.01693878974117699,-.015997618233080962,-.01511596396845604,-.014291398215119926,-.013521363405992895,-.012803224232555945,-.012134310357734946,-.011511951671622056,-.01093350695513996,-.010396386803045898,-.009898071613247971,-.009436125311967079,-.009008205464334083,-.00861207037865098,-.008245583632371031,-.00790671654996907,-.007593548928032953,-.007304268427728074,-.007037168820944968,-.006790647423144021,-.006563201845736895,-.006353426283273007,-.006160007449818089,-.005981720302376964,-.005817423631029068,-.005666055603159098,-.005526629320977034,-.005398228442480996,-.005280002898737873,-.005171164753628915,null],Susceptibles:[.999,.998494176346985,.997929360213918,.997298831613839,.996595167970124,.995810186340198,.99493488497683,.993959385489395,.992872877257471,.991663566209568,.990318630613231,.988824187127571,.987165271037595,.985325835304273,.983288773796304,.981035974774227,.978548411311352,.975806275773741,.972789165634092,.969476327629961,.965846966446876,.961880622552057,.957557621378476,.952859592645736,.947770054157982,.942275048993995,.936363818810008,.930029489381014,.923269738090002,.916087407576643,.908491026043822,.900495193670135,.892120796945413,.883395018991432,.874351124073716,.865028007985733,.855469521704501,.845723592095794,.835841178614756,.825875117125989,.815878909714163,.805905521734123,.79600624438243,.786229673281457,.776620842171275,.767220537420265,.758064805203642,.749184650309453,.740605914798924,.73234931656947,.724430622638364,.716860929478766,.70964702254303,.702791788778568,.696294658752127,.690152058593415,.684357855788147,.678903786582253,.673779856212607,.668974706183678,.664475945313027,.660270443280523,.656344586960201,.652684500935913,.649276234382164,.646105916980197,.643159886801587,.640424793183043,.637887677578779,.635536035253021,.633357860490607,.63134167778648,.629476561239448,.627752144137242,.626158620486597,.624686740020588,.623327798009506,.622073621013272,.620916549543651,.619849418453154,.618865535734046,.61795866029411,.61712297917446,.616353084587377,.615643951077483,.614990913046008,.614389642824314,.613836129437799,.61332665816382,.612857790956182,.612426347783294,.612029388906287,.611664198106684,.611328266859844,.611019279439968,.610735098934297,.610473754138099,.610233427297531,.610012442664363,.609809255824569,null],Infected:[.001,.00111693476412573,.00124738737781111,.00139282088651869,.00155483196325428,.00173515671858167,.00193567491361196,.00215841193464255,.00240553774753906,.00267936189362073,.00298232342021632,.00331697446468107,.00368595604061507,.00409196442480839,.00453770643424104,.00502584184300245,.00555891125582101,.0061392479717234,.00676887278903552,.00744937137520848,.00818175480126767,.008966305162261,.00980240988385072,.0106883903284271,.0116213325773478,.0125969306279222,.0136093544566058,.0146511571524756,.0157132362175248,.0167848637574021,.017853798273456,.018906486874132,.0199283609255804,.0209042207418357,.0218186964821711,.0226567639381987,.0234042864656872,.0240485491155158,.0245787490516306,.0249864081314296,.0252656790477,.0254135251758573,.0254297649591606,.0253169830204604,.0250803207337964,.0247271674216639,.024266778974306,.0237098531562655,.0230680902171349,.0223537644732585,.0215793277758759,.0207570601337443,.019898777017468,.0190155974973593,.0181177729414937,.0172145725118478,.0163142193402856,.0154238699138468,.0145496286503296,.0136965897596865,.0128688990571254,.0120698292340811,.011301863074482,.0105667801253606,.00986574329702562,.00919938275014902,.00856787519258977,.00797101734734905,.007408292872088,.00687893241425599,.00638196679334885,.00591627352228444,.00548061703287301,.0050736830667389,.00469410774698565,.0043405018669443,.00401147092977029,.00370563145331571,.00342162402442518,.00315812354986773,.00291384711069444,.00268755978536062,.00247807876625901,.00228427605535249,.00210507998816442,.00193947580202003,.00178650543403943,.00164526670731678,.00151491203956187,.00139464678737053,.00128372732072552,.00118145890633863,.0010871934645884,.00100032725297675,.000920298518917861,.000846585156120928,.000778702391604494,.000716200524326999,.000658662731367883,.000605702953407159,null],Recovered:[0,385e-6,.000815019884188404,.00129526402464568,.00183150006595538,.00243011037180828,.00309814570846222,.00384338055020282,.0046743691450402,.00560050117784274,.00663205550688672,.00778025002367,.00905728519257222,.010476378268209,.0120517845717602,.013798801548943,.015733750658499,.0178739314919901,.0202375419611036,.0228435579848823,.0257115659643375,.0288615415628256,.0323135690502961,.0360874968555786,.040202527132023,.0446767401743019,.0495265584660519,.0547661599318452,.0604068554355483,.0664564513792953,.0729186239258952,.0797923362611757,.0870713337077165,.0947437526640649,.102791877649672,.111192075795308,.119914929911514,.128925580200804,.138184271610277,.147647089995155,.157266857125755,.16699414355912,.176778350751825,.186568810261102,.196315848723979,.205971772206491,.215491731663831,.224834441568939,.233962735034101,.242843949767698,.251450149089903,.259758190283615,.267749658435107,.275410687586832,.282731692623315,.28970703520579,.296334645622852,.302615620068862,.308553809985692,.314155417016069,.319428604073549,.324383130210542,.329030014465663,.333381231749339,.337449442097603,.341247753266957,.344789515625765,.348088147574912,.351156989253641,.354009182009395,.356657570988884,.359114628204323,.361392393510403,.363502431068059,.365455799048753,.367263030531343,.368934123750116,.370478540058078,.371905208167604,.373222533417008,.374438410983707,.375560242121324,.376594952638688,.377549012963698,.378428459245009,.379238915040452,.37998561322423,.380673417816335,.381306845498652,.381890086633883,.382427025647021,.3829212606655,.38337612234444,.383794691828307,.384179817820703,.384534132750486,.384860068035593,.385159868456361,.385435605658227,.385689190809803,null],Deaths:[0,388888888888889e-20,823252408271116e-20,13083474996421e-18,185000006662159e-19,245465694122048e-19,31294401095578e-18,388220257596245e-19,472158499499011e-19,565707189681085e-19,669904596655224e-19,785883840774748e-19,914877292179012e-19,.000105822002709182,.000121735197694548,.000139381833827708,.000158926774328273,.000180544762545354,.000204419615768723,.000230743009948306,.000259712787518561,.000291530722856824,.000326399687376728,.00036452017025837,.000406086132646697,.000451280203780827,.000500268267333858,.000553193534665103,.00061017025692473,.000671277286659549,.000736551756827224,.00080598319455733,.000879508421290066,.000957007602667323,.00103830179444113,.00112315228076068,.00121126191829812,.00130227858788691,.00139580072333613,.00149138474742581,.00158855411238137,.0016868095309002,.00178563990658409,.00188453343698083,.00198298837094928,.00208052295158071,.00217668415822052,.00227105496534282,.00236325994983941,.00245296918957271,.0025399004958576,.0026238201038749,.00270454200439502,.00278192613724072,.00285587568306379,.00292633368894738,.00299327924871567,.00305672343503901,.00311670515137063,.00317328704056636,.00322655155629847,.00327659727485396,.00332353549965316,.00336748718938726,.00340858022320811,.00344694700269654,.00348272238005823,.00351604189469608,.00354704029549133,.00357585032332722,.00360260172716044,.00362742048691235,.00365042821727679,.00367174172796019,.00369147271766417,.00370972758112467,.00372660731060723,.00374220747533412,.00375661826431924,.00376992457996978,.0037822061715526,.0037935377992053,.00380398942059281,.00381362639357271,.00382250968934352,.00383069611151972,.00383823851741646,.00384518603854884,.00385158429796618,.00385747562256448,.00386289924895981,.00386789152187374,.00387248608428728,.00387671405887179,.00388060422041114,.00388418315909582,.00388747543470296,.00389050372178142,.00389328894604269,.00389585041222024,null]};var e={model:l,shock:n,data:t};export{t as data,e as default,l as model,n as shock};