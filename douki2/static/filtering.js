var NET_REVIEW = 3.0
var NO_RECOMMEND_ITEM_ATDNC = 3;
var NO_RECOMMEND_ITEM_TANYI = 3;
var NO_RECOMMEND_ITEM_SCORE = 3;
var test = 3;

var matrix_raku;
var matrix_jujitu;
var matrix_score;
var itemList;

matrix_raku = {
  "640306": {
    "m_1_1": 3.0,
    "m_1_2": 0,
    "m_1_3": 0,
    "m_1_4": 0,
    "m_2_1": 2.0,
    "m_2_2": 0,
    "t_1_1": 1.0,
    "t_1_2": 0,
    "t_1_3": 0,
    "t_2_1": 4.0,
    "t_2_2": 0,
    "w_1_1": 0.0,
    "w_1_2": 3.0,
    "w_1_3": 0,
    "w_2_1": 4.0,
    "w_2_2": 0
  }, // User1 ､
  "639765": {
    "m_1_1": 4.0,
    "m_1_2": 0,
    "m_1_3": 0,
    "m_1_4": 0,
    "m_2_1": 2.0,
    "m_2_2": 0,
    "t_1_1": 1.0,
    "t_1_2": 0,
    "t_1_3": 0,
    "t_2_1": 0.0,
    "t_2_2": 4.0,
    "w_1_1": 5.0,
    "w_1_2": 0.0,
    "w_1_3": 0.0,
    "w_2_1": 4.0,
    "w_2_2": 0
  }, // User2 ､
  "639265": {
    "m_1_1": 2.0,
    "m_1_2": 0,
    "m_1_3": 0,
    "m_1_4": 0,
    "m_2_1": 2.0,
    "m_2_2": 0,
    "t_1_1": 2.0,
    "t_1_2": 0,
    "t_1_3": 0,
    "t_2_1": 4.0,
    "t_2_2": 0.0,
    "w_1_1": 0.0,
    "w_1_2": 3.0,
    "w_1_3": 0.0,
    "w_2_1": 4.0,
    "w_2_2": 0
  }, // User3 ､
  "634587": {
    "m_1_1": 0.0,
    "m_1_2": 4.0,
    "m_1_3": 0,
    "m_1_4": 0,
    "m_2_1": 3.0,
    "m_2_2": 0,
    "t_1_1": 4.0,
    "t_1_2": 0,
    "t_1_3": 0,
    "t_2_1": 3.0,
    "t_2_2": 0.0,
    "w_1_1": 0.0,
    "w_1_2": 0.0,
    "w_1_3": 4.0,
    "w_2_1": 4.0,
    "w_2_2": 0
  },
  "345436": {
    "m_1_1": 0.0,
    "m_1_2": 0,
    "m_1_3": 3,
    "m_1_4": 0,
    "m_2_1": 0.0,
    "m_2_2": 3.0,
    "t_1_1": 0.0,
    "t_1_2": 4.0,
    "t_1_3": 0,
    "t_2_1": 0.0,
    "t_2_2": 4.0,
    "w_1_1": 4.0,
    "w_1_2": 0.0,
    "w_1_3": 0.0,
    "w_2_1": 4.0,
    "w_2_2": 0
  },
  "638976": {
    "m_1_1": 0.0,
    "m_1_2": 0,
    "m_1_3": 0,
    "m_1_4": 5,
    "m_2_1": 0.0,
    "m_2_2": 4.0,
    "t_1_1": 0.0,
    "t_1_2": 0,
    "t_1_3": 4.0,
    "t_2_1": 0.0,
    "t_2_2": 4.0,
    "w_1_1": 4.0,
    "w_1_2": 0.0,
    "w_1_3": 0.0,
    "w_2_1": 4.0,
    "w_2_2": 0
  },
  "145634": {
    "m_1_1": 0.0,
    "m_1_2": 0.0,
    "m_1_3": 0.0,
    "m_1_4": 3.0,
    "m_2_1": 0.0,
    "m_2_2": 4.0,
    "t_1_1": 0.0,
    "t_1_2": 5.0,
    "t_1_3": 0,
    "t_2_1": 0.0,
    "t_2_2": 4.0,
    "w_1_1": 0.0,
    "w_1_2": 0.0,
    "w_1_3": 4.0,
    "w_2_1": 0.0,
    "w_2_2": 4.0
  }
};

