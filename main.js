var musics = [
    //musics[x]-->[0]=現在のトレンド, [1]=過去のトレンド, [2]=懐かしい曲
    //musics[x][y]-->[0]=すべての順位, [1]=トレンドの順位, [2]=曲名, [3]=作者, [4]=ボーカル, [5]=ジャンル, [6]=URL
    //https://www.youtube.com/watch?v=

    [//現在のトレンド
        [0,0,'とろける哲学','ねこむら','長瀬有花',[],'enyrhR40VWI'],
        [1,1,'ロストアンブレラ','稲葉曇','歌愛ユキ',['ボカロ'],'DeKLpgzh-qQ'],
        [2,2,'ハルノ寂寞','稲葉曇','弦巻マキ',['ボカロ'],'mFih47l1pVI'],
        [3,3,'ラグトレイン','稲葉曇','歌愛ユキ',['ボカロ'],'UnIhRpIT7nc'],
        [4,4,'モノクローム','hiroki.','可不',['ボカロ'],'S6yM1zLKXbg'],
        [5,5,'きゅうくらりん','いよわ','可不',['ボカロ'],'2b1IexhKPz4'],
        [6,6,'W/X/Y','Tani Yuuki','Tani Yuuki',[],'mp2-w15SXms'],
        [7,7,'Telescope','noto','みきなつみ',[],'2-J5QZJ43OM'],
        [8,8,'再会','はるまきごはん','はるまきごはん',[],'U0bTlwXLUmM'],
        [9,9,'スチールワンダー','はるまきごはん','初音ミク',['ボカロ'],'BEZ_oACkyKE'],
        [10,10,'彗星になれたなら','はるまきごはん','はるまきごはん',[],'8jVXc6N4muc'],
        [11,11,'だめにんげんだ!','薄塩指数','重音テト',['ボカロ'],'c-SOJsITLLs'],
        [12,12,'UNDER THE TREE','SiM','SiM',[],'yKPka2qGRh8'],
        [13,13,'喜劇','星野源','星野源',[],'URR_Nv-6MZs'],
        [14,14,'Subtitle','Official髭男dism','藤原聡',[],'hN5MBlGv2Ac'],
        [15,15,'Cry Baby ','Official髭男dism','藤原聡',[],'O1bhZgkC4Gw'],
        [16,16,'いせき','Toby Fox','_NONE_',['BGM'],'i0H9zYeplWE'],
        [17,17,'可愛くてごめん','HoneyWorks','早見沙織',[],'K4xLi8IF1FM'],
        [18,18,'心臓を捧げよ！','Linked Horizon','Linked Horizon',[],'8QPyFlJNmus'],
        [19,19,'全部君のせいだ','イチョウ','可不',['ボカロ'],'t_CPoj9DWww'],
        [20,20,'和音','莉犬','莉犬',[],'7UDQAVssLT0'],
        [21,21,'東京テディベア','Neru','鏡音リン',['ボカロ'],'eSI7RsjZy1E'],
        [22,22,'HACK','Shuta Sueyoshi','Shuta Sueyoshi',[],'aVxRk1CSAxo']
    ],

    [//過去のトレンド
        [23,0,'余命2:30','ピノキオピー','初音ミク',['ボカロ'],'8yUDr7BQYEo'],
        [24,1,'転生林檎','ピノキオピー','初音ミク',['ボカロ'],'LYWP8HtgeLQ'],
        [25,2,'踊','Giga',['鏡音リン','鏡音レン'],['ボカロ'],'QuLwvlw6_uU'],
        [26,3,'神っぽいな','ピノキオピー','初音ミク',['ボカロ'],'EHBFKhLUVig'],
        [27,4,'怪物','YOASOBI','Ayase',[],'dy90tA3TT1c'],
        [28,5,'回る空うさぎ','Orangestar','DAZBEE',[],'FNuGB562C2Q'],
        [29,6,'欲求少女','イチョウ','可不',['ボカロ'],'7gwvBrlUiww'],
        [30,7,'アスノヨゾラ哨戒班','Orangestar','IA',['ボカロ'],'XogSflwXgpw'],
        [31,8,'マーシャル・マキシマイザー','柊マグネタイト','可不',['ボカロ'],'jMKPYg0uhCI'],
        [32,9,'阿修羅ちゃん','Ado','Ado',[],'cyq5-StPISU'],
        [33,10,'カノン','柊マグネタイト','可不',['ボカロ'],'G07TPX7i56g'],
        [34,11,'ただ声一つ','ロクデナシ','にんじん',[],'5GUaMOpfmr8'],
        [35,12,'snooze','wotaku','SHIKI',[],'_gWn38pnmqI'],
        [36,13,'シンデレラ','DECO*27','初音ミク',['ボカロ'],'adGhT_-JbZI'],
        [37,14,'Dessert','6時のおやつ','6時のおやつ',[],'2PkT5C9L50I'],
        [38,15,'まだ君は知らないMy PRETTIEST GIRL','Nissy','Nissy',[],'7GN0j2VnPIQ'],
        [39,16,'インドア系ならトラックメイカー','Yunomi & nicamoq','不詳',[],'su0FCBRwVpE'],
        [40,17,'新時代','Ado','Ado',[],'1FliVTcX8bQ'],
        [41,18,'HenceForth','Orangestar','IA',['ボカロ'],'L13gCEZJVRU'],
        [42,19,'ダダダダ天使','ナユタン星人','かあいいちゃん',[],'I-gcW3HyMB8'],
        [43,20,'Despacito','Luis Fonsi','Luis Fonsi',[],'kJQP7kiw5Fk'],
        [44,21,'Enemy','Imagine Dragons','Imagine Dragons',['洋楽'],'D9G1VOjN_84'],
        [45,22,'Irresistible','Fall Out Boy','Fall Out Boy',['洋楽'],'i8BGAYXNW74']
    ],

    [//懐かしい曲
        [46,0,'RPG','SEKAI NO OWARI','SEKAI NO OWARI',[],'Mi9uNu35Gmk'],
        [47,1,'RAIN','SEKAI NO OWARI','SEKAI NO OWARI',[],'MslES96hLeo'],
        [48,2,"Don't let me go",'Nissy','Nissy',[],'QhDuG7qOVb8'],
        [49,3,'ハプニング','Nissy','Nissy',[],'5QqZDJJr8Ho'],
        [50,4,'恋','星野源','星野源',[],'ucR8y5BaLLE'],
        [51,5,'さよならの前に','AAA','AAA',[],'GVFR9zmQjec'],
        [52,6,'未来のミュージアム','Perfume','Perfume',[],'s8_vqfjYpBg']
    ]
]



