package com.subTracker.backend.repository;

import com.subTracker.backend.model.SubscriptionData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface SubscriptionDataRepository extends JpaRepository<SubscriptionData, Long> {
    Optional<SubscriptionData> findByName(String name);
}
