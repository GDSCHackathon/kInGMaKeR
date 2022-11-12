package com.Jinsu.gdsc.controller;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URL;
import java.util.HashMap;
import java.util.Map;

@CrossOrigin(originPatterns = "http://localhost:3000") //cors 에러 해결
@org.springframework.web.bind.annotation.RestController
public class RestController {

    HashMap<String, String> map = new HashMap<>();

    @GetMapping("/result")
    public HashMap<String, String> useApi() throws IOException, JSONException {
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
        map.put("result", result);ㅐㅑㅔ
        return map;
    }
}
