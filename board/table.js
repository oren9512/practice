//번호           제목          글쓴이    조회수
//-------------------------------------------
// 1     러너스하이 가입인사    박재덕     35
// 2     자기 소개 입니다!      권경진     27
// 3     선택자는 무엇인가요?   이경식     11  
// 4     숭실대 맛집 목록       윤시현     79

// 1. 위 테이블의 목록을 각각 object로 만들어, 전체를 Array 묶어 주세요.
// 각 key 값은 번호: number, 제목: title, 글쓴이: writer, 조회수: view
let boardList = [
  {number: 1, title: '러너스하이 가입인사', writer: '박재덕', view: 35},
  {number: 2, title: '자기 소개 입니다', writer: '권경진', view: 27},
  {number: 3, title: '선택자는 무엇인가요?', writer: '이경식', view: 11},
  {number: 4, title: '숭실대 맛집 목록', writer: '윤시현', view: 79}
]

var list01 = Object.keys(boardList[0])
var list02 = Object.keys(boardList)

  var table = document.getElementById("app1")

  for(var i in list02){

    var numLow = document.createElement("tr")

      for(var j in list01){
      
      var num = document.createElement("td")

      numLow.appendChild(num)      
      
      num.innerHTML = boardList[i][list01[j]]        
      } 
    table.appendChild(numLow)
  }
// 2. 위에서 만든 Array에 다음 Row 를 추가해 주세요.
//번호           제목          글쓴이    조회수
//-------------------------------------------
// 5     자바는 재미있어요!     이향은     52
  let arr = [
    {number: 5, title : '자바는 재미잇어요!', writer : '이향은', view : 52}
  ]

    var rows = Object.keys(arr[0])
    var rows2 = Object.keys(arr)
    var tabl = document.getElementById("app1")
    
    for(var w in  rows2){

      var cols = document.createElement("tr")

    for(var k in rows){
      var row1 = document.createElement("td")

      cols.appendChild(row1)

      row1.innerHTML = arr[w][rows[k]]
    }
    tabl.appendChild(cols)
  }