function view(x){
    document.getElementById('iframe').src = 'https://www.youtube.com/embed/'+x
}


//すべて(曲名:URL)//
//
setTimeout(s01, 100)
function s01(){
    for(i=0;i<23;i++){
        var element = document.createElement('tr')
        
        element.innerHTML = `
        <td class="num">${musics[0][i][0]}</td>
        <td class="num">${musics[0][i][1]}</td>
        <td class="music_name">${musics[0][i][2]}</td>
        <td class="vocal_name">${musics[0][i][3]}</td>
        <td class="link" onclick="view('${musics[0][i][6]}')">VIEW</td>`

        document.getElementById('table').appendChild(element)

        //console.log(musics[0][i][2]+':'+musics[0][i][6])
    }
    
    for(i=0;i<23;i++){
        if(i==0){
            var element = document.createElement('tr')
            element.innerHTML = `<td>-</td><td>-</td><td>-</td><td>-</td><td>-</td>`
            document.getElementById('table').appendChild(element)
        }

        var element = document.createElement('tr')
        element.innerHTML = `
        <td class="num">${musics[1][i][0]}</td>
        <td class="num">${musics[1][i][1]}</td>
        <td class="music_name">${musics[1][i][2]}</td>
        <td class="vocal_name">${musics[1][i][3]}</td>
        <td class="link" onclick="view('${musics[1][i][6]}')">VIEW</td>`

        document.getElementById('table').appendChild(element)

        //console.log(musics[1][i][2]+':'+musics[1][i][6])
    }
    
    for(i=0;i<7;i++){
        if(i==0){
            var element = document.createElement('tr')
            element.innerHTML = `<td>-</td><td>-</td><td>-</td><td>-</td><td>-</td>`
            document.getElementById('table').appendChild(element)
        }

        var element = document.createElement('tr')
        element.innerHTML = `
        <td class="num">${musics[2][i][0]}</td>
        <td class="num">${musics[2][i][1]}</td>
        <td class="music_name">${musics[2][i][2]}</td>
        <td class="vocal_name">${musics[2][i][3]}</td>
        <td class="link" onclick="view('${musics[2][i][6]}')">VIEW</td>`

        document.getElementById('table').appendChild(element)

        //console.log(musics[2][i][2]+':'+musics[2][i][6])
    }
}

//すべて(ボカロ(順位:曲名:URL))//
//s02()
function s02(){
    for(i=0;i<23;i++){
        if(musics[0][i][4][0]=='ボカロ'){
            console.log(i+':'+musics[0][i][2]+':'+musics[0][i][4]+':'+musics[0][i][6])
        }
    }
    
    for(i=0;i<23;i++){
        if(musics[1][i][4][0]=='ボカロ'){
            console.log(i+':'+musics[1][i][2]+':'+musics[1][i][4]+':'+musics[1][i][6])
        }
    }
    
    for(i=0;i<7;i++){
        if(musics[2][i][4][0]=='ボカロ'){
            console.log(i+':'+musics[2][i][2]+':'+musics[2][i][4]+':'+musics[2][i][6])
        }
    }
}

//現在のトレンド(すべて(順位:曲名:URL))//
//s03()
function s03(){
    for(i=0;i<23;i++){
        console.log(i+':'+musics[0][i][2]+':'+musics[0][i][4]+':'+musics[0][i][6])
    }
}

/*

0
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52

*/