const t="GP_20",o="High Initial Infections",e={Consumption:[0,-.0037911435552991793,-.004327487753938067,-.005058534309664382,-.005986741998062273,-.00712677396532921,-.00850242784883089,-.010144597949099997,-.012089689056752001,-.014378041399979464,-.01705199769310402,-.02015327941900896,-.023719370310505493,-.02777866306758201,-.03234424843634036,-.037406454648620364,-.04292461296420065,-.04881903438342621,-.05496477133083833,-.061189243592998335,-.06727595836594956,-.07297603047590073,-.07802780453218794,-.0821827282494814,-.08523334249603189,-.08703781086760795,-.08753566297504914,-.08675152650492332,-.08478680250784625,-.08180218781519555,-.07799557973323469,-.07357989509248519,-.06876414128563849,-.06373945580119379,-.05867041291114936,-.053690973544135885,-.04890402816056527,-.044383412030247316,-.04017739954686631,-.03631289138578581,-.032799726004544026,-.029634741171980797,-.026805368641980253,-.02429266342170491,-.02207375148025498,-.020123731986334874,-.018417098966512682,-.01692875918033719,-.01563472370754569,-.014512544761411518,-.013541559898573322,-.012702995332989712,-.011979969865034431,-.011357431761236847,-.010822053093082797,-.010362099624140236,-.009967289231335125,-.009628647893250799,-.009338369286458354,-.009089681815445633,-.008876725297015246,-.00869443838513137,-.008538457041838667,-.008405023842146813,-.008290907574207085,-.008193332406041257,-.008109915795482583,-.008038614290395733,-.007977676379533623,-.007925601594561422,-.007881105119604397,-.00784308722833502,-.007810606934820851,-.0077828593096487585,-.0077591559750583875,-.007738908350716497,-.00772161327470306,-.007706840672047146,-.0076942229858615405,-.0076834461239398,-.0076742417070194855,-.007666380434121138,-.007659666405831492,-.007653932268586778,-.007649035062195196,-.007644852669476656,-.007641280781230257,-.007638230302121744,-.007635625133703771,-.007633400279953684,-.007631500228552423,-.007629877567881291,-.007628491805488123,-.007627308358734465,-.007626297692570231,-.0076254345830222385,-.007624697488091977,-.007624068010409084,-.007623530438277299,-.0076230713536765025,-.0076226792974673765],Labour:[0,-.004434489128319704,-.005040846955279603,-.005878193538954259,-.006947213509946812,-.00826351063133935,-.009853738806837866,-.011753041132058474,-.014003079787977405,-.01665011805619032,-.01974270879817357,-.02332859209099494,-.027450444804525305,-.03214019562167771,-.037411764982147495,-.043252358558057945,-.049612873849558994,-.056398575332354484,-.06346188128920693,-.07059969444107046,-.07755788080905081,-.08404488337585649,-.08975480868063102,-.09439780166096323,-.09773285059377204,-.0995964788243891,-.09992108202693095,-.09873913977080787,-.09617326343816117,-.09241550442758467,-.08770126055444837,-.08228311327899847,-.07640852302321008,-.07030340183341181,-.06416191239379528,-.05814175409941099,-.05236369319889959,-.04691401031263012,-.04184868895061131,-.03719841405925047,-.032973707824856945,-.029169760404175574,-.025770700049097473,-.02275318739433746,-.020089316236633875,-.017748864858265205,-.015700975848701067,-.013915356251153132,-.012363090477569724,-.01101715117100207,-.00985268198184006,-.008847113719670346,-.007980163181469428,-.007233753028395834,-.006591881770218482,-.006040465284452725,-.005567165233833668,-.0051612150522227064,-.004813250619064164,-.0045151501157164615,-.004259885655939343,-.004041387939836787,-.003854424258395917,-.003694489565224427,-.003557709948188286,-.0034407576114908,-.0033407763695242894,-.0032553166215088737,-.003182278794136575,-.003119864289317535,-.003066533042287246,-.0030209668725498487,-.0029820378901672063,-.002948781298661266,-.0029203720107290354,-.002896104562634986,-.0028753758767800226,-.002857670479359705,-.0028425478312962237,-.0028296314760442955,-.0028185997478820998,-.0028091778193319573,-.002801130896921739,-.0027942584010827135,-.0027883889890145384,-.002783376299280343,-.0027790953140972184,-.0027754392501194783,-.0027723169012585924,-.0027696503680680515,-.0027673731176285766,-.002765428325958803,-.0027637674618982253,-.0027623490773597465,-.0027611377739241634,-.0027601033201066273,-.002759219897357609,-.002758465456039725,-.002757821165356775,-.0027572709435353462,-.0027568010565627243],Output:[0,-.0037911435552991793,-.004327487753938067,-.005058534309664382,-.005986741998062273,-.00712677396532921,-.00850242784883089,-.010144597949099997,-.012089689056752001,-.014378041399979464,-.01705199769310402,-.02015327941900896,-.023719370310505493,-.02777866306758201,-.03234424843634036,-.037406454648620364,-.04292461296420065,-.04881903438342621,-.05496477133083833,-.061189243592998335,-.06727595836594956,-.07297603047590073,-.07802780453218794,-.0821827282494814,-.08523334249603189,-.08703781086760795,-.08753566297504914,-.08675152650492332,-.08478680250784625,-.08180218781519555,-.07799557973323469,-.07357989509248519,-.06876414128563849,-.06373945580119379,-.05867041291114936,-.053690973544135885,-.04890402816056527,-.044383412030247316,-.04017739954686631,-.03631289138578581,-.032799726004544026,-.029634741171980797,-.026805368641980253,-.02429266342170491,-.02207375148025498,-.020123731986334874,-.018417098966512682,-.01692875918033719,-.01563472370754569,-.014512544761411518,-.013541559898573322,-.012702995332989712,-.011979969865034431,-.011357431761236847,-.010822053093082797,-.010362099624140236,-.009967289231335125,-.009628647893250799,-.009338369286458354,-.009089681815445633,-.008876725297015246,-.00869443838513137,-.008538457041838667,-.008405023842146813,-.008290907574207085,-.008193332406041257,-.008109915795482583,-.008038614290395733,-.007977676379533623,-.007925601594561422,-.007881105119604397,-.00784308722833502,-.007810606934820851,-.0077828593096487585,-.0077591559750583875,-.007738908350716497,-.00772161327470306,-.007706840672047146,-.0076942229858615405,-.0076834461239398,-.0076742417070194855,-.007666380434121138,-.007659666405831492,-.007653932268586778,-.007649035062195196,-.007644852669476656,-.007641280781230257,-.007638230302121744,-.007635625133703771,-.007633400279953684,-.007631500228552423,-.007629877567881291,-.007628491805488123,-.007627308358734465,-.007626297692570231,-.0076254345830222385,-.007624697488091977,-.007624068010409084,-.007623530438277299,-.0076230713536765025,-.0076226792974673765],Susceptibles:[1,.9960343839247304,.9942734374119606,.99216014464654,.9896276756764228,.9865982050825237,.9829818325022955,.9786757461324475,.9735638297366014,.9675169843220675,.9603945119046291,.952046978317195,.9423210127959148,.9310664800858168,.9181463306713117,.9034491465746483,.8869039166700603,.8684959012931374,.8482816650313508,.8264006610773893,.8030804315840255,.7786328578630499,.7534401320535526,.7279311050592919,.7025508931829103,.6777283495594025,.6538465592061536,.6312206660301073,.6100854273927815,.5905926469982136,.5728168004261932,.5567661696642274,.5423966707720582,.5296260367487573,.5183467647649298,.5084369772205886,.49976892677960705,.4922152535623206,.4856533019970632,.47996787561238874,.4750528006236368,.47081162249118663,.46715769922542333,.46401389550342304,.4613120294292185,.4589921812175636,.45700194000949684,.4552956401833583,.4538336203521465,.4525815252480737,.4515096616130323,.4505924130135415,.4498077143862142,.4491365844955357,.44856271290592364,.44807209721066515,.44765272588779464,.4472943021007173,.44698800391199195,.4467262766504639,.44650265350889273,.44631160081371724,.44614838477600277,.44600895688741066,.4458898554580024,.44578812109895016,.4457012242307655,.44562700294635593,.44556360977912757,.4455094661212365,.4454632232080552,.4454237287342465,.4453899982967685,.4453611909728688,.4453365884386822,.4453155771182983,.4452976329258033,.44528230822533155,.4452692206879241,.4452580437701797,.44524849857930704,.4452403469231827,.4452333853731408,.44522744019217464,.44522236300259066,.44521802708543956,.4452143242196904,.4452111619824971,.4452084614433448,.44520615519464984,.44520418566974695,.4452025037063479,.4452010673196605,.44519984065458157,.44519879309083177,.4451978984787161,.4451971344864454,.44519648204273643,.4451959248607849,.44519544903173275,.44519504267748566],Infected:[0,.002993393853047439,.0035902427562988417,.004307330005380937,.005164726195627589,.006185692157893859,.007396517787829966,.008826180573521924,.010505693412998295,.012466991389144004,.014741189377470801,.017356038206999574,.020332433314446473,.023679908624482025,.02739120468502194,.031436253626399145,.03575627378738748,.04025907158032639,.04481700222754145,.04926917198190364,.05342916792674927,.05709873189843344,.060086395302984416,.06222849079052895,.06340873402614931,.0635723255283768,.06273154484281243,.06096183724665387,.058389694732503265,.05517537161998645,.05149412922867885,.04751926529060286,.04340904990309326,.0392983867418579,.03529495277051834,.03147892534854691,.027905171487315746,.02460683357064611,.021599460969541136,.018885096977171858,.016455967585912463,.014297602768285594,.01239134717971569,.010716293665159872,.009250712202913302,.007973061224546385,.006862667511956226,.0059001521945562805,.005067668394551656,.004349003567409963,.003729588037347499,.003196441288980875,.002738079415037875,.0023444006443128023,.0020065608722475915,.0017168473394097443,.0014685558080653803,.0012558745586728614,.001073777085692098,.0009179243694510505,.0007845769229023402,.000670516370282449,.000572976041775988,.0004895799141218673,.00041828915470491047,.00035735550914971133,.000305280790442795,.0002607817674579987,.000222759802897107,.0001902746485504854,.00016252186507319325,.0001388133913533887,.00011856084330509789,.00010126117258612694,8648436187810628e-20,7386287486499503e-20,6308261602350588e-20,53875188041748305e-21,4601126343287316e-20,3929491206449164e-20,33558748245374006e-21,28659780052095584e-21,2447586007377264e-20,20902651011252746e-21,17851031868535625e-21,15244881070755608e-21,13019181959029116e-21,11118403946040614e-21,9495119341512089e-21,8108821625906275e-21,6924915896448557e-21,5913856446943498e-21,5050410071607689e-21,4313026789389533e-21,36833023433045114e-22,3145519103174067e-21,2686253944858223e-21,2294043341906239e-21,19590973271095812e-22,1673055196545473e-21,142877686719304e-20],Recovered:[0,.0009469541666666669,.0020881493880558015,.003461457150139321,.005111886772406321,.007092581333874725,.00946587635260396,.01230435828703519,.01569182975064855,.019724047208110218,.02450904475296369,.03016679648664247,.036827906097818414,.04463095768754404,.05371813725216123,.06422876953009207,.07629054762679136,.09000850012468044,.10545216303174759,.1226419821172351,.1415365787160184,.16202300418703672,.18391226447583817,.20694201334869008,.23078731489839277,.2550789101406017,.27942686717862314,.30344633652819736,.3267817580008925,.3491263753801871,.37023509048346126,.389930110272799,.4081000893607962,.4246942799521937,.43971350916522256,.45319970301537543,.46522533003352873,.4758837033479345,.4852806705522157,.49352789493817056,.5007377063238366,.5070193654996997,.5124765226355914,.5172056344872734,.5212951187781331,.5248250524597811,.5278672541610976,.5304856243072971,.5327366461357085,.5346699759294602,.536329071061714,.5377518202764063,.53897115265515,.5400156106218783,.5409098787659679,.5416752647866931,.5423301319458353,.5428902844363777,.5433693083260095,.5437788714378596,.5441289858548539,.5444282368017549,.5446839815599351,.5449025218683193,.5450892530046586,.545248792455335,.5453850907899245,.5455015270721754,.5456009908700972,.545685952679062,.5457585243453518,.54582051087389,.545873454822398,.5459186743237108,.5459572956368609,.5459902810040655,.5460184524831487,.5460425123314493,.5460630604362865,.5460806092170488,.5460955963635746,.5461083957234665,.5461193266062159,.546128661733552,.5461366340324054,.5461434424385435,.5461492568546517,.5461542223858256,.5461584629576145,.5461620844065092,.5461651771197084,.5461678182898332,.5461700738407093,.546172000072168,.5461736450648389,.5461750498799374,.5461762495839497,.5461772741237634,.5461781490740609,.5461788962756184,.5461795343804293],Deaths:[0,2526805555555556e-20,4817044368486974e-20,7106819793978958e-20,9571135554315394e-20,.0001235214257077005,.00015577335727052444,.00019371500699539155,.00023864709975166874,.0002919770806782262,.0003552539649363124,.0004301869891628491,.0005186477918200684,.0006226536021569583,.0007443273915050003,.0008858302688604742,.001049261915760869,.001236527001855795,.001449169709360008,.00168818482347197,.001953821773206742,.002245406051479815,.002561208167624721,.0028983908014889735,.0032530578925475703,.003620414771618916,.003995028772410643,.004371160195041279,.004743119873822722,.005105606001612718,.005453979861666582,.005784454772370611,.00609418996405228,.00638129655719102,.006644773299329123,.006884394415488972,.007100571699548377,.007294209519098697,.007466566481179934,.00761913247226881,.007753525466613933,.007871409240828056,.007974430959269535,.008064176344143673,.008142139589735127,.008209705098108875,.008268138317449446,.008318583314788366,.00836206511759326,.008399495255056216,.008431679287906106,.008459325421071228,.008483053543597898,.008503404238273156,.008520847455860906,.008535790663231934,.00854858635830469,.008559538904232163,.00856891067630652,.008576927542225636,.008583783713351166,.008589646014245632,.0085946576222862,.008598941330148189,.008602602382634161,.008605730936565158,.008608404188867356,.008610688214010823,.008612639547878243,.008614306551151358,.008615730581519944,.008616947000510147,.008617986037528532,.008618873530834341,.008619631562578818,.00862027900277117,.00862083197502443,.008621304255177441,.008621707612356384,.00862205210070691,.008622346308872887,.00862259757329867,.008622812160569596,.008622995423262073,.008623151933135221,.008623285594946125,.008623399743698718,.008623497227731132,.008623580479699064,.008623651577214982,.008623712294648117,.008623764147371859,.008623808429558432,.008623846246460896,.00862387854198583,.008623906122243176,.008623929675659827,.008623949790158035,.008623966967826805,.008623981637451993,.008623994165217528]};var n={model:t,shock:o,data:e};export{e as data,n as default,t as model,o as shock};