matrix_jujitu = {
  "640398": {
    "m_1_1": 2.0,
    "m_1_2": 0,
    "m_1_3": 0,
    "m_1_4": 0,
    "m_2_1": 2.0,
    "m_2_2": 0,
    "t_1_1": 3.0,
    "t_1_2": 0,
    "t_1_3": 0,
    "t_2_1": 2.0,
    "t_2_2": 0.0,
    "w_1_1": 3.0,
    "w_1_2": 0.0,
    "w_1_3": 0.0,
    "w_2_1": 4.0,
    "w_2_2": 0
  },
  "640315": {
    "m_1_1": 2.0,
    "m_1_2": 0,
    "m_1_3": 0,
    "m_1_4": 0,
    "m_2_1": 3.0,
    "m_2_2": 0,
    "t_1_1": 3.0,
    "t_1_2": 0,
    "t_1_3": 0,
    "t_2_1": 3.0,
    "t_2_2": 0.0,
    "w_1_1": 2.0,
    "w_1_2": 0.0,
    "w_1_3": 0.0,
    "w_2_1": 4.0,
    "w_2_2": 0
  },
  "639675": {
    "m_1_1": 3.0,
    "m_1_2": 0,
    "m_1_3": 0,
    "m_1_4": 0,
    "m_2_1": 3.0,
    "m_2_2": 0,
    "t_1_1": 2.0,
    "t_1_2": 0,
    "t_1_3": 0,
    "t_2_1": 1.0,
    "t_2_2": 0.0,
    "w_1_1": 0.0,
    "w_1_2": 0.0,
    "w_1_3": 3.0,
    "w_2_1": 4.0,
    "w_2_2": 0
  },
  "638765": {
    "m_1_1": 3.0,
    "m_1_2": 0,
    "m_1_3": 0,
    "m_1_4": 0,
    "m_2_1": 2.0,
    "m_2_2": 0,
    "t_1_1": 4.0,
    "t_1_2": 0,
    "t_1_3": 0,
    "t_2_1": 0.0,
    "t_2_2": 4.0,
    "w_1_1": 5.0,
    "w_1_2": 0.0,
    "w_1_3": 0.0,
    "w_2_1": 3.0,
    "w_2_2": 0
  },
  "123456": {
    "m_1_1": 3.0,
    "m_1_2": 0,
    "m_1_3": 0,
    "m_1_4": 0,
    "m_2_1": 0.0,
    "m_2_2": 3,
    "t_1_1": 3.0,
    "t_1_2": 0,
    "t_1_3": 0,
    "t_2_1": 3.0,
    "t_2_2": 0.0,
    "w_1_1": 2.0,
    "w_1_2": 0.0,
    "w_1_3": 0.0,
    "w_2_1": 0.0,
    "w_2_2": 2.0
  },
  "145632": {
    "m_1_1": 3.0,
    "m_1_2": 0,
    "m_1_3": 0,
    "m_1_4": 0,
    "m_2_1": 2.0,
    "m_2_2": 0,
    "t_1_1": 4.0,
    "t_1_2": 0,
    "t_1_3": 0,
    "t_2_1": 2.0,
    "t_2_2": 0.0,
    "w_1_1": 0.0,
    "w_1_2": 0.0,
    "w_1_3": 4.0,
    "w_2_1": 1.0,
    "w_2_2": 0
  },
  "145634": {
    "m_1_1": 0.0,
    "m_1_2": 0.0,
    "m_1_3": 0.0,
    "m_1_4": 3.0,
    "m_2_1": 0.0,
    "m_2_2": 4.0,
    "t_1_1": 0.0,
    "t_1_2": 5.0,
    "t_1_3": 0,
    "t_2_1": 0.0,
    "t_2_2": 4.0,
    "w_1_1": 0.0,
    "w_1_2": 0.0,
    "w_1_3": 4.0,
    "w_2_1": 0.0,
    "w_2_2": 4.0
  }
};

