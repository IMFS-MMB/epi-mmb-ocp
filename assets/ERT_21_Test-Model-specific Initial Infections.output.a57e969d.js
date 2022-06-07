const t="ERT_21_Test",e="Model-specific Initial Infections",o={Consumption:[0,-.005316433895543721,-.007632253578341661,-.010751942300843396,-.014791251569643359,-.01976898887755132,-.025552797676840256,-.03184362225014613,-.03822597897484645,-.04427149379102061,-.04964352163357906,-.05415246123448336,-.057750754943877304,-.06049158081781939,-.06248138595851572,-.06384355664796365,-.06469687273481554,-.06514555296069512,-.06527638664022709,-.0651594616487273,-.06485035775821486,-.06439268903907522,-.06382048841036765,-.06316024925629941,-.062432592226914246,-.06165358969092674,-.06083580138948001,-.059989076496029414,-.059121171260552996,-.058238223174043535,-.05734511449597253,-.056445750928465384,-.055543275413578695,-.054640232400290145,-.05373869431420851,-.052840359170704315,-.05194662613619757,-.05105865421323453,-.05017740798665952,-.049303693430001,-.04843818605784325,-.04758145317038787,-.04673397152499064,-.04589614145929194,-.04506829825121855,-.04425072132192251,-.043443641747973744,-.04264724844404893,-.04186169329592634,-.041087095461086014,-.04032354500598961,-.03957110601232956,-.038829819255275774,-.03809970453491843,-.03738076272445867,-.0366729775854743,-.03597631738966988,-.035290736379017036,-.034616176088793395,-.03395256655392887,-.03329982741448607,-.03265786893323044,-.032026592935865204,-.03140589368231609,-.030795658676260648,-.03019576941866674,-.029606102110084954,-.02902652830617552,-.02845691552950358,-.027897127841092644,-.027347026374129963,-.026806469832242417,-.026275314954562003,-.025753416949318174,-.025240629897824083,-.024736807130468424,-.02424180157613371,-.02375546608645263,-.02327765373644897,-.02280821810231791,-.022347013518091312,-.02189389531195283,-.021448720023358334,-.02101134560206946,-.020581631589955834,-.020159439286599936,-.019744631899555574,-.019337074680119828,-.01893663504539244,-.018543182687496378,-.018156589670607043,-.017776730516467873,-.01740348227924062,-.017036724610084115,-.016676339812221275,-.016322212887008098,-.01597423157154848,-.01563228636833188,-.015296270567436505,-.014966080261632313,-.014641614354916725],Labour:[0,-.005316433895543783,-.0076322535783419,-.010751942300843278,-.014791251569643624,-.019768988877551408,-.025552797676840378,-.031843622250146045,-.0382259789748467,-.04427149379102069,-.049643521633579164,-.05415246123448357,-.05775075494387722,-.060491580817819725,-.06248138595851582,-.0638435566479636,-.06469687273481561,-.06514555296069512,-.06527638664022715,-.06515946164872741,-.06485035775821478,-.06439268903907523,-.06382048841036754,-.06316024925629941,-.06243259222691438,-.061653589690926935,-.06083580138948008,-.059989076496029296,-.05912117126055299,-.058238223174043924,-.057345114495972585,-.05644575092846552,-.05554327541357879,-.0546402324002904,-.0537386943142086,-.052840359170704385,-.05194662613619742,-.05105865421323484,-.05017740798665964,-.04930369343000101,-.0484381860578434,-.047581453170387915,-.04673397152499056,-.04589614145929171,-.045068298251218816,-.0442507213219226,-.043443641747973896,-.042647248444048866,-.0418616932959265,-.04108709546108586,-.040323545005989815,-.03957110601232954,-.038829819255275844,-.03809970453491829,-.037380762724458706,-.036672977585474165,-.03597631738966989,-.03529073637901714,-.03461617608879359,-.03395256655392893,-.033299827414486165,-.03265786893323064,-.03202659293586522,-.03140589368231618,-.030795658676260804,-.030195769418666658,-.029606102110085075,-.02902652830617582,-.028456915529503517,-.02789712784109279,-.027347026374130223,-.02680646983224236,-.026275314954562163,-.02575341694931829,-.025240629897824083,-.02473680713046849,-.02424180157613368,-.023755466086452896,-.02327765373644906,-.022808218102318176,-.02234701351809143,-.02189389531195296,-.021448720023358625,-.02101134560206955,-.02058163158995579,-.020159439286600085,-.019744631899555616,-.019337074680119897,-.018936635045392336,-.018543182687496693,-.018156589670607355,-.01777673051646809,-.017403482279240632,-.017036724610084115,-.016676339812221514,-.01632221288700819,-.01597423157154879,-.015632286368332058,-.015296270567436718,-.01496608026163239,-.014641614354916907],Output:[0,-.005316433895543721,-.007632253578341661,-.010751942300843396,-.014791251569643359,-.01976898887755132,-.025552797676840256,-.03184362225014613,-.03822597897484645,-.04427149379102061,-.04964352163357906,-.05415246123448336,-.057750754943877304,-.06049158081781939,-.06248138595851572,-.06384355664796365,-.06469687273481554,-.06514555296069512,-.06527638664022709,-.0651594616487273,-.06485035775821486,-.06439268903907522,-.06382048841036765,-.06316024925629941,-.062432592226914246,-.06165358969092674,-.06083580138948001,-.059989076496029414,-.059121171260552996,-.058238223174043535,-.05734511449597253,-.056445750928465384,-.055543275413578695,-.054640232400290145,-.05373869431420851,-.052840359170704315,-.05194662613619757,-.05105865421323453,-.05017740798665952,-.049303693430001,-.04843818605784325,-.04758145317038787,-.04673397152499064,-.04589614145929194,-.04506829825121855,-.04425072132192251,-.043443641747973744,-.04264724844404893,-.04186169329592634,-.041087095461086014,-.04032354500598961,-.03957110601232956,-.038829819255275774,-.03809970453491843,-.03738076272445867,-.0366729775854743,-.03597631738966988,-.035290736379017036,-.034616176088793395,-.03395256655392887,-.03329982741448607,-.03265786893323044,-.032026592935865204,-.03140589368231609,-.030795658676260648,-.03019576941866674,-.029606102110084954,-.02902652830617552,-.02845691552950358,-.027897127841092644,-.027347026374129963,-.026806469832242417,-.026275314954562003,-.025753416949318174,-.025240629897824083,-.024736807130468424,-.02424180157613371,-.02375546608645263,-.02327765373644897,-.02280821810231791,-.022347013518091312,-.02189389531195283,-.021448720023358334,-.02101134560206946,-.020581631589955834,-.020159439286599936,-.019744631899555574,-.019337074680119828,-.01893663504539244,-.018543182687496378,-.018156589670607043,-.017776730516467873,-.01740348227924062,-.017036724610084115,-.016676339812221275,-.016322212887008098,-.01597423157154848,-.01563228636833188,-.015296270567436505,-.014966080261632313,-.014641614354916725],Susceptibles:[1,.9987012834953667,.9977858291088884,.9964977337244677,.9947281148603688,.9923675385822933,.9893250439170204,.9855487267492209,.9810395676996579,.9758519998648003,.9700814118779729,.963845033914152,.9572638403798733,.950449943614057,.9435001285297078,.9364940291953286,.92949502581088,.9225523699498471,.9157036307599686,.9089770051193488,.9023933093397353,.8959676137074208,.8897105460739082,.8836293138974171,.8777284974291907,.8720106617114369,.8664768273746566,.8611268324423067,.8559596104739459,.8509734046824684,.8461659331106006,.8415345163935054,.837076176888675,.8327877158532223,.8286657737492779,.8247068775442192,.8209074779524674,.8172639788686501,.8137727607137325,.8104301990150453,.8072326792367164,.8041766086453123,.8012584258187321,.7984746082712869,.7958216785642662,.7932962091916792,.7908948264694352,.788614213608732,.7864511131175677,.7844023286455902,.7824647263650515,.7806352359630463,.7789108513063275,.777288630829023,.7757656976848463,.774339239698418,.7730065091447113,.7717648223811109,.7706115593528902,.7695441629899096,.7685601385098536,.7676570526412794,.7668325327780313,.7660842660751318,.7654099984950468,.7648075338121769,.764274732582529,.7638095110847574,.7634098402380799,.7630737445019942,.7627993007621866,.7625846372065757,.762427932195015,.7623274131258134,.7622813553019029,.7622880807991816,.7623459573392972,.7624533971688852,.7626088559470634,.7628108316427725,.7630578634433801,.7633485306757938,.7636814517411724,.7640552830641981,.7644687180577329,.7649204861035754,.7654093515499295,.7659341127260957,.7664936009748163,.7670866797026229,.7677122434484647,.7683692169708326,.7690565543535384,.7697732381302514,.7705182784278545,.7712907121286375,.7720896020513095,.7729140361507788,.7737631267366267,.7746360097101651,.7755318438199621],Infected:[0,.000968716504633249,.0014029746099488221,.00199735524734949,.0027827157720885193,.0037757838615852346,.00496733858618466,.006314672415615908,.00774445323609319,.009167255581168494,.010497746258528277,.011671320560857491,.012651427442148413,.0134278443243508,.014009810890577092,.0144180817870908,.01467832620146344,.014816654032608486,.014857080517017488,.014820395436510505,.014723904870156295,.014581642619045591,.014404789177860373,.014202146261785783,.013980588583094493,.013745458997035305,.01350089762374176,.013250107736095878,.012995566349909903,.012739188861337876,.012482456676662684,.012226515635091284,.011972251685304832,.01172034900115204,.011471334614866937,.011225612733217986,.010983491171886128,.010745201771081627,.0105109162126941,.010280758319675714,.010054813659426997,.009833137076142258,.009615758627856416,.009402688290780295,.009193919707846124,.008989433193343766,.00878919815620717,.008593175066976013,.008401317064870977,.008213571279602058,.008029879925840101,.007850181215469475,.007674410122906556,.007502499031173714,.007334378280557732,.007169976637130795,.007009221694886786,.006852040222474323,.006698358463369422,.0065481023966245415,.006401197964004511,.0062575712682652156,.006117148746491547,.005979857321749522,.005845624535769008,.005714378664945768,.005586048821608004,.005460565042200778,.005337858363823316,.005217860890352815,.0051005058492376645,.004985727639910057,.004873461874654792,.004763645412681733,.004656216388066696,.004551114232157012,.004448279690980185,.004347654838141958,.004249183083649998,.004152809179068824,.004058479219364788,.00396614064177459,.003875742222000461,.00378723406800732,.0037005676116756026,.00361569559854012,.0035325720758260432,.003451152378974799,.0033713931168365447,.0032932521556887544,.003216688602227684,.0031416627856664936,.003068136239058988,.0029960716799598912,.002925432990519901,.0028561851971045348,.0027882944495166663,.002721727999894512,.0026564541813480663,.00259244238639106,.0025296630452173756],Recovered:[0,328845e-9,.0008083460272796702,.0014996055687320584,.00248036853640921,.003843006972386841,.005687339291302581,.008107629787145024,.011175957339503105,.014927170036122083,.019351224648322726,.024395657253862113,.029976319095868377,.03599165898145855,.04233600877201385,.04890932004082068,.055622847367769235,.062401488326804457,.06918387188771699,.07592118271793906,.08257543337189253,.0891176244217951,.09552602762190963,.10178469433341404,.10788221472437369,.11381071399816614,.11956505515499509,.12514221340414944,.1305407890701578,.135760630109095,.14080254028513073,.1456680537446132,.15035926079686845,.1548786730760248,.1592291189555024,.1634136622066339,.1674355385374344,.1712981059125052,.175004805522711,.17855913101104437,.1819646041225628,.18522475537334768,.18834310865833032,.19132316896525273,.1941684125506989,.19688227907829958,.19946816532959177,.2019294201827528,.20426934061965482,.2064911685720378,.20859808845659916,.21059322527910476,.2124796432112595,.21426034456258178,.21593826908407,.21751629355193414,.2189972315887698,.22038383368681666,.2216787874037528,.2228847177061674,.22400418743964934,.22503969790752565,.22599368954282797,.22686854266016332,.22766657827591574,.22839005898667117,.22904118989699315,.22962211958873446,.23013494112496544,.230581693082385,.23096436060674957,.23128487648645196,.23154512223989815,.23174692921279208,.23189207968184547,.23198230796179733,.23201930151295225,.2320047020467432,.2319401066270903,.23182706876556614,.23166709950859907,.23146166851514177,.23121220512341423,.23092009940549316,.23058670320867114,.2302133311826436,.22980126179170615,.22935173831125852,.22886596980801296,.22834513210339974,.22779036871974664,.22720279180888597,.2265834830629127,.22593349460688045,.22525384987327735,.22454554445817623,.22380954695899727,.2230467997938632,.22225822000256196,.22144470002916322,.22060710848636375],Deaths:[0,1155e-9,2850253883108186e-21,5305459450518624e-21,880083113338023e-20,1367058373453514e-20,202782054923093e-19,28971048018132454e-21,400217247454603e-19,5357451790862338e-20,6961721517566824e-20,8798827112809273e-20,.00010841308210959333,.00013055308013335307,.00015405180770096697,.00017856897675947686,.0002038006198868858,.0002294876907394468,.0002554168352965116,.0002814167262012923,.0003073524182151856,.0003331192517379592,.00035863712632128896,.00038384550738254457,.0004086992633406697,.00043316529336108505,.0004572198466058969,.000480846417447445,.0005040341059856127,.0005267763470979552,.0005490699276052964,.0005709142267894562,.0005923106291508659,.0006132620696001494,.0006337726803521655,.0006538475159281826,.000673492338211314,.0006927134477621148,.0007115175508615076,.0007299116542337223,.0007479029812931547,.000765498905197152,.000782706895080401,.0007995344726791496,.0008159891771880153,.0008320785366767459,.0008478100447650975,.0008631911415384601,.0008782291979056682,.0008929315027691924,.0009073052525084961,.0009213575423787163,.0009350953595057878,.0009485255772208744,.0009616549505254284,.0009744901125164045,.0009870375716313834,.0009993037095974353,.0010112947799867653,.0010230169072976616,.0010344760864917546,.0010456781829287626,.0010566289326482267,.0010673339429545868,.0010777986932676486,.0010880285362052443,.0010980286988688994,.0011078042843067134,.0011173602731305648,.0011267015252672556,.001135832781825373,.001144758667061539,.0011534836904313816,.0011620122487120278,.0011703486281842207,.0011784970068633375,.0011864614567696121,.0011942459462288277,.001201854342195576,.0012092904125919634,.001216557828655334,.0012236601672892225,.001230600913412328,.001237383462300829,.0012440111219198418,.0012504871152402741,.0012568145825377194,.001262996583670415,.0012690361003336208,.0012749360382880847,.00128069922956054,.0012863284346144386,.001291826344489355,.0012971955829077081,.0013024387083476379,.0013075582160810477,.0013125565401759806,.0013174360554626349,.00132219907946245,.0013268478742798095,.0013313846484559939]};var s={model:t,shock:e,data:o};export{o as data,s as default,t as model,e as shock};
