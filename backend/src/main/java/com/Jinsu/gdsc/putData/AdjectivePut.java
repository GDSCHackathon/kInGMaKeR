package com.Jinsu.gdsc.putData;

import com.Jinsu.gdsc.entitiy.Adjective;
import com.Jinsu.gdsc.repository.ARepository;
import org.springframework.beans.factory.annotation.Autowired;


public class AdjectivePut {

    private final ARepository aRepository;

    @Autowired
    public AdjectivePut(ARepository aRepository) {
        this.aRepository = aRepository;
    }

    public static void main(String[] args) {
        String[] adjectives = {"엉뚱한", "신나는", "낙천적인", "씁쓸한", "멍청한", "하찮은"
                ,"무기력한", "엉뚱한", "행복한", "희망찬", "귀여운", "짜릿한", "다정한", "이기적인"
                , "다정한", "늙은", "멍청한", "개방적인", "부담스러운", "조용한", "절망적인", "못난"
                , "졸린"};

        for(int i = 0; i< adjectives.length; i++){
            Adjective adjective = new Adjective();
            adjective.setName(adjectives[i]);

        }
    }



}
