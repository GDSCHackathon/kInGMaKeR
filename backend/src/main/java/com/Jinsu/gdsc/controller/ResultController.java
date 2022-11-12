package com.Jinsu.gdsc.controller;

import com.Jinsu.gdsc.entitiy.Adjective;
import com.Jinsu.gdsc.entitiy.Noun;
import com.Jinsu.gdsc.service.ResultService;
import org.apache.tomcat.util.json.JSONParser;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URL;
import java.util.Iterator;
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

        String result = randomAdjective.get(0).getName() + randomNoun.get(0).getName();
        System.out.println(result);

        return "OK";
    }

    @ResponseBody
    @GetMapping("useApi")
    public String useApi() throws IOException, JSONException {
        URL url = null;
        try {
            url = new URL("https://nickname.hwanmoo.kr/?format=json&count=2");  //닉네임 자동 생성 api
        } catch (Exception e) {
            e.printStackTrace();
        }
        BufferedReader bf;

        bf = new BufferedReader(new InputStreamReader(url.openStream(), "UTF-8"));
        String json =""; //전체 json 받음

        json = bf.readLine();

        JSONObject jsonObject = new JSONObject(json);
        String words = jsonObject.getString("words"); // words : 랜덤 닉네임
        int index = words.indexOf(",");
        String result = "";
        for(int i = 2; i<index-1; i++){
            result += words.charAt(i);
        }
        System.out.println(result);
        return "api_OK";
    }

}