matrix_score = {
  "640398": {
    "m_1_1": 2.0,
    "m_1_2": 0,
    "m_1_3": 0,
    "m_1_4": 0,
    "m_2_1": 2.0,
    "m_2_2": 0,
    "t_1_1": 3.0,
    "t_1_2": 0,
    "t_1_3": 0,
    "t_2_1": 2.0,
    "t_2_2": 0.0,
    "w_1_1": 3.0,
    "w_1_2": 0.0,
    "w_1_3": 0.0,
    "w_2_1": 4.0,
    "w_2_2": 0
  },
  "640315": {
    "m_1_1": 2.0,
    "m_1_2": 0,
    "m_1_3": 0,
    "m_1_4": 0,
    "m_2_1": 3.0,
    "m_2_2": 0,
    "t_1_1": 3.0,
    "t_1_2": 0,
    "t_1_3": 0,
    "t_2_1": 3.0,
    "t_2_2": 0.0,
    "w_1_1": 2.0,
    "w_1_2": 0.0,
    "w_1_3": 0.0,
    "w_2_1": 4.0,
    "w_2_2": 0
  },
  "639675": {
    "m_1_1": 3.0,
    "m_1_2": 0,
    "m_1_3": 0,
    "m_1_4": 0,
    "m_2_1": 3.0,
    "m_2_2": 0,
    "t_1_1": 2.0,
    "t_1_2": 0,
    "t_1_3": 0,
    "t_2_1": 1.0,
    "t_2_2": 0.0,
    "w_1_1": 0.0,
    "w_1_2": 0.0,
    "w_1_3": 3.0,
    "w_2_1": 4.0,
    "w_2_2": 0
  },
  "638765": {
    "m_1_1": 3.0,
    "m_1_2": 0,
    "m_1_3": 0,
    "m_1_4": 0,
    "m_2_1": 2.0,
    "m_2_2": 0,
    "t_1_1": 4.0,
    "t_1_2": 0,
    "t_1_3": 0,
    "t_2_1": 0.0,
    "t_2_2": 4.0,
    "w_1_1": 5.0,
    "w_1_2": 0.0,
    "w_1_3": 0.0,
    "w_2_1": 3.0,
    "w_2_2": 0
  },
  "123456": {
    "m_1_1": 3.0,
    "m_1_2": 0,
    "m_1_3": 0,
    "m_1_4": 0,
    "m_2_1": 0.0,
    "m_2_2": 3,
    "t_1_1": 3.0,
    "t_1_2": 0,
    "t_1_3": 0,
    "t_2_1": 3.0,
    "t_2_2": 0.0,
    "w_1_1": 2.0,
    "w_1_2": 0.0,
    "w_1_3": 0.0,
    "w_2_1": 0.0,
    "w_2_2": 2.0
  },
  "145632": {
    "m_1_1": 3.0,
    "m_1_2": 0,
    "m_1_3": 0,
    "m_1_4": 0,
    "m_2_1": 2.0,
    "m_2_2": 0,
    "t_1_1": 4.0,
    "t_1_2": 0,
    "t_1_3": 0,
    "t_2_1": 2.0,
    "t_2_2": 0.0,
    "w_1_1": 0.0,
    "w_1_2": 0.0,
    "w_1_3": 4.0,
    "w_2_1": 1.0,
    "w_2_2": 0
  },
  "145634": {
    "m_1_1": 0.0,
    "m_1_2": 0.0,
    "m_1_3": 0.0,
    "m_1_4": 3.0,
    "m_2_1": 0.0,
    "m_2_2": 4.0,
    "t_1_1": 0.0,
    "t_1_2": 5.0,
    "t_1_3": 0,
    "t_2_1": 0.0,
    "t_2_2": 4.0,
    "w_1_1": 0.0,
    "w_1_2": 0.0,
    "w_1_3": 4.0,
    "w_2_1": 0.0,
    "w_2_2": 4.0
  }
};


