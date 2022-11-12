package com.Jinsu.gdsc.service;


import com.Jinsu.gdsc.entitiy.Adjective;
import com.Jinsu.gdsc.entitiy.Noun;
import com.Jinsu.gdsc.repository.ARepository;
import com.Jinsu.gdsc.repository.NRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ResultService {
    private final ARepository aRepository;
    private final NRepository nRepository;

    @Autowired
    public ResultService(ARepository aRepository, NRepository nRepository) {
        this.aRepository = aRepository;
        this.nRepository = nRepository;
    }

    public List<Adjective> getRandomAdjective() {
        List<Adjective> list = aRepository.findAll();

        return list;
    }

    public List<Noun> getRandomNoun() {
        List<Noun> list = nRepository.findAll();
        return list;
    }
}
