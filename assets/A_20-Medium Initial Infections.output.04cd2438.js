const l="A_20",n="Medium Initial Infections",u={Consumption:[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],Labour:[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],Output:[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],Susceptibles:[99.59999905603914,99.59994909753158,99.59923747169084,99.59570026057128,99.58578388527643,99.56417435059234,99.51745027607612,99.45613846428955,99.36307700839275,99.20658861354319,99.01835764619135,98.79561201885753,98.47830482890409,97.87989565209934,97.07148403064095,96.00272787198078,94.60012824309129,92.77703641786955,90.43687427595066,87.48094047572094,83.82246261004504,79.40740181019997,74.2396925062469,68.40427330417342,62.077398698532285,55.51410110232479,49.010274244653814,42.849434031558346,37.25345736050601,32.35475900661547,28.19554976240043,24.747204896572974,21.937325997138338,19.67432346946411,17.864765979337033,16.39990562271958,14.792571913943261,13.536063108050724,12.670952131890308,12.072252408640123,11.67489354915568,11.403587448781087,11.206717139980542,11.0635594489685,10.959291196075828,10.883254614795508,10.825290957987303,10.7651308156318,10.72717189968304,10.706882839563418,10.696393152425179,10.689419948143671,10.684945640802887,10.682074488944206,10.68006072328894,10.678594260880725,10.677825900769525,10.677428399864157,10.677215766181662,10.677094050056528,10.677024376901203,10.676984494289862,10.67696166448913,10.676946767804028,10.676937318033007,10.676933779324226,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],Infected:[.1000035574988651,.10019141705807273,.10279609937138348,.11445014811547831,.13996308001288765,.17847812838967617,.2313913617315529,.2776433954287161,.32892246652301255,.39944327427179116,.47564923136026077,.5624650071655363,.6844046267892484,.9131177053454078,1.221194679431853,1.627385541109166,2.1585616783305235,2.8455614780099014,3.721233796291708,4.816248494044829,6.151891428859395,7.72958166753714,9.518244899527904,11.442992254743087,13.380950702805228,15.170544781462883,16.636828455651813,17.627760977583897,18.04889624461456,17.882781575385305,17.18633552588347,16.069857136564686,14.668096896873745,13.113908285626552,11.520535763841186,9.944036455884127,7.84571293015955,5.892457998261345,4.347528727543722,3.167506666326751,2.3288791360441476,1.7283946143159878,1.2779103695855614,.9422389455788929,.6933415673767057,.5094414782270785,.36785523855814545,.2196419852701305,.1254691324553182,.0749159160271269,.04871650168928625,.031277698167804326,.020078692072704685,.012888393812825728,.007843407742870904,.0041686472332614155,.0022429122557585633,.001246571449028901,.0007135777032923902,.00040847288602177895,.00023382124842389026,.0001338455748103897,7661673824388382e-20,39274212831664e-18,15585794110928745e-21,6715050015396365e-21,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],Recovered:[37910074769572857e-23,20442767068845296e-21,.0003062379158224128,.0017268461656652794,.005709733003847358,.014390581086723715,.03316675690594763,.05781821774560903,.09526632931262506,.1583143251103025,.23428301461868856,.3243687023695293,.45307458514381044,.6969229218269714,1.0287292349822033,1.4716867436146321,2.060598544640441,2.839328875070446,3.8617861011915133,5.1919656412647015,6.902226552586151,9.068793178095506,11.763583623291995,15.042165428898294,18.929112858704773,23.404024936521147,28.392980790813816,33.76988420997261,39.36929873902354,45.00804828830126,50.50948183423875,55.72382807450745,60.54043275861157,64.89111612037411,68.74654757538433,72.16758511578075,76.29836661420093,79.84170732390197,82.47918053977547,84.4128498119148,85.75006263383528,86.69002957872407,87.38631512341571,87.9004125078614,88.27908890655578,88.55753078151736,88.77112908216922,88.9940298046988,89.13529975238073,89.21101700054722,89.25022380031076,89.27630852457115,89.293054710581,89.30380444950472,89.31134587144062,89.3168385444964,89.31971676936699,89.32120586436822,89.32200244420044,89.32245843106863,89.32271945100982,89.32286886596852,89.3229543950723,89.32301020381502,89.32304560635006,89.32305886374459,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],Deaths:[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"Nominal Interest Rate":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],Inflation:[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],Investment:[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]};var t={model:l,shock:n,data:u};export{u as data,t as default,l as model,n as shock};