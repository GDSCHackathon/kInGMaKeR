package com.Jinsu.gdsc.repository;

import com.Jinsu.gdsc.entitiy.Adjective;
import com.Jinsu.gdsc.entitiy.Noun;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NRepository extends JpaRepository <Noun, Long> {
    @Query(value = "SELECT * FROM Noun order by RAND() limit 1", nativeQuery = true)
    List<Noun> findAll();

}
