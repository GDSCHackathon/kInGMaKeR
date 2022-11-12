package com.Jinsu.gdsc.controller;

import com.Jinsu.gdsc.entitiy.Adjective;
import com.Jinsu.gdsc.entitiy.Noun;
import com.Jinsu.gdsc.service.ResultService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class ResultController {

    private final ResultService resultService;


    @Autowired
    public ResultController(ResultService resultService) {
        this.resultService = resultService;
    }

    @ResponseBody
    @GetMapping("/result")
    public String result() {
        List<Adjective> randomAdjective = resultService.getRandomAdjective();
        List<Noun> randomNoun = resultService.getRandomNoun();
        for(int i = 0; i< randomAdjective.size(); i++){
            System.out.println(randomAdjective.get(i).getName());
        }
        for(int i = 0; i<randomNoun.size(); i++){
            System.out.println(randomNoun.get(i).getName());
        }


        return "OK";
    }

}
