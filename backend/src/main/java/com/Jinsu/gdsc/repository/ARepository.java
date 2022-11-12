package com.Jinsu.gdsc.repository;

import com.Jinsu.gdsc.entitiy.Adjective;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ARepository extends JpaRepository <Adjective, Long> {

    @Query(value = "SELECT * FROM Adjective order by RAND() limit 1", nativeQuery = true)
    List<Adjective> findAll();
}