itemList = {
  "m_1_1": {
    "title": "月曜1限　ボーカロイド音楽論"
  },
  "m_1_2": {
    "title": "月曜1限　ぷよ基礎"
  },
  "m_1_3": {
    "title": "月曜1限　知識と無能"
  },
  "m_1_4": {
    "title": "月曜1限　環境エネルギー概論"
  },
  "m_2_1": {
    "title": "月曜2限　社畜"
  },
  "m_2_2": {
    "title": "月曜2限　ほりきゅん"
  },
  "t_1_1": {
    "title": "火曜1限　材料力学"
  },
  "t_1_2": {
    "title": "火曜1限　流体力学"
  },
  "t_1_3": {
    "title": "火曜1限　数理手法"
  },
  "t_2_1": {
    "title": "火曜2限　ツイッター1列"
  },
  "t_2_2": {
    "title": "火曜2限　ティンダ1列"
  },
  "w_1_1": {
    "title": "水曜1限　社会システム工学"
  },
  "w_1_2": {
    "title": "水曜1限　安全学"
  },
  "w_1_3": {
    "title": "水曜1限　システム創成学"
  },
  "w_2_1": {
    "title": "水曜2限　ビジネス入門"
  },
  "w_2_2": {
    "title": "水曜2限　ビジネス入眠"
  }
};




function binarize(_matrix) {
  var binarizedMatrix = {};
  var userIds = Object.keys(_matrix);
  for (var i = 0; i < userIds.length; i++) {
    var userId = userIds[i];
    var binaries = {};
    var count = 0;
    var reviews = _matrix[userId]
    var itemIds = Object.keys(reviews)
    for (var j = 0; j < itemIds.length; j++) {
      var itemId = itemIds[j];
      var review = Number(reviews[itemId]);
      if (review >= NET_REVIEW) {
        count++;
        binaries[itemId] = 1.0;
      }
    }

    if (count > 1) {
      binarizedMatrix[userId] = binaries;
    }

  }
  return binarizedMatrix;
}



function countCollaborative(_matrix) {
  var collaborativeMatrix = {};
  var userIds = Object.keys(_matrix);
  for (var i = 0; i < userIds.length; i++) {
    var userId = userIds[i];
    var itemIds = Object.keys(_matrix[userId]);
    for (var n = 0; n < itemIds.length; n++) {
      var rowItemId = itemIds[n];
      var collaborativeRow = {};
      if (rowItemId in collaborativeMatrix) {
        collaborativeRow = collaborativeMatrix[rowItemId];
      }
      for (var m = 0; m < itemIds.length; m++) {
        var colItemId = itemIds[m];
        if (colItemId == rowItemId) {
          continue;
        }
        if (colItemId in collaborativeRow) {
          collaborativeRow[colItemId]++;
        } else {
          collaborativeRow[colItemId] = 1;
        }
      }
      collaborativeMatrix[rowItemId] = collaborativeRow;
    }
  }
  return collaborativeMatrix;
}


function calcProbability(_matrix) {
  var probMatrix = {};
  var itemIds = Object.keys(_matrix);
  for (var n = 0; n < itemIds.length; n++) {
    var rowItemId = itemIds[n];
    var itemRow = _matrix[rowItemId];
    var sum = 0;
    colItemIds = Object.keys(itemRow);
    for (var m = 0; m < colItemIds.length; m++) {
      var colItemId = colItemIds[m];
      sum += itemRow[colItemId];
    }
    if (sum < 1) {
      continue;
    }
    for (var m = 0; m < colItemIds.length; m++) {
      var colItemId = colItemIds[m];
      itemRow[colItemId] = itemRow[colItemId] / sum;
    }
    probMatrix[rowItemId] = itemRow;
  }
  return probMatrix;
}


