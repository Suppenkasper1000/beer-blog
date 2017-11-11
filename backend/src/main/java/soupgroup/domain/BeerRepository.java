package soupgroup.domain;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

@Component
public interface BeerRepository extends JpaRepository<BeerEntity, Long> {
}




