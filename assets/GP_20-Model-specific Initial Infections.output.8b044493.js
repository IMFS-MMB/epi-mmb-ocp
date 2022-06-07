const t="GP_20",e="Model-specific Initial Infections",o={Consumption:[0,-.0015266963398544507,-.0017456312765995745,-.002045187035440519,-.0024275597538495723,-.002900443706079294,-.003476045478083684,-.004170613008654383,-.005004276001168958,-.006001055709225053,-.0071889323649069565,-.008599866852838344,-.010269665247676417,-.012237554347572946,-.014545307060823047,-.017235723811336714,-.020350249116271184,-.02392549625319113,-.02798849053615808,-.032550554456849304,-.037599981365546806,-.04309400636871776,-.04895108076526218,-.055045022080811495,-.06120308042066027,-.06721006643925664,-.0728201229425517,-.07777631026462944,-.0818360712049872,-.08479846379297777,-.08652773694384824,-.08696816556024277,-.08614715918782818,-.08416673663448396,-.08118626186895213,-.07740084855320115,-.07301979091500728,-.06824820808848248,-.06327352854508321,-.05825708477452302,-.053330207785281684,-.04859380442296911,-.04412033354144535,-.039957219340117305,-.03613093959892788,-.03265123662788369,-.02951508661186429,-.026710215664061433,-.02421806585170795,-.022016194659022766,-.02008014233438146,-.018384829796220074,-.0169055615630295,-.015618709036299458,-.014502143789432171,-.013535481524250678,-.012700187235881939,-.011979582231366304,-.01135878472061166,-.010824608066874953,-.010365434512677069,-.009971077201522426,-.009632639438816985,-.009342377195184038,-.009093568673577941,-.008880393177546337,-.008697820394779471,-.00854151043524973,-.008407724447091813,-.008293245305890548,-.008195307680655146,-.008111536682091285,-.008039894265858737,-.007978632573489013,-.007926253430673663,-.007881473275607067,-.007843192851189887,-.0078104710588759885,-.007782502435306135,-.00775859777348045,-.007738167466687092,-.007720707205203314,-.0077057857025707435,-.007693034170118018,-.007682137295572986,-.007672825514373707,-.007664868391022831,-.0076580689529369,-.007652258841095335,-.007647294160738148,-.007643051931791726,-.007639427052869017,-.0076363297049302425,-.007633683131214961,-.007631421739122123,-.007629489477506995,-.007627838449534121,-.007626427726979634,-.007625222336783429,-.007624192394871408,-.007623312365878138],Labour:[0,-.0017857720823747402,-.0020334586716858226,-.0023767346364133653,-.002817289061120743,-.00336349676767245,-.00402915296766242,-.0048328499128691945,-.005797742010425683,-.006951523678451977,-.008326483291629785,-.00995950863718972,-.01189191146793738,-.014168915807633615,-.016838621191899997,-.01995021444236174,-.02355117260275188,-.027683193023068976,-.032376631247658896,-.03764335991453103,-.04346822378235789,-.04979968971835051,-.05654087229059826,-.06354277615346293,-.07060214215784937,-.07746640255095666,-.08384758659879955,-.08944536081829867,-.09397692178253685,-.09720891049043233,-.09898498393711133,-.09924308705839617,-.09801893420098257,-.09543582385766547,-.09168420032517627,-.08699614997497526,-.0816199597981811,-.0757984884605775,-.06975326327917919,-.06367461846482673,-.057717151207715076,-.0519992917090383,-.04660570370947213,-.04159137658863658,-.03698650637596166,-.03280151221680621,-.029031757789493996,-.025661728277187663,-.022668549788456772,-.02002483308049975,-.017700883673117222,-.015666353665387642,-.013891424309681395,-.012347609213339945,-.011008261138490944,-.009848854577557489,-.008847104183686377,-.007982967331930775,-.007238568453773454,-.006598073706320572,-.006047537080780514,-.005574733119137224,-.005168986804324375,-.0048210077003083655,-.004522732831389253,-.004267180913352073,-.004048319219802816,-.0038609434513160548,-.003700570366240315,-.00356334254695987,-.0034459444503999992,-.0033455287786904003,-.0032596521695625836,-.003186219220322362,-.003123433905357097,-.003069757511895777,-.003023872292920672,-.0029846501135095843,-.00295112544334915,-.002922472121137344,-.002897983384600871,-.0028770547220900665,-.002859169157965067,-.0028438846342773005,-.0028308231958805675,-.002819661725427463,-.0028101240092121894,-.002801973944929516,-.0027950097286354595,-.002789058880935521,-.0027839739921094444,-.0027796290828914234,-.0027759164922824577,-.0027727442164129355,-.0027700336333277347,-.002767717557908088,-.0027657385791586726,-.0027640476389629584,-.0027626028173128934,-.00276136829406509,-.002760313461610287],Output:[0,-.0015266963398544507,-.0017456312765995745,-.002045187035440519,-.0024275597538495723,-.002900443706079294,-.003476045478083684,-.004170613008654383,-.005004276001168958,-.006001055709225053,-.0071889323649069565,-.008599866852838344,-.010269665247676417,-.012237554347572946,-.014545307060823047,-.017235723811336714,-.020350249116271184,-.02392549625319113,-.02798849053615808,-.032550554456849304,-.037599981365546806,-.04309400636871776,-.04895108076526218,-.055045022080811495,-.06120308042066027,-.06721006643925664,-.0728201229425517,-.07777631026462944,-.0818360712049872,-.08479846379297777,-.08652773694384824,-.08696816556024277,-.08614715918782818,-.08416673663448396,-.08118626186895213,-.07740084855320115,-.07301979091500728,-.06824820808848248,-.06327352854508321,-.05825708477452302,-.053330207785281684,-.04859380442296911,-.04412033354144535,-.039957219340117305,-.03613093959892788,-.03265123662788369,-.02951508661186429,-.026710215664061433,-.02421806585170795,-.022016194659022766,-.02008014233438146,-.018384829796220074,-.0169055615630295,-.015618709036299458,-.014502143789432171,-.013535481524250678,-.012700187235881939,-.011979582231366304,-.01135878472061166,-.010824608066874953,-.010365434512677069,-.009971077201522426,-.009632639438816985,-.009342377195184038,-.009093568673577941,-.008880393177546337,-.008697820394779471,-.00854151043524973,-.008407724447091813,-.008293245305890548,-.008195307680655146,-.008111536682091285,-.008039894265858737,-.007978632573489013,-.007926253430673663,-.007881473275607067,-.007843192851189887,-.0078104710588759885,-.007782502435306135,-.00775859777348045,-.007738167466687092,-.007720707205203314,-.0077057857025707435,-.007693034170118018,-.007682137295572986,-.007672825514373707,-.007664868391022831,-.0076580689529369,-.007652258841095335,-.007647294160738148,-.007643051931791726,-.007639427052869017,-.0076363297049302425,-.007633683131214961,-.007631421739122123,-.007629489477506995,-.007627838449534121,-.007626427726979634,-.007625222336783429,-.007624192394871408,-.007623312365878138],Susceptibles:[1,.9984114374439008,.9977022126799309,.9968479746843733,.99581966300105,.9945826792481619,.9930959541456634,.9913109157269642,.9891703763365587,.9866073738553709,.9835440281939898,.9798905094163656,.9755442605792958,.9703896771302569,.9642985138231941,.9571313636919251,.9487406189970172,.938975358995706,.9276885800937787,.9147470461084705,.9000437424603774,.8835124346557164,.865143167965866,.8449967899271464,.8232159226566103,.8000295419374075,.7757487297041259,.7507524136150836,.7254638514870654,.7003207598818542,.6757436033610165,.6521070296695061,.6297185601467585,.6088067728555858,.5895190548773537,.5719272517726242,.5560386050637339,.5418092586733728,.5291580838329726,.5179792931973914,.5081530267707418,.4995536502155619,.4920558697424264,.4855389600827845,.47988947092908973,.4750027707633303,.47078374249832716,.4671468873564336,.46401603583954565,.46132381411676876,.4590109728717308,.45702565347546353,.4553226421134223,.4538626447190088,.4526116028245803,.45154006150686943,.4506225944851656,.44983728735690337,.4491652773432495,.44859034633381134,.4480985631477387,.44767797053916886,.44731831240437564,.4470107967804139,.4467478904797305,.4465231415266368,.44633102591224144,.44616681553981624,.44602646457698697,.445906511755262,.4458039964561733,.4457163866945301,.4456415173526983,.4455775372363151,.4455228637130697,.44547614386410905,.44543622122444154,.4454021073165823,.4453729572927132,.44534804909679576,.4453267656411885,.44530857956402353,.44529304019537114,.44527976241336775,.44526841711716814,.44525872308280495,.4452504400017053,.4452433625304776,.4452373152053232,.4452321480956235,.44522773308940267,.4452239607189052,.44522073744782603,.4452179833531098,.4452156301439672,.44521361946908533,.4452119014701249,.4452104335456881,.4452091792951431,.4452081076161421,.445207191933475],Infected:[0,.0011996736672104102,.0014423586717095796,.00173567940604674,.002089004653685226,.0025135977079179333,.0030228125906704663,.0036323127796644627,.0043602860890894195,.005227621757853548,.00625800340229168,.007477854190135778,.008916048619930565,.010603279827885349,.01257094542410381,.014849394557110191,.017465374702030762,.020438544541441048,.023777000566141276,.027471923220172514,.03149170117153179,.03577623629837488,.04023252220552405,.04473291938653974,.049117651340088345,.053202723204812216,.056793587525111364,.05970350846549918,.06177403952360114,.06289389353630079,.06301231368191045,.062144098719344586,.060365418740124764,.057801765410137866,.05461101906220534,.050965203642743796,.047034048935011404,.04297237629509034,.03891207146517772,.03495838986430082,.031189726899277907,.027659765215849785,.02440097032726591,.0214286137485265,.0187447531111277,.016341827067004117,.014205700361505633,.01231811647392484,.010658589362064196,.009205804110705063,.007938610423802174,.006836692433035206,.005880990071118301,.005053935771208139,.0043395581990557245,.0037234935504671263,.0031929353025447194,.0027365453687063076,.00234434329452992,.0020075852449842157,.0017186408357852145,.0014708731193275111,.0012585250410488793,.001076614260158344,.0009208372374468393,.0007874828204223275,.0006733551157645597,.0005757051653924417,.0004921707861246627,.0004207238576899916,.0003596243232326285,.00030738018139639335,.00026271278601850903,.00022452681895009403,.00019188435704822944,.0001639825116012441,.00014013417453488962,.00011975145896384166,.00010233147101372861,8744409487031498e-20,7472151358354838e-20,638492243548207e-19,5455833909152706e-20,4661898922596267e-20,3983467850435645e-20,34037449004738825e-21,2908374438033063e-20,24850870571293973e-21,21233968281312557e-21,18143423649342067e-21,1550265400652567e-20,1324621461262115e-20,11318180009055473e-21,9670760277310128e-21,8263118200908448e-21,7060358226881551e-21,6032662321261063e-21,5154551410853728e-21,44042541850192645e-22,3763167669533061e-21,321539624290089e-20],Recovered:[0,.0003787816666666667,.0008361455189439511,.0013878677657075636,.0020529295731510685,.0028540807394568726,.003818501039993175,.004978561665658598,.006372685887252646,.008046301528944045,.010052867002290735,.012454936209977407,.015325204014394064,.018747441588052884,.022817188610601648,.027642016863875345,.033341119527227556,.04004391863388116,.047887332095386446,.05701132199966198,.06755238713957497,.0796348012674354,.09335966938064034,.10879229497919404,.12594889830832745,.14478431058299182,.1651827287120682,.18695373596956008,.2098353861503965,.2335051506933667,.25759809568614533,.28173016160470427,.30552333038456975,.3286291413480382,.35074754319514634,.3716392219079954,.39113091873214967,.4091144486022122,.42554089858530564,.4404117728227904,.45376874700225,.4656833583461042,.4762475373519431,.48556549231491797,.49374714332035147,.5009030847135405,.5071409251391179,.5125627923348506,.517263774514998,.5213310829847804,.5248437478549135,.5278726911727532,.5304810539087577,.5327246821090794,.534652701935315,.5363081330714392,.5377285054421376,.538946455954196,.539990290703466,.5408845044101734,.5416502533024794,.5423057807173801,.5428667966943936,.5433468140863273,.5437574444209253,.5441086570812785,.5444090054526736,.5446658235972593,.5448853968286413,.545073109310789,.5452335715300876,.5453707302066498,.5454879629344888,.5455881595781333,.5456737922104182,.5457469751547253,.5458095164954958,.5458629622428822,.5459086341798524,.5459476622813947,.5459810124740309,.5460095103979192,.5460338617417325,.5460546696406493,.5460724495587234,.5460876420172563,.5461006234793885,.5461117156568661,.5461211934668816,.546129291834193,.54613621150566,.546142124020263,.5461471759570309,.5461514925656202,.5461551808691395,.5461583323158455,.5461610250452352,.5461633258245591,.5461652917036545,.546166971429045,.5461684066523083],Deaths:[0,10107222222222223e-21,19283129415652963e-21,2847814387243269e-20,3840277211377108e-20,4964230446333232e-20,6273222367289337e-20,7820982771265201e-20,9665168709922957e-20,.0001187028578314934,.00014510140142785002,.00017670018352127658,.00021448678637964248,.000259601453804935,.0003133521421004747,.00037722488708936985,.0004528867737244557,.0005421778289717012,.000647087244693493,.0007697086716951207,.000912169228515891,.0010765277784733714,.0012646404479697755,.0014779957071198763,.0017175276949741305,.0019834242747885852,.00227495405869473,.0025903419498572865,.0029267228389372154,.003280195888478571,.003645987270928044,.004018710006445349,.004392690728547194,.004762320386238362,.005122382865294961,.005468322676636829,.005796427269105218,.006103916429324899,.006388946116544323,.0066505441155175525,.006888499327730457,.007103226222484368,.007295622578364847,.007466933853771178,.007618632639431298,.007752317456125299,.00786963200104945,.007972203834791145,.008061600283392343,.00813929878774602,.008206668849553664,.008264962918748335,.008315313906701989,.008358737400703926,.008396137041049289,.008428311871224583,.008455964770152315,.008479711320194585,.008500088658754719,.008517564011031206,.008532542713996888,.008545375624123788,.008556365860182094,.00856577487310081,.008573827861897585,.008580718571662716,.008586613519320706,.008591655697532286,.00859596780824727,.0085996550762593,.008602807690506852,.008605502917423867,.008607806926794593,.00860977636660158,.008611459719463952,.008612898469564508,.008614128105527858,.008615178981571808,.008616077056420899,.008616844526939484,.00861750037119723,.008618060813702423,.008618539723804929,.00861894895675708,.008619298645604224,.008619597450934163,.00861985277452605,.008620070942085261,.008620257359514145,.008620416646534387,.00862055275093103,.008620669046219484,.008620768415134275,.008620853320992982,.008620925868692701,.008620987856842633,.008621040822318985,.008621086078342279,.008621124747017822,.008621157787143697,.008621186017974033]};var c={model:t,shock:e,data:o};export{o as data,c as default,t as model,e as shock};
