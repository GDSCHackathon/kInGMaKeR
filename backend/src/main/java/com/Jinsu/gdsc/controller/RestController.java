package com.Jinsu.gdsc.controller;

import com.Jinsu.gdsc.service.ResultService;
import org.json.JSONException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import java.io.IOException;
import java.util.HashMap;

@CrossOrigin(originPatterns = "http://localhost:3000") //cors 에러 해결
@org.springframework.web.bind.annotation.RestController
public class RestController {

    private final ResultService resultService;


    @Autowired
    public RestController(ResultService resultService) {
        this.resultService = resultService;
    }

    @GetMapping("/result")
    public HashMap<String, String> useApi() throws IOException, JSONException {
        HashMap<String, String> map = new HashMap<>();

        String result = resultService.getResult();
        map.put("result", result);
        return map;
    }
}