function recommendByRank(probabilities, returnCount) {
  var recommendList = [];
  var arr = [];
  var itemIds = Object.keys(probabilities);

  for (var i = 0; i < itemIds.length; i++) {
    var itemId = itemIds[i];
    arr.push({
      item: itemId,
      value: probabilities[itemId]
    });
  }
  arr.sort(function(obj1, obj2) {
    var val1 = obj1.value;
    var val2 = obj2.value;
    if (val1 > val2) return -1;
    if (val1 < val2) return 1;
    return 0;
  });

  if (arr.length <= returnCount) {
    for (var i = 0; i < arr.length; i++) {
      var obj = arr[i];
      recommendList.push(obj.item);
    }
    return recommendList;
  }

  if (arr[returnCount - 1].value > arr[returnCount].value) {
    for (var i = 0; i < returnCount; i++) {
      recommendList.push(arr[i].item);
    }
    return recommendList;
  }
  var sameProb = arr[returnCount - 1].value;
  var i = 0;
  while (arr[i].value > sameProb) {
    recommendList.push(arr[i++].item);
  }
  var sameProbItems = [];
  while (i < arr.length && arr[i].value == sameProb) {
    sameProbItems.push(arr[i++].item);
  }
  while (recommendList.length < returnCount) {
    var randIndex = Math.floor(Math.random() * sameProbItems.length);
    recommendList.push(sameProbItems.splice(randIndex, 1)[0]);
  }
  return recommendList;
}

/**
function createItemList() {
  var itemIds = Object.keys(itemList);
  for (var i = 0; i < itemIds.length; i++) {
    var itemId = itemIds[i];
    var item = itemList[itemId];
    var li = document.createElement("li");
    li.className = "movie_item";
    li.id = itemId;
    li.innerHTML = item.title;
    document.getElementById("movie_list").appendChild(li);
  };
}
*/

function createRmdList(recommendList_1, recommendList_2, recommendList_3) {
  // document.getElementById("select_subject").innerHTML = itemList[selectMovieId].title;
  document.getElementById("rmd_atdance").innerHTML = "";
  document.getElementById("rmd_tanyi").innerHTML = "";
  document.getElementById("rmd_score").innerHTML = "";
  if (recommendList_1.length == 0) {
    $("#rmd_atdance").append("まだそのデータはありません");
    return;
  }
  if (recommendList_2.length == 0) {
    $("#rmd_tanyi").append("まだそのデータはありません");
    return;
  }
  if (recommendList_3.length == 0) {
    $("#rmd_score").append("まだそのデータはありません");
    return;
  }

  for (var i = 0; i < recommendList_1.length; i++) {
    var itemId = recommendList_1[i];
    var li = document.createElement("li");
    li.innerHTML = itemList[itemId].title;
    document.getElementById("rmd_atdance").appendChild(li);
  }
  for (var i = 0; i < recommendList_2.length; i++) {
    var itemId = recommendList_2[i];
    var li = document.createElement("li");
    li.innerHTML = itemList[itemId].title;
    document.getElementById("rmd_tanyi").appendChild(li);
  }
  for (var i = 0; i < recommendList_3.length; i++) {
    var itemId = recommendList_3[i];
    var li = document.createElement("li");
    li.innerHTML = itemList[itemId].title;
    document.getElementById("rmd_score").appendChild(li);
  }
}

