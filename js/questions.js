/* 保一考古｜替代役民防役刷題
 * 題庫由 IMG_2639–IMG_2649、IMG_2680–IMG_2683 逐頁轉錄整理。
 * source: "official" = 原卷已標註答案；"reference" = 原卷未標答案，依現行法規整理。
 */
window.QUIZ_DATA = {
  meta: {
    title: "保一考古",
    subtitle: "替代役民防役・專業訓練考古題",
    version: "1.3.0",
    updated: "2026-11-10",
    notes: [
      "題目依照片逐字轉錄，標點與選項編號尽量保留原貌。",
      "「基礎民防法令」原卷未標答案，App 內以「參考答案」標示，建議搭配現行法規複習。",
      "「防空避難」已補齊是非題 1–5 與選擇題 1–5，與原有第 6–10 題合為 15 題。",
      "新增「警察勤務介紹與協勤要領」20 題（原卷頁 12–14，IMG_2681–2683）。"
    ]
  },
  papers: [
    {
      id: "fire113",
      name: "消防專業課程",
      short: "消防",
      subtitle: "113 年替代役民防役第 260 梯次",
      description: "防火逃生要領、簡易滅火實作、災害特性與搶救要領",
      source: "IMG_2639–2640",
      tone: "ember"
    },
    {
      id: "civildefense",
      name: "民防法規",
      short: "民防",
      subtitle: "內政部替代役民防役專業訓練",
      description: "民防法、民防團隊編組與任務範圍",
      source: "IMG_2641–2642",
      tone: "navy"
    },
    {
      id: "basiclaw",
      name: "基礎民防法令",
      short: "法令",
      subtitle: "保一替代役・曾春僑副教授",
      description: "民防法令、編組、訓練、徵用與演習",
      source: "IMG_2643–2644",
      tone: "moss",
      answerNote: "原卷未標答案，下列答案依現行法規整理，僅供複習參考。"
    },
    {
      id: "chengqing",
      name: "防情傳遞",
      short: "防情",
      subtitle: "防空情報與警報傳遞",
      description: "防情警報、警報臺、警報音符與空襲應變",
      source: "IMG_2647–2649",
      tone: "sky"
    },
    {
      id: "airdefense",
      name: "防空避難",
      short: "避難",
      subtitle: "防空避難處所與標示",
      description: "手機查詢、避難包、標示牌與緊急警報",
      source: "IMG_2646、IMG_2680",
      tone: "plum"
    },
    {
      id: "police",
      name: "警察勤務介紹與協勤要領",
      short: "勤務",
      subtitle: "保一替代役・曾春僑副教授",
      description: "警察勤務條例、勤務方式、巡邏網與勤休規定",
      source: "IMG_2681–2683（第 12–14 頁）",
      tone: "bronze"
    }
  ],
  questions: [
    /* ================= 消防專業課程 ================= */
    {
      id: "fire113-tf-01", paper: "fire113", section: "是非題", type: "tf", number: 1,
      stem: "發現火災時，原則上先大喊「失火了、失火了、失火了」，告知大家有火災。",
      answer: "O", source: "official",
      explanation: "發現火災先示警，讓周遭人員及早避難並通報 119。"
    },
    {
      id: "fire113-tf-02", paper: "fire113", section: "是非題", type: "tf", number: 2,
      stem: "偵煙式住宅用火災警報器裝在廚房最適合，因為廚房比較容易發生火災。",
      answer: "X", source: "official",
      explanation: "廚房油煙易造成偵煙式警報器誤報，應依設置規範選擇適當位置與型式。"
    },
    {
      id: "fire113-tf-03", paper: "fire113", section: "是非題", type: "tf", number: 3,
      stem: "室內消防栓之操作，應先按警鈴並打開消防栓箱，拿出瞄子後拉出水帶，最後轉制水閥，方可滅火。",
      answer: "O", source: "official",
      explanation: "口訣：按警鈴、開箱、拿瞄子、拉水帶、轉制水閥。"
    },
    {
      id: "fire113-tf-04", paper: "fire113", section: "是非題", type: "tf", number: 4,
      stem: "當自家門外發生火災，手觸摸門板有高溫，此時只要「關門」就地避難，再打開窗戶，等待救援。",
      answer: "O", source: "official",
      explanation: "門板高溫代表門外火勢猛烈，應關門阻隔煙熱、就地避難，靠窗對外求救並打 119，不要貿然開門。"
    },
    {
      id: "fire113-tf-05", paper: "fire113", section: "是非題", type: "tf", number: 5,
      stem: "滅火器最新使用口訣為「拉、瞄、壓、掃」。",
      answer: "O", source: "official",
      explanation: "拉插梢、瞄準火源根部、壓握把、左右掃射。"
    },
    {
      id: "fire113-tf-06", paper: "fire113", section: "是非題", type: "tf", number: 6,
      stem: "使用滅火器時，應站在下風位置接近火點，並將皮管瞄準火燄根部掃射。",
      answer: "X", source: "official",
      explanation: "應站在上風處，避免煙熱與滅火藥劑反撲。"
    },
    {
      id: "fire113-tf-07", paper: "fire113", section: "是非題", type: "tf", number: 7,
      stem: "火災發生時，為了要迅速逃離火場，可搭乘電梯較快。",
      answer: "X", source: "official",
      explanation: "火災時不可搭電梯，可能停電受困或成為煙囪效應通道。"
    },
    {
      id: "fire113-tf-08", paper: "fire113", section: "是非題", type: "tf", number: 8,
      stem: "當火災發生，而遭遇到濃煙時，應採用「低姿勢」逃到「相對安全區域」。",
      answer: "O", source: "official",
      explanation: "濃煙向上聚集，低姿勢可減少吸入濃煙，並往相對安全處移動。"
    },
    {
      id: "fire113-tf-09", paper: "fire113", section: "是非題", type: "tf", number: 9,
      stem: "滅火器最新使用方法是拉（安全插梢）、拉（噴嘴皮管）、壓（把柄）。",
      answer: "X", source: "official",
      explanation: "正確為「拉、瞄、壓、掃」，不是拉皮管。"
    },
    {
      id: "fire113-tf-10", paper: "fire113", section: "是非題", type: "tf", number: 10,
      stem: "家裡發生火災時，趕快躲浴室較安全，因為浴室有水，可用來滅火。",
      answer: "X", source: "official",
      explanation: "浴室門多為塑膠或木質、通風差，躲浴室易受困吸入濃煙。"
    },
    {
      id: "fire113-mc-01", paper: "fire113", section: "選擇題", type: "mc", number: 1,
      stem: "防範火災發生是？",
      options: [
        { value: "1", text: "消防員" },
        { value: "2", text: "警察" },
        { value: "3", text: "學生" },
        { value: "4", text: "大家的責任。" }
      ],
      answer: "4", source: "official",
      explanation: "防火是全民責任，不是單一職業的責任。"
    },
    {
      id: "fire113-mc-02", paper: "fire113", section: "選擇題", type: "mc", number: 2,
      stem: "安全門的主要用途為？",
      options: [
        { value: "1", text: "防盜" },
        { value: "2", text: "阻隔火煙" },
        { value: "3", text: "滅火" },
        { value: "4", text: "變賣。" }
      ],
      answer: "2", source: "official",
      explanation: "常閉式安全門可阻隔火煙，保持關閉才能發揮作用。"
    },
    {
      id: "fire113-mc-03", paper: "fire113", section: "選擇題", type: "mc", number: 3,
      stem: "火災現場充滿濃煙，逃生時哪裡有殘餘空氣可利用？",
      options: [
        { value: "1", text: "靠天花板處" },
        { value: "2", text: "靠地面約 20 到 30 公分處" },
        { value: "3", text: "靠高層樓處" },
        { value: "4", text: "以上皆是。" }
      ],
      answer: "2", source: "official",
      explanation: "熱煙上升，貼近地面約 20–30 公分處仍有較多殘餘空氣。"
    },
    {
      id: "fire113-mc-04", paper: "fire113", section: "選擇題", type: "mc", number: 4,
      stem: "下列何者是火場中的頭號殺手？",
      options: [
        { value: "1", text: "濃煙" },
        { value: "2", text: "高溫" },
        { value: "3", text: "火焰" },
        { value: "4", text: "以上皆是。" }
      ],
      answer: "1", source: "official",
      explanation: "火場死亡多因吸入濃煙與有毒氣體，濃煙是頭號殺手。"
    },
    {
      id: "fire113-mc-05", paper: "fire113", section: "選擇題", type: "mc", number: 5,
      stem: "防火防災教育訓練之目的，下列何者為非？",
      options: [
        { value: "1", text: "普及火災預防意識" },
        { value: "2", text: "提升防災知識" },
        { value: "3", text: "提升辦公效率" },
        { value: "4", text: "提升災害發生時之處置判斷及應變能力。" }
      ],
      answer: "3", source: "official",
      explanation: "防火防災訓練與辦公效率無直接關係。"
    },
    {
      id: "fire113-mc-06", paper: "fire113", section: "選擇題", type: "mc", number: 6,
      stem: "台灣的建築物火災，以住宅火災佔多數，如發生火災，下列何項消防安全設備，可發揮早期預警之功能？",
      options: [
        { value: "1", text: "一氧化碳警報器" },
        { value: "2", text: "住宅用火災警報器" },
        { value: "3", text: "緊急照明燈" },
        { value: "4", text: "緩降機" }
      ],
      answer: "2", source: "official",
      explanation: "住宅用火災警報器可在火災初期偵測煙熱並發出警報。"
    },
    {
      id: "fire113-mc-07", paper: "fire113", section: "選擇題", type: "mc", number: 7,
      stem: "臺北市消防局視訊 119 APP 的功能有？",
      options: [
        { value: "1", text: "即時定位報案人地點" },
        { value: "2", text: "播放 CPR 流程影片及搜尋附近的 AED" },
        { value: "3", text: "即時發布地震警報" },
        { value: "4", text: "以上皆是。" }
      ],
      answer: "1", source: "official",
      explanation: "視訊 119 以災害影像與 GPS 定位報案為主，方便派遣救援；地震警報與 CPR/AED 查詢非其主要功能，故不選「以上皆是」。"
    },
    {
      id: "fire113-mc-08", paper: "fire113", section: "選擇題", type: "mc", number: 8,
      stem: "室內消防栓的使用口訣？",
      options: [
        { value: "1", text: "拿、開、按、拉、轉" },
        { value: "2", text: "開、按、拿、轉、拉" },
        { value: "3", text: "按、開、拿、拉、轉" },
        { value: "4", text: "按、開、轉、拿、拉。" }
      ],
      answer: "3", source: "official",
      explanation: "按警鈴、開箱、拿瞄子、拉水帶、轉制水閥。"
    },
    {
      id: "fire113-mc-09", paper: "fire113", section: "選擇題", type: "mc", number: 9,
      stem: "下列「初期滅火」何者為非？",
      options: [
        { value: "1", text: "初期滅火應將滅火器直接丟入火源中" },
        { value: "2", text: "初期滅火班人員可分工一人滅火一人找尋滅火器以集中連續使用" },
        { value: "3", text: "滅火班可適時利用室內消防栓接近火點進行滅火" },
        { value: "4", text: "使用滅火器撲滅火勢時，確定無觸電之虞，應再加以澆水降溫。" }
      ],
      answer: "1", source: "official",
      explanation: "滅火器不可丟入火源，應正確操作並保持安全距離。"
    },
    {
      id: "fire113-mc-10", paper: "fire113", section: "選擇題", type: "mc", number: 10,
      stem: "哪一個選項是災害防救法第 2 條裡面所提到的災害？",
      options: [
        { value: "1", text: "火災" },
        { value: "2", text: "震災" },
        { value: "3", text: "土石流災害" },
        { value: "4", text: "以上皆是。" }
      ],
      answer: "4", source: "official",
      explanation: "火災、震災、土石流災害均屬災害防救法所列災害。"
    },
    {
      id: "fire113-mc-11", paper: "fire113", section: "選擇題", type: "mc", number: 11,
      stem: "何種物質工廠起火燃燒不得使用水撲滅？",
      options: [
        { value: "1", text: "木材" },
        { value: "2", text: "紙張" },
        { value: "3", text: "鉀（禁水性物質）" }
      ],
      answer: "3", source: "official",
      explanation: "鉀遇水會劇烈反應甚至爆炸，屬禁水性物質。"
    },
    {
      id: "fire113-mc-12", paper: "fire113", section: "選擇題", type: "mc", number: 12,
      stem: "電器火災又稱之為？",
      options: [
        { value: "1", text: "A 類火災" },
        { value: "2", text: "B 類火災" },
        { value: "3", text: "C 類火災" },
        { value: "4", text: "D 類火災" }
      ],
      answer: "3", source: "official",
      explanation: "C 類火災為電器、通電設備火災，滅火前應先斷電。"
    },
    {
      id: "fire113-mc-13", paper: "fire113", section: "選擇題", type: "mc", number: 13,
      stem: "當有人溺水時，不可用哪一種方法施救？",
      options: [
        { value: "1", text: "使喚別人也入水救援溺者" },
        { value: "2", text: "使用竹竿" },
        { value: "3", text: "使用救生圈" },
        { value: "4", text: "使用現場現有衣物連接一起，丟給溺者。" }
      ],
      answer: "1", source: "official",
      explanation: "應以岸上救援優先，不可貿然叫他人下水，避免增加溺水者。"
    },
    {
      id: "fire113-mc-14", paper: "fire113", section: "選擇題", type: "mc", number: 14,
      stem: "有關地震知識，下列敘述何者錯誤？",
      options: [
        { value: "1", text: "地震規模，通常以芮氏規模表示" },
        { value: "2", text: "震度 0 級為無感地震" },
        { value: "3", text: "震度從最低 0 級至最高 7 級，總共分為 8 級" },
        { value: "4", text: "震度從最低 0 級至最高 7 級，總共分為 10 級" }
      ],
      answer: "3", source: "official",
      explanation: "現行震度分級共 10 級（0、1、2、3、4、5 弱、5 強、6 弱、6 強、7），所以「0–7 級共 8 級」是錯誤敘述；選項 4 的 10 級正確。"
    },
    {
      id: "fire113-mc-15", paper: "fire113", section: "選擇題", type: "mc", number: 15,
      stem: "滅火器之使用要領含有以下 a、b、c、d 四項，其中分別為 a 瞄準火源根部、b 拉插梢、c 壓握把、d 向火源左右掃射，請問其順序為何？",
      options: [
        { value: "1", text: "cbad" },
        { value: "2", text: "bacd" },
        { value: "3", text: "bcad" },
        { value: "4", text: "acbd" }
      ],
      answer: "2", source: "official",
      explanation: "拉（b）→ 瞄（a）→ 壓（c）→ 掃（d）。"
    },

    /* ================= 民防法規 ================= */
    {
      id: "civildefense-mc-01", paper: "civildefense", section: "單選題", type: "mc", number: 1,
      stem: "有關制定「民防法」主要目的，下列敘述何者錯誤？",
      options: [
        { value: "1", text: "為有效運用民力，發揮民間自衛自救功能" },
        { value: "2", text: "共同防護人民生命、身體、財產安全，以達平時防災救護" },
        { value: "3", text: "戰時有效支援軍事任務" },
        { value: "4", text: "增加民防人員生活津貼、補助每月聯誼活動費。" }
      ],
      answer: "4", source: "official",
      explanation: "民防法第 1 條立法目的不含增加生活津貼或聯誼補助。"
    },
    {
      id: "civildefense-mc-02", paper: "civildefense", section: "單選題", type: "mc", number: 2,
      stem: "依據「民防團隊編組訓練演習服勤及支援軍事勤務辦法」，下列何者非民防大隊任務範圍？",
      options: [
        { value: "1", text: "配合警察要求代查電玩業者戶役政資料" },
        { value: "2", text: "執行轄內空襲災害防護" },
        { value: "3", text: "協助防空避難設備管理維護" },
        { value: "4", text: "協助搶救重大災害" },
        { value: "5", text: "協助維持地方治安及戰時支援軍事勤務任務。" }
      ],
      answer: "1", source: "official",
      explanation: "代查電玩業者戶役政資料不屬民防大隊任務。"
    },
    {
      id: "civildefense-mc-03", paper: "civildefense", section: "單選題", type: "mc", number: 3,
      stem: "有關「民防法」主管機關，下列敘述何者有誤？",
      options: [
        { value: "1", text: "中央為內政部" },
        { value: "2", text: "中央為全動署" },
        { value: "3", text: "直轄市為直轄市政府" },
        { value: "4", text: "在縣（市）為縣（市）政府。" }
      ],
      answer: "2", source: "official",
      explanation: "民防法第 3 條：中央主管機關為內政部。"
    },
    {
      id: "civildefense-mc-04", paper: "civildefense", section: "單選題", type: "mc", number: 4,
      stem: "有關臺北市政府民防團隊編組，下列敘述何者錯誤？",
      options: [
        { value: "1", text: "警察局編管單位計有民防大隊、義警大隊及工程搶修大隊" },
        { value: "2", text: "現任民防總隊指揮官 1 人，由市長蔣萬安擔任" },
        { value: "3", text: "現有編制 12 個民防團、456 個民防分團" },
        { value: "4", text: "戰時災民收容站由社會局編管。" }
      ],
      answer: "1", source: "official",
      explanation: "本題為 113 年試卷，依當時臺北市編組現況判斷；工程搶修大隊非警察局編管。"
    },
    {
      id: "civildefense-mc-05", paper: "civildefense", section: "單選題", type: "mc", number: 5,
      stem: "依據「民防團隊編組訓練演習服勤及支援軍事勤務辦法」，下列何者非義勇警察大隊任務範圍？",
      options: [
        { value: "1", text: "協助防竊防盜" },
        { value: "2", text: "執行轄內獨居長者送餐勤務" },
        { value: "3", text: "協助警戒勤務" },
        { value: "4", text: "協助警察勤務" },
        { value: "5", text: "戰時支援軍事勤務任務。" }
      ],
      answer: "2", source: "official",
      explanation: "獨居長者送餐非義勇警察大隊任務。"
    },
    {
      id: "civildefense-mc-06", paper: "civildefense", section: "單選題", type: "mc", number: 6,
      stem: "有關「民防法」第 4 條特種防護團編組機構，下列敘述何者錯誤？",
      options: [
        { value: "1", text: "鐵路南港站可以設置特種防護團編組" },
        { value: "2", text: "基隆港可以設置特種防護團" },
        { value: "3", text: "松山機場可以設置特種防護團" },
        { value: "4", text: "政治大學可以設置特種防護團。" }
      ],
      answer: "4", source: "official",
      explanation: "特種防護團適用鐵路、公路、港口、航空站、電信、電力、煉油及自來水事業；學校應編防護團。"
    },
    {
      id: "civildefense-mc-07", paper: "civildefense", section: "單選題", type: "mc", number: 7,
      stem: "有關「民防法」第 4 條防護團編組機構，下列敘述何者錯誤？",
      options: [
        { value: "1", text: "台電可以設置防護團編組" },
        { value: "2", text: "行政院可以設置防護團編組" },
        { value: "3", text: "興隆國小可以設置防護團編組" },
        { value: "4", text: "萬芳醫院可以設置防護團編組。" }
      ],
      answer: "1", source: "official",
      explanation: "台電屬電力事業，應編特種防護團，非一般防護團。"
    },
    {
      id: "civildefense-mc-08", paper: "civildefense", section: "單選題", type: "mc", number: 8,
      stem: "有關「民防法」第 8 條，下列敘述何者正確？",
      options: [
        { value: "1", text: "參加民防團隊編組人員接受訓練、演習、服勤時，辦理機關（構）得依實際需要供給膳宿" },
        { value: "2", text: "參加民防團隊編組人員接受訓練，無提供交通工具或不發放代金" },
        { value: "3", text: "民防人員接受訓練、演習、服勤期間，應自行請事假參加" },
        { value: "4", text: "民防人員接受訓練期間，每日可領取 3 千元新台幣。" }
      ],
      answer: "1", source: "official",
      explanation: "第 8 條得供給膳宿、交通工具或改發代金，並應給予公假。"
    },
    {
      id: "civildefense-mc-09", paper: "civildefense", section: "單選題", type: "mc", number: 9,
      stem: "依據「民防團隊編組訓練演習服勤及支援軍事勤務辦法」，下列何者非交通義勇警察大隊任務範圍？",
      options: [
        { value: "1", text: "協助整理交通秩序" },
        { value: "2", text: "協助交通指揮、疏導與管制" },
        { value: "3", text: "協助護鈔勤務" },
        { value: "4", text: "協助交通事故處理、交通設施損壞通報及維護" },
        { value: "5", text: "協助空襲及戰時交通指揮、疏導與管制及其他經指定之警察勤務。" }
      ],
      answer: "3", source: "official",
      explanation: "護鈔非交通義勇警察大隊任務。"
    },
    {
      id: "civildefense-mc-10", paper: "civildefense", section: "單選題", type: "mc", number: 10,
      stem: "依據「民防團隊編組訓練演習服勤及支援軍事勤務辦法」，下列何者為村（里）社區守望相助巡守大隊任務範圍？",
      options: [
        { value: "1", text: "協助國家考試試卷運送" },
        { value: "2", text: "協助外國元首訪問交通指揮" },
        { value: "3", text: "協助維護地方治安巡守、急難救護任務" },
        { value: "4", text: "協助鐵拒馬架設及搬運。" }
      ],
      answer: "3", source: "official",
      explanation: "守望相助巡守大隊任務含治安巡守、急難救護、物資配送、宣導慰問、情報傳遞及防空疏散避難。"
    },

    /* ================= 基礎民防法令（參考答案） ================= */
    {
      id: "basiclaw-mc-01", paper: "basiclaw", section: "單選題", type: "mc", number: 1,
      stem: "民防的定義，下列何者有誤？",
      options: [
        { value: "A", text: "平時防災救護，戰時有效支援軍事任務" },
        { value: "B", text: "運用軍隊的力量，來保衛人民的生命財產安全" },
        { value: "C", text: "共同防護人民身家、財產安全" },
        { value: "D", text: "運用民力，發揮民間自衛自救功能。" }
      ],
      answer: "B", source: "reference",
      explanation: "民防是運用「民力」，不是運用軍隊力量。"
    },
    {
      id: "basiclaw-mc-02", paper: "basiclaw", section: "單選題", type: "mc", number: 2,
      stem: "民防團隊編組訓練演習服勤及支援軍事勤務辦法第 16 條之 1 新增之大隊為何？",
      options: [
        { value: "A", text: "醫療大隊" },
        { value: "B", text: "環境保護大隊" },
        { value: "C", text: "物資大隊" },
        { value: "D", text: "工程搶修大隊。" }
      ],
      answer: "C", source: "reference",
      explanation: "第 16 條之 1 規範物資大隊之編組。"
    },
    {
      id: "basiclaw-mc-03", paper: "basiclaw", section: "單選題", type: "mc", number: 3,
      stem: "下列何者的主管機關不是內政部？",
      options: [
        { value: "A", text: "《災害防救法》" },
        { value: "B", text: "《民防法》" },
        { value: "C", text: "《民防團隊編組訓練演習服勤及支援軍事勤務辦法》" },
        { value: "D", text: "《全民防衛動員準備法》。" }
      ],
      answer: "D", source: "reference",
      explanation: "全民防衛動員準備法主管機關為國防部。"
    },
    {
      id: "basiclaw-mc-04", paper: "basiclaw", section: "單選題", type: "mc", number: 4,
      stem: "學校防護團主要運用誰來協助戰時或平時災害防救相關的勤務工作，內容包括民防、軍勤、交通、運輸、生產、救護與宣導等？",
      options: [
        { value: "A", text: "大學生" },
        { value: "B", text: "高中、職青年" },
        { value: "C", text: "義交、義警" },
        { value: "D", text: "教職員工生。" }
      ],
      answer: "D", source: "reference",
      explanation: "學校防護團由學校教職員工生編組，戰時並支援服勤。"
    },
    {
      id: "basiclaw-mc-05", paper: "basiclaw", section: "單選題", type: "mc", number: 5,
      stem: "我國哪一部法律能有效運用民力，發揮民間自衛自救的功能，達到平時能夠防護救災，戰時能夠有效支援軍事任務？",
      options: [
        { value: "A", text: "民防法" },
        { value: "B", text: "災害防救法" },
        { value: "C", text: "戰力綜合協調會報全民防衛動員準備法" },
        { value: "D", text: "國防法。" }
      ],
      answer: "A", source: "reference",
      explanation: "民防法第 1 條即明定此立法目的。"
    },
    {
      id: "basiclaw-mc-06", paper: "basiclaw", section: "單選題", type: "mc", number: 6,
      stem: "民防工作與軍事勤務相關者，平時由中央主管機關會同哪一單位督導執行？",
      options: [
        { value: "A", text: "外交部" },
        { value: "B", text: "內政部" },
        { value: "C", text: "法務部" },
        { value: "D", text: "國防部。" }
      ],
      answer: "D", source: "reference",
      explanation: "民防法第 3 條第 2 項：平時由中央主管機關會同國防部督導執行。"
    },
    {
      id: "basiclaw-mc-07", paper: "basiclaw", section: "單選題", type: "mc", number: 7,
      stem: "各機關對於防空避難設施應加強管理維護，並妥為分配，假設某直轄市、縣（市）政府所屬機關經檢討後，發現其防空避難設施容量不敷者，該機關應請洽哪個單位協助規劃避難處所？",
      options: [
        { value: "A", text: "該直轄市、縣（市）民防總隊" },
        { value: "B", text: "內政部警政署" },
        { value: "C", text: "內政部消防署" },
        { value: "D", text: "該直轄市、縣（市）警察局。" }
      ],
      answer: "D", source: "reference",
      explanation: "防空疏散避難業務由直轄市、縣（市）警察局（民防管制中心）主辦，設施容量不敷時洽警察局協助規劃避難處所。"
    },
    {
      id: "basiclaw-mc-08", paper: "basiclaw", section: "單選題", type: "mc", number: 8,
      stem: "下列何者不是青年服勤動員所依據的法規？",
      options: [
        { value: "A", text: "災害防救法" },
        { value: "B", text: "全民防衛動員準備法" },
        { value: "C", text: "民防法" },
        { value: "D", text: "國防法。" }
      ],
      answer: "D", source: "reference",
      explanation: "青年服勤動員與全民防衛動員、民防及災害防救體系有關，國防法非其依據。"
    },
    {
      id: "basiclaw-mc-09", paper: "basiclaw", section: "單選題", type: "mc", number: 9,
      stem: "根據民防團隊編組訓練演習服勤及支援軍事勤務辦法，幹部訓練每年度以幾小時為原則？",
      options: [
        { value: "A", text: "四小時" },
        { value: "B", text: "四至六小時" },
        { value: "C", text: "四至八小時" },
        { value: "D", text: "四至十二小時。" }
      ],
      answer: "D", source: "reference",
      explanation: "該辦法規定幹部訓練每年以 4 至 12 小時為原則。"
    },
    {
      id: "basiclaw-mc-10", paper: "basiclaw", section: "單選題", type: "mc", number: 10,
      stem: "民防分團勤務組編組，以多少人為原則？",
      options: [
        { value: "A", text: "六人" },
        { value: "B", text: "八人" },
        { value: "C", text: "二至十二人" },
        { value: "D", text: "八至十二人。" }
      ],
      answer: "C", source: "reference",
      explanation: "民防分團每個勤務組以 2 至 12 人編成為原則。"
    },
    {
      id: "basiclaw-mc-11", paper: "basiclaw", section: "單選題", type: "mc", number: 11,
      stem: "各機關員工人數達幾人以上者，應編組防護團？",
      options: [
        { value: "A", text: "50 人" },
        { value: "B", text: "100 人" },
        { value: "C", text: "150 人" },
        { value: "D", text: "200 人。" }
      ],
      answer: "B", source: "reference",
      explanation: "民防法第 4 條：工作人數達 100 人以上應編組防護團。"
    },
    {
      id: "basiclaw-mc-12", paper: "basiclaw", section: "單選題", type: "mc", number: 12,
      stem: "徵用物資價款處理方式，何者錯誤？",
      options: [
        { value: "A", text: "於徵購後，參照市價及新舊程度計算" },
        { value: "B", text: "價款於交付物資時一併給付" },
        { value: "C", text: "徵用原因消滅時須解除徵用" },
        { value: "D", text: "操作人員可一併徵用。" }
      ],
      answer: "A", source: "reference",
      explanation: "民防物資人員徵用徵購及補償辦法第 6 條：應於「徵購時」會同同業公會參照市價及新舊程度評定價格；A 說「徵購後」才計算，故錯誤。"
    },
    {
      id: "basiclaw-mc-13", paper: "basiclaw", section: "單選題", type: "mc", number: 13,
      stem: "有關城鎮韌性演習之敘述何者錯誤？",
      options: [
        { value: "A", text: "將每個縣市視為一個城堡" },
        { value: "B", text: "整合過去多種演習" },
        { value: "C", text: "目前納入萬安演習" },
        { value: "D", text: "救災單位同時參與。" }
      ],
      answer: "A", source: "reference",
      explanation: "城鎮韌性演習是整合萬安、民安等演習，由中央與地方共同規劃，救災單位也參與；並不是把每個縣市視為一座城堡，故 A 錯誤。"
    },
    {
      id: "basiclaw-mc-14", paper: "basiclaw", section: "單選題", type: "mc", number: 14,
      stem: "循指揮體系下達徵購、徵用令及生產轉換令，誘導參演部隊運用全民戰力綜合協調組織，遂行軍需物資動員之演習為何？",
      options: [
        { value: "A", text: "自強演習" },
        { value: "B", text: "漢光演習" },
        { value: "C", text: "萬安演習" },
        { value: "D", text: "同心演習。" }
      ],
      answer: "A", source: "reference",
      explanation: "題幹與全動署「自強演習」定義相符：下達徵購、徵用令及生產轉換令，遂行軍需物資動員。原卷標記為 D，已校正。"
    },
    {
      id: "basiclaw-mc-15", paper: "basiclaw", section: "單選題", type: "mc", number: 15,
      stem: "由國防部主導，為國軍部隊每年最重要的實兵演練是？",
      options: [
        { value: "A", text: "自強演習" },
        { value: "B", text: "漢光演習" },
        { value: "C", text: "萬安演習" },
        { value: "D", text: "同心演習。" }
      ],
      answer: "B", source: "reference",
      explanation: "漢光演習為國軍年度最重要實兵演練。"
    },
    {
      id: "basiclaw-mc-16", paper: "basiclaw", section: "單選題", type: "mc", number: 16,
      stem: "民防團隊任務召集通知，應於幾日前送達受召集人？",
      options: [
        { value: "A", text: "5 日" },
        { value: "B", text: "7 日" },
        { value: "C", text: "10 日" },
        { value: "D", text: "14 日。" }
      ],
      answer: "C", source: "reference",
      explanation: "該辦法第 7 條：應於報到 10 日前送達；特殊事故可先通知再補發。"
    },
    {
      id: "basiclaw-mc-17", paper: "basiclaw", section: "單選題", type: "mc", number: 17,
      stem: "執行民防團隊工作撫卹金請領規定何者錯誤？",
      options: [
        { value: "A", text: "最優先請領者為父母" },
        { value: "B", text: "遺族同一順序有數人時，其撫卹金應平均請領" },
        { value: "C", text: "生前預立遺囑，指定請領撫卹金遺族之順序者，從其遺囑" },
        { value: "D", text: "請領消滅時效為二年。" }
      ],
      answer: "A", source: "reference",
      explanation: "民防法第 10 條：第一順序為配偶及子女，父母為第二順序。"
    },
    {
      id: "basiclaw-mc-18", paper: "basiclaw", section: "單選題", type: "mc", number: 18,
      stem: "何者非徵用命令項目？",
      options: [
        { value: "A", text: "土地" },
        { value: "B", text: "土地改良物" },
        { value: "C", text: "運輸工具" },
        { value: "D", text: "急救藥品。" }
      ],
      answer: "D", source: "reference",
      explanation: "急救藥品屬「徵購」項目（民防法第 13 條），非徵用。"
    },
    {
      id: "basiclaw-mc-19", paper: "basiclaw", section: "單選題", type: "mc", number: 19,
      stem: "何者並非民防法規定之不得徵用人員？",
      options: [
        { value: "A", text: "身心障礙者" },
        { value: "B", text: "列入輔助軍事勤務隊之補充兵及後備軍人者" },
        { value: "C", text: "刑事被告判決定讞者" },
        { value: "D", text: "依公務性質不適參加編組者。" }
      ],
      answer: "C", source: "reference",
      explanation: "民防法第 16 條未列「刑事被告判決定讞者」。"
    },
    {
      id: "basiclaw-mc-20", paper: "basiclaw", section: "單選題", type: "mc", number: 20,
      stem: "某工廠達規模而未依規定編組防護團，經通知限期編組仍未於期限內完成。依《民防法》，得如何處罰？",
      options: [
        { value: "A", text: "處 1–5 萬元罰鍰，並得按日連續處罰" },
        { value: "B", text: "處 3–15 萬元罰鍰，並得按次連續處罰" },
        { value: "C", text: "處 5–20 萬元罰鍰，並得按次連續處罰" },
        { value: "D", text: "處 3–15 萬元罰鍰，但不得連續處罰" }
      ],
      answer: "B", source: "reference",
      explanation: "民防法第 24 條：3 萬元以上 15 萬元以下罰鍰，並得按次處罰。"
    },

    /* ================= 防情傳遞 ================= */
    {
      id: "chengqing-tf-01", paper: "chengqing", section: "是非題", type: "tf", number: 1,
      stem: "「防情警報」，是指空軍作戰指揮部空中管制中心（簡稱空中管制中心）於研判確定有敵機、不明機或飛彈進襲臺灣地區跡象時，所傳遞之「防空情報」及「空襲警報發放命令（含燈火管制）」。",
      answer: "O", source: "official",
      explanation: "防情警報包含防空情報與空襲警報發放命令。"
    },
    {
      id: "chengqing-tf-02", paper: "chengqing", section: "是非題", type: "tf", number: 2,
      stem: "防情警報的「傳遞聯絡」，是指內政部警政署民防指揮管制所（以下稱署民管所），於接獲空中管制中心通報之防情警報後，利用有（無）線電通信系統通報相關機關（構）及下達直轄市、縣（市）政府警察局民防管制中心（以下稱民管中心），並由其通報相關機關（構）及通報或下達各分局、分駐（派出所）、隊警報臺之作為。",
      answer: "O", source: "official",
      explanation: "此為防情警報傳遞聯絡的完整流程。"
    },
    {
      id: "chengqing-tf-03", paper: "chengqing", section: "是非題", type: "tf", number: 3,
      stem: "「防空警報器」建置於警察單位，如派出所、警備隊或交通分隊，且 24 小時有人員看守。",
      answer: "O", source: "official",
      explanation: "防空警報器由警察單位設置並保持 24 小時看守。"
    },
    {
      id: "chengqing-tf-04", paper: "chengqing", section: "是非題", type: "tf", number: 4,
      stem: "「警報臺」是指設有防情通信及警報設備之單位，包括分駐（派出）所、警備隊或交通分隊等。",
      answer: "O", source: "official",
      explanation: "警報臺的定義即設有防情通信及警報設備之單位。"
    },
    {
      id: "chengqing-tf-05", paper: "chengqing", section: "是非題", type: "tf", number: 5,
      stem: "遙控警報臺：簡稱遙控臺，指有配置中央遙控警報系統終端控制器，可接收內政部警政署民防指揮管制所遠端訊號，遙控發放警報之警報臺。",
      answer: "O", source: "official",
      explanation: "遙控臺可接收署民管所遠端訊號遙控發放警報。"
    },
    {
      id: "chengqing-tf-06", paper: "chengqing", section: "是非題", type: "tf", number: 6,
      stem: "人工警報臺：簡稱人工臺，指未配置中央遙控警報系統終端控制器，無法遙控發放警報，接收警報命令後，須以人工操作發放警報之警報臺。",
      answer: "O", source: "official",
      explanation: "人工臺未配置終端控制器，須人工操作發放警報。"
    },
    {
      id: "chengqing-tf-07", paper: "chengqing", section: "是非題", type: "tf", number: 7,
      stem: "防空警報音符之種類、內容及用途：緊急警報音符內容為 1 長音 2 短音，長音 15 秒，短音 5 秒，各音符間隔 5 秒，連續拉 3 次，共 115 秒，用途為通知民眾有空襲狀況，立即實施避難；解除警報音符內容為 1 長音 90 秒，用途為通知民眾空襲狀況解除。",
      answer: "O", source: "official",
      explanation: "緊急警報 115 秒、解除警報 90 秒，為必背數字。"
    },
    {
      id: "chengqing-tf-08", paper: "chengqing", section: "是非題", type: "tf", number: 8,
      stem: "通知民眾有空襲狀況之方式包括：運用警察單位設置之防空警報器發放警報、國防部發布「災防告警細胞廣播訊息」至民眾行動電話、村里辦公室廣播、警車廣播等。",
      answer: "O", source: "official",
      explanation: "防空警報、細胞廣播、村里廣播、警車廣播皆為通知方式。"
    },
    {
      id: "chengqing-tf-09", paper: "chengqing", section: "是非題", type: "tf", number: 9,
      stem: "中共解放軍自 111 年 8 月 3 日起，迄至 113 年 1 月 25 日止，每日均持續派遣軍機、艦艇臺海周邊活動，且經常逾越海峽中線及其延伸線，騷擾我海、空域。",
      answer: "O", source: "official",
      explanation: "此為該試卷編寫時期的兩岸軍事動態敘述。"
    },
    {
      id: "chengqing-tf-10", paper: "chengqing", section: "是非題", type: "tf", number: 10,
      stem: "「自強演習」是針對空襲狀況時，實施警報傳遞與發放、疏散避難及交通管制等演練。",
      answer: "X", source: "official",
      explanation: "針對空襲狀況的演練是萬安（現整合為城鎮韌性）演習，不是自強演習。"
    },
    {
      id: "chengqing-mc-01", paper: "chengqing", section: "選擇題", type: "mc", number: 1,
      stem: "下列敘述何者錯誤？",
      options: [
        { value: "1", text: "警報臺：指設有防空警報設施之分駐（派出）所、警備隊或交通分隊等。" },
        { value: "2", text: "警報器：用以發出警報聲響之警報設施，各警察單位警報臺原則上採單配制，僅配置電子式警報器、交流或直流警報器其中 1 種。" },
        { value: "3", text: "遙控警報臺：簡稱遙控臺，指有配置中央遙控警報系統終端控制器，可接收內政部警政署民防指揮管制所遠端訊號，遙控發放警報之警報臺；未配置中央遙控警報系統終端控制器者，則為人工警報臺，簡稱人工臺。" }
      ],
      answer: "2", source: "official",
      explanation: "各警報臺並非只配置一種警報器；本題原卷答案為 (2)。"
    },
    {
      id: "chengqing-mc-02", paper: "chengqing", section: "選擇題", type: "mc", number: 2,
      stem: "防空緊急警報音符內容為__長音，__短音，長音__秒，短音__秒，各音符間隔__秒，連續拉__次，共__秒，以上空格分別為？",
      options: [
        { value: "1", text: "2, 1, 10, 5, 5, 3, 115。" },
        { value: "2", text: "1, 2, 15, 5, 5, 3, 115。" },
        { value: "3", text: "1, 2, 20, 5, 5, 3, 115。" }
      ],
      answer: "2", source: "official",
      explanation: "1 長音、2 短音；長音 15 秒、短音 5 秒、間隔 5 秒、重複 3 次、共 115 秒。"
    },
    {
      id: "chengqing-mc-03", paper: "chengqing", section: "選擇題", type: "mc", number: 3,
      stem: "有關防空警報音符內容之敘述，何者正確？",
      options: [
        { value: "1", text: "解除警報音符為 1 長音 90 秒。" },
        { value: "2", text: "試轉警報音符為 1 長音 90 秒。" },
        { value: "3", text: "試放警報音符為 1 長音 90 秒。" }
      ],
      answer: "1", source: "official",
      explanation: "解除警報為 1 長音 90 秒；原卷答案為 (1)。"
    },
    {
      id: "chengqing-mc-04", paper: "chengqing", section: "選擇題", type: "mc", number: 4,
      stem: "何種演習是針對空襲狀況時，實施警報傳遞與發放、疏散避難及交通管制等演練？",
      options: [
        { value: "1", text: "萬安演習。" },
        { value: "2", text: "民安演習。" },
        { value: "3", text: "城鎮韌性演習。" }
      ],
      answer: "3", source: "official",
      explanation: "現行由城鎮韌性演習整合防空與災防演練；原卷答案為 (3)。"
    },
    {
      id: "chengqing-mc-05", paper: "chengqing", section: "選擇題", type: "mc", number: 5,
      stem: "民眾如何得知發生空襲狀況？",
      options: [
        { value: "1", text: "聽聞防空警報器發放的緊急警報聲響。" },
        { value: "2", text: "行動電話接獲國防部發布的「災防告警細胞廣播訊息」。" },
        { value: "3", text: "以上皆是。" }
      ],
      answer: "3", source: "official",
      explanation: "警報聲響與細胞廣播都是民眾得知空襲的管道。"
    },
    {
      id: "chengqing-mc-06", paper: "chengqing", section: "選擇題", type: "mc", number: 6,
      stem: "從何官方全球資訊網可得知中共解放軍在臺海周邊海、空域動態資訊？",
      options: [
        { value: "1", text: "內政部警政署。" },
        { value: "2", text: "消防署。" },
        { value: "3", text: "國防部。" }
      ],
      answer: "3", source: "official",
      explanation: "國防部網站會發布臺海周邊海空域動態。"
    },
    {
      id: "chengqing-mc-07", paper: "chengqing", section: "選擇題", type: "mc", number: 7,
      stem: "下列敘述何者錯誤？",
      options: [
        { value: "1", text: "防空警報器設置於警政單位。" },
        { value: "2", text: "內政部警政署可遙控全省警報臺發放防空警報。" },
        { value: "3", text: "現行警報臺僅有少部分為遙控警報臺。" }
      ],
      answer: "3", source: "official",
      explanation: "現行多數警報臺已為遙控臺；原卷答案為 (3)。"
    },
    {
      id: "chengqing-mc-08", paper: "chengqing", section: "選擇題", type: "mc", number: 8,
      stem: "下列何種警報是針對空襲狀況所發布之告警？",
      options: [
        { value: "1", text: "海嘯警報。" },
        { value: "2", text: "颱風警報。" },
        { value: "3", text: "防空警報。" }
      ],
      answer: "3", source: "official",
      explanation: "防空警報用於空襲狀況。"
    },
    {
      id: "chengqing-mc-09", paper: "chengqing", section: "選擇題", type: "mc", number: 9,
      stem: "下列敘述何者正確？",
      options: [
        { value: "1", text: "2022 年 2 月 24 日，俄羅斯入侵烏克蘭，導致雙方數十萬人傷亡，並造成歐洲自第二次世界大戰以來最大的難民危機，戰爭開始的六週內有 430 萬難民離開烏克蘭，另有 710 萬人在烏克蘭境內流離失所。" },
        { value: "2", text: "2023 年 10 月 7 日，以哈瑪斯為首的巴勒斯坦武裝團體與以色列軍隊爆發武裝衝突。戰爭始於哈瑪斯對以色列南部的入侵，以色列軍隊旋即報復性空襲巴勒斯坦的加薩走廊，並在數日後開始準備對加薩的地面入侵。該戰爭是贖罪日戰爭以來，數十年來最激烈的一場戰爭。" },
        { value: "3", text: "以上皆是。" }
      ],
      answer: "3", source: "official",
      explanation: "兩段國際局勢敘述均正確。"
    },
    {
      id: "chengqing-mc-10", paper: "chengqing", section: "選擇題", type: "mc", number: 10,
      stem: "要協助民眾防空疏散避難，首要任務為？",
      options: [
        { value: "1", text: "正確辨識防空警報音符。" },
        { value: "2", text: "熟悉防空疏散避難場所位置。" },
        { value: "3", text: "以上皆非。" }
      ],
      answer: "1", source: "reference",
      explanation: "先聽懂警報、辨識狀況，才能正確引導避難；原卷標記為 1，惟本題屬實務判斷，僅供參考。"
    },

    /* ================= 防空避難（是非題 1–5、選擇題 1–5，IMG_2680） ================= */
    {
      id: "airdefense-tf-01", paper: "airdefense", section: "是非題", type: "tf", number: 1,
      stem: "防空避難室多位於大樓地下室，戰爭時國防部發布命令，民眾進入避難，惟憲法賦予個人財產權之保障，需所有權人同意，方可進入。",
      answer: "X", source: "official",
      explanation: "防空疏散避難命令具強制性，避難處所不得以所有權人未同意為由拒絕民眾進入；戰時並得依法徵用。"
    },
    {
      id: "airdefense-tf-02", paper: "airdefense", section: "是非題", type: "tf", number: 2,
      stem: "建築物所有權人、使用人應維護建築物合法使用與其構造及設備安全。故防空避難設備應避免積水、髒亂，並具備基本照明設備。",
      answer: "O", source: "official",
      explanation: "防空避難設備屬建築物公共安全的一環，所有權人、使用人負維護義務。"
    },
    {
      id: "airdefense-tf-03", paper: "airdefense", section: "是非題", type: "tf", number: 3,
      stem: "發生空襲危難時，村（里）辦公室於聽到緊急警報發放或收到國家級警報簡訊後，立即利用村（里）廣播器請民眾迅速避難，並引導民眾進入防空避難處所。",
      answer: "O", source: "official",
      explanation: "村里廣播是最貼近社區的警示管道，可補警報器涵蓋範圍之不足。"
    },
    {
      id: "airdefense-tf-04", paper: "airdefense", section: "是非題", type: "tf", number: 4,
      stem: "於防空疏散避難設備堆放雜物，未依規定保持進出口通道暢通者，涉及違反公寓大廈管理條例第十六條第二項，處新臺幣四萬元以上二十萬元以下罰鍰，並得令其限期改善或履行義務。",
      answer: "O", source: "official",
      explanation: "防空避難空間不得堆置雜物、通道須保持暢通，違者可依公寓大廈管理條例裁罰並限期改善。"
    },
    {
      id: "airdefense-tf-05", paper: "airdefense", section: "是非題", type: "tf", number: 5,
      stem: "建築物所有權人、使用人平時於地下層防空避難室放置大型家具等生活用品，且排放整齊乾淨，屬於合理使用範圍，非違規事項。",
      answer: "X", source: "official",
      explanation: "防空避難室不得堆放雜物或移作他用，即使排放整齊仍占用避難空間、影響動線，屬違規。"
    },
    {
      id: "airdefense-mc-01", paper: "airdefense", section: "選擇題", type: "mc", number: 1,
      stem: "查詢住家附近防空避難處所，下列透過網頁可查詢到的連結，何者為非？",
      options: [
        { value: "1", text: "於各直轄市、（縣）市社會局網站「避難收容資訊」連結。" },
        { value: "2", text: "於直轄市、（縣）市警察局網站「防空避難專區」連結。" },
        { value: "3", text: "於內政部警政署全球資訊網「防空避難專區」連結。" },
        { value: "4", text: "於內政部消防署網站「簡易疏散避難地圖」連結。" }
      ],
      answer: "1", source: "official",
      explanation: "社會局「避難收容資訊」是災害收容處所，不是防空避難處所；防空避難處所以警政署、警察局「防空避難專區」及消防署避難地圖查詢。"
    },
    {
      id: "airdefense-mc-02", paper: "airdefense", section: "選擇題", type: "mc", number: 2,
      stem: "民防法規定有關「防空疏散避難」，何者錯誤？",
      options: [
        { value: "1", text: "國防部得會同有關機關實施防空演習，命令實施疏散避難。" },
        { value: "2", text: "屬於民防工作範圍。" },
        { value: "3", text: "僅於戰爭發生或將發生時，由國防部命令實施疏散避難，平時防空演習除外。" },
        { value: "4", text: "違反疏散避難命令，可處新臺幣三萬元以上十五萬元以下罰鍰。" }
      ],
      answer: "3", source: "official",
      explanation: "防空疏散避難平時亦得配合演習實施，並非僅限戰爭發生或將發生時。"
    },
    {
      id: "airdefense-mc-03", paper: "airdefense", section: "選擇題", type: "mc", number: 3,
      stem: "各直轄市、縣（市）政府之防空避難設備核定、公告，其權責機關為何？",
      options: [
        { value: "1", text: "皆屬警察機關權責。" },
        { value: "2", text: "分別為主管建築機關、警察機關權責。" },
        { value: "3", text: "分別為消防機關、警察機關權責。" },
        { value: "4", text: "皆屬消防機關權責。" }
      ],
      answer: "2", source: "official",
      explanation: "防空避難設備之核定屬建築主管機關權責，公告則由警察機關辦理。"
    },
    {
      id: "airdefense-mc-04", paper: "airdefense", section: "選擇題", type: "mc", number: 4,
      stem: "空襲警報響起時，民眾採取的避難措施，何者錯誤？",
      options: [
        { value: "1", text: "於室內民眾，進入地下室或窗戶較少的房間。" },
        { value: "2", text: "於室外民眾，進入貼有「防空避難」標示牌處所。" },
        { value: "3", text: "於空曠地區，利用周邊地形、地物，採避難姿勢就地掩蔽。" },
        { value: "4", text: "於車上民眾，利用車內座位採避難姿勢掩蔽。" }
      ],
      answer: "4", source: "official",
      explanation: "車內無法有效阻隔爆炸衝擊與破片，應下車就近進入堅固建築物或就地掩蔽。"
    },
    {
      id: "airdefense-mc-05", paper: "airdefense", section: "選擇題", type: "mc", number: 5,
      stem: "有關「防空避難姿勢」何者正確？",
      options: [
        { value: "1", text: "趴下降低高度、雙手護頭、背對爆炸、穩定靜止等待機會移動。" },
        { value: "2", text: "跪姿、雙手護頭、嘴巴稍張。" },
        { value: "3", text: "跪姿、胸口離地、雙手遮嘴、鼻，眼睛稍張。" },
        { value: "4", text: "跪姿、胸口離地、雙手遮眼、耳，嘴巴稍張。" }
      ],
      answer: "1", source: "official",
      explanation: "原卷標記為 1：先趴下降低高度、雙手護頭並背對爆炸方向，減少曝露於衝擊波與破片。"
    },

    /* ================= 防空避難（第 6–10 題） ================= */
    {
      id: "airdefense-mc-06", paper: "airdefense", section: "選擇題", type: "mc", number: 6,
      stem: "民眾透過手機查詢的防空避難處所資訊，下列選項何者最正確？",
      options: [
        { value: "1", text: "內政部消防署「防災 e 點通」APP 可查詢。" },
        { value: "2", text: "內政部警政署「警政服務」APP 可查詢。" },
        { value: "3", text: "數位發展部設置的「政府資料開放平台」網站上可查詢。" },
        { value: "4", text: "以上皆是。" }
      ],
      answer: "4", source: "official",
      explanation: "多個官方管道均可查詢防空避難處所資訊。"
    },
    {
      id: "airdefense-mc-07", paper: "airdefense", section: "選擇題", type: "mc", number: 7,
      stem: "下列何者非國防部全動署於全民國防手冊建議的「個人緊急避難包」必備物品？",
      options: [
        { value: "1", text: "個人生活日記。" },
        { value: "2", text: "個人慢性病藥。" },
        { value: "3", text: "收音機。" },
        { value: "4", text: "個人身分證件。" }
      ],
      answer: "1", source: "official",
      explanation: "避難包以維生、醫療、證件與資訊接收為主，日記非必備。"
    },
    {
      id: "airdefense-mc-08", paper: "airdefense", section: "選擇題", type: "mc", number: 8,
      stem: "警察機關於大樓建築物張貼「防空避難標示牌」公告該地下室經核准為防空避難室，防空疏散避難識別使用，下列有關張貼的位置，何者為非？",
      options: [
        { value: "1", text: "6 樓公寓大樓門牌處。" },
        { value: "2", text: "通往 12 層樓高社區大樓地下室車道出、入口。" },
        { value: "3", text: "百貨公司往地下室的電梯門口。" },
        { value: "4", text: "校園內往地下室的入口。" }
      ],
      answer: "3", source: "reference",
      explanation: "標示牌應張貼於建築物外部或車道出入口等明顯處，電梯門口非適當位置；原卷標記為 3，僅供參考。"
    },
    {
      id: "airdefense-mc-09", paper: "airdefense", section: "選擇題", type: "mc", number: 9,
      stem: "防空避難標示牌上的資訊，下列何者最正確？",
      options: [
        { value: "1", text: "防空避難 icon。" },
        { value: "2", text: "標題（中英文）。" },
        { value: "3", text: "方向指引。" },
        { value: "4", text: "以上皆是。" }
      ],
      answer: "4", source: "official",
      explanation: "標示牌包含 icon、中英文標題與方向指引。"
    },
    {
      id: "airdefense-mc-10", paper: "airdefense", section: "選擇題", type: "mc", number: 10,
      stem: "遇有空襲情形時，「緊急警報音符」，其內容為何？",
      options: [
        { value: "1", text: "一長音 90 秒。" },
        { value: "2", text: "一長音兩短音，長音 10 秒、短音 5 秒，中間間隔 5 秒，重複 3 次，共 100 秒。" },
        { value: "3", text: "一長音兩短音，長音 15 秒、短音 5 秒，中間間隔 5 秒，重複 3 次，共 115 秒。" },
        { value: "4", text: "鳴 5 秒，停 5 秒，反覆 9 次，共 85 秒。" }
      ],
      answer: "3", source: "official",
      explanation: "緊急警報為 1 長音 2 短音，共 115 秒。"
    },

    /* ================= 警察勤務介紹與協勤要領（IMG_2681–2683） ================= */
    {
      id: "police-mc-01", paper: "police", section: "選擇題", type: "mc", number: 1,
      stem: "依警察勤務條例第 3 條規定，警察勤務之實施，應晝夜執行，普及轄區，並以行政警察為中心，其他各種警察配合之，下列敘述何者正確？",
      options: [
        { value: "1", text: "普及轄區係指永不斷間，規範警察勤務之時間，值班勤務最能彰顯此精神。" },
        { value: "2", text: "臺北市政府警察局大安分局偵查隊所屬之刑事警察，配合警勤區劃分其責任區，係屬「行政警察」。" },
        { value: "3", text: "連江縣警察局東引警察所，係屬「各種警察」。" },
        { value: "4", text: "警勤區員警於轄區里民活動中，向社區里民進行宣導，係適用「以行政警察為中心」之警察勤務制度。" }
      ],
      answer: "4", source: "official",
      explanation: "警勤區員警屬行政警察，深入里民活動宣導、為民服務，正是「以行政警察為中心」的展現；偵查隊刑事警察非行政警察，離島警察所亦屬行政警察系統。"
    },
    {
      id: "police-mc-02", paper: "police", section: "選擇題", type: "mc", number: 2,
      stem: "警察勤務原則說明，何者錯誤？",
      options: [
        { value: "1", text: "不需符合私生活自由原則。" },
        { value: "2", text: "不合警察目的者，不得任意擴張。" },
        { value: "3", text: "以不干涉民事法律關係為原則。" },
        { value: "4", text: "比例原則要素之一為必要性。" }
      ],
      answer: "1", source: "official",
      explanation: "警察勤務仍應尊重人民私生活自由，不得以勤務需要為由任意侵入私領域。"
    },
    {
      id: "police-mc-03", paper: "police", section: "選擇題", type: "mc", number: 3,
      stem: "依警察勤務條例規定，下列何者不是勤務方式之執行？",
      options: [
        { value: "1", text: "勤區查察、巡邏、臨檢、守望、值班及備勤等六大勤務，得視服勤人數及轄區治安情形，採用巡邏及其他方式互換之，但均以巡邏為主。" },
        { value: "2", text: "各級勤務機構因治安需要，得指派人員編組機動隊（組），運用組合警力，在指定地區執行巡邏、路檢、臨檢等勤務。" },
        { value: "3", text: "警察局或分局設有各種警察隊（組），依其任務，分派人員，服行各該專屬勤務。" },
        { value: "4", text: "共同勤務是由服勤人員依據勤務分配表，輪流交替互換實施。" }
      ],
      answer: "1", source: "official",
      explanation: "六大勤務得視服勤人數與轄區治安情形互換運用，條例並未規定「均以巡邏為主」。"
    },
    {
      id: "police-mc-04", paper: "police", section: "選擇題", type: "mc", number: 4,
      stem: "依據警察勤務條例規定，下列何者為錯誤？",
      options: [
        { value: "1", text: "分派勤務，力求勞逸平均，動靜工作務使均勻，藉以調節精神體力。" },
        { value: "2", text: "警察分局為勤務規劃監督機構，負責轄區警察勤務之規劃、指揮、管制、督導及考核，並對重點性勤務，得逕為執行。" },
        { value: "3", text: "警察局或分局設有各種警察隊（組）者，應依其任務，分派人員，服行各該專屬勤務，構成轄區點、線、面，整體勤務之實施。" },
        { value: "4", text: "勤前教育之實施，由警察機關視所轄勤務機構實際情形，規定其實施方式、時間及次數。" }
      ],
      answer: "2", source: "official",
      explanation: "分局是勤務規劃、監督機構，重點性勤務仍由所屬分駐（派出）所或專業單位執行。"
    },
    {
      id: "police-mc-05", paper: "police", section: "選擇題", type: "mc", number: 5,
      stem: "關於執行守望勤務，下列敘述何者錯誤？",
      options: [
        { value: "1", text: "活動範圍可在崗位周圍約 200 公尺內巡視。" },
        { value: "2", text: "執行便衣守望勤務，應依任務需要，力求藏於無形。" },
        { value: "3", text: "固定式守望勤務以預防危害發生為目標，於轄區之重要地點，設置崗位。" },
        { value: "4", text: "為任務需要，得於特定處所設置守望崗。" }
      ],
      answer: "1", source: "official",
      explanation: "守望屬定點勤務，以就地監視、警戒與通報為主，活動範圍不宜過大，200 公尺與定點守望精神不符。"
    },
    {
      id: "police-mc-06", paper: "police", section: "選擇題", type: "mc", number: 6,
      stem: "依據警察勤務條例規定，請問警察局基於何種情況，須分別實施個別勤務與共同勤務時，得以分局或分駐所、派出所為單位，指派員警專責執行勤區查察？",
      options: [
        { value: "1", text: "人口需要。" },
        { value: "2", text: "事實需要。" },
        { value: "3", text: "業務需要。" },
        { value: "4", text: "面積需要。" }
      ],
      answer: "2", source: "official",
      explanation: "條例明定警察局基於「事實需要」，得將個別勤務與共同勤務分別實施。"
    },
    {
      id: "police-mc-07", paper: "police", section: "選擇題", type: "mc", number: 7,
      stem: "警察勤務的運作模式說明，何者錯誤？",
      options: [
        { value: "1", text: "反應式勤務可適時提供民眾所請求的服務。" },
        { value: "2", text: "反應式勤務較可主動打擊無被害者犯罪。" },
        { value: "3", text: "先發式策略易擴大警察機關權限。" },
        { value: "4", text: "社區警政為先發式策略。" }
      ],
      answer: "2", source: "official",
      explanation: "反應式勤務是被動受理報案與服務請求；主動打擊無被害者犯罪要靠先發式（攻勢）勤務。"
    },
    {
      id: "police-mc-08", paper: "police", section: "選擇題", type: "mc", number: 8,
      stem: "警察勤務的編組與分類方式，何者錯誤？",
      options: [
        { value: "1", text: "現行夜間勤務起迄時間為下午 18 時至 24 時。" },
        { value: "2", text: "守望屬個別勤務。" },
        { value: "3", text: "勤區查察就算雙人編組仍為個別勤務。" },
        { value: "4", text: "目前各警察局所轄分駐（派出）所為散在制。" }
      ],
      answer: "2", source: "official",
      explanation: "個別勤務只有勤區查察；守望與巡邏、臨檢、值班、備勤同屬共同勤務。"
    },
    {
      id: "police-mc-09", paper: "police", section: "選擇題", type: "mc", number: 9,
      stem: "下列有關警察分駐所、派出所之設置，何者錯誤？",
      options: [
        { value: "1", text: "警察分駐所與派出所兩者均被定位為警察勤務執行機構。" },
        { value: "2", text: "分駐（派出）所設置的目的有 3 個：即組合警勤區、形成治安面以及供作服務站。" },
        { value: "3", text: "分駐所、派出所設置或裁併所需經費，由該管警察局陳報內政部警政署編列經費。" },
        { value: "4", text: "基於行政裁量權或效率等原因，警察機關在覺得必要時得主動設置分駐（派出）所。" }
      ],
      answer: "3", source: "official",
      explanation: "分駐（派出）所設置或裁併所需經費由地方政府編列，非由警政署編列。"
    },
    {
      id: "police-mc-10", paper: "police", section: "選擇題", type: "mc", number: 10,
      stem: "警察分局地位說明，何者錯誤？",
      options: [
        { value: "1", text: "意義上為派出機關。" },
        { value: "2", text: "亦為轄區內各勤務執行機構督考者。" },
        { value: "3", text: "警察分局著重執行重點性勤務。" },
        { value: "4", text: "不得聯合多個鄉鎮成立分局。" }
      ],
      answer: "4", source: "official",
      explanation: "分局轄區得視治安與地理需要，聯合數個鄉鎮市區設置，故「不得聯合」有誤。"
    },
    {
      id: "police-mc-11", paper: "police", section: "選擇題", type: "mc", number: 11,
      stem: "有關巡邏勤務之敘述，下列何者正確？",
      options: [
        { value: "1", text: "直轄市警察分局警備隊負責執行第二層巡邏網，應配合分駐（派出）所轄區實施點線巡邏或集中機動派遣。" },
        { value: "2", text: "派出所執行第一層巡邏勤務員警於任務目標區實施小區域步巡時，通常以每秒走 1.5 步至 2 步為原則。" },
        { value: "3", text: "直轄市警察局之第三層巡邏網係由交通警察大隊負責，應依地區特性及治安、交通事故資料分析，劃分巡邏區，並配合分駐（派出）所轄區規劃巡邏網，選定巡邏要點。" },
        { value: "4", text: "巡邏員警出勤時應向勤務指揮中心試通無線電，並向該中心報告「出網」列管，巡邏途中約每 20 分鐘定時報告一次，收勤時應報告經允許後始可關閉電台收勤，並將巡邏車開回駐地停放，結束巡邏勤務。" }
      ],
      answer: "2", source: "official",
      explanation: "步巡速度以每秒 1.5～2 步（約每分鐘 90～120 步）為原則；其餘選項的巡邏網層級與派遣方式與規定不符。"
    },
    {
      id: "police-mc-12", paper: "police", section: "選擇題", type: "mc", number: 12,
      stem: "警察分駐（派出）所性質說明，何者錯誤？",
      options: [
        { value: "1", text: "結合數個警勤區為其轄區。" },
        { value: "2", text: "所長應親自規劃、分配各警勤區個別及共同勤務。" },
        { value: "3", text: "警衛派出所無警勤區。" },
        { value: "4", text: "得對外行文。" }
      ],
      answer: "4", source: "official",
      explanation: "分駐（派出）所是勤務執行機構，不得對外行文；對外行文以警察局或分局名義為之。"
    },
    {
      id: "police-mc-13", paper: "police", section: "選擇題", type: "mc", number: 13,
      stem: "關於勤務指揮中心作業規定對於勤務動態管制的要求，下列敘述何者錯誤？",
      options: [
        { value: "1", text: "巡邏勤務原則上採定時報告，每小時不得少於 1 次。" },
        { value: "2", text: "員警駕駛有 GPS 功能警車或攜帶警用行動載具並登入系統者，即可完全免除所有報告義務。" },
        { value: "3", text: "員警遇可疑人車，應於盤查前先向勤指中心報告地點、對象特徵等資訊，盤查結束後亦應回報。" },
        { value: "4", text: "巡邏勤務若違反定時定點報告或勤務抽呼查詢規定，應依警察人員獎懲標準懲處。" }
      ],
      answer: "2", source: "official",
      explanation: "GPS 或行動載具僅能簡化部分定時報告，遇特殊狀況仍須主動回報，不能完全免除。"
    },
    {
      id: "police-mc-14", paper: "police", section: "選擇題", type: "mc", number: 14,
      stem: "依據警察勤務條例規定，在警察分局與警察分駐（派出）所之區別上，警察分局係定位於勤務的規劃、指揮、管制、督導與考核之機構，以及重點性勤務執行的機構，請問在警察分局與警察分駐（派出）所之間，下列何者屬於這兩者最重要的區別？",
      options: [
        { value: "1", text: "敬業精神表現與應對能力。" },
        { value: "2", text: "工作複雜程度與溝通管道。" },
        { value: "3", text: "行政行為表現與經濟規模。" },
        { value: "4", text: "員警民主素養與服從態度。" }
      ],
      answer: "3", source: "official",
      explanation: "關鍵差別在組織定位：分局是規劃、指揮、督導與考核的監督層級，分駐（派出）所是執行層級，反映在行政行為的表現與組織（經濟）規模上。"
    },
    {
      id: "police-mc-15", paper: "police", section: "選擇題", type: "mc", number: 15,
      stem: "警察勤務方式說明，何者錯誤？",
      options: [
        { value: "1", text: "勤區查察可用家戶訪查方式執行。" },
        { value: "2", text: "巡邏時可執行檢查、取締、盤詰等工作。" },
        { value: "3", text: "備勤時主要在勤務機構待命。" },
        { value: "4", text: "臨檢主要工作為警戒、警衛、管制。" }
      ],
      answer: "4", source: "official",
      explanation: "警戒、警衛、管制是守望勤務的主要工作；臨檢以查察、盤詰可疑人事物為主。"
    },
    {
      id: "police-mc-16", paper: "police", section: "選擇題", type: "mc", number: 16,
      stem: "有關定線與非定線巡邏之敘述，何者錯誤？",
      options: [
        { value: "1", text: "定線較易遍及全區。" },
        { value: "2", text: "定線容易監督不易偷勤。" },
        { value: "3", text: "不定線授權巡邏人員自行選定路線。" },
        { value: "4", text: "不定線嚇阻效用較大。" }
      ],
      answer: "1", source: "official",
      explanation: "定線巡邏路線固定、易被掌握而留下死角；要遍及全區並提高嚇阻力，須靠不定線巡邏。"
    },
    {
      id: "police-mc-17", paper: "police", section: "選擇題", type: "mc", number: 17,
      stem: "警察勤務繁重經常影響員警之休假，依「警察機關輪班輪休人員勤休實施要點」規定，有關員警休息時間，下列敘述何者正確？",
      options: [
        { value: "1", text: "依其服務機關之輪班輪休制度排定，服勤人員每週應有二日以上之休息時間。" },
        { value: "2", text: "如因勤務需要，可調整為每二週內有四日之休息，或每四週內有八日之休息。" },
        { value: "3", text: "服勤日中至少應有連續一小時之休息，由各警察機關於服勤時數內調配之，休息時間可計入服勤時數。" },
        { value: "4", text: "服勤人員更換班次時，至少應有連續八小時之休息時間。" }
      ],
      answer: "2", source: "official",
      explanation: "每週原則二日休息，得因勤務需要調整為每二週四日或每四週八日；休息時間不計入服勤時數。"
    },
    {
      id: "police-mc-18", paper: "police", section: "選擇題", type: "mc", number: 18,
      stem: "勤前教育敘述，何者錯誤？",
      options: [
        { value: "1", text: "聯合勤教以派出所為單位。" },
        { value: "2", text: "偵查隊可實施基層勤教。" },
        { value: "3", text: "基層勤教可檢查裝備服儀。" },
        { value: "4", text: "勤教可併計服勤時數。" }
      ],
      answer: "1", source: "official",
      explanation: "基層勤教以分駐（派出）所為單位實施；聯合勤教則由分局（大隊）整合所屬單位辦理。"
    },
    {
      id: "police-mc-19", paper: "police", section: "選擇題", type: "mc", number: 19,
      stem: "警察勤務實施方式與規劃，會隨時代演進而有所不同，有關警察勤務規劃之敘述，下列何者錯誤？",
      options: [
        { value: "1", text: "警察勤務有賴縝密規劃，規劃上大約可分為集中制、散在制、集中散在併用制。" },
        { value: "2", text: "規劃原則必須是全面性，考量地區治安特性及人力狀況，一天 24 小時持續不斷的警戒。" },
        { value: "3", text: "勤務規劃重心，從早期以著重破案率而強調專業化警政，並以犯罪偵查為重點的方式，逐步調整為破案與預防並重模式。" },
        { value: "4", text: "社區警政的基本精神是運用民力以預防犯罪，在警察勤務中，則以勤區查察之家戶訪查方式為手段，強調犯罪預防、為民服務及社會治安調查等任務。" }
      ],
      answer: "3", source: "official",
      explanation: "本項敘述的階段與因果（破案率、專業化警政、犯罪偵查）與講義所載勤務規劃重心的演進不符；其餘三項均為講義原文，建議搭配上課講義複習。"
    },
    {
      id: "police-mc-20", paper: "police", section: "選擇題", type: "mc", number: 20,
      stem: "聯合指揮所開設敘述，何者錯誤？",
      options: [
        { value: "1", text: "3 級開設時由勤指中心主任督導運作。" },
        { value: "2", text: "發生社會治安狀況時由長官核定 2 級開設。" },
        { value: "3", text: "1 級開設時由幕僚長主持。" },
        { value: "4", text: "3 級開設時編組人員保持正常作息。" }
      ],
      answer: "3", source: "official",
      explanation: "聯合指揮所 1 級開設由機關首長（局長）主持，非由幕僚長主持。"
    }
  ]
};
