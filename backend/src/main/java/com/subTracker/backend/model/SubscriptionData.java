package com.subTracker.backend.model;

import lombok.Getter;
import lombok.Setter;
import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Entity
public class SubscriptionData {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Setter
    @Getter
    private String name;

    @NotNull
    @Setter
    @Getter
    private int value;

    @NotBlank
    @Setter
    @Getter
    private Boolean status;
}