// function show_change(selecter) {
//   $(selecter).on("change", function() {
//     var Item_Id = $(this).val();
//     if (!(Item_Id in itemList)) {
//       console.log("まだその教科はありません")
//     }
//
//     var SubjectName = itemList[Item_Id];
//     if (Item_Id in matrix_raku) {
//       rmdList_result_raku = recommendByRank(matrix_raku[Item_Id], NO_RECOMMEND_ITEM);
//     }
//     if (Item_Id in matrix_jujitu) {
//       rmdList_result_jujitu = recommendByRank(matrix_jujitu[Item_Id], NO_RECOMMEND_ITEM);
//     }
//     //console.log(itemList[Item_Id]);
//     // createModalWindow(Item_Id, rmdList_result_raku, rmdList_result_jujitu);
//     // showModalWindow();
//     //
//     // kakikae();;
//   })
// }


$(function() {

  // Step 1
  matrix_raku = binarize(matrix_raku);
  matrix_jujitu = binarize(matrix_jujitu);
  matrix_score = binarize(matrix_score);

  // Step 2
  matrix_raku = countCollaborative(matrix_raku);
  matrix_jujitu = countCollaborative(matrix_jujitu);
  matrix_score = countCollaborative(matrix_score);
  // Step 3
  matrix_raku = calcProbability(matrix_raku);
  matrix_jujitu = calcProbability(matrix_jujitu);
  matrix_score = calcProbability(matrix_score);
  // Step 4


  // display_rmd("#display_atdance")
  // NO_RECOMMEND_ITEM_ATDNC = test;
  // display_rmd("#display_tanyi")
  // NO_RECOMMEND_ITEM_TANYI = test;
  // display_rmd("#display_score")
  // NO_RECOMMEND_ITEM_SCORE = test;
  //
  // if (Item_Id in matrix_raku) {
  //   rmdList_result_raku = recommendByRank(matrix_raku[Item_Id], NO_RECOMMEND_ITEM_ATDNC);
  // }

  $("#display_atdance").on("change", function() {
    NO_RECOMMEND_ITEM_ATDNC = $(this).val();
    if (Item_Id in matrix_raku) {
      rmdList_result_raku = recommendByRank(matrix_raku[Item_Id], NO_RECOMMEND_ITEM_ATDNC);
      createRmdList(rmdList_result_raku, rmdList_result_jujitu, rmdList_result_score);
      
    }
  })

  $("#display_tanyi").on("change", function() {
    NO_RECOMMEND_ITEM_TANYI = $(this).val();
    if (Item_Id in matrix_jujitu) {
      rmdList_result_jujitu = recommendByRank(matrix_jujitu[Item_Id], NO_RECOMMEND_ITEM_TANYI);
      createRmdList(rmdList_result_raku, rmdList_result_jujitu, rmdList_result_score);
    }
  })

  $("#display_score").on("change", function() {
    NO_RECOMMEND_ITEM_SCORE = $(this).val();
    if (Item_Id in matrix_score) {
      rmdList_result_score = recommendByRank(matrix_score[Item_Id], NO_RECOMMEND_ITEM_SCORE);
      createRmdList(rmdList_result_raku, rmdList_result_jujitu, rmdList_result_score);
    }
  })

  Item_Id = "m_1_1";

  if (Item_Id in matrix_raku) {
    rmdList_result_raku = recommendByRank(matrix_raku[Item_Id], NO_RECOMMEND_ITEM_ATDNC);
  }
  if (Item_Id in matrix_jujitu) {
    rmdList_result_jujitu = recommendByRank(matrix_jujitu[Item_Id], NO_RECOMMEND_ITEM_TANYI);
  }
  if (Item_Id in matrix_score) {
    rmdList_result_score = recommendByRank(matrix_score[Item_Id], NO_RECOMMEND_ITEM_SCORE);
  }

  createRmdList(rmdList_result_raku, rmdList_result_jujitu, rmdList_result_score);
  // if (Item_Id in matrix_jujitu) {
  //   rmdList_result_jujitu = recommendByRank(matrix_jujitu[Item_Id], NO_RECOMMEND_ITEM_TANYI);
  // }
  // if (Item_Id in matrix_score) {
  //   rmdList_result_score = recommendByRank(matrix_score[Item_Id], NO_RECOMMEND_ITEM_SCORE);
  // }



});
