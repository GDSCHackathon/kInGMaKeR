package com.Jinsu.gdsc.controller;


import com.Jinsu.gdsc.entitiy.Adjective;
import com.Jinsu.gdsc.entitiy.Noun;
import com.Jinsu.gdsc.repository.ARepository;
import com.Jinsu.gdsc.repository.NRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class DataController {

    private final ARepository aRepository;
    private final NRepository nRepository;

    @Autowired
    public DataController(ARepository aRepository, NRepository nRepository) {
        this.aRepository = aRepository;
        this.nRepository = nRepository;
    }



    /**
     *
     * 형용사 데이터 삽입
     */
    @ResponseBody
    @GetMapping("AData")
    public String setAData() {
        String[] adjectives = {"엉뚱한", "신나는", "낙천적인", "씁쓸한", "멍청한", "하찮은"
                , "무기력한", "엉뚱한", "행복한", "희망찬", "귀여운", "짜릿한", "다정한", "이기적인"
                , "다정한", "늙은", "멍청한", "개방적인", "부담스러운", "조용한", "절망적인", "못난"
                , "졸린", "어린", "조용한", "단단한", "여유러운", };

        for (int i = 0; i < adjectives.length; i++) {
            Adjective adjective = new Adjective();
            adjective.setName(adjectives[i]);
            aRepository.save(adjective);
        }
        return "형용사 데이터생성";
    }

    /**
     *
     * 명사 데이터 삽입
     */
    @ResponseBody
    @GetMapping("NData")
    public String setNData() {
        String[] nouns = {"나무", "노트북", "도넛", "택시", "심리학자", "참죽나무"
                , "생토마토", "톱니바퀴", "도시락", "콜라", "신발끈", "엔진오일", "피아노", "항아리"
                , "백과사전", "땅콩", "박테리아", "나무껍질", "우럭", "엉덩이", "오카리나", "대관람차"
                , "왕똥파리", "하마", "교수님", "깃털", "사랑꾼"};

        for (int i = 0; i < nouns.length; i++) {
            Noun noun = new Noun();
            noun.setName(nouns[i]);
            nRepository.save(noun);
        }
        return "명사 데이터생성";
    }
}

