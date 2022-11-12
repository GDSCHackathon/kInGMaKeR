package com.Jinsu.gdsc.service;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URL;

@Service
public class ResultService {


    public String getResult() throws JSONException, IOException {
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
        return result;
    }
}
