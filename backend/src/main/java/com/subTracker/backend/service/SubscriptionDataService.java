package com.subTracker.backend.service;

import com.subTracker.backend.exceptions.SubscriptionNotFoundException;
import com.subTracker.backend.model.SubscriptionData;
import com.subTracker.backend.pojo.SubscriptionDataDto;
import com.subTracker.backend.repository.SubscriptionDataRepository;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service
public class SubscriptionDataService {
    @Resource
    SubscriptionDataRepository subscriptionDataRepository;

    public SubscriptionDataDto getBySubscriptionName(String subscriptionName) throws SubscriptionNotFoundException {
        SubscriptionData subscriptionData = subscriptionDataRepository.findByName(subscriptionName).orElseThrow(SubscriptionNotFoundException::new);
        return new SubscriptionDataDto(subscriptionData);
    }

}
