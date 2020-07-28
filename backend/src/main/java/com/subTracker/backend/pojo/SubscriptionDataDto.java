package com.subTracker.backend.pojo;

import com.subTracker.backend.model.SubscriptionData;
import lombok.Getter;
import lombok.Setter;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public class SubscriptionDataDto {

    @NotBlank
    private String name;

    @NotNull
    @Setter
    @Getter
    private int value;

    @NotBlank
    @Setter
    @Getter
    private Boolean status;

    public SubscriptionDataDto(SubscriptionData subscriptionData) {
        this.name = subscriptionData.getName();
        this.value = subscriptionData.getValue();
        this.status = subscriptionData.getStatus();
    }
}
